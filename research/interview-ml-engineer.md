# Simulated interview — ML Engineer

> **Simulated persona-based research sessions used to approximate likely interview findings for the purpose of the hackathon.** Answers are modeled from the supplied persona, not quotes from a real person.

**Profile assumption:** ML engineer sharing a workstation across projects with multiple CUDA toolkits and limited fast local storage.

**How should CUDA be handled?** “Detect driver, GPU, toolkit, and effective runtime separately. Never rewrite CUDA paths globally.” They may choose CPU fallback even when GPU repair is possible.

**What details matter?** GPU model, driver, detected CUDA versions/paths, required range, compatibility source, and the runtime the product will actually use. A single red “CUDA failed” is insufficient.

**Configuration needs?** Models on a large secondary disk; application elsewhere; preserve an existing model; checksum before reuse. They want projected and available space for the chosen volume.

**Automation?** Accepts automatic download and checksum validation, but not drivers/toolkits. This conflicts with a generic “fix prerequisites” pattern and requires risk-based remediation categories.

**Newer CUDA?** Treat it as unverified, not automatically incompatible. Permit CPU mode or explicit informed continuation if supported by product policy.

**Failure recovery?** Resume large downloads, keep verified chunks where safe, and rerun the model/health check rather than reinstall everything.

**What proves success?** Health output should state CPU/GPU execution mode, selected model, and whether microphone/backend initialized. The current reference health contract does not expose execution mode—an **architectural proposal** is to show installer-level selected mode separately.

**Synthesis note:** preserve specialized environments and make compatibility evidence inspectable. **Future validation requirement:** validate GPU detection across driver/toolkit/runtime combinations.
