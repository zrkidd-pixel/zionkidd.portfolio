# Kiro Steering Files

Steering files give Kiro persistent context about your team's standards. Instead of repeating yourself in every prompt, you write the rules once here and Kiro loads them automatically.

## How Inclusion Works

Each steering file has a frontmatter block that controls when it loads:

### Always loaded
```yaml
---
inclusion: always
---
```
Kiro loads this file in every session, regardless of what files are open. Use this for standards that apply everywhere — coding style, commit format, security rules.

### Loaded when files match a pattern
```yaml
---
inclusion: fileMatch
fileMatchPattern: "**/*.test.ts,**/tests/**"
---
```
Kiro loads this file only when a matching file is open in the editor. Use this for standards that are only relevant in specific contexts — testing rules when test files are open, infrastructure rules when CDK files are open.

### Loaded on demand (manual)
```yaml
---
inclusion: manual
---
```
Not loaded automatically. The developer explicitly references it with `#filename` in chat. Use this for large reference documents you only need occasionally.

---

## Why Split Into Multiple Files?

One big steering file works at first but has two problems as it grows:

1. **Noise** — Kiro loads your Lambda standards when you're writing a React component. The irrelevant context dilutes the useful context.
2. **Size** — Large steering files eat context window. Splitting lets you load only what's relevant.

The pattern that works: one file per concern, scoped with `fileMatch` where possible.

---

## Recommended File Set

These are placeholder files ready for you to fill in with your team's standards. Delete the ones that don't apply to your stack.

| File | Inclusion | Purpose |
|------|-----------|---------|
| `core-standards.md` | `always` | Coding style, naming, error handling, commit format |
| `testing-standards.md` | `fileMatch` | Test patterns, coverage requirements, TDD rules |
| `frontend-standards.md` | `fileMatch` | UI frameworks, component patterns, accessibility |
| `backend-standards.md` | `fileMatch` | API design, service patterns, data access |
| `infrastructure-standards.md` | `fileMatch` | IaC patterns, cloud service selection, IAM |
| `security-standards.md` | `always` | Auth, secrets management, OWASP controls |
| `documentation-standards.md` | `always` | README requirements, comment style, doc structure |
| `git-workflow-standards.md` | `always` | Branch strategy, commit format, PR/MR process |

---

## Installation

Steering files in this template repo are **examples and references**. To activate them in Kiro, install them to your local Kiro config:

```bash
# Option 1: Symlink (stays in sync with git pull — recommended)
ln -s /path/to/this-repo/.kiro/steering ~/.kiro/steering

# Option 2: Copy individual files
cp .kiro/steering/core-standards.md ~/.kiro/steering/core-standards.md
```

Or configure workspace-level steering by placing files directly in your project's `.kiro/steering/` directory — Kiro will pick them up automatically for that workspace.

---

## Tips

- Keep each file focused on one concern. If a file is getting long, split it.
- Use `fileMatch` aggressively — the tighter the scope, the more useful the context.
- Standards that contradict each other cause confused output. When in doubt, consolidate into `core-standards.md`.
- Comment your rules with *why*, not just *what*. Kiro uses the reasoning to make better judgment calls in edge cases.
