# SELLUM Landing Pages

Brand umbrella landing pages for the SELLUM ecosystem — deployed as a **monorepo** serving **3 distinct Vercel projects**.

## Domains

| Domain | Content | Vercel Project | Env `SITE` |
|--------|---------|---------------|------------|
| [`sellumlabs.com`](https://sellumlabs.com) | SELLUM brand umbrella | `sellum-landing` | *(default)* |
| [`kalosnap.sellumlabs.com`](https://kalosnap.sellumlabs.com) | KaloSnap product landing | `kalosnap-landing` | `kalosnap` |
| [`nebula.sellumlabs.com`](https://nebula.sellumlabs.com) | Nebula trading landing | `nebula-landing` | `nebula` |

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 5 (static site, no SSR)
- **CSS**: Tailwind CSS via CDN (Play CDN with custom config)
- **Fonts**: Playfair Display + Hanken Grotesk (sellum/nebula) / Inter (kalosnap)
- **Icons**: Google Material Symbols
- **Deploy**: Vercel (3 projects, same repo)

## Design System

- **Style**: Brutalist editorial — B&W, high contrast, no border-radius
- **Accent colors**: Teal `#0ea5a0` (KaloSnap), Cyan `#0891b2` (Nebula)
- **Spacing**: Custom tokens (`px-margin-desktop`, `py-stack-md`, etc.)
- **Borders**: 1px editorial hairlines (`editorial-border`, `hairline-t`, etc.)

## Project Structure

```
src/
├── layouts/BaseLayout.astro   → Shared layout with 3 variants (sellum/kalosnap/nebula)
├── components/                → Reusable components (Header, Footer, PortfolioCard, etc.)
├── pages/
│   ├── index.astro            → sellumlabs.com homepage
│   ├── {lang}/                → i18n homepages (en, pt, fr)
│   ├── kalosnap/              → KaloSnap landing (4 languages)
│   ├── nebula/                → Nebula landing (4 languages)
│   ├── privacy/               → Privacy policy
│   └── terms/                 → Terms of service
├── i18n/                      → JSON translation files (en, es, pt, fr)
└── components/
```

## Deploy

The same GitHub repo is connected to **3 Vercel projects**, each with different environment variables:

1. Push to `main` branch on GitHub
2. Vercel automatically builds all 3 projects
3. Each project reads `$SITE` env var to determine which landing to serve at root

### Local Development

```bash
npm install
npm run dev        # Default sellum landing at localhost:4321
```

### Build Verification

```bash
# Test all 3 variants locally
SITE=nebula npm run build     # Builds nebula as root
SITE=kalosnap npm run build   # Builds kalosnap as root
npm run build                 # Builds sellum (default)
```

## Stitch Projects

| Project | Stitch ID |
|---------|-----------|
| SELLUM Brand | `projects/10578458468226158438` |
| KaloSnap Landing | `projects/981755789825309577` |
| Nebula Landing | *(pending)* |

---

*Built by [SELLUM Software Studio](https://sellumlabs.com)*
