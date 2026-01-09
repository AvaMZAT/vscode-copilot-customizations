# Agents.md Demo Guidance

## Commands (run in order)

- Install: `cd demos/agentsmd/frontend && npm install`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Test: `npm test`
- Build: `npm run build`

## Coding Conventions

- TypeScript strict; no `any` (prefer `unknown` + narrowing)
- Functional React components only; hooks over classes
- Single quotes, no semicolons; keep components small and pure

## Boundaries

- Do not edit files under `demos/agentsmd/infra/`
- Do not modify the bootstrapping file `demos/agentsmd/frontend/src/main.tsx`
- Do not delete or skip failing tests; fix code instead
- Avoid adding external services or network dependencies

## Examples

- Component snippet (good):

  ```tsx
  const Pill = ({ label }: { label: string }) => (
    <span style={{ padding: 4, borderRadius: 8 }}>{label}</span>
  )
  ```

- Test snippet (good):

  ```tsx
  import { render, screen } from '@testing-library/react'
  import Pill from './Pill'

  test('renders label', () => {
    render(<Pill label='High' />)
    expect(screen.getByText('High')).toBeInTheDocument()
  })
  ```

## PR Rules

- Keep commits focused; use concise messages (e.g., `feat(task): add priority flag`)
- Include test updates with behavior changes
- Ensure lint, typecheck, and tests pass before raising PR
