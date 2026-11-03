#!/usr/bin/env python3
"""Copy a fresh build and restore only its original font faces and preload."""
import argparse
import re
import shutil
from pathlib import Path

p = argparse.ArgumentParser()
p.add_argument('site', type=Path)
p.add_argument('destination', type=Path)
a = p.parse_args()
# Refuse to overwrite an existing baseline.
shutil.copytree(a.site, a.destination)
faces = []
for stem, family, high in [('Inter', 'Inter', 700), ('JetBrains-Mono', 'JetBrains Mono', 500), ('Mona-Sans', 'Mona Sans', 700)]:
    assert (a.destination / 'css/fonts' / f'{stem}-Variable.woff2').is_file()
    faces.append(f"@font-face{{font-family:'{family}';src:url('/css/fonts/{stem}-Variable.woff2') format('woff2');font-style:normal;font-weight:300 {high};font-display:swap}}")
css = a.destination / 'css/style.css'
text, count = re.subn(r'@font-face\s*\{[^}]*\}', '', css.read_text())
if count not in (3, 6):
    raise ValueError(f'Unexpected font configuration ({count} faces); review baseline.py first')
css.write_text(''.join(faces) + text)
preload = '<link rel="preload" href="/css/fonts/Mona-Sans-Variable.woff2" as="font" type="font/woff2" crossorigin />'
for page in a.destination.rglob('*.html'):
    text = page.read_text()
    text, count = re.subn(r'<link\b(?=[^>]*\bas=[\"\']font[\"\'])[^>]*>', '', text)
    # Test fixtures deliberately have no preloads, to test demand loading.
    if count:
        text = text.replace('</head>', preload + '\n</head>', 1)
    page.write_text(text)
