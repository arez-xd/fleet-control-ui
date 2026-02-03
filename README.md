# F2 Design System

A design token system for complex, web applications.

This repository defines the visual foundations of a production UI: color, typography, spacing, radii, borders, and states.  
It is structured around a clear separation between **core primitives** and **semantic tokens**, with the goal of making the system predictable, maintainable, and safe to evolve.

---

## Purpose

This system exists to support real product constraints:

- dark-first interfaces
- operational dashboards and status-heavy UIs
- high information density
- long-lived products with changing requirements

It is not intended as a generic UI kit or a visual style guide.  
Its primary role is to define a shared, stable contract between design and engineering.

---

## Key ideas

### Semantic tokens as the public API

UI components never consume raw values such as hex colors or pixel sizes.  
They consume semantic tokens, for example:

- `color.bg.surface`
- `color.status.error`
- `type.ui.h3`

This allows visual changes to happen without breaking component logic or design intent.

---

### Clear separation of layers

| Layer | Responsibility |
|------|----------------|
| Core tokens | Raw primitives (colors, scales, numbers) |
| Semantic tokens | Meaning and usage in the UI |
| Components | Layout, behavior, composition |

Core tokens do not encode UI meaning.  
Semantic tokens do not define raw values.

---

### Dark-first, theme-aware

The system is designed for dark interfaces by default.  
Light and dark variants are handled by remapping semantic tokens, not by duplicating component styles.

---

### Validated against a real product

All tokens and abstractions are based on an actual production dashboard, including:

- operational states
- alerts and health indicators
- navigation subsystems
- data visualization

Nothing is included purely for demonstration.

---

## Repository structure

```text
design-system/
├── README.md
│
├── tokens/
│   ├── core/
│   │   ├── color.json
│   │   ├── space.json
│   │   ├── radius.json
│   │   ├── border.json
│   │   └── typography.json
│   │
│   ├── color.json
│   ├── type.json
│   ├── space.json
│   ├── radius.json
│   └── border.json
│
├── docs/
│   ├── principles.md
│   ├── tokens.md
│   ├── typography.md
│   ├── spacing.md
│   └── components.md
│
└── figma/
    └── README.md
