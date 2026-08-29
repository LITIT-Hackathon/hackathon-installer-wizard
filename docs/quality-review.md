# Lead quality review

## Review outcome

| Question | Evidence / result | Remaining validation |
|---|---|---|
| Is every major UI decision linked to a need? | findings, opportunity map, component specs, expected-solution traceability | validate priority with real users |
| Are simulated interviews unmistakable? | disclaimer in plan, guide, each interview, affinity, findings, storyboard/prompts | ensure presenters repeat it verbally |
| Are technical choices reasoned? | ADR compares Tauri, Electron, and native; includes fallback trigger | packaging spike on target machine |
| Can components scale? | presentational UI, semantic inputs/outputs/states, ports/adapters | implement Storybook/API review before expansion |
| Are failures recoverable? | IA, journey, scenario model, scoped invalidation/retry | native idempotency and rollback testing |
| Can experts inspect without overwhelming others? | consistent Technical Details and Diagnostics disclosure | comprehension testing at both skill levels |
| Does managed-machine workflow exist? | no-admin/proxy paths, change plan, redacted logs | real corporate environment/offline validation |
| Is the UI accessible? | WCAG-oriented foundations, component semantics, test matrix | packaged screen-reader tests on each OS |
| Can the team explain underneath? | architecture boundary, typed ports, operation/check models, health contract | implement and document concrete command DTOs |
| Is MVP achievable in 24 hours? | one real OS, mocks for scenarios, P0/P1/P2 cuts and fallback | re-scope after hour-4 shell/health spike |

## Evidence-label audit

- Repository statements are treated as facts only where source files support them.
- Simulated findings never claim actual participants.
- New product behavior is labeled as an architectural proposal or placed in planning scope.
- Gaps requiring platform, policy, product-owner, accessibility, or real-user evidence are future validation requirements.

## Implementation gates

1. Prove shell → narrow native command → reference `--health` by hour 4.
2. Prove profile B failure → scoped recheck → compatible by hour 8.
3. Prove copied layout contains `config/app.json` and `models/demo-model.bin` and health succeeds by hour 12.
4. Freeze new P1 work; complete keyboard/failure/demo hardening.
5. Use deterministic, visibly labeled mock profiles as the demo safety net.

## Known source-contract issue

The repository README refers to `product-manifest.json`, while the actual file is `product_manifest.json`. It also says to preserve/install `models/demo-model.bin`, and `app.py` requires that path, but the checked-in tree lacks a `models/` directory. Implementation must normalize these contracts deliberately and test the installed result; documentation must not silently edit the authoritative source intent.
