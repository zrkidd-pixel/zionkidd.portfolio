---
inclusion: always
---

# Git Workflow Standards

<!--
  INCLUSION: always — branch, commit, and PR/MR rules apply to all work.
-->

## Branch Strategy

<!-- Define your branching model. Examples:
  - GitHub Flow: feature branches off main, merge via PR, deploy from main
  - GitFlow: main + dev + feature/release/hotfix branches
  - Trunk-based: short-lived branches (< 2 days), merge to main frequently

  Whatever you choose, define:
  - The protected branches (main, dev, etc.) — no direct commits
  - Who can merge to protected branches
  - How long feature branches live before they must be rebased/merged
  - Hotfix process for production incidents
-->

## Branch Naming

<!-- Define your naming convention. Example:
  {type}/{issue-id}-{short-description}

  Types: feature, fix, chore, docs, refactor, test
  Examples:
    feature/123-add-user-search
    fix/456-null-pointer-on-empty-cart
    chore/789-upgrade-node-18

  Rules:
  - Always lowercase, hyphens only (no underscores or spaces)
  - Always include issue/ticket ID when one exists
  - Description should be readable without looking up the ticket
-->

## Commit Message Format

<!-- Define your commit convention. Conventional Commits is a common choice:

  <type>(<scope>): <subject>

  <body>

  <footer>

  Types: feat, fix, docs, style, refactor, test, chore, perf
  Scope: optional, the module/area affected (auth, payments, ui)
  Subject: imperative mood, max 50 chars, no period at end
  Body: optional, wrap at 72 chars, explain what and why (not how)
  Footer: optional, reference issues ("Closes #123"), note breaking changes

  Examples:
    feat(auth): add OAuth2 login with Google

    fix(payments): handle nil response from payment gateway

    BREAKING CHANGE: remove deprecated /v1/users endpoint
    Closes #456
-->

## Pull Request / Merge Request Standards

<!-- Define what a PR/MR must contain. Examples:
  - Title: follows the same format as commit messages
  - Description: what changed, why, how to test it
  - Linked issue/ticket: always reference the work item
  - Screenshots/recordings: required for UI changes
  - Size: prefer small, focused PRs (< 400 lines changed is a reasonable guideline)
  - Draft PRs allowed for early feedback, but must be marked ready before review

  Review requirements:
  - Minimum number of approvals before merge
  - Who can approve (any team member, or specific roles?)
  - Author must not merge their own PR (or exceptions?)
  - All CI checks must pass before merge
-->

## Code Review Etiquette

<!-- Define how reviews are conducted. Examples:
  - Respond to review comments within 1 business day
  - Distinguish between blocking and non-blocking feedback:
    - Blocking: "must fix before merge"
    - Non-blocking: "suggestion", "nit", "consider"
  - Reviewers approve the logic; authors own the final decision on style nits
  - Critique the code, never the person
  - Ask questions when unclear — don't assume malicious intent
-->

## Merge Strategy

<!-- Define how branches are merged. Examples:
  - Squash and merge: one clean commit per PR on main (good for linear history)
  - Merge commit: preserves full branch history (good for auditability)
  - Rebase and merge: linear history without squash (requires clean commits)
  - Pick one and enforce it — mixed strategies make history hard to read.
  - Delete branches after merge (automated or manual policy)
-->

## Tags and Releases

<!-- Define your release tagging convention. Examples:
  - Semantic versioning: MAJOR.MINOR.PATCH (e.g., 2.4.1)
  - Tag format: v{version} (e.g., v2.4.1)
  - Tags are created from the protected branch only
  - Every tag has a corresponding CHANGELOG.md entry
  - Release notes auto-generated from conventional commits (optional tooling)
-->
