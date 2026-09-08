---
name: project-validation
description: Validate a project against your team's engineering standards — checks structure, architecture, documentation, testing, git hygiene, package config, and security basics. Use when auditing a codebase, before merging, or after scaffolding a new project.
---

# Project Validation

Validate a project against your team's engineering standards. Produces a structured report with pass/warn/fail findings and actionable recommendations.

---

## When to Use

- Before merging a feature branch (pre-merge quality gate)
- When onboarding to a new codebase (health check)
- After scaffolding a new project (verify structure is correct)
- Periodic project hygiene audits
- When someone asks "is this project in good shape?"

---

## Prerequisites

1. **In a project directory?** — Must have a recognizable project root
   ```bash
   ls -la
   ```
   Look for `package.json`, `pyproject.toml`, `go.mod`, `pom.xml`, or similar.
   If nothing found → ask the user which directory to validate.

2. **Load team standards** — Check `~/.kiro/steering/` for:
   - `core-standards.md` — coding conventions and quality thresholds
   - `testing-standards.md` — coverage requirements
   - `git-workflow-standards.md` — branch and commit conventions
   - `security-standards.md` — security requirements

   If no steering files are loaded → apply general best practices and note in the report which standards were used.

---

## Step 1: Detect Project Type

Identify the language, framework, and build system:

```bash
ls package.json pyproject.toml go.mod pom.xml build.gradle 2>/dev/null
```

| File Found | Project Type |
|------------|-------------|
| `package.json` | Node.js |
| `pyproject.toml` / `requirements.txt` | Python |
| `go.mod` | Go |
| `pom.xml` / `build.gradle` | Java/Kotlin |
| None of the above | Ask the user |

Report the detected type at the start of the validation.

---

## Step 2: Validate Project Structure

Check for required and recommended files:

| Check | Required? | How to Verify |
|-------|-----------|---------------|
| `README.md` exists | ✅ Required | `ls README.md` |
| `.gitignore` exists | ✅ Required | `ls .gitignore` |
| `CHANGELOG.md` exists | ⚠️ Recommended | `ls CHANGELOG.md` |
| Source directory exists | ⚠️ Recommended | Look for `src/`, `lib/`, `app/` |
| CI/CD config exists | ⚠️ Recommended | Look for `.github/workflows/`, `.gitlab-ci.yml`, etc. |

---

## Step 3: Validate Architecture

Check that the project structure reflects the architecture pattern defined in `~/.kiro/steering/backend-standards.md` (if loaded), or common patterns:

**Ports & Adapters / Hexagonal:**
- Domain/core layer exists (`src/domain/`, `src/core/`)
- Adapters layer exists (`src/adapters/`, `src/infrastructure/`)
- Domain has no external dependencies (check for framework imports inside domain)

```bash
# Should return NO results for a clean domain layer
grep -rn "from 'express'\|from 'fastapi'\|from 'django'" src/domain/ src/core/ 2>/dev/null
```

**Layered / MVC:**
- Controllers, services, and repositories are separated

**Other:**
- Apply the pattern defined in steering files, or ask the user what pattern the project uses

---

## Step 4: Validate Documentation

Check README content quality:

| Check | What to Look For |
|-------|-----------------|
| Has overview | First section describes what the project does |
| Has setup/install instructions | Contains "setup", "install", or "getting started" section |
| Has usage examples | Contains code blocks or usage section |
| API docs exist (if backend) | OpenAPI spec, `docs/api/`, or API reference |

---

## Step 5: Validate Testing

| Check | How to Verify |
|-------|--------------|
| Test directory exists | Look for `test/`, `tests/`, `__tests__/`, `spec/` |
| Test configuration exists | Look for `jest.config.*`, `vitest.config.*`, `pytest.ini`, etc. |
| Test script is defined | Check `scripts.test` in `package.json` or equivalent |
| Coverage threshold is configured | Check for coverage config — compare against team standard from steering file |
| Test files actually exist | Look for `*.test.ts`, `*.spec.py`, `*_test.go`, etc. |

```bash
# Count test files
find . -name "*.test.ts" -o -name "*.test.js" -o -name "*.spec.ts" 2>/dev/null | wc -l
```

---

## Step 6: Validate Git Hygiene

| Check | How to Verify |
|-------|--------------|
| `.gitignore` covers build output | Check for `node_modules`, `dist`, `build`, `__pycache__` |
| `.gitignore` covers secrets | Check for `.env`, `*.pem`, `*.key` |
| No `.env` files committed | `git ls-files | grep -E "^\.env"` |
| Commit message format | Check recent commits: `git log --oneline -10` |

---

## Step 7: Validate Package/Dependency Config (if applicable)

For Node.js projects:

| Check | How to Verify |
|-------|--------------|
| `name` and `description` in package.json | Read package.json |
| `build`, `test`, `lint` scripts defined | Check `scripts` section |
| No wildcard dependency versions | Check for `*` or `latest` in dependencies |
| TypeScript strict mode (if TypeScript) | Check `tsconfig.json` for `"strict": true` |

---

## Step 8: Security Quick Check

```bash
# Check for committed .env files
git ls-files | grep -E "\.env$|\.env\."

# Check for hardcoded secret patterns
grep -rn --include="*.ts" --include="*.js" --include="*.py" \
  -E "(password\s*=\s*['\"][^'\"]{4,}|api_key\s*=\s*['\"]|secret\s*=\s*['\"])" \
  src/ app/ lib/ 2>/dev/null --exclude-dir=node_modules
```

| Check | What to Look For |
|-------|-----------------|
| No `.env` files committed | `git ls-files` returns nothing for `.env*` |
| No hardcoded secrets in source | No passwords, API keys, tokens in source files |
| No critically outdated dependencies | Run `npm audit` / `pip-audit` / `govulncheck` if available |

---

## Step 9: Generate Report

```markdown
# Project Validation Report — [project-name]

**Date**: [timestamp]
**Project Type**: [detected language/framework]
**Standards Used**: [steering files loaded, or "general best practices"]
**Overall**: ✅ PASS / ⚠️ WARNINGS / ❌ FAIL

## Summary

| Category | ✅ Pass | ⚠️ Warn | ❌ Fail |
|----------|---------|---------|---------|
| Structure | | | |
| Architecture | | | |
| Documentation | | | |
| Testing | | | |
| Git Hygiene | | | |
| Package Config | | | |
| Security | | | |
| **Total** | | | |

## ❌ Failures (must fix)

1. **[Category] — [Check]**
   - Problem: [what's wrong]
   - Location: [file or path]
   - Fix: [specific action]

## ⚠️ Warnings (should fix)

1. **[Category] — [Check]**
   - Recommendation: [action]

## ✅ Passing

[List all passing checks]

## Auto-Fixes Available

[List any issues that can be fixed automatically — offer to run them]
```

---

## Edge Cases

| Situation | Action |
|-----------|--------|
| No package.json or build system detected | Ask the user what type of project this is before continuing |
| No steering files loaded | Apply general best practices, note in report |
| Monorepo with multiple packages | Validate each package directory separately |
| Project uses non-standard directory structure | Ask the user about the structure before flagging warnings |
| Test framework not recognized | Ask the user which testing framework is in use |

---

## Quick Reference

```
#project-validation workflow:
1. Detect project type and load team standards
2. Validate project structure (README, .gitignore, CI config)
3. Validate architecture pattern
4. Validate documentation quality
5. Validate testing setup and coverage config
6. Validate git hygiene (.gitignore, no committed secrets)
7. Validate package/dependency config
8. Run security quick check
9. Generate structured report with pass/warn/fail findings
```

---

## Integration

- **Works with**: `reviewer` agent (invoke as part of pre-merge review)
- **Works with**: hooks (set as a `userTriggered` hook for on-demand validation)
- **MCP dependencies**: None — filesystem only
- **Stack requirements**: None — adapts to any language and framework
