---
inclusion: always
---

# Documentation Standards

<!--
  INCLUSION: always — documentation rules apply across all work, all file types.
-->

## README Requirements

<!-- Define what every README must contain. Examples:
  - Purpose: one paragraph explaining what this project/package does
  - Prerequisites: what needs to be installed before you start
  - Setup: step-by-step from clone to running locally
  - Usage: the most common commands and workflows
  - Architecture: a brief description or link to a diagram
  - Contributing: how to make a change and get it reviewed
  - A README that takes more than 15 minutes to follow is too long.
-->

## Inline Code Comments

<!-- Define when and how to write comments. Examples:
  - Comment the WHY, not the WHAT — the code explains what, comments explain intent
  - Complex algorithms and non-obvious business rules must have explanation comments
  - All public API surface (functions, classes, interfaces) must have doc comments
  - TODO comments must include a ticket/issue reference — no orphaned TODOs
  - Avoid comments that just restate the code: // increment i by 1 → i++
-->

## API Documentation

<!-- Define API documentation requirements. Examples:
  - All REST APIs must have an OpenAPI 3.x spec
  - GraphQL schemas serve as documentation — keep descriptions current
  - Spec must be co-located with the service code, not in a separate repo
  - Breaking changes must be documented with migration guidance
  - Include request/response examples for all endpoints
-->

## Architecture Decision Records (ADRs)

<!-- Define your ADR policy. Examples:
  - Record significant technical decisions in /docs/decisions/ or /docs/adr/
  - Use a lightweight format: Context, Decision, Consequences
  - Once accepted, ADRs are immutable — supersede don't edit
  - Link ADRs from code where the decision is implemented
  - What qualifies as "significant": new frameworks, architectural patterns,
    major library choices, security-relevant decisions
-->

## Changelog

<!-- Define changelog expectations. Examples:
  - Maintain a CHANGELOG.md following Keep a Changelog format
  - Update CHANGELOG.md as part of every PR/MR, not as a release step
  - Categories: Added, Changed, Deprecated, Removed, Fixed, Security
  - Each entry links to the relevant issue or PR
  - Unreleased section at the top accumulates entries until a release
-->

## Documentation Freshness

<!-- Define how documentation is kept current. Examples:
  - PR/MR checklist includes a docs review step
  - Documentation drift is treated as a bug — file an issue when found
  - Quarterly review of all architecture docs to confirm accuracy
  - Automated link checking in CI to catch dead links
  - Docs that are known to be outdated must have a visible stale notice
-->
