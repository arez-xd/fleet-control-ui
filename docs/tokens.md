# Token Architecture

The system is composed of two layers: core tokens and semantic tokens.

---

## Core tokens

Core tokens define primitive values:
- color palettes
- spacing scales
- typography scales
- radii and borders

They contain no UI meaning.

Examples:
- `core.color.neutral.bg.950`
- `core.space.4`
- `core.type.fontSize.16`

---

## Semantic tokens

Semantic tokens define how primitives are used in the interface.

They reference core tokens and may vary by theme.

Examples:
- `color.bg.surface`
- `color.text.secondary`
- `color.status.error`

---

## Theme resolution

Semantic tokens can resolve differently depending on the theme:

```json
"color.bg.surface": {
  "light": "{core.color.neutral.surface.0}",
  "dark": "{core.color.neutral.surface.1}"
}
