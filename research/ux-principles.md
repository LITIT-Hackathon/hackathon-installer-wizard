# UX principles

> Derived from repository facts and simulated sessions; validate with real users.

1. **Progressive disclosure.** Lead with decision-relevant facts; keep exact versions, paths, commands, and logs one action away.
2. **Plain language first.** Say what happened, why it matters, and what to do before naming implementation details.
3. **Useful detail only.** Expose internals when they enable a decision, recovery, audit, or support handoff.
4. **Every error has a next action.** A blocker without remediation, retry, alternative, or escalation path is incomplete.
5. **Preserve valid environments.** Never silently downgrade, overwrite, or globally modify Python/CUDA/toolchains.
6. **Validate before expense.** Check feasibility and selected-volume capacity before downloads or filesystem changes.
7. **Preview change.** Show components, paths, size, network, permissions, and environment impact before install.
8. **Recover in context.** Retain successful checks and choices; retry the smallest safe unit.
9. **Experts can verify.** Make diagnostics accurate, structured, copyable, and redacted.
10. **Completion is evidence.** Success requires health verification and a launchable product, not a finished progress bar.

## Decision test

Every proposed behavior must answer: whose need, which evidence, what risk, what recovery, and how tested? If it cannot, defer it.
