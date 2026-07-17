# 🌐 Ecosistema SELLUM Labs — Landing Pages

> Este documento explica la arquitectura del ecosistema para que cualquier agente o desarrollador entienda cómo funciona el despliegue.
>
> **Importante**: Este proyecto usa un patrón **multiproject** en Vercel: un mismo repositorio de GitHub se despliega en N proyectos de Vercel (uno por cada micro-SaaS), cada uno sirviendo un subdominio diferente. El patrón es escalable — se añade un proyecto por cada nuevo producto.

## 🏗️ Arquitectura General

Un **solo repositorio** (`sellum-landing`) se despliega en **múltiples proyectos de Vercel**, uno por cada micro-SaaS del ecosistema. Cada proyecto de Vercel compila el mismo código fuente pero produce un sitio diferente según la variable de entorno `$SITE`.

```
sellum-landing/ (GitHub repo)
├── src/pages/index.astro          → sellumlabs.com (SITE=default)
├── src/pages/kalosnap/index.astro → kalosnap.sellumlabs.com (SITE=kalosnap)
├── src/pages/nebula/index.astro   → nebula.sellumlabs.com (SITE=nebula)
├── src/pages/<producto>/          → <producto>.sellumlabs.com (SITE=<producto>)
├── src/layouts/BaseLayout.astro   → Variants: sellum | kalosnap | nebula | ...
├── src/i18n/*.json                → 4 idiomas: en, es, pt, fr
└── vercel.json                    → Configuración global de Vercel
```

### Patrón para añadir un nuevo micro-SaaS

1. Crear `src/pages/<producto>/index.astro` → Usar `<BaseLayout variant="<producto>">`
2. Añadir variant en `BaseLayout.astro` (fonts, colores, hreflang paths)
3. Añadir variant en `Header.astro`, `Footer.astro`, `LanguageSelector.astro`
4. Añadir sección `<producto>` en los 4 archivos i18n (`en.json`, `es.json`, `pt.json`, `fr.json`)
5. Añadir entrada en `postbuild` de `package.json` para `SITE=<producto>`
6. Crear proyecto en Vercel conectado al mismo repo, con `SITE=<producto>`
7. Configurar dominio `<producto>.sellumlabs.com` en Vercel

## 🚀 Despliegue en Vercel

Cada micro-SaaS tiene su propio proyecto en Vercel. Todos apuntan al mismo repositorio de GitHub.

### Por proyecto

| Vercel Project | Dominio | Env Var `SITE` | Build output |
|:---------------|:--------|:---------------|:-------------|
| `sellum-landing` | `sellumlabs.com` | *(no definida)* | `dist/` normal |
| `kalosnap-landing` | `kalosnap.sellumlabs.com` | `kalosnap` | postbuild copia kalosnap a raíz |
| `nebula-landing` | `nebula.sellumlabs.com` | `nebula` | postbuild copia nebula a raíz |
| `<producto>-landing` | `<producto>.sellumlabs.com` | `<producto>` | postbuild copia <producto> a raíz |

### Cómo funciona el `postbuild`

El script [`postbuild`](../package.json) en `package.json` verifica `$SITE`:

- **`SITE=nebula`**: Copia `dist/nebula/index.html` → `dist/index.html`
- **`SITE=kalosnap`**: Copia `dist/kalosnap/index.html` → `dist/index.html`
- **default** (sellum): No hace nada, la raíz ya es `dist/index.html`

Esto permite que cada subdominio sirva su landing específica desde la raíz, aunque las páginas estén en subcarpetas dentro del repo.

> ⚠️ Para añadir un nuevo producto al postbuild, editar `package.json` y agregar una condición `elif` similar a las existentes.

## 🎨 Variants del Layout

[`BaseLayout.astro`](../src/layouts/BaseLayout.astro) soporta múltiples variants (una por producto):

| Variant | Fonts | Acento CTAs | Nav en Header |
|:--------|:------|:------------|:--------------|
| `sellum` | Playfair Display + Hanken Grotesk | Negro `#000000` | Links a todos los productos |
| `kalosnap` | Playfair Display + Inter | Teal `#0ea5a0` | Journal, Analysis, Science |
| `nebula` | Playfair Display + Hanken Grotesk | Cyan `#0891b2` | Features, Performance, Markets |

### Colores de acento por producto

| Producto | Color | Código | Origen |
|:---------|:------|:-------|:-------|
| SELLUM (principal) | Sin acento — solo B&N | — | — |
| KaloSnap | Teal | `#0ea5a0` | Diseño propio de KaloSnap |
| Nebula | Cyan | `#0891b2` | Dashboard real usa `#00f2ff`, adaptado a fondo claro |

### Reglas para nuevos productos

1. **Tipografía**: Usar Playfair Display (headings) + una sans-serif (Hanken Grotesk, Inter, o la del producto)
2. **Color acento**: Elegir un color que identifique al producto. El CTA button es el único elemento con color vivo.
3. **Nav**: Mostrar links internos de la landing (Features, Performance, etc.). NO links a otros productos.
4. **Diseño**: Siempre B&N editorial, sin border-radius, con hairline borders.

## 🌍 i18n

Cada landing tiene soporte para 4 idiomas:

| Ruta | Contenido |
|:-----|:----------|
| `/` o `/{lang}/` | sellumlabs.com (es, en, pt, fr) |
| `/kalosnap/` o `/kalosnap/{lang}/` | kalosnap landing |
| `/nebula/` o `/nebula/{lang}/` | nebula landing |

Los archivos de traducción están en [`src/i18n/`](../src/i18n/). Cada archivo contiene secciones para cada producto (`site`, `nav`, `hero`, `portfolio`, `projects`, `contact`, `footer`, `kalosnap`, `nebula`, ...).

> ⚠️ **Regla**: Todo texto visible debe ir en los 4 archivos i18n. Nunca hardcodear texto en componentes.

## 📁 Estructura de archivos clave

```
src/
├── layouts/
│   └── BaseLayout.astro       → Layout compartido (variants por producto)
├── components/
│   ├── Header.astro           → Header con navegación según variant
│   ├── Footer.astro           → Footer según variant
│   ├── LanguageSelector.astro → Selector de idioma
│   ├── PortfolioCard.astro    → Tarjetas del portfolio
│   └── ContactForm.astro      → Formulario de contacto
├── pages/
│   ├── index.astro            → Home sellumlabs.com (es)
│   ├── {lang}/                → Home i18n (en, pt, fr)
│   ├── kalosnap/{lang}/       → Landing KaloSnap
│   ├── nebula/{lang}/         → Landing Nebula
│   ├── <producto>/{lang}/     → Landing de nuevo micro-SaaS
│   ├── privacy/{lang}/        → Política de privacidad
│   └── terms/{lang}/          → Términos del servicio
├── i18n/
│   ├── es.json                → Traducciones español
│   ├── en.json                → Traducciones inglés
│   ├── pt.json                → Traducciones portugués
│   └── fr.json                → Traducciones francés
└── components/...
```

## 🔧 Configuración

### Variables de entorno

| Variable | Uso | Dónde se define |
|:---------|:----|:----------------|
| `SITE` | Define qué variante construir (`nebula`, `kalosnap`, o default) | Vercel Project → Environment Variables |
| `GEMINI_API_KEY` | API key de Gemini AI (server-side) | `.env` local / Vercel |
| `VITE_FIREBASE_*` | Credenciales Firebase (frontend) | `.env` local / Vercel |

### Tailwind CDN

Todas las landings usan Tailwind vía CDN (`cdn.tailwindcss.com`), cargado con `is:inline` en `BaseLayout.astro`. La configuración se inyecta via `<script id="tailwind-config">` con `set:html`. Esto es intencional por diseño (ver `.context/guidelines.md`).

> ⚠️ **Nota**: El CDN de Tailwind está pensado para desarrollo. En producción puede ser lento. Si se necesita mejorar performance, migrar a Tailwind CLI compilado.

## 🚦 Troubleshooting

### "nebula.sellumlabs.com se ve sin CSS"

**Causa raíz**: La página de Nebula cargaba Tailwind vía CDN en su propio HTML, sin usar BaseLayout. El CDN puede fallar o ser bloqueado.

**Solución**: Se refactorizó para usar `BaseLayout.astro` con `variant="nebula"`, igual que kalosnap. Ahora hereda la misma configuración de Tailwind que el resto del sitio.

### Un agente trabajó en esto antes y rompió algo

Siempre revisar:
1. Que la página use `BaseLayout` y no tenga su propio `<html>`/`<head>`/`<body>`
2. Que el variant esté soportado en `BaseLayout.astro`, `Header.astro`, `Footer.astro` y `LanguageSelector.astro`
3. Que las traducciones estén en TODOS los 4 archivos i18n
4. Ejecutar `npm run build` antes de hacer push

> 📖 **Guía completa**: Ver [guidelines.md](guidelines.md) para estándares de código y [guia_diseno.md](guia_diseno.md) para el sistema de diseño.

---

> *Mantenido por: SELLUM — Última actualización: 2026-07-17*
