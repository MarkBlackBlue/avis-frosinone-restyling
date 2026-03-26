BRIEF — Restyling avisfrosinone.it
Documento Master del Progetto · Versione 2.0 · 26 Marzo 2026
Repository: https://github.com/MarkBlackBlue/avis-frosinone-restyling
________________________________________
1. EXECUTIVE SUMMARY (2 minuti)
Missione: Trasformare avisfrosinone.it da brochure statica a hub di conversione per nuovi donatori (Gen Z 18-35).
Obiettivo primario: 3x prime donazioni entro 3 mesi (da 8-10 a 20-30/mese).
Leve strategiche:
SEO locale — Posizionamento #1-3 per "donare sangue frosinone"
AI citability (GEO) — Citato da ChatGPT/Gemini/Perplexity come fonte autorevole
Conversione WhatsApp-first — Ridurre attrito da form complessi
Rassicurazione Gen Z — Affrontare barriere specifiche (paura aghi, tatuaggi, farmaci)
________________________________________
2. CONTESTO CLIENTE
2.1 Chi è AVIS Comunale di Frosinone
Sezione comunale dell'Associazione Volontari Italiani del Sangue
Missione: Promuovere la cultura della donazione volontaria, gratuita e anonima del sangue e del plasma
Attività: Raccolte sangue, banchetti informativi, attività scolastiche, formazione volontari, eventi beneficenza
Contatto operativo: WhatsApp/Tel. +39 377 490 1081
Codice Fiscale: 92001460606 (usato per il 5×1000)
Partner istituzionali: Seeweb (hosting/tech), Duferco Energia
Team: 20-30 volontari formati, coordinamento con ASL e ospedali locali
2.2 Situazione Attuale
Table
Elemento	Stato
URL	https://avisfrosinone.it

CMS	Joomla 6 (upgradato dal 5)
Template	Helix Ultimate (custom CSS)
Traffico stimato	100-150 visite/mese
Lead conversioni	5-10 contatti/mese (WhatsApp, telefono, form)
Prime donazioni	8-10/mese (tasso conversione ~40%)
Posizione Google "donare sangue frosinone"	#12
2.3 Componenti Joomla Attuali
Akeeba Backup, iCagenda 4.04, Route66, Slideshow CK, SP Page Builder Light, AcyMailing, Schema.org, VisForms, OSMap, Cookie CK, Regular Lab Sourcerer
2.4 Struttura Sezioni Attuali
Table
#	Sezione	Contenuto
1	Chi siamo	Storia AVIS, statuto, organigramma, sede, recapiti
2	La donazione	Info preliminari, perché donare, come e dove, tipi di donazione, diventa donatore, documenti necessari, gruppi sanguigni
3	Iniziative	Eco Food Fertility, corsi, convenzioni con partner
4	Comunicazione	Notizie (blog), galleria foto, calendario eventi
________________________________________
3. OBIETTIVI STRATEGICI (ordinati per priorità)
Table
Priorità	Obiettivo	KPI Target	Timeline
OB-1	Aumentare i donatori di sangue e plasma — Convertire visitatori in donatori attivi con percorso chiaro: scoperta → informazione → azione	Prime donazioni: 8-10 → 20-30/mese (+200-300%)	3 mesi
OB-2	Aumentare iscrizioni soci/volontari — Percorso evidente e semplice per diventare socio AVIS o volontario non-donatore	Nuovi soci: +30% a 6 mesi	6 mesi
OB-3	Essere citato dalle AI come fonte autorevole (GEO) — ChatGPT, Claude, Gemini, Perplexity citano avisfrosinone.it per query su donazione sangue a Frosinone	Almeno 1 AI cita il sito mensilmente	2 mesi
OB-4	Scalare su Google per ricerche locali e tematiche — Posizionarsi per "donazione sangue Frosinone", "AVIS Frosinone", "gruppi sanguigni compatibilità", ecc.	Top 3 a 6 mesi (da #12)	6 mesi
________________________________________
4. TARGET AUDIENCE — Gen Z Donatori Potenziali
4.1 Profilo Primario
Età: 18-35 anni (Gen Z + millennial giovane)
Geografia: Frosinone + provincia (Ferentino, Ceccano, Alatri)
Stato: Inesperti (mai donato prima)
Intento: Curiosi, ma con paura/dubbi/obiezioni
4.2 Barriere Identificate (in ordine di importanza)
Table
Barriera	% Gen Z	Soluzione
Paura degli aghi	50%	Rassicurazione scientifica + video
"Non so se sono idoneo"	30%	Quiz 30 secondi
"Non ho tempo"	20%	Mostrare durata 1h15min (under 1 film)
Tatuaggio recente	15%	Spiegare regola 4 mesi chiaramente
"Prendo farmaci"	10%	Verificazione rapida WhatsApp
4.3 Psicografia
Informati online (Google, social)
Preferiscono WhatsApp a form
Sensibili a "proof locale" (amici che hanno donato)
Vogliono solidarietà tangibile ("salvo vite") vs generica
________________________________________
5. PUNTI DEBOLI CRITICI DA RISOLVERE
Table
Problema	Impatto	Priorità
Zero ottimizzazione AI (GEO)	Non citato da motori generativi	Alta
Nessuna strategia di conversione	Mancano funnel chiari, CTA gerarchizzate, urgency trigger	Alta
Contenuti statici	Nessun aggiornamento regolare, blog inattivo	Media
Autorevolezza istituzionale nascosta	Dati impatto (donazioni, vite salvate) assenti	Alta
Nessun contenuto educativo citabile	Mancano guide approfondite, FAQ strutturate	Alta
Nessun dato dinamico	Scorte sangue, prossime raccolte, contatori in tempo reale assenti	Media
Mobile non ottimizzato	Layout funziona ma non mobile-first	Media
Velocità non monitorata	Core Web Vitals sconosciuti	Media
Accessibilità non verificata	WCAG 2.1 non testato sistematicamente	Bassa
________________________________________
6. ARCHITETTURA HOME PAGE — SLIDER 10 SEZIONI
6.1 Concetto
Full-page slider verticale a 10 sezioni, implementato con HTML/CSS/JS custom caricato tramite modulo Joomla ({loadmoduleid 111}). JS inserito come modulo Joomla.
Asset da evolvere, non eliminare — è l'elemento distintivo del sito.
6.2 Le 10 Slide
Table
Slide	Tema	Contenuto	Tema Colore
01	Chi siamo	Headline istituzionale + dati impatto (1.800 pazienti/giorno, 7.000 sacche)	red #e30513
02	Dona il sangue	Benefici donazione + 3 link approfondimento	red #e30513
03	Prossima raccolta	Calendario eventi (modulo iCagenda)	blue AVIS blue
04	Diventa donatore	Requisiti + 3 step per iscriversi	red #e30513
05	5×1000	Codice fiscale + istruzioni	gold #e6c619
06	Diventa volontario	Attività di volontariato disponibili	orange #d45500
07	FAQ	3 domande frequenti in anteprima	light-grey #cbcbcb
08	Gruppi sanguigni	Griglia 8 gruppi con percentuali italiane	bordeaux #6b0020
09	News & Blog	3 articoli recenti in anteprima	paper #f0ebe3
10	Convenzioni	Partner e vantaggi per i soci	accent scuro
6.3 Navigazione Slider
Mouse wheel / trackpad: avanza/torna tra slide
Tastiera: ArrowDown/Up, PageDown/Up, Home/End
Touch swipe: supportato (threshold 50px)
Nav dots: fissi a destra, con tooltip al hover
Progress bar: fissa in alto, avanza con le slide
Contatore: fisso in basso a sinistra (es. "3 / 10")
________________________________________
7. VINCOLI TECNICI
7.1 Non Negoziabili (Stack Obbligatorio)
Table
Elemento	Vincolo
CMS	Joomla 6 (deve restare)
Template	Helix Ultimate — variabili CSS globali (--avis-red, --avis-blue, --font-heading, --font-body, --white, --text-dark, --text-medium, --border-radius) definite lì, non ridefinire in CSS custom
Moduli esistenti	iCagenda, sistema articoli, gestione utenti devono funzionare
Slider home	Da evolvere, non eliminare
Logo	AVIS rosso #e30513 + blu #004C97 (non modificare)
Dominio	avisfrosinone.it (mantenere)
SSL	HTTPS obbligatorio
7.2 Limitazioni Budget
❌ Zero budget pubblicità — Tutto organic (SEO + social + word-of-mouth)
❌ Nessun app mobile — Solo web responsive
❌ Nessun e-commerce — No booking online (solo WhatsApp/telefono)
❌ Nessun CRM sofisticato — WhatsApp Business o Google Workspace come CRM
7.3 Opportunità Tecniche
✅ JSON-LD schema markup (Organization, LocalBusiness, FAQPage, Article, Event)
✅ Lazy loading sistematico per immagini
✅ Ottimizzazione Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
✅ Service Worker per caching e offline resilience
✅ Google Maps integrazione (schema LocalBusiness)
✅ Open Graph e Twitter Card tags sistematici
________________________________________
8. TONO DI VOCE E IDENTITÀ
8.1 Brand Values
Altruismo: il dono come atto gratuito e libero
Comunità: "unisciti a chi dona"
Sicurezza: la donazione è sicura, monitorata, gratuita
Continuità: il bisogno di sangue è quotidiano, non straordinario
8.2 Tono di Voce (Target: Gen Z 18-35, mai donato)
⚖️ Scienza + Amicizia + Zero Burocrazia
Table
✅ Da usare	❌ Da evitare
"Aghi sottilissimi: la puntura 3 secondi"	"Procedure mediche sono minimamente invasive"
"Abbiamo volontari formati che ti distraggono durante"	"Personale qualificato addetto alla distrazione psicologica"
"Tatuaggi negli ultimi 4 mesi? Torna dopo. Niente stress."	"I tatuaggi comportano vincoli normativi per 4 mesi dalla data"
"WhatsApp, mandiamo messaggio, ti rispondiamo in 10 minuti"	"Contatto tramite chat istantanea con tempo di risposta garantito"
"dono volontario"	"donazione obbligatoria" o transazionale
"cultura del dono", "community di donatori", "gesto semplice, sicuro, gratuito"	"Purtroppo", "Speriamo"
"Frosinone" (sempre esplicitato per SEO locale)	Statistiche nazionali generiche senza ancoraggio locale
Regole stilistiche:
Frasi brevi (max 15 parole)
Paragrafi brevi (max 3 frasi)
CTA chiara e urgente: "Prenota su WhatsApp adesso" (non "Contattaci per prenotare")
________________________________________
9. KPI DI SUCCESSO E METRICHE
9.1 Conversione Primaria
Table
Metrica	Baseline (Mar 2026)	Target 3 mesi	Target 6 mesi	Strumento
Prime donazioni/mese	8-10	20-30	40-50	CRM/WhatsApp
Click WhatsApp home	30-50/mese	150/mese	250/mese	Click tracking btn-whatsapp
Lead WhatsApp qualificati	5/mese	30/mese	60/mese	CRM
Tasso conversione lead → donazione	~15%	40%	60%	CRM
Tempo medio pagina /prima-donazione	-	1m30s	2+ min	Analytics
9.2 SEO + Authority
Table
Metrica	Baseline	Target 3 mesi	Target 6 mesi	Strumento
Posizione "donare sangue frosinone"	#12	#5-6	#2-3	Search Console
Traffico da keyword locali	50 visite/mese	300 visite/mese	600+ visite/mese	Analytics
Citazioni AI (ChatGPT/Gemini/Perplexity/Claude)	0	3-5/mese	8-10/mese	Monitor manuale mensile
Domain Authority (MozDom)	~15	20-22	25-30	Moz
Bounce rate home	70%	<50%	<40%	Analytics
Core Web Vitals LCP	-	< 2.5s	< 2.5s	PageSpeed Insights
Frequenza rimbalzo home	-	< 55%	< 55%	Analytics
Pagine/sessione	-	> 2.5	> 2.5	Analytics
________________________________________
10. TEAM DI AGENTI E WORKFLOW
10.1 Ruoli e Responsabilità
Table
Agente	Modello	Ruolo	Cartella Output	Stato
Project Manager	Claude	Coordinamento, brief, review	root	✅
Researcher	Gemini	Benchmark e analisi competitive	01-research/	✅ 25 mar
SEO/AI Agent	Perplexity	Keyword research + GEO strategy	02-seo-geo/	✅ 26 mar
Marketing Agent	DeepSeek	Conversion strategy + messaggi	03-marketing/	✅ 26 mar
UX Agent	ChatGPT	Architettura IA + wireframe	04-ux/	✅ 25 mar
Copywriter	Claude	Testi SEO/GEO ottimizzati	05-copy/	⏳ 29 mar
Coding Agent	Jules	Sviluppo Joomla/CSS/JS	06-dev/	⏳ 01 apr
QC Agent	Kimi	Review, audit, lista fix	07-qc/	⏳ 05 apr
10.2 Dipendenze e Flusso
plain
Copy
[Researcher] ──┐
               ├──→ [Marketing] ──┐
[SEO/AI]    ──┘                   ├──→ [Copywriter] ──→ [Coding] ──→ [QC]
               └──→ [UX]        ──┘
Table
Fase	Attività	Timeline
Fase 1	Researcher + SEO/AI Agent (parallelo)	✅ Completata
Fase 2	Marketing Agent + UX Agent (attende F1)	✅ Completata
Fase 3	Copywriter Agent (attende F1+F2)	⏳ 27-29 mar
Fase 4	Coding Agent (attende F2+F3)	⏳ 27 mar - 01 apr
Fase 5	QC Agent (attende F4)	⏳ 01-05 apr
Deploy	Staging → Review AVIS → Production	05-10 apr
________________________________________
11. CODICE ATTUALE DI RIFERIMENTO
Il codice di partenza è disponibile in assets-current/:
Table
File	Contenuto
assets-current/home.html	Markup completo delle 10 slide
assets-current/custom.css	CSS custom del template (2.200+ righe)
assets-current/slider.js	Logica JavaScript dello slider
Ogni agente deve leggere questi file prima di proporre modifiche, per garantire coerenza con l'esistente e rispettare le variabili CSS del template Helix Ultimate.
________________________________________
12. DEFINITION OF DONE PER AGENTE
12.1 Researcher ✅ (Completato 25 mar)
[x] Tabella benchmark 15+ siti AVIS italiani
[x] Analisi competitor internazionali (NHS, Red Cross, Lifeblood)
[x] 10 funzionalità internazionali assenti in Italia
[x] Gap analysis vs ASL, FrosinoneToday, AVIS nazionale
[x] Brief output per SEO/Marketing/UX agents
Output: BENCHMARK_REPORT_2026-03.md
12.2 SEO/AI Agent ✅ (Completato 26 mar)
[x] 20 keyword ricercate + volume + difficoltà + AI positioning
[x] Content Gap Analysis per ogni keyword
[x] 6 schema.org template pronti (JSON-LD)
[x] 55 FAQ strutturate con outline
[x] 20 meta title/description differenziati
[x] AI-specific optimization per ChatGPT, Gemini, Perplexity, Claude
[x] Internal link strategy
[x] KPI dashboard (baseline vs target)
Output: SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md
12.3 Marketing Agent ✅ (Completato 26 mar)
[x] UVP positioning ("siamo i vicini di casa...")
[x] 3 varianti headline hero
[x] 4-stage funnel (Awareness, Consideration, Intent, Action)
[x] 3 CTA architecture (primaria WhatsApp, secondaria download, urgenza)
[x] 10 obiezioni mappate + risposte
[x] Editorial calendar Q1
[x] Social proof strategy + urgency triggers
Output: CONVERSION_STRATEGY_2026-03.md
12.4 UX Agent ✅ (Completato 25 mar)
[x] 5 principi UX documentati
[x] Sitemap completa (17 pagine minimo)
[x] Wireframe home slider (8 slide, dettagliato)
[x] Wireframe pagina "Prima Donazione" (zero-attrito)
[x] Wireframe pagina FAQ
[x] 5 componenti UI custom spec'd
[x] Mobile-first spec (breakpoint, behavior)
Output: UX_ARCHITECTURE_2026-03.md
12.5 Copywriter ⏳ (In corso, scadenza 29 mar)
[ ] Home page completa (hero + 5 sezioni)
[ ] 4 pagine pillar: /dona, /prima-donazione, /diventa-donatore, /posso-donare
[ ] 55 FAQ complete (short 40-50 parole + long 100-150)
[ ] 5 articoli blog (paura-aghi, fa-male, tatuaggi, dieta, requisiti)
[ ] 20 meta title/description (pronto per copia)
[ ] 10 obiezioni + risposte in pagina /prima-donazione
[ ] 3 CTA WhatsApp precompilati
[ ] Profili medici /chi-siamo con bio e credenziali
Output: COPY_ALL_PAGES_2026-03.md
Input: CONVERSION_STRATEGY + UX_ARCHITECTURE + SEO_GEO_STRATEGY
12.6 Coding Agent ⏳ (In coda, scadenza 01 apr)
[ ] 6 schema.org implementati (MedicalWebPage, LocalBusiness, FAQPage, Breadcrumb, NewsArticle, Person)
[ ] GA4 event tracking (WhatsApp click, phone click, scroll depth)
[ ] 5 componenti custom (whatsapp_sticky, blood_stock_bar, impact_counter, eligibility_quiz, donor_testimonial)
[ ] HTML template per ogni pagina pillar
[ ] CSS custom (colori, spacing, mobile)
[ ] JS per accordion FAQ, quiz, sticky CTA
[ ] Automation dateModified (settimanale)
[ ] Contatore donazioni (widget dinamico)
[ ] Google Business Profile aggiornato
Output: DEV_BRIEF_2026-03.md + HTML_TEMPLATES/ + CSS_COMPONENTS.css + JS_INTERACTIONS.js
Input: UX_ARCHITECTURE + SEO_GEO_STRATEGY + COPY_ALL_PAGES
12.7 QC Agent ⏳ (In coda, scadenza 05 apr)
[ ] Functional testing (navigazione, CTA, mobile)
[ ] SEO audit (20 keyword positions, schema validation)
[ ] Copy review (grammatica, tone, link integrity)
[ ] AI citation test (manuale su ChatGPT/Gemini/Perplexity)
[ ] Browser testing (Chrome, Firefox, Safari, Edge)
[ ] WCAG 2.1 AA accessibility
[ ] Performance testing (Core Web Vitals)
Output: TEST_REPORT_2026-04.md
Input: Dev brief + Copy
________________________________________
13. ISTRUZIONI OPERATIVE
13.1 Per Tutti gli Agenti
Leggere sempre questo BRIEF.md prima di iniziare
Leggere il codice in assets-current/ per capire il punto di partenza tecnico
Depositare output nella cartella assegnata (vedi §10.1)
Usare nomi file descrittivi con data ISO (es. BENCHMARK_REPORT_2026-03.md)
Iniziare ogni documento con sezione "Brief ricevuto da" e "Output prodotto per" per tracciare dipendenze
Segnalare conflitti con questo brief aprendo Issue su repository con label brief-conflict
13.2 Formato File Output
Table
Tipo	Formato
Report testuali	Markdown (.md)
Wireframe/mockup	PNG/SVG + descrizione testuale in .md
Codice	File nativo (.css, .js, .html, .php) con commenti in italiano
Dati strutturati	JSON con schema esplicito
________________________________________
14. GLOSSARIO
Table
Termine	Significato
GEO	Generative Engine Optimization — ottimizzazione per essere citati dalle AI
Slider	Home page a scorrimento verticale full-screen
Slide	Una delle 10 sezioni dello slider
Helix Ultimate	Template Joomla usato dal sito
iCagenda	Componente Joomla per il calendario eventi
{loadmoduleid}	Tag Joomla per caricare un modulo in un articolo
CTA	Call To Action — pulsante o link che invita all'azione
Donatore	Persona che dona il sangue (o il plasma)
Socio	Persona iscritta ad AVIS (può essere donatore o volontario)
Raccolta	Evento di donazione sangue organizzato da AVIS
Prime donazioni	Donatori che donano per la prima volta
Lead	Contatto qualificato interessato a donare
UVP	Unique Value Proposition — proposta di valore unica
________________________________________
15. ALLEGATI E RIFERIMENTI
Documenti Completati ✅
[x] BENCHMARK_REPORT_2026-03.md (Researcher)
[x] SEO_GEO_STRATEGY_2026-03_v2_COMPLETA.md (SEO/AI Agent)
[x] CONVERSION_STRATEGY_2026-03.md (Marketing Agent)
[x] UX_ARCHITECTURE_2026-03.md (UX Agent)
Documenti in Produzione ⏳
[ ] COPY_ALL_PAGES_2026-03.md (Copywriter — scadenza 29 mar)
[ ] DEV_BRIEF_2026-03.md + assets (Coding Agent — scadenza 01 apr)
[ ] TEST_REPORT_2026-04.md (QC Agent — scadenza 05 apr)
Contatti e Escalation
Table
Ruolo	Reperibilità
Project Manager	Repo issues + tagging
AVIS Owner	[Da compilare]
Medical Lead	[Da compilare]
Tech Admin	[Da compilare]
Per domande/blocchi:
Aprire issue nel repo (tagging PM)
Slack urgent
Call group se critico
________________________________________
16. REGOLA FONDAMENTALE PER IL COPYWRITTER
Eliminare ogni traccia di scrittura AI come ad esempio il trattino lungo, le frasi troppo breve, formula del "cosa non è" prima delle affermazioni, ecc.
Rendere il testo umanizzato al 100%
________________________________________
Documento generato dal Project Manager Agent · Claude · 24 Marzo 2026
Versione: 2.0 — Riorganizzato per priorità strategica e rimosse duplicazioni
Repository: https://github.com/MarkBlackBlue/avis-frosinone-restyling

