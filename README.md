# Smart Install

Design and build an intelligent cross-platform installation wizard for
the supplied reference product.

The wizard should understand the user's environment, validate prerequisites,
guide configuration and clearly diagnose installation problems.

## Target Platforms

- Windows
- macOS
- Linux

The architecture and UX should account for all three platforms.

A fully working implementation on one primary operating system is sufficient
for the MVP. Other operating systems may be represented through adapters,
mocks or test profiles.

## MVP

The solution should:

- detect the operating system
- validate relevant hardware/system prerequisites
- validate software dependencies
- clearly communicate pass/warning/fail states
- provide actionable remediation guidance
- install or simulate installation of the supplied reference product
- perform a final health check
- demonstrate both successful and failing scenarios

## UX

Teams should:

- investigate the supplied product and user personas
- conduct user interviews
- create their own research/interview approach
- produce a Figma flow/prototype
- use the findings to influence the implementation

## Provided

- Reference product
- Product manifest
- Product overview
- User personas
- Test scenarios
- GCP sandbox and token credits

## Deliverable

A working and demonstrable installation/diagnostic prototype.
