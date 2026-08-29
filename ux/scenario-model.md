# Scenario model

| Scenario | Classification | Installer behavior | Recovery / terminal state | Scope |
|---|---|---|---|---|
| A Healthy machine | compatible | pass required checks; optional GPU may be absent | continue to verified success | MVP |
| B Python missing | blocking | explain required runtime and safe choices | remediate/manual install → Python-only recheck | MVP (mock remediation acceptable) |
| C 2 GB free disk | blocking | compare 5 GB requirement to selected volume | new location/free space → disk-only recheck | MVP |
| D Windows 10 | blocking, not locally remediable | explain Windows 11 minimum | export requirements/exit | MVP mock profile |
| E NVIDIA + CUDA missing/incompatible | warning (optional manifest item) | preserve current CUDA; explain performance impact | CPU fallback or manual GPU remediation | MVP |
| No administrator privileges | constraint | detect before privileged operation | per-user path or IT handoff | MVP detection; stretch packaging |
| Corporate proxy | constraint | connectivity test with redacted evidence | configure proxy/use offline bundle/contact IT | P1/stretch |
| Microphone denied | blocking health requirement | explain why permission is needed before prompt | grant/OS settings → permission-only recheck | MVP simulated |
| Model corrupted | install/health failure | checksum mismatch; quarantine/ignore partial artifact | redownload/re-copy model only | P1 |
| Health check failure | verification failure | parse failed keys/exit 2 | repair failed artifact then rerun health only | MVP |
| Invalid install directory | configuration blocker | validate syntax, existence, writability, volume | choose/create supported directory | MVP |
| Installation interrupted | recoverable operation | mark incomplete operation; retain verified work | retry/resume where safe | P1; true resume stretch |
| Reinstall | detected existing state | show version/config and preserve/replace choices | repair/upgrade/clean reinstall | Stretch |
| Dependency newer than expected | unverified warning | do not downgrade; show tested constraint | continue if policy permits or isolated runtime | P1 |

**Assumption:** CUDA remains optional because the manifest lists it under `optional`; the UI must not turn scenario E into a false hard blocker. **Future validation requirement:** product owners must confirm CPU-mode performance and support policy.
