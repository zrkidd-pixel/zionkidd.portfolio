# AI-DLC Workflow — Steering Pointer

This project uses AWS's AI-DLC methodology. The full workflow instructions live in [`CLAUDE.md`](../../CLAUDE.md) at the repo root, and the rule detail files are at `.kiro/aws-aidlc-rule-details/` (Kiro convention) and `.aidlc-rule-details/` (Claude Code/Cursor/Cline convention).

**Follow `CLAUDE.md` as your primary workflow instructions for any software-development work on this project.**

## Starting a New Project

This is a fresh AI-DLC project. To begin:

1. Read `aidlc-docs/preferences.md` for established user preferences
2. Start with Workspace Detection when the user describes what they want to build
3. Follow `CLAUDE.md`'s stage rules throughout

## User Preferences (Baked In)

The following preferences are established for this project (see `aidlc-docs/preferences.md` for details):

- **Ask clarifying questions inline, one at a time** — not via question files or batched lists
- **Complete each unit fully** (design + code) before starting the next
- **Run the pressure-test swarm protocol only when explicitly requested** (opt-in, not automatic)
- **Block on high-severity findings** during pressure tests — propose fixes before presenting as approval-ready

## Project-Specific Preferences

Add project-specific preferences here as they're established:

<!-- Example:
- **Platform priority**: Web over mobile for all UI/UX updates
-->
