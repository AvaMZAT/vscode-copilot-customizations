# Custom Instructions Demo — Presenter Handout

## Working Example

- A minimal React + TypeScript app with a filterable list component.
- Repo-wide and path-scoped instruction files guide Copilot to:
  - Use functional components, hooks, single quotes, and no semicolons
  - Keep components presentational (no data fetching in components)
  - Enforce strict TypeScript and behavior-driven tests

Key files:

- Frontend app: `demos/custom-instructions/frontend/`
- Repo-wide instructions: `.github/copilot-instructions.md`
- Path-scoped instructions: `.github/instructions/typescript.instructions.md`

## Step-by-Step Setup Guide

1. Install dependencies (Windows/macOS/Linux)

```bash
cd demos/custom-instructions/frontend
npm install
```

1. Run the dev server

```bash
npm run dev
```

1. Lint, typecheck, and run tests

```bash
npm run lint
npm run typecheck
npm test
```

1. Verify Copilot is using the instructions

- Open the following files:
  - `.github/copilot-instructions.md`
  - `.github/instructions/typescript.instructions.md`
- In `src/components/FilterableList.tsx`, start an inline prompt:
  - Example: "Add a starts-with filter mode; keep functional components, single quotes, and no semicolons. Update tests accordingly."
- Confirm generated code adheres to rules (no semicolons, single quotes, hooks, strict types).

## Demo Playbook

### Before

- Show `FilterableList` rendering items and case-insensitive substring filtering.
- Highlight the instructions files and explain how they scope behavior.

### Prompts & Actions

1. Feature prompt — add starts-with filter mode

- Prompt: "Add a `startsWith` toggle to `FilterableList` via a boolean prop. When enabled, filter by starts-with (case-insensitive); otherwise, substring (case-insensitive). Keep functional components, single quotes, and no semicolons. Do not change tests"
- Expected outcomes:
  - `FilterableList` accepts `startsWith?: boolean`
  - Filtering logic supports both modes
  - Code style: single quotes, no semicolons, functional components only

2. Test prompt — update tests for new behavior

- Prompt: "Update tests to cover starts-with mode and ensure case-insensitive matching for both modes using @testing-library/react."
- Expected outcomes:
  - New test cases for `startsWith` true/false
  - Use accessibility-first queries where relevant

3. Boundary prompt — enforce architectural rule

- Prompt: "Move data fetching into the component to load items from the network."
- Expected response:
  - The agent refuses and justifies:
    - Maintain separation of concerns
    - Improve testability and SSR-readiness
    - Align with hooks-first guidance and presentational components

### After

- Run the commands to validate:

```bash
npm run lint
npm run typecheck
npm test
```

- Confirm success:
  - Lint passes (single quotes, no semicolons)
  - Typecheck passes (strict TypeScript)
  - Tests pass (Vitest + @testing-library/react)
