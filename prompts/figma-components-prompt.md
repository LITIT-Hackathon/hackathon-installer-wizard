# Standalone Figma components prompt

```text
Build an accessible Figma component library for the desktop “Smart Install” wizard for LITIT AI Desktop. The product analyzes a computer, reports compatibility, configures locations, previews changes, installs, verifies health, and supports recoverable failure. Visual tone: calm, professional, technical, enterprise-ready; restrained neutral surfaces and blue actions; no decorative gradients, glassmorphism, giant headings, playful onboarding, or gratuitous cards.

Create foundations and variables: system sans typography (12/16 metadata, 14/20 supporting, 16/24 body, 20/28 section, 28/36 page), system monospace 13/20 for logs/paths only; 4 px spacing scale; radii 4/8; border-first elevation; 40 px controls; strong 3 px focus ring; motion 120–200 ms with reduced-motion variants. Define semantic colors and combinations for Success, Warning, Blocking failure, Information, In progress, and Disabled. Meet WCAG 2.2 AA and never use color/icon alone.

Create Auto Layout components with properties, slots, long-content resilience, keyboard/focus annotations, and these variants:
- App Shell; Wizard Stepper (upcoming/current/complete/error/stale); Wizard Step.
- System Summary (loading/ready/partial).
- Requirement Check (checking/passed/warning/failed/remediated), Requirement List (loading/mixed/all pass).
- Status Badge (success/warning/blocking/info/progress/disabled).
- Progress Indicator (indeterminate/determinate/paused/failed/complete).
- Remediation Panel (available/applying/failed/resolved).
- Technical Details (collapsed/expanded/copy success).
- Install Location Picker (default/checking/valid/invalid/unwritable) with path, required/available space.
- Configuration Option; Permission Request (not requested/requesting/granted/denied).
- Installation Progress (queued/running/paused/failed/complete operations).
- Log Viewer (empty/live/paused/error with severity/filter/copy/export).
- Health Check Summary (idle/running/passed/partial/failed).
- Completion Summary (success/launch failed); Error Summary (single/multiple).
- Primary and Secondary Buttons (default/hover/focus/pressed/disabled/busy).
- Inline Alert (info/success/warning/blocking); Confirmation Dialog (open/busy/error).

Use realistic copy: “Python 3.11 or later is needed to run the local service,” “2 GB available; 5 GB required,” “Use CPU mode without changing CUDA,” and “Retry Python check.” Include default, keyboard-focus, disabled, high-contrast, long/localized copy, and 200% layout examples. Annotate semantics: ordered-list stepper with current step, polite live status, urgent blocker alert, determinate progress values, labeled fields, error-summary links, modal focus containment/return, and redacted selectable diagnostics.
```
