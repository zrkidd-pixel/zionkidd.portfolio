# Kiro Skills

Skills are reusable instruction sets that load into Kiro's context on demand. You invoke them with `#skill-name` in chat and Kiro follows the workflow defined in the skill's `SKILL.md`.

Think of a skill as a saved procedure — a well-defined, repeatable workflow you've written once and can invoke anywhere without re-explaining it.

## How Skills Differ From Agents and Steering Files

| | Steering File | Skill | Agent |
|--|--------------|-------|-------|
| **When active** | Always (or on file match) | Only when invoked with `#` | Only when selected as active agent |
| **Purpose** | Passive standards enforcement | Active multi-step workflow | Full autonomous role with tool access |
| **Invocation** | Automatic | `#skill-name` in chat | Selecting the agent in Kiro |
| **Best for** | "Always follow these rules" | "Do this process for me" | "Take on this role end-to-end" |

**When to write a skill vs. an agent:**
- Use a **skill** when it's a bounded, repeatable procedure that works alongside the current conversation (e.g., "ship this feature", "validate this project")
- Use an **agent** when it's a full role that requires its own tool permissions and system-level behavior (e.g., "act as the architect for this session")

## Skill Structure

Each skill is a directory with a single required file:

```
kiro/skills/
├── {skill-name}/
│   └── SKILL.md        ← required — the full workflow
└── README.md           ← this file
```

`SKILL.md` has two parts:
1. **Frontmatter** — machine-readable metadata (name, description)
2. **Body** — the workflow instructions Kiro follows when the skill is invoked

## Frontmatter Format

```yaml
---
name: skill-name          # lowercase, hyphenated — must match directory name
description: One sentence explaining what this skill does and when to invoke it.
---
```

Both fields are required. The description is what shows up when someone lists available skills — make it scannable and action-oriented.

## Invocation

In any Kiro chat session:
```
#project-validation
#ship
#your-skill-name
```

Kiro loads the skill's `SKILL.md` into context and follows the workflow.

## Installation

Skills in this template repo are examples and starting points. To activate them:

```bash
# Option 1: Symlink (stays in sync with git pull — recommended)
ln -s /path/to/this-repo/kiro/skills/{skill-name} ~/.kiro/skills/{skill-name}

# Option 2: Copy
cp -r /path/to/this-repo/kiro/skills/{skill-name} ~/.kiro/skills/{skill-name}
```

For workspace-scoped skills (only available in one project), place them in `.kiro/skills/` at the project root. Workspace skills take precedence over global skills with the same name.

## Writing a Good Skill

The best skills share these traits:

**1. Clear trigger phrase in the description**
The description should tell someone exactly when to invoke it:
> ✅ "Use when you're done building and ready to ship a feature branch."
> ❌ "Helps with shipping."

**2. Explicit prerequisites**
State what must be true before the skill runs. Don't let it silently fail on bad preconditions — check first and tell the user what's missing.

**3. Step-by-step workflow**
Numbered steps. Each step has a clear action and a clear completion condition. No ambiguity about what "done" means.

**4. Graceful adaptation**
Skills run across different projects with different stacks. Write steps that check before assuming — does `package.json` exist? Is there a lint script? Adapt or skip gracefully.

**5. A quick reference summary**
End the skill with a condensed version of the steps. Useful for repeat users who know the workflow and just want a reminder.

## Integration With Agents and Hooks

Skills can be invoked from agent workflows and hooks:

**In an agent prompt:**
```markdown
After completing implementation, invoke the `#ship` skill to 
version, document, and push the changes.
```

**As a hook:**
```json
{
  "when": { "type": "userTriggered" },
  "then": { "type": "askAgent", "prompt": "Run #project-validation on the current workspace" }
}
```

This makes skills composable — you write the procedure once and reuse it from anywhere.

## Creating and Publishing a New Skill

1. Create `kiro/skills/{your-skill-name}/SKILL.md` using [SKILL_TEMPLATE.md](./SKILL_TEMPLATE.md)
2. Test it by invoking `#{your-skill-name}` in Kiro chat
3. When it's working, commit it to your shared standards repo
4. Share the install instructions with your team
