# Design System Principles

This document defines the rules that govern the system.
They are meant to reduce ambiguity and prevent ad-hoc decisions.

---

## 1. No raw values in UI code

Components must not use:
- hex colors
- pixel values
- font sizes or weights
- arbitrary spacing

If a required semantic token does not exist, it should be added.

---

## 2. Tokens are intent-driven and semantically defined

They capture semantic meaning, allowing visual traits to remain an implementation detail.

Prefer:
- `color.status.error`
- `color.bg.subtle`
- `type.ui.caption`

Avoid:
- `color.red`
- `color.darkGray`
- `text.small`

---

## 3. One purpose per token

A token should exist for a single, clearly defined use case.

If the same token is used in unrelated contexts, the abstraction is likely wrong and should be split.

---

## 4. States are part of the system

Hover, disabled, selected, focus, and status states are not exceptions.
If a component has a state, the corresponding tokens must exist.

---

## 5. The system grows deliberately

New tokens are introduced when:
- a new meaning appears
- a new domain is added
- a pattern becomes recurring

Single-screen workarounds do not justify new tokens.
