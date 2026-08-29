# Definition of Done

A story is done when:

- Acceptance criteria pass on the target profile(s); failure paths are exercised.
- UI uses shared tokens/components and has loading, empty, warning, blocking, success, and disabled states where meaningful.
- Keyboard/focus behavior works; status is not color-only; automated accessibility check has no serious known violation.
- Components do not call Tauri directly; ports and DTOs are typed and errors structured.
- Unit/component tests and relevant profile/adapter tests pass.
- Logs redact secrets; user-facing content follows plain-language pattern.
- Assumptions/simulation are labeled; docs/ADR/backlog are updated when decisions change.
- Demo path is repeatable from a clean state, and a reviewer can connect the behavior to a user need.

Production-only signing, full cross-platform evidence, and real-user validation cannot be claimed done during the MVP unless actually completed.
