# Agent Skills Demo — Presenter Handout

## Working Example

Agent Skills are self-contained capability folders discovered on demand. This demo adds a `run-quality-gates` skill that executes lint, typecheck, and test commands, then summarizes results.

Locations:
- Skill: `.github/skills/run-quality-gates/`
- Frontend demo: `demos/skills/frontend/`

## Step-by-Step Setup Guide

1. Install and inspect
```bash
cd demos/skills/frontend
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

4. Enable and invoke skills
- Ensure you are on VS Code Insiders if required
- Open Copilot Chat and type: `run-quality-gates`
- Approve terminal commands when prompted
- View summarized results in the chat

5. Optional helper script
- Run the helper from the project folder:
```bash
node ../../.github/skills/run-quality-gates/quality-gates.mjs
```

## Demo Playbook

1) Break a test
- Edit `Status.test.tsx` to expect wrong text (e.g., expect "OK"), then run the skill
- Expected: Tests FAIL; skill summarizes failures and suggests remediation

2) Restore and pass
- Fix the assertion back to "All checks green"
- Run the skill again; all gates PASS

## Notes
- Minimal dependencies; cross-platform commands
- Stream diffs and ask approval before terminals
- Keep remediation specific and actionable
