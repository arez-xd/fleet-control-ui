# Components

Implementation guidance and token contracts for component authors.

## Core rule

Components consume semantic tokens only.

Wrong:

```ts
backgroundColor: tokens.core.color.base.indigo[600]
```

Correct:

```ts
backgroundColor: tokens.color.interactive.primary.default
```

## What belongs in a component contract

Every component contract should define:

1. structure
2. semantic token dependencies
3. interactive states
4. size variants
5. content rules

## Minimum component contracts

### Button

Button should depend on:

- `color.interactive.primary.*`
- `color.interactive.secondary.*`
- `color.interactive.ghost.*`
- `space.control.*`
- `size.control.height.*`
- `size.hitArea.min`
- `radius.control`
- `border.control.*`
- `typography.role.button`
- `typography.role.buttonCompact`

Recommended variants:

- `primary`
- `secondary`
- `ghost`
- `icon-only`

Recommended states:

- `default`
- `hover`
- `pressed`
- `disabled`

### Card

Card should depend on:

- `color.bg.surface.base`
- `color.bg.surface.elevated`
- `color.text.primary`
- `color.text.secondary`
- `space.inset.card`
- `space.stack.*`
- `space.section.*`
- `radius.card`
- `border.separator.default`
- `effects.shadow.surface.elevated`
- `effects.highlight.surface.elevated`

Recommended substructure:

- header
- body
- footer
- optional action rail

### Input

Input should depend on:

- `color.bg.surface.base`
- `color.text.primary`
- `color.text.secondary`
- `color.icon.secondary`
- `color.status.error.*`
- `size.field.height.md`
- `space.field.*`
- `radius.control`
- `border.control.default`
- `border.control.focused`
- `border.status.error`
- `typography.role.input`
- `typography.role.label`
- `typography.role.caption`

Recommended states:

- `default`
- `focused`
- `disabled`
- `error`

## Dashboard-specific patterns

### Widget shell

Typical dashboard widgets should use:

- `color.bg.surface.base` for body
- `color.bg.surface.elevated` or `color.legacy.surface.header` for header strips
- `color.border.default` for outer stroke
- `space.inset.card` for internal padding
- `radius.card` for shell radius

### Sidebar navigation

Sidebar and shell navigation should use:

- `color.bg.sidebar` for the rail container
- `color.sidebar.item.default.text` for inactive labels
- `color.sidebar.item.active.bg` and `color.sidebar.item.active.text` for the selected destination
- `color.sidebar.item.hover.bg` and `color.sidebar.item.hover.text` for hover
- `color.sidebar.section.label` for grouped section headers
- `color.sidebar.footer.meta` for system health/footer metadata
- `size.sidebar.width` and `size.topbar.height` for shell layout
- `typography.role.navItem`, `typography.role.overline`, and `typography.role.meta`

### Status dot + label row

Use:

- status dot fill from `color.status.*.fg`
- text from `color.text.secondary` or `color.text.primary`
- spacing from `space.cluster.xs` or `space.cluster.sm`

### KPI / metric block

Use:

- metric value from `typography.role.metric`
- unit or suffix from `typography.role.h4` or `typography.role.label`
- primary value color from `color.text.primary`
- trend color from `color.status.*.fg` only when it really encodes semantic state
- chart trend identity from `color.data.series.*` when it is just a series

## Common mistakes

### Hardcoding physical colors in components

If a component reaches into `color.base.*`, the abstraction boundary is already broken.

### Naming semantic roles after components

Avoid:

- `color.button.primary`
- `color.card.border`
- `color.input.background`

Prefer:

- `color.interactive.primary.default`
- `color.border.default`
- `color.bg.surface.base`

### Mixing status and chart colors

Do not use `color.status.error.fg` for a data series or `color.data.series.3` as a success message color.

## Review checklist

Before a component contract is accepted:

- it references semantic tokens only
- it defines all required states
- it supports the minimum hit area where interactive
- it does not invent new physical color values
- it does not leak component names into semantic token design
