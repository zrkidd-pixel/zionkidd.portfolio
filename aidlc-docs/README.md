# AI-DLC Workflow Artifacts

This directory contains artifacts produced during AI-DLC workflow sessions — requirements, design documents, state tracking, and audit logs for each piece of work.

---

## Organization Policy

The directory uses a two-level structure:

### Level 1 — Shared System Documentation

Documentation that applies across all work items. Created once, reused many times.

```
aidlc-docs/
└── reverse-engineering/        # System architecture, components, tech stack
    ├── architecture.md
    ├── component-inventory.md
    ├── technology-stack.md
    └── ...
```

Create this when you first run AI-DLC on an existing codebase. Update it when the system architecture changes significantly — not for every bug fix or feature.

### Level 2 — Work Item Artifacts

All artifacts for a specific piece of work, isolated in their own folder. Clean up by deleting the folder when no longer needed.

```
aidlc-docs/
└── {work-item-id}/
    ├── aidlc-state.md          # Workflow state and stage progress
    ├── audit.md                # Complete interaction log
    ├── inception/              # INCEPTION phase artifacts (if executed)
    │   ├── requirements/
    │   ├── user-stories/
    │   └── plans/
    └── construction/           # CONSTRUCTION phase artifacts (if executed)
        ├── plans/
        ├── {unit-name}/
        │   ├── functional-design/
        │   └── code/
        └── build-and-test/
```

---

## Work Item Folder Naming

Use the naming convention that matches your team's tracking system:

| Tracking System | Convention | Example |
|----------------|------------|---------|
| GitHub Issues | `issue-{number}` | `issue-42` |
| GitLab Issues | `issue-{number}` | `issue-42` |
| Jira | `{project}-{number}` | `PROJ-1234` |
| ServiceNow Stories | `story-{number}` | `story-STRY0012345` |
| ServiceNow Changes | `change-{number}` | `change-CHG0001234` |
| Feature name | `feature-{name}` | `feature-user-auth` |
| Custom | `{prefix}-{id}` | any consistent format |

Pick one convention and use it consistently across all work items in a project.

---

## Key Files

### `aidlc-state.md`

Tracks the AI-DLC workflow state for a specific work item. Created at the start of each session.

Required sections:
- Project type (Greenfield / Brownfield)
- Current stage
- Stage progress with checkboxes
- Extension configuration (which extensions are enabled/disabled)

### `audit.md`

Complete interaction log. Every AI-DLC stage interaction is appended here — never overwritten.

Format for each entry:
```markdown
## [Stage Name]
**Timestamp**: [ISO 8601]
**User Input**: "[Complete raw input]"
**AI Response**: "[Action taken or response given]"
**Context**: [Stage, decision, or action]

---
```

### `preferences.md` *(optional)*

User preferences that persist across sessions — things like preferred question format, output verbosity, or workflow customizations. The AI reads this at session start.

---

## Lifecycle

### Starting a new work item

1. Determine the work item identifier (issue number, ticket, feature name)
2. Create `aidlc-docs/{work-item-id}/`
3. AI-DLC creates `aidlc-state.md` and `audit.md` automatically
4. Phase folders (`inception/`, `construction/`) are created as stages execute

### Completing a work item

**Keep:**
- `aidlc-state.md` — workflow history
- `inception/requirements/` — business context for future reference
- `audit.md` — compliance and decision record

**Safe to remove after completion:**
- Temporary planning documents
- Build and test instruction files (after execution)
- Clarification question files (after answered)
- Intermediate design drafts (if final design is captured elsewhere)

### Updating shared documentation

Update `reverse-engineering/` when:
- System architecture changes significantly
- New major components are added
- Technology stack changes

Don't update for minor code changes, bug fixes, or routine features.

---

## Example Structure

A project that has completed two issues and is mid-way through a third:

```
aidlc-docs/
├── README.md                           # This file
├── reverse-engineering/                # Shared — system docs
│   ├── architecture.md
│   └── technology-stack.md
├── issue-12/                           # Completed
│   ├── aidlc-state.md
│   └── inception/
│       └── requirements/
│           └── requirements.md
├── issue-18/                           # Completed
│   ├── aidlc-state.md
│   └── inception/
│       └── requirements/
│           └── requirements.md
└── issue-24/                           # In progress
    ├── aidlc-state.md
    ├── audit.md
    ├── inception/
    │   ├── requirements/
    │   │   └── requirements.md
    │   └── plans/
    │       └── execution-plan.md
    └── construction/
        └── user-auth-unit/
            └── functional-design/
                └── business-logic.md
```
