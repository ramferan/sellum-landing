# 🧵 Prompt para Stitch — Nebula Landing

Pega esto en [stitch.withgoogle.com](https://stitch.withgoogle.com) o envíalo vía MCP:

```
Generate a complete, self-contained HTML file for NEBULA product landing page.
Use the SELLUM Labs editorial design system: black and white, high contrast,
Playfair Display for headings, Hanken Grotesk for body text, sharp corners (no border-radius),
1px editorial borders (#E5E5E5), background #f9f9f9.

## WHAT THIS SCREEN DOES
Product landing page for Nebula — an AI-assisted trading signal platform.
Communicates credibility, quantitative rigor, and removes emotional noise from trading.

### Core Sections (by priority)
1. Hero section: large "Nebula" title, tagline "TRADING INTELLIGENCE",
   subtitle about LSTM + macro analysis, CTA button "Try Nebula" in teal (#0ea5a0)
2. How it works: 3-step process (Data Analysis → Signal Generation → Trade Decision)
3. Features section: key capabilities (LSTM models, Macro Analysis, Risk Management)
4. Metrics/compliance section: show accuracy rate, supported markets, risk metrics
5. Bottom CTA section: "Start trading with clarity"

### Key Entities
- LSTM Deep Learning — core prediction engine
- Macro Regime Filtering — yield curve, credit spreads analysis
- Risk Management — volatility stop loss, Kelly criterion
- Weekly Signals — actionable trading recommendations

### User Context
- Traders and investors (retail and institutional)
- Desktop-first but mobile responsive
- Professional, serious tone

## MOCK DATA TO INCLUDE
- Hero: "84% signal accuracy", "$2.4M backtested volume", "1,200+ instruments analyzed"
- Features with icon descriptions
- 3-step process with numbered steps

## DESIGN RULES
- PRIMARY TEXT: #000000 (black)
- SECONDARY TEXT: #5d5f5f
- BACKGROUND: #f9f9f9
- ACCENT COLOR (CTA only): #0ea5a0 (teal)
- NO other colors — pure black and white editorial style
- NO rounded corners (border-radius: 0px)
- 1px borders using #E5E5E5
- Images must use grayscale filter
- Fonts: Playfair Display (headings), Hanken Grotesk (body)
- Material Symbols for icons
- TailwindCSS via CDN

## OUTPUT
Return ONLY the complete HTML file. Start with `<!DOCTYPE html>`. No markdown wrapping.
```

---

## 📐 Secciones esperadas

```
┌─────────────────────────────────────────────────┐
│  TRADING INTELLIGENCE                            │
│  NEBULA                                          │
│  Señales semanales por Deep Learning + macro     │
│  [Try Nebula →] (teal CTA)                       │
├─────────────────────────────────────────────────┤
│  ┌──────┐  ┌──────┐  ┌──────┐                   │
│  │ 84%  │  │ $2.4M│  │1.2K  │  ← metrics row    │
│  │ Acc. │  │ Vol. │  │Inst. │                    │
│  └──────┘  └──────┘  └──────┘                    │
├─────────────────────────────────────────────────┤
│  How It Works (3 steps)                          │
│  ① Data → ② Signal → ③ Decision                  │
├─────────────────────────────────────────────────┤
│  Features: LSTM · Macro · Risk                   │
├─────────────────────────────────────────────────┤
│  "Start trading with clarity"                    │
│  [Try Nebula →]                                  │
├─────────────────────────────────────────────────┤
│  Footer: © Nebula. All rights reserved.          │
└─────────────────────────────────────────────────┘
```
