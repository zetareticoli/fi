---
layout: workshop
title: "Design Tokens Workshop - Corso Completo"
seo_title: "Design Tokens Workshop con Francesco Improta"
description: "Impara a creare e gestire i design tokens in modo efficace, accelerando lo sviluppo e garantendo la coerenza visiva dell'interfaccia."
lang: it
og-image: workshops/og-design-tokens-workshop.png
permalink: /workshops/design-tokens/
workshop_nav:
  - label: "Risultati"
    url: "#learn"
  - label: "Metodo"
    url: "#process"
  - label: "Programma"
    url: "#details"
  - label: "FAQ"
    url: "#faq"
promo:
  label: "Black Friday −40%"
  label_short: "BF −40%"
  until: "fino al 30 novembre"
  deadline: "2026-11-30T23:59:00"
  cta: "Riserva il tuo posto"
  cta_short: "Prenota"
  url: "https://book.stripe.com/6oU5kC6Th5fY23w76Xcs804?prefilled_promo_code=BLACK40"
  plausible_event: "Promo+Banner"
offer:
  price: "€299"
  price_full: "€499"
  url: "https://book.stripe.com/6oU5kC6Th5fY23w76Xcs804?prefilled_promo_code=BLACK40"
  cta: "Riserva il tuo posto"
  plausible_event: "Buy+Workshop"
  sessions:
    - "Sessione 1 (feb/mar 2027 - da definire)"
    - "Sessione 2 (apr/mag 2027 - da definire)"
  session_time: "09:00–13:00"
  deadline: "2026-11-30T23:59:00"
  note: 'Black Friday: sconto del 40% fino a <strong class="font-medium text-foreground">lunedì 30 novembre 2026</strong>, applicato automaticamente al checkout.'
  checkout_note: "Ti scriverò appena le date saranno confermate, per scegliere quella che preferisci."
---

<style>
  .tokens-page {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    overflow: clip;
    --tokens-media-overlap: 4.5rem;
  }

  .tokens-page > section {
    position: relative;
    z-index: 2;
  }

  /* Background design tokens. They only appear where there is free space,
     so they never sit on top of the copy:
     - hero tokens: right of the hero text, from 1280px;
     - gutter tokens: in the side margins of the max-w-7xl container, from 1600px. */
  .tokens-artboard {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .token-art {
    position: absolute;
    z-index: var(--layer, 1);
    display: none;
    opacity: 0;
    transform: translate3d(0, calc(var(--entry-y, 96px) + var(--parallax-y, 0px)), 0) rotate(var(--rotate, 0deg));
    transition:
      opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
      transform 1000ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
    will-change: transform;
  }

  .tokens-page.is-art-ready .token-art {
    --entry-y: 0px;
    opacity: 1;
  }

  .tokens-page.is-parallax-ready .token-art {
    transition: opacity 200ms linear;
  }

  .token-art-card {
    filter: drop-shadow(0 18px 22px rgb(24 48 72 / 0.1));
  }

  @media (min-width: 1280px) {
    .token-art[data-zone="hero"] {
      display: block;
    }

    .token-art[data-art="swatch"] { top: 4rem; right: 13rem; --rotate: -4deg; }
    .token-art[data-art="json"] { top: 10rem; right: 2.5rem; --rotate: 3deg; }
    .token-art[data-art="type"] { top: 21rem; right: 18rem; --rotate: 5deg; }
    .token-art[data-art="space"] { top: 30rem; right: 3rem; --rotate: -2deg; }
  }

  @media (min-width: 1536px) {
    .token-art[data-art="swatch"] { right: calc(50% - 40rem + 15rem); }
    .token-art[data-art="json"] { right: calc(50% - 40rem); }
    .token-art[data-art="type"] { right: calc(50% - 40rem + 19rem); }
    .token-art[data-art="space"] { right: calc(50% - 40rem + 1rem); }
  }

  @media (min-width: 1600px) {
    .token-art[data-zone="gutter"] {
      display: block;
      width: calc(50% - 40rem - 1.5rem);
      max-width: 14rem;
    }

    .token-art[data-side="left"] { left: 1rem; }
    .token-art[data-side="right"] { right: 1rem; }

    .token-art[data-art="chain"] { top: 62rem; --rotate: -3deg; }
    .token-art[data-art="palette"] { top: 104rem; --rotate: 4deg; }
    .token-art[data-art="radius"] { top: 150rem; --rotate: -5deg; }
    .token-art[data-art="motion"] { top: 205rem; --rotate: 3deg; }
    .token-art[data-art="shadow"] { top: 262rem; --rotate: -4deg; }
    .token-art[data-art="info"] { top: 320rem; --rotate: 5deg; }
    .token-art[data-art="css"] { top: 380rem; --rotate: -3deg; }
    .token-art[data-art="success"] { top: 440rem; --rotate: 4deg; }
  }

  /* Inline tokens: placed inside their section below 1280px, so they sit in
     the free space between blocks instead of over the copy. */
  .token-inline {
    opacity: 0;
    transform: translate3d(0, calc(var(--entry-y, 48px) + var(--parallax-y, 0px)), 0) rotate(var(--rotate, 0deg));
    transition:
      opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 1000ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  .tokens-page.is-art-ready .token-inline {
    --entry-y: 0px;
    opacity: 1;
  }

  .tokens-page.is-parallax-ready .token-inline {
    transition: opacity 200ms linear;
  }

  @media (prefers-reduced-motion: reduce) {
    .token-inline,
    .tokens-page.is-art-ready .token-inline,
    .token-art,
    .tokens-page.is-art-ready .token-art {
      --entry-y: 0px;
      --parallax-y: 0px;
      opacity: 1;
      transition: none;
    }
  }

  .benefit-band + .benefit-band {
    margin-top: 3rem;
    padding-top: 3rem;
  }

  .benefit-band-visual img {
    width: min(100%, 30rem);
    height: auto;
  }

  @media (min-width: 768px) {
    .benefit-band + .benefit-band {
      margin-top: 4rem;
      padding-top: 4rem;
    }
  }

  .tokens-page > section.tokens-what {
    z-index: 3;
  }

  .tokens-what-media {
    margin-bottom: calc(var(--tokens-media-overlap) * -1);
  }

  .tokens-what-media img {
    display: block;
    width: 100%;
    height: clamp(14rem, 32vw, 28rem);
    object-fit: cover;
    filter: drop-shadow(0 18px 22px rgb(24 48 72 / 0.12));
  }

  .tokens-what-next {
    padding-top: calc(3rem + var(--tokens-media-overlap) + 1.5rem);
  }

  @media (min-width: 1024px) {
    .tokens-page {
      --tokens-media-overlap: 7.5rem;
    }

    .tokens-what-next {
      padding-top: calc(4rem + var(--tokens-media-overlap) + 2rem);
    }
  }

  @media (max-width: 639px) {
    .tokens-page {
      --tokens-media-overlap: 3.5rem;
    }
  }
</style>

<!-- Token cards shared by the background artboard and the inline (mobile/tablet) placements -->
{%- capture tk_swatch -%}
      <div class="token-art-card flex items-center gap-3.5 rounded-2xl border border-border bg-background py-2.5 pl-2.5 pr-4">
        <span class="size-14 rounded-xl bg-accent"></span>
        <span class="flex flex-col gap-1 font-mono">
          <span class="text-[11px] text-muted-foreground">color.accent.default</span>
          <span class="text-sm font-medium">hsl(38 98% 44%)</span>
        </span>
      </div>
{%- endcapture -%}
{%- capture tk_json -%}
      <div class="token-art-card rounded-2xl bg-primary px-5 py-4 text-primary-foreground">
        <span class="mb-3 block font-mono text-[10px] opacity-60">tokens/space.json</span>
<pre class="m-0 font-mono text-xs leading-relaxed">{
  "space": {
    "400": {
      "$type": "dimension",
      "$value": "16px"
    }
  }
}</pre>
      </div>
{%- endcapture -%}
{%- capture tk_chain -%}
      <div class="token-art-card flex flex-col gap-1.5 rounded-2xl border border-border bg-background p-3 font-mono text-[11px]">
        <span class="text-[10px] uppercase tracking-wide text-muted-foreground">global</span>
        <span class="rounded-full border border-border px-2.5 py-1">amber.500</span>
        <span class="pl-3 text-accent">↓</span>
        <span class="text-[10px] uppercase tracking-wide text-muted-foreground">alias</span>
        <span class="rounded-full border border-border px-2.5 py-1">color.action.primary</span>
        <span class="pl-3 text-accent">↓</span>
        <span class="text-[10px] uppercase tracking-wide text-muted-foreground">component</span>
        <span class="rounded-full border border-accent px-2.5 py-1">button.bg</span>
      </div>
{%- endcapture -%}
{%- capture tk_palette -%}
      <div class="token-art-card flex flex-col gap-2.5 rounded-2xl border border-border bg-background p-3">
        <span class="flex gap-1.5">
          <span class="h-16 flex-1 rounded-lg bg-accent/20"></span>
          <span class="h-16 flex-1 rounded-lg bg-accent/45"></span>
          <span class="h-16 flex-1 rounded-lg bg-accent/70"></span>
          <span class="h-16 flex-1 rounded-lg bg-accent"></span>
        </span>
        <span class="font-mono text-[11px] text-muted-foreground">color.amber.100 → 500</span>
      </div>
{%- endcapture -%}
{%- capture tk_radius -%}
      <div class="token-art-card flex items-center gap-3 rounded-2xl border border-border bg-background p-3">
        <span class="size-14 shrink-0 rounded-tr-3xl border-2 border-foreground bg-secondary"></span>
        <span class="flex flex-col gap-1 font-mono">
          <span class="text-[11px] text-muted-foreground">radius.lg</span>
          <span class="text-sm font-medium">24px</span>
        </span>
      </div>
{%- endcapture -%}

<div class="tokens-page" data-tokens-page>
  <!-- Background design tokens (decorative) -->
  <div class="tokens-artboard" aria-hidden="true">
    <div class="token-art" data-zone="hero" data-art="swatch" data-parallax-speed="0.11" data-parallax-max="70" style="--delay: 0ms; --layer: 3">
      {{ tk_swatch }}
    </div>
    <div class="token-art" data-zone="hero" data-art="json" data-parallax-speed="0.05" data-parallax-max="50" style="--delay: 90ms">
      {{ tk_json }}
    </div>
    <div class="token-art" data-zone="hero" data-art="type" data-parallax-speed="0.08" data-parallax-max="60" style="--delay: 180ms; --layer: 2">
      <div class="token-art-card flex flex-col gap-1.5 rounded-2xl border border-border bg-background px-5 py-4">
        <span class="font-heading text-6xl font-bold leading-none tracking-tight">Aa</span>
        <span class="font-mono text-[11px] text-muted-foreground">font.size.display</span>
        <span class="font-mono text-xs font-medium">64px · 700</span>
      </div>
    </div>
    <div class="token-art" data-zone="hero" data-art="space" data-parallax-speed="0.13" data-parallax-max="40" style="--delay: 260ms; --layer: 4">
      <div class="token-art-card flex flex-col gap-2 rounded-2xl border border-border bg-background px-4 py-3.5 font-mono text-[11px]">
        <span class="flex items-center gap-3"><span class="w-16 text-muted-foreground">space.100</span><span class="h-3 w-3 border-x-2 border-accent bg-accent/30"></span>4px</span>
        <span class="flex items-center gap-3"><span class="w-16 text-muted-foreground">space.200</span><span class="h-3 w-6 border-x-2 border-accent bg-accent/30"></span>8px</span>
        <span class="flex items-center gap-3"><span class="w-16 text-muted-foreground">space.400</span><span class="h-3 w-12 border-x-2 border-accent bg-accent/30"></span>16px</span>
        <span class="flex items-center gap-3"><span class="w-16 text-muted-foreground">space.600</span><span class="h-3 w-18 border-x-2 border-accent bg-accent/30"></span>24px</span>
      </div>
    </div>

    <div class="token-art" data-zone="gutter" data-side="right" data-art="chain" data-parallax-speed="0.09" style="--delay: 340ms">
      {{ tk_chain }}
    </div>
    <div class="token-art" data-zone="gutter" data-side="left" data-art="palette" data-parallax-speed="0.05" style="--delay: 420ms">
      {{ tk_palette }}
    </div>
    <div class="token-art" data-zone="gutter" data-side="right" data-art="radius" data-parallax-speed="0.08" style="--delay: 500ms">
      {{ tk_radius }}
    </div>
    <div class="token-art" data-zone="gutter" data-side="left" data-art="motion" data-parallax-speed="0.07" style="--delay: 580ms">
      <div class="token-art-card flex items-center gap-3 rounded-2xl border border-border bg-background p-3">
        <svg class="size-14 shrink-0" viewBox="0 0 64 64" fill="none"><rect x="1" y="1" width="62" height="62" rx="8" class="stroke-border"/><path d="M8 56C30 56 26 8 56 8" class="stroke-accent" stroke-width="2.5" stroke-linecap="round"/></svg>
        <span class="flex flex-col gap-1 font-mono">
          <span class="text-[11px] text-muted-foreground">motion.fast</span>
          <span class="text-sm font-medium">150ms</span>
        </span>
      </div>
    </div>
    <div class="token-art" data-zone="gutter" data-side="right" data-art="shadow" data-parallax-speed="0.09" style="--delay: 660ms">
      <div class="flex flex-col items-start gap-3">
        <span class="block h-20 w-36 rounded-xl bg-background shadow-2xl"></span>
        <span class="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px]">shadow.raised</span>
      </div>
    </div>
    <div class="token-art" data-zone="gutter" data-side="left" data-art="info" data-parallax-speed="0.1" style="--delay: 740ms">
      <div class="token-art-card flex items-center gap-3 rounded-2xl border border-border bg-background p-2.5 pr-4">
        <span class="size-12 shrink-0 rounded-xl bg-blue-600"></span>
        <span class="font-mono text-[11px] text-muted-foreground">color.feedback.info</span>
      </div>
    </div>
    <div class="token-art" data-zone="gutter" data-side="right" data-art="css" data-parallax-speed="0.06" style="--delay: 820ms">
      <div class="token-art-card rounded-2xl bg-primary px-4 py-3.5 text-primary-foreground">
        <span class="mb-2 block font-mono text-[10px] opacity-60">tokens.css</span>
<pre class="m-0 font-mono text-[11px] leading-relaxed">:root {
  --radius-lg: 24px;
  --space-400: 1rem;
}</pre>
      </div>
    </div>
    <div class="token-art" data-zone="gutter" data-side="left" data-art="success" data-parallax-speed="0.09" style="--delay: 900ms">
      <div class="token-art-card flex items-center gap-3 rounded-2xl border border-border bg-background p-2.5 pr-4">
        <span class="size-12 shrink-0 rounded-xl bg-emerald-500"></span>
        <span class="font-mono text-[11px] text-muted-foreground">color.feedback.success</span>
      </div>
    </div>
  </div>

<!-- Hero Section -->
<section class="hero px-6 lg:px-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
  <div class="mx-auto max-w-7xl">
    <div class="flex max-w-3xl flex-col items-start">
      <span class="mb-6 inline-flex items-center border border-border bg-background px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">Design Tokens · Workshop online</span>
      <h1 class="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Trasforma le decisioni di design in un sistema che scala</h1>
      <div class="mt-6 -mb-2 flex w-full justify-end pr-2 sm:pr-10 xl:hidden" aria-hidden="true">
        <div class="token-inline" data-parallax-local data-parallax-speed="0.06" data-parallax-max="14" style="--rotate: -4deg">
          {{ tk_swatch }}
        </div>
      </div>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">In quattro mattine impari a definire, nominare e gestire i design tokens: dall’architettura a livelli alla naming convention, da Figma al JSON fino alle variabili CSS.</p>
      <p class="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
        <img class="h-24 w-24 md:h-28 md:w-28 shrink-0 object-cover grayscale rounded-4xl shadow-2xl" src="/img/francesco-improta-profile.webp" alt="Francesco Improta" width="400" height="400" decoding="async">
        <span>Con <strong class="font-medium text-foreground">Francesco Improta</strong>, designer esperto in Design Systems e Product Design.</span>
      </p>

      <div class="relative mt-8 flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center">
        <a href="#booking" class="inline-flex items-center justify-center bg-accent px-8 py-4 text-lg font-medium text-accent-foreground hover:opacity-90 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">Vedi date e prenota</a>
        <a href="#details" class="inline-flex items-center justify-center px-2 py-3 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70">Scopri il programma →</a>
        <div class="token-inline pointer-events-none absolute top-4 -right-20 -z-10 origin-top-right scale-75 sm:top-0 sm:-right-4 sm:scale-[.6] xl:hidden" aria-hidden="true" data-parallax-local data-parallax-speed="0.05" data-parallax-max="10" style="--rotate: 3deg">
          {{ tk_json }}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- What to expect -->
<section class="px-6 py-12 lg:px-10 lg:py-16" id="expect">
  <div class="mx-auto max-w-7xl">
    <div class="mb-10 max-w-2xl">
      <span class="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">L’esperienza</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cosa aspettarti da questo workshop</h2>
    </div>
    <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">01</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Quattro sessioni live</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Quattro mattine da quattro ore, da remoto, con spazio per domande, confronto e feedback diretto.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">02</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Approccio hands-on</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Lavori su un caso reale: dalla tassonomia fino ai file CSS generati con Style Dictionary.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">03</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Esercitazioni guidate</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Crei una tassonomia, dai un nome ai token e li applichi in Figma e nel codice.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">04</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Gruppo ristretto</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Massimo sei partecipanti per rendere il confronto utile e partecipato.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">05</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Accesso ai materiali</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Ricevi le registrazioni, il materiale didattico e le risorse per continuare in autonomia.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">06</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Attestato di partecipazione</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Ricevi un attestato digitale da inserire nel tuo profilo LinkedIn.</p>
      </article>
    </div>
  </div>
</section>

<!-- Booking -->
<section class="scroll-mt-32 px-6 pt-28 pb-12 sm:pt-56 lg:scroll-mt-24 lg:px-10 lg:pb-16 xl:pt-16" id="booking">
  <div class="relative mx-auto max-w-7xl">
    <div class="token-inline pointer-events-none absolute -top-32 -right-8 -z-10 w-44 sm:hidden" aria-hidden="true" data-parallax-local data-parallax-speed="0.05" data-parallax-max="14" style="--rotate: 4deg">
      {{ tk_palette }}
    </div>
    <div class="token-inline pointer-events-none absolute -top-48 left-0 -z-10 hidden sm:block xl:hidden" aria-hidden="true" data-parallax-local data-parallax-speed="0.06" data-parallax-max="18" style="--rotate: -5deg">
      {{ tk_radius }}
    </div>
    <div class="token-inline pointer-events-none absolute -top-60 right-0 -z-10 hidden sm:block xl:hidden" aria-hidden="true" data-parallax-local data-parallax-speed="0.04" data-parallax-max="18" style="--rotate: -3deg">
      {{ tk_chain }}
    </div>
    <div class="mb-8 text-center">
      <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Partecipa</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Riserva il tuo posto</h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Il tuo acquisto è valido per tutte le date disponibili.</p>
    </div>
    {% include payment-link.html wide=true note=true %}
  </div>
</section>

<!-- Why design tokens -->
<section class="tokens-what px-6 lg:px-10 py-12 lg:py-16" id="what">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
      <div>
        <span class="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">Il metodo</span>
        <h2 class="max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Perché partire dai design tokens</h2>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">Quando un prodotto cresce, colori, spaziature e tipografia si moltiplicano tra file di design e codice. I design tokens trasformano queste decisioni in una fonte unica, con nomi chiari, che designer e developer possono usare e far evolvere insieme.</p>
      </div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
            <h3 class="font-heading text-base font-medium">Una sola fonte di verità</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Ogni valore visivo vive in un solo posto e si propaga ovunque serva.</p>
        </div>
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg>
            <h3 class="font-heading text-base font-medium">Temi e dark mode</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Cambi tema o brand intervenendo sui valori, non su ogni singolo componente.</p>
        </div>
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
            <h3 class="font-heading text-base font-medium">Allinea design e codice</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Figma e CSS usano gli stessi nomi: il team parla la stessa lingua.</p>
        </div>
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/></svg>
            <h3 class="font-heading text-base font-medium">Scala senza debito</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Eviti valori hardcoded e varianti non documentate mentre il prodotto cresce.</p>
        </div>
      </div>
    </div>

    <figure class="tokens-what-media mt-12 lg:mt-16">
      <img class="rounded-2xl" src="/img/workshops/design-tokens-workshop.webp" alt="Una scrivania da lavoro riflessa in una foto" width="2400" height="740" loading="lazy" decoding="async">
    </figure>
  </div>
</section>

<!-- Audience Section -->
<section class="tokens-what-next scroll-mt-32 px-6 pb-12 lg:scroll-mt-24 lg:px-10 lg:pb-16" id="audience">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10 max-w-2xl">
      <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Destinatari</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Chi può partecipare?</h2>
    </div>
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h3 class="font-heading text-xl font-medium">Hai questo ruolo</h3>
        <ul class="mt-5 flex list-none flex-col gap-4 p-0 text-base leading-relaxed">
          <li class="flex gap-3 text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span><span>Sei <strong class="text-primary">product, UI o design system designer</strong> e vuoi dare struttura ai fondamenti visivi.</span></li>
          <li class="flex gap-3 text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span><span>Sei <strong class="text-primary">developer o design engineer</strong> e devi tradurre le decisioni di design in variabili e temi.</span></li>
          <li class="flex gap-3 text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span><span><strong class="text-primary">Coordini un team</strong> che sta costruendo o facendo evolvere un Design System.</span></li>
        </ul>
      </div>
      <div>
        <h3 class="font-heading text-xl font-medium">Hai questi problemi</h3>
        <ul class="mt-5 flex list-none flex-col gap-4 p-0 text-base leading-relaxed">
          <li class="flex gap-3 text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span><span>Gli stessi valori sono <strong class="text-primary">duplicati e hardcoded</strong> tra Figma e codice.</span></li>
          <li class="flex gap-3 text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span><span>Aggiungere <strong class="text-primary">un tema o la dark mode</strong> richiede interventi manuali ovunque.</span></li>
          <li class="flex gap-3 text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span><span>Non sai <strong class="text-primary">come dare un nome</strong> ai token perché restino chiari nel tempo.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section: image first on mobile, alternating sides from md -->
<section class="scroll-mt-32 bg-card-foreground px-6 py-12 lg:scroll-mt-24 lg:px-10 lg:py-20" id="learn">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 max-w-2xl lg:mb-16">
      <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Competenze</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cosa impari</h2>
    </div>
    <div class="flex flex-col">
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-16">
        <div class="benefit-band-visual flex w-full flex-1 justify-center">
          <img src="/img/workshops/tokens-decisions.png" alt="Diagramma delle decisioni che formano un’architettura di design tokens" width="1200" height="675" loading="lazy" decoding="async">
        </div>
        <div class="w-full flex-1">
          <h3 class="mb-0 font-heading text-2xl font-semibold leading-tight lg:text-3xl">Definire un’architettura scalabile.</h3>
          <p class="font-heading text-2xl font-normal leading-tight text-muted-foreground lg:text-3xl">Organizzi i token in livelli (global, alias, component) con ruoli e responsabilità chiare.</p>
        </div>
      </article>
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row lg:gap-16">
        <div class="benefit-band-visual flex w-full flex-1 justify-center">
          <img src="/img/workshops/design-tokens/tokens-naming.webp" alt="Anatomia del nome di un design token: card-heading-large-bold, con i segmenti component, property, variant e scale" width="1672" height="941" loading="lazy" decoding="async">
        </div>
        <div class="w-full flex-1">
          <h3 class="mb-0 font-heading text-2xl font-semibold leading-tight lg:text-3xl">Nominare i token in modo efficace.</h3>
          <p class="font-heading text-2xl font-normal leading-tight text-muted-foreground lg:text-3xl">Costruisci una tassonomia e una naming convention che restano chiare nel lungo periodo.</p>
        </div>
      </article>
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-16">
        <div class="benefit-band-visual flex w-full flex-1 justify-center">
          <img src="/img/workshops/design-tokens/tokens-lifecycle.webp" alt="Due flussi a confronto: modificando i design tokens si aggiornano componenti Figma, file dei token, CSS e pagina web; modificando solo il CSS il cambiamento non torna in Figma" width="1672" height="941" loading="lazy" decoding="async">
        </div>
        <div class="w-full flex-1">
          <h3 class="mb-0 font-heading text-2xl font-semibold leading-tight lg:text-3xl">Gestire il ciclo di vita.</h3>
          <p class="font-heading text-2xl font-normal leading-tight text-muted-foreground lg:text-3xl">Da Figma al JSON alle variabili CSS, governi i token dalla definizione al rilascio.</p>
        </div>
      </article>
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row lg:gap-16">
        <div class="benefit-band-visual flex w-full flex-1 justify-center">
          <img src="/img/workshops/tokens-purpose.png" alt="Modello condiviso di design tokens tra design, sviluppo e prodotto" width="1200" height="675" loading="lazy" decoding="async">
        </div>
        <div class="w-full flex-1">
          <h3 class="mb-0 font-heading text-2xl font-semibold leading-tight lg:text-3xl">Allineare il team.</h3>
          <p class="font-heading text-2xl font-normal leading-tight text-muted-foreground lg:text-3xl">Designer, developer e PM lavorano su una base condivisa e visibile del sistema.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- How the workshop works -->
<section class="scroll-mt-32 px-6 py-12 lg:scroll-mt-24 lg:px-10 lg:py-20" id="process" data-tokens-process>
  <div class="mx-auto max-w-7xl">
    <div class="mb-10 max-w-3xl lg:mb-14">
      <span class="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">Metodo</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cosa fai, in pratica</h2>
      <p class="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">Partendo da valori reali, strutturi i livelli, scegli i nomi e porti i token nel codice. Attività concrete che puoi applicare subito al tuo prodotto.</p>
    </div>

    <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div class="-mx-6 flex min-w-0 gap-2 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-px-6 px-6 py-1 lg:mx-0 lg:flex-col lg:gap-4 lg:snap-none lg:overflow-visible lg:scroll-p-1 lg:p-1" role="tablist" aria-label="Fasi del workshop">
        <button class="w-[66.667vw] shrink-0 snap-center whitespace-normal lg:w-full lg:min-w-0 cursor-pointer rounded-2xl p-5 text-left text-muted-foreground transition-colors duration-200 hover:bg-gray-100 dark:hover:not-active:bg-secondary hover:text-foreground aria-selected:bg-secondary/70 aria-selected:text-foreground active:bg-accent/20 aria-selected:active:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none" type="button" role="tab" id="process-tab-1" aria-controls="process-panel-1" aria-selected="true" tabindex="0" data-process-tab="1">
          <span class="mb-2 block font-mono text-xs text-accent">01</span>
          <span class="block font-heading text-lg font-medium leading-snug">Strutturi i livelli</span>
          <span class="mt-2 block text-sm leading-relaxed">Separi valori primitivi, decisioni semantiche e token di componente in un’architettura a livelli.</span>
        </button>
        <button class="w-[66.667vw] shrink-0 snap-center whitespace-normal lg:w-full lg:min-w-0 cursor-pointer rounded-2xl p-5 text-left text-muted-foreground transition-colors duration-200 hover:bg-gray-100 dark:hover:not-active:bg-secondary hover:text-foreground aria-selected:bg-secondary/70 aria-selected:text-foreground active:bg-accent/20 aria-selected:active:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none" type="button" role="tab" id="process-tab-2" aria-controls="process-panel-2" aria-selected="false" tabindex="-1" data-process-tab="2">
          <span class="mb-2 block font-mono text-xs text-accent">02</span>
          <span class="block font-heading text-lg font-medium leading-snug">Scegli i nomi giusti</span>
          <span class="mt-2 block text-sm leading-relaxed">Costruisci una tassonomia e scegli nomi che raccontano a cosa serve ogni valore.</span>
        </button>
        <button class="w-[66.667vw] shrink-0 snap-center whitespace-normal lg:w-full lg:min-w-0 cursor-pointer rounded-2xl p-5 text-left text-muted-foreground transition-colors duration-200 hover:bg-gray-100 dark:hover:not-active:bg-secondary hover:text-foreground aria-selected:bg-secondary/70 aria-selected:text-foreground active:bg-accent/20 aria-selected:active:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none" type="button" role="tab" id="process-tab-3" aria-controls="process-panel-3" aria-selected="false" tabindex="-1" data-process-tab="3">
          <span class="mb-2 block font-mono text-xs text-accent">03</span>
          <span class="block font-heading text-lg font-medium leading-snug">Porti i token nel codice</span>
          <span class="mt-2 block text-sm leading-relaxed">Esporti il JSON e generi variabili CSS, temi e dark mode con Style Dictionary.</span>
        </button>
      </div>

      <div class="min-w-0">
        <div class="w-full min-w-0" role="tabpanel" id="process-panel-1" aria-labelledby="process-tab-1" data-process-panel="1">
          <div class="grid grid-cols-1 gap-4 rounded-2xl bg-secondary p-6 shadow-2xl sm:grid-cols-3 sm:p-8">
            <div class="flex flex-col gap-2.5 font-mono text-xs">
              <span class="text-[11px] uppercase tracking-wider text-muted-foreground">Global</span>
              <span class="flex items-center gap-2 rounded-lg bg-background px-3 py-2.5"><span class="size-3 rounded bg-accent"></span>amber.500</span>
              <span class="flex items-center gap-2 rounded-lg bg-background px-3 py-2.5"><span class="size-3 rounded bg-foreground"></span>gray.950</span>
              <span class="rounded-lg bg-background px-3 py-2.5">size.400 · 16px</span>
            </div>
            <div class="flex flex-col gap-2.5 font-mono text-xs">
              <span class="text-[11px] uppercase tracking-wider text-muted-foreground">Alias</span>
              <span class="rounded-lg border border-accent bg-background px-3 py-2.5">color.action.primary</span>
              <span class="rounded-lg bg-background px-3 py-2.5">color.text.default</span>
              <span class="rounded-lg bg-background px-3 py-2.5">space.inset.md</span>
            </div>
            <div class="flex flex-col gap-2.5 font-mono text-xs">
              <span class="text-[11px] uppercase tracking-wider text-muted-foreground">Component</span>
              <span class="rounded-lg border border-accent bg-background px-3 py-2.5">button.bg.default</span>
              <span class="rounded-lg bg-background px-3 py-2.5">button.label.color</span>
              <span class="rounded-lg bg-background px-3 py-2.5">button.padding.x</span>
            </div>
          </div>
        </div>
        <div class="w-full min-w-0" role="tabpanel" id="process-panel-2" aria-labelledby="process-tab-2" data-process-panel="2" hidden>
          <div class="rounded-2xl bg-secondary p-6 shadow-2xl sm:p-8">
            <div class="flex flex-wrap gap-2 font-mono">
              <span class="flex flex-col gap-2"><span class="rounded-lg bg-background px-4 py-3 text-base font-medium">color</span><span class="text-[11px] text-muted-foreground">categoria</span></span>
              <span class="flex flex-col gap-2"><span class="rounded-lg bg-background px-4 py-3 text-base font-medium">action</span><span class="text-[11px] text-muted-foreground">concetto</span></span>
              <span class="flex flex-col gap-2"><span class="rounded-lg border border-accent bg-background px-4 py-3 text-base font-medium">primary</span><span class="text-[11px] text-muted-foreground">variante</span></span>
              <span class="flex flex-col gap-2"><span class="rounded-lg bg-background px-4 py-3 text-base font-medium">hover</span><span class="text-[11px] text-muted-foreground">stato</span></span>
            </div>
            <p class="mt-8 mb-0 text-sm leading-relaxed text-muted-foreground">Ogni segmento risponde a una domanda: cosa è, a cosa serve, in quale variante e in quale stato. Il risultato è un nome leggibile da chi progetta e da chi sviluppa.</p>
          </div>
        </div>
        <div class="w-full min-w-0" role="tabpanel" id="process-panel-3" aria-labelledby="process-tab-3" data-process-panel="3" hidden>
          <div class="grid grid-cols-1 gap-5 overflow-x-auto rounded-2xl bg-primary p-6 text-primary-foreground shadow-2xl sm:grid-cols-2">
            <div>
              <span class="mb-3 block font-mono text-[11px] opacity-60">tokens/color.json</span>
<pre class="m-0 font-mono text-xs leading-relaxed">{
  "color": {
    "action": {
      "primary": {
        "$type": "color",
        "$value": "{amber.500}"
      }
    }
  }
}</pre>
            </div>
            <div class="sm:border-l sm:border-primary-foreground/20 sm:pl-5">
              <span class="mb-3 block font-mono text-[11px] opacity-60">build/tokens.css</span>
<pre class="m-0 font-mono text-xs leading-relaxed">:root {
  --amber-500: #de8e02;
  --color-action-primary:
    var(--amber-500);
}
[data-theme="dark"] {
  --color-action-primary:
    var(--amber-400);
}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Time and Schedule -->
<section class="scroll-mt-32 bg-secondary/40 px-6 py-12 lg:scroll-mt-24 lg:px-10 lg:py-20" id="schedule">
  <div class="mx-auto max-w-5xl">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Time &amp; Schedule</span>
        <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Quattro mattine di lavoro insieme</h2>
        <p class="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">Il workshop si svolge online su Google Meet, in quattro giornate dalle <strong class="font-medium text-foreground">{{ page.offer.session_time }}</strong>. Alterniamo teoria essenziale, demo, esercitazioni e confronto finale.</p>
      </div>
      <div>
        <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Formato</dt>
            <dd class="mt-2 text-base font-medium">Online, dal vivo</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Durata</dt>
            <dd class="mt-2 text-base font-medium">4 giornate × 4 ore</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Partecipanti</dt>
            <dd class="mt-2 text-base font-medium">Massimo 6 persone</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Dopo il live</dt>
            <dd class="mt-2 text-base font-medium">Registrazioni e materiali</dd>
          </div>
        </dl>
        <a href="#booking-final" class="mt-6 inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70">Vedi prezzo e prenota →</a>
      </div>
    </div>
  </div>
</section>

<!-- Program Section -->
{%- capture plus_icon -%}
<svg class="shrink-0 text-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" /><path class="program-plus-vert" d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
{%- endcapture -%}
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="details">
  <div class="mx-auto max-w-5xl">
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-8">Il programma completo</h2>
    <div class="flex flex-col gap-0.5 mb-6">
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">01</span> Fondamenti teorici</h4>
            <h3 class="font-heading text-xl font-medium">Fondamenti, evoluzione e valore dei design tokens</h3>
          </div>
          {{ plus_icon }}
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Definizione dei design tokens nei moderni sistemi di design</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Dai valori hardcoded ai design tokens: storia e contesto</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Differenze tra variabili CSS, variabili SASS, stili Figma e tokens</li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">02</span> Architettura e organizzazione</h4>
            <h3 class="font-heading text-xl font-medium">Organizza i design tokens in un sistema scalabile</h3>
          </div>
          {{ plus_icon }}
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Architettura a livelli: global, alias e component tokens</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Design tokens systems: color, typography, spacing, icon</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Gestire la specificità</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Strategie di versionamento</li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">03</span> Naming e tassonomia</h4>
            <h3 class="font-heading text-xl font-medium">Scegliere nomi significativi per i fondamenti visivi</h3>
          </div>
          {{ plus_icon }}
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Come costruire una tassonomia di vocaboli</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Le caratteristiche di un buon nome</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Creare nomi memorabili</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Convenzioni di scrittura</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Specifiche W3C e standard emergenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Esercitazione:</strong> creare una tassonomia e dare un nome ai design tokens</li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">04</span> I design tokens in Figma</h4>
            <h3 class="font-heading text-xl font-medium">Gestisci l’intero ciclo di vita dei design tokens</h3>
          </div>
          {{ plus_icon }}
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Flusso di lavoro completo: dalla definizione all’implementazione</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Usare i design tokens in Figma</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Demo: esportazione e gestione tramite Style Dictionary</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Strategie per la collaborazione designer-developer</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Esercitazione:</strong> applicare i design tokens in Figma</li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">05</span> I design tokens nel codice</h4>
            <h3 class="font-heading text-xl font-medium">Implementare i design tokens nei file CSS</h3>
          </div>
          {{ plus_icon }}
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Tecniche di trasformazione da JSON a CSS tramite Style Dictionary</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Media queries e tokens: gestione responsive</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Gestire temi e dark mode con i design tokens e CSS</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Esercitazione:</strong> trasformare i design tokens in variabili CSS</li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">06</span> Governance e documentazione</h4>
            <h3 class="font-heading text-xl font-medium">Pianifica e gestisci i design tokens nel tempo</h3>
          </div>
          {{ plus_icon }}
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Modello di governance: chi fa cosa</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Gestire aggiornamenti e rilasci</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Versionamento semantico</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Documentare i design tokens</li>
          </ul>
        </div>
      </details>
    </div>

    <div class="mb-12">
      <div class="hairline mb-8"></div>
      <h4 class="font-heading text-xl font-semibold mb-6">Materiali inclusi</h4>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 m-0 p-0 list-none">
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent mr-2" aria-hidden="true"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>&nbsp;Materiale didattico e risorse scaricabili
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent mr-2" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>&nbsp;Registrazioni delle lezioni
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent mr-2" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>&nbsp;Supporto post workshop
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent mr-2" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>&nbsp;Attestato di partecipazione
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- Instructor Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="teacher">
  <div class="mx-auto max-w-5xl">
    <div class="text-center">
      <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Chi sono</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-8">Porto nel workshop oltre 20 anni di esperienza sui prodotti digitali</h2>
      <img class="mx-auto mb-8 w-32 h-32 object-cover grayscale rounded-4xl shadow-2xl" src="/img/francesco-improta-profile.webp" alt="Francesco Improta - Design Token Expert and Course Instructor" width="400" height="400" loading="lazy" decoding="async">
    </div>
    <div class="mx-auto flex max-w-2xl flex-col gap-4">
      <p class="text-lg font-medium leading-relaxed">👋 Ciao, sono <strong class="font-semibold">Francesco Improta</strong>, designer con oltre 20 anni di esperienza nel design di prodotti digitali, specializzato in Design System.</p>
      <p class="text-base text-muted-foreground leading-relaxed">Ho creato questo workshop per <strong class="font-medium text-foreground">aiutarti a comprendere i design tokens e ad applicarli in modo efficace</strong>, riducendo i tempi di sviluppo e migliorando la coerenza del prodotto.</p>
      <p class="text-base text-muted-foreground leading-relaxed">Durante il workshop <strong class="font-medium text-foreground">condividerò esperienze pratiche e strumenti</strong> che ho utilizzato in anni di lavoro su progetti complessi.</p>
      <p>
        <a href="/about" class="text-sm underline text-muted-foreground underline-offset-2 hover:opacity-70 transition-opacity">Qualcosa su di me →</a>
      </p>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 bg-secondary/40 px-6 lg:px-10 py-12 lg:py-16" id="testimonials">
  <div class="mx-auto max-w-5xl text-center">
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Testimonianze</span>
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-12">Cosa dicono i partecipanti</h2>
    <script src="https://widget.senja.io/widget/55431434-5c93-481f-a84f-4a9695afe5d1/platform.js" type="text/javascript"
      async></script>
    <div class="senja-embed" data-id="55431434-5c93-481f-a84f-4a9695afe5d1" data-mode="shadow" data-lazyload="false"
      style="display: block; width: 100%;"></div>
  </div>
</section>

<!-- FAQ Section -->
{%- capture chevron_icon -%}
<svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
{%- endcapture -%}
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="faq">
  <div class="mx-auto max-w-5xl">
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Domande frequenti</span>
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-3">Questo corso è per me?</h2>
    <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">Tutto quello che serve sapere prima di prenotare il workshop.</p>
    <div class="flex flex-col mt-8">
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">Come funziona il workshop?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Il workshop si svolge online via Google Meet, con sessioni pratiche e teoria. Riceverai un link per accedere una settimana prima della data prevista.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">Devo avere esperienza con i design tokens?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, il workshop parte dalle basi. Ti fornirò io tutti gli strumenti teorici e pratici per mettere in pratica quanto appreso.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">L'acquisto del corso è per una data specifica?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, il tuo acquisto è valido per tutte le date disponibili. Se non puoi partecipare alla data pubblicata, potrai farlo in una delle successive. In genere annuncio le date un mese prima.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">Posso partecipare anche se non sono un designer?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Assolutamente sì! Il workshop è utile per tutti coloro i quali vogliono approfondire la conoscenza dei design tokens, indipendentemente dal proprio ruolo in un team.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">Cosa succede se acquisto il corso ma non posso partecipare?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Nessun problema, il tuo acquisto sarà valido per una delle date successive, a meno che non ci ripensi. In quel caso ti sarà inviato un rimborso.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">Posso pagare il corso a rate?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Sì, supporto Paypal e Klarna come metodi di pagamento che ti consentono di suddividere l'importo in piani a rate, secondo le rispettive modalità.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">Ho bisogno di strumenti specifici?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, basta un computer e una connessione internet. Ti fornirò tutto il materiale necessario.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-lg font-medium underline underline-offset-2">È possibile organizzare un workshop per più di 6 persone?</h4>
          {{ chevron_icon }}
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Per workshop aziendali personalizzati puoi contattarmi a me[at]francescoimprota.com.</div>
      </details>
    </div>
  </div>
</section>

<!-- Final CTA Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 bg-card-foreground px-6 lg:px-10 py-16 lg:py-20" id="booking-final">
  <div class="mx-auto max-w-7xl text-center">
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-3">Crea design tokens efficaci</h2>
    <p class="mx-auto max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">Riserva il tuo posto in una delle date disponibili.</p>
    <div class="mb-8">
      {% include payment-link.html bg="bg-background" wide=true note=true %}
    </div>
    <div class="hairline mb-8"></div>
    <p class="mb-2 text-sm text-muted-foreground">Hai dubbi o altre domande?</p>
    <p>
      <a href="https://cal.com/francesco-improta/30min" class="inline-flex items-center justify-center gap-2 text-lg underline underline-offset-2 hover:opacity-70 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>Parliamone insieme</a>
    </p>
  </div>
</section>
</div>

<script>
  (function () {
    const page = document.querySelector('[data-tokens-page]');
    if (!page) return;

    const artwork = Array.from(page.querySelectorAll('[data-parallax-speed]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameRequested = false;

    function renderParallax() {
      frameRequested = false;
      const pageTop = page.getBoundingClientRect().top + window.scrollY;
      const localScroll = reducedMotion.matches ? 0 : Math.max(0, window.scrollY - pageTop);

      artwork.forEach(function (item) {
        const speed = Number(item.dataset.parallaxSpeed) || 0;
        // Hero tokens get a short travel so they never drift into the next section.
        const max = Number(item.dataset.parallaxMax) || 420;
        let distance;
        if ('parallaxLocal' in item.dataset) {
          // Inline tokens drift around their resting place while their block crosses the viewport.
          if (reducedMotion.matches) {
            distance = 0;
          } else {
            const anchorTop = item.parentElement.getBoundingClientRect().top;
            distance = Math.max(-max, Math.min(max, (window.innerHeight / 2 - anchorTop) * speed));
          }
        } else {
          distance = Math.min(localScroll * speed, max);
        }
        item.style.setProperty('--parallax-y', distance.toFixed(2) + 'px');
      });
    }

    function requestRender() {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(renderParallax);
    }

    function startArtwork() {
      renderParallax();
      window.requestAnimationFrame(function () {
        page.classList.add('is-art-ready');
      });
      window.setTimeout(function () {
        page.classList.add('is-parallax-ready');
      }, 1800);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startArtwork, { once: true });
    } else {
      startArtwork();
    }

    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender, { passive: true });
    reducedMotion.addEventListener('change', requestRender);
  })();
</script>

<script>
  (function () {
    const process = document.querySelector('[data-tokens-process]');
    if (!process) return;

    const tablist = process.querySelector('[role="tablist"]');
    const desktop = window.matchMedia('(min-width: 64rem)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tabs = Array.from(process.querySelectorAll('[data-process-tab]'));
    const panels = Array.from(process.querySelectorAll('[data-process-panel]'));

    function activateTab(tab, moveFocus) {
      const step = tab.dataset.processTab;

      tabs.forEach(function (item) {
        const isActive = item === tab;
        item.setAttribute('aria-selected', String(isActive));
        item.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach(function (panel) {
        panel.hidden = panel.dataset.processPanel !== step;
      });

      if (moveFocus) tab.focus({ preventScroll: !desktop.matches });

      if (!desktop.matches) {
        const tabBounds = tab.getBoundingClientRect();
        const listBounds = tablist.getBoundingClientRect();
        tablist.scrollTo({
          left: tablist.scrollLeft + tabBounds.left - listBounds.left
            - (tablist.clientWidth - tabBounds.width) / 2,
          behavior: reducedMotion.matches ? 'instant' : 'smooth'
        });
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        activateTab(tab, false);
      });

      tab.addEventListener('keydown', function (event) {
        let nextIndex;

        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(tabs[nextIndex], true);
      });
    });
  })();
</script>
