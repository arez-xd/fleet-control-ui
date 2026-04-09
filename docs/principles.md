# Principles

The token system exists to create a stable interface between design decisions, Figma implementation, and product code.

## Core ideas

- Core tokens contain raw values only.
- Semantic tokens are the public API.
- Components consume semantic tokens only.
- The active system is dark-only and dark-first.
- Literal colors in Figma are migration debt, not design-system truth.

## Naming philosophy

Use names that communicate role and state.

Good:

- `color.text.secondary`
- `color.interactive.primary.pressed`
- `space.inset.card`
- `typography.role.metric`

Bad:

- `color.blueButton`
- `color.sidebarCardBorder`
- `space.monitoringSectionGapLarge`

## Product fit

This system is optimized for:

- dense dashboards
- operational monitoring
- dark surfaces
- chart-heavy layouts
- Figma-to-code workflows

It is not trying to be theme-agnostic or style-neutral. It is intentionally tuned to the current product.

## Migration stance

We preserve current visual language where it is already validated in Figma, but we move it under governance:

- first legalize recurring physical values in core
- then map them to semantic roles
- then bind Figma and components to semantic tokens
