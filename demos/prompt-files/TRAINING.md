# Prompt Files Demo — Presenter Handout

## Working Example

Prompt Files (`*.prompt.md`) define reusable slash-commands in VS Code Copilot Chat. This demo adds two:
- `/explain-code` — explains code for a specific audience
- `/generate-unit-tests` — generates unit tests with AAA pattern

Locations:
- Prompt files: `.github/prompts/`
- Frontend demo: `demos/prompt-files/frontend/`

## Step-by-Step Setup Guide

1. Install and inspect
```bash
cd demos/prompt-files/frontend
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

4. Open VS Code Chat and use slash-commands
- Type `/explain-code` and pass variables:
  - `audience`: e.g., "new developers"
  - `target`: e.g., path or code selection
- Type `/generate-unit-tests` and pass variables:
  - `framework`: defaults to `vitest`
  - `component`: e.g., `src/components/Greeting.tsx`
  - `testPath`: optional output path

5. Apply edits
- Review streamed diffs
- Approve before writing files or running commands

## Demo Playbook

1) Explain code
- Prompt: `/explain-code audience="new developers" target="src/components/Greeting.tsx"`
- Expected: Structured explanation with summary, key parts, usage, pitfalls

2) Generate tests
- Prompt: `/generate-unit-tests component="src/components/Greeting.tsx"`
- Expected: AAA-structured tests with accessibility queries and descriptive names
- Approve the diff to write tests to `src/components/Greeting.test.tsx`

3) Run validations
```bash
npm run lint
npm run typecheck
npm test
```
- All commands pass successfully

## Notes
- Keep prompts concise and actionable
- Always stream diffs and ask for approval before commands
- Use AAA and accessibility-first testing patterns
