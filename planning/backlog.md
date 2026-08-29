# Prioritized backlog

The hierarchy is Epic → persona-driven User Story → Acceptance Criteria → Tasks. P0 is the 24-hour path; P1 is next; P2 is stretch.

## EPIC 1 — User Research

**P0 — As the team, we want persona needs synthesized transparently so that interface decisions have traceable evidence.**

- Given the repository personas, when research artifacts are reviewed, then every interview says it is simulated and findings include observation, evidence, need, implication, priority, confidence.
- Tasks: interview guide; four simulations; affinity/findings/JTBD; future-validation plan.

## EPIC 2 — Design System

**P0 — As any installer user, I want consistent status and controls so that I can predict meaning and action.**

- Given any pass/warning/blocker/progress state, when rendered, then it has text, icon, semantic styling, keyboard behavior, and a documented component state.
- Tasks: tokens; buttons/alert/badge/check/progress; Storybook state stories; contrast/keyboard check.

## EPIC 3 — Environment Analysis

**P0 — As a Business User, I want my environment analyzed automatically so that I do not translate technical machine facts.**

- Given profiles A–E, when scan completes, then OS, memory, disk, Python, microphone, GPU/CUDA where relevant have normalized results and evidence.
- Tasks: profile schema; mock adapter; scanner port/facade; scan UI; primary-OS detection spike.

## EPIC 4 — Prerequisite Validation

**P0 — As a Developer, I want detected values compared precisely to the product contract so that I can trust compatibility.**

- Given manifest constraints, when checks run, then required failures block, optional CUDA warns, unknown is not shown as passed, and exact evidence is expandable.
- Tasks: manifest loader; policy engine; dependency/invalidation model; profile tests B–E.

## EPIC 5 — Guided Remediation

**P0 — As a Business User, I want a failed prerequisite explained with a safe next action so that I can recover.**

- Given missing Python, when recommended remediation is selected, then change scope is shown and only Python is rechecked; completed checks/configuration remain.
- Tasks: remediation model/panel; simulated Python repair; scoped retry; technical detail.

**P1 — As an ML Engineer, I want CUDA preserved with a CPU alternative so that other projects are not damaged.**

- Given CUDA is missing/incompatible, then no global change runs automatically and CPU fallback remains available.
- Tasks: CUDA evidence view; execution mode; plan invalidation.

## EPIC 6 — Installation

**P0 — As an IT Administrator, I want to review what installation changes so that I can assess policy and audit impact.**

- Given valid configuration, when the plan is shown, then components, locations, size, network, privilege, and environment impact are listed before Install.
- Tasks: config/path validation; plan DTO/view; operation progress; install adapter/mocked executor; expected `models/` mapping.

**P1 — As a Developer, I want failed operations retried independently so that successful work is retained.**

- Given one operation fails, when Retry is chosen, then only the safe failed operation reruns and logs retain both attempts.

## EPIC 7 — Health Verification

**P0 — As a Business User, I want proof the product works so that completion is credible.**

- Given installed files, when verification runs, then `--health` exit/JSON maps config, model, microphone, backend, and overall state; Complete is reachable only on success.
- Tasks: health port/adapter; result mapping; failure remediation; launch action; contract smoke test.

## EPIC 8 — Cross-platform Architecture

**P0 — As the engineering team, we want platform ports/adapters so that UI remains testable and OS implementations can evolve.**

- Given any shared component, then it imports no Tauri API; given another profile adapter, the same flow renders without component changes.
- Tasks: Angular structure; ports/tokens; Tauri/mock adapters; ADR; typed command errors.

**P2 — As an IT Administrator, I want offline/repeatable installation so that managed endpoints do not require interactive internet.**

- Tasks: signed plan schema; artifact cache; proxy/offline adapters; unattended runner.

## EPIC 9 — Accessibility

**P0 — As a keyboard or assistive-technology user, I want the wizard operable and understandable so that installation is equitable.**

- Given happy and failure flows, when used keyboard-only, then all actions are reachable, focus moves predictably, status is announced and not color-only, and 200% zoom loses no content.
- Tasks: semantic patterns; focus service; live-region policy; axe/keyboard/high-contrast review.

## EPIC 10 — Demo & Presentation

**P0 — As a judge, I want evidence from problem through implementation so that I can assess reasoning, not only polish.**

- Given the live demo, when one dependency is broken, then the presenter can show finding → principle → component → remediation → scoped recheck → verified launch in under five minutes.
- Tasks: deterministic profiles; reset script/config; demo narration; screenshots/backup recording; traceability slide.
