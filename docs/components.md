# Component Usage

Components consume semantic tokens only.

---

## Example: Card

A typical card uses:
- `color.bg.surface`
- `color.text.primary`
- `color.divider.default`
- `space.4` / `space.6`
- `radius.lg`

---

## Example: Status indicator

- foreground: `color.status.*`
- background: `color.bg.subtle`
- typography: `type.ui.caption`

---

## States

Components are expected to support:
- hover
- disabled
- selected
- focus (where applicable)

State styling must be derived from `state.*` tokens.
