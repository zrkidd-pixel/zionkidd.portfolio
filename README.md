# AI-DLC Project Template

A reusable template for AI-Driven Development Life Cycle (AI-DLC) projects. This template provides the scaffolding for structured, AI-assisted software development with comprehensive documentation, state tracking, and workflow guidance.

## Quick Start

1. **Create a new repo from this template**:
   - Click "Use this template" on GitHub, or
   - Clone and remove the `.git` folder to start fresh

2. **Customize for your project**:
   - Update `CLAUDE.md` with any project-specific context (optional)
   - The workflow will auto-detect your project type on first run

3. **Start the AI-DLC workflow**:
   - Open the project in your AI-assisted IDE (Kiro, Cursor, Claude Code, etc.)
   - Describe what you want to build
   - The AI will guide you through INCEPTION → CONSTRUCTION → OPERATIONS

## What's Included

```
ai-dlc-template/
├── .aidlc-rule-details/      # Methodology rules (Claude Code/Cursor/Cline)
├── .kiro/
│   ├── aws-aidlc-rule-details/  # Methodology rules (Kiro)
│   └── steering/
│       └── ai-dlc.md            # Workflow pointer + preferences
├── aidlc-docs/
│   ├── aidlc-state.md           # Workflow state (starts fresh)
│   ├── audit.md                 # Decision history (starts empty)
│   └── preferences.md           # Your baked-in preferences
├── CLAUDE.md                    # Primary workflow instructions
├── CHANGELOG.md                 # Template version history
└── .gitignore
```

## Baked-In Preferences

This template includes universal preferences that work well across projects:

- **Ask questions inline, one at a time** (not batched lists or separate question files)
- **Complete each unit fully** (design + code) before starting the next
- **Pressure-test swarm protocol is opt-in** (only when explicitly requested)
- **Block on high-severity findings** during pressure tests

These can be found in `aidlc-docs/preferences.md` and referenced in `.kiro/steering/ai-dlc.md`.

## Supported AI Tools

This template works with multiple AI-assisted development tools:

| Tool | Rule Path Used |
|------|----------------|
| Claude Code | `.aidlc-rule-details/` |
| Cursor | `.aidlc-rule-details/` |
| Cline | `.aidlc-rule-details/` |
| Kiro | `.kiro/aws-aidlc-rule-details/` |
| Amazon Q | `.amazonq/aws-aidlc-rule-details/` (add if needed) |

## Updating the Methodology

When improvements are made to the AI-DLC rules:

1. Check `CHANGELOG.md` for what's changed
2. Copy the updated `.aidlc-rule-details/` folder from the template
3. Copy to `.kiro/aws-aidlc-rule-details/` as well (keep them in sync)

## The Three Phases

### 🔵 INCEPTION — Planning & Architecture
- Workspace Detection (always)
- Reverse Engineering (brownfield only)
- Requirements Analysis (always)
- User Stories (conditional)
- Workflow Planning (always)
- Application Design (conditional)
- Units Generation (conditional)

### 🟢 CONSTRUCTION — Design & Implementation
- Functional Design (per-unit, conditional)
- NFR Requirements (per-unit, conditional)
- NFR Design (per-unit, conditional)
- Infrastructure Design (per-unit, conditional)
- Code Generation (per-unit, always)
- Build and Test (always)

### 🟡 OPERATIONS — Refinement & Deployment
- UI/UX Refinements (conditional)
- Screen Content Refinements (conditional)
- Deployment (placeholder)
- Monitoring (placeholder)

## Extensions

Optional extensions can be enabled during Requirements Analysis:

- **Security Baseline** — OWASP-aligned security constraints
- **Resiliency Baseline** — AWS Well-Architected reliability practices
- **Property-Based Testing** — PBT rules for algorithmic code

## License

MIT — Use freely for your projects.
