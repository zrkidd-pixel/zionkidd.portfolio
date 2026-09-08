---
extension_name: Your Extension Name
version: 1.0.0
applies_to:
  - inception/user-stories
  # Add more stages or use all_stages for cross-cutting concerns:
  # - all_stages
  # - construction/code-generation
  # - construction/build-and-test
description: One sentence explaining what this extension enforces and when it applies.
enabled: true
---

# Your Extension Name

<!--
  This template walks through every section an extension needs.
  Replace all [placeholder] text with your content.
  Delete sections that don't apply.
  
  Minimum viable extension:
  - Valid frontmatter (above)
  - At least one enforceable rule
  - A verification checklist
  - A compliance summary format block
-->

## Applicability

This extension applies during **[stage name]** of the [Inception/Construction/Operations] phase.

**Trigger**: [When does the AI activate this extension? Be specific about what condition or context causes it to apply.]

**Does NOT apply when**: [Optional — list conditions where the extension should be skipped as N/A]

---

## Extension Rules

<!--
  Write rules that are specific enough for the AI to enforce.
  Vague rules produce vague compliance. Be explicit about what must happen.
  
  Use MANDATORY for hard requirements.
  Use RECOMMENDED for guidance that can be overridden with justification.
-->

### Rule 1: [Rule Name]

**MANDATORY**: [What must be done. Be specific — the AI enforces exactly what you write here.]

[Detailed explanation, rationale, and any relevant examples or templates]

### Rule 2: [Rule Name]

**MANDATORY**: [Another requirement]

[Explanation and examples]

### Rule 3: [Rule Name] *(Optional)*

**RECOMMENDED**: [Guidance that's best practice but not strictly required]

[Explanation]

---

## Verification Criteria

This extension is successfully applied when:

- [ ] [Measurable criterion — something that can be checked yes/no]
- [ ] [Measurable criterion]
- [ ] [Measurable criterion]

---

## Compliance Summary Format

<!--
  This block defines what the AI reports at stage completion.
  Keep the structure — it's what makes extensions auditable across projects.
  Update the checklist items to match your Verification Criteria above.
-->

At [stage name] completion, include this compliance summary:

```markdown
## [Your Extension Name] Compliance

**Extension**: [extension_name] v[version]
**Stage**: [Stage Name]
**Status**: [Compliant / Non-Compliant / N/A]

### Verification Checklist:
- [✅/❌/N/A] [Criterion 1]
- [✅/❌/N/A] [Criterion 2]
- [✅/❌/N/A] [Criterion 3]

### Rationale:
[Brief explanation of the compliance status and any N/A determinations]

### Notes:
[Any additional context or observations]
```

---

## Notes

<!--
  Document anything important about how this extension behaves,
  interacts with other extensions, or should be maintained.
-->

- This extension does NOT modify core AI-DLC framework files
- This extension can be disabled by setting `enabled: false` in frontmatter
- This extension survives framework updates
- [Any other important notes specific to this extension]
