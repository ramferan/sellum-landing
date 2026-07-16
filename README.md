# SELLUM Landing Pages

Brand umbrella landing pages for the SELLUM ecosystem.

## Structure

```
selllum-landing/
├── index.html        → sellum.com (brand umbrella)
├── kalosnap/
│   └── index.html    → kalosnap.sellum.com (product landing)
├── README.md
└── .gitignore
```

## Subdomains

| Domain | Content | Vercel Project | Root Directory |
|--------|---------|---------------|----------------|
| `selllum.com` | SELLUM brand umbrella | `selllum` | `/` |
| `kalosnap.sellum.com` | KaloSnap product landing | `kalosnap-landing` | `/kalosnap` |

## Tech

- Static HTML + Tailwind CSS (via CDN)
- Google Fonts: Playfair Display + Inter / Hanken Grotesk
- Design System: Boutique Editorial (flat, monochrome, generous whitespace, no border-radius)

## Deploy

1. Push to GitHub
2. In Vercel, create two projects pointing to the same repo
3. Configure domains

## Stitch Projects

| Project | Stitch ID |
|---------|-----------|
| SELLUM Brand | `projects/10578458468226158438` |
| KaloSnap Landing | `projects/981755789825309577` |
