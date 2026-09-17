---
layout: workshop
title: "Workshop: Le basi di un Design System - Creare un Interface Inventory"
summary: "Un workshop pratico per designer e sviluppatori che vogliono organizzare le interfacce e ridurre drasticamente i tempi di sviluppo. Impara a creare un Interface Inventory efficace in 4 ore."
lang: it
og-image: workshops/interface-inventory/interface-inventory-og.png
permalink: /workshops/interface-inventory/
offer:
  price: "€99"
  price_full: "€199"
  url: "https://book.stripe.com/8x2cN41yX23MfUm1MDcs803?prefilled_promo_code=EARLYMAG26"
  cta: "Riserva il tuo posto"
  plausible_event: "Buy+Workshop"
  sessions:
    - "Giovedì 15 ottobre 2026, 09:00-13:00"
  deadline: "2026-09-15T09:00:00"
  note: 'Prezzo Early Bird valido fino al <strong class="font-medium text-foreground">15 settembre 2026</strong>. Solo <strong class="font-medium text-foreground">4 posti rimasti</strong>.'

# Layout e asset del corso

course_name: "Interface Inventory"
animation: inventory
hero_title: "Guarda oltre lo schermo."
hero_emphasis: "Scopri il sistema."
hero_subtitle: "Impara a riconoscere, scomporre e organizzare gli elementi di un’interfaccia. Il primo passo concreto verso un Design System."
animation_title: "Gli elementi di un’interfaccia si organizzano in un inventario"
animation_description: "Osserva il prodotto, estrai gli elementi e organizzali in categorie sul canvas."
phase_titles: ["Osserva", "Estrai", "Organizza"]
phase_ids: ["osserva", "estrai", "organizza"]
faq_collapsible: true
program_collapsible: true
companies: []
hero_background: /img/workshops/placeholders/hero-grid.svg
course_facts: ["100% remoto", "4 ore", "6 partecipanti", "Approccio pratico"]
benefit_visuals:
  - /img/workshops/placeholders/inventory-1.svg
  - /img/workshops/placeholders/inventory-2.svg
  - /img/workshops/placeholders/inventory-3.svg
  - /img/workshops/placeholders/inventory-4.svg
teacher_image: /img/francesco-improta-profile.webp
teacher_image_alt: "Francesco Improta, docente del workshop"
---

<!-- Benefits Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 bg-card-foreground px-6 lg:px-10 py-12 lg:py-20" id="learn">
  <div class="mx-auto max-w-5xl">
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight text-center mb-12">Cosa impari</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-2">Analizzare lo stato dell’arte di un prodotto digitale</h3>
<img class="benefit-visual" src="{{ page.benefit_visuals[0] | relative_url }}" alt="" width="640" height="360" loading="lazy">
          <p class="text-base text-muted-foreground leading-relaxed">Imparerai a raccogliere e catalogare in modo sistematico tutti gli elementi di un’interfaccia esistente.</p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-2">Organizzare i componenti in categorie utili</h3>
<img class="benefit-visual" src="{{ page.benefit_visuals[1] | relative_url }}" alt="" width="640" height="360" loading="lazy">
          <p class="text-base text-muted-foreground leading-relaxed">Costruirai un inventario strutturato, suddividendo gli elementi per tipologia e importanza, così da facilitare il riuso.</p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-2">Definire priorità e interventi chiave</h3>
<img class="benefit-visual" src="{{ page.benefit_visuals[2] | relative_url }}" alt="" width="640" height="360" loading="lazy">
          <p class="text-base text-muted-foreground leading-relaxed">Saprai identificare incoerenze, duplicati e opportunità di standardizzazione per migliorare la collaborazione tra team.</p>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <span class="font-heading text-xl font-semibold text-accent" aria-hidden="true">¬</span>
        <div>
          <h3 class="font-heading text-lg font-medium mb-3">Allineare il team e ottimizzare i processi</h3>
<img class="benefit-visual" src="{{ page.benefit_visuals[3] | relative_url }}" alt="" width="640" height="360" loading="lazy">
          <p class="text-base text-muted-foreground leading-relaxed">Designer, developer e PM parleranno finalmente la stessa lingua, grazie a una base condivisa e visibile del sistema esistente.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Program Section -->
{% if page.program_collapsible == false %}{% assign program_container = "div" %}{% assign program_heading = "div" %}{% else %}{% assign program_container = "details" %}{% assign program_heading = "summary" %}{% endif %}
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="details">
  <div class="mx-auto max-w-5xl">
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-8">Il programma completo</h2>
    <div class="flex flex-col gap-0.5 mb-12">
      <{{ program_container }} class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors" {% if page.program_collapsible != false %}open{% endif %}>
        <{{ program_heading }} class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">01</span> Fondamenti teorici</h4>
            <h3 class="font-heading text-lg font-medium">Introduzione all'Interface Inventory</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </{{ program_heading }}>
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
      </{{ program_container }}>
      <{{ program_container }} class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <{{ program_heading }} class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">02</span> Analisi Pratica</h4>
            <h3 class="font-heading text-lg font-medium">Analisi di un prodotto reale</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </{{ program_heading }}>
        <div class="px-6 pb-6">
          <p class="text-base text-muted-foreground leading-relaxed">Mettiamo in pratica subito le teorie apprese analizzando un prodotto digitale reale.</p>
          <ul class="flex flex-col gap-2 mt-4 m-0 p-0 list-none">
            <li class="meta-tag">Argomenti</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Analizziamo l'interfaccia di un prodotto digitale conosciuto</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> Raccogliamo e organizziamo gli elementi: pulsanti, form, menu, card e ogni componente presente</li>
            <li class="text-sm text-muted-foreground"><span class="text-accent" aria-hidden="true">¬</span> <strong class="font-medium text-foreground">Annotiamo incongruenze</strong> o similitudini</li>
          </ul>
        </div>
      </{{ program_container }}>

      <{{ program_container }} class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <{{ program_heading }} class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">03</span> Organizzazione e Struttura</h4>
            <h3 class="font-heading text-lg font-medium">Creare un database dei componenti</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </{{ program_heading }}>
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
      </{{ program_container }}>

      <{{ program_container }} class="group border-l-2 border-border open:border-l-accent bg-secondary/40 hover:bg-secondary/60 transition-colors">
        <{{ program_heading }} class="flex items-center justify-between gap-4 p-6 list-none cursor-pointer">
          <div>
            <h4 class="meta-tag mb-2"><span class="text-accent">04</span> Evoluzione</h4>
            <h3 class="font-heading text-lg font-medium">Verso un Design System</h3>
          </div>
          <svg class="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </{{ program_heading }}>
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
      </{{ program_container }}>
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

<!-- Instructor Section -->
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="teacher">
  <div class="mx-auto max-w-5xl">
    <div class="text-center">
      <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Chi sono</span>
      <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-8">Aiuto le persone a progettare esperienze digitali efficaci</h2>
      <img class="mx-auto mb-8 w-32 h-32 object-cover grayscale" src="{{ page.teacher_image | relative_url }}" alt="{{ page.teacher_image_alt | escape }}" width="400" height="400" loading="lazy" decoding="async">
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
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Testimonianze</span>
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-12">Cosa dicono i partecipanti</h2>
    <script src="https://widget.senja.io/widget/55431434-5c93-481f-a84f-4a9695afe5d1/platform.js" type="text/javascript"
      async></script>
    <div class="senja-embed" data-id="55431434-5c93-481f-a84f-4a9695afe5d1" data-mode="shadow" data-lazyload="false"
      style="display: block; width: 100%;"></div>
  </div>
</section>

<!-- FAQ Section -->
{% if page.faq_collapsible == false %}{% assign faq_container = "div" %}{% assign faq_heading = "div" %}{% else %}{% assign faq_container = "details" %}{% assign faq_heading = "summary" %}{% endif %}
<section class="scroll-mt-32 lg:scroll-mt-24 px-6 lg:px-10 py-12 lg:py-16" id="faq">
  <div class="mx-auto max-w-5xl">
    <span class="block mb-3 font-mono text-xs uppercase tracking-wide text-accent">Domande Frequenti</span>
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-3">Questo corso è per me?</h2>
    <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">Hai dubbi se questo workshop fa per te? Ecco le risposte alle domande più comuni.</p>
    <div class="flex flex-col mt-8">
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Come funziona il workshop?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Il workshop si svolge online via Google Meet, con sessioni pratiche e teoria. Riceverai un link per accedere una settimana prima della data prevista.</div>
      </{{ faq_container }}>
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Devo avere esperienza con i Design System?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, il workshop parte dalle basi. Ti fornirò io un prodotto digitale da analizzare e gli strumenti per farlo.</div>
      </{{ faq_container }}>
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Posso partecipare anche se non sono un designer?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Assolutamente sì! Il workshop è utile per designer e developer che vogliono migliorare la collaborazione.</div>
      </{{ faq_container }}>
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Cosa succede se acquisto il corso ma non posso partecipare?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Nessun problema, il tuo acquisto sarà valido per una delle date successive, a meno che non ci ripensi. In quel caso ti sarà inviato un rimborso.</div>
      </{{ faq_container }}>
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Cosa succede se non sono soddisfatto?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Puoi ottenere un rimborso entro 30 giorni dalla data di acquisto.</div>
      </{{ faq_container }}>
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">Ho bisogno di strumenti specifici?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">No, basta un computer e una connessione internet. Ti fornirò tutto il materiale necessario.</div>
      </{{ faq_container }}>
      <{{ faq_container }} class="group py-6 hairline">
        <{{ faq_heading }} class="flex items-start justify-between gap-4 list-none cursor-pointer">
          <h4 class="m-0 text-base font-medium underline underline-offset-2">È possibile organizzare un workshop per più di 6 persone?</h4>
          <svg class="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </{{ faq_heading }}>
        <div class="mt-4 text-base text-muted-foreground leading-relaxed">Per workshop aziendali personalizzati puoi contattarmi a me[at]francescoimprota.com.</div>
      </{{ faq_container }}>
    </div>
  </div>
</section>

<!-- Final CTA Section -->
<section id="iscrizione" class="bg-card-foreground px-6 lg:px-10 py-16 lg:py-20">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-2">Pronto a fare il salto di qualità?</h2>
    <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
      Impara ad organizzare un'interfaccia digitale in modo efficace!
    </p>
    <div class="mb-8">
      <p class="course-facts">{{ page.course_facts | join: " · " }}</p>
      {% include payment-link.html bg="bg-background" note=true %}
    </div>
    <div class="hairline mb-8"></div>
    <p class="mb-2 text-sm text-muted-foreground">Hai dubbi o altre domande?</p>
    <p>
      <a href="https://cal.com/francesco-improta/30min" class="inline-flex items-center justify-center gap-2 text-sm underline underline-offset-2 hover:opacity-70 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>Parliamone insieme</a>
    </p>
  </div>
</section>
