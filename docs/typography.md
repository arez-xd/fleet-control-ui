# Typography

This document defines the typography system used across the product UI.

The goal of the system is to provide a clear, predictable hierarchy for dense, operational interfaces without relying on decorative styles or excessive variation.

---

## Type scale

The typography system is based on a fixed scale:

**12 / 14 / 16 / 18 / 20 / 24 / 30**

This scale is designed to:
- support high information density
- maintain a clear visual hierarchy
- remain legible across dashboards and control interfaces
- avoid unnecessary visual noise

The scale is intentionally limited.  
New sizes should not be introduced unless a recurring and well-justified need appears.

---

## Semantic roles

Typography is applied using **semantic roles**, providing an abstraction over raw numeric values.

UI components reference typography tokens by intent, for example:
- `type.ui.h3`
- `type.ui.body`
- `type.ui.caption`

This ensures that changes to the scale or hierarchy do not require changes in component logic.

### Defined roles

- **`type.ui.h1`** — page titles and top-level views  
- **`type.ui.h2`** — section headers and major content blocks  
- **`type.ui.h3`** — card titles and secondary headers  
- **`type.ui.body`** — primary content and readable text  
- **`type.ui.label`** — UI labels and form-related text  
- **`type.ui.caption`** — metadata and secondary information  

Roles should be applied consistently across the interface.
If a role feels ambiguous, the hierarchy should be clarified rather than overridden locally.

---

## Font weights

Only two font weights are used:

- **Regular (400)**
- **Medium (500)**

This constraint is intentional.

Limiting the number of font weights:
- improves consistency
- reduces visual noise
- makes hierarchy rely on size and spacing rather than weight
- simplifies implementation across platforms

Heavier weights are avoided in order to preserve clarity in dense layouts.

---

## Line height

Line height values are defined as **unitless multipliers** relative to the font size.

This approach:
- scales naturally with typography size changes
- behaves predictably in nested components
- avoids hard-coding vertical rhythm into absolute values

Line height is applied via semantic tokens and should not be overridden at the component level.

---

## Typography scope

This system intentionally does not tokenize **font family** or **letter spacing**.

### Font family

Font family is defined at the application level and treated as a global platform decision.
As long as a single primary UI font is used, introducing a font family token would add an extra abstraction layer without practical benefit.

If multiple font families become a requirement (for example, brand variants or platform-specific typography), font family can be introduced as a token at that point.

---

### Letter spacing

Letter spacing is not tokenized because it is highly context-dependent.

In product and operational interfaces:
- tracking is typically neutral
- variation is rare and situational
- most text remains mixed-case and functional

Introducing a global letter-spacing token would reduce clarity rather than improve it.

Letter spacing may be introduced as a token if specific use cases appear, such as:
- uppercase labels
- status badges
- monospace or tabular text

---

## Summary

The typography system prioritizes:
- clarity over expressiveness
- consistency over flexibility
- semantic intent over visual tweaking

Any changes to the system should be driven by recurring product needs rather than isolated design decisions.
