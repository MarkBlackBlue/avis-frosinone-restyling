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


# BRIEF — Restyling avisfrosinone.it
**Documento Master del Progetto**

**Data:** 26 marzo 2026  
**Versione:** 1.0 (FINAL)  
**Stakeholder:** AVIS Frosinone (Associazione Volontari Donatori Sangue)  
**Orizzonte:** 10 aprile 2026 (launch beta)

---

## 📌 EXECUTIVE SUMMARY

**In 2 minuti:**

Trasformare avisfrosinone.it da brochure informativa statica a **hub di conversione** per nuovi donatori (Gen Z 18-35). Obiettivo: **3x prime donazioni** entro 3 mesi (da 8-10 a 20-30/mese) tramite:

1. **SEO locale** — Posizionamento #1-3 per "donare sangue frosinone"
2. **AI citability** — Citato da ChatGPT/Gemini/Perplexity come fonte autorevole
3. **Conversione WhatsApp-first** — Ridurre attrito da form complessi
4. **Rassicurazione Gen Z** — Affrontare barriere specifiche (paura aghi, tatuaggi, farmaci)

---

## 🏢 CONTESTO AVIS FROSINONE

### Chi è AVIS
- Associazione Volontari Donatori Sangue — non-profit
- Raccolta sangue volontaria e gratuita
- Operativo nel Lazio, sede principale a Frosinone
- Team 20-30 volontari formati
- Coordinamento con ASL e ospedali locali

### Situazione Attuale
- **Sito web:** avisfrosinone.it (età 5+ anni, non aggiornato)
- **Tecnologia:** Joomla 6 + template Helix Ultimate
- **Traffico stimato:** 100-150 visite/mese
- **Lead conversioni:** 5-10 contatti/mese (WhatsApp, telefono, form)
- **Prime donazioni:** 8-10/mese (tasso conversione ~40%)

### Problemi Identificati
1. **SEO invisibile** — Non citato da Google/AI per keyword locali (keyword principale "donare sangue frosinone" posizione #12)
2. **UX pessima** — Slider (home) inefficace su mobile, navigazione disordinata
3. **Nessun funnel conversione** — No landing page "prima donazione", no CTA dedicata Gen Z
4. **Rassicurazione assente** — Zero contenuto su "paura degli aghi" (principale barriera Gen Z)
5. **Zero freshness signals** — Dati non aggiornati settimanalmente (AI non cita siti "stantii")

---

## 🎯 OBIETTIVI SPECIFICI

### Primario: Conversione
**KPI Principale:** Prime donazioni da 8-10/mese → 20-30/mese entro 3 mesi (+200% a +300%)

**Breakpoints:**
- **Mese 1 (apr):** 15-20 prime donazioni (esperimento, raffinamento)
- **Mese 2 (mag):** 25-30 prime donazioni (stabilizzazione)
- **Mese 3 (giu):** 30-40 prime donazioni (scaling)

### Secondario: Authority
1. **Posizionamento Google:** Keyword "donare sangue frosinone" da #12 → #3 entro 3 mesi
2. **Citazioni AI:** Citato da ChatGPT/Gemini/Perplexity per almeno 5 keyword entro 2 mesi
3. **Domain Authority:** Aumentare score MozDom da ~15 a 25-30 in 6 mesi

### Terziario: UX/Brand
1. **Mobile first:** 60%+ visitatori su mobile, tutte le pagine responsive
2. **Tempo medio pagina:** /prima-donazione 2+ minuti (engagement)
3. **Bounce rate:** Home da 70% → <40% (engagement improvement)

---

## 👥 TARGET AUDIENCE — Gen Z Donatori Potenziali

### Profilo Primario
- **Età:** 18-35 anni (Gen Z + millennial giovane)
- **Geografia:** Frosinone + provincia (Ferentino, Ceccano, Alatri)
- **Stato:** Inesperti (mai donato prima)
- **Intento:** Curiosi, ma hanno paura/dubbi/obiezioni

### Barriere Identificate (In Ordine di Importanza)
1. **Paura degli aghi** (50% dei "no") → Soluzione: rassicurazione scientifica + video
2. **"Non so se sono idoneo"** (30%) → Soluzione: quiz 30 secondi
3. **"Non ho tempo"** (20%) → Soluzione: mostrar che durata è 1h15min (under 1 film)
4. **Tatuaggio recente** (15% Gen Z) → Soluzione: spiegare regola 4 mesi
5. **"Prendo farmaci"** (10%) → Soluzione: verificazione rapida WhatsApp

### Psicografia
- Informati online (Google, social)
- Preferiscono WhatsApp a form
- Sensibili a "proof locale" (amici che hanno donato)
- Vogliono solidarietà **tangibile** ("salvo vite") vs generica

---

## 🏗️ VINCOLI TECNICI (NON NEGOZIABILI)

### Stack Attuale
- **CMS:** Joomla 6 (upgradato dal 4)
- **Template:** Helix Ultimate (responsive, custom CSS)
- **Hosting:** [Verificare — presumibilmente server AVIS o shared hosting]
- **Dominio:** avisfrosinone.it (registrato, mantieni)
- **SSL:** HTTPS obbligatorio

### Asset da Mantenere
- ✅ Logo AVIS rosso #e30513 + blu #004C97 (non modificare)
- ✅ Slider home (evolvi, non eliminare — è il simbolo)
- ✅ 10 slide attuali (ridurre a 8, ottimizzare)
- ✅ Menu Joomla (mantieni struttura, migliora UX)

### Asset da Integrare
- ⚠️ Google Business Profile (sì, creare/aggiornare)
- ⚠️ GA4 (implementare event tracking)
- ⚠️ WhatsApp Business API (integrazione CRM)
- ⚠️ Schema.org (JSON-LD, non modificare HTML legacy se possibile)

### Limitazioni
- ❌ **Zero budget pubblicità** — Tutto organic (SEO + social + word-of-mouth)
- ❌ **Nessun app mobile** — Sempre web (responsive only)
- ❌ **Nessun e-commerce** — No booking online (solo WhatsApp/telefono)
- ❌ **Nessun CRM sofisticato** — Usa WhatsApp Business o Google Workspace come CRM

---

## 📊 METRICHE SUCCESS — Baseline vs Target

### Conversione Primaria
| Metrica | Baseline (Mar 2026) | Target 3 mesi | Target 6 mesi |
|---------|------------------|---|---|
| **Prime donazioni/mese** | 8-10 | 20-30 | 40-50 |
| **Click WhatsApp home** | 30-50/mese | 150/mese | 250/mese |
| **Lead WhatsApp qualificati** | 5/mese | 30/mese | 60/mese |
| **Tasso conversione (lead → donazione)** | ~15% | 40% | 60% |
| **Tempo media pagina /prima-donazione** | - | 1m30s | 2+ min |

### SEO + Authority
| Metrica | Baseline | Target 3 mesi | Target 6 mesi |
|---------|----------|---|---|
| **Posizione "donare sangue frosinone"** | #12 | #5-6 | #2-3 |
| **Traffico da keyword locali** | 50 visite/mese | 300 visite/mese | 600+ visite/mese |
| **Citazioni AI** (ChatGPT/Gemini) | 0 | 3-5/mese | 8-10/mese |
| **Domain Authority (MozDom)** | ~15 | 20-22 | 25-30 |
| **Bounce rate home** | 70% | <50% | <40% |

---

## 👨‍💼 TEAM & RESPONSABILITÀ

### Agenti (AI)
| Fase | Agente | Ruolo | Scadenza |
|------|--------|-------|----------|
| 01-research | Researcher (Gemini) | Benchmark, competitor analysis | 25 mar ✅ |
| 02-seo-geo | SEO/AI (Claude PM) | Keyword strategy, schema.org, KPI | 28 mar ✅ |
| 03-marketing | Marketing (DeepSeek) | Funnel, CTA, positioning, messaging | 26 mar ✅ |
| 04-ux | UX (ChatGPT) | Sitemap, wireframe, componenti | 25 mar ✅ |
| 05-copy | Copywriter (Claude) | Testi tutte pagine, FAQ, meta tags | 29 mar ⏳ |
| 06-dev | Coding (Jules) | HTML, CSS, JS, schema.org, GA4 | 01 apr ⏳ |
| QC | Team | Testing, SEO audit, browser testing | 05 apr ⏳ |

### Stakeholder AVIS
| Ruolo | Nome | Responsabilità | Reperibilità |
|------|------|---------------|------------|
| **Project Owner** | [Nome] | Approvazioni finali, risorse AVIS | [Email/Tel] |
| **Medical Lead** | Dr. [Nome] | Review contenuti medici, e-e-a-t | [Email] |
| **Marketing** | [Nome] | Social media, partnership, PR | [Email] |
| **Tech Admin** | [Nome] | Hosting, deploy, DNS | [Email] |

---

## 📖 DEFINITION OF DONE

Consegnata **per ciascuna fase:**

### 01-research (Completed ✅)
- [ ] Tabella benchmark 15+ siti AVIS italiani
- [ ] Analisi competitor internazionali (NHS, Red Cross, Lifeblood)
- [ ] 10 funzionalità internazionali assenti in Italia (identificate)
- [ ] Gap analysis vs ASL, FrosinoneToday, AVIS nazionale
- [ ] Brief output per SEO/Marketing/UX agents

### 02-seo-geo (Completed ✅)
- [ ] 20 keyword ricercate + volume + difficoltà + AI positioning
- [ ] Content Gap Analysis per ogni keyword
- [ ] 6 schema.org template pronti (JSON-LD)
- [ ] 55 FAQ strutturate con outline
- [ ] 20 meta title/description differenziati
- [ ] AI-specific optimization per ChatGPT, Gemini, Perplexity, Claude
- [ ] Internal link strategy
- [ ] KPI dashboard (baseline vs target)

### 03-marketing (Completed ✅)
- [ ] UVP positioning ("siamo i vicini di casa...")
- [ ] 3 varianti headline hero
- [ ] 4-stage funnel (Awareness, Consideration, Intent, Action)
- [ ] 3 CTA architecture (primaria WhatsApp, secondaria download, urgenza)
- [ ] 10 obiezioni mappate + risposte
- [ ] Editorial calendar Q1
- [ ] Social proof strategy + urgency triggers

### 04-ux (Completed ✅)
- [ ] 5 principi UX documentati
- [ ] Sitemap completa (17 pagine minimo)
- [ ] Wireframe home slider (8 slide, dettagliato)
- [ ] Wireframe pagina "Prima Donazione" (zero-attrito)
- [ ] Wireframe pagina FAQ
- [ ] 5 componenti UI custom spec'd
- [ ] Mobile-first spec (breakpoint, behavior)

### 05-copy (⏳ Copywriter)
- [ ] Home page complete (hero + 5 sezioni)
- [ ] 4 pagine pillar: /dona, /prima-donazione, /diventa-donatore, /posso-donare
- [ ] 55 FAQ complete (short 40-50 parole + long 100-150)
- [ ] 5 articoli blog (paura-aghi, fa-male, tatuaggi, dieta, requisiti)
- [ ] 20 meta title/description (pronto per copia)
- [ ] 10 obiezioni + risposte in pagina /prima-donazione
- [ ] CTA WhatsApp precompilati (3 versioni)
- [ ] Profili medici /chi-siamo con bio e credenziali

### 06-dev (⏳ Coding)
- [ ] 6 schema.org implementati (MedicalWebPage, LocalBusiness, FAQPage, Breadcrumb, NewsArticle, Person)
- [ ] GA4 event tracking (WhatsApp click, phone click, scroll depth)
- [ ] 5 componenti custom (whatsapp_sticky, blood_stock_bar, impact_counter, eligibility_quiz, donor_testimonial)
- [ ] HTML template per ogni pagina pillar
- [ ] CSS custom (colori, spacing, mobile)
- [ ] JS per accordion FAQ, quiz, sticky CTA
- [ ] Automation dateModified (settimanale)
- [ ] Contatore donazioni (widget dinamico)
- [ ] Google Business Profile aggiornato

### QC (⏳ Team)
- [ ] Functional testing (navigazione, CTA, mobile)
- [ ] SEO audit (20 keyword positions, schema validation)
- [ ] Copy review (grammatica, tone, link integrity)
- [ ] AI citation test (ChatGPT, Gemini, Perplexity)
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] WCAG 2.1 AA accessibility
- [ ] Performance (Core Web Vitals)

---

## 📋 BRIEFING PER AGENTE

### Ricercatore (Gemini) — Completato ✅
**Cosa fare:** Analizza siti AVIS italiani, competitor internazionali, identifica best practices e gap.  
**Output:** BENCHMARK_REPORT_2026-03.md  
**Scadenza:** 25 mar (COMPLETATO)

---

### SEO/AI Agent (Claude PM) — Completato ✅
**Cosa fare:**
1. Ricerca 20 keyword focus (locali + tematiche)
2. Test su ChatGPT/Gemini per content gap
3. Crea 6 schema.org template (JSON-LD pronto)
4. Struttura 55 FAQ per categorie
5. Produci 20 meta title/description differenziati
6. Descrivi AI-specific optimization (ChatGPT ≠ Gemini)
7. Mappi internal link strategy con topical authority
8. Definisci KPI tracking

**Output:** SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md  
**Input:** BENCHMARK_REPORT + UX_ARCHITECTURE  
**Scadenza:** 28 mar (COMPLETATO 26 mar — EARLY)

---

### Marketing Agent (DeepSeek) — Completato ✅
**Cosa fare:**
1. Definisci UVP e positioning (3 varianti headline)
2. Mappi 4-stage funnel (Awareness → Action)
3. Architettura CTA (primaria/secondaria/urgenza)
4. Gestione 10 obiezioni + copy risposte
5. Plan editoriale Q1 + social proof strategy
6. Identifica urgency triggers

**Output:** CONVERSION_STRATEGY_2026-03.md  
**Input:** BENCHMARK_REPORT  
**Scadenza:** 26 mar (COMPLETATO)

---

### UX Agent (ChatGPT) — Completato ✅
**Cosa fare:**
1. Definisci 5 principi UX
2. Produci sitemap completa
3. Wireframe home slider (8 slide dettagliato)
4. Wireframe pagina "Prima Donazione" (zero-attrito)
5. Wireframe FAQ (accordi, schema)
6. Specifica 5 componenti UI custom
7. Mobile-first spec (breakpoint, touch gestures, performance)

**Output:** UX_ARCHITECTURE_2026-03.md  
**Input:** BENCHMARK_REPORT + CONVERSION_STRATEGY  
**Scadenza:** 25 mar (COMPLETATO)

---

### Copywriter (Claude) — In Coda ⏳
**Cosa fare:**
1. Scrivi Home page (hero + 5 sezioni)
2. Scrivi 4 pagine pillar (completo)
3. Scrivi 55 FAQ (versione short + long)
4. Scrivi 5 articoli blog + 20 meta tags
5. Trascrivi 10 obiezioni in pagina /prima-donazione
6. Crea 3 CTA WhatsApp precompilati
7. Scrivi profili medici /chi-siamo

**Output:** COPY_ALL_PAGES_2026-03.md  
**Input:** CONVERSION_STRATEGY + UX_ARCHITECTURE + SEO_GEO_STRATEGY  
**Scadenza:** **29 mar EOD**  
**Note:** Attendi merge status.md — usa Sezione 4-5-6 di SEO_GEO_STRATEGY per FAQ outline e meta tags

---

### Coding Agent (Jules) — In Coda ⏳
**Cosa fare:**
1. Implementa 6 schema.org (JSON-LD su ogni pagina)
2. Setup GA4 event tracking
3. Sviluppa 5 componenti custom (CSS + JS)
4. Crea HTML template per pagine pillar
5. Sviluppa accordion FAQ + quiz + sticky CTA
6. Automation dateModified
7. Integra Google Business Profile API

**Output:** DEV_BRIEF_2026-03.md + HTML_TEMPLATES/ + CSS_COMPONENTS.css + JS_INTERACTIONS.js  
**Input:** UX_ARCHITECTURE + SEO_GEO_STRATEGY + COPY_ALL_PAGES (una volta consegnato)  
**Scadenza:** **01 apr EOD**  
**Note:** Puoi iniziare da SEO_STRATEGY subito (non aspettare copy per schema.org)

---

### QC Team — In Coda ⏳
**Cosa fare:**
1. Testing funzionale (navigazione, CTA, mobile, browser)
2. SEO audit (keyword ranking, schema validation)
3. Copy review (grammatica, tone consistency)
4. AI citation test (manuale su ChatGPT/Gemini/Perplexity)
5. Accessibility testing (WCAG 2.1 AA)
6. Performance testing (Core Web Vitals)

**Output:** TEST_REPORT_2026-04.md  
**Input:** Dev brief + Copy  
**Scadenza:** **05 apr**

---

## 🎨 TONE OF VOICE — Per Copywriter

**Target Audience:** Gen Z 18-35, mai donato

**Tone:** ⚖️ **Scienza + Amicizia + Zero Burocrazia**

### Come scrivere
- ✅ "Aghi sottilissimi: la puntura 3 secondi"
- ❌ "Procedure mediche sono minimamente invasive"

- ✅ "Abbiamo volontari formati che ti distraggono durante"
- ❌ "Personale qualificato addetto alla distrazione psicologica"

- ✅ "Tatuaggi negli ultimi 4 mesi? Torna dopo. Niente stress."
- ❌ "I tatuaggi comportano vincoli normativi per 4 mesi dalla data"

- ✅ "WhatsApp, mandiamo messaggio, ti rispondiamo in 10 minuti"
- ❌ "Contatto tramite chat istantanea con tempo di risposta garantito"

**Lunghezza:** Frasi brevi (max 15 parole), paragrafi brevi (max 3 frasi)

**CTA:** Sempre chiara e urgente
- ✅ "Prenota su WhatsApp adesso"
- ❌ "Contattaci per prenotare"

---

## 💰 BUDGET & RISORSE

### Zero Cost (tutto in-house)
- Repository GitHub (free)
- Google Analytics 4 (free)
- Schema.org (free)
- Joomla (free, self-hosted)

### Low Cost (AVIS budget)
- WhatsApp Business API ($0.40/messaggio in entrata)
- SSL certificate (incluso di solito in hosting)
- Google Business Profile (free)

### No Budget Per
- ❌ Campagne Google Ads
- ❌ Social media advertising
- ❌ Consulenti esterni
- ❌ Premium tools (SEMrush, Ahrefs)

### Come Procurarsi Dati
- 📊 Monitoraggio manuale ChatGPT (per AI citation test)
- 📊 Google Search Console (free)
- 📊 Google Analytics 4 (free)
- 📊 Google Business Insights (free)

---

## 🚀 FASI IMPLEMENTAZIONE

### FASE 1: Copy + Dev (27-30 mar)
- Copywriter consegna testi (29 mar)
- Coding inizia schema.org + GA4 (27 mar, non aspetta copy completa)
- Integrazione testi + markup (30 mar)

### FASE 2: QC + Refinement (31 mar - 05 apr)
- Testing funzionale
- SEO audit
- Copy editing
- Ajustate finale

### FASE 3: Deploy (05-10 apr)
- Deploy su staging (05 apr)
- Final review AVIS (07 apr)
- Deploy su production (10 apr)
- Monitoring primi giorni

---

## ✍️ FIRMA APPROVAZIONE

| Ruolo | Nome | Firma | Data |
|-------|------|-------|------|
| Project Manager | Claude PM | ✅ | 26 mar 2026 |
| AVIS Owner | [Nome] | ⏳ | [Data] |
| Medical Lead | Dr. [Nome] | ⏳ | [Data] |
| Tech Admin | [Nome] | ⏳ | [Data] |

---

## 📞 ESCALATION & CONTATTI

**Per domande/blocchi:**
1. Chiedi prima nel repo (issue + tagging PM)
2. Slack urgent
3. Call group se critico

**Not negotiable:**
- Timeline (10 apr launch non spostabile)
- KPI target (3x donazioni entro 3 mesi)
- Tone (Gen Z friendly, no legalese)
- Tech stack (Joomla, no major changes)

---

## 📚 ALLEGATI

- [x] BENCHMARK_REPORT_2026-03.md
- [x] SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md
- [x] CONVERSION_STRATEGY_2026-03.md
- [x] UX_ARCHITECTURE_2026-03.md
- [ ] COPY_ALL_PAGES_2026-03.md (in produzione)
- [ ] DEV_BRIEF_2026-03.md (in produzione)

---

**BRIEF COMPLETO. TUTTI GLI AGENTI LEGGONO PRIMA DI PROCEDERE.**

*Ultimo aggiornamento: 26 marzo 2026, 18:00 CET*
