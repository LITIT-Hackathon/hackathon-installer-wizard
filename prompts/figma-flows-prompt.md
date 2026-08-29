# Standalone Figma flows prompt

```text
Create an interactive Figma prototype for Smart Install, a cross-platform desktop installer/diagnostic wizard for LITIT AI Desktop. Required manifest: Windows 11+, macOS 14+, Ubuntu 22.04+, 8 GB RAM, 5 GB disk, Python 3.11+, microphone access; NVIDIA/CUDA 12+ optional. Use a calm enterprise visual system with progressive disclosure and WCAG 2.2 AA keyboard/focus annotations.

Build three connected flows using the same wizard state and reusable components:

FLOW 1 — Healthy: Welcome → Analyze this computer → live System Scan (OS, memory, disk, Python, microphone, GPU/CUDA if present) → Compatible report → Configuration with separate application/model paths and CPU/GPU mode → Installation Plan showing components, sizes, paths, permissions, network and environment impact → meaningful Installation Progress → Health Check for config/model/microphone/backend/overall → verified Success with Open LITIT AI Desktop.

FLOW 2 — Python recovery: scan shows Python as a blocking failure while completed checks remain passed → plain explanation and recommended fix → Technical details expands to exact detection evidence → confirmation previews change scope and clearly labels simulated remediation if prototype-only → apply → only Python transitions failed → checking → remediated/passed → continue without losing other results or choices → verified success.

FLOW 3 — GPU/health failure: NVIDIA is detected but CUDA is missing/incompatible. Because GPU/CUDA is optional, show a warning—not a blocker—and never modify existing CUDA automatically. Offer “Use CPU mode” and “View manual GPU guidance.” Continue with CPU mode. During health verification, simulate missing/corrupted model or microphone denial; keep the user in Health Verification, show cause/impact/action, repair only that item, rerun health only, then succeed.

Also create linked branches for insufficient disk (choose another volume and recheck disk only), unsupported Windows 10 (honest terminal blocker with supported-version export), no admin privilege (per-user or IT handoff), proxy, invalid directory, interrupted installation, and Advanced Diagnostics. Failures must never be isolated dead-end screens. Show preserved state, stale downstream steps when configuration changes, Back without data loss, and clear cancel consequences.

Use concrete copy and annotate main CTA, secondary action, visible information, advanced information, error behavior, focus destination, live-region announcement, and reduced-motion behavior on every frame. Add a flow legend distinguishing MVP real behavior, MVP mocked profile/simulated remediation, and stretch behavior.
```
