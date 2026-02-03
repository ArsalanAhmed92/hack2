---
id: 1
title: Create Project Constitution
stage: constitution
date: 2026-02-03
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: main
user: unknown
command: /sp.constitution
labels: ["constitution", "spec-driven-development", "evolution-of-todo", "hackathon"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - AGENTS.md
tests:
 - none
---

## Prompt

Generate a Markdown constitution file named AGENTS.md for the "Evolution of Todo" hackathon project. This file serves as the project's non-negotiable principles and constraints, guiding all AI agents (like Claude Code) and developers. It must enforce Spec-Driven Development (SDD): Specify → Plan → Tasks → Implement, with no manual coding allowed. No code generation without referenced Task IDs.

Key elements from project details to include:
- Purpose: Spec-Driven AI-Native development, evolving Todo app from console to cloud-native chatbot.
- Rules: Never generate code without tasks; reference specs inline (e.g., [From: specify §2.1]); hierarchy: Constitution > Specify > Plan > Tasks.
- Agent Behavior: How agents must work (e.g., check constitution first, request clarifications if specs missing).
- Workflow: Integrate with Spec-Kit Plus (specs folders, .spec-kit/config.yaml).
- Constraints: Use specified tech stack per phase (Python for I, Next.js/FastAPI for II, etc.); clean code principles (PEP8, type hints); no external libs in Phase I.
- Failure Modes: Avoid freestyle coding, inventing requirements, or violating plans.
- Project-Specific: Cover all 5 phases, bonuses (reusable intelligence, Urdu support), and tools (Claude Code, MCP SDK, Dapr).
- Developer Alignment: Specs as single source of truth; re-read constitution before sessions.

Output as full Markdown file content, with sections like Purpose, How Agents Must Work, Spec-Kit Workflow, Agent Behavior, Failure Modes, and Developer Alignment. Make it strict, actionable, and agent-compatible for Claude/Gemini/etc.

## Response snapshot

Created the AGENTS.md constitution file for the "Evolution of Todo" hackathon project, enforcing Spec-Driven Development principles with sections on core principles, constraints, workflow, agent behavior, failure modes, and developer alignment.

## Outcome

- ✅ Impact: Created project constitution file AGENTS.md that enforces SDD workflow and guides agent behavior
- 🧪 Tests: none
- 📁 Files: AGENTS.md
- 🔁 Next prompts: none
- 🧠 Reflection: Constitution establishes clear governance for the hackathon project with strict SDD compliance requirements

## Evaluation notes (flywheel)

- Failure modes observed: PHR script failed to execute properly, requiring manual creation of PHR file
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Verify that the PHR script works correctly in the environment or document the issue