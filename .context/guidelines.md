# 🏆 SELLUM Landing Engineering Guidelines

This document defines coding standards for any developer or AI agent working on **sellum-landing**.

---

## I. Astro Best Practices

1. **Static Site Only**:
   - No SSR, no API routes. Output is pure static HTML.
   - All dynamic behavior (forms, language switching) uses vanilla JS, not Astro islands.

2. **Component Architecture**:
   - Components in `src/components/`, pages in `src/pages/`.
   - One component per file. Max 200 lines per component.
   - Props interfaces defined inline (small scope) or in separate types file (shared types).

3. **`is:inline` for External Scripts**:
   - Tailwind CDN script MUST use `is:inline` directive to prevent Astro from bundling it.
   - Script tags with `is:inline` are rendered as-is in the HTML output.

4. **`set:html` for Raw Content**:
   - Use `set:html` when injecting raw HTML/JS content (e.g., Tailwind config) that should not be wrapped in template literals.

5. **`is:global` for Global Styles**:
   - Scoped styles in Astro (`<style>`) add `data-astro-cid-*` attributes. Use `is:global` when styles must apply to all elements (e.g., `body` styles).

---

## II. TailwindCDN Usage

6. **Tailwind Config**:
   - Config is injected via `<script id="tailwind-config">` in the layout.
   - Sellum and KaloSnap have separate configs (different font families, color palettes).
   - Sellum uses `Hanken Grotesk + Playfair Display`. KaloSnap uses `Inter + Playfair Display`.

7. **Design Tokens**:
   - Use Tailwind's spacing tokens from the custom config (e.g., `px-margin-desktop`, `py-stack-md`).
   - Don't hardcode pixel values. Use the project's design tokens.
   - Custom colors: `primary` (#000000), `secondary` (#5d5f5f), `background` (#f9f9f9).

8. **Editorial Style**:
   - Black and white palette with high contrast.
   - `bg-primary text-on-primary` for dark sections (contact form, footer).
   - `editorial-border` class for 1px `#E5E5E5` borders.
   - `hover-lift` class for card hover effects (translateY(-4px)).

---

## III. i18n

9. **JSON-Based Translations**:
   - All user-facing text goes in `src/i18n/{lang}.json`.
   - Never hardcode text in components or pages. Always reference `t.key` from the JSON.
   - Add new strings to all 4 language files simultaneously.

10. **Language Format**:
    - Keys are organized by section: `site`, `nav`, `hero`, `portfolio`, `projects`, `contact`, `footer`, `privacy`, `terms`, `kalosnap`.
    - Array content (projects) uses indexed objects to maintain order across languages.

---

## IV. General Coding Rules

11. **Conventional Commits**: Commits must follow conventional prefixes (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).

12. **Cleanliness**: Proactively purge dead code, debug prints, and orphan comments before committing.

13. **Error Isolation**: Never use empty `catch {}`. Wrap external integrations (Formspree) in proper error handling.

14. **File Naming**:
    - Components: `PascalCase.astro`
    - Layouts: `PascalCase.astro`
    - i18n files: `language-code.json` (lowercase)
    - Pages: lowercase with `index.astro` pattern

15. **Build Check**: Always run `astro build` before pushing to verify no compilation errors.
