# 🤖 INSTRUCTIONS_FOR_AGENTS.md — KaloSnap

Este documento establece las normas de trabajo para agentes de IA en el repositorio **KaloSnap**. **Todo agente debe seguir este estándar.**

---

## 🤝 1. Onboarding y Contexto (Lectura Obligatoria)

**CRÍTICO:** Antes de escribir código en este repo, el agente DEBE:

1. **Leer el contexto del repo:** `.context/CONTEXT.md` y `.context/GUIDELINES.md`
2. **Sincronización Central:** Leer los archivos en `../00-instructions/.context/` — especialmente:
   - `0_roadmap_tecnico.md` — Visión global SELLUM
   - `7_Stitch_MCP_Guide.md` — Conexión a Stitch para generación de diseños UI
   - `GUIDELINES.md` — Estándares de código y diseño
3. **Archivos Clave del Repo:**
   - `README.md` — Visión y setup del proyecto
   - `plans/` — Planes de desarrollo activos

---

## 🛠️ 2. Stack Técnico de KaloSnap

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| Estilos | TailwindCSS 3 |
| Backend | Express (proxy API + static serving) |
| AI | Gemini 2.0 Flash (Google AI) |
| PWA | vite-plugin-pwa |
| Persistencia | localStorage (MVP) → Firestore/Supabase |

---

## 🧵 3. Stitch MCP — Generación de Diseños

KaloSnap usa **Stitch** para prototipado rápido de UI. La guía completa está en:

👉 **`../00-instructions/.context/7_Stitch_MCP_Guide.md`**

Puntos clave:
- La API key está en `~/.config/Code/User/mcp.json` (config global de VS Code)
- El endpoint MCP es `https://stitch.googleapis.com/mcp`
- Usa JSON-RPC 2.0 sobre HTTP POST con header `X-Goog-Api-Key`
- Para generar pantallas: `generate_screen_from_text` con `modelId: "GEMINI_3_FLASH"`

---

## 🚀 4. Protocolo Git y Flujo de Trabajo

- **Prohibido el Push Automático:** NUNCA `git push` sin aprobación explícita.
- **Ramas:** Desarrollar en `feature/` o `devel`. `main` es solo producción.
- **Idioma:** Código, comentarios y commits en **inglés**.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/).

---

## 📅 5. Gestión de Sesión

- **Al Inicio:** Leer `.context/CONTEXT.md` y `../00-instructions/.context/`
- **Durante:** Notificar bloqueos o bugs críticos inmediatamente.
- **Al Finalizar:** Actualizar `.context/` con los cambios relevantes.

---

*KaloSnap — SELLUM 2026. Maximizar ROI mediante automatización inteligente.*
