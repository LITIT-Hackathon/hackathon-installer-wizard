# Content guidelines

## Voice

Calm, direct, specific, and non-blaming. Lead with user impact, then cause, then action. Prefer “Python 3.11 or later is needed to run the local service” over “Dependency resolution failed.” Never claim “your system is broken.”

## Status pattern

**Title:** outcome in plain language. **Explanation:** why it matters. **Evidence:** detected versus needed. **Action:** verb-led next step. Example: “Not enough space in D:. Installation needs 5 GB; 2 GB is available. Choose another location.”

## Terms

- Use “check” before “diagnostic,” “fix” before “remediation,” and “installation location” before “target directory.”
- Introduce Python/CUDA only when relevant and define their product role.
- Distinguish “required,” “optional,” and “not verified.” Never use “compatible” for an unknown check.
- Buttons describe outcomes: “Analyze this computer,” “Review installation,” “Retry model copy”; avoid “Yes,” “Submit,” and ambiguous “Continue” when a more specific label fits.

## Progress and errors

Use meaningful phases (“Copying application files,” “Verifying model”) and quantities when real. Do not invent percentage or time. Error IDs belong in technical details, not the headline. Preserve raw external messages in diagnostics; translate them in the primary UI.

## Security and privacy

Explain permission purpose before prompting. Say which facts stay local or are exported. Redact usernames where practical, tokens, credentials, proxy secrets, and sensitive environment values from shared bundles.
