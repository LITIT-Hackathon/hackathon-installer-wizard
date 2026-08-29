# MVP scope — 24 hours

## Must demonstrate (P0)

- One packaged or locally runnable primary-OS shell with Angular/Tauri boundary.
- Manifest-driven checks for OS, memory, disk, Python, microphone, and optional GPU/CUDA.
- Mock environment profiles for scenarios A–E; real detection where feasible on the primary OS.
- Welcome, scan, compatibility, configuration, plan, install progress, health, success, diagnostics states.
- Pass/warning/blocking semantics; plain explanation and technical details.
- Python-missing or disk failure remediation simulation plus affected-check-only rerun.
- Separate application/model locations and disk revalidation.
- Explicit change plan and simulated or real reference-product copy.
- Create `config/app.json` and expected `models/demo-model.bin` layout; invoke/parse `--health` where feasible.
- Health failure/retry and a successful completion journey.
- Core accessible keyboard/focus/status behavior and component state stories/tests.

## Should if time remains (P1)

Real primary-OS file copy, actual Python detection, permission/microphone checks, log export, cancellation semantics, proxy/no-admin detection, checksum verification, interruption state.

## Stretch (P2)

Automated prerequisite install, resumable downloads, offline bundles, unattended plans, rollback/uninstall/reinstall, code signing, native adapters and packaged builds on all OSs, GPU driver/toolkit remediation.

## Explicit non-goals

Fleet deployment, production security certification, comprehensive package management, automatic system CUDA changes, and validated research claims. Simulation must be visibly labeled in demo controls and documentation.
