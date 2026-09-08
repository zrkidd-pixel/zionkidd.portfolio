# AI-DLC User Preferences

These preferences are baked into this template based on patterns that work well across projects. The AI assistant should follow these by default.

## Question Flow
- **Ask questions inline, one at a time** — not batched lists or separate question files
- Wait for each answer before asking the next question
- Still record answers in the appropriate documentation files for audit trail

## Unit Completion
- **Complete each unit fully** (design + code) before starting the next
- Don't start Unit 2 design while Unit 1 code generation is incomplete
- This ensures focused, coherent work without context-switching

## Pressure Test Protocol
- **Pressure-test swarm is opt-in only** — run only when explicitly requested
- When requested, spawn specialized agents in parallel to review artifacts
- **Block on high-severity findings** — don't present artifacts as approval-ready if high-severity issues exist
- Propose fixes for blocking findings before asking for approval

## General Communication
- Be direct and concise
- Explain reasoning when making recommendations
- Correct me when I'm wrong — honest feedback over agreement
- Skip filler acknowledgments like "You're absolutely right"

---

## Project-Specific Preferences

Add project-specific preferences below as they're established during the workflow:

<!-- Example:
- **Platform priority**: Web over mobile for all UI/UX updates
- **Tech stack**: React Native with Expo
-->
