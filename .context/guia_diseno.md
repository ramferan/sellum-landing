# 🎨 Guía de Diseño — Landing Pages SELLUM

> **Audiencia**: Agentes de IA y desarrolladores que creen o modifiquen landings del ecosistema SELLUM.
>
> **Objetivo**: Mantener coherencia visual entre sellumlabs.com, kalosnap.sellumlabs.com y futuras landings.

---

## 🏢 Sistema de Diseño Compartido

| Elemento | Valor |
|:---------|:------|
| **Fondo** | `#f9f9f9` (casi blanco) |
| **Texto principal** | `#000000` |
| **Texto secundario** | `#5d5f5f` |
| **Acentos primarios** | `#000000` (negro) |
| **CTAs (KaloSnap)** | `#0ea5a0` (verde-teal) |
| **Bordes** | `1px solid #E5E5E5` (editorial-border) |
| **Esquinas** | 0px (sin bordes redondeados) |
| **Estilo** | Brutalista editorial, B&N, alto contraste |

## 🔤 Tipografía

| Sitio | Títulos | Cuerpo |
|:------|:--------|:-------|
| **sellumlabs.com** | Playfair Display | Hanken Grotesk |
| **kalosnap.sellumlabs.com** | Playfair Display | Inter |
| **nebula (futuro)** | Playfair Display | Hanken Grotesk |

## 🎯 Reglas Visuales

1. **Nunca usar grises planos** — El texto secundario usa `#5d5f5f` (gris con matiz), no `#999`.
2. **Un solo punto de color** — El botón CTA (Try KaloSnap) es el único elemento con color vivo (`#0ea5a0`). Todo lo demás es B&N.
3. **Fotografías en grayscale** — Todas las imágenes de portfolio llevan `grayscale` para mantener la unidad cromática.
4. **Sin sombras** — Las tarjetas usan `hover-lift` (translateY) en vez de box-shadow.
5. **Hairlines** — Las líneas divisorias son de 1px (`hairline-border`, `hairline-t`, `hairline-b`, etc.).

## 📐 Espaciado

| Token | Valor | Uso |
|:------|:------|:----|
| `px-margin-desktop` | 64px | Márgenes laterales en escritorio |
| `px-margin-mobile` | 24px | Márgenes laterales en móvil |
| `py-stack-md` | 40px | Padding vertical estándar |
| `py-stack-lg` | 80px | Padding vertical secciones grandes |
| `py-stack-xl` | 120px | Padding vertical hero |
| `gap-gutter` | 24px | Separación entre elementos en grid/flex |

## 🧩 Portfolio Cards

Cada tarjeta de proyecto sigue esta estructura:
```
┌─ editorial-border ──────────────────────┐
│  ┌─ aspect-[4/3] ────────────────────┐  │
│  │  img (grayscale, object-cover)     │  │
│  └────────────────────────────────────┘  │
│  h3: Project Name                        │
│  p:  Description text                    │
│  a:  EXPLORE →                          │
└──────────────────────────────────────────┘
```

## 🔄 Flujo con Stitch (para nuevas landings)

1. Definir propósito y audiencia de la landing
2. Preparar prompt para Stitch con:
   - Sistema de diseño: B&N, Playfair + Inter/Hanken, teal solo en CTAs
   - Reglas: sin grises, grayscale en imágenes, bordes editoriales de 1px
   - Mock data: ejemplos realistas en el idioma correspondiente
3. Stitch genera HTML → guardar en `src/pages/`
4. Crear componente Astro con el layout
5. Traducir a los 4 idiomas (EN, ES, PT, FR)

## 📁 Referencias

| Proyecto | Ruta base |
|:---------|:----------|
| sellumlabs.com | `src/pages/index.astro` (y `en/`, `pt/`, `fr/`) |
| kalosnap landing | `src/pages/kalosnap/index.astro` (y `en/`, `pt/`, `fr/`) |
| KaloSnap app | `../kalosnap/` (React app en otro repo) |

> *Mantenido por: SELLUM — Última actualización: 2026-07-17*
