# avis-frosinone-restyling
Repository restyling sito Avis Comunale di Frosinone
SEZIONE 1 — PIANO DI LAVORO DEL TEAM
Fase 1 — Ricerca parallela (giorno 1–2)
Researcher Agent (Gemini) e SEO/AI Agent (Perplexity) lavorano in parallelo. Gemini fa benchmark dei migliori siti AVIS italiani e internazionali, analisi della struttura dei contenuti, best practice di associazioni no-profit. Perplexity esegue la ricerca keyword (SEO classico) e la keyword research orientata alle AI (GEO — Generative Engine Optimization): quali domande su donazione sangue + Frosinone vengono poste a ChatGPT/Claude/Gemini, e quali fonti vengono citate.
Output Fase 1: report benchmark + mappa keyword SEO/GEO.

Fase 2 — Strategia (giorno 3–4) → dipende da Fase 1
Marketing Agent (DeepSeek) riceve i dati di Fase 1 e definisce la strategia di conversione: funnel donatore (awareness → interesse → azione), messaggi chiave, social proof, urgency triggers. Parallelamente, UX Agent (ChatGPT) riceve benchmark + strategia e progetta l'architettura informativa del nuovo sito: sitemap, wireframe, gerarchia dei contenuti, sistema di navigazione, microinterazioni per mobile.
Output Fase 2: strategia di marketing + wireframe completi.

Fase 3 — Produzione contenuti (giorno 5–7) → dipende da Fase 1+2
Copywriter Agent (Claude) riceve il brief combinato di SEO, strategia marketing e wireframe UX. Produce tutti i testi ottimizzati per SEO classico e GEO: homepage, pagine tematiche (donazione, gruppi sanguigni, diventare donatore, FAQ), articoli del blog citabili dalle AI, meta description, schema markup in linguaggio naturale.
Output Fase 3: tutti i testi del sito.

Fase 4 — Sviluppo (giorno 8–12) → dipende da Fase 2+3
Coding Agent (Jules) riceve wireframe UX + testi + il codice attuale (HTML/CSS/JS allegato). Implementa il nuovo sito in Joomla 6: nuovo template Helix Ultimate, slider ottimizzato, componenti modulari, performance (Core Web Vitals), schema markup tecnico (JSON-LD), integrazione calendario eventi, responsive mobile-first.
Output Fase 4: sito in staging.

Fase 5 — Quality Control (giorno 13–14) → dipende da Fase 4
QC Agent (Kimi) fa l'audit completo: SEO tecnico (Screaming Frog-style check), accessibilità WCAG 2.1, performance (LCP < 2.5s, CLS < 0.1), correttezza dei testi rispetto ai brief, verifica che i contenuti siano strutturati per essere citati dalle AI (risposte dirette, dati numerici, fonti autorevoli), test cross-browser e mobile.
Output Fase 5: lista di fix prioritizzati + sign-off.

SEZIONE 2 — PROMPT PER RESEARCHER AGENT (Gemini)


RESEARCHER AGENT — BENCHMARK REPORT
Progetto: Restyling avisfrosinone.it
Modello: Gemini
Output atteso: Report di benchmark strutturato


CONTESTO DEL PROGETTO
Stai lavorando come Researcher Agent in un team di agenti AI che gestisce il restyling completo di avisfrosinone.it, sito dell'AVIS Comunale di Frosinone — associazione no-profit per la promozione della donazione volontaria del sangue.
Obiettivi del nuovo sito:

Aumentare il numero di donatori di sangue e plasma nel territorio di Frosinone
Aumentare le richieste di associazionismo
Essere citato dalle AI (ChatGPT, Claude, Gemini, Perplexity) come fonte autorevole sulla donazione del sangue nella provincia di Frosinone
Scalare su Google per ricerche locali ("donazione sangue Frosinone") e tematiche ("gruppi sanguigni compatibilità", "come donare il sangue", ecc.)

Sito attuale: avisfrosinone.it — struttura Joomla 6, home page con slider full-screen a 10 sezioni (chi siamo, donazione, calendario eventi, diventa donatore, 5×1000, volontariato, FAQ, gruppi sanguigni, blog, convenzioni). Il sito ha zero ottimizzazione AI, nessuna strategia di conversione, contenuti prevalentemente statici.

IL TUO COMPITO
Produci un report di benchmark analizzando i migliori siti di associazioni per la donazione del sangue in Italia e all'estero. Il report servirà agli altri agenti del team (Marketing, UX, SEO, Copywriter) come base per le loro analisi.

STRUTTURA DEL REPORT
1. Benchmark siti AVIS italiani
Analizza almeno 5 siti di sezioni AVIS provinciali/regionali italiane (es. AVIS Nazionale, AVIS Milano, AVIS Bologna, AVIS Roma, AVIS Torino). Per ciascuno rileva: struttura della home, chiarezza del percorso di conversione (visitatore → donatore), qualità dei contenuti educativi, presenza di blog/notizie aggiornate, integrazione di strumenti digitali (prenotazione online, calendario eventi, chat), velocità e mobile-friendliness, presenza sui social.
2. Benchmark internazionale
Analizza almeno 3 siti esteri di riferimento per la donazione del sangue (es. American Red Cross Blood, NHS Blood and Transplant UK, Australian Red Cross Lifeblood, DKMS Germania). Identifica le best practice che mancano completamente nel panorama italiano: dati in tempo reale sulle scorte, gamification, storytelling dei donatori, chatbot, rich media.
3. Analisi dei siti no-profit ad alta conversione
Identifica 3–5 siti no-profit italiani o europei (non necessariamente legati alla donazione) che eccellono nella conversione online (iscrizioni, donazioni, volontariato). Estrai i pattern di conversione applicabili ad avisfrosinone.it.
4. Analisi GEO (Generative Engine Optimization)
Fai delle ricerche su ChatGPT, Gemini e Perplexity con le seguenti query e documenta quali fonti vengono citate, in che formato, e perché sono ritenute autorevoli:

"dove donare il sangue a Frosinone"
"come diventare donatore AVIS"
"gruppi sanguigni compatibilità"
"donazione sangue requisiti Italia"
"AVIS Frosinone"

Identifica il gap tra la presenza attuale di avisfrosinone.it nelle risposte AI e i siti che vengono effettivamente citati. Che tipo di contenuto citano le AI? (dati numerici, FAQ, guide step-by-step, fonti istituzionali?)
5. Analisi contenuti citabili dalle AI
Identifica 5–10 esempi di pagine web italiane (qualsiasi settore, preferibilmente sanitario o no-profit) che vengono regolarmente citate da ChatGPT, Claude o Gemini come fonti autorevoli. Analizza la loro struttura: usano headings chiari? Dati verificabili? Rispondono a domande specifiche? Hanno markup strutturato? Sono aggiornate con frequenza?
6. Sintesi — Gap analysis
Confronta le best practice identificate con la struttura attuale di avisfrosinone.it e produci:

Top 10 opportunità prioritarie (ordinate per impatto stimato)
Top 5 quick win implementabili immediatamente
3 innovazioni differenzianti che nessun sito AVIS italiano ha ancora adottato


FORMATO OUTPUT
Usa intestazioni chiare (H1/H2/H3), tabelle comparative dove utile, link diretti ai siti analizzati, screenshot descritti testualmente. Il report deve essere auto-contenuto: chi lo legge non deve conoscere il progetto per capirlo. Lunghezza target: 2.000–3.000 parole. Lingua: italiano.
Includi alla fine una sezione "Brief per il SEO/AI Agent" con le 20 keyword più rilevanti (10 SEO locale, 10 tematiche) da approfondire nella fase successiva, estratte dall'analisi benchmark.
