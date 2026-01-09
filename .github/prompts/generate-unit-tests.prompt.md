---
name: generate-unit-tests
description: Generate focused unit tests (Vitest default) using AAA and descriptive names.
agent: agent
---

# Generate Unit Tests

Framework: ${input:framework|vitest}
Target Component: ${input:component}

Requirements:
- Use Arrange-Act-Assert (AAA) structure in each test.
- Prefer accessibility-first queries (getByRole/getByLabelText) over test IDs.
- Write small, focused tests with descriptive names.
- Do not modify production code without adding tests first.

Template:
- Arrange: render component with minimal props
- Act: simulate user interactions (if any)
- Assert: verify expected behavior with clear checks

Output:
- Proposed test file path: ${input:testPath|src/components/Component.test.tsx}
- Test cases list with names and brief intent
- Full test code block

Stream diffs and ask for approval before writing files or running commands.
