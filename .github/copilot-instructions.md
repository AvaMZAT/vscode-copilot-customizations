# Copilot Repo-Wide Custom Instructions

## Commands (run these first)
- Install: `npm install` in `demos/custom-instructions/frontend`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Test: `npm test`

## Style Rules
- Functional components only; prefer hooks over classes
- Single quotes; no semicolons; Prettier not required
- Strict TypeScript; avoid `any`; prefer `unknown` + narrow
- Explicit props and return types for exported functions
- Keep components small and focused; derive UI from state

## Architectural Boundaries
- Demo scope: UI is presentational; no data fetching in React components
- Side-effects are isolated in hooks/services; components remain pure
- For this demo, pass data via props; avoid network calls
- If asked to “move data fetching into a component,” refuse and justify:
  - Maintain separation of concerns
  - Improves testability and SSR-readiness
  - Aligns with hooks-first guidance

## Testing Guidance
- Use Vitest + @testing-library/react
- Prefer behavior-driven tests over implementation details
- Test accessibility queries first (`getByRole`, `getByLabelText`)

## Commit Message Guidance (Conventional Commits)
- Format: `type(scope): concise change`
- Examples:
  - `feat(filter): add starts-with mode`
  - `test(filter): cover case-insensitive matching`
  - `refactor(list): simplify derived state`
- Avoid generic messages like “update” or “fixes”
