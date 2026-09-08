---
inclusion: always
---

# Security Standards

<!--
  INCLUSION: always — security rules apply everywhere, not just in specific file contexts.
  These are non-negotiable baselines. Add stack-specific rules to the relevant
  backend/frontend/infrastructure steering files.
-->

## Secrets and Credentials

<!-- Define how secrets are handled. These should be hard rules, not suggestions:
  - NEVER hardcode secrets, API keys, tokens, or passwords anywhere in code
  - NEVER commit .env files or credential files to version control
  - All secrets must go through a secrets manager (AWS Secrets Manager, Vault, etc.)
  - Rotate secrets on a defined schedule and immediately on suspected compromise
  - Audit secret access — who accessed what and when
-->

## Input Validation

<!-- Define validation requirements. Examples:
  - Validate ALL inputs at the system boundary — assume all input is hostile
  - Use an allowlist (not blocklist) approach for input validation
  - Validate type, length, format, and range
  - Reject and log unexpected inputs — don't silently discard
  - Never trust client-provided IDs for authorization — verify server-side
-->

## Authentication and Authorization

<!-- Define your auth standards. Examples:
  - Authentication method: JWT, session cookies, API keys — define per context
  - Token expiry: access tokens short-lived (15min–1hr), refresh tokens longer
  - Authorization: define the model (RBAC, ABAC, etc.) and where it's enforced
  - All authenticated endpoints must verify identity on every request (no caching auth state)
  - Principle of least privilege: users and services get only what they need
-->

## Data Protection

<!-- Define data handling rules. Examples:
  - Classify data: public, internal, confidential, restricted
  - Encrypt data at rest for confidential and restricted classifications
  - Encrypt all data in transit (TLS 1.2+ minimum, 1.3 preferred)
  - Define PII fields and rules for masking in logs and non-prod environments
  - Data retention and deletion policies
-->

## Dependency Security

<!-- Define your dependency management approach. Examples:
  - Pin dependency versions — no open ranges in production
  - Scan dependencies for known vulnerabilities (define tool: Dependabot, Snyk, etc.)
  - Review and approve major version upgrades before merging
  - Policy for critical CVEs: define SLA for patching (e.g., critical = 24hr, high = 7 days)
  - Prefer well-known, actively maintained packages
-->

## OWASP Top 10 Controls

<!-- Reference which controls are most relevant to your stack and how you address them.
  At minimum, define your stance on:
  - Injection (SQL, NoSQL, command, LDAP): parameterized queries, input validation
  - Broken authentication: session management, MFA requirements
  - Sensitive data exposure: encryption, masking, classification
  - Security misconfiguration: hardening checklists, default credential removal
  - XSS (if web frontend): output encoding, CSP headers
  - SSRF: allowlist outbound destinations, validate URLs before fetching
-->

## Security in CI/CD

<!-- Define security gates in your pipeline. Examples:
  - SAST (static analysis) scan on every PR/MR
  - Dependency vulnerability scan on every PR/MR
  - Secrets scanning on every commit (block commit if secret detected)
  - Container image scanning before deployment
  - Define which findings are blocking vs advisory
-->
