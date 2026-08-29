# Component specifications

Notation: inputs are immutable data/signals; outputs are user intents. Components never call Tauri directly. Every component receives labels or uses product content rules, and meaningful states require Storybook examples.

| Component | Purpose | Inputs | Outputs | States | Accessibility / example |
|---|---|---|---|---|---|
| `AppShellComponent` | stable desktop frame | title, step, actions | close/help | normal, busy | landmarks; `<app-shell [step]="step">` |
| `WizardStepperComponent` | progress and review navigation | steps, currentId | stepRequested | upcoming/current/complete/error/stale | ordered list, `aria-current`; `<wizard-stepper [steps]="steps" />` |
| `WizardStepComponent` | page heading/content/actions | title, description | — | default, loading | `h1`, focus target; `<wizard-step title="System analysis">` |
| `SystemSummaryComponent` | detected machine facts | profile | refreshRequested | loading/ready/partial | definition list; `<system-summary [profile]="profile" />` |
| `RequirementCheckComponent` | one check and evidence | check | retry/remediate/details | checking/passed/warning/failed/remediated | status text/live result; `<requirement-check [check]="python" />` |
| `RequirementListComponent` | group checks and summary | checks, heading | checkAction | loading/mixed/all-pass | semantic list; `<requirement-list [checks]="required" />` |
| `StatusBadgeComponent` | compact semantic state | status, label | — | success/warning/blocking/info/progress/disabled | label+icon, no color-only; `<status-badge status="warning" />` |
| `ProgressIndicatorComponent` | task progress | value?, phase | — | indeterminate/determinate/paused/failed/complete | native progress + text; `<progress-indicator [value]="42" />` |
| `RemediationPanelComponent` | explain and choose recovery | issue, options | optionSelected/recheck | available/applying/failed/resolved | heading, radio/actions; `<remediation-panel [issue]="issue" />` |
| `TechnicalDetailsComponent` | disclose evidence | summary, details | copy/export | collapsed/expanded/copy-success | native details where suitable; `<technical-details [details]="evidence" />` |
| `InstallLocationPickerComponent` | choose/validate path | value, space, requirement | valueChanged/browse | default/checking/valid/invalid/unwritable | labeled input/error; `<install-location-picker kind="model" />` |
| `ConfigurationOptionComponent` | configure one choice | label, value, choices | valueChanged | default/selected/disabled/error | fieldset for radios; `<configuration-option [choices]="modes" />` |
| `PermissionRequestComponent` | explain permission before OS prompt | permission, reason, fallback | request/skip | not-requested/requesting/granted/denied | no surprise prompt; `<permission-request permission="microphone" />` |
| `InstallationProgressComponent` | operation and overall progress | plan, operations | cancel/retry/details | queued/running/paused/failed/complete | nested list, throttled live updates; `<installation-progress [plan]="plan" />` |
| `LogViewerComponent` | inspect/export diagnostics | events, filters | filter/copy/export | empty/live/paused/error | selectable log + structured summary; `<log-viewer [events]="events" />` |
| `HealthCheckSummaryComponent` | prove runtime health | checks, overall | retry/openDetails | idle/running/passed/partial/failed | list and announced summary; `<health-check-summary [checks]="health" />` |
| `CompletionSummaryComponent` | verified outcome and next steps | receipt | launch/openFolder | success/launch-failed | heading names success evidence; `<completion-summary [receipt]="receipt" />` |
| `ErrorSummaryComponent` | consolidate actionable errors | errors | errorSelected | hidden/single/multiple | alert only after submit, anchor links; `<error-summary [errors]="errors" />` |
| `PrimaryButtonComponent` | primary task action | label, disabled, busy | pressed | default/hover/focus/pressed/disabled/busy | native button; `<primary-button label="Install" />` |
| `SecondaryButtonComponent` | secondary action | label, disabled | pressed | default/hover/focus/pressed/disabled | native button; `<secondary-button label="Back" />` |
| `InlineAlertComponent` | contextual semantic message | tone, title, body | dismissed? | info/success/warning/blocking | status/alert chosen by urgency; `<inline-alert tone="warning" />` |
| `ConfirmationDialogComponent` | confirm consequential action | title, impact, confirmLabel | confirmed/cancelled | closed/open/busy/error | modal semantics/focus return; `<confirmation-dialog [impact]="change" />` |

## Story coverage

Each component gets Default, keyboard-focus, disabled (if applicable), long/localized content, and high-contrast stories. Requirement Check explicitly demonstrates checking, passed, warning, failed, and remediated. Progress demonstrates determinate and honest indeterminate modes. Alerts demonstrate every semantic tone. Forms demonstrate inline and summary errors.
