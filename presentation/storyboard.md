# Presentation storyboard

## 1. Problem — installation is a trust boundary

Show the manifest, machine variability, and reference health contract. Headline: “Copying files is the easy part.” Explain that compatibility, permission, change consent, recovery, and proof are user-facing decisions.

## 2. Research — honest evidence

State verbatim: **“Simulated persona-based research sessions used to approximate likely interview findings for the purpose of the hackathon.”** Show the four personas and future real-user validation plan; do not present invented quotes as research fact.

## 3. Insights — contradictions create the design problem

Business wants automatic repair; Developer wants exact control; IT wants repeatability/no surprise elevation; ML wants CUDA preserved. Show top insights: preflight before expense, two levels of detail, risk-based automation, scoped recovery, final proof.

## 4. UX principles — behavioral guardrails

Feature the principles: plain language first, useful detail on demand, preview changes, never destroy valid environments, every error has an action, recover in place, success requires health.

## 5. Architecture — preserve boundaries

Diagram Angular components → application services → ports → Tauri/Rust adapters → OS/reference app. Explain why Tauri fits this MVP, plus Electron/native tradeoffs and fallback trigger.

## 6. Design system — status is infrastructure

Show Requirement Check states and restrained foundations. Explain non-color semantics, keyboard focus, live progress, error summaries, and components isolated from native APIs.

## 7. User flow — understand before changing

Welcome → Scan → Report → Configuration → Plan → Install → Health → Complete. Overlay source evidence at key moments. Failures remain states inside the flow.

## 8. Failure recovery — the differentiator

Demo Python missing and CUDA warning side by side. Python: explain → preview remediation → recheck only Python. CUDA: preserve environment → CPU fallback/manual path. Mention disk-path and health-item scoped retry.

## 9. Live demo — break it deliberately

Run the expected sequence: deterministic missing-Python profile; technical evidence; remediation; scoped recheck; locations; change plan; operation progress; reference `--health`; launch. If time permits, first trigger model failure caused by the expected `models/` contract, then repair it.

## 10. Outcome — evidence, not claims

Show MVP completion and clear stretch boundary. Close on “the installer understands my computer.” Measures after hackathon: observed completion/recovery/confidence and environment-safety validation.

## Traceability slide/table

| Persona finding | UX decision | Component | Implemented/demo behavior |
|---|---|---|---|
| Business User is anxious around terminal output | plain language first | Inline Alert + Technical Details | cause/action visible; raw evidence collapsed |
| Developer wants exact failures and no restart | structured evidence + scoped retry | Requirement Check + Remediation Panel | retry Python only; keep state |
| IT cannot elevate arbitrarily and needs audit | preflight and plan | Permission Request + Installation Summary | privilege shown before install; exportable plan proposal |
| ML Engineer protects multiple CUDA setups | non-destructive execution choice | Configuration Option + Requirement Check | warning, CPU fallback, no CUDA mutation |
| All personas need confidence at completion | health proof | Health Check + Completion Summary | parsed checks and launch action |

## Speaker/demo contingencies

- Use labeled mock profiles for deterministic scenario switching; never disguise them as real detection.
- Keep screenshots/video of both recovery and success.
- If native health invocation fails, run the documented product command separately and explain the adapter boundary honestly.
- Do not invent performance, adoption, or research metrics.
