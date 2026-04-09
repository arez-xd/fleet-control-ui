# Governance

Rules for evolving the token system without losing clarity or breaking the Figma migration.

## Change principles

- add physical values only to `tokens/core/*`
- add UI meaning only to `tokens/semantic/*`
- keep semantic naming role-based, not component-based
- prefer extending semantic roles before introducing new physical colors
- do not add new literals to Figma when an official token can express the same thing

## When a new color may be added to core

A new physical color is justified only if one of the following is true:

- it exists repeatedly in audited production Figma screens
- it is required for an official status, brand, or data role
- it is needed to preserve visual parity during migration

If the need is only local to one component, do not add a new core color. Fix the semantic model instead.

## When a new semantic token may be added

A new semantic token is justified when:

- an existing role cannot express the UI meaning cleanly
- the distinction is conceptual, not merely visual
- at least two consumers are likely to need the role

Examples of good additions:

- `color.border.focus`
- `space.section.lg`
- `typography.role.metric`

Examples of bad additions:

- `color.cardWidgetBlue`
- `space.specialSidebarGap`
- `typography.role.topNavLabelPrinter`

## Migration policy

The project is currently in migration from hardcoded Figma values to governed token usage.

During migration we allow:

- extra physical families in core that legalize existing audited colors
- semantic `legacy.*` groups where needed to bridge old UI patterns

We do not allow:

- new undocumented literal colors
- components consuming `core` directly
- reviving a light-theme branch that the product no longer supports

## Review checklist

Every token change should answer:

1. is this a physical value or a semantic role
2. does the name describe intent clearly
3. can this be expressed with an existing token
4. does this preserve or improve migration toward Figma variables
5. does this introduce unnecessary palette fragmentation
