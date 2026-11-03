# Web-font optimization review — draft, not approved for merge

Manual generation only; no font processing runs in the site build. Original fonts remain unchanged. `font-display`, fallback stacks, synthetic italics and CSS face weight descriptors are preserved.

## Payload (bytes, uncompressed HTTP font bodies)

| Font | Before | Core | Extended | Combined |
|---|---:|---:|---:|---:|
| Inter | 48,432 | 27,160 | 16,672 | 43,832 |
| Mona-Sans | 39,796 | 24,988 | 11,804 | 36,792 |
| JetBrains-Mono | 40,480 | 25,904 | 8,228 | 34,132 |

All production pages previously fetched 128,708 bytes and preloaded only Mona Sans. The new three core preloads total **78,052 bytes (39.36% less)**. Extended files are requested by character coverage, never preloaded. Full per-page measurements and exact URLs are in `verification.json` and `pages.csv`; fixtures are identified separately from production pages.

## Inventory and usage

`before-inventory.json` inventories every original file, including inactive fonts: byte size, glyph count, variable axes, GSUB/GPOS features, hinting tables/programs and embedded licenses. `file-inventory.json` adds the generated files. `after-inventory.json` records source/output hashes, cmaps, advertised Unicode ranges, retained features and observed weights.

- Inter: 400/500/600/700; Mona Sans: 400/500/600/700; JetBrains Mono: 400/500/**600**, including component overrides. Keep variable weights and synthetic italics, including bold inside italics. No axis is fixed to a single value.
- `before-pages.json` records computed text styles and pseudo-elements at desktop/mobile widths, including inline component styles. Browser list markers enable Inter `tnum`; retain it even though stylesheets do not explicitly request it. Normal shaping, kerning and mark positioning are preserved; unused optional features are removed.
- Retain the published character corpus plus source-supported Latin-1, Latin Extended-A and combining marks. The source fonts were already Latin subsets: missing glyphs are not invented. CJK continues to use system fonts.
- There is no active production `hyphens: auto`; fixtures cover it. U+2010 maps to the original hyphen glyph, matching the original browser fallback behavior.
- Original active fonts already have no hinting: dropping hinting saves **0 bytes**.
- Modified Mona Sans is renamed internally to **FI Heading**, respecting its OFL Reserved Font Name. CSS aliases and license metadata are preserved.

## Visual preservation and deliberate deviations

The strict requested axis/core cuts were rejected because they changed rendering. The current candidate still has a three-pixel discrepancy and is not approved for merge. Earlier experiments found:

| Rejected alternative | Core bytes | Saving versus selected core | Observed regression |
|---|---:|---:|---|
| Strict ASCII/punctuation core | 70,432 | 7,620 | 23,592 changed pixels on desktop accents fixture |
| Fully instantiate used axis ranges | 67,204 | 10,848 | 3,587 changed pixels on desktop Design System Italia page |
| Remove unused negative Inter variation tuples too | 72,616 | 5,436 | 3 underscore-edge pixels; retaining the tuples did not fix them |

These are historical experiment measurements, not final-candidate proof; candidate size manifests are retained. Savings compare complete variants, not isolated additive changes.

The selected core includes all published characters to avoid shaping/kerning across font-file boundaries. Original axis endpoints/normalization remain; Inter retains all variation data. Only JetBrains Mono's provably inactive negative `gvar` tuples are removed directly, avoiding instancer rounding. Glyph names are retained because stripping them changed rasterization. Extended binaries retain an internal capital X reference glyph for rasterization consistency; CSS does not advertise X for those faces. Every advertised code point exists in its binary, and advertised core/extended ranges are disjoint. No generated fallback face sits between them.

Original and inactive font files remain available (no extra page requests) for reproducibility and existing cached URLs. Generated URLs include binary hashes, identical in CSS and preloads, to work with the existing immutable cache policy. Core embedding and idle extension precaching are deferred.

## Reproduce

Follow [the manual workflow](../../scripts/font-tools/README.md). Use stable Node 20 or 22 (the local Node 27 alpha is incompatible with pngjs). Regenerate when content, template/component styles, weights, features, generated text or input fonts change; commit binaries, generated SCSS/preloads and updated reports together. Generation verifies each retained glyph's decomposed outline and advance against the original at every observed weight, and reopens the output to validate cmap, names, features and hinting.

## Final verification — 2026-11-03

**169/170 comparisons have zero changed pixels**. The mobile dark-mode article has **3 changed pixels**, maximum channel delta 17, at the left edge of an underscore. This is an unresolved regression and a merge blocker; no approval is assumed. This covers all 80 production pages and five focused fixtures at 1440 and 390 CSS pixels, scale factor 1, light theme, Chrome 156.0.8078.80 on macOS arm64 with software composition. Fixtures exercise code, weights, italic/bold-inside-italic, accents, punctuation/hyphenation, and CJK. Production pages cover independent component font settings.

Baseline is cloned from the same built content and differs only in font faces/preloads. Body hashes and non-font CSS are checked. Two identical consecutive screenshots are required on each side of a font stylesheet swap in the same settled DOM; threshold is zero with no masks. Time/animations, GIF frames and video are frozen, and external requests are blocked. Earlier image-decoding/GPU differences were eliminated by these deterministic controls, not accepted as font regressions. There are no content changes. The three remaining changed pixels have not been dismissed as harmless rounding: their cause still needs isolation and a zero-diff result or explicit approval. This is not an all-browser or all-theme guarantee.

All 80 production pages at both widths fetch exactly the three core files: **128,708 → 78,052 bytes**, saving **50,656 bytes per cold page**. None fetch an extended file. The isolated extended-character fixture does fetch extensions; actual platform font records on the CJK fixture confirm system fallback remains. See `verification.json` for per-request URLs, platform font names and all image hashes; `pages.csv` for a compact page table. Representative before/after PNGs are committed in `evidence/`; all other captures can be regenerated with the manual workflow.

Jekyll build, Python/JavaScript syntax checks and byte-for-byte regeneration of all six binaries passed. Reports and scripts are excluded from the published site.
