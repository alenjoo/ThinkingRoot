use tera::Tera;

use thinkingroot_core::{Error, Result};

/// Initialize the Tera template engine with built-in templates.
pub fn init_templates() -> Result<Tera> {
    let mut tera = Tera::default();

    tera.add_raw_template("entity_page.md", ENTITY_PAGE_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("architecture_map.md", ARCHITECTURE_MAP_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("contradiction_report.md", CONTRADICTION_REPORT_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("health_report.md", HEALTH_REPORT_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("decision_log.md", DECISION_LOG_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("task_pack.md", TASK_PACK_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("agent_brief.md", AGENT_BRIEF_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;
    tera.add_raw_template("runbook.md", RUNBOOK_TEMPLATE)
        .map_err(|e| Error::Template(e.to_string()))?;

    Ok(tera)
}

const ENTITY_PAGE_TEMPLATE: &str = r#"# {{ name }}

**Type:** {{ entity_type }}
{% if description %}**Description:** {{ description }}{% endif %}
{% if aliases | length > 0 %}**Also known as:** {{ aliases | join(sep=", ") }}{% endif %}

## Claims

{% for claim in claims -%}
- [{{ claim.claim_type }}] {{ claim.statement }} *(confidence: {{ claim.confidence }})* [source]({{ claim.source_uri }})
{% endfor %}

## Relations

{% for rel in relations -%}
- **{{ rel.relation_type }}** → {{ rel.target }} {% if rel.description %}— {{ rel.description }}{% endif %}
{% endfor %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const ARCHITECTURE_MAP_TEMPLATE: &str = r#"# Architecture Map

*Compiled from {{ source_count }} sources, {{ entity_count }} entities*

## Systems & Services

{% for entity in systems -%}
### {{ entity.name }}
{% if entity.description %}{{ entity.description }}{% endif %}

{% if entity.relations | length > 0 -%}
**Dependencies:**
{% for rel in entity.relations -%}
- {{ rel.relation_type }} → {{ rel.target }}
{% endfor %}
{% endif %}
{% endfor %}

## Key Decisions

{% for claim in decisions -%}
- {{ claim.statement }} *({{ claim.source_uri }})*
{% endfor %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const CONTRADICTION_REPORT_TEMPLATE: &str = r#"# Contradiction Report

*{{ contradiction_count }} contradictions detected*

{% for c in contradictions -%}
## Contradiction #{{ loop.index }}

**Status:** {{ c.status }}

**Claim A:** {{ c.claim_a_statement }}
- Source: {{ c.claim_a_source }}
- Confidence: {{ c.claim_a_confidence }}

**Claim B:** {{ c.claim_b_statement }}
- Source: {{ c.claim_b_source }}
- Confidence: {{ c.claim_b_confidence }}

{% if c.explanation %}**Explanation:** {{ c.explanation }}{% endif %}

---
{% endfor %}

*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const DECISION_LOG_TEMPLATE: &str = r#"# Decision Log

*{{ decision_count }} decisions tracked across {{ source_count }} sources*

{% for d in decisions -%}
## {{ loop.index }}. {{ d.statement }}

- **Confidence:** {{ d.confidence }}
- **Source:** [{{ d.source_uri }}]({{ d.source_uri }})

---
{% endfor %}

{% if plans | length > 0 -%}
## Planned Changes

{% for p in plans -%}
- {{ p.statement }} *({{ p.source_uri }})* — confidence: {{ p.confidence }}
{% endfor %}
{% endif %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const TASK_PACK_TEMPLATE: &str = r#"# Task Pack — Agent Context Brief

*Compiled knowledge for coding agents — {{ entity_count }} entities, {{ claim_count }} claims*

## Key Systems & Dependencies

{% for sys in systems -%}
### {{ sys.name }} ({{ sys.entity_type }})
{% if sys.description %}{{ sys.description }}{% endif %}
{% if sys.relations | length > 0 -%}
{% for rel in sys.relations -%}
- {{ rel.relation_type }} → {{ rel.target }}
{% endfor %}
{% endif %}
{% endfor %}

## Architecture Claims

{% for c in architecture_claims -%}
- {{ c.statement }} [source]({{ c.source_uri }})
{% endfor %}

## API Signatures

{% for c in api_claims -%}
- {{ c.statement }} [source]({{ c.source_uri }})
{% endfor %}

## Dependencies

{% for c in dependency_claims -%}
- {{ c.statement }} [source]({{ c.source_uri }})
{% endfor %}

## Active Contradictions

{% for c in contradictions -%}
- ⚠ {{ c.explanation }}
{% endfor %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const AGENT_BRIEF_TEMPLATE: &str = r#"# Agent Brief

*Condensed knowledge brief — {{ entity_count }} entities, {{ claim_count }} claims, {{ source_count }} sources*

## Entity Summary

{% for e in entities -%}
- **{{ e.name }}** ({{ e.entity_type }}){% if e.claim_count > 0 %} — {{ e.claim_count }} claims{% endif %}
{% endfor %}

## High-Confidence Facts

{% for c in high_confidence_claims -%}
- {{ c.statement }} *({{ c.claim_type }}, {{ c.confidence }})* [source]({{ c.source_uri }})
{% endfor %}

## Key Relations

{% for r in relations -%}
- {{ r.from }} **{{ r.relation_type }}** {{ r.to }}
{% endfor %}

## Warnings

{% for w in warnings -%}
- {{ w }}
{% endfor %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const RUNBOOK_TEMPLATE: &str = r#"# Operational Runbook

*Compiled from {{ source_count }} sources*

## Systems Overview

{% for sys in systems -%}
### {{ sys.name }}

**Type:** {{ sys.entity_type }}
{% if sys.description %}{{ sys.description }}{% endif %}

{% if sys.relations | length > 0 -%}
**Dependencies:**
{% for rel in sys.relations -%}
- {{ rel.relation_type }} → {{ rel.target }}
{% endfor %}
{% endif %}

{% if sys.claims | length > 0 -%}
**Key Facts:**
{% for c in sys.claims -%}
- {{ c.statement }} [source]({{ c.source_uri }})
{% endfor %}
{% endif %}

---
{% endfor %}

## Requirements

{% for c in requirements -%}
- {{ c.statement }} *({{ c.confidence }})* [source]({{ c.source_uri }})
{% endfor %}

## Known Issues

{% for c in contradictions -%}
- ⚠ {{ c.explanation }}
{% endfor %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;

const HEALTH_REPORT_TEMPLATE: &str = r#"# Knowledge Health Report

**Overall Score: {{ score.overall }}%**

| Dimension | Score |
|-----------|-------|
| Freshness | {{ score.freshness }}% |
| Consistency | {{ score.consistency }}% |
| Coverage | {{ score.coverage }}% |
| Provenance | {{ score.provenance }}% |

## Summary

- **Sources:** {{ stats.sources }}
- **Claims:** {{ stats.claims }}
- **Entities:** {{ stats.entities }}
- **Relations:** {{ stats.relations }}
- **Contradictions:** {{ stats.contradictions }} ({{ stats.unresolved }} unresolved)
- **Stale claims:** {{ stats.stale_claims }}

{% if warnings | length > 0 %}
## Warnings

{% for w in warnings -%}
- {{ w }}
{% endfor %}
{% endif %}

---
*Compiled by ThinkingRoot at {{ compiled_at }}*
"#;
