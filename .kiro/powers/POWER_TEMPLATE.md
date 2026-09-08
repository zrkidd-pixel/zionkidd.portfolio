# Power Template

Use this template when creating a new Kiro Power. Replace all `[placeholders]` with your power's specific content.

## Location Reminder

Before you start — powers belong in your team's shared standards repository, not in a single project or your local `~/.kiro/`. See [POWER_CREATION_STANDARDS.md](./POWER_CREATION_STANDARDS.md).

---

## Power Directory Structure

```
kiro/powers/{power-name}/
├── POWER.md                    # Overview and capabilities
├── README.md                   # Installation and usage guide
├── steering/                   # Detailed pattern documentation (main content)
│   ├── pattern-1.md
│   ├── pattern-2.md
│   └── ...
├── docs/                       # Supporting reference documentation (optional)
│   ├── strategy.md
│   ├── troubleshooting.md
│   └── ...
├── examples/                   # Code examples (optional)
│   ├── example-1.js
│   └── ...
└── validate.js                 # Structure validation script (optional)
```

---

## POWER.md Template

```markdown
# [Power Name] Power

## Overview

[Brief description of what this Power provides and why it exists. 2-3 sentences.]

## Capabilities

This Power provides guidance for:

- **[Capability 1]** — [Description]
- **[Capability 2]** — [Description]
- **[Capability 3]** — [Description]

## When to Use This Power

Use this Power when:
- [Use case 1]
- [Use case 2]
- [Use case 3]

## Key Patterns

### [Pattern Category 1]

**File:** [steering/pattern-file.md](steering/pattern-file.md)

**Provides:**
- [Pattern 1]
- [Pattern 2]

### [Pattern Category 2]

**File:** [steering/another-pattern.md](steering/another-pattern.md)

**Provides:**
- [Pattern 1]
- [Pattern 2]

## Quick Reference

| Need | File | Section |
|------|------|---------|
| [Need 1] | `steering/file.md` | "[Section Name]" |
| [Need 2] | `docs/file.md` | "[Section Name]" |

## External Resources

- [Resource Name](URL) — Description

## Getting Started

1. Read [README.md](README.md) for installation and usage
2. Review steering files for specific patterns
3. Check `examples/` for code samples

---

**Version:** 1.0.0
**Status:** ✅ Available | 🚧 In Development
**Maintained By:** [Team Name]
```

---

## README.md Template

```markdown
# [Power Name] — Installation and Usage Guide

## Overview

[Detailed description of what this Power helps developers accomplish.]

This Power provides:
- **[Feature 1]** — [Description]
- **[Feature 2]** — [Description]
- **[Feature 3]** — [Description]

## Installation

### Prerequisites

- **[Requirement 1]** — [Description]
- **[Requirement 2]** — [Description]

### Install from Shared Standards Repo

```bash
# Symlink (recommended — stays in sync with git pull)
ln -s ~/team-standards/kiro/powers/{power-name} ~/.kiro/powers/{power-name}

# Or copy (simpler, but won't auto-update)
cp -r ~/team-standards/kiro/powers/{power-name} ~/.kiro/powers/{power-name}
```

## Quick Start

[2-3 steps to start using the power immediately]

### 1. [First Step]

```
[Example or code]
```

### 2. [Second Step]

```
[Example or code]
```

## Directory Structure

```
{power-name}/
├── POWER.md           # Power overview
├── README.md          # This file
├── steering/          # Pattern documentation
│   ├── pattern-1.md
│   └── pattern-2.md
├── docs/              # Supporting docs
└── examples/          # Code examples
```

## Usage Guide

### For [Use Case 1]

**When to use:** [Description]

**Read:** [steering/pattern-file.md](steering/pattern-file.md)

**Key patterns:**
- [Pattern 1]
- [Pattern 2]

**Examples:** See `examples/[category]/`

### For [Use Case 2]

**When to use:** [Description]

**Read:** [steering/another-pattern.md](steering/another-pattern.md)

## Practical Scenarios

### Scenario 1: [Common Task]

**You need to:** [Description]

1. Open `steering/[file].md`
2. Find the "[Section]" section
3. Follow the pattern:

```
[Code or example]
```

### Scenario 2: [Another Common Task]

[Follow the same structure]

## With Kiro AI

Reference this power explicitly in your prompt:

```
Using the [power-name] patterns, help me [task description]
```

## Troubleshooting

### [Common Issue 1]

**Symptoms:** [Description]

**Solution:** [Step-by-step fix]

### [Common Issue 2]

[Follow the same structure]

## Contributing

1. Follow your team's engineering standards
2. Ensure all code examples are valid and runnable
3. Include documentation for any new patterns
4. Update this README when adding features

---

**Version:** 1.0.0
**Last Updated:** [Date]
**Maintained By:** [Team Name]
```

---

## Steering File Template

```markdown
# [Pattern Name]

## Overview

[Brief description of what this pattern covers and when to use it.]

**Key Characteristics:**
- [Characteristic 1]
- [Characteristic 2]

**When to Use:**
- [Use case 1]
- [Use case 2]

## [Pattern Section 1]

[Explanation of the pattern]

### Pattern Structure

```
[Code or pseudocode showing the pattern]
```

### Complete Example

```
[Complete, runnable example]
```

### Key Points

- **[Point 1]:** [Explanation]
- **[Point 2]:** [Explanation]

## [Pattern Section 2]

[Follow the same structure]

## Best Practices

### Do ✅

1. **[Practice 1]:** [Explanation]
2. **[Practice 2]:** [Explanation]

### Don't ❌

1. **[Anti-pattern 1]:** [Explanation]
2. **[Anti-pattern 2]:** [Explanation]

## Common Mistakes

**Mistake: [Description]**

```
// ❌ BAD
[bad example]

// ✅ GOOD
[good example]
```

## Quick Reference

| Need | Pattern | See |
|------|---------|-----|
| [Need 1] | [Pattern name] | [section] |
| [Need 2] | [Pattern name] | [section] |

---

**Related:**
- [steering/related-pattern.md](related-pattern.md)
```

---

## Creation Checklist

### Planning
- [ ] Define scope and purpose — what problem does this power solve?
- [ ] Identify target audience and use cases
- [ ] List the key patterns and capabilities it will provide
- [ ] Check existing powers to avoid duplication

### Structure
- [ ] Create directory in shared standards repo: `kiro/powers/{power-name}/`
- [ ] Create `steering/`, `docs/`, `examples/` subdirectories
- [ ] Create `POWER.md` using template above
- [ ] Create `README.md` using template above

### Content
- [ ] Write steering files — one per distinct pattern area
- [ ] Include code examples for each pattern
- [ ] Add quick reference tables
- [ ] Document common issues and solutions
- [ ] Link to relevant external resources

### Quality
- [ ] All code examples are valid and runnable
- [ ] All internal links work
- [ ] Consistent terminology throughout
- [ ] Another team member has reviewed the content
- [ ] Validation script created (optional but recommended)

### Integration
- [ ] Add power to your powers `README.md`
- [ ] Test that Kiro AI activates the power correctly
- [ ] Document installation steps for your team
- [ ] Get team review and feedback

### Launch
- [ ] Announce to the team
- [ ] Provide a short walkthrough or demo
- [ ] Gather initial feedback
- [ ] Iterate based on real usage

---

## Power Quality Standards

### Documentation
- Clear, actionable patterns with concrete examples
- Consistent structure following this template
- Practical usage scenarios, not just abstract descriptions
- Troubleshooting guidance for common failure modes

### Code Examples
- Valid, runnable code
- Follow your team's coding standards
- Demonstrate best practices, not just syntax
- Include both good and bad examples where helpful

### Usability
- Easy to navigate — someone should find what they need in under 2 minutes
- Works well when loaded into Kiro AI context
- Quick reference tables for common lookups
- Links between related patterns

### Maintenance
- Version number and last updated date on every file
- Clear ownership (who maintains this?)
- Contribution guidelines so others can improve it
