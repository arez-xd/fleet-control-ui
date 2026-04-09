# Effects

How the system models depth, separation, and overlays in a dark-first interface.

## Why effects matter in dark UI

Heavy traditional shadows work poorly on very dark surfaces. They collapse into the background and do not create reliable separation.

This system uses a layered effect model:

- subtle ambient shadow for depth
- edge highlight for crisp separation
- alpha overlays for modal and chart layering

## Token structure

Core effects live in [tokens/core/effects.json].

Semantic effects live in [tokens/semantic/effects.json].

Current semantic roles:

- `effects.shadow.surface.elevated`
- `effects.highlight.surface.elevated`
- `effects.overlay.scrim.modal`

## Figma constraint

Effects are part of the token system, but Figma variables cannot store shadow composites as standard variables. That means:

- effect tokens remain source-of-truth in JSON
- Figma variable sync should skip composite shadow storage
- the semantic names still matter because they define the official design language

## When to use effects

### Elevated widget

Use:

- `effects.shadow.surface.elevated`
- `effects.highlight.surface.elevated`

for floating widgets, raised cards, and popover-like surfaces.

### Scrim / blocking overlay

Use:

- `effects.overlay.scrim.modal`

for modal backdrops and other blocking overlays.

### Do not use effects to compensate for wrong surface color

If a surface needs stronger separation, first check:

- should the surface be `base` or `elevated`
- should the border use `default` or `strong`
- should there be an explicit separator

Effects should reinforce hierarchy, not replace it.
