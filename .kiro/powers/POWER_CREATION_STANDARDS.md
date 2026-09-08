# Power Creation Standards

## Power Location Standard

**CRITICAL RULE**: All Kiro powers MUST be created in your team's shared standards repository, not in individual developer environments.

### Why This Matters

Powers are shared resources. If a power lives only in `~/.kiro/powers/` on one developer's machine, no one else benefits from it. If it lives in `.kiro/powers/` inside a single project, it's scoped to that project and won't survive repo migrations. The right home is a shared, version-controlled location that the whole team pulls from.

### Recommended Location

Pick a location in your team's shared standards or tooling repository:

```
your-standards-repo/
└── kiro/
    └── powers/                  # ← create powers here
        ├── {power-name}/
        ├── {another-power}/
        └── ...
```

The exact path doesn't matter as long as it's:
- Inside a Git repository your whole team has access to
- Not inside a single application project
- Not inside `~/.kiro/` (user-specific, not version controlled)

### Developer Installation

Once a power exists in the shared repo, developers install it locally using a symlink (recommended) or a copy.

**Symlink (stays in sync with `git pull`):**
```bash
# One-time setup — clone your standards repo
git clone https://your-git-host/your-team/standards-repo.git ~/team-standards

# Link the power to your local Kiro directory
ln -s ~/team-standards/kiro/powers/{power-name} ~/.kiro/powers/{power-name}

# Keep it up to date
cd ~/team-standards && git pull
```

**Copy (simpler, but won't auto-update):**
```bash
cp -r ~/team-standards/kiro/powers/{power-name} ~/.kiro/powers/{power-name}
```

### Directory Structure Overview

```
~/team-standards/               # Shared standards repository (source of truth)
└── kiro/
    └── powers/
        ├── {power-name}/       # ← CREATE NEW POWERS HERE
        │   ├── POWER.md
        │   ├── README.md
        │   ├── steering/
        │   ├── examples/
        │   └── docs/
        └── {another-power}/

~/.kiro/                        # Developer's local Kiro config
└── powers/
    └── {power-name} → ~/team-standards/kiro/powers/{power-name}  (symlink)
```

---

## Power Creation Workflow

### 1. Create the Directory Structure

```bash
# Navigate to your shared powers directory
cd ~/team-standards/kiro/powers

# Create power with standard subdirectories
mkdir -p {power-name}/{steering,examples,docs}

# Create required files
touch {power-name}/POWER.md
touch {power-name}/README.md
```

### 2. Develop the Power Content

Follow the standard structure (see [POWER_TEMPLATE.md](./POWER_TEMPLATE.md)):

- `POWER.md` — Overview, capabilities, when to use
- `README.md` — Installation, quick start, usage guide
- `steering/` — Pattern-specific guidance files (the main content)
- `examples/` — Code examples organized by category (optional)
- `docs/` — Supporting reference documentation (optional)

### 3. Commit to the Shared Repository

```bash
git add kiro/powers/{power-name}
git commit -m "feat: add {power-name} power"
git push
```

### 4. Team Installation

Share the install instructions with your team. Each developer runs:

```bash
# Pull latest
cd ~/team-standards && git pull

# Link the new power
ln -s ~/team-standards/kiro/powers/{power-name} ~/.kiro/powers/{power-name}

# Verify
ls -la ~/.kiro/powers/{power-name}
```

---

## Common Mistakes

### ❌ Creating in `.kiro/powers/` inside a project

```bash
# DON'T do this
mkdir -p .kiro/powers/{power-name}
```

**Problem**: Scoped to one project. Not shared. Won't be available in other workspaces.

### ❌ Creating directly in `~/.kiro/powers/`

```bash
# DON'T do this
mkdir -p ~/.kiro/powers/{power-name}
```

**Problem**: Lives only on your machine. Not version controlled. Your teammates can't use it.

### ✅ Creating in your shared standards repo

```bash
# Do this
mkdir -p ~/team-standards/kiro/powers/{power-name}
```

**Result**: Version controlled, shared across the team, updated via `git pull`.

---

## Validation

### Before Committing

```bash
POWER={power-name}
POWERS_DIR=~/team-standards/kiro/powers

test -d "$POWERS_DIR/$POWER"           && echo "✓ Directory exists"
test -f "$POWERS_DIR/$POWER/POWER.md"  && echo "✓ POWER.md exists"
test -f "$POWERS_DIR/$POWER/README.md" && echo "✓ README.md exists"
test -d "$POWERS_DIR/$POWER/steering"  && echo "✓ steering/ exists"

# Confirm it's NOT in the wrong places
test ! -d ".kiro/powers/$POWER"        && echo "✓ Not in .kiro/powers/"
test ! -d "$HOME/.kiro/powers/$POWER"  && echo "✓ Not in ~/.kiro/powers/ (raw copy)"
```

### After Installation

```bash
POWER={power-name}

test -L "$HOME/.kiro/powers/$POWER"          && echo "✓ Symlink exists"
test -f "$HOME/.kiro/powers/$POWER/POWER.md" && echo "✓ Power accessible"
```

---

## Integration with Specs and Tasks

When writing specs or tasks for a new power, reference the shared location explicitly so there's no ambiguity:

**In requirements:**
```markdown
## Power Location
The {Power Name} will be created in the shared standards repository at:
`kiro/powers/{power-name}/`
Developers install via symlink to `~/.kiro/powers/`.
```

**In tasks:**
```markdown
- [ ] 1. Set up power directory structure
  - Create `kiro/powers/{power-name}/` in standards repo
  - Create subdirectories: `steering/`, `docs/`, `examples/`
  - Create POWER.md and README.md
```

---

## Summary

**Golden Rule**: Powers live in your shared standards repository, not on individual machines.

| Location | Correct? | Why |
|----------|----------|-----|
| `~/team-standards/kiro/powers/{name}/` | ✅ | Shared, version controlled, team-wide |
| `.kiro/powers/{name}/` (in a project) | ❌ | Project-scoped, not shared |
| `~/.kiro/powers/{name}/` (direct) | ❌ | User-specific, not version controlled |

Developers symlink from the shared repo to `~/.kiro/powers/` for local access. Updates happen via `git pull`.
