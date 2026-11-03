#!/usr/bin/env python3
"""Add identical test-only fixtures to built baseline and candidate directories."""
import sys
from pathlib import Path
for directory in sys.argv[1:]:
    root=Path(directory)/'font-fixtures';root.mkdir(exist_ok=True)
    for name,text in {
        'ascii':'AVATAR office affinity 0123456789 -> != === ASCII only',
        'accents':'Caffè perché più già È ciò à è é ì ò ù ç €',
        'extended':'ö',
        'cjk':'中文 日本語 한글 漢字',
        'punctuation':'“Curly quotes” ‘apostrophes’ – dash — em dash … ellipsis • bullet © copyright',
    }.items():
        sections=''.join(f'<section style="font-family:var(--font-{family});font-weight:{weight}"><p>{text}</p><p><em>{text} <strong>{text}</strong></em></p><code>{text}</code></section>' for family,weights in [('sans',[400,500,600,700]),('heading',[400,500,600,700]),('mono',[400,500,600])] for weight in weights)
        html=f'''<!doctype html><html lang="en"><meta charset="utf-8"><link rel="stylesheet" href="/css/tw-compiled.css"><link rel="stylesheet" href="/css/style.css"><body style="padding:24px">{sections}<p style="hyphens:auto;width:100px" lang="en">internationalization extraordinary auto‐hyphenation</p></body></html>'''
        (root/(name+'.html')).write_text(html)
