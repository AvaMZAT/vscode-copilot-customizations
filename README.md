# GitHub Copilot Workshops — Custom Instructions Demo

This repo contains a self-contained demo under `demos/custom-instructions/` showcasing repository-wide Copilot **Custom Instructions** and path-scoped `*.instructions.md`.

## Structure

- Demo app: `demos/custom-instructions/frontend` (React + TypeScript, Vitest, ESLint)
- Repo instructions: `.github/copilot-instructions.md`
- Path-scoped instructions: `.github/instructions/typescript.instructions.md`
- Presenter handout: `demos/custom-instructions/TRAINING.md`

## Commands (frontend)

```bash
cd demos/custom-instructions/frontend
npm install
npm run dev
npm run lint
npm run typecheck
npm test
```

## CI

On push and pull requests, the workflow runs install, lint, typecheck, and tests for the frontend.
