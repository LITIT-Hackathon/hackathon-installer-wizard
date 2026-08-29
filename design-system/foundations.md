# Foundations

## Character

Professional, modern, technical, calm, trustworthy, and enterprise-ready. Branding stays restrained: neutral surfaces, one blue action color, semantic statuses, compact hierarchy. Avoid decorative gradients, pervasive glass effects, oversized marketing headings, playful onboarding, card grids without information value, and motion that delays work.

## Typography

Use the system UI stack (`Inter` only if bundled), with 16 px body/24 px line height. Suggested scale: 12/16 metadata, 14/20 supporting, 16/24 body, 20/28 section title, 28/36 page title. Use a bundled/system monospace stack at 13/20 only for paths, commands, versions, and logs. Never use monospace as a proxy for “technical credibility.”

## Layout

Desktop shell minimum target 900×640; content measure 760–960 px. Persistent stepper/landmark, stable footer actions, and one dominant content column. Group requirements by meaning, not decorative cards. At narrow widths, stack columns and keep primary action after content in DOM order.

## Spacing, shape, elevation

Use a 4 px base grid; common gaps 8, 12, 16, 24, 32. Controls minimum 40 px high; targets minimum 24×24 CSS px with adequate separation. Radius 4 for controls, 8 for panels/dialogs, pill only for short badges. Use borders before shadows; one subtle overlay shadow for dialogs/popovers.

## Iconography and motion

Use simple outlined icons paired with labels. Never rely on icon shape/color alone. Motion communicates state transition: 120–200 ms, opacity/position only, no looping decoration. Respect `prefers-reduced-motion`; progress remains meaningful without animation.
