# User journey

| Stage | User goal | System action | UI state | Possible failure | Emotion | Recovery |
|---|---|---|---|---|---|---|
| Launch | know what will happen | load manifest/adapters | Welcome, scope and privacy | manifest unreadable | cautious | explain local contract; retry/diagnostics |
| Environment detection | avoid manual fact-finding | detect OS, memory, volumes, Python, microphone, GPU/CUDA | live checklist with text status | permission/command unavailable | curious → uncertain | mark unknown, explain permission, rerun check |
| Compatibility assessment | decide whether to continue | compare normalized facts to manifest | pass/warning/blocking summary | unsupported OS (D), CUDA mismatch (E) | relief or concern | alternative/manual/CPU path; export evidence |
| Prerequisite checks | resolve blockers safely | evaluate dependency graph | focused remediation panel | Python missing (B), low disk (C), no admin/proxy | frustrated but guided | install/choose path/contact IT; affected recheck |
| Configuration | choose appropriate setup | validate paths/options/port | recommended defaults, advanced disclosure | invalid/unwritable path | in control | inline reason, choose another, revalidate |
| Installation | understand progress | create layout, copy/download, write config | named phase and overall/item progress | interruption/corruption/permission | patient → anxious | retry/resume/clean partial operation; keep config |
| Verification | prove runtime | run product `--health`, parse exit/JSON, launch probe | check list and evidence | config/model/microphone/port failure | expectant | fix failed item and rerun verification only |
| Completion | start product or hand off | record version/results | success summary and launch | launch fails after health | confident or surprised | reopen verification/diagnostics |

## Scenario branches

- **A Healthy:** all required checks pass → configure → plan → install → health `OK` → launch.
- **B Python missing:** blocker → explain Python as required local runtime → safe remediation/manual instructions → recheck Python only → continue.
- **C Insufficient disk:** blocker → choose another application/model volume or free space → recheck disk for changed location → continue.
- **D Unsupported OS:** non-remediable blocker → explain supported versions → export requirements/exit; no deceptive override in MVP.
- **E NVIDIA/CUDA issue:** warning because GPU is optional → preserve installed CUDA → show detected versions → choose CPU fallback or manual GPU remediation → recheck GPU path if changed.
- **Managed-machine branch:** no elevation/proxy → choose per-user/no-download path where feasible or export plan for IT; retain scan.
- **Health failure:** stay in verification → identify config/model/microphone item → repair only that artifact/permission → rerun health.

Failure is a state within a stage, never a navigation dead end.
