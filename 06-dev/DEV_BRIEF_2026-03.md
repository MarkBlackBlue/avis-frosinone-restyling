# DEV_BRIEF_2026-03.md
## Sviluppo Tecnico — AVIS Frosinone Restyling
**Data:** 01 apr 2026
**Stack:** Joomla 6, Helix Ultimate, JSON-LD, GA4

---

## 1. Schema.org Implementation (JSON-LD)

L'implementazione segue la strategia GEO per massimizzare la citabilità da parte delle AI (ChatGPT, Gemini, Perplexity).

### 1.1 MedicalWebPage
*   **Scope:** Tutte le pagine informative (`/dona`, `/prima-donazione`, `/posso-donare`).
*   **Codice JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "{{PAGE_TITLE}}",
  "description": "{{META_DESCRIPTION}}",
  "url": "{{CANONICAL_URL}}",
  "medicalAudience": {
    "@type": "MedicalAudience",
    "audienceType": "Patient"
  },
  "about": {
    "@type": "MedicalCondition",
    "name": "Donazione di Sangue"
  }
}
```

### 1.2 LocalBusiness (AVIS Frosinone)
*   **Scope:** `home`, `/contatti`, `/urgenza-sangue`.
*   **Codice JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AVIS Comunale di Frosinone",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via dell'Ospedale, 1",
    "addressLocality": "Frosinone",
    "addressRegion": "Lazio",
    "postalCode": "03100",
    "addressCountry": "IT"
  },
  "telephone": "+39 377 490 1081",
  "url": "https://avisfrosinone.it",
  "logo": "https://avisfrosinone.it/images/loghi/logo_avis_frosinone.png",
  "image": "https://avisfrosinone.it/images/sede_avis.jpg",
  "priceRange": "0",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.6433",
    "longitude": "13.3500"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39 377 490 1081",
    "contactType": "WhatsApp Support",
    "availableLanguage": "Italian"
  }
}
```

### 1.3 FAQPage
*   **Scope:** `/faq`.
*   **Struttura:** 55 FAQ organizzate per categoria.
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Esempio Domanda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Esempio risposta."
      }
    }
    /* ... repeat for 55 FAQs ... */
  ]
}
```

### 1.4 BreadcrumbList
*   **Scope:** Tutte le pagine con depth > 1.
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://avisfrosinone.it"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "{{CATEGORY_NAME}}",
    "item": "{{CATEGORY_URL}}"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "{{PAGE_NAME}}",
    "item": "{{PAGE_URL}}"
  }]
}
```

### 1.5 NewsArticle
*   **Scope:** `/news`, `/blog`.
```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "{{TITLE}}",
  "image": ["{{IMAGE_URL}}"],
  "datePublished": "{{DATE_PUB}}",
  "dateModified": "{{DATE_MOD}}",
  "author": {
    "@type": "Organization",
    "name": "AVIS Frosinone"
  }
}
```

### 1.6 Person
*   **Scope:** `/chi-siamo`.
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{{NAME}}",
  "jobTitle": "{{ROLE}}",
  "description": "{{BIO}}",
  "image": "{{PHOTO_URL}}"
}
```

---

## 2. GA4 Event Tracking

Implementazione tramite `gtag.js` per il tracciamento delle conversioni e dell'engagement Gen Z.

| Evento | Trigger | Parametri |
| :--- | :--- | :--- |
| `whatsapp_click` | Click su pulsanti WhatsApp | `location` (header, hero, sticky, footer), `urgency` (boolean) |
| `phone_click` | Click su link telefonici | `location` |
| `scroll_depth` | Scroll a 25/50/75/90% | `page_path`, `depth_percent` |
| `quiz_start` | Inizio `eligibility_quiz` | — |
| `quiz_complete` | Fine `eligibility_quiz` | `result` (eligible, not_eligible, maybe) |
| `cta_secondary` | Click su CTA secondarie | `type` (download, share, email) |
| `blood_stock_view` | `blood_stock_bar` visibile | — |

---

## 3. Componenti Custom CSS/JS

I componenti sono sviluppati in Vanilla JS e CSS moderno, rispettando le variabili di Helix Ultimate.

### 3.1 `whatsapp_sticky`
*   **Mobile:** Sempre visibile in basso a destra.
*   **Comportamento:** Scompare allo scroll down, riappare allo scroll up.
*   **Stato Urgenza:** Supporta classe `.urgency` con animazione `pulse` rossa.

### 3.2 `blood_stock_bar`
*   **Visualizzazione:** Barra orizzontale con indicatori per ogni gruppo sanguigno.
*   **Logica Colori:** `data-level` (green, yellow, red).
*   **Aggiornamento:** Endpoint JSON o override manuale nel modulo.

### 3.3 `impact_counter`
*   **Animazione:** `countUp` attivata da Intersection Observer.
*   **Dati:** Vite salvate, donazioni mensili, anni di attività.

### 3.4 `eligibility_quiz`
*   **Logica:** 5 step con risposte binarie.
*   **CTA Finale:** Pulsante WhatsApp con testo precompilato basato sugli input del quiz.

### 3.5 `donor_testimonial`
*   **UI:** Slider orizzontale (Swiper-like ma lightweight) con card testimonianza.

---

## 4. HTML Templates (Joomla 6)

I template sono ottimizzati per l'uso con Helix Ultimate e SP Page Builder (o Custom HTML).

*   **`home.html`:** Evolve lo slider attuale (8 slide), ottimizzato per performance.
*   **`prima-donazione.html`:** Layout rassicurante, focus su "Zero Paura".
*   **`posso-donare.html`:** Host del quiz di idoneità.
*   **`faq.html`:** Accordion dinamico con ricerca client-side.
*   **`dona.html`:** Hub con card e calendario iCagenda.

---

## 5. Automation & Dynamic Content

*   **`dateModified` Script:** Forza l'aggiornamento della data di modifica per segnalare freschezza ai crawler.
*   **Live Blood Stock:** Sistema di toggle per attivare banner di urgenza globale.

---

## 6. Mobile Optimization

*   **Breakpoint:** 320px (base), 768px (tablet), 1024px (desktop).
*   **Performance:** Immagini in WebP con `loading="lazy"`.
*   **Target:** Score PageSpeed > 90 su mobile.

---

## 7. Vincoli Tecnici

*   **Joomla 6 Core:** Nessuna modifica ai file di sistema.
*   **Helix Ultimate:** Variabili CSS globali (`--avis-red`, `--avis-blue`) obbligatorie.
*   **JS:** No jQuery per le nuove interazioni, solo Vanilla JS ES6+.
