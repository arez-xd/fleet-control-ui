# Typography

Typography rules for a dense dashboard UI with metrics, labels, controls, and operational text.

Current primitive groups:

- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`

## Important Figma note

For Figma variable generation:

- `fontSize`, `fontWeight`, and `lineHeight` are valid numeric candidates
- `fontFamily` is source-only and should not become a Figma variable
- `letterSpacing` should remain source-only unless we decide on a px-only storage strategy

Current roles:

- `display`
- `h1`
- `h2`
- `h3`
- `h4`
- `body`
- `label`
- `button`
- `buttonCompact`
- `input`
- `caption`
- `meta`
- `navItem`
- `overline`
- `metric`

## Role intent

### Display and headings

- `display` for oversized dashboard hero numbers or headline callouts
- `h1` for page-level titles
- `h2` for section headers
- `h3` and `h4` for widget and subgroup headers

### Body and support

- `body` for readable operational content
- `label` for field labels, chips, compact helper labels
- `caption` for timestamps, helper copy, row metadata
- `meta` for footer/system metadata that repeats across dense shells
- `overline` for section headers such as rail grouping labels

### Controls

- `button` for standard actions
- `buttonCompact` for dense controls in tables, widget headers, and rails
- `input` for text-entry surfaces
- `navItem` for persistent navigation labels where readability and scan speed matter

### Metrics

- `metric` for KPI values and dashboard numerics

## Decision rules

### Which role should I use?

- page title → `h1`
- widget title → `h4` or `label`
- readable paragraph or descriptive line → `body`
- compact support text → `caption`
- footer or shell metadata → `meta`
- navigation label → `navItem`
- uppercase section marker → `overline`
- standard button label → `button`
- dense action label → `buttonCompact`
- metric value → `metric`

### Should I create a new role?

Only if the text has a stable product meaning that the current set cannot express.  
Do not create new roles just because one screen wants a slightly different size.

## Dashboard usage patterns

### Widget

- title → `h4`
- helper/meta → `caption`
- KPI value → `metric`

### Monitoring row

- primary row label → `body`
- support label → `caption`
- compact count or badge text → `label`

### Header rail

- page title → `h1`
- system status line → `caption`
- action labels → `buttonCompact` or `button`

### Sidebar navigation

- navigation item label → `navItem`
- section divider label → `overline`
- footer system/meta line → `meta`
