# STATUS — Dashboard Progetto Real-Time
**avisfrosinone.it Restyling — Marzo 2026**

**Ultimo aggiornamento:** 26 marzo 2026, 18:30 CET  
**Prossimo check:** 27 marzo 2026, 09:00 CET  
**Stato generale:** 🟢 ON TRACK (4 di 6 fasi completate)

---

## 📊 PROGRESS DASHBOARD

```
FASE COMPLETAMENTO

01-research:   ██████████ 100% ✅ (25 mar - COMPLETATO)
02-seo-geo:    ██████████ 100% ✅ (26 mar - COMPLETATO) 
03-marketing:  ██████████ 100% ✅ (26 mar - COMPLETATO)
04-ux:         ██████████ 100% ✅ (25 mar - COMPLETATO)
05-copy:       ░░░░░░░░░░   0% ⏳ (BLOCCO: STATUS MERGE)
06-dev:        ░░░░░░░░░░   0% ⏳ (BLOCCO: SCHEMA DESIGN)
07-qc:         ░░░░░░░░░░   0% ⏳ (BLOCCO: DEV COMPLETE)

TARGET: 100% entro 10 apr (16 giorni rimanenti)
```

---

## 🎯 KPI PRINCIPALE — MONITORA QUESTO

| Metrica | Baseline | Target | Status | ETA |
|---------|----------|--------|--------|-----|
| **Prime donazioni/mese** | 8-10 | 20-30 (mese 1) | ⏳ Lancio 10 apr | 10 apr |
| **Lead WhatsApp qual.** | 5/mese | 30/mese | ⏳ Setup GA4 | 01 apr |
| **Posizione "donare sangue frosinone"** | #12 | #5-6 | ⏳ Post-launch | 20 apr |
| **Citazioni AI** | 0 | 3-5/mese | ⏳ Post-launch | 15 apr |

---

## 📈 TIMELINE DETTAGLIATA

### ✅ COMPLETATO (Passato)

**25 MARZO — Research Completato**
```
Deliverable: BENCHMARK_REPORT_2026-03.md
Agente: Researcher (Gemini)
Status: ✅ CONSEGNATO
Contenuto: Analisi 15 siti AVIS + 10 siti internazionali + competitor analysis
Impact: High — Input per tutti gli altri agenti
```

**26 MARZO — Marketing Completato**
```
Deliverable: CONVERSION_STRATEGY_2026-03.md
Agente: Marketing (DeepSeek)
Status: ✅ CONSEGNATO
Contenuto: UVP + 4-stage funnel + CTA architecture + 10 obiezioni
Impact: High — Definisce tone e messaging per Copywriter
```

**25 MARZO — UX Completato**
```
Deliverable: UX_ARCHITECTURE_2026-03.md
Agente: UX (ChatGPT)
Status: ✅ CONSEGNATO
Contenuto: 5 principi + sitemap + wireframe home/prima-donazione + 5 componenti
Impact: High — Guida per Copywriter (struttura) e Coding (implementazione)
```

**26 MARZO — SEO/AI Completato**
```
Deliverable: SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md
Agente: SEO/AI (Claude PM)
Status: ✅ CONSEGNATO (EARLY)
Contenuto: 20 keyword + gap analysis + 55 FAQ + 6 schema.org + AI-specific opt
Impact: CRITICO — Input per Copywriter (Sezione 4-5-6) e Coding (Sezione 3)
```

---

### ⏳ IN CORSO / IN CODA

**27 MARZO — Dev Inizia Schema.org**
```
Agente: Coding (Jules)
Attività: Implementazione JSON-LD (non aspetta copy)
Input: SEO_GEO_STRATEGY_2026-03_v2_COMPLETA (Sezione 3)
Output Atteso: 6 schema.org templates implementati in Joomla
Blocco: NESSUNO (può iniziare subito)
Scadenza: 30 mar (for integrazione con copy)
```

**28 MARZO — Copywriter Bozza Pagine Pillar**
```
Agente: Copywriter (Claude)
Attività: First draft home + /dona + /prima-donazione
Input: CONVERSION_STRATEGY + UX_ARCHITECTURE + SEO_GEO_STRATEGY
Blocco: STATUS MERGE (attende che questo file sia su GitHub)
Target: Condividi bozze su repo per review
Scadenza: 29 mar EOD (full delivery)
```

**29 MARZO — Copywriter Consegna COMPLETA**
```
Agente: Copywriter (Claude)
Attività: Delivery finale COPY_ALL_PAGES_2026-03.md
Contenuto:
  ✅ Home page
  ✅ 4 pagine pillar (/dona, /prima-donazione, /diventa-donatore, /posso-donare)
  ✅ 55 FAQ (short + long)
  ✅ 5 blog articles
  ✅ 20 meta title/description
  ✅ Profili medici
  ✅ CTA precompilati
Scadenza: **29 MAR EOD** (CRITICO — non spostabile)
Blocco: NESSUNO (input tutto disponibile)
```

**30 MARZO — Dev Integra Copy + Schema**
```
Agente: Coding (Jules)
Attività: Merge copy + schema + GA4 setup
Input: COPY_ALL_PAGES_2026-03.md (da Copywriter)
Output Atteso: HTML templates completati
Scadenza: 30 mar (target) / 01 apr (max slippage)
```

**01 APRILE — Dev Consegna COMPLETA**
```
Agente: Coding (Jules)
Attività: Delivery finale DEV_BRIEF_2026-03.md
Contenuto:
  ✅ 6 schema.org implementati
  ✅ GA4 event tracking
  ✅ 5 componenti custom
  ✅ HTML templates
  ✅ CSS custom
  ✅ JS interazioni
  ✅ Automation
Scadenza: **01 APR EOD** (CRITICO — non spostabile)
```

**02-05 APRILE — QC Testing**
```
Agente: QC Team
Attività: Functional test + SEO audit + copy review + accessibility
Input: Dev brief + Copy
Output Atteso: TEST_REPORT_2026-04.md
Scadenza: 05 apr
Blocco: Aspetta Dev (01 apr)
```

**10 APRILE — LAUNCH BETA**
```
Attività: Deploy a production
Status: 🚀 TARGET DATE
Blocco: NESSUNO (se timeline rispettate)
```

---

## 🔗 DEPENDENCY GRAPH

```
┌─ RESEARCH (25 mar) ✅
│
├─→ MARKETING (26 mar) ✅
│    └─→ COPYWRITER (29 mar) ⏳
│         └─→ DEV Integration (30 mar) ⏳
│              └─→ QC (05 apr) ⏳
│                   └─→ LAUNCH (10 apr) 🚀
│
├─→ UX (25 mar) ✅
│    ├─→ COPYWRITER (29 mar) ⏳ [input struttura]
│    └─→ DEV (27 mar inizio) ⏳ [input wireframe + componenti]
│         └─→ DEV Complete (01 apr) ⏳
│              └─→ QC (05 apr) ⏳
│                   └─→ LAUNCH (10 apr) 🚀
│
└─→ SEO/AI (26 mar) ✅
     ├─→ COPYWRITER (29 mar) ⏳ [input FAQ outline + meta]
     ├─→ DEV (27 mar inizio) ⏳ [input schema.org]
     └─→ COPYWRITER Tone (29 mar) ⏳ [input AI-specific]
```

**Percorso Critico:** MARKETING → COPYWRITER → DEV → QC → LAUNCH

Se Copywriter slippa 2 giorni:
- Dev slippa 2 giorni
- QC slippa 2 giorni
- Launch è a rischio (CONTENUTO)

---

## ⚠️ BLOCCHI ATTUALI

### BLOCCO #1: Repository Non Aggiornato
**Severity:** 🔴 CRITICO  
**Causa:** README + BRIEF + STATUS + Deliverable doc non su GitHub  
**Impatto:** Agenti non vedono struttura, duplicazione lavoro  
**Soluzione:** PM (tu) pushari tutto adesso  
**Timeline:** SUBITO (30 min)  
**Owner:** Project Manager (tu)

```
AZIONI IMMEDIATE:
1. Clone repo: git clone https://github.com/MarkBlackBlue/avis-frosinone-restyling.git
2. Copia tutto da /home/claude/avis-repo-structure/ in repo locale
3. git add .
4. git commit -m "00-setup: Repository structure + README + BRIEF + STATUS (initial) — 26 mar 2026"
5. git push origin main
```

### BLOCCO #2: Copywriter Aspetta STATUS Merge
**Severity:** 🟠 MEDIO  
**Causa:** Copywriter vuol vedre struttura del progetto prima di partire  
**Impatto:** Slippage 1-2 ore (non critico)  
**Soluzione:** Merge STATUS.md adesso  
**Timeline:** 1-2 ore  
**Owner:** Project Manager (tu)

---

## 📋 CHECKLIST IMMEDIATA — Prossime 24 ore

### PER PROJECT MANAGER (Tu)

**ENTRO OGGI (26 mar 18:00 CET):**
- [ ] Clone repo GitHub
- [ ] Copia file repo structure in locale
- [ ] Crea branches per ogni agente (05-copy-26mar, 06-dev-26mar, ecc.)
- [ ] Push README + BRIEF + STATUS
- [ ] Notifica Copywriter: "Repo aggiornato, puoi iniziare"
- [ ] Notifica Dev: "Schema.org templates pronti in Sezione 3, inizia subito"

**DOMANI (27 mar 09:00 CET):**
- [ ] Check Dev ha iniziato schema.org
- [ ] Verifica nessun blocco Copywriter
- [ ] Update STATUS.md (avanzamento)

### PER COPYWRITER (Claude)

**BLOCCO IMMEDIATO:** Aspetta merge STATUS.md (1-2 ore max)

**APPENA MERGE:**
- [ ] Leggi BRIEF.md (10 min)
- [ ] Leggi SEO_GEO_STRATEGY Sezione 4-5-6 (20 min)
- [ ] Leggi CONVERSION_STRATEGY (15 min)
- [ ] Leggi UX_ARCHITECTURE Sezione 3 (15 min)
- [ ] Crea file `/05-copy/COPY_ALL_PAGES_2026-03.md`
- [ ] Inizia Home page (scadenza Sezione 1)
- [ ] Parallelamente: Scrivi 55 FAQ (scadenza Sezione 2)

**DEADLINE:** 29 mar EOD

### PER DEV (Jules)

**BLOCCO:** NESSUNO — Puoi partire SUBITO

**AZIONI IMMEDIATE (27 mar 09:00):**
- [ ] Leggi BRIEF.md (10 min)
- [ ] Leggi SEO_GEO_STRATEGY Sezione 3 (schema.org) (20 min)
- [ ] Leggi UX_ARCHITECTURE Sezione 3 (wireframe home) (15 min)
- [ ] Crea file `/06-dev/DEV_BRIEF_2026-03.md`
- [ ] Sezione 1: Implementa MedicalWebPage + LocalBusiness (prima prioriy)
- [ ] Parallelo: Setup GA4 event tracking (non-dipendente da copy)

**DEADLINE:** 01 apr EOD

---

## 🔴 RISCHI IDENTIFICATI

| Rischio | Probability | Impact | Mitigation |
|---------|------------|--------|-----------|
| Copywriter slippa deadline (29 mar) | 🟡 MEDIA (30%) | 🔴 CRITICO | Backup copy template, Coding fa bozza da SEO_GEO FAQ outline |
| Dev incontra problema Joomla schema.org | 🟡 MEDIA (25%) | 🟠 ALTO | Fallback: CSS comment schema.org, Joomla plugin ricerca |
| QC trova bugs critico (31 mar-05 apr) | 🟢 BASSA (10%) | 🔴 CRITICO | Extra 3-5 giorni slippage, launch 13-15 apr invece 10 |
| Copywriter non capisce "AI-specific tone" | 🟡 MEDIA (20%) | 🟡 MEDIO | PM fornisce esempi concreti, revision loop 1-2 round |

---

## 📊 METRICHE SETTIMANALI (Tracking)

### SETTIMANA 1: 25-29 Marzo
**Obbiettivo:** 5 di 6 fasi consegnate (manca QC)

| Metrica | Target | Status | Note |
|---------|--------|--------|------|
| Research completato | 100% | ✅ 100% | On time |
| Marketing completato | 100% | ✅ 100% | On time |
| UX completato | 100% | ✅ 100% | On time |
| SEO completato | 100% | ✅ 100% | EARLY (+1 gg) |
| Copy avanzamento | 20% | ⏳ 0% | Attesa merge (OK) |
| Dev avanzamento | 20% | ⏳ 5% | Schema.org started |
| Repository aggiornato | 100% | ⏳ 10% | IN CORSO |

### SETTIMANA 2: 30 Mar - 05 Aprile
**Obbiettivo:** Copy + Dev completati, QC iniziato

| Metrica | Target | Status | Note |
|---------|--------|--------|------|
| Copy completato | 100% | ⏳ Target 29 mar |  |
| Dev completato | 100% | ⏳ Target 01 apr |  |
| QC avanzamento | 80% | ⏳ Target 05 apr |  |
| Deploy staging | 100% | ⏳ Target 05 apr |  |

### SETTIMANA 3: 06-10 Aprile
**Obbiettivo:** QC fine, Deploy production

| Metrica | Target | Status | Note |
|---------|--------|--------|------|
| QC completato | 100% | ⏳ Target 05 apr |  |
| AVIS Review | Approved | ⏳ Target 07 apr |  |
| Deploy prod | Done | ⏳ Target 10 apr |  |
| Monitoring setup | 100% | ⏳ Target 10 apr |  |

---

## 📞 ESCALATION CONTACTS

**Se qualcosa blocca:**

| Situazione | Contatta | Urgenza |
|-----------|----------|---------|
| Copy-blocking issue | PM (Claude) | ALTA |
| Dev tech issue (Joomla) | Tech Admin AVIS | ALTA |
| Copy review request | PM (Claude) | MEDIA |
| SEO question | PM (Claude) | MEDIA |

---

## 🔄 COME AGGIORNARE QUESTO FILE

**Frequenza:** Giornaliera (09:00 CET)

**Chi:** Project Manager

**Template update:**
```markdown
### UPDATE — [DATA] [AGENTE]
Status: [Cosa fatto]
Blocchi: [Nuovi blocchi?]
Prossimo: [Cosa aspettarsi domani]
```

---

## 📝 UPDATE LOG

### 26 MAR 18:30 — Setup Iniziale
```
✅ Completati: Research, Marketing, UX, SEO
⏳ In coda: Copy (blocco STATUS merge), Dev, QC
🎯 Timeline: ON TRACK
⚠️ Risk: Copy deadline 29 mar (CRITICO)
👉 Next: PM pubblica repo con README + BRIEF + STATUS
```

### [Aggiungi qui gli update futuri]

---

**Dashboard aggiornata continuamente — Consulta ogni giorno.**

*Ultima sincronizzazione: 26 marzo 2026, 18:30 CET*
