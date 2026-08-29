# Interview guide

> **Simulated persona-based research sessions used to approximate likely interview findings for the purpose of the hackathon.** Use this guide later with real participants after consent and privacy review.

## Opening and warm-up

- Tell me about your role and the computer you normally use.
- How often do you install desktop or AI software?
- What makes an installer feel trustworthy or untrustworthy?

## Previous experience

- Walk me through a memorable successful installation.
- Describe an installation that failed. What did you do next?
- What do you expect the installer to detect automatically?

## Comprehension and control

- What do “prerequisite,” “Python,” “GPU,” and “CUDA” mean to you?
- Which settings should be recommended versus explicitly chosen?
- Would you want to see files, commands, versions, or environment variables? When?

## Permissions and security

- Can you approve administrator access? What happens if you cannot?
- How do proxy, firewall, offline, antivirus, or software-policy rules affect you?
- What should be shown before the installer changes the machine?

## Failure and recovery

- If one check fails, what explanation and next action would you expect?
- Should the installer fix prerequisites automatically? Which ones must it never change?
- After a fix, should it rerun one check or the whole scan?

## Configuration and diagnostics

- Do you need custom application, model, cache, port, or log locations?
- When are logs useful? Should they be copyable or exportable?
- How much technical detail should be visible by default?

## Trust and confirmation

- What progress information matters during a long model download?
- What evidence would convince you installation succeeded?
- What should the final screen let you do?

## Scenario prompts

Test Python missing, low disk, unsupported OS, CUDA mismatch, no elevation, proxy, microphone denial, corrupted model, interruption, and health failure. Ask the participant to predict consequences before revealing them.
