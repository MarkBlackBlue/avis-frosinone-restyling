RESEARCH_METHODOLOGY.md
Progetto: AVIS Frosinone Restyling 2026
Document Type: UX Research Strategy & Methodological Framework
Version: 1.0 (Generative Phase)
Lead Agent: Gemini (UX Researcher)
1. SCOPE DELLA RICERCA
L'attività di ricerca mira a definire il nuovo standard digitale per la sezione provinciale di Frosinone, trasformando il sito da archivio istituzionale a motore di conversione per la prima donazione (Gen Z).
Obiettivi della fase Research
•	Identificazione Obiezioni: Mappare i "friction point" psicologici e informativi che allontanano il target 18-35 dalla donazione.
•	Mapping del Funnel: Definire i flussi logici che portano l'utente dall'awareness (social/territorio) all'azione (contatto WhatsApp).
•	Validazione Modelli Internazionali: Estrarre pattern di successo da organizzazioni leader (Red Cross, NHS) per adattarli al contesto locale.
Domande di Ricerca
1.	Quali sono i pattern UI/UX che riducono l'ansia da "prima volta" nei donatori digital-native?
2.	Come deve evolvere l'architettura dell'informazione per garantire il reperimento di orari e requisiti entro 2 click?
3.	Perché il sistema di messaggistica istantanea (WhatsApp) è preferibile ai form web standard per il tasso di conversione Gen Z?
Ambito
•	Geografico: Focus locale (Provincia di Frosinone) con benchmarking nazionale e internazionale.
•	Demografico: Primario Gen Z (18-35 anni); Secondario (Accessibilità WCAG 2.1 AA per Boomer/Gen X).
________________________________________
2. METODOLOGIA ADOTTATA
Data l'assenza di dati analytics pregressi, la ricerca adotta un approccio Generativo e Comparativo, basato su evidenze di settore.
Desk Research (Fonti Secondarie)
Analisi qualitativa di report sull'andamento delle donazioni in Italia (Centro Nazionale Sangue) e letteratura psicologica sulla "needle phobia" e sull'altruismo digitale. L'analisi è finalizzata a generare le 55 FAQ per l'agente Copy.
Competitive Analysis
Selezione dei competitor basata su criteri di Digital Maturity e Conversion Design:
•	Settore Sangue: Red Cross Blood (USA), NHS Blood (UK). Criteri: Onboarding flow, gestione obiezioni.
•	Settore Fintech/Health: Revolut, Babylon Health. Criteri: Velocità dei processi, micro-copy rassicurante.
•	Settore No-Profit: Charity: Water. Criteri: Storytelling dell'impatto sociale.
Heuristic Evaluation
Valutazione dei modelli di riferimento basata sulle 10 euristiche di Nielsen, con focus specifico su:
•	Match between system and the real world: Linguaggio naturale vs burocratese medico.
•	Consistency and standards: Allineamento alle linee guida AVIS Nazionali 2025/26.
________________________________________
3. FONTI E DATI
Fonte	Tipologia	Focus dell'analisi
AVIS Nazionale	Brand Guidelines	Coerenza visuale e valori istituzionali.
Red Cross Blood (USA)	Benchmark Settore	Gamification e flussi di prenotazione.
NHS Blood (UK)	Benchmark Settore	Trasparenza sui requisiti medici (Idoneità).
Revolut / N26	Cross-Industry	UI "Zero-friction" e Onboarding rapido.
Charity: Water	Storytelling	Visualizzazione dell'impatto della donazione.
________________________________________
4. LIMITI E ASSUNZIONI
Vincoli e Assunzioni
•	Assenza di Baseline: In mancanza di dati storici (Google Analytics legacy), la strategia assume come "punto zero" le best practices internazionali di conversione.
•	Target Gen Z: Si assume che il target preferisca l'interazione asincrona e informale (WhatsApp) rispetto alla compilazione di form statici o chiamate telefoniche.
•	Bias Geografico: Si assume che i pain point dei giovani a Frosinone siano sovrapponibili a quelli nazionali (mancanza di tempo, paura dell'ago, incertezza sull'idoneità).
Vincoli Tecnici
•	Accessibilità: Il design deve essere inclusivo (WCAG 2.1 AA) senza compromettere l'estetica moderna richiesta dal target primario.
•	Mobile-First: La ricerca assume che oltre l'85% del traffico proverrà da dispositivi mobile (da campagne social).
________________________________________
5. OUTPUT DELLA RICERCA (INTER-AGENT WORKFLOW)
I risultati della ricerca fungono da input per i successivi agenti AI:
•	Per Claude PM (SEO): Elenco di intenti di ricerca basati sulle paure dei donatori (es. "donare sangue fa male", "cosa mangiare prima di donare").
•	Per ChatGPT (UX): Definizione dei 3 funnel principali e posizionamento della CTA WhatsApp come elemento persistente (Sticky).
•	Per Claude (Copy): Definizione del tono di voce (rassicurante, diretto, non istituzionale) e redazione delle 55 FAQ.
•	Per Jules (Dev): Definizione dei requisiti di performance per garantire il caricamento istantaneo delle pagine pillar.
