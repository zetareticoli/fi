---
layout: workshop
title: "Interface Inventory Workshop"
summary: "Impara a creare un inventario di elementi e componenti dell'interfaccia di un prodotto digitale. Passa dal caos all'ordine con un metodo pratico e facile da implementare."
lang: it
og-image: workshops/interface-inventory/interface-inventory-og.png
permalink: /workshops/interface-inventory/
workshop_nav:
  - label: "Risultati"
    url: "#learn"
  - label: "Metodo"
    url: "#process"
  - label: "Programma"
    url: "#details"
  - label: "FAQ"
    url: "#faq"
offer:
  price: "€99"
  price_full: "€199"
  url: "https://book.stripe.com/8x2cN41yX23MfUm1MDcs803?prefilled_promo_code=EARLYMAG26"
  cta: "Riserva il tuo posto"
  plausible_event: "Buy+Workshop"
  sessions:
    - "martedì, 21 ottobre 2026"
    - "martedì, 4 novembre 2026"
    - "mercoledì, 2 dicembre 2026"
  session_time: "09:30–13:30"
  deadline: "2026-10-02T23:59:59"
  note: 'Prezzo Early Bird valido fino al <strong class="font-medium">02 ottobre 2026</strong>.'
  checkout_note: "Sceglierai la data durante il checkout sicuro con Stripe."
---

<style>
  .interface-inventory-page {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    overflow: clip;
    --inventory-video-overlap: 4.5rem;
  }

  .interface-inventory-page::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    /* background: linear-gradient(
      90deg,
      transparent 0%,
      hsl(var(--background) / 0.78) 12%,
      hsl(var(--background) / 0.96) 25%,
      hsl(var(--background) / 0.96) 75%,
      hsl(var(--background) / 0.78) 88%,
      transparent 100%
    ); */
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
    /* --art-opacity: 0.96; */
    top: 7rem;
    right: clamp(-8rem, -6vw, -4rem);
  }

  .inventory-art[data-art="wireframes"] {
    --art-width: clamp(180px, 18vw, 270px);
    --art-opacity: 1;
    top: 20rem;
    right: clamp(8rem, 10vw, 12rem);
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
    --art-opacity: 1;
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
    --art-opacity: 1;
    top: 40rem;
    right: clamp(7rem, 10vw, 12rem);
  }

  .inventory-art[data-art="media-card"] {
    --art-width: clamp(230px, 25vw, 350px);
    --layer: 2;
    --art-opacity: 1;
    top: 45rem;
    right: clamp(-5rem, -5vw, -10rem);
  }

  .inventory-art[data-art="tablet"] {
    --art-width: clamp(330px, 38vw, 540px);
    --art-opacity: 0.9;
    top: 80rem;
    left: clamp(-5rem, -5vw, -10rem);
  }

  .inventory-art[data-art="profile-strip"] {
    --art-width: clamp(250px, 28vw, 400px);
    --layer: 2;
    top: 119rem;
    right: clamp(-1rem, 5vw, 6rem);
  }

  @media (max-width: 1023px) {
    /* .interface-inventory-page::before {
      background: linear-gradient(
        90deg,
        transparent,
        hsl(var(--background) / 0.9) 10%,
        hsl(var(--background) / 0.98) 24%,
        hsl(var(--background) / 0.98) 76%,
        hsl(var(--background) / 0.9) 90%,
        transparent
      );
    } */

    .inventory-art[data-art="phone"] {
      right: -3rem;
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
      right: -12rem;
      top: 105rem;
    }
  }

  @media (max-width: 639px) {
    /* .interface-inventory-page::before {
      background: linear-gradient(
        90deg,
        hsl(var(--background) / 0.38),
        hsl(var(--background) / 0.92) 20%,
        hsl(var(--background) / 0.96) 50%,
        hsl(var(--background) / 0.92) 80%,
        hsl(var(--background) / 0.38)
      );
    } */

    .inventory-art {
      filter: none;
    }

    .inventory-art[data-art="note-one"] {
      --art-width: 72px;
      --art-opacity: 1;
      top: 10.5rem;
      right: -1.15rem;
      left: auto;
    }

    .inventory-art[data-art="phone"] {
      --art-width: 156px;
      --art-opacity: 0.92;
      top: 10rem;
      right: -7.25rem;
      left: auto;
    }

    .inventory-art[data-art="note-two"] {
      --art-width: 68px;
      --art-opacity: 1;
      top: 24rem;
      right: -2.15rem;
      left: auto;
    }

    .inventory-art[data-art="note-three"] {
      --art-width: 70px;
      --art-opacity: 1;
      top: 28.75rem;
      right: -0.35rem;
      left: auto;
    }

    .inventory-art[data-art="wireframes"] {
      --art-width: 168px;
      --art-opacity: 1;
      top: 40rem;
      right: -5rem;
      left: auto;
    }

    .inventory-art[data-art="checklist"] {
      --art-width: 148px;
      --art-opacity: 1;
      top: 50rem;
      right: -6rem;
      left: auto;
    }

    .inventory-art[data-art="media-card"] {
      --art-width: 188px;
      --art-opacity: 0;
      top: 56rem;
      right: -7.75rem;
      left: auto;
    }

    .inventory-art[data-art="tablet"] {
      --art-width: 210px;
      --art-opacity: 0.9;
      top: 130rem;
      left: -8.5rem;
      right: auto;
    }

    .inventory-art[data-art="profile-strip"] {
      --art-width: 200px;
      --art-opacity: 0.92;
      top: 202rem;
      right: -6.25rem;
      left: auto;
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

  .benefit-band + .benefit-band {
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 0.5px solid hsl(var(--border));
  }

  .benefit-band-visual {
    width: 100%;
  }

  .benefit-band-visual img {
    width: min(100%, 22rem);
    height: auto;
    filter: drop-shadow(0 18px 22px rgb(24 48 72 / 0.12));
  }

  @media (min-width: 768px) {
    .benefit-band + .benefit-band {
      margin-top: 4rem;
      padding-top: 4rem;
    }

    .benefit-band-visual img {
      width: min(100%, 26rem);
    }
  }

  .interface-inventory-page > section.inventory-what {
    z-index: 3;
  }

  .inventory-what-media {
    margin-bottom: calc(var(--inventory-video-overlap) * -1);
  }

  .inventory-what-media video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    max-height: 28rem;
    object-fit: cover;
    background: hsl(var(--secondary));
    filter: drop-shadow(0 18px 22px rgb(24 48 72 / 0.12));
  }

  .inventory-what-next {
    padding-top: calc(3rem + var(--inventory-video-overlap) + 1.5rem);
  }

  @media (min-width: 1024px) {
    .interface-inventory-page {
      --inventory-video-overlap: 7.5rem;
    }

    .inventory-what-media video {
      max-height: 36rem;
    }

    .inventory-what-next {
      padding-top: calc(4rem + var(--inventory-video-overlap) + 2rem);
    }
  }

  @media (max-width: 639px) {
    .interface-inventory-page {
      --inventory-video-overlap: 3.5rem;
    }
  }

  .inventory-process-desktop {
    display: none;
  }

  .inventory-process-mobile {
    margin-right: -1.5rem;
  }

  .inventory-process-rail {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(17rem, 84vw);
    gap: 1rem;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    padding: 0 1.5rem 1rem 0;
    scroll-padding-inline: 0 1.5rem;
    scroll-snap-type: inline mandatory;
    scrollbar-width: none;
  }

  .inventory-process-rail::-webkit-scrollbar {
    display: none;
  }

  .inventory-process-card {
    overflow: hidden;
    border: 1px solid hsl(var(--border));
    background: hsl(var(--secondary) / 0.5);
    scroll-snap-align: start;
  }

  .inventory-process-media {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    background: hsl(var(--secondary));
  }

  .inventory-process-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .inventory-process-media[data-step-media="1"] img {
    object-position: left center;
  }

  .inventory-process-media[data-step-media="2"] img {
    object-position: center center;
  }

  .inventory-process-media[data-step-media="3"] img {
    object-position: right center;
  }

  .inventory-process-tab {
    width: 100%;
    border: 1px solid transparent;
    padding: 1.25rem;
    color: hsl(var(--muted-foreground));
    text-align: left;
    transition:
      color 180ms ease,
      border-color 180ms ease,
      background-color 180ms ease;
  }

  .inventory-process-tab:hover {
    color: hsl(var(--foreground));
  }

  .inventory-process-tab[aria-selected="true"] {
    border-color: hsl(var(--border));
    background: hsl(var(--secondary) / 0.72);
    color: hsl(var(--foreground));
  }

  .inventory-process-tab:focus-visible {
    outline: 2px solid hsl(var(--accent));
    outline-offset: 2px;
  }

  @media (min-width: 1024px) {
    .inventory-process-mobile {
      display: none;
    }

    .inventory-process-desktop {
      display: grid;
      grid-template-columns: minmax(18rem, 0.8fr) minmax(0, 1.2fr);
      align-items: stretch;
      gap: 3rem;
    }

    .inventory-process-tablist {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
    }

    .inventory-process-panel,
    .inventory-process-panel .inventory-process-media {
      height: 100%;
      min-height: 31rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .inventory-process-tab {
      transition: none;
    }
  }

  .workshop-offer-wide {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    .workshop-offer-wide {
      grid-template-columns: minmax(11rem, 0.65fr) minmax(20rem, 1.25fr) minmax(16rem, 0.8fr);
      align-items: center;
      gap: 2.5rem;
    }

    .workshop-offer-wide .workshop-offer-price {
      border-right: 1px solid hsl(var(--border));
      border-bottom: 0;
      padding: 1rem 2.5rem 1rem 0;
    }

    .workshop-offer-wide .workshop-offer-action {
      margin-top: 0;
    }
  }

  .program-plus-vert {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 180ms ease;
  }

  details[open] .program-plus-vert {
    transform: scaleY(0);
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
    <div class="flex max-w-4xl flex-col items-start">
      <span class="mb-6 inline-flex items-center border border-border px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">Interface Inventory · Workshop online</span>
      <h1 class="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Metti ordine nelle tue interfacce partendo da ciò che esiste davvero</h1>
      <p class="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">In questo workshop impari a raccogliere, confrontare e organizzare tutti gli elementi visivi e funzionali che compongono un sito web o un'applicazione, definendo priorità concrete.</p>
      <p class="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
        <img class="h-24 w-24 md:h-28 md:w-28 shrink-0 object-cover grayscale rounded-4xl" src="/img/francesco-improta-profile.png" alt="Francesco Improta" width="300" height="300" decoding="async">
        <span>Con <strong class="font-medium text-foreground">Francesco Improta</strong>, designer esperto in Design Systems e Product Design.</span>
      </p>

      <div class="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
        <a href="#booking" class="inline-flex items-center justify-center bg-accent px-8 py-4 text-lg font-medium text-white hover:opacity-90 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">Vedi date e prenota</a>
        <a href="#details" class="inline-flex items-center justify-center px-2 py-3 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70">Scopri il programma →</a>
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
        <h3 class="mt-1 font-heading text-lg font-medium">Sessione live interattiva</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Quattro ore insieme da remoto, con spazio per domande, confronto e feedback diretto.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">02</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Approccio hands-on</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Analizziamo insieme un prodotto reale, non un caso costruito solo per la lezione.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">03</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Insights pratici</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Scopri come applicare questo metodo per ottenere risultati concreti.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">04</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Gruppo ristretto</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Massimo sei partecipanti per rendere il confronto utile e partecipato.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">05</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Accesso ai materiali</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Ricevi registrazione, materiale didattico e template per continuare in autonomia.</p>
      </article>
      <article class="border-t border-border pt-5">
        <span class="font-mono text-xs text-accent">06</span>
        <h3 class="mt-1 font-heading text-lg font-medium">Certificato di partecipazione</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Ricevi un certificato digitale di partecipazione da poter inserire nel tuo profilo LinkedIn.</p>
      </article>
    </div>
  </div>
</section>

<!-- Booking -->
<section class="scroll-mt-32 px-6 py-12 lg:scroll-mt-24 lg:px-10 lg:py-16" id="booking">
  <div class="mx-auto max-w-7xl">
    <div class="mb-8 text-center">
      <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Partecipa</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Riserva il tuo posto</h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">L’Early Bird è valido per tutte le sessioni. Sceglierai la data che preferisci nel checkout Stripe.</p>
    </div>
    {% include payment-link.html note=true wide=true %}
  </div>
</section>

<!-- What is an Interface Inventory -->
<section class="inventory-what px-6 lg:px-10 pt-12 lg:pt-16" id="what">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
      <div>
        <span class="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">Il metodo</span>
        <h2 class="max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Perché partire da un Interface Inventory</h2>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">Quando un prodotto cresce, componenti duplicati, varianti e decisioni non documentate rallentano designer e developer. Un Interface Inventory fotografa ciò che esiste davvero e crea una base condivisa per decidere cosa mantenere, consolidare o riprogettare.</p>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <h3 class="font-heading text-base font-medium">Vedere l’esistente</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Cataloga schermate e componenti, senza interpretazioni né wishful thinking.</p>
        </div>
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h3 class="font-heading text-base font-medium">Trovare le incoerenze</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Duplicati, varianti e pattern divergenti diventano evidenti in un colpo d’occhio.</p>
        </div>
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            <h3 class="font-heading text-base font-medium">Allineare il team</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">Designer, developer e PM lavorano sullo stesso quadro del prodotto reale.</p>
        </div>
        <div>
          <div class="mb-2 flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true">
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
            </svg>
            <h3 class="font-heading text-base font-medium">Partire dal sistema</h3>
          </div>
          <p class="text-sm leading-relaxed text-muted-foreground">È il primo passo concreto verso un design system, non un documento teorico.</p>
        </div>
      </div>
    </div>

    <figure class="inventory-what-media mt-12 lg:mt-16">
      <video loop muted playsinline preload="none" poster="/img/workshops/interface-inventory/interface-inventory.webp" width="1920" height="1080" aria-label="Anteprima delle classi precedenti del workshop Interface Inventory" data-autoplay-video>
        <source data-src="/img/workshops/interface-inventory/workshop-classes.mp4" type="video/mp4">
      </video>
    </figure>
  </div>
</section>

<!-- Audience Section -->
<section class="inventory-what-next scroll-mt-32 px-6 pb-12 lg:scroll-mt-24 lg:px-10 lg:pb-16" id="audience">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10 max-w-2xl">
      <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Destinatari</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Chi può partecipare?</h2>
    </div>
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h3 class="font-heading text-xl font-medium">Hai questo ruolo</h3>
        <ul class="mt-5 flex list-none flex-col gap-4 p-0 text-base leading-relaxed">
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span>Sei <strong>product, UX/UI o design system designer</strong> e vuoi partire dallo stato reale dell’interfaccia.</span></li>
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span>Ti occupi di  <strong>content e information architecture</strong> e vuoi capire come è strutturato il tuo prodotto.</span></li>
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span>Sei <strong>developer o design engineer</strong> e incontri componenti duplicati o poco coerenti.</span></li>
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span><strong>Coordini un team</strong> che deve definire priorità condivise prima di costruire o rivedere un Design System.</span></li>
        </ul>
      </div>
      <div>
        <h3 class="font-heading text-xl font-medium">Hai questi problemi</h3>
        <ul class="mt-5 flex list-none flex-col gap-4 p-0 text-base leading-relaxed">
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span>Design e codice raccontano <strong>versioni diverse</strong> dello stesso componente.</span></li>
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span><strong>Il team non sa</strong> quali varianti consolidare e quali mantenere.</span></li>
          <li class="flex gap-3"><span class="text-accent" aria-hidden="true">¬</span><span>Vuoi iniziare con un <strong>metodo pratico</strong>: non servono esperienza avanzata o strumenti specifici.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="scroll-mt-32 bg-card-foreground px-6 py-12 lg:scroll-mt-24 lg:px-10 lg:py-20" id="learn">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 max-w-2xl lg:mb-16">
      <span class="mb-3 block font-mono text-xs uppercase tracking-wide text-accent">Competenze</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cosa impari in questo workshop</h2>
    </div>
    <div class="flex flex-col">
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row lg:gap-16">
        <div class="flex w-full flex-1 flex-row gap-4">
          <div>
            <h3 class="font-heading text-xl font-medium mb-2">Definire lo scope dell’analisi</h3>
            <p class="text-base text-muted-foreground leading-relaxed">Scegliere pagine, sezioni e categorie di elementi da osservare senza disperdere tempo ed energie.</p>
          </div>
        </div>
        <div class="benefit-band-visual flex flex-1 justify-center">
          <img src="/img/workshops/interface-inventory/tablet-bottom-right.svg" alt="Tablet con schermate di un prodotto digitale da analizzare" width="477" height="364" loading="lazy" decoding="async">
        </div>
      </article>
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-16">
        <div class="flex w-full flex-1 flex-row gap-4">
          <div>
            <h3 class="font-heading text-xl font-medium mb-2">Costruire un inventario consultabile</h3>
            <p class="text-base text-muted-foreground leading-relaxed">Raccogliere elementi e varianti in categorie comprensibili, pronte per essere confrontate con il team.</p>
          </div>
        </div>
        <div class="benefit-band-visual flex flex-1 justify-center">
          <img src="/img/workshops/interface-inventory/checklist-paper-bottom-left.svg" alt="Lista di controllo per catalogare i componenti di interfaccia" width="240" height="206" loading="lazy" decoding="async">
        </div>
      </article>
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row lg:gap-16">
        <div class="flex w-full flex-1 flex-row gap-4">
          <div>
            <h3 class="font-heading text-xl font-medium mb-2">Individuare duplicati e incoerenze</h3>
            <p class="text-base text-muted-foreground leading-relaxed">Riconoscere pattern divergenti e opportunità di standardizzazione in modo sistematico.</p>
          </div>
        </div>
        <div class="benefit-band-visual flex flex-1 justify-center">
          <img src="/img/workshops/interface-inventory/paper-wireframes-upper-right.svg" alt="Wireframe annotati per individuare incoerenze e priorità" width="345" height="272" loading="lazy" decoding="async">
        </div>
      </article>
      <article class="benefit-band flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-16">
        <div class="flex w-full flex-1 flex-row gap-4">
          <div>
            <h3 class="font-heading text-xl font-medium mb-2">Definire priorità condivise</h3>
            <p class="text-base text-muted-foreground leading-relaxed">Trasformare l’inventario in decisioni documentate e in una base concreta per il Design System.</p>
          </div>
        </div>
        <div class="benefit-band-visual flex flex-1 justify-center">
          <img src="/img/workshops/interface-inventory/profile-strip-bottom.svg" alt="Scheda profilo che rappresenta l’allineamento del team" width="393" height="215" loading="lazy" decoding="async">
        </div>
      </article>
    </div>
  </div>
</section>

<!-- How the workshop works -->
<section class="scroll-mt-32 px-6 py-12 lg:scroll-mt-24 lg:px-10 lg:py-20" id="process" data-inventory-process>
  <div class="mx-auto max-w-7xl">
    <div class="mb-10 max-w-3xl lg:mb-14">
      <span class="mb-4 block font-mono text-xs uppercase tracking-wide text-accent">Il processo</span>
      <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cosa farai nel workshop</h2>
      <p class="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">Seguiamo un percorso in tre fasi: definiamo cosa osservare, raccogliamo le varianti e trasformiamo ciò che emerge in decisioni condivise.</p>
    </div>

    <div class="inventory-process-desktop">
      <div class="inventory-process-tablist" role="tablist" aria-label="Fasi del workshop">
        <button class="inventory-process-tab" type="button" role="tab" id="process-tab-1" aria-controls="process-panel-1" aria-selected="true" tabindex="0" data-process-tab="1">
          <span class="mb-2 block font-mono text-xs text-accent">01</span>
          <span class="block font-heading text-lg font-medium leading-snug">Scegli cosa analizzare</span>
          <span class="mt-2 block text-sm leading-relaxed">Pagine, sezioni, intero sito e quali categorie di elementi.</span>
        </button>
        <button class="inventory-process-tab" type="button" role="tab" id="process-tab-2" aria-controls="process-panel-2" aria-selected="false" tabindex="-1" data-process-tab="2">
          <span class="mb-2 block font-mono text-xs text-accent">02</span>
          <span class="block font-heading text-lg font-medium leading-snug">Screenshot di ogni singolo elemento e variante</span>
          <span class="mt-2 block text-sm leading-relaxed">Catturiamo gli elementi così come esistono nel prodotto, senza interpretarli o riprogettarli.</span>
        </button>
        <button class="inventory-process-tab" type="button" role="tab" id="process-tab-3" aria-controls="process-panel-3" aria-selected="false" tabindex="-1" data-process-tab="3">
          <span class="mb-2 block font-mono text-xs text-accent">03</span>
          <span class="block font-heading text-lg font-medium leading-snug">Raccolta dei risultati e decisioni</span>
          <span class="mt-2 block text-sm leading-relaxed">Raggruppiamo ciò che emerge e definiamo insieme priorità e prossimi interventi.</span>
        </button>
      </div>

      <div>
        <div class="inventory-process-panel" role="tabpanel" id="process-panel-1" aria-labelledby="process-tab-1" data-process-panel="1">
          <div class="inventory-process-media" data-step-media="1">
            <img src="/img/workshops/interface-inventory/interface-inventory.webp" alt="Esempio visivo della selezione delle pagine e degli elementi da analizzare" width="2590" height="1000" loading="lazy" decoding="async">
          </div>
        </div>
        <div class="inventory-process-panel" role="tabpanel" id="process-panel-2" aria-labelledby="process-tab-2" data-process-panel="2" hidden>
          <div class="inventory-process-media" data-step-media="2">
            <img src="/img/workshops/interface-inventory/interface-inventory.webp" alt="Esempio visivo della raccolta degli screenshot di elementi e varianti" width="2590" height="1000" loading="lazy" decoding="async">
          </div>
        </div>
        <div class="inventory-process-panel" role="tabpanel" id="process-panel-3" aria-labelledby="process-tab-3" data-process-panel="3" hidden>
          <div class="inventory-process-media" data-step-media="3">
            <img src="/img/workshops/interface-inventory/interface-inventory.webp" alt="Esempio visivo della raccolta dei risultati e delle decisioni" width="2590" height="1000" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </div>

    <div class="inventory-process-mobile">
      <div class="inventory-process-rail" aria-label="Fasi del workshop">
        <article class="inventory-process-card">
          <div class="inventory-process-media" data-step-media="1">
            <img src="/img/workshops/interface-inventory/interface-inventory.webp" alt="Esempio visivo della selezione delle pagine e degli elementi da analizzare" width="2590" height="1000" loading="lazy" decoding="async">
          </div>
          <div class="p-5">
            <span class="mb-2 block font-mono text-xs text-accent">01</span>
            <h3 class="font-heading text-lg font-medium leading-snug">Scegli cosa analizzare</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Pagine, sezioni, intero sito e quali categorie di elementi.</p>
          </div>
        </article>
        <article class="inventory-process-card">
          <div class="inventory-process-media" data-step-media="2">
            <img src="/img/workshops/interface-inventory/interface-inventory.webp" alt="Esempio visivo della raccolta degli screenshot di elementi e varianti" width="2590" height="1000" loading="lazy" decoding="async">
          </div>
          <div class="p-5">
            <span class="mb-2 block font-mono text-xs text-accent">02</span>
            <h3 class="font-heading text-lg font-medium leading-snug">Screenshot di ogni singolo elemento e variante</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Catturiamo gli elementi così come esistono nel prodotto, senza interpretarli o riprogettarli.</p>
          </div>
        </article>
        <article class="inventory-process-card">
          <div class="inventory-process-media" data-step-media="3">
            <img src="/img/workshops/interface-inventory/interface-inventory.webp" alt="Esempio visivo della raccolta dei risultati e delle decisioni" width="2590" height="1000" loading="lazy" decoding="async">
          </div>
          <div class="p-5">
            <span class="mb-2 block font-mono text-xs text-accent">03</span>
            <h3 class="font-heading text-lg font-medium leading-snug">Raccolta dei risultati e decisioni</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">Raggruppiamo ciò che emerge e definiamo insieme priorità e prossimi interventi.</p>
          </div>
        </article>
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
        <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Quattro ore di lavoro insieme</h2>
        <p class="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">Il workshop si svolge online su Google Meet, dalle <strong class="font-medium text-foreground">{{ page.offer.session_time }}</strong>. Alterniamo spiegazioni essenziali, analisi guidata, esercitazione e confronto finale.</p>
        <dl class="mt-8 grid grid-cols-1 gap-5 border-t border-border pt-6 sm:grid-cols-2">
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Formato</dt>
            <dd class="mt-2 text-base font-medium">Online, dal vivo</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Partecipanti</dt>
            <dd class="mt-2 text-base font-medium">Massimo 6 persone</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Accesso</dt>
            <dd class="mt-2 text-base font-medium">Link inviato prima del workshop</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wide text-muted-foreground">Dopo il live</dt>
            <dd class="mt-2 text-base font-medium">Registrazione e materiali</dd>
          </div>
        </dl>
      </div>
      <div>
        <h3 class="font-heading text-xl font-medium">Date disponibili</h3>
        <ul class="mt-5 flex list-none flex-col gap-3 p-0">
          {% for session in page.offer.sessions %}
          <li class="flex items-center gap-4 border border-border bg-background/70 p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-accent" aria-hidden="true"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
            <span class="text-base font-medium">{{ session }}</span>
          </li>
          {% endfor %}
        </ul>
        <p class="mt-5 text-sm leading-relaxed text-muted-foreground">Sceglierai la sessione che preferisci nel checkout sicuro Stripe.</p>
        <a href="#booking" class="mt-6 inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70">Vedi prezzo e prenota →</a>
      </div>
    </div>
  </div>
</section>

<!-- Program Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="details">
  <div class="mx-auto max-w-5xl">
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-8">Il programma completo</h2>
    <div class="flex flex-col gap-0.5 mb-6">
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">01</span> Fondamenti</h4>
            <h3 class="font-heading text-xl font-medium">A cosa serve e come funziona</h3>
          </div>
          <svg class="shrink-0 text-accent" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path class="program-plus-vert" d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="text-base mb-2">Argomenti:</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Le basi teoriche</strong>: un audit del design</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Come <strong class="font-medium text-foreground">collaborare con gli stakeholder</strong> alla creazione dell'inventory.
            </li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Come <strong class="font-medium text-foreground">integrare</strong> attività di audit nel <strong class="font-medium text-foreground">processo progettuale</strong>.</li>
          </ul>
        </div>
      </details>
      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">02</span> Hands-on</h4>
            <h3 class="font-heading text-xl font-medium">Analisi di un prodotto</h3>
          </div>
          <svg class="shrink-0 text-accent" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path class="program-plus-vert" d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="text-base mb-2">Argomenti:</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Analisi delle interfacce di un prodotto digitale reale</li>
            <li class="text-base"><span class="text-accent" aria-hidden="true">¬</span> Mappatura degli elementi raccolti e organizzazione in categorie</li>
            <li class="text-sm"><span class="text-accent" aria-hidden="true">¬</span> Come annotare le <strong class="font-medium text-foreground">incongruenze</strong> e similitudini</li>
          </ul>
        </div>
      </details>

      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">03</span> Organizzazione </h4>
            <h3 class="font-heading text-xl font-medium">Strutturare i risultati</h3>
          </div>
          <svg class="shrink-0 text-accent" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path class="program-plus-vert" d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-base"><span class="text-accent" aria-hidden="true">¬</span> Creare un database di componenti</li>
            <li class="text-sm text-base"><span class="text-accent" aria-hidden="true">¬</span> Dare un nome e una descrizione ai componenti</li>
            <li class="text-sm text-base"><span class="text-accent" aria-hidden="true">¬</span> Decidere il destino dei componenti: riuso, deprecato, sostituito o migliorato</li>
          </ul>
        </div>
      </details>

      <details class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <summary class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">04</span> Evoluzione</h4>
            <h3 class="font-heading text-xl font-medium">Verso un Design System</h3>
          </div>
          <svg class="shrink-0 text-accent" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path class="program-plus-vert" d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </summary>
        <div class="px-6 pb-6">
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-base"><span class="text-accent" aria-hidden="true">¬</span> Pianificare sessioni di audit periodici</li>
            <li class="text-sm text-base"><span class="text-accent" aria-hidden="true">¬</span> I nuovi fondamenti visivi del Design System</li>
            <li class="text-sm text-base"><span class="text-accent" aria-hidden="true">¬</span> Da un semplice inventory a un backlog di attività</li>
          </ul>
        </div>
      </details>
    </div>

    <div class="mb-12">
      <div class="hairline mb-8"></div>
      <h4 class="font-heading text-xl font-semibold mb-6">Materiali inclusi</h4>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 m-0 p-0 list-none">
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-big preview-icon text-accent mr-2"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>&nbsp;Materiale didattico completo
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video preview-icon text-accent mr-2"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg> &nbsp;Registrazione del workshop
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-dashed-kanban preview-icon text-accent mr-2"><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M9 3h1"/><path d="M14 3h1"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 9v1"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M14 21h1"/><path d="M9 21h1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M3 14v1"/><path d="M3 9v1"/></svg> &nbsp;Template per creare il tuo Interface Inventory
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database preview-icon text-accent mr-2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg> &nbsp;Template database componenti
        </li>
        <li class="flex items-center text-base font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award preview-icon text-accent mr-2"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg> &nbsp;Certificato di partecipazione
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
      <img class="mx-auto mb-8 w-32 h-32 object-cover grayscale rounded-4xl" src="/img/francesco-improta-profile.png" alt="Francesco Improta - Design Token Expert and Course Instructor" width="400" height="400" loading="lazy" decoding="async">
    </div>
    <div class="flex flex-col gap-4 max-w-3xl">
      <p class="text-lg font-medium leading-relaxed">👋 Ciao, sono <strong class="font-semibold">Francesco Improta</strong>, designer con oltre 20 anni di esperienza nel design di prodotti digitali, specializzato in Design System.</p>
      <p class="text-base text-muted-foreground leading-relaxed">Ho creato questo workshop per <strong class="font-medium text-foreground">aiutare designer e developer a organizzare le interfacce in modo efficace</strong>, riducendo i tempi di sviluppo e migliorando la qualità del prodotto.</p>
      <p class="text-base text-muted-foreground leading-relaxed">Durante il workshop, <strong class="font-medium text-foreground">condividerò le mie esperienze pratiche e gli strumenti</strong> che ho utilizzato in anni di lavoro su progetti complessi.</p>
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
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="faq">
  <div class="mx-auto max-w-5xl">
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Domande Frequenti</span>
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-3">Domande frequenti</h2>
    <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">Tutto quello che serve sapere prima di prenotare il workshop.</p>
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
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Quando scelgo la data?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Sceglierai una delle date disponibili direttamente nel checkout Stripe, prima di completare il pagamento.</div>
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
  <div class="mx-auto max-w-7xl text-center">
    <h2 class="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-3">Parti da ciò che esiste e trasforma il caos in decisioni condivise</h2>
    <p class="mx-auto max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">Riserva il tuo posto in una delle date disponibilis.</p>
    <div class="mb-8">
      {% include payment-link.html bg="bg-background" note=true wide=true %}
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

<script>
  (function () {
    const process = document.querySelector('[data-inventory-process]');
    if (!process) return;

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

      if (moveFocus) tab.focus();
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
