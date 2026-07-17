# 🎨 Stitch Design Brief — Nebula Landing Page

> **Fecha**: 2026-07-17
> **Proyecto**: Nebula — Trading Intelligence Platform
> **Propósito**: Diseñar landing page institucional para Nebula, consistente con el resto de landings de SELLUM Software Studio.

---

## 🧠 Resumen del Producto

Nebula es un sistema de trading algorítmico "Human-in-the-Loop" que combina **Deep Learning (LSTM)** y **Análisis de Régimen Macro** para generar señales de swing trading semanales en mercados US/UE.

### Público Objetivo
- Inversores institucionales y family offices
- Traders semanales que buscan señales basadas en datos, no en emociones
- Usuarios del ecosistema SELLUM que demandan herramientas cuantitativas

---

## 🎨 Estética y Diseño

### Paleta de Color
```css
/* Inspirada en el dashboard Nebula — oscuro, cibernético, institucional */
Fondo principal:     #0d1117  (dark bg, como el dashboard)
Superficie:          #161b22  (cards, contenedores)
Superficie variante: #1e2532  (bordes, separadores)
Primario:            #00f2ff  (cyan neón — acento tecnológico)
Secundario:          #94a3b8  (slate — texto secundario)
Éxito:               #10b981  (verde — señales alcistas)
Peligro:             #f43f5e  (rojo — señales bajistas)
Advertencia:         #FEB019  (ámbar — alertas)
Texto primario:      #f1f5f9  (casi blanco)
```

### Tipografía
```css
Títulos display:  "Playfair Display" (serif — mismo que sellum-landing)
Cuerpo:           "Hanken Grotesk"  (sans — mismo que sellum-landing)
Etiquetas/mono:   "JetBrains Mono"  (datos, métricas, código)
```

### Estilo General
- **Fondo oscuro** por defecto (consistente con el dashboard Nebula)
- **Bordes finos "hairline"** (1px, rgba(255,255,255,0.06)) — consistente con sellum
- **Efecto glass/translúcido** en cards y navegación (backdrop-blur)
- **Acento cyan (#00f2ff)** para elementos interactivos, enlaces, CTAs
- **Gradientes radiales sutiles** en el fondo para profundidad
- **Grid editorial** con mucho espacio en blanco (vertical rhythm generoso)
- **Micro-interacciones**: hover states con glows cyan, transiciones suaves

### Consistencia con SELLUM
- Misma familia tipográfica (Playfair Display + Hanken Grotesk)
- Mismo sistema de espaciado (container-max: 1280px, margins: 64px desktop / 24px mobile)
- Mismo patrón de "hairline borders" del sellum-landing
- Pero con dark mode por defecto y acentos cyan (vs el black/white de sellum)

---

## 📐 Pantallas a Diseñar

### 1. Hero Section
- Tagline: "TRADING INTELLIGENCE"
- Título grande: "Nebula" con "AI" en cyan
- Subtítulo descriptivo
- CTA principal: "Access Dashboard"
- Badge de estado: "OPERATIONAL" con dot verde pulsante
- Fondo con gradiente radial oscuro + grid sutil

### 2. Features Grid (3 columnas)
- **Neural Projections**: LSTM-64 + Conformal Prediction
- **Macro Regime Filter**: Yield curve, credit spreads, VIX
- **Compliance Engine**: Regla fiscal 2 meses, ESG

### 3. Performance Metrics (8 métricas)
- Sharpe Ratio, Win Rate, Max Drawdown, Alpha
- Expectancia, Operaciones, Exposición, Calmar Ratio

### 4. Pipeline (5 etapas)
- Data Ingestion → LSTM → Meta-Classifier → Compliance → Signal

### 5. Market Coverage (3 regiones)
- NA (SPY, QQQ, NVDA...), EU (SAP, ASML...), IBEX (SAN, BBVA...)

### 6. Footer
- Brand, Links, Contact
- Consistent with sellum-landing footer pattern

---

## 📋 Brief para Stitch (Instrucciones Directas)

> Copia esto en Stitch:

**Proyecto**: Nebula — Landing page institucional
**Plataforma**: Web (Astro + TailwindCSS), responsive
**Público**: Inversores institucionales, 30-55 años

**Estética**: "Institutional grade" — sobrio, premium, oscuro. Editorial-minimalista (mismo ADN que sellumlabs.com). Tecnológico, mostrar datos reales.

**Paleta**: #0d1117 bg, #00f2ff primary, #f1f5f9 text, #94a3b8 secondary
**Tipografía**: Playfair Display + Hanken Grotesk + JetBrains Mono

**No quiero**: Neón excesivo, animaciones pesadas, ilustraciones genéricas, white-mode

**Referencias**: sellumlabs.com, Bridgewater, Bloomberg Terminal, Vercel dark mode
