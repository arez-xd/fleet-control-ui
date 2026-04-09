# Spacing

Spacing rules for a dense operational dashboard with compact controls and clearly structured widget layouts.

Current scale:

- `0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64`

This is a dashboard-friendly numeric scale rather than a pure marketing-site rhythm. It supports:

- tight icon-to-label relationships
- compact controls
- dense data rows
- card and panel spacing

### Inset

Used for container padding.

| Token | Typical usage |
|-------|---------------|
| `space.inset.xs` | chips, compact pills |
| `space.inset.sm` | tight control shells |
| `space.inset.md` | standard rows and small cards |
| `space.inset.lg` | larger grouped cards |
| `space.inset.card` | widget/card internals |
| `space.inset.panel` | larger panels and modal-like surfaces |

### Stack

Used for vertical rhythm.

| Token | Typical usage |
|-------|---------------|
| `space.stack.xs` | icon + label micro gaps |
| `space.stack.sm` | tightly related labels |
| `space.stack.md` | normal internal grouping |
| `space.stack.lg` | visible separation inside widgets |
| `space.stack.xl` | major internal section break |

### Cluster

Used for horizontal relationships.

| Token | Typical usage |
|-------|---------------|
| `space.cluster.xs` | status dot + label |
| `space.cluster.sm` | icon + text |
| `space.cluster.md` | grouped actions or pills |

### Section

Used between content blocks.

| Token | Typical usage |
|-------|---------------|
| `space.section.sm` | related widget sections |
| `space.section.md` | major card blocks |
| `space.section.lg` | large screen regions |

### Control

Used inside buttons and compact action elements.

### Field

Used inside form fields and searchable controls.

### List

Used in rows, tables, and monitoring lists.

## Decision rules

### Which spacing role should I use?

Ask what the relationship is:

- container padding → `inset.*`
- vertical relationship → `stack.*`
- horizontal relationship → `cluster.*`
- major block separation → `section.*`
- control internals → `control.*`
- input internals → `field.*`
- rows or lists → `list.*`

### Should I add a new spacing token?

Only if the existing roles cannot describe the relationship cleanly.  
Do not add spacing tokens just because one screen happens to need a slightly unusual numeric gap.

## Dashboard patterns

### Widget shell

Typical widget rhythm:

- outer padding → `space.inset.card`
- header to body → `space.stack.md` or `space.stack.lg`
- row-to-row → `space.stack.sm`

### Compact header rail

Typical compact rail rhythm:

- icon to text → `space.cluster.sm`
- adjacent status pills → `space.cluster.md`

### Monitoring list

Typical list rhythm:

- row padding → `space.list.rowInset`
- row gap → `space.list.itemGap`
