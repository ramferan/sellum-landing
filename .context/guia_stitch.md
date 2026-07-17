# 🧵 Guía de Stitch — Flujo de Diseño para el Ecosistema SELLUM

> **Audiencia**: Agentes de IA y desarrolladores que necesiten crear prototipos visuales de landings o screens para cualquier proyecto del ecosistema.
>
> **Objetivo**: Estandarizar el proceso de diseño vía Stitch, separando claramente el qué (diseño) del cómo (implementación).

---

## 🔄 Flujo de Trabajo (End-to-End)

```
USUARIO / TÚ (Stitch Web)     AGENTE (Zoo)                  STITCH (MCP/WEB)
       │                           │                              │
       │ "Necesito diseño para X"  │                              │
       │──────────────────────────►│                              │
       │                           │                              │
       │                           │ Analiza necesidades:         │
       │                           │ - propósito, entidades,      │
       │                           │ - usuario, puntos de dolor   │
       │                           │                              │
       │                           │ Prompt con sistema de diseño │
       │                           │─────────────────────────────►│
       │                           │                              │
       │                           │                  ┌─ Stitch Web: tú pegas │
       │                           │                  │  el prompt y obtienes  │
       │                           │                  │  el HTML              │
       │                           │                  │  ─ O ─               │
       │                           │                  │  Stitch MCP: el       │
       │                           │                  │  agente recibe HTML   │
       │                           │◄─────────────────────────────────┘
       │                           │
       │                           │ Guarda HTML en .stitch-previews/
       │                           │
       │◄──────────────────────────│ "Revisa el diseño"
       │                           │
       │ Revisa y da feedback      │
       │──────────────────────────►│
       │                           │
       │   (ciclo de iteración)    │
       │                           │
       │ ✅ Aprueba                │
       │──────────────────────────►│
       │                           │ Implementa en Astro / Svelte / React
       │                           │ siguiendo guia_diseno.md
```

---

## 📋 Fase 1: Análisis Previo

Antes de enviar el prompt a Stitch, definir:

| Elemento | Pregunta | Ejemplo (Nebula) |
|:---------|:---------|:-----------------|
| **Propósito** | ¿Qué debe comunicar esta landing? | Landing de producto para Nebula trading |
| **Audiencia** | ¿Quién la visita? | Traders, inversores, family offices |
| **Entidades** | ¿Qué conceptos clave? | LSTM, señales, análisis macro, riesgo |
| **Estilo** | ¿Qué sistema de diseño? | Editorial B&N (selllumlabs.com) |
| **Idiomas** | ¿Cuántos? | EN (default) + ES, PT, FR |
| **CTAs** | ¿Qué acción principal? | "Try Nebula" → app |

---

## 🤖 Fase 2: Prompt para Stitch

### 2.1 Sistema de Diseño por Proyecto

| Proyecto | Estilo | Colores | Tipografía | Stack |
|:---------|:-------|:--------|:-----------|:------|
| **SELLUM Labs** | Editorial B&N, brutalista | `#000000`, `#5d5f5f`, `#f9f9f9` | Playfair Display + Hanken Grotesk | Astro |
| **KaloSnap** | Editorial B&N, teal CTA | `#000000`, `#5d5f5f`, `#f9f9f9`, CTA: `#0ea5a0` | Playfair Display + Inter | Astro |
| **Nebula** | Editorial B&N | `#000000`, `#5d5f5f`, `#f9f9f9` | Playfair Display + Hanken Grotesk | Astro |
| **Belleza a Diario** | Premium, rosa, glassmorphism | `#ec4899`, blanco, alto contraste | Elegante, sin grises | SvelteKit |
| **SOMA** | Industrial Cyberpunk, oscuro | Cyan `#00daf3`, fondo `#050505` | Inter + JetBrains Mono | Vue 3 |

### 2.2 Plantilla de Prompt Genérica

```
Generate a complete, self-contained HTML file for [PROJECT] [SCREEN] screen.
Use the project's design system: [DESIGN SYSTEM DESCRIPTION].

## WHAT THIS SCREEN DOES
[2-3 sentences explaining the purpose]

### Core Sections (by priority)
1. [Section 1]
2. [Section 2]
...

### Key Entities
- [Entity 1] — [brief description]
- [Entity 2] — [brief description]

### User Context
- [User profile]
- [Devices: mobile-first, desktop]

## MOCK DATA TO INCLUDE
[Describe realistic data in the target language]

## DESIGN RULES
- [Critical visual rule 1]
- [Critical visual rule 2]
- ...

## OUTPUT
Return ONLY the complete HTML file. Start with `<!DOCTYPE html>`. No markdown wrapping, no explanations. Use TailwindCSS CDN.
```

---

## 📁 Fase 3: Almacenamiento

Los HTML generados por Stitch se guardan en:

```
.context/stitch-previews/[project]-[screen].html
```

| Proyecto | Ruta de previews |
|:---------|:-----------------|
| sellum-landing | `.context/stitch-previews/` |
| kalosnap (app) | `stitch-screens/` (existente) |

---

## 🔍 Fase 4: Revisión e Iteración

1. Abrir el HTML directamente en navegador o servirlo con `npx serve .context/stitch-previews/`
2. Evaluar contra `guia_diseno.md` del proyecto
3. Proporcionar feedback concreto
4. Iterar hasta aprobación ✅

---

## 🏗️ Fase 5: Implementación

Una vez aprobado el diseño:

1. Traducir el diseño a componentes Astro en `src/pages/`
2. Extraer textos a i18n JSON (4 idiomas)
3. Aplicar tokens de diseño del layout base
4. Build y push

---

## 📚 Referencias

| Recurso | Ubicación |
|:--------|:----------|
| Guía de diseño SELLUM | [`.context/guia_diseno.md`](./guia_diseno.md) |
| Guía de diseño KaloSnap | `../kalosnap/.context/guia_diseno.md` |
| Guidelines sellum | [`.context/guidelines.md`](./guidelines.md) |
| Previews existentes (belleza) | `../bellezaadiario/stitch-screens/` |
| Previews existentes (kalosnap) | `../kalosnap/stitch-screens/` |

---

*Mantenido por: SELLUM — Última actualización: 2026-07-17*
