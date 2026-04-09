# Color System

Dark-first color architecture for the printer dashboard and related operational views.

## Goals

The color system is designed to do four jobs well:

- support a dense dark UI without muddy contrast
- separate structure from meaning
- preserve colors already used in the audited Figma screens
- provide a clean semantic API for code and Figma variables

## Core palette

Core colors live in [tokens/core/color.json].

### Neutral

Neutral is the structural backbone of the product.

Recommended reading of the scale:

- `0` to `300`: foreground and readable light text
- `400` to `600`: muted text, secondary chrome, supporting UI
- `700` to `950`: dark surfaces, headers, canvas, overlays

Important dark dashboard stops:

| Token | Value | Role |
|-------|-------|------|
| `neutral.0` | `#FFFFFF` | Maximum foreground |
| `neutral.300` | `#A1A1AA` | Soft readable text / active hover labels |
| `neutral.400` | `#71717A` | Quiet text / muted icons in navigation |
| `neutral.500` | `#52525B` | Section labels / low-emphasis helper text |
| `neutral.800` | `#27272A` | Current default chrome / borders |
| `neutral.850` | `#1F1F23` | Elevated surface / hover rows |
| `neutral.900` | `#18181B` | Base card surface |
| `neutral.950` | `#111113` | Current shell and header background |

### Brand and functional families

The palette intentionally keeps several hue families:

- `blue`: canonical system blue
- `indigo`: current dashboard brand/action family
- `green`: standard success family
- `emerald`: current dashboard success/live family
- `amber`: canonical warning family
- `orange`: current maintenance/warning family seen in Figma
- `red`: canonical destructive family
- `rose`: current dashboard destructive family seen in Figma
- `cyan`: chart and data emphasis
- `purple`: accent and extended data series

### Why both canonical and legacy families exist

The requested W3C system introduced canonical families such as `blue`, `green`, `amber`, and `red`.  
The audited Figma dashboard already uses a different set of recurring physical values, including:

- `#3A43FF`, `#6366F1`, `#8B91FF`
- `#10B981`, `#34D399`
- `#D4A053`, `#E5A03A`
- `#DC3545`, `#E53A3A`, `#F07682`

Instead of treating those as undocumented exceptions, they are legalized as physical palette entries so we can bind existing screens cleanly, then normalize usage at the semantic layer.

## Alpha system

Alpha tokens exist because the dashboard already relies heavily on translucent overlays and chart fills.

Current alpha groups:

- `color.alpha.white.*`
- `color.alpha.black.*`
- `color.alpha.indigo.*`
- `color.alpha.rose.*`
- `color.alpha.orange.*`
- `color.alpha.emerald.*`
- `color.alpha.neutral.*`

These should be preferred over ad hoc RGBA literals.

## Semantic color roles

Semantic colors live in [tokens/semantic/color.json].

### Backgrounds

| Token | Resolves to | Usage |
|-------|-------------|-------|
| `color.bg.canvas` | `neutral.950` | App shell and canvas |
| `color.bg.surface.base` | `neutral.900` | Standard widget/card surface |
| `color.bg.surface.elevated` | `neutral.850` | Raised groups and sub-panels |
| `color.bg.surface.subtle` | `neutral.850` | Low-contrast grouped areas |
| `color.bg.sidebar` | `neutral.950` | Left navigation rail |

### Text

| Token | Resolves to | Usage |
|-------|-------------|-------|
| `color.text.primary` | `neutral.150` | Default primary foreground in the live app |
| `color.text.secondary` | `neutral.300` | Readable support text |
| `color.text.tertiary` | `neutral.400` | Navigation labels / secondary icons |
| `color.text.supporting` | `neutral.300` | Footer metadata / operational support text |
| `color.text.quiet` | `neutral.500` | Section labels / very quiet copy |
| `color.text.muted` | `neutral.400` | Metadata, timestamps, chart axis labels |
| `color.text.strong` | `neutral.100` | Emphasized support text without going full white |
| `color.text.inverse` | `neutral.950` | Text on light/accent fills |

### Border

| Token | Resolves to | Usage |
|-------|-------------|-------|
| `color.border.default` | `neutral.800` | Standard widget outlines / current app chrome |
| `color.border.subtle` | `neutral.850` | Inner separators / soft framing / hover separators |
| `color.border.strong` | `neutral.700` | Emphasized boundaries |
| `color.border.focus` | `indigo.600` | Focus ring color |

### Sidebar and shell roles

The live app currently has a stable sidebar language, so it now has explicit semantic tokens:

- `color.sidebar.item.default.text`
- `color.sidebar.item.active.bg`
- `color.sidebar.item.active.text`
- `color.sidebar.item.hover.bg`
- `color.sidebar.item.hover.text`
- `color.sidebar.section.label`
- `color.sidebar.footer.meta`

These should be used instead of reaching for raw neutrals or indigo alphas in navigation code.

### Notification roles

System notification icons in the live app are also first-class now:

- `color.notification.upgrade`
- `color.notification.warning`
- `color.notification.info`

### Interactive

Interactive roles are defined by state, not by component name.

Primary:

- `color.interactive.primary.default`
- `color.interactive.primary.hover`
- `color.interactive.primary.pressed`
- `color.interactive.primary.disabled`
- `color.interactive.primary.text`

Secondary:

- `color.interactive.secondary.default`
- `color.interactive.secondary.hover`
- `color.interactive.secondary.pressed`
- `color.interactive.secondary.text`

Ghost:

- `color.interactive.ghost.default`
- `color.interactive.ghost.hover`
- `color.interactive.ghost.pressed`
- `color.interactive.ghost.text`

### Status

Status tokens carry meaning and should not be reused as chart series.

| Status | fg | bg | border |
|--------|----|----|--------|
| `idle` | indigo | indigo alpha | indigo |
| `printing` | indigo strong | indigo alpha | indigo |
| `error` | rose | rose alpha | rose |
| `maintenance` | orange | orange alpha | orange |
| `success` | emerald | emerald alpha | emerald |

### Data

Data series are identity colors, not judgment colors.

| Token | Value |
|-------|-------|
| `color.data.series.1` | blue |
| `color.data.series.2` | cyan |
| `color.data.series.3` | emerald |
| `color.data.series.4` | amber |
| `color.data.series.5` | purple |

## Decision rules

### Which neutral token should I use?

Use semantic roles first. If you are defining new semantic roles, follow this logic:

- shell background → `neutral.950`
- base card surface → `neutral.900`
- elevated or grouped region → `neutral.850`
- primary readable text → `neutral.150`
- secondary readable text → `neutral.300`
- muted metadata → `neutral.400`

### Which accent family should I use?

- product interaction → `indigo`
- canonical brand/system blue → `blue`
- success/live → `emerald`
- warning/maintenance → `orange`
- destructive/error → `rose`
- data visualization → `data.series.*`

## Figma migration note

The audited Figma frames still contain literal fills and strokes. The migration target is:

- surfaces → `color.bg.*`
- text → `color.text.*`
- outlines → `color.border.*`
- status dots and badges → `color.status.*`
- charts and bars → `color.data.series.*`
- translucent overlays → `color.alpha.*`

Literal color usage should shrink over time until no audited frame depends on raw hex values.
