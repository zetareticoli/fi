# Interface Inventory — prototipo di movimento

Prototipo autonomo, senza dipendenze, destinato allo studio della futura landing workshop. Non modifica le landing pubblicate.

## Anteprima

Dalla radice del repository: `python3 -m http.server 4173`. Aprire `http://localhost:4173/prototypes/interface-inventory/`.

Scorrere per osservare tre fasi: interfaccia integra, estrazione dei componenti, disposizione in categorie. Il movimento è reversibile. I link della testata permettono di saltare a ciascuna fase; gli URL con `#osserva`, `#scomponi` e `#riordina` aprono direttamente la fase corrispondente.

## Scelte

- SVG originale: i medesimi nove elementi passano dal dispositivo al canvas, senza sostituire l'immagine con un video.
- Profondità suggerita da ombre, rotazioni e archi di movimento. Nessuna libreria 3D o risorsa esterna.
- Desktop: dispositivo e inventario affiancati. Mobile: composizione verticale e navigazione sempre visibile, senza hamburger.
- `prefers-reduced-motion`: inventario completo statico, senza lunga sezione di scroll.
- L'interfaccia “altrove” è dimostrativa; non rappresenta un cliente o un prodotto reale. Nessuna fotografia o logo di cliente è inventato.

## Integrazione successiva

Adattare palette e tipografia al layout workshop definitivo; sostituire l'interfaccia dimostrativa con esempi reali del corso; valutare durata e dimensioni della scena su dispositivi reali. L'immagine fornita dall'utente è un riferimento concettuale, non una texture incorporata nel prototipo.
