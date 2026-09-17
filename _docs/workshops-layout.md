# Layout corsi

Le due landing usano `_layouts/workshop.html`, con hero e fascia aziende in `_includes/workshops/`. I contenuti originali restano nei due `index.md`, nell'ordine benefici, programma e materiali inclusi, docente, testimonianze, FAQ e iscrizione. Il sito inglese non usa CSS o JavaScript dei corsi.

## Anteprima e verifiche

```sh
bundle exec jekyll serve --port 4173
bundle exec ruby _tests/workshops.rb
node --check js/workshops-animation.js
```

Percorsi: `/workshops/interface-inventory/` e `/workshops/design-tokens/`. Nessuna pagina indice `/workshops/` o modifica dei permalink.

## Configurazione per corso

- `animation`: `inventory` o `tokens`.
- `hero_title`, `hero_emphasis`, `hero_subtitle`, `course_name`: testo di apertura.
- `phase_titles`, `phase_ids`: tre fasi e hash dei link diretti. I collegamenti sono gestiti dall'animazione, separatamente dalle ancore delle sezioni.
- `faq_collapsible`, `program_collapsible`: `true` per disclosure native; `false` per tutte le risposte/moduli visibili, anche senza JavaScript.
- `hero_background`: sfondo decorativo sostituibile, `null` per ometterlo.
- `benefit_visuals`: quattro immagini nell'ordine dei benefici.
- `teacher_image`, `teacher_image_alt`: foto e alternativa testuale.
- `companies`: elenco di `{name, logo}` con soli clienti effettivi. Non inferire clienti dai testimonial.
- `offer`: prezzi, date, checkout e tracciamento originali.

Esempio strutturale per un logo (sostituire entrambi i valori con quelli reali):

```yaml
companies:
  - name: Nome azienda
    logo: /img/workshops/companies/nome-azienda.svg
```

Se non ci sono loghi, l'anteprima development mostra segnaposto espliciti. In build production la fascia vuota viene omessa, senza pubblicare aziende inventate. Il widget Senja è quello preesistente, condiviso dai due corsi: la selezione di recensioni specifiche va curata nel widget/servizio prima della pubblicazione.

## Asset

| Asset | Attuale | Sostituzione prevista |
|---|---|---|
| Sfondo hero | `placeholders/hero-grid.svg`, decorativo | Immagine o illustrazione dedicata, circa 16:10, senza testo incorporato |
| Quattro benefici Inventory | `placeholders/inventory-1.svg` … `inventory-4.svg` | Esempi reali di inventario, 16:9 |
| Quattro benefici Tokens | Immagini esistenti `tokens-*.png` | Materiali aggiornati del corso, se necessari |
| Docente | Foto reale già nel sito | Ritratto o foto durante una lezione; è disponibile `placeholders/teacher-wide.svg` (3:2) |
| Aziende | `placeholders/company.svg` nell'anteprima | Loghi reali in SVG, con spazio di rispetto; nessun nome fittizio in produzione |

Le illustrazioni placeholder sono SVG originali; le immagini di riferimento fornite nella conversazione non sono copiate nella pagina. L'animazione Tokens segue la sequenza valori grezzi in pill (con campione colore) → tre livelli globali/semantici/componenti con riferimenti espliciti → icone esagonali applicate all'interfaccia. Le pill iniziali restano gli stessi elementi e si allargano mentre raggiungono i globali; le righe semantiche e poi quelle di componente entrano in sequenza. Le icone compaiono sulle pill di componente prima del distacco; le liste escono gradualmente mentre entra la UI. Tutti i passaggi sono reversibili e determinati dallo scroll, senza timer. La scena ha sfondo trasparente, integrato con la hero, con superfici neutre, bordi sottili e ombre leggere. Gli elementi sono esempi concettuali, non token di un sistema reale.

## Movimento e accessibilità

Scene SVG controllate dallo scroll, senza dipendenze o video. Mobile: composizione verticale e avvicinamento al risultato. `prefers-reduced-motion` mostra direttamente il risultato e rimuove il lungo percorso di scroll. Il testo descrittivo e i contenuti dei corsi sono accessibili anche senza animazione. Il menu delle sezioni rimane visibile; su schermi stretti scorre orizzontalmente. Il footer è minimale e non include la navigazione inglese.
