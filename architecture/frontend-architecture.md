# Frontend architecture

## Proposed stack

**Desktop shell:** Tauri 2. **Frontend:** current supported Angular release at implementation time, standalone components, strict TypeScript, signals for local reactive state. **Native boundary:** Tauri commands backed by Rust adapters. **Components:** Storybook. **Tests:** Angular unit/component tests plus mocked environment profiles; Rust unit/integration tests for adapters.

This is an **architectural proposal**. Pin exact supported versions and run a packaging spike before committing the hackathon baseline.

## Dependency direction

`UI components → feature facades/application services → ports → platform adapters → Tauri commands/Rust/OS`. Shared UI receives view models and emits intent; it never imports Tauri APIs. Browser/mock adapters keep Storybook and tests deterministic.

```text
src/app/
  core/                 # state, routing, application orchestration, errors
  shell/                # app frame and wizard navigation
  features/
    environment-check/
    compatibility-report/
    configuration/
    installation/
    verification/
  shared/ui/            # presentational components only
  platform/
    ports/              # TypeScript interfaces/tokens
    adapters/           # tauri and mock implementations
src-tauri/
  src/commands/         # narrow serializable IPC commands
  src/platform/         # OS-specific Rust adapters
  src/domain/           # normalized facts/operations
```

## Ports

```ts
interface PlatformService { getPlatform(): Promise<PlatformInfo>; selectDirectory(): Promise<string | null>; }
interface EnvironmentScanner { scan(signal?: AbortSignal): Promise<EnvironmentProfile>; }
interface PrerequisiteChecker { check(id: CheckId, profile: EnvironmentProfile): Promise<CheckResult>; checkAll(profile: EnvironmentProfile): Promise<CheckResult[]>; }
interface InstallerService { createPlan(config: InstallConfig): Promise<InstallPlan>; execute(plan: InstallPlan, onEvent: (e: InstallEvent) => void): Promise<InstallReceipt>; retry(operationId: string): Promise<void>; }
interface HealthCheckService { verify(receipt: InstallReceipt): Promise<HealthResult>; }
```

Use injection tokens for ports. Commands return typed, versioned DTOs and structured error codes; UI maps them to content and preserves redacted native evidence. Never send arbitrary shell commands from Angular.

## State model

A wizard store owns current step, environment facts, check results, configuration, plan, operations, health result, and invalidation rules. Signals/computed values suit local synchronous derivation; RxJS remains appropriate for event streams/cancellation. Persist non-sensitive resumable state only when necessary. A changed model path invalidates disk/plan/health, not OS/Python checks.

## Security and reliability

Allowlist narrow Tauri commands; validate/canonicalize paths in Rust; avoid shell interpolation; constrain copy destinations; checksum artifacts; redact logs; define privilege boundaries; make operations idempotent; model cancellation explicitly. The MVP may simulate downloads/remediation, but must label simulation in UI/demo.

## Test strategy

- Pure policy tests for manifest comparison and invalidation.
- Angular component tests for states, keyboard, live-region behavior, and errors.
- Contract tests run the five mocked profiles plus edge cases.
- Rust adapter tests cover version/path/process parsing; integration test installs the reference product into a temporary directory and runs `--health`.
- End-to-end demo paths: Healthy → success; Python missing → remediation/recheck → success; model/microphone health failure → scoped recovery.

## Evolution beyond hackathon

Adapters support new OS implementations without changing components; manifest-driven checks allow product evolution; operations can gain rollback/resume; plan DTO can become a repeatable enterprise configuration. Avoid speculative plugin frameworks until real requirements exist.
