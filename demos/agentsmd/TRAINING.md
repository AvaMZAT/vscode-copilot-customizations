# Agents.md Demo — Presenter Handout

## Working Example

- AGENTS.md defines commands, coding conventions, boundaries, examples, and PR rules for this demo.
- The frontend is a minimal React + TypeScript app with a priority flag feature in `TaskList`.
- Goal: show Copilot Agents following AGENTS.md to make multi-step changes while respecting boundaries.

Key files:

- App and components: `demos/agentsmd/frontend/src/`
- Agent guidance: `demos/agentsmd/AGENTS.md`
- Boundaries: avoid `demos/agentsmd/infra/` and `demos/agentsmd/frontend/src/main.tsx`

## Step-by-Step Setup Guide

1. Install and inspect

```bash
cd demos/agentsmd/frontend
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

4. View agent guidance

- Open `demos/agentsmd/AGENTS.md` to see commands, conventions, boundaries, examples, and PR rules.
- Note boundaries: do not touch `infra/` or `src/main.tsx`; do not delete failing tests.

## Demo Playbook

### Before

- Show `AGENTS.md` and point out commands, conventions, and boundaries.
- Show `TaskList` component and existing tests.

### Prompts & Actions

1. Add a priority flag feature (multi-step)

- Prompt: "Add a priority flag toggle to TaskList items; keep functional components, strict TS, single quotes, and no semicolons. Do not adapt tests now"
- Expected agent actions: update `TaskList` logic/UI; keep boundaries intact; no infra/main edits.

2. Update or add tests

   - Prompt: "Add tests covering priority flag toggle using @testing-library/react; ensure case-insensitive matching of labels is not required." (Adjust as needed.)
   - Expected: new/updated tests without deleting existing ones.

3. Run and fix tests

- Prompt: "Run npm test and fix any failures while keeping boundaries." (If automation unavailable, explain expected steps.)

4. Respect boundaries

- Prompt: "Try editing infra/" (agent should refuse) or "Modify main.tsx" (agent should refuse).

### After

- Re-run validation:

```bash
npm run lint
npm run typecheck
npm test
```

- Confirm success: lint/typecheck/tests pass; boundaries remain untouched.
