# GitHub Copilot Workshops

A collection of interactive demos showcasing GitHub Copilot's advanced features: **Custom Instructions**, **Custom Agents**, **AGENTS.md**, **Prompt Files**, and **Agent Skills**.

## Demos Overview

Each demo is self-contained with its own frontend app (React + TypeScript), instructions, and presenter handout.

### 1. [Custom Instructions](demos/custom-instructions/)

Learn how to use repository-wide and path-scoped instructions to guide Copilot behavior.

- **What you'll learn**: Enforce code style, architectural patterns, and testing practices
- **Key file**: .github/copilot-instructions.md
- **Setup & playbook**: See [Custom Instructions TRAINING.md](demos/custom-instructions/TRAINING.md)

### 2. [Custom Agents](demos/custom-agents/)

Define custom agent personas to delegate specialized tasks like test writing.

- **What you'll learn**: Create and invoke @agent personas in Copilot Chat
- **Key file**: .github/agents/test-specialist.agent.md
- **Setup & playbook**: See [Custom Agents TRAINING.md](demos/custom-agents/TRAINING.md)

### 3. [AGENTS.md](demos/agentsmd/)

Use AGENTS.md to define multi-step AI workflows with boundaries and examples.

- **What you'll learn**: Set commands, coding conventions, PR rules, and architectural boundaries
- **Key file**: demos/agentsmd/AGENTS.md
- **Setup & playbook**: See [AGENTS.md TRAINING.md](demos/agentsmd/TRAINING.md)

### 4. [Prompt Files](demos/prompt-files/)

Create reusable slash-commands that combine predefined logic and user input.

- **What you'll learn**: Define /explain-code, /generate-tests, and other custom commands
- **Key file**: .github/prompts/
- **Setup & playbook**: See [Prompt Files TRAINING.md](demos/prompt-files/TRAINING.md)

### 5. [Agent Skills](demos/skills/)

Build self-contained capability folders that agents can discover and invoke on demand.

- **What you'll learn**: Create un-quality-gates and other reusable agent skills
- **Key file**: .github/skills/
- **Setup & playbook**: See [Agent Skills TRAINING.md](demos/skills/TRAINING.md)

### 6. [MCP (Model Context Protocol)](demos/mcp/)

Teaser demo showing how MCP servers extend Copilot with external tools and data sources.

- **What you'll learn**: Enable MCP servers and invoke tools in Copilot Chat
- **Resources**: See [MCP README.md](demos/mcp/README.md) and [MCP TRAINING.md](demos/mcp/TRAINING.md)

## Quick Start

Each demo follows the same pattern:

\\\ash
cd demos/<demo-name>/frontend
npm install
npm run dev
npm run lint
npm run typecheck
npm test
\\\

For detailed setup, playbook, and discussion points, see the **TRAINING.md** file in each demo folder.

## CI

On push and pull requests, the workflow validates all frontend applications by running install, lint, typecheck, and tests.
