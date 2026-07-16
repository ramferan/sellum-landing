# SELLUM Landing Pages

Brand umbrella landing pages for the SELLUM ecosystem.

## Structure

```
selllum-landing/
├── sellum/          → sellum.com (brand umbrella)
│   └── index.html
├── kalosnap/        → kalosnap.sellum.com (product landing)
│   └── index.html
├── README.md
└── .gitignore
```

## Subdomains

| Domain | Content | Status |
|--------|---------|--------|
| `selllum.com` | Brand umbrella — SELLUM Software Studio | ✅ Generated |
| `kalosnap.sellum.com` | KaloSnap product landing page | ✅ Generated |
| `app.kalosnap.sellum.com` | KaloSnap app (PWA) | Separate repo |

## Tech

- Static HTML + Tailwind CSS (via CDN)
- Google Fonts: Playfair Display + Inter
- Design System: Boutique Editorial (flat, monochrome, generous whitespace)

## Deploy

Deploy `selllum.com` → `/sellum/index.html`
Deploy `kalosnap.sellum.com` → `/kalosnap/index.html`

## Stitch Projects

| Project | Stitch ID | Type |
|---------|-----------|------|
| SELLUM Brand | `projects/10578458468226158438` | DESKTOP |
| KaloSnap Landing | `projects/981755789825309577` | DESKTOP |
