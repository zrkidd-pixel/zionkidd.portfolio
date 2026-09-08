---
name: skill-name
description: One sentence. What does this skill do and when should someone invoke it? This is what shows in the skill list — make it action-oriented.
---

# Skill Title

<!--
  This is the full workflow Kiro follows when the skill is invoked with #skill-name.
  
  Structure:
    1. When to Use         — trigger phrases and situations
    2. Prerequisites       — check before doing anything
    3. Steps               — numbered, explicit, complete
    4. Edge Cases          — what to do when things aren't normal
    5. Quick Reference     — condensed summary for repeat users
  
  Tips:
  - Be explicit about what to CHECK before starting (prerequisites)
  - Each step should have a clear action and a clear "done" condition
  - Write steps that adapt to different projects — check before assuming
  - Include examples of good vs. bad output where helpful
-->

One sentence describing what this skill does.

---

## When to Use

- [Trigger phrase — e.g., "when the user says 'ship it' or 'create the MR'"]
- [Situation — e.g., "after completing a feature, fix, or chore"]
- [Situation — e.g., "before merging to the main branch"]

---

## Prerequisites

Before starting, check:

1. **[Prerequisite 1]** — [how to check it]
   ```bash
   [command to verify]
   ```
   If not met → [what to tell the user / what to do]

2. **[Prerequisite 2]** — [how to check it]
   If not met → [what to tell the user / what to do]

---

## Step 1: [Step Name]

[What this step does and why]

[Action or command]

```bash
[command if applicable]
```

**If [condition]:** [what to do]  
**If [other condition]:** [what to do]

---

## Step 2: [Step Name]

[What this step does and why]

[Action with specific instructions]

**Output format:**
```
[Example of what the output should look like]
```

---

## Step 3: [Step Name]

[Continue for as many steps as needed]

---

## Edge Cases

| Situation | Action |
|-----------|--------|
| [Edge case 1] | [What to do] |
| [Edge case 2] | [What to do] |
| [Edge case 3] | [What to do] |

---

## Quick Reference

```
#skill-name workflow:
1. [Step 1 — one line]
2. [Step 2 — one line]
3. [Step 3 — one line]
4. [Step 4 — one line]
```

---

## Integration

- **Works with**: [agents, hooks, or other skills this integrates with]
- **MCP dependencies**: [any MCP servers required, or "none"]
- **Stack requirements**: [any language/framework requirements, or "none — works with any stack"]
