# Problem analysis

## Evidence and labels

This analysis treats `README.md`, `personas/personas.md`, `scenarios/scenarios.md`, and the reference product as authoritative. **Assumption** means a pragmatic interpretation not proven by those files. **Architectural proposal** is a recommended solution. **Future validation requirement** identifies a decision that needs real-user or platform testing.

## The problem

The wizard must determine whether a machine can run LITIT AI Desktop, explain the result, safely prepare the environment, place the product and its configuration/model assets, and prove it works. It is not merely a file copier: it mediates between a product contract, an inconsistent local environment, OS security boundaries, and users with radically different technical confidence.

**How might we help people with different levels of technical expertise install LITIT AI Desktop confidently, while preserving valid environments, making every change inspectable, and recovering from failures without starting over?**

### Outcomes

- **Primary user outcome:** know before committing time or disk space whether the product can work, and finish with a verified application or a clear recovery path.
- **Business outcome:** reduce abandonment and support effort while providing a credible enterprise-ready installation experience.
- **Technical outcome:** isolate platform detection and installation behind testable adapters, then verify the installed product against its manifest and health contract.
- **Usability outcome:** a nontechnical user can complete the happy path, while an expert can inspect configuration, logs, and exact failures without UI clutter.

## Why this is a UX problem

Installation asks users to trust unfamiliar checks, elevated permissions, downloads, filesystem changes, and remediation. The same message—“CUDA incompatible”—means confusion to a business user, environment risk to an ML engineer, and policy risk to an administrator. Good UX controls disclosure, explains consequences, records evidence, and keeps recovery in context. A technically correct script can still fail if the user cannot predict, authorize, or recover from its actions.

## Persona risks

| Persona | Primary risks | UX response |
|---|---|---|
| Business User | jargon, terminal anxiety, unclear waiting, unsafe choices | plain-language summary, safe recommendation, progress and next action |
| Developer | hidden configuration, lossy errors, full-flow restarts | exact details, editable paths, scoped retry, copy/export logs |
| Enterprise IT Administrator | unavailable elevation, proxies, policy, repeatability, audit | preflight permissions/network, offline/manual path, change plan, audit record |
| ML Engineer | CUDA conflicts, unintended system mutation, large model placement | preserve CUDA, compatibility detail, CPU fallback, custom model directory |

## Installation lifecycle

Launch → detect OS and capabilities → assess compatibility → check prerequisites → configure locations/options → review change plan → install components → run health verification → complete or recover. Detection and checks must be rerunnable independently. Installation is not successful until the reference product returns a successful `--health` result and can launch.

## Failure points

1. Unsupported OS or unknown version.
2. Insufficient memory/disk, including disk changing during install.
3. Python missing, incompatible, or newer than the tested range.
4. Permission/elevation unavailable; destination unwritable.
5. Proxy/firewall blocks downloads.
6. NVIDIA detected but CUDA absent/incompatible or intentionally isolated.
7. Invalid install/model directory.
8. Microphone absent or permission denied.
9. Download interrupted or model checksum invalid.
10. Configuration invalid, port unavailable, copy incomplete, or health check fails.

The reference implementation adds a concrete contract hazard: `app.py` expects `models/demo-model.bin`, while the checked-in assets do not include that path. The installer must create it and verify it rather than blindly mirror the source tree.

## Trust model

Trust comes from explaining why a check is needed; separating detected facts from recommendations; previewing files, downloads, permissions, and environment changes; defaulting to non-destructive choices; never silently modifying a valid CUDA/Python environment; showing durable progress; retaining diagnostics; and proving the final application works. Claims such as “compatible” must name the evidence and check time.

## Technical constraints

- Manifest: Windows 11+, macOS 14+, Ubuntu 22.04+; 8 GB memory; 5 GB disk; Python 3.11+; microphone required; NVIDIA/CUDA 12+ optional.
- The Python reference app reads relative `config/app.json` and `models/demo-model.bin`, and health exits `0` for success or `2` for failure.
- `LITIT_MIC_OK=0` simulates denial; missing/invalid config and missing model simulate health failures.
- Shell launchers assume `python` on Windows and `python3` elsewhere.
- **Assumption:** network acquisition, package signing, checksums, and elevation helpers are not supplied and should be mocked for the MVP.
- A working primary-OS implementation is sufficient; other platforms may use adapters/mocked profiles.

## Cross-platform implications

Detection, path rules, permissions, executable discovery, process invocation, packaging, and microphone consent differ by OS. Platform adapters should normalize facts without hiding native evidence. Unsupported or unimplemented platforms must say so honestly. **Future validation requirement:** verify OS version parsing, symlinks, long paths, Gatekeeper/notarization, Linux distributions, package managers, and accessibility behavior on real machines.

## Accessibility

Meet WCAG 2.2 AA for the web UI: keyboard-complete operation, visible focus, semantic headings/landmarks, labels and descriptions, status announced through appropriate live regions, no color-only status, 4.5:1 body-text contrast, 3:1 UI contrast, 200% zoom/reflow, reduced motion, and error summary links. Progress must expose text and value; logs need an accessible alternative to a terminal-style presentation.

## Successful MVP

A 24-hour MVP supports one real platform and mocked profiles for all five supplied scenarios. It scans OS, memory, disk, Python, microphone, and GPU/CUDA where relevant; distinguishes pass/warning/blocking states; remediates at least one deliberate failure; reruns only the affected check; previews the installation plan; simulates or performs install; creates the required product layout; executes health verification; and demonstrates recovery and success. Proxy/offline automation, real prerequisite installation, code signing, full rollback, and all-platform native delivery are stretch work.
