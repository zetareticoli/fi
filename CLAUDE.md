# CLAUDE.md

Sito personale e blog di Francesco Improta — https://francescoimprota.com.
Jekyll + Tailwind CSS v4, deploy automatico su Netlify.

## Git

- **Nome dei rami.** Prima del primo commit, rinomina il ramo della sessione con lo scope della modifica:
  `<area>/<descrizione-breve>` in kebab-case. L'area è la parte del sito toccata
  (`about`, `post`, `work`, `workshop`, `seo`, `css`, `deps`, `docs`…).
  Esempi: `about/expertise-section`, `workshop/fix-coupon`, `post/one-conversation-one-job`.
  Fai push solo sul ramo rinominato (`git branch -m <nuovo-nome>` prima del primo push).
- **Messaggi di commit** in stile Conventional Commits, in inglese:
  `feat(scope): …`, `fix(scope): …`, `refactor`, `style`, `chore`, `build(deps)`.
  Lo scope coincide di solito con l'area del ramo (`fix(workshop): lower the Interface Inventory price to €99`).
- Non aprire pull request se non richiesto esplicitamente.

## Comandi

```bash
npm run dev        # Tailwind in watch + jekyll serve --livereload
npm run tw:build   # ricompila css/tw-compiled.css
npm run build      # style-dictionary: rigenera i design token da tokens/
bundle exec jekyll build
```

- **`css/tw-compiled.css` è versionato e Netlify non lo ricompila** (il build Netlify esegue solo
  `bundle exec jekyll build`). Se aggiungi o cambi classi Tailwind in template o contenuti,
  esegui `npm run tw:build` e committa anche il CSS compilato, altrimenti le classi nuove non esistono in produzione.

## Struttura

- `_posts/` — articoli del blog (`YYYY-MM-DD-slug.md`). Modello: `_posts/starter-post.md`.
  Front matter: `layout: post`, `title`, `description` (unica, usata anche per OG), `cover-image`, `sitemap`.
  Estratto separato da `<!--more-->`.
- `_work/<progetto>/index.md` — case study (layout `work`). Front matter strutturato:
  `title`, `cover`, `tag`, `order`, `overview`, `role`, `org`, `period`, `context`, `challenge`,
  `activities`, `outcomes`, `tools`. Per scriverne uno nuovo usa la skill `case-study`.
- `_workshops/` — landing dei workshop (layout `workshop`, permalink `/workshops/:path`), con prezzi, date e coupon.
- `_data/*.yml` — contenuti strutturati (awards, teaching, talks, clienti, progetti…).
  Preferisci aggiungere voci qui piuttosto che scriverle a mano nell'HTML delle pagine.
- `_layouts/`, `_includes/` — template. `head.html` contiene SEO, Open Graph e cache busting.
- `css/tw.css` — sorgente Tailwind (`@theme`, token colore). `css/style.scss` — stili SCSS (`_sass/`).
- `tokens/` — design token Style Dictionary.
- `img/` — immagini, organizzate per sezione (`img/posts/`, `img/work/<progetto>/`, `img/social/`…).
- `netlify.toml` — build, redirect 301 e header di cache.

## Convenzioni

- **Lingua:** i contenuti del sito sono in inglese (`lang: en`). La comunicazione con Francesco è in italiano.
- **Stile UI:** usa le utility Tailwind e i token semantici già presenti
  (`text-muted-foreground`, `text-primary`, `text-accent`, `meta-tag`, `hairline`, `animate-in`).
  Non introdurre colori o valori hardcoded.
- **Immagini:** preferisci `.webp`, con `width`/`height`, `loading="lazy"` e `decoding="async"`.
  Le immagini social (OG) restano in JPEG 1200×630 in `img/social/`.
- **SEO:** ogni pagina/post ha una `description` unica. Se cambi un URL, aggiungi un redirect 301 in `netlify.toml`.
- **Cache:** i file serviti con header `immutable` in `netlify.toml` devono essere richiesti con `?v={{ asset_version }}`.
  Aggiungi un file a quella lista solo dopo aver aggiunto la query string.
- Per le modifiche visibili, verifica la pagina con `bundle exec jekyll build` (o `npm run dev`) prima del commit.
