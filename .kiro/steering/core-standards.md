---
inclusion: always
---

# Core Engineering Standards

<!-- 
  INCLUSION: always — loaded in every Kiro session.
  Use this file for standards that apply across all code, all languages, all contexts.
  Stack-specific rules belong in their own files (backend-standards.md, etc.).
-->

## Coding Style

<!-- Define your team's baseline style rules here. Examples:
  - Indentation: 2 spaces / 4 spaces / tabs
  - Max line length
  - Naming conventions (camelCase, snake_case, PascalCase) for variables, functions, classes, files
  - Prefer const over let; never use var
  - Always use strict equality
-->

## Error Handling

<!-- Define how errors should be handled. Examples:
  - Never swallow errors silently
  - Always log with structured context (not raw console.log)
  - Distinguish between operational errors (expected) and programmer errors (bugs)
  - Define the team's preferred error/exception pattern
-->

## Documentation Requirements

<!-- Define inline documentation expectations. Examples:
  - All public functions/methods must have a doc comment
  - Complex logic must have an explanation comment (the "why", not the "what")
  - All files must have a header comment explaining their purpose
  - README required for every package/module
-->

## Code Review Requirements

<!-- Define what reviewers check. Examples:
  - Functionality, readability, maintainability, performance, security
  - All automated checks must pass before review
  - Minimum coverage threshold before merge
  - Security-sensitive changes require a second reviewer
-->

## Commit Message Format

<!-- Define your commit convention. Example (Conventional Commits):
  <type>: <subject>

  Types: feat, fix, docs, style, refactor, test, chore
  Subject: imperative mood, max 50 chars
  Body: wrap at 72 chars, explain what and why

  Example:
    feat: add pagination to search results

    Added limit/offset params to the search API.
    Client now receives total count alongside results.
-->

## Security Baseline

<!-- Define non-negotiable security rules. Examples:
  - Never hardcode secrets or credentials
  - Always validate and sanitize inputs
  - Use parameterized queries — never string-interpolated SQL
  - Follow least-privilege for all service accounts and IAM roles
  - Keep dependencies up to date (define your policy: n-1 major, etc.)
-->
