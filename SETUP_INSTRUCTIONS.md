# SETUP INSTRUCTIONS — Come Pushare il Repository
**Per:** Project Manager (Tu)  
**Quando:** SUBITO (26 marzo 2026, 19:00-20:00 CET)  
**Tempo stimato:** 15 minuti  
**Criticità:** 🔴 CRITICO — Blocca inizio Copywriter

---

## PRE-REQUISITI

Assicurati di avere:
- [ ] Git installato (`git --version`)
- [ ] Accesso a GitHub come proprietario del repo
- [ ] Credenziali GitHub configurate (`git config user.name`, `git config user.email`)

---

## STEP-BY-STEP SETUP

### STEP 1: Clone Repo Locale (5 min)

```bash
# Vai nella cartella dove vuoi il progetto
cd ~/Documents  # o dove preferisci

# Clone il repository
git clone https://github.com/MarkBlackBlue/avis-frosinone-restyling.git

# Entra in cartella
cd avis-frosinone-restyling

# Verifica stato
git status
```

**Output atteso:**
```
On branch main
nothing to commit, working tree clean
```

---

### STEP 2: Copia Intera Struttura (3 min)

```bash
# Copia TUTTI i file da /home/claude/avis-repo-structure/ al tuo repo locale
# Su Mac/Linux:
cp -r /home/claude/avis-repo-structure/* .

# Su Windows PowerShell:
Copy-Item -Path "/home/claude/avis-repo-structure/*" -Destination "." -Recurse -Force

# Verifica che i file siano presenti:
ls -la
```

**Output atteso:**
```
-rw-r--r-- BRIEF.md
-rw-r--r-- README.md
-rw-r--r-- STATUS.md
-rw-r--r-- .gitignore
drwxr-xr-x 01-research/
drwxr-xr-x 02-seo-geo/
drwxr-xr-x 03-marketing/
drwxr-xr-x 04-ux/
drwxr-xr-x 05-copy/
drwxr-xr-x 06-dev/
```

---

### STEP 3: Verifica Contenuto (2 min)

```bash
# Verifica che i file critici esistono
ls -lh BRIEF.md README.md STATUS.md
ls -lh 01-research/BENCHMARK_REPORT_2026-03.md
ls -lh 02-seo-geo/SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md
ls -lh 03-marketing/CONVERSION_STRATEGY_2026-03.md
ls -lh 04-ux/UX_ARCHITECTURE_2026-03.md

# Verifica che i TODO file per agenti siano pronti
ls -lh 05-copy/TODO_COPY.md
ls -lh 06-dev/TODO_DEV.md
```

**Output atteso:** Tutti i file listati con dimensioni > 0 bytes

---

### STEP 4: Git Add, Commit, Push (5 min)

```bash
# Aggiungi TUTTO al staging
git add .

# Verifica cosa stai per committare
git status

# Verifica che sia OK (niente file .env o sensibili)
```

**Output atteso:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  new file:   BRIEF.md
  new file:   README.md
  new file:   STATUS.md
  new file:   .gitignore
  new file:   01-research/BENCHMARK_REPORT_2026-03.md
  new file:   02-seo-geo/SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md
  ... ecc
```

**Se tutto OK, continua:**

```bash
# Commit con messaggio descrittivo
git commit -m "00-setup: Repository structure + master docs (BRIEF, README, STATUS) + 4 deliverable (research, marketing, ux, seo) — 26 mar 2026"

# Push a GitHub
git push origin main

# Verifica success
git log --oneline | head -3
```

**Output atteso:**
```
a1b2c3d (HEAD -> main, origin/main) 00-setup: Repository structure + master docs...
f4e5d6c Initial commit
```

---

### STEP 5: Verifica su GitHub (2 min)

1. **Apri GitHub nel browser:**
   ```
   https://github.com/MarkBlackBlue/avis-frosinone-restyling
   ```

2. **Verifica che vedi:**
   - ✅ README.md file con contenuto
   - ✅ BRIEF.md file con contenuto
   - ✅ STATUS.md file con contenuto
   - ✅ Cartelle 01-research, 02-seo-geo, 03-marketing, 04-ux, 05-copy, 06-dev
   - ✅ File dentro ogni cartella (es. BENCHMARK_REPORT_2026-03.md in 01-research)

3. **Controlla il commit:**
   - Click su "Code" → "Commits"
   - Verifica che c'è il commit "00-setup: Repository structure..."

---

## AZIONI IMMEDIATE DOPO PUSH

Una volta che hai pushato con successo:

### 1. Notifica Copywriter (5 min)

**Messaggio:**
```
@Claude Copywriter

Repository è LIVE ✅

Puoi iniziare a scrivere COPY_ALL_PAGES_2026-03.md

Input disponibili:
✅ BRIEF.md — contesto completo
✅ SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md — Sezione 4-5-6 per FAQ/meta/tone
✅ CONVERSION_STRATEGY_2026-03.md — positioning + funnel
✅ UX_ARCHITECTURE_2026-03.md — struttura pagine

Checklist di input è in: /05-copy/TODO_COPY.md

Deadline: 29 MAR EOD (3 giorni per scrivere)

Repository: https://github.com/MarkBlackBlue/avis-frosinone-restyling

Pronto?
```

### 2. Notifica Dev (5 min)

**Messaggio:**
```
@Jules Coding

Repository è LIVE ✅

Puoi iniziare SUBITO con schema.org (nessun blocco!)

Input disponibili ORA:
✅ SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md Sezione 3 — 6 schema.org template (COPIA DIRETTA)
✅ UX_ARCHITECTURE_2026-03.md Sezione 6-7 — componenti spec + mobile

Checklist di input è in: /06-dev/TODO_DEV.md

Timeline:
- 27 mar: Schema.org + GA4 start (2-3 ore)
- 28-29 mar: Componenti custom + parallelo
- 30 mar: Integra copy (quando arriva)
- 01 apr: Delivery

Deadline: 01 APR EOD

Repository: https://github.com/MarkBlackBlue/avis-frosinone-restyling

Pronti?
```

### 3. Update Progetto Status (1 min)

Modifica `/STATUS.md`:
```markdown
### UPDATE — 26 MAR 20:00 — Repository LIVE
✅ **Repository aggiornato con struttura completa**
- Master docs: BRIEF + README + STATUS
- 4 deliverable completati: Research, Marketing, UX, SEO
- TODO file per agenti (Copy, Dev)
- .gitignore configurato

✅ **Copywriter può partire** (input complete)
✅ **Dev può partire** (input complete, nessun blocco)

⏳ **Timeline:** On track per lancio 10 aprile
```

```bash
# Commit questa modifica
git add STATUS.md
git commit -m "status: UPDATE — Repository LIVE (26 mar 20:00)"
git push origin main
```

---

## TROUBLESHOOTING

### Problema: "Authentication failed"
**Soluzione:**
```bash
# Se usi SSH, verifica chiavi:
ssh -T git@github.com

# Se usi HTTPS, salva credenziali:
git config --global credential.helper store
# Poi fai git pull (ti chiede username/token)
```

### Problema: "Merge conflict"
**Non dovrebbe accadere, ma se accade:**
```bash
# Resolve conflicts manualmente, poi:
git add .
git commit -m "resolve: merge conflicts"
git push origin main
```

### Problema: "File non visto dopo push"
**Soluzione:**
```bash
# Force refresh GitHub
git push origin main --force-with-lease

# Oppure aspetta 5-10 secondi e refresh browser
```

---

## CHECKLIST FINALE

Dopo il push, verifica:

- [ ] GitHub repo è aggiornato (visibile online)
- [ ] README.md renderizza correttamente
- [ ] BRIEF.md è completo e leggibile
- [ ] STATUS.md mostra stato attuale
- [ ] Tutti i 6 agenti hanno cartella + TODO file
- [ ] SEO_GEO_STRATEGY è presente in 02-seo-geo/
- [ ] Copywriter ha been notified
- [ ] Dev ha been notified
- [ ] STATUS.md aggiornato con "LIVE" timestamp

---

## TIMELINE PER MEMORIA

**26 mar 20:00 — Tu (PM) pushare adesso** ← SIAMO QUI
**26 mar 22:00 — Copywriter + Dev notificati**
**27 mar 09:00 — Dev inizia schema.org (non aspetta copy)**
**29 mar EOD — Copywriter consegna COPY_ALL_PAGES** ← DEADLINE COPY
**30 mar — Dev integra copy**
**01 apr EOD — Dev consegna DEV_BRIEF** ← DEADLINE DEV
**02-05 apr — QC testing**
**10 apr — 🚀 LAUNCH BETA**

---

## COMANDO UNICO (Se Veloce)

Se vuoi farlo tutto in una riga:

```bash
cd ~/Documents && git clone https://github.com/MarkBlackBlue/avis-frosinone-restyling.git && cd avis-frosinone-restyling && cp -r /home/claude/avis-repo-structure/* . && git add . && git commit -m "00-setup: Repository structure + master docs + 4 deliverable (research, marketing, ux, seo) — 26 mar 2026" && git push origin main && echo "✅ PUSH SUCCESS" && git log --oneline | head -1
```

---

## SUPPORTO

Se hai problemi durante il setup:

1. **Git error:** Google il messaggio di errore + "git"
2. **File missing:** Verifica che /home/claude/avis-repo-structure/ esiste (`ls -la /home/claude/avis-repo-structure/`)
3. **GitHub auth:** Usa personal access token (Settings → Developer Settings → Tokens)

---

**Tempo stimato totale: 15-20 minuti**

**Esegui ADESSO. Blocca Copywriter se non fatto.**

*Una volta completato, rispondi: "✅ Repository aggiornato — Team può procedere"*
