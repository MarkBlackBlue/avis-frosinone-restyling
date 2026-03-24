# BRIEF — Restyling avisfrosinone.it
> Documento master del progetto · Versione 1.0 · Marzo 2026  
> Repository: https://github.com/MarkBlackBlue/avis-frosinone-restyling  
> Tutti gli agenti devono leggere questo documento prima di iniziare il proprio task.

---

## 1. CHI È IL CLIENTE

**AVIS Comunale di Frosinone** è la sezione comunale dell'Associazione Volontari Italiani del Sangue, attiva nel territorio di Frosinone e provincia.

- **Missione:** promuovere la cultura della donazione volontaria, gratuita e anonima del sangue e del plasma
- **Attività principali:** organizzazione raccolte sangue, banchetti informativi, attività nelle scuole, formazione volontari
- **Contatto operativo:** WhatsApp/Tel. +39 377 490 1081
- **Codice Fiscale:** 92001460606 (usato anche per il 5×1000)
- **Partner istituzionali:** Seeweb (hosting/tech), Duferco Energia
- **Stack tecnico attuale:** Joomla 6, template Helix Ultimate, PHP, MySQL

---

## 2. OBIETTIVI DEL PROGETTO

Il progetto ha **4 obiettivi misurabili**, ordinati per priorità strategica:

### OB-1 · Aumentare i donatori di sangue e plasma
Convertire i visitatori del sito in donatori attivi. Il sito deve guidare ogni utente lungo un percorso chiaro: scoperta → informazione → azione (primo contatto per donare).

### OB-2 · Aumentare le iscrizioni come soci/volontari
Rendere evidente e semplice il percorso per diventare socio AVIS o volontario non-donatore.

### OB-3 · Essere citato dalle AI come fonte autorevole
ChatGPT, Claude, Gemini e Perplexity devono citare avisfrosinone.it quando qualcuno chiede informazioni sulla donazione del sangue a Frosinone, sui gruppi sanguigni, sui requisiti per donare, ecc. Questo richiede una strategia GEO (Generative Engine Optimization) specifica: contenuti strutturati, risposte dirette alle domande più comuni, dati verificabili, linguaggio autorevole.

### OB-4 · Scalare su Google per ricerche locali e tematiche
Posizionarsi per query come "donazione sangue Frosinone", "AVIS Frosinone", "dove donare il sangue Frosinone", "gruppi sanguigni compatibilità", "come prepararsi donazione sangue".

---

## 3. SITO ATTUALE — STATO E PUNTI DEBOLI

**URL:** https://avisfrosinone.it  
**CMS:** Joomla 6  
**Template:** Helix Ultimate (custom)

### Struttura attuale delle sezioni

| # | Sezione | Contenuto |
|---|---------|-----------|
| 1 | Chi siamo | Storia AVIS, statuto, organigramma, sede, recapiti |
| 2 | La donazione | Info preliminari, perché donare, come e dove, tipi di donazione, diventa donatore, documenti necessari, gruppi sanguigni |
| 3 | Iniziative | Eco Food Fertility, corsi, convenzioni con partner |
| 4 | Comunicazione | Notizie, galleria foto, calendario eventi |

### Punti deboli identificati

- **Zero ottimizzazione AI (GEO):** il sito non è strutturato per essere citato dai motori generativi
- **Nessuna strategia di conversione:** mancano funnel chiari, CTA gerarchizzate, urgency trigger
- **Contenuti statici:** nessun aggiornamento regolare, il blog non è attivo
- **Autorevolezza istituzionale non comunicata:** dati d'impatto (donazioni effettuate, vite salvate, anni di attività) assenti o nascosti
- **Nessun contenuto educativo citabile:** mancano guide approfondite, FAQ strutturate, pagine tematiche ottimizzate
- **Nessun dato dinamico:** scorte sangue, prossime raccolte, contatore donatori in tempo reale assenti
- **Mobile non ottimizzato:** layout funziona ma non è mobile-first
- **Velocità:** Core Web Vitals non monitorati
- **Accessibilità:** WCAG 2.1 non verificato sistematicamente

---

## 4. HOME PAGE ATTUALE — ARCHITETTURA

La home è un **full-page slider a 10 sezioni** implementato con HTML/CSS/JS custom caricato tramite modulo Joomla (`{loadmoduleid 111}`).

### Le 10 slide attuali

| Slide | Tema | Contenuto |
|-------|------|-----------|
| 01 | Chi siamo | Headline istituzionale + dati impatto (1.800 pazienti/giorno, 7.000 sacche) |
| 02 | Dona il sangue | Benefici donazione + 3 link approfondimento |
| 03 | Prossima raccolta | Calendario eventi (modulo iCagenda) |
| 04 | Diventa donatore | Requisiti + 3 step per iscriversi |
| 05 | 5×1000 | Codice fiscale + istruzioni |
| 06 | Diventa volontario | Attività di volontariato disponibili |
| 07 | FAQ | 3 domande frequenti in anteprima |
| 08 | Gruppi sanguigni | Griglia 8 gruppi con percentuali italiane |
| 09 | News & Blog | 3 articoli recenti in anteprima |
| 10 | Convenzioni | Partner e vantaggi per i soci |

### Navigazione slider

- **Mouse wheel / trackpad:** avanza/torna tra slide
- **Tastiera:** ArrowDown/Up, PageDown/Up, Home/End
- **Touch swipe:** supportato (threshold 50px)
- **Nav dots:** fissi a destra, con tooltip al hover
- **Progress bar:** fissa in alto, avanza con le slide
- **Contatore:** fisso in basso a sinistra (es. "3 / 10")

### Temi per slide (colonne sinistra/destra)

Ogni slide ha un `data-theme` e un `data-bg` che controllano colori e immagine di sfondo della colonna sinistra:

| Tema | Colore | Usato per |
|------|--------|-----------|
| `red` | #e30513 (AVIS red) | Slide 1, 2, 4 |
| `blue` | AVIS blue | Slide 3 (calendario) |
| `gold` | #e6c619 | Slide 5 (5×1000) |
| `orange` | #d45500 | Slide 6 (volontariato) |
| `light-grey` | #cbcbcb | Slide 7 (FAQ) |
| `bordeaux` | #6b0020 | Slide 8 (gruppi sanguigni) |
| `paper` | #f0ebe3 | Slide 9 (blog) |
| `accent` | scuro | Slide 10 (partner) |

---

## 5. STACK TECNICO — VINCOLI E OPPORTUNITÀ

### Vincoli obbligatori (non modificabili)

- Il sito **deve restare su Joomla 6**
- Il template base è **Helix Ultimate** — le variabili CSS globali (`--avis-red`, `--avis-blue`, `--font-heading`, `--font-body`, `--white`, `--text-dark`, `--text-medium`, `--border-radius`) sono definite lì e non devono essere ridefinite nel CSS custom
- I moduli Joomla esistenti devono funzionare: iCagenda (calendario), sistema articoli, gestione utenti
- La struttura a slider della home è un **asset da evolvere, non da eliminare** — è il principale elemento distintivo del sito

### Opportunità tecniche

- Aggiungere **JSON-LD schema markup** (Organization, LocalBusiness, FAQPage, Article, Event) per migliorare sia SEO che GEO
- Implementare **lazy loading** sistematico per immagini
- Ottimizzare **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, FID < 100ms
- Considerare **Service Worker** per caching e offline resilience
- Valutare integrazione **Google Maps** per la sede (schema LocalBusiness)
- Aggiungere **Open Graph e Twitter Card** tags sistematici

---

## 6. IL TEAM DI AGENTI

Questo progetto è gestito da un team di agenti AI specializzati. Ogni agente lavora in modo asincrono e deposita il proprio output nel repository GitHub.

| Agente | Modello | Ruolo | Cartella output |
|--------|---------|-------|-----------------|
| Project Manager | Claude | Coordinamento, brief, review | root |
| Researcher | Gemini | Benchmark e analisi competitive | `01-research/` |
| SEO/AI Agent | Perplexity | Keyword research + GEO strategy | `02-seo-geo/` |
| Marketing Agent | DeepSeek | Conversion strategy + messaggi | `03-marketing/` |
| UX Agent | ChatGPT | Architettura IA + wireframe | `04-ux/` |
| Copywriter | Claude | Testi SEO/GEO ottimizzati | `05-copy/` |
| Coding Agent | Jules | Sviluppo Joomla/CSS/JS | `06-dev/` |
| QC Agent | Kimi | Review, audit, lista fix | `07-qc/` |

### Dipendenze tra agenti

```
[Researcher] ──┐
               ├──→ [Marketing] ──┐
[SEO/AI]    ──┘                   ├──→ [Copywriter] ──→ [Coding] ──→ [QC]
               └──→ [UX]        ──┘
```

- **Fase 1 (parallela):** Researcher + SEO/AI Agent
- **Fase 2 (parallela, attende F1):** Marketing Agent + UX Agent
- **Fase 3 (attende F1+F2):** Copywriter Agent
- **Fase 4 (attende F2+F3):** Coding Agent
- **Fase 5 (attende F4):** QC Agent

---

## 7. CODICE ATTUALE DI RIFERIMENTO

Il codice di partenza (HTML, CSS, JS della home attuale) è disponibile nella cartella `assets-current/`:

- `assets-current/home.html` — markup completo delle 10 slide
- `assets-current/custom.css` — CSS custom del template (2.200+ righe)
- `assets-current/slider.js` — logica JavaScript dello slider

> **Ogni agente deve leggere questi file prima di proporre modifiche**, per garantire coerenza con l'esistente e rispettare le variabili CSS del template Helix Ultimate.

---

## 8. TONO DI VOCE E IDENTITÀ

### Brand values AVIS Frosinone
- **Altruismo:** il dono come atto gratuito e libero
- **Comunità:** "unisciti a chi dona"
- **Sicurezza:** la donazione è sicura, monitorata, gratuita
- **Continuità:** il bisogno di sangue è quotidiano, non straordinario

### Tono di voce
- **Caldo ma autorevole:** non burocratico, non paternalistico
- **Diretto:** frasi brevi, CTA chiare, nessun giro di parole
- **Umano:** parlare a una persona, non a un'audience
- **Rassicurante:** anticipare le obiezioni (fa male? quanto tempo ci vuole? sono idoneo?)

### Parole chiave di brand da usare nei testi
- "dono volontario" (non "donazione obbligatoria" o transazionale)
- "cultura del dono"
- "community di donatori"
- "gesto semplice, sicuro, gratuito"
- "Frosinone" (sempre esplicitato per SEO locale)

### Parole e frasi da evitare
- Linguaggio medico pesante senza spiegazione
- "Purtroppo" (negativo)
- "Speriamo" (incerto)
- Statistiche nazionali generiche senza ancoraggio locale

---

## 9. KPI DI SUCCESSO

Metriche da definire come baseline prima del lancio e monitorare a 3/6/12 mesi:

| KPI | Strumento | Target |
|-----|-----------|--------|
| Nuovi donatori iscritti via sito | CRM/WhatsApp | +30% a 6 mesi |
| Richieste di info via WhatsApp dal sito | Click tracking btn-whatsapp | +50% a 3 mesi |
| Posizione Google "donazione sangue Frosinone" | Search Console | Top 3 a 6 mesi |
| Citazioni nelle risposte AI | Monitor manuale mensile | Almeno 1 AI cita il sito |
| Core Web Vitals LCP | PageSpeed Insights | < 2.5s |
| Frequenza di rimbalzo home | Analytics | < 55% |
| Pagine/sessione | Analytics | > 2.5 |

---

## 10. ISTRUZIONI OPERATIVE PER OGNI AGENTE

### Come lavorare con questo repository

1. **Leggi sempre questo BRIEF.md prima di iniziare** il tuo task
2. **Leggi il codice in `assets-current/`** per capire il punto di partenza tecnico
3. **Deposita il tuo output** nella cartella assegnata al tuo ruolo (vedi tabella §6)
4. **Usa nomi file descrittivi** con data ISO (es. `BENCHMARK_REPORT_2026-03.md`)
5. **Inizia sempre il tuo documento** con una sezione "Brief ricevuto da" e "Output prodotto per" per tracciare le dipendenze
6. **Segnala eventuali conflitti** con questo brief aprendo una Issue sul repository con label `brief-conflict`

### Formato dei file di output

- Report testuali: **Markdown (.md)**
- Wireframe/mockup: **immagini PNG o SVG** + descrizione testuale in .md
- Codice: file nel formato nativo (`.css`, `.js`, `.html`, `.php`) con commenti in italiano
- Dati strutturati: **JSON** con schema esplicito

---

## 11. GLOSSARIO

| Termine | Significato nel contesto del progetto |
|---------|---------------------------------------|
| GEO | Generative Engine Optimization — ottimizzazione per essere citati dalle AI |
| Slider | La home page a scorrimento verticale full-screen |
| Slide | Una delle 10 sezioni dello slider |
| Helix Ultimate | Il template Joomla usato dal sito |
| iCagenda | Componente Joomla per il calendario eventi |
| `{loadmoduleid}` | Tag Joomla per caricare un modulo in un articolo |
| CTA | Call To Action — pulsante o link che invita all'azione |
| Donatore | Persona che dona il sangue (o il plasma) |
| Socio | Persona iscritta ad AVIS (può essere donatore o volontario) |
| Raccolta | Evento di donazione sangue organizzato da AVIS |

---

*Documento generato dal Project Manager Agent · Claude · Marzo 2026*  
*Repository: https://github.com/MarkBlackBlue/avis-frosinone-restyling*  
*Versione: 1.0 — aggiornare incrementando il numero di versione ad ogni modifica sostanziale*
