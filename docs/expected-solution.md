# Expected solution snapshot

This is a reference snapshot of an excellent demonstration, not a mandatory specification. Behaviors described as native may be explicitly simulated in the MVP where the repository provides no installer implementation.

## Demo sequence

1. Launch Smart Install; state that checks remain local.
2. Detect OS automatically.
3. Run an accessible, lightly animated scan of OS, memory, free space, Python, microphone, and GPU/CUDA when applicable.
4. Show a compatibility report organized into required, optional, and unknown—not a wall of system data.
5. Load a profile with one deliberately broken dependency (Python missing is the clearest path).
6. Explain in plain language what Python enables and why installation cannot yet continue.
7. Expand Technical details to reveal detected paths/version evidence and the failed check—not replace the explanation.
8. Preview and select a labeled simulated remediation or safe manual action.
9. Rerun only Python; show it transition failed → checking → remediated/passed while other results stay stable.
10. Choose application and model locations; validate space for the selected volumes.
11. Review exactly what will change: components, paths, size, permissions, network, and environment impact.
12. Install with truthful named operations and meaningful progress.
13. Run health verification against config, expected `models/demo-model.bin`, microphone, backend, and overall product status.
14. Deliberately demonstrate a health failure if time permits, repair only that artifact/permission, and retry verification.
15. Prove the reference application launches and show the health receipt.
16. Complete with “Open LITIT AI Desktop,” install location, version, and diagnostics.

## Quality signature

The experience should feel like **“the installer understands my computer,”** not **“a form that eventually runs a script.”** That means evidence precedes recommendations, machine changes precede consent, failures retain context, and success is demonstrated rather than asserted.

## Traceability examples

| Finding | UX decision | Component | Demonstrated behavior |
|---|---|---|---|
| Nontechnical users fear terminal output | plain language + detail on demand | Inline Alert + Technical Details | readable blocker with expandable evidence |
| Developers reject restart | scoped retry | Requirement Check/Remediation Panel | Python-only recheck |
| IT needs auditability | change plan | Installation Summary | paths, privilege, network and size preview |
| ML users protect CUDA | preserve environment | Compatibility/Configuration Option | CPU fallback; no automatic global CUDA change |
| All need proof | verify after copy | Health Check Summary | parsed health result and launch |
