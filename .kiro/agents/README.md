# Kiro Custom Agents

Custom agents give Kiro a defined role, a focused set of tools, and a system prompt that governs its behavior for a specific job. Instead of starting every conversation with context-setting, you codify the role once and invoke it by name.

## When to Define a Custom Agent

A custom agent is worth creating when you have a **recurring, well-scoped role** that:

- Has a distinct set of responsibilities (e.g., "only designs, never implements")
- Should have restricted tool access (e.g., read-only on source, write-only to test directories)
- Needs specific MCP servers (e.g., a database agent needs a DB connection)
- Benefits from safety rails enforced at the system prompt level
- Gets invoked frequently enough that repeating the context in chat is friction

One architect agent, one reviewer agent, one test generator agent — each doing one thing well — is better than a single "do everything" agent with a long prompt.

## Agent Structure

Each agent is two files — a JSON config and a markdown prompt:

```
kiro/agents/
├── {agent-name}.json           # Config: tools, permissions, MCP servers, resources
├── {agent-name}/
│   └── prompt.md               # System prompt: role, workflow, safety rails
├── {agent-name}/
│   ├── templates/              # Optional: output templates the agent uses
│   │   └── *.md
│   └── checklists/             # Optional: checklists loaded as resources
│       └── *.md
└── README.md                   # This file
```

The JSON config controls **what the agent can do**.
The prompt controls **how the agent behaves**.

## Agent JSON Reference

See [AGENT_TEMPLATE.json](./AGENT_TEMPLATE.json) for a fully annotated example.

Key fields:

| Field | Purpose |
|-------|---------|
| `name` | Identifier used to invoke the agent |
| `description` | One sentence shown in the agent picker — make it scannable |
| `prompt` | Path to the system prompt markdown file |
| `tools` | Tools the agent can see |
| `allowedTools` | Tools the agent can actually use (subset of `tools`) |
| `mcpServers` | MCP servers wired to this agent |
| `toolsSettings` | Fine-grained restrictions (allowed paths for write, allowed commands for shell) |
| `resources` | Files pre-loaded into the agent's context at startup |

## Tool Categories

| Tool | What it does |
|------|-------------|
| `read` | Read files from the workspace |
| `write` | Write/edit files in the workspace |
| `code` | Execute code analysis (LSP, diagnostics) |
| `grep` | Search file contents |
| `glob` | Search file paths |
| `shell` | Run shell commands |
| `knowledge` | Query the Kiro knowledge store |
| `web_search` | Search the web |
| `use_subagent` | Invoke another agent |
| `checkpoint` | Save/restore conversation state |

**Principle of least privilege**: only give an agent the tools it genuinely needs. A design agent doesn't need `shell`. A read-only reviewer doesn't need `write`.

## Prompt Structure

See [AGENT_TEMPLATE/prompt.md](./AGENT_TEMPLATE/prompt.md) for a fully annotated example.

A well-structured agent prompt has:

1. **Role Definition** — who this agent is and what it's for
2. **Core Responsibilities** — the specific jobs it does
3. **Mandatory Workflow** — the steps it must follow, in order
4. **Safety Rails** — hard rules it must never violate (NEVER / ALWAYS)
5. **Output Format** — what its responses look like

Safety rails are the most important part. They prevent the agent from doing things that seem helpful in the moment but violate your process — like an architect that starts writing implementation code, or a reviewer that approves without running the checklist.

## Installation

Agents in this repo are **templates and references**. To activate them in Kiro, install to your local Kiro agents directory:

```bash
# Symlink the entire agents directory (recommended — stays in sync)
ln -s /path/to/this-repo/kiro/agents ~/.kiro/agents

# Or copy individual agents
cp kiro/agents/my-agent.json ~/.kiro/agents/
cp -r kiro/agents/my-agent/ ~/.kiro/agents/
```

For workspace-scoped agents (only available in one project), place them in `.kiro/agents/` at the project root.

## Common Agent Patterns

### Design-only agent (no write to src)
```json
"toolsSettings": {
  "write": {
    "allowedPaths": ["docs/**", ".kiro/specs/**"]
  }
}
```

### Read-only reviewer (no write at all)
Omit `write` from `tools` and `allowedTools` entirely.

### Test generator (write to tests only)
```json
"toolsSettings": {
  "write": {
    "allowedPaths": ["tests/**", "**/*.test.ts", "**/*.spec.ts"]
  }
}
```

### Shell-restricted agent (specific commands only)
```json
"toolsSettings": {
  "shell": {
    "allowedCommands": ["npm test*", "npm run lint*", "git log*", "git diff*"]
  }
}
```

## Agent Collaboration

Agents can invoke each other using `use_subagent`. A typical pattern:

```
Architect agent → designs spec → invokes Reviewer agent to validate
Reviewer agent → returns feedback → Architect refines
```

When designing multi-agent workflows, define the handoff points explicitly in each agent's prompt so the collaboration is predictable.
