---
inclusion: fileMatch
fileMatchPattern: "**/*.test.js,**/*.test.ts,**/*.spec.js,**/*.spec.ts,**/test/**,**/tests/**,**/__tests__/**"
---

# Testing Standards

<!--
  INCLUSION: fileMatch — only loads when test files or test directories are open.
  Keep testing rules here rather than in core-standards.md so they don't pollute
  non-test contexts.
-->

## Approach

<!-- Define your team's testing philosophy. Examples:
  - Test-driven development (TDD): write tests before implementation
  - Behavior-driven (BDD): tests describe user-visible behavior, not internal logic
  - Test-after: write tests alongside or after implementation (if TDD isn't mandated)
  - What does "done" mean from a testing perspective?
-->

## Test Pyramid

<!-- Define the expected distribution. Example:
  - Unit tests (70%): pure logic, no I/O, fast
  - Integration tests (20%): component boundaries, real or realistic dependencies
  - End-to-end tests (10%): full user flows, slow, run less frequently
-->

## Coverage Requirements

<!-- Define your coverage thresholds. Examples:
  - Minimum 70% overall coverage for all new code
  - Domain/business logic: 90%+
  - Utility functions: 80%+
  - Define what's excluded from coverage (generated code, config files, etc.)
-->

## Test Structure

<!-- Define how individual tests should be written. Examples:
  - Use the AAA pattern: Arrange, Act, Assert
  - One assertion per test (or one behavior per test)
  - Test names should read as sentences: "returns empty array when no results found"
  - Tests must be independent — no shared mutable state between tests
  - Tests must be deterministic — no randomness, no time-dependency without mocking
-->

## Mocking and Test Doubles

<!-- Define your mocking conventions. Examples:
  - Mock at the boundary (adapters, HTTP clients, DB), not inside the domain
  - Prefer dependency injection over module-level mocking
  - Define which test double type to use when (stub, spy, mock, fake)
  - Never mock what you don't own (prefer fakes for third-party libraries)
-->

## What NOT to Test

<!-- Define exclusions to prevent over-testing. Examples:
  - Don't test framework internals or third-party library behavior
  - Don't test trivial getters/setters with no logic
  - Don't test private implementation details — test behavior, not structure
-->
