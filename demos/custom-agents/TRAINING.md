# Custom Agents Demo — Presenter Handout

## Working Example

The `@test-specialist` custom agent is a VS Code Copilot persona defined in `.github/agents/test-specialist.agent.md`.

When invoked via VS Code Chat:
- Opens the chat panel
- Selects `@test-specialist` from the agents dropdown
- Asks it to write or refactor tests
- Agent writes focused unit tests following the **AAA pattern** (Arrange-Act-Assert)
- Agent ensures every code change has test coverage before suggesting production edits

Key files:

- Agent profile: `.github/agents/test-specialist.agent.md`
- Demo app: `demos/custom-agents/frontend/src/`
- Sample component: `src/components/Calculator.tsx`
- Sample tests: `src/components/Calculator.test.tsx`

## Step-by-Step Setup Guide

1. Install dependencies

```bash
cd demos/custom-agents/frontend
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Validate locally

```bash
npm run lint
npm run typecheck
npm test
```

4. Open VS Code Chat

- Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open Copilot Chat
- Or use the Chat icon in the sidebar

5. Invoke the custom agent

- In the Chat input, type `@test-specialist`
- The dropdown should show the custom agent
- Select it and ask for test help (see Demo Playbook below)

## Demo Playbook

### Before

- Show `.github/agents/test-specialist.agent.md` and highlight:
  - Name and description
  - Core behavior (AAA pattern, accessibility-first, boundary rule)
  - Example test
  - Anti-patterns section
- Show current `Calculator.tsx` (minimal tests)
- Show `Calculator.test.tsx` (basic single test)

### Prompts & Actions

1. **Write comprehensive tests for Calculator**

   - Prompt: "@test-specialist write unit tests for Calculator component covering the add and subtract methods, use AAA pattern and accessibility-first queries"
   - Expected: Agent adds tests for:
     - Rendering with initial value
     - Testing add function output
     - Testing subtract function output
     - Accessibility (e.g., text content queries)
   - All tests follow AAA pattern with explicit Arrange/Act/Assert

2. **Refactor tests for clarity**

   - Prompt: "@test-specialist refactor the Calculator tests to group rendering and behavior tests separately, improve test names for clarity"
   - Expected: Agent:
     - Organizes tests into logical groups (comments or describe blocks)
     - Improves test names (e.g., "renders Calculator" → "renders calculator with title and initial value")
     - Ensures all tests still pass
     - Explains refactoring intent

3. **Run and validate all tests**

   - Prompt: "Run npm test and npm run lint; confirm all pass"
   - Expected: All tests passing, no lint errors
   - Agent respects the boundary: no production code edits without tests

4. **Boundary enforcement**

   - Prompt: "@test-specialist propose adding a multiply method to Calculator" (without tests first)
   - Expected: Agent should refuse or insist on writing tests first per its boundary rule

### After

- Re-run validation:

```bash
npm run lint
npm run typecheck
npm test
```

- Confirm success: all tests passing, lint/typecheck clean
- Note how the agent respects the boundary: production code changes tied to test coverage

## Key Takeaways

- **Custom agents** provide specialized personas tailored to specific workflows (testing, refactoring, code review, etc.)
- **Agent profiles** are defined in `.github/agents/*.agent.md` with frontmatter and behavior instructions
- **Boundaries** (like "never modify production code without tests") enforce quality gates
- **VS Code Chat** integration (`@agent-name`) makes invoking custom agents seamless
