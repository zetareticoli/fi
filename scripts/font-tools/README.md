# Manual font maintenance

Nothing here runs during `npm run build`, Jekyll, or deployment. Commit the six generated WOFF2 files, `_sass/_font-subsets.scss`, `_data/font_preloads.yml`, and the updated reports together. Original fonts remain unchanged as reproducible inputs and to keep existing URLs working.

## Run again

Run from the repository root with stable Node 20 or 22. Install the isolated tools once:

```sh
python3 -m venv scripts/font-tools/.venv
scripts/font-tools/.venv/bin/pip install -r scripts/font-tools/requirements.txt
npm install --prefix scripts/font-tools
```

The browser tools use installed Chrome on macOS, or Playwright Chromium elsewhere. Set `CHROME` to another Chromium executable if necessary, or install Playwright Chromium with `cd scripts/font-tools && npx playwright install chromium`.

```sh
font_audit_dir="$(mktemp -d /tmp/fi-fonts.XXXXXX)"

# Inspect ORIGINAL fonts against current content and current component styles.
bundle exec jekyll build --destination "$font_audit_dir/current"
python3 scripts/font-tools/baseline.py "$font_audit_dir/current" "$font_audit_dir/original"
NO_SCREENSHOTS=1 node scripts/font-tools/audit.cjs "$font_audit_dir/original" "$font_audit_dir/usage"

# Offline generation: includes binary/cmap/name/hinting/outline/advance checks.
scripts/font-tools/.venv/bin/python scripts/font-tools/subset.py \
  "$font_audit_dir/original" --usage "$font_audit_dir/usage/pages.json"

# Build once, then clone that exact output for the original-font reference.
# This avoids differences in Jekyll's timestamped script URLs between builds.
bundle exec jekyll build --destination "$font_audit_dir/after"
python3 scripts/font-tools/fixtures.py "$font_audit_dir/after"
python3 scripts/font-tools/baseline.py "$font_audit_dir/after" "$font_audit_dir/before"
node scripts/font-tools/verify.cjs \
  "$font_audit_dir/before" "$font_audit_dir/after" "$font_audit_dir/proof"
```

`baseline.py` refuses to overwrite an existing destination. `verify.cjs` exits unsuccessfully for any changed pixel, changed dimensions, unstable capture, changed body HTML, or non-font CSS change. It writes before/after PNGs, highlighted differences, SHA-256 hashes, browser details, and per-page cold font requests. `FILTER=font-fixtures`, `WIDTHS=1440,390`, and `THEME=dark` can narrow or extend a review. Do not waive differences automatically.

Rerun after changing content (including data, translations, form labels/placeholders and generated text), templates, inline/component styles, font families, weights, feature settings, CSS-generated punctuation/hyphenation, or the original font files. Review new axes and CSS font variants before publishing. The audit includes computed inline styles, hidden text, responsive desktop/mobile layouts, and `::marker`/generated content; the source scan also keeps alt text and input attributes. Add coverage for new interactive states or breakpoints. New scripts that inject text need an explicit fixture.

## Preservation rules

- Preserve the existing CSS family aliases, fallback stacks, normal faces, synthetic italics, face weight descriptors, and `font-display: swap`.
- Keep source-supported Latin-1/Latin Extended-A, combining marks, and used characters. Do not invent missing Latin or CJK glyphs. CJK keeps the system fallback.
- Keep published characters together in the core. Splitting an accented word across files changes shaping/kerning, so a strict ASCII core is not the default. Unused retained Latin characters remain in the extended file. Rerun before publishing new text: coverage alone does not guarantee identical shaping across subset boundaries.
- Preserve original `fvar`/`avar` normalization and positive variation delta encoding. For JetBrains Mono, discard only negative `gvar` tuples whose contribution is provably zero at every used weight. Inter conservatively retains all variation tuples. A three-pixel underscore-edge discrepancy in mobile Chrome persists even with those tuples retained and remains a merge blocker. Rebasing the axis or re-instancing inferred deltas changed pixels. Retain the original upper endpoints.
- Preserve normal shaping features and CSS-enabled features. In particular, the browser enables `tnum` for list markers even though the stylesheets do not explicitly request it. Keep glyph names; removing them changed rasterization on the tested platform.
- The extended binaries include the capital `X` reference glyph, which is necessary for identical upright rasterization in Chrome/macOS. Their CSS does **not** advertise ASCII, so this does not trigger extra downloads. Every advertised code point exists in that binary; the advertised core/extended ranges do not overlap.
- U+2010 is an explicit cmap alias of the existing hyphen glyph: the original browser rendering already used that glyph for the missing U+2010. The automatic-hyphenation fixture verifies the alias.
- Rename the modified Mona font internally to **FI Heading**, preserving copyright/OFL metadata. Its existing CSS alias remains `Mona Sans`.
- Generated URLs include a hash of the binary. CSS and preloads use the same URL, avoiding duplicate downloads and stale fonts under the existing one-year immutable cache policy.

Chrome uses software composition (`--disable-gpu`) to avoid unrelated GPU image-resampling noise. The browser proof compares the same settled DOM before and after replacing only the font stylesheet; it requires two identical consecutive captures on each side. This prevents different image decoding, video frames, clocks, or animation state from masquerading as font changes. Candidate font requests are measured again in a separate cold browser context. External integrations are blocked; video playback is stopped and GIFs use their first frame. No text, image region, or color difference is masked, and the pixel threshold is zero.

The guarantee is for the published content and recorded Chromium/macOS environments, sizes, and fixtures. It is not a claim of universal pixel equality across browsers/operating systems or arbitrary future text. Test additional target platforms when required.

## Inspect alternatives without replacing the default output

`--ascii-core` and `--restrict-all` require `--output-root /tmp/some-candidate`. They generate review candidates, not approved replacements. `--keep-axes` retains all original variation data as a control; `--keep-features` retains all original OpenType features as a control. The report records the savings and rejected visual changes.

`inventory.py css/fonts OUTPUT.json --originals` inventories the original files; omit `--originals` to include generated files. The generated inventory also records source hashes, used weights, required features, removed variation tuple counts, exact cmaps, CSS coverage, and output hashes.

Core embedding and idle precaching of extensions are intentionally deferred.
