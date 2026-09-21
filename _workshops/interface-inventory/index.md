---
layout: workshop
title: "Creare un Interface Inventory"
summary: "Impara a creare un inventario degli elementi di un prodotto digitale per progettare un Design System."
lang: it
og-image: workshops/interface-inventory/interface-inventory-og.png
permalink: /workshops/interface-inventory/
workshop_nav:
  - label: "Dettagli"
    url: "#details"
  - label: "Cosa impari"
    url: "#learn"
  - label: "Testimonianze"
    url: "#testimonials"
  - label: "FAQ"
    url: "#faq"
offer:
  price: "€99"
  price_full: "€199"
  url: "https://book.stripe.com/8x2cN41yX23MfUm1MDcs803?prefilled_promo_code=EARLYMAG26"
  cta: "Riserva il tuo posto"
  plausible_event: "Buy+Workshop"
  sessions:
    - "8 ottobre 2026"
    - "5 novembre 2026"
    - "3 dicembre 2026"
  session_time: "09:30–13:30"
  deadline: "2026-09-30T23:59:59"
  note: 'Prezzo Early Bird valido fino al <strong class="font-medium">30 settembre 2026</strong>. Solo <strong class="font-medium">3 posti rimasti</strong>.'
---

<style>
  .interface-inventory-page {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    overflow: clip;
  }

  .interface-inventory-page::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      hsl(var(--background) / 0.78) 12%,
      hsl(var(--background) / 0.96) 25%,
      hsl(var(--background) / 0.96) 75%,
      hsl(var(--background) / 0.78) 88%,
      transparent 100%
    );
  }

  .interface-inventory-page > section {
    position: relative;
    z-index: 2;
  }

  .inventory-artboard {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .inventory-art {
    position: absolute;
    z-index: var(--layer, 1);
    width: var(--art-width);
    height: auto;
    opacity: 0;
    filter: drop-shadow(0 18px 22px rgb(24 48 72 / 0.1));
    transform: translate3d(
      0,
      calc(var(--entry-y, 96px) + var(--parallax-y, 0px)),
      0
    ) scale(0.985);
    transition:
      opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
      transform 1000ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
    will-change: transform;
  }

  .interface-inventory-page.is-art-ready .inventory-art {
    --entry-y: 0px;
    opacity: var(--art-opacity, 0.92);
    transform: translate3d(0, var(--parallax-y, 0px), 0) scale(1);
  }

  .interface-inventory-page.is-parallax-ready .inventory-art {
    transition: opacity 200ms linear;
  }

  .inventory-art[data-art="phone"] {
    --art-width: clamp(180px, 18vw, 270px);
    --art-opacity: 0.96;
    top: 7rem;
    left: clamp(-8rem, -6vw, -4rem);
  }

  .inventory-art[data-art="wireframes"] {
    --art-width: clamp(280px, 28vw, 420px);
    --art-opacity: 0.94;
    top: 1.5rem;
    right: clamp(-9rem, -6vw, -4rem);
  }

  .inventory-art[data-art="note-one"] {
    --art-width: clamp(92px, 9vw, 132px);
    --layer: 3;
    top: 4rem;
    right: clamp(2rem, 12vw, 12rem);
  }

  .inventory-art[data-art="note-two"] {
    --art-width: clamp(86px, 8vw, 124px);
    --layer: 4;
    top: 10.5rem;
    right: clamp(-1rem, 5vw, 5rem);
  }

  .inventory-art[data-art="note-three"] {
    --art-width: clamp(88px, 8.5vw, 128px);
    --layer: 2;
    top: 14rem;
    right: clamp(6rem, 15vw, 15rem);
  }

  .inventory-art[data-art="checklist"] {
    --art-width: clamp(190px, 21vw, 285px);
    --art-opacity: 0.9;
    top: 51rem;
    left: clamp(-7rem, -4vw, -2rem);
  }

  .inventory-art[data-art="media-card"] {
    --art-width: clamp(230px, 25vw, 350px);
    --layer: 2;
    top: 61rem;
    left: clamp(-2rem, 5vw, 5rem);
  }

  .inventory-art[data-art="tablet"] {
    --art-width: clamp(330px, 38vw, 540px);
    --art-opacity: 0.94;
    top: 101rem;
    right: clamp(-14rem, -10vw, -7rem);
  }

  .inventory-art[data-art="profile-strip"] {
    --art-width: clamp(250px, 28vw, 400px);
    --layer: 2;
    top: 119rem;
    right: clamp(-1rem, 5vw, 6rem);
  }

  @media (max-width: 1023px) {
    .interface-inventory-page::before {
      background: linear-gradient(
        90deg,
        transparent,
        hsl(var(--background) / 0.9) 10%,
        hsl(var(--background) / 0.98) 24%,
        hsl(var(--background) / 0.98) 76%,
        hsl(var(--background) / 0.9) 90%,
        transparent
      );
    }

    .inventory-art[data-art="phone"] {
      left: -8rem;
    }

    .inventory-art[data-art="wireframes"] {
      right: -10rem;
    }

    .inventory-art[data-art="checklist"] {
      left: -8rem;
    }

    .inventory-art[data-art="media-card"] {
      left: -5rem;
    }

    .inventory-art[data-art="tablet"] {
      right: -15rem;
    }
  }

  @media (max-width: 639px) {
    .interface-inventory-page::before {
      background: linear-gradient(
        90deg,
        hsl(var(--background) / 0.38),
        hsl(var(--background) / 0.92) 20%,
        hsl(var(--background) / 0.96) 50%,
        hsl(var(--background) / 0.92) 80%,
        hsl(var(--background) / 0.38)
      );
    }

    .inventory-art,
    .inventory-art[data-art] {
      --art-opacity: 0.42;
      filter: none;
    }

    .inventory-art[data-art="phone"] {
      --art-width: 190px;
      top: 14rem;
      left: -8.5rem;
    }

    .inventory-art[data-art="wireframes"] {
      --art-width: 245px;
      top: 1rem;
      right: -10rem;
    }

    .inventory-art[data-art="note-one"] {
      top: 5rem;
      right: 1rem;
    }

    .inventory-art[data-art="note-two"] {
      top: 10rem;
      right: -2.5rem;
    }

    .inventory-art[data-art="note-three"] {
      top: 15rem;
      right: 2rem;
    }

    .inventory-art[data-art="checklist"] {
      top: 64rem;
      left: -8rem;
    }

    .inventory-art[data-art="media-card"] {
      top: 74rem;
      left: -6rem;
    }

    .inventory-art[data-art="tablet"] {
      top: 123rem;
      right: -17rem;
    }

    .inventory-art[data-art="profile-strip"] {
      top: 142rem;
      right: -8rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .inventory-art,
    .interface-inventory-page.is-art-ready .inventory-art {
      --entry-y: 0px;
      --parallax-y: 0px;
      opacity: var(--art-opacity, 0.92);
      transform: none;
      transition: none;
    }
  }
</style>

<div class="interface-inventory-page" data-interface-inventory-page>
  <div class="inventory-artboard" aria-hidden="true">
    <img class="inventory-art" data-art="phone" data-parallax-speed="0.035" style="--delay: 0ms" src="/img/workshops/interface-inventory/phone-left.svg" alt="" width="254" height="371" decoding="async">
    <img class="inventory-art" data-art="wireframes" data-parallax-speed="0.075" style="--delay: 90ms" src="/img/workshops/interface-inventory/paper-wireframes-upper-right.svg" alt="" width="345" height="272" decoding="async">
    <img class="inventory-art" data-art="note-one" data-parallax-speed="0.11" style="--delay: 180ms" src="/img/workshops/interface-inventory/sticky-note-yellow-top.svg" alt="" width="122" height="116" decoding="async">
    <img class="inventory-art" data-art="note-two" data-parallax-speed="0.085" style="--delay: 260ms" src="/img/workshops/interface-inventory/sticky-note-yellow-top-1.svg" alt="" width="118" height="111" decoding="async">
    <img class="inventory-art" data-art="note-three" data-parallax-speed="0.125" style="--delay: 340ms" src="/img/workshops/interface-inventory/sticky-note-yellow-top-2.svg" alt="" width="124" height="119" decoding="async">
    <img class="inventory-art" data-art="checklist" data-parallax-speed="0.045" style="--delay: 420ms" src="/img/workshops/interface-inventory/checklist-paper-bottom-left.svg" alt="" width="240" height="206" decoding="async">
    <img class="inventory-art" data-art="media-card" data-parallax-speed="0.085" style="--delay: 500ms" src="/img/workshops/interface-inventory/blue-media-card-bottom-left.svg" alt="" width="265" height="141" decoding="async">
    <img class="inventory-art" data-art="tablet" data-parallax-speed="0.04" style="--delay: 580ms" src="/img/workshops/interface-inventory/tablet-bottom-right.svg" alt="" width="477" height="364" decoding="async">
    <img class="inventory-art" data-art="profile-strip" data-parallax-speed="0.095" style="--delay: 660ms" src="/img/workshops/interface-inventory/profile-strip-bottom.svg" alt="" width="393" height="215" decoding="async">
  </div>

<!-- Hero Section -->
<section class="hero px-6 lg:px-10 pt-12 lg:pt-20 pb-12 lg:pb-16">
  <div class="mx-auto max-w-7xl">
    <div class="grid gap-12 lg:grid-cols-3 lg:gap-12 xl:gap-16">
      <div class="flex flex-col items-start lg:col-span-2 lg:pr-8 xl:pr-16">
        <span class="mb-6 inline-flex items-center border border-border px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">Workshop Online</span>
        <h1 class="max-w-xl font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Dal caos all'ordine ー creare un interface inventory</h1>
        <p class="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">Un workshop pratico per imparare a mettere in ordine le interfacce di un prodotto digitale, gettando le basi di un Design System.</p>

        <div class="mt-10 grid w-full grid-cols-1 border-t border-border sm:grid-cols-2">
      <div class="flex items-center gap-3 border-b border-border py-4 sm:pr-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
          <circle cx="12" cy="10" r="8" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 22h10" />
          <path d="M12 22v-4" />
        </svg>
        <h3 class="text-sm font-medium text-muted-foreground">100% remoto</h3>
      </div>
      <div class="flex items-center gap-3 border-b border-border py-4 sm:pl-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
          <rect width="18" height="7" x="3" y="3" rx="1" />
          <rect width="9" height="7" x="3" y="14" rx="1" />
          <rect width="5" height="7" x="16" y="14" rx="1" />
        </svg>
        <h3 class="text-sm font-medium text-muted-foreground">Casi studio reali</h3>
      </div>
      <div class="flex items-center gap-3 border-b border-border py-4 sm:pr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
        <h3 class="text-sm font-medium text-muted-foreground">Solo 6 partecipanti</h3>
      </div>
      <div class="flex items-center gap-3 border-b border-border py-4 sm:pl-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
          <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
          <path d="m18 15 4-4" />
          <path
            d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
        </svg>
        <h3 class="text-sm font-medium text-muted-foreground">Strumenti pratici</h3>
        </div>
      </div>
      </div>

      <div>
        {% include payment-link.html note=true %}
      </div>
    </div>

    <!-- <img class="relative left-1/2 mt-16 h-72 w-screen max-w-none -translate-x-1/2 object-cover md:h-96 lg:mt-24" src="/img/workshops/interface-inventory/interface-inventory.webp"
      alt="Interface inventory workshop banner" title="Interface inventory workshop" width="2784" height="520" decoding="async" fetchpriority="high"> -->
  </div>
</section>

<!-- Program Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="details">
  <div class="mx-auto max-w-5xl">
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-8">Il programma completo</h2>
    <div class="flex flex-col gap-0.5 mb-12">
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors" open>
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">01</span> Fondamenti teorici</h4>
            <h3 class="font-heading text-lg font-medium">Introduzione all'Interface Inventory</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <p class="text-base text-muted-foreground leading-relaxed">Scopri come un Interface Inventory può trasformare il tuo workflow e migliorare la qualità del tuo design.
          </p>
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Cos'è</strong> un Interface Inventory e perché è fondamentale</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Come un Interface Inventory può <strong class="font-medium text-foreground">migliorare la collaborazione</strong> tra designer e developer
            </li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Come <strong class="font-medium text-foreground">integrare</strong> l'Interface Inventory nel tuo <strong class="font-medium text-foreground">workflow quotidiano</strong></li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">02</span> Analisi Pratica</h4>
            <h3 class="font-heading text-lg font-medium">Analisi di un prodotto reale</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <p class="text-base text-muted-foreground leading-relaxed">Mettiamo in pratica subito le teorie apprese analizzando un prodotto digitale reale.</p>
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Analizziamo l'interfaccia di un prodotto digitale conosciuto</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Raccogliamo e organizziamo gli elementi: pulsanti, form, menu, card e ogni componente presente</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Annotiamo incongruenze</strong> o similitudini</li>
          </ul>
        </div>
      </details>

      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">03</span> Organizzazione e Struttura</h4>
            <h3 class="font-heading text-lg font-medium">Creare un database dei componenti</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <p class="text-base text-muted-foreground leading-relaxed">Impara a strutturare e categorizzare gli elementi raccolti per creare un database di componenti
            riutilizzabili.</p>
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Come categorizzare gli elementi raccolti</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Creazione di un database di componenti riutilizzabili</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Standardizzazione e naming convention per una facile consultazione</li>
          </ul>
        </div>
      </details>

      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">04</span> Evoluzione</h4>
            <h3 class="font-heading text-lg font-medium">Verso un Design System</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <p class="text-base text-muted-foreground leading-relaxed">Scopri come l'Interface Inventory è il primo passo verso un Design System completo e come mantenerlo
            aggiornato.</p>
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Come l'Interface Inventory è il primo passo verso un Design System completo</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Strategie per mantenere aggiornato l'Interface Inventory</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Risorse e strumenti per continuare a migliorare il tuo Design System</li>
          </ul>
        </div>
      </details>
    </div>

    <div class="mb-12">
      <div class="hairline mb-8"></div>
      <h4 class="font-heading text-xl font-semibold mb-6">Incluso nel workshop:</h4>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 m-0 p-0 list-none">
        <li class="flex items-center text-base font-medium">
          📚 &nbsp;Materiale didattico completo
        </li>
        <li class="flex items-center text-base font-medium">
          📺 &nbsp;Registrazione del workshop
        </li>
        <li class="flex items-center text-base font-medium">
          📑 &nbsp;Template per creare il tuo Interface Inventory
        </li>
        <li class="flex items-center text-base font-medium">
          🗃️ &nbsp;Template database componenti
        </li>
        <li class="flex items-center text-base font-medium">
          🎤 &nbsp;Sessione Q&A dedicata
        </li>
        <li class="flex items-center text-base font-medium">
          🏅 &nbsp;Certificato di partecipazione
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 bg-card-foreground px-6 lg:px-10 py-12 lg:py-20" id="learn">
  <div class="mx-auto max-w-5xl">
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight text-center mb-12">Alla fine del workshop saprai...</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-2">Analizzare lo stato dell’arte di un prodotto digitale</h3>
          <p class="text-base text-muted-foreground leading-relaxed">Imparerai a raccogliere e catalogare in modo sistematico tutti gli elementi di un’interfaccia esistente.</p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-2">Organizzare i componenti in categorie utili</h3>
          <p class="text-base text-muted-foreground leading-relaxed">Costruirai un inventario strutturato, suddividendo gli elementi per tipologia e importanza, così da facilitare il riuso.</p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-2">Definire priorità e interventi chiave</h3>
          <p class="text-base text-muted-foreground leading-relaxed">Saprai identificare incoerenze, duplicati e opportunità di standardizzazione per migliorare la collaborazione tra team.</p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-3">Allineare il team e ottimizzare i processi</h3>
          <p class="text-base text-muted-foreground leading-relaxed">Designer, developer e PM parleranno finalmente la stessa lingua, grazie a una base condivisa e visibile del sistema esistente.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Instructor Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="teacher">
  <div class="mx-auto max-w-5xl">
    <div class="text-center">
      <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Chi sono</span>
      <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-8">Aiuto le persone a progettare esperienze digitali efficaci</h2>
      <img class="mx-auto mb-8 w-32 h-32 object-cover grayscale" src="/img/francesco-improta-profile.webp" alt="Francesco Improta - Design Token Expert and Course Instructor" width="400" height="400" loading="lazy" decoding="async">
    </div>
    <div class="flex flex-col gap-4 max-w-3xl">
      <p class="text-lg font-medium leading-relaxed">👋 Ciao, sono <strong class="font-semibold">Francesco Improta</strong>, designer con oltre 20 anni di esperienza nel design di prodotti digitali, specializzato in Design System.</p>
      <p class="text-base text-muted-foreground leading-relaxed">Ho creato questo workshop per <strong class="font-medium text-foreground">aiutare designer e developer a organizzare le interfacce in modo efficace</strong>, riducendo i tempi di sviluppo e migliorando la qualità del prodotto.</p>
      <p class="text-base text-muted-foreground leading-relaxed">Durante il workshop, <strong class="font-medium text-foreground">condividerò le mie esperienze pratiche e gli strumenti</strong> che ho utilizzato in anni di lavoro su progetti complessi.</p>
      <p>
        <a href="/about" class="text-sm underline underline-offset-2 hover:opacity-70 transition-opacity">Qualcosa su di me →</a>
      </p>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 bg-secondary/40 px-6 lg:px-10 py-12 lg:py-16" id="testimonials">
  <div class="mx-auto max-w-5xl text-center">
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Testimonials</span>
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-12">Cosa dicono i partecipanti</h2>
    <script src="https://widget.senja.io/widget/55431434-5c93-481f-a84f-4a9695afe5d1/platform.js" type="text/javascript"
      async></script>
    <div class="senja-embed" data-id="55431434-5c93-481f-a84f-4a9695afe5d1" data-mode="shadow" data-lazyload="false"
      style="display: block; width: 100%;"></div>
  </div>
</section>

<!-- FAQ Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="faq">
  <div class="mx-auto max-w-5xl">
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Domande Frequenti</span>
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-3">Questo corso è per me?</h2>
    <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">Hai dubbi se questo workshop fa per te? Ecco le risposte alle domande più comuni.</p>
    <div class="flex flex-col mt-8">
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Come funziona il workshop?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Il workshop si svolge online via Google Meet, con sessioni pratiche e teoria. Riceverai un link per accedere una settimana prima della data prevista.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Devo avere esperienza con i Design System?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, il workshop parte dalle basi. Ti fornirò io un prodotto digitale da analizzare e gli strumenti per farlo.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Posso partecipare anche se non sono un designer?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Assolutamente sì! Il workshop è utile per designer e developer che vogliono migliorare la collaborazione.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Cosa succede se acquisto il corso ma non posso partecipare?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Nessun problema, il tuo acquisto sarà valido per una delle date successive, a meno che non ci ripensi. In quel caso ti sarà inviato un rimborso.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Cosa succede se non sono soddisfatto?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Puoi ottenere un rimborso entro 30 giorni dalla data di acquisto.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Ho bisogno di strumenti specifici?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, basta un computer e una connessione internet. Ti fornirò tutto il materiale necessario.</div>
      </details>
      <details class="group py-6 hairline">
        <summary class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">È possibile organizzare un workshop per più di 6 persone?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Per workshop aziendali personalizzati puoi contattarmi a me[at]francescoimprota.com.</div>
      </details>
    </div>
  </div>
</section>

<!-- Final CTA Section -->
<section class="bg-card-foreground px-6 lg:px-10 py-16 lg:py-20">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-2">Pronto a fare il salto di qualità?</h2>
    <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
      Impara ad organizzare un'interfaccia digitale in modo efficace!
    </p>
    <div class="mb-8">
      {% include payment-link.html bg="bg-background" note=true %}
    </div>
    <div class="hairline mb-8"></div>
    <p class="mb-2 text-sm text-muted-foreground">Hai dubbi o altre domande?</p>
    <p>
      <a href="https://cal.com/francesco-improta/30min" class="inline-flex items-center justify-center gap-2 text-sm underline underline-offset-2 hover:opacity-70 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>Parliamone insieme</a>
    </p>
  </div>
</section>
</div>

<script>
  (function () {
    const page = document.querySelector('[data-interface-inventory-page]');
    if (!page) return;

    const artwork = Array.from(page.querySelectorAll('[data-parallax-speed]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameRequested = false;
    let introTimer;

    function renderParallax() {
      frameRequested = false;
      if (reducedMotion.matches) {
        artwork.forEach(function (item) {
          item.style.setProperty('--parallax-y', '0px');
        });
        return;
      }

      const pageTop = page.getBoundingClientRect().top + window.scrollY;
      const localScroll = Math.max(0, window.scrollY - pageTop);

      artwork.forEach(function (item) {
        const speed = Number(item.dataset.parallaxSpeed) || 0;
        const distance = Math.min(localScroll * speed, 420);
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

      window.clearTimeout(introTimer);
      introTimer = window.setTimeout(function () {
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
