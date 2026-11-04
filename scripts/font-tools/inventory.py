#!/usr/bin/env python3
"""Inventory font binaries, including outlines lazily loaded by fontTools."""
import argparse, json
from pathlib import Path
from fontTools.ttLib import TTFont
p=argparse.ArgumentParser();p.add_argument('directory',type=Path);p.add_argument('output',type=Path);p.add_argument('--originals',action='store_true');a=p.parse_args()
result={}
for path in sorted(a.directory.glob('*')):
    if path.suffix not in ('.woff','.woff2','.ttf','.otf'): continue
    if a.originals and path.stem.endswith(('-core','-extended')): continue
    f=TTFont(path)
    result[path.name]={
        'bytes':path.stat().st_size, 'glyphs':f['maxp'].numGlyphs,
        'characters':len(f.getBestCmap()),
        'axes':{x.axisTag:[x.minValue,x.defaultValue,x.maxValue] for x in f['fvar'].axes} if 'fvar' in f else {},
        'features':{t:sorted({r.FeatureTag for r in f[t].table.FeatureList.FeatureRecord}) for t in ('GSUB','GPOS') if t in f and f[t].table.FeatureList},
        'hinting':{'tables':[t for t in ('fpgm','prep','cvt ','cvar','hdmx','VDMX') if t in f],
            'glyphPrograms':sum(bool(getattr(f['glyf'][g],'program',None) and f['glyf'][g].program.getBytecode()) for g in f.getGlyphOrder()) if 'glyf' in f else 0},
        'license':sorted({n.toUnicode() for n in f['name'].names if n.nameID in (0,13,14)}),
    }
a.output.write_text(json.dumps(result,indent=2)+'\n')
