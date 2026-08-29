# Simulated interview — Developer

> **Simulated persona-based research sessions used to approximate likely interview findings for the purpose of the hackathon.** Answers are modeled from the supplied persona, not quotes from a real person.

**Profile assumption:** application developer with several language runtimes and project-specific environments.

**What creates trust?** “Detection should show the executable path and version. Don’t say Python is missing if it just isn’t on PATH.” Wants the raw command and exit code available.

**Should the installer remediate automatically?** “Offer it, but show the command and avoid global packages.” Yet for a known safe model download they prefer one-click repair. The acceptable automation boundary depends on blast radius.

**Configuration needs?** Custom install path, backend port, model path, and a preview of the generated config. Defaults are welcome if editable.

**How should retry work?** Rerun only the failed check or failed installation operation; preserve scan results and configuration. A full restart is considered a product bug.

**Logs?** Searchable, selectable, timestamped, severity-filtered, copy/export. User-facing error and raw diagnostic must be distinct.

**Newer dependency detected?** Do not downgrade. Mark “not yet verified” as a warning and allow continuation where safe.

**What proves success?** Health command, exit code, structured output, and launch. Wants to know exactly which artifacts were placed.

**Synthesis note:** expose evidence and precise control without making it the default experience. **Future validation requirement:** decide which advanced settings are truly necessary through task observation.
