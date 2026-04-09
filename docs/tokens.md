# Tokens

Reference and usage rules for the current design-token source of truth.

## Format

All source tokens use W3C-style fields:

- `$value`
- `$type`

Examples:

```json
{
  "color": {
    "base": {
      "indigo": {
        "600": {
          "$value": "#3A43FF",
          "$type": "color"
        }
      }
    }
  }
}
```

```json
{
  "color": {
    "text": {
      "secondary": {
        "$value": "{color.base.neutral.300}",
        "$type": "color"
      }
    }
  }
}
```

## Folder layout

### Core source

- `tokens/core/color.json`
- `tokens/core/space.json`
- `tokens/core/typography.json`
- `tokens/core/size.json`
- `tokens/core/radius.json`
- `tokens/core/border.json`
- `tokens/core/stroke.json`
- `tokens/core/effects.json`

### Semantic source

- `tokens/semantic/color.json`
- `tokens/semantic/space.json`
- `tokens/semantic/typography.json`
- `tokens/semantic/size.json`
- `tokens/semantic/radius.json`
- `tokens/semantic/border.json`
- `tokens/semantic/stroke.json`
- `tokens/semantic/effects.json`

### Generated output

- `tokens/build/ts/tokens.ts`

## What belongs where

### Core

Put a token in `core` if it is:

- a physical color
- a raw alpha color
- a number scale
- a raw radius
- a raw stroke width
- a raw shadow recipe

### Semantic

Put a token in `semantic` if it expresses:

- UI role
- state
- hierarchy
- intent

## Figma-related constraints

Important rules for future Figma variable generation:

- colors can become `COLOR`
- numbers can become `FLOAT`
- `fontFamily` remains source-only and should be skipped in Figma variables
- shadow composites remain source-only and should be skipped in Figma variables
- semantic aliases should resolve directly to core whenever possible

## Current token families

### Core

- color
- space
- typography
- size
- radius
- border
- stroke
- effects

### Semantic

- color
- space
- typography
- size
- radius
- border
- stroke
- effects

## Migration notes

This token base was created while reverse-engineering an existing dark Figma dashboard.

That means:

- some core families exist to legalize recurring legacy colors
- some semantic `legacy.*` tokens exist to bridge audited Figma patterns
- generated artifacts are not yet fully automated

The target end state is still clean:

- governed core primitives
- semantic roles only in application code and Figma
- no raw hex usage in audited frames
