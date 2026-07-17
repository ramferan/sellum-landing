# 👁️ Repository Context: SELLUM Landing (Websites)

Welcome, AI Agent. This document provides the definitive mental model of the **sellum-landing** repository.

---

## 🎯 Core Purpose & Role

**sellum-landing** serves the public-facing websites for the SELLUM ecosystem:
- **selllumlabs.com** — Software studio portfolio (4 languages: EN, ES, PT, FR)
- **kalosnap.sellumlabs.com** — KaloSnap product landing (4 languages)
- **nebula.sellumlabs.com** — Nebula product landing (planned)
- Privacy Policy & Terms of Service pages (4 languages each)

All sites are built as static HTML via Astro, deployed on Vercel.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Generator | Astro 5 (static site, no SSR) |
| Styling | TailwindCSS 3 (via CDN) |
| Icons | Material Symbols (Google Fonts) |
| Fonts | Playfair Display + Hanken Grotesk (sellum) / Inter (kalosnap) |
| Forms | Formspree (contact form) |
| Deploy | Vercel (git push → auto deploy) |
| i18n | JSON files in `src/i18n/` (4 languages) |

## 📂 Directory Topology

```
src/
├── components/     # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── LanguageSelector.astro   # EN | ES | PT | FR with localStorage persistence
│   ├── PortfolioCard.astro       # Project card for sellum grid
│   └── ContactForm.astro         # Formspree contact form (collapsible)
├── layouts/
│   └── BaseLayout.astro          # HTML shell, SEO, Tailwind config
├── i18n/
│   ├── es.json                   # Spanish translations
│   ├── en.json                   # English translations
│   ├── pt.json                   # Portuguese translations
│   └── fr.json                   # French translations
└── pages/
    ├── index.astro               # sellumlabs.com (ES - default)
    ├── en/index.astro            # sellumlabs.com (EN)
    ├── pt/index.astro            # sellumlabs.com (PT)
    ├── fr/index.astro            # sellumlabs.com (FR)
    ├── privacy/                  # Privacy Policy (4 languages)
    ├── terms/                    # Terms of Service (4 languages)
    └── kalosnap/                 # KaloSnap product landing (4 languages)
```

## 🔌 Integration Landscape

- **Formspree** — Contact form submissions forwarded to info@sellumlabs.com
- **localStorage** — Language preference persistence across sites (`sel-lang` key)
- **Browser detection** — `navigator.language` as fallback when no stored preference

## Key Architecture Decisions

1. **Static HTML output** — No SSR, no JS framework runtime. Pure static deployment.
2. **Tailwind CDN** — Not build-time Tailwind. Keeps build simple, avoids PostCSS config.
3. **i18n via JSON** — Translations in JSON files imported at build time by Astro pages.
4. **Language selector** — Shows EN | ES | PT | FR. Polllutes localStorage for cross-site inheritance.
5. **Portfolio cards** — Content driven by `projects[]` array in each i18n JSON. Edit one file to update all cards.
