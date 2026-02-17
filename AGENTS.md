## Tech Stack

**Core:** Bun (Runtime, Bundler, Test Runner, Server), TypeScript (Strict), Shadcn UI
**Tools:** ESLint, Prettier, Tailwind CSS

## Development Process

1. **Simplicity:** Strive to keep solutions as simple as possible. Localize functionality. Code should live near the logic that depends on it.
2. **Quality & Style:** Follow existing code patterns and style guides. Check neighboring files for patterns.
3. **Verify Changes:** All code must be tested and pass. For tests, use Bun built-ins (e.g., Glob) over shell commands.

### Mandatory Commands for Completion

These commands must be ran and pass for every change before it is considered complete:

1. `bun run format`
2. `bun run verify`

### Mandatory Review Questionnaire for Completion

When work is completed, reflect on the work and answer the following questions:

- Functionality: Code implementation is functionally correct. Does the code handle path and edge cases correctly?
- Completeness: Is the solution complete?
- Consistency: Code and documentation style is consistent with existing code/documentation. Is there anything hacky?
- Clarity: Does the solution include excessive complexity? Could existing code/components have been used?
- Documentation: Does existing documentation accurately reflect implementation? Does new documentation need to be added?
- Testing: Do tests cover primary use cases, edge cases, and failure modes?
- Other: Anything else concerning not covered above?
