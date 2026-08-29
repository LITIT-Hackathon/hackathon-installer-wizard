# Research findings

> These findings derive from **simulated persona-based research sessions used to approximate likely interview findings for the purpose of the hackathon** and repository evidence. They require validation with real users.

| # | Observation | Evidence | User need | Design implication | Priority | Confidence |
|---|---|---|---|---|---|---|
| 1 | Compatibility must be understood before expensive work. | All sessions; manifest has disk/runtime checks. | Know viability early. | Complete preflight before download/install. | P0 | High |
| 2 | One detail level cannot serve all personas. | Business avoids terminal; Developer/ML demand exact data. | Clear summary and inspectable evidence. | Plain language plus expandable technical details. | P0 | High |
| 3 | Automation is trusted only when its blast radius is clear. | Business initially wants auto-fix; IT/ML reject hidden changes. | Understand and authorize remediation. | Label change, scope, privilege, rollback; require consent. | P0 | High |
| 4 | Existing developer/ML environments are valuable assets. | Developer runtime concern; ML multiple CUDA versions. | Avoid downgrade/global mutation. | Preserve environment; offer isolated runtime/CPU/manual paths. | P0 | High |
| 5 | Retry must be scoped and state-preserving. | All sessions, strongest from Developer. | Recover without repetition. | Rerun affected check/operation and retain choices. | P0 | High |
| 6 | Completion needs operational proof. | All sessions; app exposes `--health`. | Know the app actually works. | Parse health exit/output and offer launch. | P0 | High |
| 7 | Managed machines change the feasible path. | Supplied IT persona; simulated admin session. | Proceed without arbitrary elevation/network access. | Preflight privilege/proxy and offer admin/offline handoff. | P1 | High |
| 8 | Storage is both capacity and placement. | ML custom model need; disk scenario. | Put large files on suitable volume. | Separate model picker, projected space, recheck chosen volume. | P0 | High |
| 9 | Progress must explain work and remain trustworthy. | Business session; model is a component. | Distinguish slow from stuck. | Named phase, bytes where known, elapsed state, cancel policy. | P1 | Medium |
| 10 | “Newer” is not necessarily “failed.” | Developer and ML sessions. | Preserve potentially valid dependencies. | Distinguish incompatible from unverified; do not downgrade. | P1 | Medium |
| 11 | Permission prompts need context before the OS asks. | Business microphone concern; IT privilege constraints. | Make an informed choice. | Explain why, timing, consequence, and fallback first. | P1 | Medium |
| 12 | Diagnostics must be useful and safe to share. | Developer/IT sessions. | Self-debug or escalate without leaking secrets. | Structured, redacted, copy/exportable support bundle. | P1 | Medium |

Confidence is research confidence, not implementation certainty. **Future validation requirement:** test these priorities with observed real installations.
