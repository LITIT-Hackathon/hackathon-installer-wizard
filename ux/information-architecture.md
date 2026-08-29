# Information architecture

## Primary flow

Welcome → System Analysis → Compatibility Report → Configuration → Installation Plan → Install → Health Verification → Complete

The stepper communicates position, but navigation follows state: completed steps remain reviewable; downstream steps become stale when an upstream choice invalidates them; recovery returns to the affected state rather than a separate failure page.

## Content hierarchy

1. **Decision:** compatible, action needed, or unable to continue.
2. **Meaning:** impact in plain language.
3. **Action:** recommended primary action and safe alternatives.
4. **Evidence:** detected value, expected value, source, timestamp.
5. **Diagnostics:** command, output, exit code, logs.

## Recovery patterns

- Python missing → explanation → auto/manual/admin remediation → recheck Python.
- Disk insufficient → show required/available and volume → choose location/free space → recheck that volume.
- CUDA incompatible → show GPU/driver/toolkit facts → preserve current CUDA → CPU fallback or manual remediation → recheck GPU only.
- Permission denied → explain capability and consequence → retry after permission or continue with supported fallback.
- Install operation fails → retain completed operations → retry failed operation; rollback is stretch.
- Health item fails → repair config/model/permission → rerun health, not installation.

## Navigation and state rules

- A blocking required check disables “Continue” and focuses the error summary; a warning requires acknowledgment only where risk warrants it.
- Back navigation preserves data. Changing destination invalidates disk and plan checks; changing execution mode invalidates GPU-related plan/verification.
- “Technical details” is available consistently, not only after failure.
- Diagnostics is a drawer/page reachable from any post-scan state and returns users to context.
- Cancel explains retained/removed partial data. **Future validation requirement:** define true rollback semantics after native implementation exists.

## Content model

Each check contains `id`, user label, description, state, detected/expected values, blocking flag, evidence, remediation options, timestamps, and dependencies. Each installation operation contains status, progress, safe-retry policy, and diagnostic events. This shared model supports screen reader announcements, logs, mocks, and tests.
