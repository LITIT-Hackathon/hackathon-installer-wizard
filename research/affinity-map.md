# Affinity map

> Based on **simulated persona-based research sessions used to approximate likely interview findings for the purpose of the hackathon**, not real interviews.

| Theme | Clustered observations | Tension | Resulting direction |
|---|---|---|---|
| Comprehension | Business User rejects jargon; experts need paths/versions | simplicity vs evidence | plain-language status with expandable technical details |
| Automation | Business User wants auto-fix; IT/ML reject uncontrolled system changes | convenience vs blast radius | classify remediation as safe, consented, or manual |
| Recovery | all personas reject restarting; experts want scoped reruns | speed vs stale evidence | dependency-aware check invalidation and retry |
| Trust | plan, rationale, progress, and proof recur | confidence vs cognitive load | staged disclosure and review-before-change |
| Environment preservation | Developer/ML have valid runtimes; IT has policy | product success vs machine stability | never downgrade or globally mutate by default |
| Enterprise constraints | elevation, proxy, offline, audit | interactive demo vs deployment reality | detect constraints now; full automation as stretch |
| Storage | disk threshold, model size, custom volume | simple defaults vs large assets | separate install/model paths with per-volume recheck |
| Completion | “copied” is not “working” | speed vs proof | run structured health and launch verification |

## Contradictions retained

- “Fix it automatically” versus “never touch my environment.” Resolve by change risk and explicit consent, not persona stereotypes.
- “Hide terminal output” versus “show exact command.” Resolve through progressive disclosure and copy/export.
- “Unattended installation” versus “confirm every change.” Resolve with a reviewable plan that can later become a signed/repeatable input.
- “GPU available means use it” versus deliberate CPU fallback. Treat execution mode as a choice informed by compatibility.
