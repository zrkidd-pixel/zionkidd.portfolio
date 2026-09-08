# AI-DLC Extensions

Extensions add organization-specific behavior to the AI-DLC workflow without modifying the core framework files. They're loaded automatically at workflow start and apply when their target stage is reached.

---

## What an Extension Does

An extension is a markdown file with a frontmatter header that the AI-DLC framework reads as a plugin contract. When a stage runs, the framework checks loaded extensions, evaluates applicability, and enforces any matching rules as hard constraints.

Without extensions, AI-DLC runs its standard stages. With extensions, those stages gain additional requirements — specific questions to ask, templates to follow, or compliance checks to pass before moving on.

---

## Frontmatter Contract

Every extension file must start with this frontmatter block:

```yaml
---
extension_name: Human-readable name for this extension
version: 1.0.0
applies_to:
  - stage/name          # specific stage, e.g. inception/user-stories
  - all_stages          # applies everywhere (cross-cutting concern)
description: One sentence explaining what this extension enforces.
enabled: true
---
```

**Fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `extension_name` | ✅ | Human-readable name shown in compliance summaries |
| `version` | ✅ | Semver — increment when rules change |
| `applies_to` | ✅ | List of stages where this extension activates |
| `description` | ✅ | One sentence for discoverability |
| `enabled` | ✅ | `true` or `false` — toggle without deleting the file |

**Stage names for `applies_to`:**
```
all_stages
inception/requirements-analysis
inception/user-stories
inception/application-design
inception/workflow-planning
construction/functional-design
construction/code-generation
construction/build-and-test
operations/operations
```

---

## How the Framework Uses Extensions

1. **Workflow start** — AI-DLC scans the extensions directory and loads all enabled `.md` files
2. **Stage entry** — Before executing a stage, the framework checks which extensions `applies_to` it
3. **Applicability check** — The AI evaluates whether the extension's rules are relevant to the current context
4. **Enforcement** — Applicable rules are enforced as hard constraints during the stage
5. **Compliance summary** — At stage completion, each active extension reports its compliance status

---

## Enabling and Disabling

To disable an extension without deleting it, set `enabled: false` in the frontmatter:

```yaml
---
extension_name: My Extension
enabled: false
---
```

Re-enable by setting it back to `true`. No other changes needed.

---

## Extension File Structure

```markdown
---
[frontmatter — see above]
---

# Extension Name

## Applicability

When this extension activates and what triggers it.

## Extension Rules

### Rule 1: [Rule Name]
**MANDATORY**: [What must be done]

[Detailed rule content — specific enough for the AI to enforce]

### Rule 2: [Rule Name]
[Additional rules...]

## Verification Criteria

Checklist of conditions that confirm this extension was correctly applied:
- [ ] Criterion 1
- [ ] Criterion 2

## Compliance Summary Format

Template the AI uses when reporting compliance at stage completion:

```markdown
## [Extension Name] Compliance

**Extension**: [extension_name] v[version]
**Stage**: [stage name]
**Status**: [Compliant / Non-Compliant / N/A]

### Verification Checklist:
- [✅/❌/N/A] Criterion 1
- [✅/❌/N/A] Criterion 2

### Rationale:
[Brief explanation]
```
```

---

## Installation

Extensions must be in your workspace's extension directory to be loaded:

```
.kiro/aws-aidlc-rule-details/extensions/
└── your-org/
    ├── your-extension.md
    └── another-extension.md
```

Copy or symlink from your standards repository:

```bash
mkdir -p .kiro/aws-aidlc-rule-details/extensions/your-org
cp your-standards-repo/extensions/your-org/*.md \
   .kiro/aws-aidlc-rule-details/extensions/your-org/
```

---

## Creating a New Extension

Use the template at [EXTENSION_TEMPLATE.md](./EXTENSION_TEMPLATE.md). The minimum viable extension is:

1. Valid frontmatter with all required fields
2. At least one rule that's specific enough to enforce
3. A verification checklist
4. A compliance summary format block

The compliance summary format is what makes extensions auditable — without it, there's no consistent way to confirm the extension ran.

---

## What's Included

| File | Purpose |
|------|---------|
| `README.md` | This file |
| `EXTENSION_TEMPLATE.md` | Blank template for new extensions |
| `resiliency/baseline/` | Resiliency baseline extension (opt-in variant included) |
| `security/baseline/` | Security baseline extension (opt-in variant included) |
| `testing/property-based/` | Property-based testing extension |
