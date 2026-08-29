# ADR 001: Desktop architecture

- **Status:** Proposed
- **Date:** 2026-08-29

## Context

The installer must present a polished cross-platform Angular experience while reading system facts, selecting paths, copying files, invoking the Python reference product, and eventually handling permissions. One platform must work for the MVP; others may be mocked. UI work must remain testable without native APIs, and the 24-hour build limits platform breadth.

## Decision

Use Tauri 2 as the desktop shell, Angular standalone components for the UI, and narrow Tauri commands/Rust adapters behind TypeScript ports (`PlatformService`, `EnvironmentScanner`, `PrerequisiteChecker`, `InstallerService`, `HealthCheckService`). Use mock adapters in Storybook/tests. Implement one primary-OS adapter first.

Tauri is not objectively superior. It is appropriate here because the team can reuse Angular UI skills, produce a relatively small shell, and place privileged/system behavior in a typed native boundary without coupling components to it.

## Options considered

| Option | Advantages | Costs/risks | Fit |
|---|---|---|---|
| Electron | mature ecosystem, consistent Chromium, JS/Node familiarity, rich packaging | larger runtime/package footprint; Node/native boundary still needs careful hardening | strongest fallback if team has Electron expertise or WebView variance blocks delivery |
| Tauri 2 | Angular-friendly, smaller shell potential, Rust/native command boundary, cross-platform intent | Rust learning/compile cost; OS WebView differences; plugin/platform maturity and packaging need validation | selected for focused MVP with mocks and one native platform |
| Purely native apps | best platform conventions/APIs and potentially deep system integration | three UI stacks or reduced platform coverage; limited reuse; impractical for 24 hours | appropriate later if OS-specific control outweighs shared UX |

## Consequences

- UI/components remain portable and independently testable.
- Native functionality requires DTO/command contract design and Rust capability.
- Packaging, signing, WebView availability, and OS behavior must be spiked early.
- Cross-platform claims are architectural until real adapters/builds are tested.
- The primary platform can be real while scenarios and other OSs use explicit mock profiles.

## Tradeoffs

We accept new Rust/IPC complexity and platform WebView variance in exchange for a clear trust boundary and shared Angular system. If the team cannot package and invoke a health check within the initial spike, switch the shell to Electron while retaining ports, application services, and components.
