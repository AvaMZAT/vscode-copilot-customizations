---
name: explain-code
description: Explain code clearly for a specific audience with structured sections.
agent: agent
---

# Explain Code

Audience: ${input:audience|developers}
Target File/Code: ${input:target}

Instructions:
- Purpose: Summarize what the code does in one or two sentences.
- Structure: Break down by functions, props, state, and side-effects.
- Complexity: Highlight tricky parts and edge cases.
- Usage: Show a short example of how to use it.
- Risks: Note potential pitfalls or maintenance concerns.

Output Format:
- Title: component/module name
- Summary
- Key parts
- Example usage
- Pitfalls

Ask for approval before making any changes or running commands.
