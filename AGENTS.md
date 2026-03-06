Implement each feature's intent, not the literal wording from the user. Follow exact instructions only when told to or if marked hard spec. Prefer the best current architecture, and skip migrations, backward compatibility, and legacy fallbacks.

## Important Development Notes

1. **Simplicity:** Strive to keep solutions as simple as possible. Localize functionality; code should live near the logic that depends on it.
2. **Quality & Style:** Use good software design principles and code patterns.
3. **Verify Changes:** All code must be tested and pass.
4. **Be humble & honest:** NEVER overstate what you got done or what actually works.

### Mandatory Commands for Completion

These commands must be ran and pass for every change before it is considered complete:

1. `bun run format`
2. `bun run verify`

### Mandatory Questionnaire

Before completion, honestly answer the following questions:

- Functionality: Code implementation is functionally correct. Does the code handle path and edge cases correctly?
- Completeness: Is the solution complete?
- Consistency: Code and documentation style is consistent with existing code/documentation. Is there anything hacky? Does previous code need to be cleaned up, updated or removed?
- Clarity: Does the solution include excessive complexity? Could existing code/components have been used?
- Documentation: Does existing documentation accurately reflect implementation? Does new documentation need to be added?
- Testing: Do tests validate core functionality, meaningful edge cases, and realistic failure scenarios? Do tests avoid superficial or redundant tests?
- Other: Anything else concerning not covered above?

Resolve any issues found before completion.

## Do Nots

- Use custom css classes or inline styles
- Run any git command that can modify tracked files or the index
