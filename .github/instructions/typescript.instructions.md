---
applyTo: 'demos/custom-instructions/frontend/**'
description: Frontend TypeScript + React rules
---

## Rules
- Use functional components; do not create class components
- Prefer React hooks over lifecycles; isolate side-effects in hooks
- Enforce single quotes and no semicolons
- Enable strict TypeScript; avoid `any`; prefer `unknown` and narrow
- Explicitly type props and exported function returns
- Keep components small; lift data fetching out of React components
- Tests: use Vitest + @testing-library/react; prefer a11y queries
