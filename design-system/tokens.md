# Design tokens

Tokens are semantic; values are an **architectural proposal** pending contrast checks in the actual shell.

```css
:root {
  --font-sans: ui-sans-serif, system-ui, "Segoe UI", sans-serif;
  --font-mono: ui-monospace, "Cascadia Code", monospace;
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem; --space-6: 1.5rem; --space-8: 2rem;
  --radius-control: 0.25rem; --radius-panel: 0.5rem;
  --surface-canvas: #f6f8fb; --surface-default: #ffffff; --surface-subtle: #eef2f7;
  --text-primary: #172033; --text-secondary: #4b5870; --border-default: #c7d0dd;
  --action-default: #135fbd; --action-hover: #0b4e9f; --action-text: #ffffff;
  --status-success: #167347; --status-success-bg: #e9f6ef;
  --status-warning: #8a5200; --status-warning-bg: #fff4d6;
  --status-error: #b42318; --status-error-bg: #fff0ee;
  --status-info: #175cd3; --status-info-bg: #eef4ff;
  --status-progress: #475467; --status-progress-bg: #eef2f6;
  --disabled-bg: #e4e7ec; --disabled-text: #667085;
  --focus-ring: #ffbf47; --focus-width: 3px;
  --shadow-overlay: 0 12px 32px rgb(23 32 51 / 0.18);
  --motion-fast: 120ms; --motion-normal: 180ms;
}
```

## Semantic rules

- **Success:** verified/passed, never merely finished.
- **Warning:** user may continue with a known consequence.
- **Blocking failure:** continuation is unsafe/impossible until resolved.
- **Information:** neutral explanation or detected fact.
- **In progress:** active work with a text label and determinate value where possible.
- **Disabled:** unavailable action with discoverable reason; never reduce opacity below legibility.

Focus is a 3 px high-contrast outer ring with 2 px offset. Validate all foreground/background pairs to WCAG 2.2 AA before implementation; do not assume token names guarantee compliance.
