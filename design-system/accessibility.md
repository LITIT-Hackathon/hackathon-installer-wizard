# Accessibility

Target WCAG 2.2 AA and platform desktop conventions.

## Interaction

- All actions work by keyboard; no keyboard trap except a correctly managed modal dialog.
- Focus order follows task order. On navigation focus the page heading; on validation focus the error summary; after a check completes announce its summary without stealing focus.
- Minimum target 24×24 CSS px; primary controls should be at least 40 px high.
- Escape closes dismissible overlays; destructive/cancel actions require clear consequences.

## Semantics

- Use landmarks, one page-level `h1`, ordered headings, native buttons/inputs, fieldsets for related options, and descriptions via `aria-describedby`.
- Stepper uses an ordered list and `aria-current="step"`; do not use tabs unless panels truly follow the tabs pattern.
- Status pairs icon, text, and semantic color. Use `role="status"`/polite live regions for normal updates and `role="alert"` only for urgent blocking changes.
- Progress uses native `progress` or correct value attributes plus visible phase text. Throttle announcements.
- Dialogs have name, description, initial focus, containment, return focus, and an accessible close path.

## Perception

Body text contrast ≥4.5:1; large text/UI boundaries ≥3:1. Support 200% zoom and reflow without lost content. Never encode status, charts, or log severity by color alone. Honor reduced motion and increased contrast where available.

## Error and diagnostics

Error summary names count and links to each source. Inline text says what is wrong and how to correct it. Logs are selectable text with filters represented as labeled controls; provide a structured summary rather than forcing screen-reader users through raw output.

## Test matrix

Automated axe checks; keyboard-only path; Windows Narrator + Chromium WebView for MVP; 200% zoom; high contrast; reduced motion; color-vision simulation. **Future validation requirement:** VoiceOver and Orca testing on packaged platform builds.
