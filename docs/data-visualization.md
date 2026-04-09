# Data Visualization

Guidelines for charts, progress bars, KPI blocks, and analytical widgets in the dark operational dashboard.

## Principle

Data colors are not status colors.

Use:

- `color.data.series.*` for chart identity
- `color.status.*` only when the interface is explicitly communicating state

This keeps dashboards readable and avoids encoding accidental meaning into a series color.

## Official series

Current semantic data series:

| Token | Core source | Role |
|-------|-------------|------|
| `color.data.series.1` | `blue.500` | default primary series |
| `color.data.series.2` | `cyan.500` | comparison series |
| `color.data.series.3` | `emerald.500` | third series |
| `color.data.series.4` | `amber.500` | fourth series |
| `color.data.series.5` | `purple.700` | extended series |

## Supporting chart UI

Charts and metric widgets also rely on the regular semantic system:

- chart container → `color.bg.surface.base`
- elevated chart shell → `color.bg.surface.elevated`
- axis labels and helper labels → `color.text.muted`
- separators and guides → `color.border.subtle`
- overlays and selected ranges → approved `color.alpha.*`

## Usage patterns

### Line charts

- primary trend → `series.1`
- comparison trend → `series.2`
- forecast or secondary context → `series.5`

### Bars and progress tracks

- active fill → a `series.*` token or a `status.*.fg` token if the bar truly encodes state
- inactive track → `color.bg.surface.elevated` or `color.border.subtle`

### KPI blocks

- main number → `typography.role.metric` + `color.text.primary`
- unit or suffix → `typography.role.label` or `typography.role.caption`
- delta color → `color.status.*.fg` only when the delta is semantically meaningful

### Donuts and segmented charts

- prefer 2 to 4 simultaneous series
- use `series.1` through `series.4` before reaching for `series.5`
- if the chart is actually a status distribution, a status palette is valid, but the chart should be labeled as status-driven

## Decision rules

### Should this use a data series color or a status color?

Use data series when the color distinguishes one dataset from another.

Use status color when the color communicates product meaning such as:

- error
- maintenance
- success
- idle
- printing

### Can I use red or green in a chart?

Yes, but only as a series identity unless the chart is explicitly about status.

## Migration note

The audited Figma dashboard uses a mix of:

- indigo alpha steps
- cyan comparison colors
- emerald and orange in both status and chart contexts
- occasional purple extension colors

The target cleanup is:

- normalize charts to `color.data.series.*`
- normalize stateful UI to `color.status.*`
- remove raw alpha literals in favor of governed `color.alpha.*`
