# Architecture

How the token system is structured, how it maps to Figma, and how application code should consume it.

## System structure

```text
Design-system/
├── tokens/
│   ├── core/                  ← Physical primitives, source of truth
│   │   ├── color.json
│   │   ├── space.json
│   │   ├── typography.json
│   │   ├── size.json
│   │   ├── radius.json
│   │   ├── border.json
│   │   ├── stroke.json
│   │   └── effects.json
│   │
│   ├── semantic/              ← UI-facing roles and state mappings
│   │   ├── color.json
│   │   ├── space.json
│   │   ├── typography.json
│   │   ├── size.json
│   │   ├── radius.json
│   │   ├── border.json
│   │   ├── stroke.json
│   │   └── effects.json
│   │
│   └── build/                 ← Generated artifacts
│       └── ts/
│           └── tokens.ts
│
└── docs/                      ← Documentation and migration guidance
```

## Layer model

The system has two token layers and one implied consumer layer.

### Core

Core tokens define raw values:

- palette values
- alpha values
- numeric scales
- physical radii
- stroke widths
- raw effect recipes

Core tokens do not express intent. A core color is not a button color, an error color, or a chart color. It is only a physical value.

Examples:

- `color.base.neutral.950`
- `color.base.indigo.600`
- `space.16`
- `radius.12`
- `stroke.width.1`

### Semantic

Semantic tokens define purpose:

- where a color is used
- what kind of space it represents
- which typographic role a text element serves
- what border or status treatment means in the UI

Examples:

- `color.bg.canvas`
- `color.text.secondary`
- `color.interactive.primary.default`
- `space.inset.card`
- `typography.role.metric.fontSize`

### Components

Components are not stored as tokens, but every component contract must consume semantic tokens only.

Examples:

- Button uses `color.interactive.*`, `space.control.*`, `radius.control`
- Card uses `color.bg.surface.*`, `color.text.*`, `border.separator.*`
- Input uses `color.bg.surface.base`, `color.border.*`, `typography.role.input`

## Invariants

These rules are non-negotiable:

- Core contains raw values only.
- Semantic contains role and state only.
- Components never reference core tokens directly.
- The active system is dark-only. There is no supported light theme in the current token model.
- Figma variables should expose `Semantic` to designers and keep `Core` hidden from pickers.

## Why this separation matters

### Stable public API

Semantic tokens let us refine visuals without rewriting component code.

If `color.text.secondary` changes from one neutral stop to another, every component using secondary text updates automatically without changing its API.

### Controlled migration

The current Figma file still contains literal colors. By legalizing them first as physical tokens and then mapping them into semantic roles, we can migrate gradually instead of doing a risky visual rewrite in one pass.

### Figma compatibility

The structure is aligned with `cc-figma-tokens`:

- `Core` becomes one Figma collection with no scopes.
- `Semantic` becomes one Figma collection with role-based scopes.
- semantic aliases should resolve directly to core wherever possible.

## Figma mapping

### Target collections

- `Core`
- `Semantic`

### Core collection rules

- one default mode only
- raw values only
- no scopes
- never applied directly to components

### Semantic collection rules

- dark-first single mode
- aliases to core values
- minimum necessary scopes only
- used by designers and component authors

## Build model

`tokens/build/ts/tokens.ts` is currently a scaffold. The intended future workflow is:

1. edit source JSON in `tokens/core/*` or `tokens/semantic/*`
2. run a build step
3. generate typed artifacts for application code
4. generate or sync Figma variables from the same source

Generated files are outputs, not authoring locations.

## Migration context

This token system is not purely theoretical. It is built to absorb the existing Figma dashboard, which currently uses:

- dark-only surfaces
- hardcoded fills and strokes
- multiple legacy accent shades
- alpha overlays for charts and widgets

That is why `tokens/core/color.json` includes extra physical families such as `indigo`, `emerald`, `orange`, `rose`, and additional dark neutral stops. They are migration enablers, not permission to bypass semantic roles.
