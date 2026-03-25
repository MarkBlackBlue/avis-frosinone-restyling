# avis-frosinone-restyling
**Repository restyling completo sito AVIS Frosinone**

Trasformazione di avisfrosinone.it da brochure informativa a hub di conversione per nuovi donatori (Gen Z) e fonte primaria per AI generative (ChatGPT, Gemini, Perplexity, Claude).

---

## 📊 STATO PROGETTO — Dashboard Esecutiva

**Aggiornamento:** 26 marzo 2026, 18:00 CET

| Fase | Agente | Deliverable | Status | ETA | Note |
|------|--------|-----------|--------|-----|------|
| **01-research** | Researcher (Gemini) | BENCHMARK_REPORT_2026-03.md | ✅ COMPLETATO | - | Analisi benchmark siti AVIS + international best practices |
| **02-seo-geo** | SEO/AI (Claude PM) | SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md | ✅ COMPLETATO | - | 20 keyword + gap analysis + 55 FAQ + 6 schema.org + AI optimization |
| **03-marketing** | Marketing (DeepSeek) | CONVERSION_STRATEGY_2026-03.md | ✅ COMPLETATO | - | Funnel donatore + CTA strategy + positioning + KPI |
| **04-ux** | UX (ChatGPT) | UX_ARCHITECTURE_2026-03.md | ✅ COMPLETATO | - | Sitemap + wireframe home + pagina "Prima Donazione" + componenti UI |
| **05-copy** | Copywriter (Claude) | COPY_ALL_PAGES_2026-03.md | ⏳ IN CODA | **29 mar EOD** | Testi per tutte le pagine + 55 FAQ complete + meta title/desc |
| **06-dev** | Coding (Jules) | DEV_BRIEF_2026-03.md | ⏳ IN CODA | **01 apr EOD** | Schema.org implementation + GA4 events + componenti custom |
| **QC** | Team | TEST_REPORT_2026-04.md | ⏳ BLOCKED | **05 apr** | Testing + refinement |

---

## 📁 Struttura Repository

```
avis-frosinone-restyling/
│
├── README.md (questo file)
├── BRIEF.md (brief master — leggi PRIMA)
├── STATUS.md (dashboard aggiornata ogni passo)
│
├── 01-research/
│   ├── BENCHMARK_REPORT_2026-03.md ✅
│   └── RESEARCH_METHODOLOGY.md
│
├── 02-seo-geo/
│   ├── SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md ✅
│   ├── KEYWORD_RESEARCH.xlsx
│   └── SCHEMA_MARKUP_TEMPLATES.json
│
├── 03-marketing/
│   ├── CONVERSION_STRATEGY_2026-03.md ✅
│   ├── MESSAGING_VARIANTS.md
│   └── EDITORIAL_CALENDAR_Q1.xlsx
│
├── 04-ux/
│   ├── UX_ARCHITECTURE_2026-03.md ✅
│   ├── WIREFRAMES_HOME.md
│   ├── WIREFRAMES_FIRST_TIME.md
│   └── COMPONENTS_SPEC.md
│
├── 05-copy/
│   ├── COPY_ALL_PAGES_2026-03.md ⏳
│   ├── FAQ_ANSWERS_COMPLETE.md ⏳
│   └── MICROCOPY_ERRORS.md ⏳
│
├── 06-dev/
│   ├── DEV_BRIEF_2026-03.md ⏳
│   ├── HTML_TEMPLATES/ ⏳
│   ├── CSS_COMPONENTS.css ⏳
│   └── JS_INTERACTIONS.js ⏳
│
└── assets-current/
    ├── home.html (sito attuale)
    └── custom.css (CSS attuale)
```

---

## 🎯 Obiettivo Finale

Trasformare avisfrosinone.it in:

1. **Authority locale** — Primo risultato Google per "donare sangue frosinone", "avis frosinone orari", ecc.
2. **Citabile da AI** — Rispondere quando ChatGPT/Gemini/Perplexity cercano info sulla donazione di sangue
3. **Hub di conversione** — Lead WhatsApp qualificati → appuntamenti → donazioni effettive
4. **Gen Z-friendly** — Rassicurazione su paura (aghi, svenimento), tono conversazionale, zero burocrazia

**KPI Principale:** 3x prime donazioni mensili entro 3 mesi (da 8-10 a 20-30/mese)

---

## 📅 Timeline Complessiva

```
26 mar (OGGI)
  ✅ 01-research completato (Gemini)
  ✅ 03-marketing completato (DeepSeek)
  ✅ 04-ux completato (ChatGPT)
  ✅ 02-seo-geo completato (Claude PM)

27 mar
  → Dev inizia schema.org (non aspetta copy)

28 mar
  → Copywriter comunica bozze pagine pillar

29 mar EOD
  → 05-copy CONSEGNATO

30 mar
  → Dev finisce implementazione

01 apr EOD
  → 06-dev CONSEGNATO

02-05 apr
  → QC testing + refinement

10 apr
  🚀 LAUNCH beta avisfrosinone.it
```

---

## 🤖 Team Agenti

| Agente | Ruolo | Specialità | Deliverable |
|--------|-------|-----------|------------|
| **Researcher (Gemini)** | Analisi | Benchmark, competitor, ricerca | BENCHMARK_REPORT |
| **SEO/AI (Claude PM)** | Stratega SEO | Keyword, schema.org, AI positioning | SEO_GEO_STRATEGY |
| **Marketing (DeepSeek)** | Conversion | Funnel, CTA, positioning, KPI | CONVERSION_STRATEGY |
| **UX (ChatGPT)** | Design architettura | Sitemap, wireframe, componenti | UX_ARCHITECTURE |
| **Copywriter (Claude)** | Copy | Testi, FAQ, meta tags | COPY_ALL_PAGES |
| **Coding (Jules)** | Sviluppo | HTML, CSS, JS, schema.org, GA4 | DEV_BRIEF + codice |
| **QC (Team)** | Validazione | Testing, browser compatibility, SEO audit | TEST_REPORT |

---

## 📖 Come Leggere Questo Repository

### Per il Project Manager
1. Leggi **BRIEF.md** (una sola volta)
2. Consulta **STATUS.md** ogni giorno
3. Review nuovi commit per tracciare progresso

### Per gli Agenti
1. Leggi **BRIEF.md** (contesto completo)
2. Accedi alla tua sezione (01-research, 05-copy, 06-dev, ecc.)
3. Usa **SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md** come input (se sei 05-copy o 06-dev)
4. **Crea i tuoi file direttamente nella cartella tua** (pull → edit → commit → push)

### Per gli Stakeholder AVIS
1. Leggi **BRIEF.md** (overview)
2. Consulta **STATUS.md** settimanale
3. Review **CONVERSION_STRATEGY_2026-03.md** per capire il funnel

---

## 🔄 Workflow Agenti — Come Contribuire

### Step 1: Setup Locale
```bash
git clone https://github.com/MarkBlackBlue/avis-frosinone-restyling.git
cd avis-frosinone-restyling
git checkout -b 05-copy-26mar  # Se sei Copywriter, es.
```

### Step 2: Leggi Input
- **Copywriter:** Leggi `/04-ux/UX_ARCHITECTURE_2026-03.md` (struttura pagine) + `/02-seo-geo/SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md` (Sezione 4-5-6 per FAQ e meta tags) + `/03-marketing/CONVERSION_STRATEGY_2026-03.md` (tone e messaging)
- **Coding:** Leggi `/04-ux/UX_ARCHITECTURE_2026-03.md` (componenti + wireframe) + `/02-seo-geo/SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md` (Sezione 3 per schema.org)

### Step 3: Crea Deliverable
Crea file nella **tua cartella**:
- Copywriter: `/05-copy/COPY_ALL_PAGES_2026-03.md`
- Coding: `/06-dev/DEV_BRIEF_2026-03.md`

### Step 4: Commit e Push
```bash
git add 05-copy/COPY_ALL_PAGES_2026-03.md
git commit -m "05-copy: COPY_ALL_PAGES (home, prima-donazione, faq, 5 blog articles) — 29 mar 2026"
git push origin 05-copy-26mar
```

### Step 5: Aggiorna STATUS.md
Comunica il completamento nel file `/STATUS.md`:
```markdown
| 05-copy | Copywriter (Claude) | COPY_ALL_PAGES_2026-03.md | ✅ COMPLETATO | 29 mar | Testi tutte pagine, 55 FAQ, meta tags |
```

---

## 📝 Commit Convention

Ogni commit deve seguire questo pattern:

```
[FASE]-[AGENTE]: [File(s)] ([Descrizione]) — [Data]

Esempi:
✅ 01-research: BENCHMARK_REPORT_2026-03.md (Analisi benchmark AVIS Italia + international) — 25 mar 2026
✅ 03-marketing: CONVERSION_STRATEGY_2026-03.md (Funnel 4 stadi, CTA primaria WhatsApp, KPI) — 26 mar 2026
✅ 04-ux: UX_ARCHITECTURE_2026-03.md (Sitemap, slider 8 slide, pagina prima donazione, 5 componenti) — 25 mar 2026
✅ 02-seo-geo: SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md (20 keyword, content gap, 55 FAQ, 6 schema, AI-specific opt) — 26 mar 2026
⏳ 05-copy: COPY_ALL_PAGES_2026-03.md (Testi home, dona, prima-donazione, diventa-donatore, posso-donare, faq, blog) — 29 mar 2026
⏳ 06-dev: DEV_BRIEF_2026-03.md (Schema.org templates, GA4 setup, componenti custom, automation) — 01 apr 2026
```

---

## 🎓 Documenti Essenziali

### 1. BRIEF.md (Master)
**Leggi PRIMA di qualsiasi cosa.** Contiene:
- Contesto AVIS Frosinone
- Problemi attuali del sito
- Target audience (Gen Z 18-35)
- Vincoli tecnici (Joomla 6 + Helix Ultimate)
- Definition of Done

### 2. SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md
**Input critico per Copywriter e Coding.** Contiene:
- Sezione 1: 20 keyword ricercate (per Copywriter)
- Sezione 3: Schema.org templates (per Coding)
- Sezione 4: 55 FAQ outline (per Copywriter)
- Sezione 5: 20 meta title/description (per Copywriter)
- Sezione 6: AI-specific optimization (per Copywriter tone)
- Sezione 10: KPI tracking (per Project Manager)

### 3. UX_ARCHITECTURE_2026-03.md
**Input per Copywriter (struttura pagine) e Coding (wireframe).** Contiene:
- Sitemap completa
- Wireframe home slider (8 slide)
- Wireframe pagina "Prima Donazione"
- Specifiche componenti UI (whatsapp_sticky, blood_stock_bar, eligibility_quiz, ecc.)

### 4. CONVERSION_STRATEGY_2026-03.md
**Input per Copywriter (tone, messaging, funnel).** Contiene:
- UVP positioning
- 4 stadi funnel (Awareness, Consideration, Intent, Action)
- CTA strategy
- Gestione obiezioni (10 principali)

---

## ✅ Checklist Agenti — Cosa Fare Dopo

### 📋 Copywriter (Claude) — Scadenza 29 mar EOD

**Input:**
- CONVERSION_STRATEGY_2026-03.md (tone, messaging, obiezioni)
- UX_ARCHITECTURE_2026-03.md (struttura pagine)
- SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md (Sezione 4, 5, 6)

**Output — Crea `/05-copy/COPY_ALL_PAGES_2026-03.md` con:**
```
1. Pagine Pillar (4)
   ├─ /dona (hub informativo)
   ├─ /prima-donazione (landing Gen Z)
   ├─ /diventa-donatore (funnel step-by-step)
   └─ /posso-donare (idoneità quiz + requisiti)

2. FAQ Complete (55)
   ├─ 15 Prima Donazione
   ├─ 15 Requisiti e Idoneità
   ├─ 10 Sicurezza
   ├─ 10 Aspetti Pratici
   └─ 5 Post-Donazione

3. Blog Articles (5)
   ├─ Paura aghi — come superarla
   ├─ Donare fa male? — scienza dice no
   ├─ Tatuaggi — quando puoi donare
   ├─ Dieta pre-donazione — cosa mangiare
   └─ Requisiti 2026 — check veloce

4. Meta Tags (20)
   ├─ 20 Meta Title (55-60 char)
   └─ 20 Meta Description (155 char)

5. CTA Copy Precompilati
   ├─ WhatsApp primary
   ├─ WhatsApp secondary (urgenza)
   └─ Telefono fallback

6. Hero Sections + Section Headers
```

**Commit message:**
```
05-copy: COPY_ALL_PAGES_2026-03.md (Home, pagine pillar, 55 FAQ, 5 blog, meta tags, CTA) — 29 mar 2026
```

---

### 🔧 Coding (Jules) — Scadenza 01 apr EOD

**Input:**
- UX_ARCHITECTURE_2026-03.md (wireframe, componenti, mobile spec)
- SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md (Sezione 3 schema.org)
- COPY_ALL_PAGES_2026-03.md (una volta consegnato dal Copywriter)

**Output — Crea `/06-dev/DEV_BRIEF_2026-03.md` con:**
```
1. Schema.org Implementation
   ├─ MedicalWebPage (tutte pagine info)
   ├─ LocalBusiness (home, contatti, urgenza-sangue)
   ├─ FAQPage (/faq con 55 FAQ)
   ├─ BreadcrumbList (pagine depth > 1)
   ├─ NewsArticle (/news, /blog)
   └─ Person (profili medici /chi-siamo)

2. GA4 Event Tracking
   ├─ Click pulsante WhatsApp
   ├─ Click pulsante Telefono
   ├─ Scroll profondità pagina
   └─ Click CTA secondaria

3. Componenti Custom CSS/JS
   ├─ whatsapp_sticky (mobile)
   ├─ blood_stock_bar (urgenza dinamica)
   ├─ impact_counter (donazioni animate)
   ├─ eligibility_quiz (5 domande)
   └─ donor_testimonial (card donatore)

4. Automation
   ├─ dateModified automatico (settimanale)
   ├─ Contatore donazioni (widget dinamico)
   └─ Banner urgenza sangue (aggiornabile backoffice)

5. Mobile Optimization
   ├─ Breakpoint 320/768/1024
   ├─ Slider mobile behavior
   ├─ Sticky CTA mobile
   └─ Performance (lazy-load, defer JS)

6. HTML Templates
   ├─ home.html (nuovo slider 8 slide)
   ├─ prima-donazione.html
   ├─ posso-donare.html
   └─ faq.html (accordion)
```

**+ Subdirectory `/06-dev/HTML_TEMPLATES/`, `/06-dev/CSS_COMPONENTS.css`, `/06-dev/JS_INTERACTIONS.js`**

**Commit message:**
```
06-dev: DEV_BRIEF_2026-03.md + templates (Schema.org, GA4, componenti custom, mobile) — 01 apr 2026
```

---

## 🧪 QC Team — Scadenza 05 apr

**Input:**
- COPY_ALL_PAGES_2026-03.md (da Copywriter)
- DEV_BRIEF_2026-03.md (da Coding)

**Output — Crea `/TEST_REPORT_2026-04.md` con:**
```
1. Functional Testing
   ├─ Navigazione (home → dona → prima-donazione → contatti)
   ├─ CTA WhatsApp (funzione precompilato)
   ├─ FAQ accordion (open/close)
   └─ Mobile responsive (iOS Safari + Android Chrome)

2. SEO Audit
   ├─ 20 keyword positions Google
   ├─ Schema.org validation (Google Rich Results)
   ├─ Meta tags compliance
   └─ Core Web Vitals (LCP, CLS, FID)

3. Copy Review
   ├─ Grammatica italiana
   ├─ Tone consistency Gen Z
   ├─ CTA clarity
   └─ No broken links

4. AI Citation Test
   ├─ ChatGPT: avisfrosinone.it citato per "donare sangue frosinone"?
   ├─ Gemini: schema LocalBusiness riconosciuto?
   ├─ Perplexity: dateModified fresh?
   └─ Claude: contenuto approfondito citato?

5. Browser Compatibility
   ├─ Chrome 120+
   ├─ Firefox 120+
   ├─ Safari 17+
   └─ Edge 120+

6. Accessibility
   ├─ WCAG 2.1 AA
   ├─ Screen reader (NVDA)
   ├─ Keyboard navigation
   └─ Color contrast
```

---

## 🚀 Dopo il Launch

**10 apr: Beta Live**
- Monitoraggio KPI settimanale
- GA4 tracking verificato
- WhatsApp Business setup
- Newsletter setup per retention

**30 apr: Post-Launch Review**
- Analisi dati prime 3 settimane
- Ajustate di contenuto/UX in base a metriche
- Plan per Sezione "Continui a donare" (retention)

---

## 📞 Contatti Emergenza

| Ruolo | Nome/Contatto | Reperibilità |
|-------|---------------|------------|
| Project Manager | Claude PM | Sempre in chat |
| AVIS Ref. | [Nome] | Ufficio AVIS |
| Tech Lead | [Nome] | Slack |

---

## 📜 Changelog

### 26 mar 2026, 18:00
✅ Repository structure creato  
✅ README.md setup  
✅ BRIEF.md approvato (in coda)  
✅ 4 deliverable completati (research, marketing, ux, seo)  
⏳ Copywriter bloccato fino a merge status.md

### [Aggiungi qui i nuovi aggiornamenti]

---

## 📄 Licenza & Note

Repository privato AVIS Frosinone. Accesso limitato al team progetto.

**Ultimo aggiornamento:** 26 marzo 2026  
**Prossimo check:** 27 marzo 09:00 CET (dev inzia schema.org)
