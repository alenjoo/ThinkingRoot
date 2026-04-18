#!/bin/sh
# ThinkingRoot installer
# Usage: curl -fsSL https://raw.githubusercontent.com/DevbyNaveen/ThinkingRoot/main/install.sh | sh
set -e

REPO="DevbyNaveen/ThinkingRoot"
RELEASES_REPO="DevbyNaveen/releases"
NLI_MODELS_TAG="nli-models"
BINARY="root"
INSTALL_DIR="${INSTALL_DIR:-}"

# ── Helpers ──────────────────────────────────────────────────────────────────

say()     { printf '\033[1;32m==> %s\033[0m\n' "$*"; }
say_dim() { printf '\033[0;37m    %s\033[0m\n' "$*"; }
err()     { printf '\033[1;31mError: %s\033[0m\n' "$*" >&2; exit 1; }
warn()    { printf '\033[1;33mWarning: %s\033[0m\n' "$*" >&2; }
need_cmd() { command -v "$1" >/dev/null 2>&1 || err "need '$1' (not found in PATH)"; }
is_cmd()   { command -v "$1" >/dev/null 2>&1; }

# ── OS / arch detection ───────────────────────────────────────────────────────

detect_os() {
  case "$(uname -s)" in
    Linux)  echo "linux"  ;;
    Darwin) echo "macos"  ;;
    *)      err "Unsupported OS: $(uname -s). Install manually from https://github.com/${REPO}/releases" ;;
  esac
}

detect_arch() {
  arch="$(uname -m)"
  case "$arch" in
    x86_64|amd64) echo "amd64" ;;
    aarch64|arm64)
      if [ "$(uname -s)" = "Darwin" ]; then
        rosetta=$(sysctl -q hw.optional.arm64 2>/dev/null | awk '{print $2}')
        [ "$rosetta" = "1" ] && echo "arm64" || echo "amd64"
      else
        echo "arm64"
      fi
      ;;
    *) err "Unsupported architecture: $arch. Install manually from https://github.com/${REPO}/releases" ;;
  esac
}

# Returns the NLI ONNX filename for this arch
nli_onnx_filename() {
  ARCH="$1"
  case "$ARCH" in
    arm64|aarch64) echo "model_qint8_arm64.onnx" ;;
    *)             echo "model_quint8_avx2.onnx" ;;
  esac
}

# ── Download helper (curl → wget fallback) ────────────────────────────────────

download() {
  url="$1"; dest="$2"
  if is_cmd curl; then
    curl --tlsv1.2 --proto '=https' -fSL --progress-bar "$url" -o "$dest"
  elif is_cmd wget; then
    wget --https-only -O "$dest" "$url"
  else
    err "Neither curl nor wget found. Install one and retry."
  fi
}

download_quiet() {
  url="$1"; dest="$2"
  if is_cmd curl; then
    curl --tlsv1.2 --proto '=https' -fsSL "$url" -o "$dest"
  elif is_cmd wget; then
    wget -q --https-only -O "$dest" "$url"
  else
    err "Neither curl nor wget found."
  fi
}

# ── SHA256 helper ─────────────────────────────────────────────────────────────

sha256() {
  file="$1"
  if is_cmd sha256sum; then
    sha256sum "$file" | cut -d' ' -f1
  elif is_cmd shasum; then
    shasum -a 256 "$file" | cut -d' ' -f1
  elif is_cmd openssl; then
    openssl dgst -sha256 "$file" | awk '{print $NF}'
  else
    err "No SHA256 tool found (tried sha256sum, shasum, openssl)."
  fi
}

# ── Install dir ───────────────────────────────────────────────────────────────

select_install_dir() {
  if [ -n "$INSTALL_DIR" ]; then
    echo "$INSTALL_DIR"
    return
  fi
  if [ -w /usr/local/bin ]; then
    echo "/usr/local/bin"
  elif [ -d "$HOME/.local/bin" ] && [ -w "$HOME/.local/bin" ]; then
    echo "$HOME/.local/bin"
  else
    mkdir -p "$HOME/.local/bin" || err "Cannot create $HOME/.local/bin"
    echo "$HOME/.local/bin"
  fi
}

# ── Model cache dir ───────────────────────────────────────────────────────────

model_cache_dir() {
  if [ "$(uname -s)" = "Darwin" ]; then
    echo "${HOME}/Library/Caches/thinkingroot/models"
  else
    echo "${HOME}/.cache/thinkingroot/models"
  fi
}

# ── Fetch latest version ──────────────────────────────────────────────────────

fetch_latest_version() {
  download_quiet \
    "https://api.github.com/repos/${RELEASES_REPO}/releases/latest" \
    /dev/stdout 2>/dev/null \
    | grep '"tag_name"' | cut -d'"' -f4
}

# ── Install NLI models ────────────────────────────────────────────────────────

install_nli_models() {
  ARCH="$1"
  MODEL_DIR="$(model_cache_dir)"
  ONNX_FILE="$(nli_onnx_filename "$ARCH")"
  BASE="https://github.com/${RELEASES_REPO}/releases/download/${NLI_MODELS_TAG}"

  mkdir -p "$MODEL_DIR" || err "Cannot create model cache dir: $MODEL_DIR"

  if [ -f "${MODEL_DIR}/${ONNX_FILE}" ]; then
    say_dim "NLI model already cached: ${MODEL_DIR}/${ONNX_FILE}"
  else
    say "Downloading NLI model (~83 MB, one-time)..."
    download "${BASE}/${ONNX_FILE}" "${MODEL_DIR}/${ONNX_FILE}" \
      || { warn "NLI model download failed — grounding will use judges 1-3 only. Re-run installer to retry."; return 0; }
    say_dim "Saved to ${MODEL_DIR}/${ONNX_FILE}"
  fi

  if [ -f "${MODEL_DIR}/tokenizer.json" ]; then
    say_dim "Tokenizer already cached."
  else
    say "Downloading tokenizer..."
    download_quiet "${BASE}/tokenizer.json" "${MODEL_DIR}/tokenizer.json" \
      || { warn "Tokenizer download failed — re-run installer to retry."; return 0; }
    say_dim "Saved to ${MODEL_DIR}/tokenizer.json"
  fi

  say "NLI models ready."
}

# ── Main ──────────────────────────────────────────────────────────────────────

main() {
  need_cmd uname

  OS="$(detect_os)"
  ARCH="$(detect_arch)"
  INSTALL_DIR="$(select_install_dir)"

  # macOS Intel ships as a tar.gz bundle (binary + ONNX Runtime dylib)
  if [ "$OS" = "macos" ] && [ "$ARCH" = "amd64" ]; then
    ASSET="${BINARY}-${OS}-${ARCH}.tar.gz"
    IS_BUNDLE=1
  else
    ASSET="${BINARY}-${OS}-${ARCH}"
    IS_BUNDLE=0
  fi

  say "Detecting latest version..."
  VERSION="${VERSION:-$(fetch_latest_version)}"
  [ -z "$VERSION" ] && err "Could not determine latest version. Set VERSION= env var manually."

  BASE_URL="https://github.com/${RELEASES_REPO}/releases/download/${VERSION}"
  ASSET_URL="${BASE_URL}/${ASSET}"
  CHECKSUM_URL="${BASE_URL}/checksums.txt"

  say "Installing ${BINARY} ${VERSION} for ${OS}/${ARCH}"

  TMP_DIR="$(mktemp -d)"
  trap 'rm -rf "$TMP_DIR"' EXIT

  ASSET_PATH="${TMP_DIR}/${ASSET}"
  CHECKSUMS_PATH="${TMP_DIR}/checksums.txt"

  say "Downloading binary..."
  download "$ASSET_URL" "$ASSET_PATH"
  download_quiet "$CHECKSUM_URL" "$CHECKSUMS_PATH"

  say "Verifying SHA256 checksum..."
  EXPECTED="$(grep " ${ASSET}$" "$CHECKSUMS_PATH" | awk '{print $1}')"
  [ -z "$EXPECTED" ] && err "Checksum not found for ${ASSET} in checksums.txt"
  ACTUAL="$(sha256 "$ASSET_PATH")"
  if [ "$EXPECTED" != "$ACTUAL" ]; then
    printf '\033[1;31mChecksum mismatch!\n  Expected: %s\n  Got:      %s\033[0m\n' \
      "$EXPECTED" "$ACTUAL" >&2
    exit 1
  fi
  say "Checksum OK"

  if [ "$IS_BUNDLE" = "1" ]; then
    # Extract binary + ONNX Runtime dylib both to INSTALL_DIR
    tar -xzf "$ASSET_PATH" -C "$INSTALL_DIR"
    chmod +x "${INSTALL_DIR}/${BINARY}"
    say "Installed: ${INSTALL_DIR}/${BINARY} (+ libonnxruntime dylib)"
  else
    chmod +x "$ASSET_PATH"
    mv "$ASSET_PATH" "${INSTALL_DIR}/${BINARY}"
    say "Installed: ${INSTALL_DIR}/${BINARY}"
  fi

  # PATH hint
  case "$INSTALL_DIR" in
    "$HOME/.local/bin")
      case ":$PATH:" in
        *":$HOME/.local/bin:"*) ;;
        *) say "Add to PATH: export PATH=\"\$HOME/.local/bin:\$PATH\"" ;;
      esac
      ;;
  esac

  # ── Download NLI models ───────────────────────────────────────────────────
  install_nli_models "$ARCH"

  printf '\n'
  say "Done!"
  "${INSTALL_DIR}/${BINARY}" --version || true
  printf '\n'
  printf '    Get started:\n'
  printf '      root setup         # interactive wizard\n'
  printf '      root compile .     # compile your first knowledge base\n'
  printf '      root ask "what does this codebase do?"\n'
  printf '\n'
}

main "$@"
