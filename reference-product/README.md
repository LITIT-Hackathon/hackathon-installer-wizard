# LITIT AI Desktop — Dummy Reference Product

A deliberately tiny cross-platform reference product for the Smart Install hackathon challenge.

## Run

Linux/macOS:
```bash
./run.sh
./run.sh --health
```

Windows:
```bat
run.bat
run.bat --health
```

## Installer target

Your installer/wizard should be able to:
- place this product into an installation directory;
- preserve/create `config/app.json`;
- preserve/install `models/demo-model.bin`;
- validate prerequisites from `product-manifest.json`;
- run the final health check using `--health`;
- present actionable errors when the health check fails.

## Easy failure simulation

- Delete `config/app.json` -> config failure.
- Delete `models/demo-model.bin` -> model failure.
- Set `LITIT_MIC_OK=0` -> microphone permission failure.

This product is intentionally simple. The hackathon work is the installer, diagnostics and UX — not this app.
