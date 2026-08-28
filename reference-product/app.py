#!/usr/bin/env python3
import json, os, platform, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CONFIG = ROOT / 'config' / 'app.json'
MODEL = ROOT / 'models' / 'demo-model.bin'


def load_config():
    if not CONFIG.exists():
        return None, 'Missing config/app.json'
    try:
        return json.loads(CONFIG.read_text()), None
    except Exception as e:
        return None, f'Invalid config: {e}'


def health():
    cfg, err = load_config()
    checks = {
        'os': platform.system(),
        'python': platform.python_version(),
        'config': 'OK' if err is None else err,
        'model': 'OK' if MODEL.exists() else 'Missing models/demo-model.bin',
        'microphone': 'SIMULATED_OK' if os.getenv('LITIT_MIC_OK', '1') == '1' else 'DENIED',
        'backend_port': cfg.get('backend_port') if cfg else None,
        'status': 'OK' if err is None and MODEL.exists() and os.getenv('LITIT_MIC_OK', '1') == '1' else 'FAIL'
    }
    print(json.dumps(checks, indent=2))
    return 0 if checks['status'] == 'OK' else 2


def main():
    if len(sys.argv) > 1 and sys.argv[1] == '--health':
        raise SystemExit(health())
    cfg, err = load_config()
    if err:
        print(f'LITIT AI Demo failed to start: {err}')
        raise SystemExit(2)
    if not MODEL.exists():
        print('LITIT AI Demo failed to start: model missing')
        raise SystemExit(2)
    print('LITIT AI Demo')
    print('-------------')
    print(f"Backend: http://127.0.0.1:{cfg['backend_port']}")
    print(f"Model: {MODEL}")
    print(f"Microphone: {'enabled' if cfg.get('microphone_enabled', True) else 'disabled'}")
    print('Status: READY')

if __name__ == '__main__':
    main()
