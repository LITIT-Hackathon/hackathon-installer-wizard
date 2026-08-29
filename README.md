# Smart Install

Design and build an intelligent cross-platform installation wizard for
the supplied reference product.

The wizard should understand the user's environment, validate prerequisites,
guide configuration and clearly diagnose installation problems.

## Target Platforms

- Windows
- macOS
- Linux

The architecture and UX should account for all three platforms.

A fully working implementation on one primary operating system is sufficient
for the MVP. Other operating systems may be represented through adapters,
mocks or test profiles.

## MVP

The solution should:

- detect the operating system
- validate relevant hardware/system prerequisites
- validate software dependencies
- clearly communicate pass/warning/fail states
- provide actionable remediation guidance
- install or simulate installation of the supplied reference product
- perform a final health check
- demonstrate both successful and failing scenarios

## UX

Teams should:

- investigate the supplied product and user personas
- conduct user interviews
- create their own research/interview approach
- produce a Figma flow/prototype
- use the findings to influence the implementation

## Provided

- Reference product
- Product manifest
- Product overview
- User personas
- Test scenarios
- GCP sandbox and token credits

## Deliverable

A working and demonstrable installation/diagnostic prototype.

## Product and delivery package

The repository now includes an evidence-labeled foundation for implementing the prototype:

- [`docs/00-problem-analysis.md`](docs/00-problem-analysis.md) — challenge, lifecycle, risks, constraints, and MVP outcomes.
- [`research/`](research/) — research plan, guide, explicitly simulated persona sessions, synthesis, JTBD, and principles.
- [`ux/`](ux/) — journey, information architecture, screen specifications, and scenario/recovery model.
- [`design-system/`](design-system/) — foundations, tokens, component contracts, accessibility, and content guidance.
- [`architecture/frontend-architecture.md`](architecture/frontend-architecture.md) and [`docs/adr/001-desktop-architecture.md`](docs/adr/001-desktop-architecture.md) — Angular/Tauri ports-and-adapters proposal and tradeoffs.
- [`planning/`](planning/) — 24-hour scope, prioritized backlog, readiness/done criteria, vision, and risks.
- [`docs/expected-solution.md`](docs/expected-solution.md) — reference demo snapshot, not a mandatory specification.
- [`prompts/`](prompts/) and [`presentation/storyboard.md`](presentation/storyboard.md) — standalone design/video prompts and reasoning-led presentation story.

Research sessions in this package are simulations based on the supplied personas; they are not represented as real interviews. Assumptions, architectural proposals, and future validation requirements are labeled throughout.

## Remotion product demo

The deterministic 70-second Smart Installer demo is implemented in [`src/`](src/) as reusable React/Remotion components, screens, sequences, scenario data, and centralized motion/theme configuration. It contains no screen recording or narration.

```bash
npm install
npm run start
npm run render
```

The render command produces `out/smart-installer-demo.mp4` at 1920×1080, 30 FPS.
