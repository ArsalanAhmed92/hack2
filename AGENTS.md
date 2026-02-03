# Evolution of Todo Constitution

## Core Principles

### I. Spec-Driven Development (SDD) Compliance
All development must follow the SDD workflow: Specify → Plan → Tasks → Implement. No code generation without referenced Task IDs from an approved task list. Code must not be created directly without a corresponding task that traces back to a specification.

### II. Task-First Implementation
No code generation is permitted without a corresponding task from an approved task list. Every code change must reference a specific Task ID (e.g., [Task: T001]) in commit messages and documentation. This ensures traceability from requirements to implementation.

### III. Multi-Phase Evolution (NON-NEGOTIABLE)
Development follows a strict progression through 5 phases: Console → Web → Cloud → Native → Chatbot. Each phase builds upon the previous one with clear interfaces and contracts. No skipping phases or parallel development across phases without explicit approval.

### IV. Tech Stack Adherence
Technology stack must follow phase-specific guidelines: Phase I (Python console app), Phase II (Next.js/FastAPI web app), Phase III (cloud deployment), Phase IV (native mobile), Phase V (AI chatbot integration). No external libraries in Phase I to ensure core competency development.

### V. Internationalization & Accessibility
Support for Urdu language and accessibility standards must be planned from the beginning. Bonus features for reusable intelligence and multi-language support should be considered in architecture decisions.

### VI. Clean Code Standards
All code must follow established clean code principles: PEP8 for Python, type hints required, clear function/variable names, minimal complexity, single responsibility principle. No technical debt accumulation without explicit tracking.

## Project Constraints

### Technology Stack Per Phase
- **Phase I**: Python console application, no external libraries beyond standard library
- **Phase II**: Next.js frontend with FastAPI backend, minimal external dependencies
- **Phase III**: Cloud-native deployment with containerization
- **Phase IV**: Native mobile application (iOS/Android) with shared backend
- **Phase V**: AI chatbot integration with existing architecture

### Quality Standards
- All code must pass static analysis and linting
- Type hints required for all public interfaces in Python
- Comprehensive unit and integration tests required
- Performance benchmarks established and maintained
- Security considerations addressed at each phase

## Development Workflow

### Spec-Kit Plus Integration
- All specifications stored in `specs/<feature>/spec.md`
- Implementation plans in `specs/<feature>/plan.md`
- Task lists in `specs/<feature>/tasks.md`
- Configuration managed in `.specify/config.yaml`
- All changes must follow the SDD hierarchy: Constitution > Specify > Plan > Tasks

### Review Process
- All code changes require specification reference
- Task completion verified against acceptance criteria
- Cross-phase compatibility verified before merging
- Architecture decisions documented in ADRs when significant

## Agent Behavior

### How Agents Must Work
- Check constitution first before any action
- Request clarifications if specifications are missing or unclear
- Follow SDD workflow strictly (no deviations)
- Reference specifications inline (e.g., [From: specify §2.1])
- Maintain traceability between tasks and implementations
- Respect the hierarchy: Constitution > Specify > Plan > Tasks

### Specification Compliance
- No requirement invention or assumption without specification
- Direct user to update specifications if requirements are unclear
- Verify all implementation aligns with approved tasks
- Reject freestyle coding requests that bypass SDD process

## Failure Modes to Avoid

### Prohibited Behaviors
- **Freestyle Coding**: Never write code without an approved task
- **Requirement Invention**: Never implement features not specified
- **Plan Violations**: Never deviate from approved implementation plan
- **Skipping Phases**: Never implement Phase N+1 features without Phase N completion
- **Bypassing SDD**: Never circumvent the Specify → Plan → Tasks → Implement workflow

### Quality Issues
- Accumulating technical debt without tracking
- Violating clean code principles
- Ignoring internationalization requirements
- Adding external dependencies prematurely
- Failing to maintain backward compatibility

## Developer Alignment

### Specifications as Single Source of Truth
- All development originates from approved specifications
- Changes to requirements must update specifications first
- Implementation must reflect current specification state
- Regular reconciliation between tasks and specs required

### Workflow Consistency
- Re-read constitution before each development session
- Verify SDD compliance at each milestone
- Maintain traceability from requirements to code
- Update tasks as implementation progresses
- Document architectural decisions appropriately

### Tools and Technologies
- Claude Code for AI-assisted development
- MCP SDK for protocol compliance
- Dapr for distributed application runtime
- Spec-Kit Plus for SDD workflow enforcement
- Git for version control with SDD-aligned branching

## Governance

All agents and developers must comply with this constitution. Deviations require explicit approval and documentation. Changes to this constitution follow formal amendment procedures with impact assessment across all SDD artifacts. Compliance verification occurs at each development phase with mandatory checkpoints.

**Version**: 1.0.0 | **Ratified**: 2026-02-03 | **Last Amended**: 2026-02-03