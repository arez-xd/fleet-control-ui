/**
 * build/ts/tokens.ts
 * Generated file — do not edit manually.
 * Source of truth: tokens/core/*.json + tokens/semantic/*.json
 */

export type TokenValue = string | number | boolean | null;

export type TokenTree = {
  [key: string]: TokenTree | TokenValue;
};

/**
 * Minimal runtime token bundle.
 * - core values are concrete raw values
 * - semantic values are aliases expressed as "{...}" references
 */
export const tokens = {
  core: {
    border: {
      style: {
        solid: "solid",
        dashed: "dashed",
      },
    },

    color: {
      base: {
        neutral: {
          0: "#FFFFFF",
          50: "#F5F7FA",
          100: "#E8ECF2",
          150: "#E4E4E7",
          200: "#D0D7E2",
          300: "#A1A1AA",
          400: "#71717A",
          500: "#52525B",
          600: "#434C59",
          700: "#2E3640",
          800: "#27272A",
          850: "#1F1F23",
          900: "#18181B",
          950: "#111113",
        },
        blue: {
          100: "#D6E9FF",
          200: "#ADD3FF",
          300: "#85BDFF",
          400: "#4DA3FF",
          500: "#007AFF",
          600: "#005FCC",
          700: "#004799",
        },
        indigo: {
          100: "#E2E4FF",
          200: "#C7CBFF",
          300: "#A9AEFF",
          400: "#8B91FF",
          500: "#6366F1",
          600: "#3A43FF",
          700: "#2D33CC",
        },
        green: {
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#34C759",
          600: "#28A745",
          700: "#1A7A32",
          800: "#0F5221",
          900: "#072D12",
        },
        emerald: {
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        amber: {
          100: "#FFF4D6",
          200: "#FFE7AD",
          300: "#FFD27A",
          400: "#FFB84D",
          500: "#FF9F0A",
          600: "#CC7F08",
          700: "#995F06",
          800: "#664004",
          900: "#332002",
        },
        orange: {
          300: "#F6C67C",
          400: "#E5A03A",
          450: "#F59E0B",
          500: "#D4A053",
          600: "#B7791F",
        },
        red: {
          100: "#FFE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#FF453A",
          600: "#D92D20",
          700: "#A32218",
          800: "#6E1710",
          900: "#390C08",
        },
        rose: {
          300: "#F9A8B4",
          400: "#F07682",
          500: "#E53A3A",
          600: "#DC3545",
        },
        cyan: {
          400: "#22D3EE",
          500: "#00F2FF",
          600: "#0EA5B7",
        },
        purple: {
          500: "#7C3AED",
          550: "#8F3AFF",
          600: "#5B21B6",
          700: "#A78BFA",
        },
      },

      alpha: {
        white: {
          5: "#FFFFFF0D",
          10: "#FFFFFF1A",
          20: "#FFFFFF33",
          40: "#FFFFFF66",
          60: "#FFFFFF99",
        },
        black: {
          40: "#00000066",
          60: "#00000099",
          80: "#111113CC",
        },
        indigo: {
          10: "#3A43FF1A",
          12: "#3A43FF1F",
          20: "#3A43FF33",
          30: "#3A43FF4D",
          40: "#3A43FF66",
          50: "#3A43FF80",
          60: "#3A43FF99",
          70: "#3A43FFB2",
          80: "#3A43FFCC",
          90: "#3A43FFE5",
        },
        rose: {
          10: "#DC35451A",
          20: "#E53A3A33",
          80: "#DC3545CC",
        },
        orange: {
          5: "#D4A0530D",
          10: "#D4A0531A",
          15: "#E5A03A26",
          20: "#E5A03A33",
        },
        emerald: {
          10: "#34D3991A",
        },
        neutral: {
          40: "#1F1F2366",
          50: "#27272A80",
          60: "#A0A0AD99",
        },
      },

      special: {
        white: "#FFFFFF",
        black: "#000000",
      },
    },

    effects: {
      shadow: {
        0: {
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: "{core.color.alpha.black.40}",
        },
        sm: {
          x: 0,
          y: 4,
          blur: 12,
          spread: 0,
          color: "{core.color.alpha.black.40}",
        },
      },
      highlight: {
        soft: {
          x: 0,
          y: 1,
          blur: 0,
          spread: 0,
          color: "{core.color.alpha.white.10}",
        },
      },
    },

    radius: {
      0: 0,
      4: 4,
      6: 6,
      8: 8,
      10: 10,
      12: 12,
      16: 16,
      20: 20,
      999: 999,
    },

      size: {
        0: 0,
        1: 1,
      2: 2,
      4: 4,
      6: 6,
      8: 8,
      12: 12,
      14: 14,
      16: 16,
      18: 18,
      20: 20,
      24: 24,
      28: 28,
      32: 32,
      36: 36,
      40: 40,
      44: 44,
      48: 48,
        56: 56,
        64: 64,
        66: 66,
        72: 72,
        80: 80,
        96: 96,
      248: 248,
    },

    space: {
      0: 0,
      2: 2,
      4: 4,
      6: 6,
      8: 8,
      10: 10,
      12: 12,
      14: 14,
      16: 16,
      20: 20,
      24: 24,
      28: 28,
      32: 32,
      36: 36,
      40: 40,
      48: 48,
      56: 56,
      64: 64,
    },

    stroke: {
      width: {
        0: 0,
        1: 1,
        2: 2,
        4: 4,
      },
    },

      typography: {
      fontFamily: {
        sans: "Inter",
      },
      fontSize: {
        11: 11,
        12: 12,
        14: 14,
        16: 16,
        18: 18,
        20: 20,
        24: 24,
        30: 30,
        48: 48,
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
      },
      lineHeight: {
        100: 1,
        120: 1.2,
        130: 1.3,
        140: 1.4,
        150: 1.5,
      },
      letterSpacing: {
        0: 0,
        12: 0.12,
        100: 1,
      },
    },
  },

  semantic: {
    border: {
      control: {
        default: {
          width: "{semantic.stroke.width.default}",
          color: "{semantic.color.border.default}",
        },
        focused: {
          width: "{semantic.stroke.width.focus}",
          color: "{semantic.color.border.focus}",
        },
        disabled: {
          width: "{semantic.stroke.width.default}",
          color: "{semantic.color.border.subtle}",
        },
      },
      separator: {
        default: {
          width: "{semantic.stroke.width.default}",
          color: "{semantic.color.border.default}",
        },
      },
      status: {
        error: {
          width: "{semantic.stroke.width.default}",
          color: "{semantic.color.border.status.error}",
        },
        warning: {
          width: "{semantic.stroke.width.default}",
          color: "{semantic.color.border.status.warning}",
        },
        success: {
          width: "{semantic.stroke.width.default}",
          color: "{semantic.color.border.status.success}",
        },
      },
      focus: {
        ring: {
          width: "{semantic.stroke.width.focus}",
          color: "{semantic.color.focus.ring}",
        },
      },
    },

    color: {
      bg: {
        canvas: "{core.color.base.neutral.950}",
        surface: {
          base: "{core.color.base.neutral.900}",
          elevated: "{core.color.base.neutral.850}",
          subtle: "{core.color.base.neutral.850}",
        },
        sidebar: "{core.color.base.neutral.950}",
      },

      text: {
        primary: "{core.color.base.neutral.150}",
        secondary: "{core.color.base.neutral.300}",
        tertiary: "{core.color.base.neutral.400}",
        supporting: "{core.color.base.neutral.300}",
        quiet: "{core.color.base.neutral.500}",
        muted: "{core.color.base.neutral.400}",
        strong: "{core.color.base.neutral.100}",
        inverse: "{core.color.base.neutral.950}",
      },

      icon: {
        primary: "{core.color.base.neutral.300}",
        secondary: "{core.color.base.neutral.400}",
        muted: "{core.color.base.neutral.500}",
        accent: "{core.color.base.indigo.600}",
      },

      border: {
        default: "{core.color.base.neutral.800}",
        subtle: "{core.color.base.neutral.850}",
        strong: "{core.color.base.neutral.700}",
        focus: "{core.color.base.indigo.600}",
        status: {
          error: "{core.color.base.rose.600}",
          warning: "{core.color.base.orange.500}",
          success: "{core.color.base.emerald.500}",
          idle: "{core.color.base.indigo.500}",
        },
      },

      interactive: {
        primary: {
          default: "{core.color.base.indigo.600}",
          hover: "{core.color.base.indigo.500}",
          pressed: "{core.color.base.indigo.700}",
          disabled: "{core.color.base.neutral.800}",
          text: "{core.color.base.neutral.0}",
        },
        secondary: {
          default: "{core.color.base.neutral.850}",
          hover: "{core.color.base.neutral.800}",
          pressed: "{core.color.base.neutral.700}",
          text: "{core.color.base.neutral.0}",
        },
        ghost: {
          default: "{core.color.alpha.indigo.10}",
          hover: "{core.color.alpha.indigo.12}",
          pressed: "{core.color.alpha.indigo.20}",
          text: "{core.color.base.indigo.600}",
        },
      },

      sidebar: {
        item: {
          default: {
            text: "{core.color.base.neutral.400}",
          },
          active: {
            bg: "{core.color.alpha.indigo.12}",
            text: "{core.color.base.indigo.400}",
          },
          hover: {
            bg: "{core.color.base.neutral.850}",
            text: "{core.color.base.neutral.300}",
          },
        },
        section: {
          label: "{core.color.base.neutral.500}",
        },
        footer: {
          meta: "{core.color.base.neutral.300}",
        },
      },

      notification: {
        upgrade: "{core.color.base.indigo.600}",
        warning: "{core.color.base.orange.450}",
        info: "{core.color.base.neutral.400}",
      },

      status: {
        idle: {
          fg: "{core.color.base.indigo.500}",
          bg: "{core.color.alpha.indigo.10}",
          border: "{core.color.base.indigo.400}",
        },
        printing: {
          fg: "{core.color.base.indigo.600}",
          bg: "{core.color.alpha.indigo.12}",
          border: "{core.color.base.indigo.500}",
        },
        error: {
          fg: "{core.color.base.rose.600}",
          bg: "{core.color.alpha.rose.10}",
          border: "{core.color.base.rose.500}",
        },
        maintenance: {
          fg: "{core.color.base.orange.500}",
          bg: "{core.color.alpha.orange.10}",
          border: "{core.color.base.orange.400}",
        },
        success: {
          fg: "{core.color.base.emerald.500}",
          bg: "{core.color.alpha.emerald.10}",
          border: "{core.color.base.emerald.400}",
        },
      },

      focus: {
        ring: "{core.color.base.indigo.600}",
      },

      overlay: {
        scrim: {
          soft: "{core.color.alpha.black.40}",
          strong: "{core.color.alpha.black.60}",
        },
      },

      data: {
        series: {
          1: "{core.color.base.blue.500}",
          2: "{core.color.base.cyan.500}",
          3: "{core.color.base.emerald.500}",
          4: "{core.color.base.amber.500}",
          5: "{core.color.base.purple.700}",
        },
      },

      gradient: {
        brand: {
          start: "{core.color.base.indigo.600}",
          end: "{core.color.base.purple.550}",
        },
        avatar: {
          start: "{core.color.base.indigo.600}",
          end: "{core.color.base.purple.550}",
        },
      },

      legacy: {
        surface: {
          header: "{core.color.base.neutral.950}",
          rail: "{core.color.base.neutral.900}",
          hover: "{core.color.base.neutral.850}",
        },
        text: {
          uiSecondary: "{core.color.base.neutral.400}",
          uiTertiary: "{core.color.base.neutral.300}",
        },
      },
    },

    effects: {
      shadow: {
        surface: {
          elevated: "{core.effects.shadow.sm}",
        },
      },
      highlight: {
        surface: {
          elevated: "{core.effects.highlight.soft}",
        },
      },
      overlay: {
        scrim: {
          modal: "{semantic.color.overlay.scrim.strong}",
        },
      },
    },

    radius: {
      control: "{core.radius.8}",
      card: "{core.radius.12}",
      panel: "{core.radius.12}",
      pill: "{core.radius.999}",
      chip: "{core.radius.10}",
    },

    size: {
      hitArea: {
        min: "{core.size.44}",
      },
      control: {
        height: {
          sm: "{core.size.32}",
          md: "{core.size.36}",
          lg: "{core.size.40}",
        },
      },
      field: {
        height: {
          md: "{core.size.40}",
        },
      },
      icon: {
        xs: "{core.size.12}",
        sm: "{core.size.14}",
        md: "{core.size.16}",
        lg: "{core.size.18}",
        xl: "{core.size.20}",
      },
      avatar: {
        sm: "{core.size.32}",
        md: "{core.size.40}",
      },
      topbar: {
        height: "{core.size.66}",
      },
      sidebar: {
        width: "{core.size.248}",
      },
      divider: {
        thin: "{core.size.1}",
      },
    },

    space: {
      inset: {
        xs: "{core.space.8}",
        sm: "{core.space.12}",
        md: "{core.space.16}",
        lg: "{core.space.20}",
        card: "{core.space.20}",
        panel: "{core.space.24}",
      },
      stack: {
        xs: "{core.space.4}",
        sm: "{core.space.8}",
        md: "{core.space.12}",
        lg: "{core.space.16}",
        xl: "{core.space.20}",
      },
      cluster: {
        xs: "{core.space.4}",
        sm: "{core.space.8}",
        md: "{core.space.12}",
      },
      section: {
        sm: "{core.space.16}",
        md: "{core.space.24}",
        lg: "{core.space.32}",
      },
      control: {
        xs: "{core.space.6}",
        sm: "{core.space.8}",
        md: "{core.space.12}",
      },
      field: {
        x: "{core.space.12}",
        y: "{core.space.10}",
      },
      list: {
        itemGap: "{core.space.12}",
        rowInset: "{core.space.16}",
      },
    },

    stroke: {
      width: {
        none: "{core.stroke.width.0}",
        default: "{core.stroke.width.1}",
        strong: "{core.stroke.width.2}",
        focus: "{core.stroke.width.2}",
      },
    },

    typography: {
      role: {
        display: {
          fontSize: "{core.typography.fontSize.48}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.100}",
        },
        h1: {
          fontSize: "{core.typography.fontSize.30}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.130}",
        },
        h2: {
          fontSize: "{core.typography.fontSize.24}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.130}",
        },
        h3: {
          fontSize: "{core.typography.fontSize.20}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.140}",
        },
        h4: {
          fontSize: "{core.typography.fontSize.18}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.150}",
        },
        body: {
          fontSize: "{core.typography.fontSize.16}",
          fontWeight: "{core.typography.fontWeight.400}",
          lineHeight: "{core.typography.lineHeight.150}",
        },
        label: {
          fontSize: "{core.typography.fontSize.14}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.150}",
        },
        button: {
          fontSize: "{core.typography.fontSize.14}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.150}",
        },
        buttonCompact: {
          fontSize: "{core.typography.fontSize.12}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.140}",
        },
        input: {
          fontSize: "{core.typography.fontSize.14}",
          fontWeight: "{core.typography.fontWeight.400}",
          lineHeight: "{core.typography.lineHeight.150}",
        },
        caption: {
          fontSize: "{core.typography.fontSize.12}",
          fontWeight: "{core.typography.fontWeight.400}",
          lineHeight: "{core.typography.lineHeight.140}",
        },
        meta: {
          fontSize: "{core.typography.fontSize.12}",
          fontWeight: "{core.typography.fontWeight.400}",
          lineHeight: "{core.typography.lineHeight.140}",
        },
        navItem: {
          fontSize: "{core.typography.fontSize.14}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.150}",
        },
        overline: {
          fontSize: "{core.typography.fontSize.11}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.140}",
          letterSpacing: "{core.typography.letterSpacing.100}",
        },
        metric: {
          fontSize: "{core.typography.fontSize.48}",
          fontWeight: "{core.typography.fontWeight.500}",
          lineHeight: "{core.typography.lineHeight.100}",
        },
      },
    },
  },
} as const;

/**
 * Usage examples from the current dashboard app.
 *
 * Example 1: app shell
 * Before:
 * <div className="dark min-h-screen bg-background text-foreground" />
 *
 * Token mapping:
 * - bg-background -> semantic.color.bg.canvas
 * - text-foreground -> semantic.color.text.primary
 *
 * Example 2: sidebar shell
 * Before:
 * <aside className="border-r border-[#27272a] bg-[#0e0e12]" />
 *
 * After intent:
 * - border color -> semantic.color.border.default
 * - shell background -> semantic.color.legacy.surface.header
 *
 * Example 3: navigation item
 * Before:
 * isActive
 *   ? "bg-[#3a43ff]/12 text-[#8b91ff]"
 *   : "text-[#71717a] hover:bg-[#1e1e21] hover:text-[#a1a1aa]"
 *
 * Token mapping:
 * - active bg -> semantic.color.sidebar.item.active.bg
 * - active text -> semantic.color.sidebar.item.active.text
 * - default text -> semantic.color.sidebar.item.default.text
 * - hover bg -> semantic.color.sidebar.item.hover.bg
 * - hover text -> semantic.color.sidebar.item.hover.text
 *
 * Example 4: section label
 * Before:
 * <p className="text-[11px] text-[#52525b] uppercase tracking-widest" />
 *
 * Token mapping:
 * - text color -> semantic.color.sidebar.section.label
 * - type role -> semantic.typography.role.overline
 *
 * Example 5: footer metadata
 * Before:
 * <p className="text-[12px] text-[#a0a0ad]/40">Updated just now</p>
 *
 * Token mapping:
 * - text role -> semantic.typography.role.meta
 * - base text color -> semantic.color.sidebar.footer.meta
 *
 * Example 6: top bar
 * Before:
 * <div className="h-[66px] border-b border-[#27272a]" />
 *
 * Token mapping:
 * - height -> semantic.size.topbar.height
 * - border -> semantic.color.border.default
 *
 * Example 7: system notification icons
 * Before:
 * { id: 1, color: "#3a43ff" }
 * { id: 2, color: "#f59e0b" }
 * { id: 3, color: "#71717a" }
 *
 * Token mapping:
 * - upgrade -> semantic.color.notification.upgrade
 * - warning -> semantic.color.notification.warning
 * - info -> semantic.color.notification.info
 *
 * Example 8: avatar gradient
 * Before:
 * style={{ background: "linear-gradient(180deg, #3a43ff 0%, #8f3aff 100%)" }}
 *
 * Token mapping:
 * - start -> semantic.color.gradient.avatar.start
 * - end -> semantic.color.gradient.avatar.end
 */

/** Get a token by dot-path, for example: `semantic.color.text.primary` */
export function get(path: string, root: unknown = tokens): unknown {
  return path
    .split(".")
    .reduce((acc: any, key) => (acc == null ? acc : acc[key]), root as any);
}

/** Detects "{...}" token reference values */
export function isRef(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("{") && value.endsWith("}");
}

/**
 * Resolve "{core...}" and "{semantic...}" token references against the local bundle.
 * Stops after `maxDepth` to avoid infinite cycles.
 */
export function resolveToken(value: unknown, maxDepth = 10): unknown {
  let current = value;
  let depth = 0;

  while (isRef(current) && depth < maxDepth) {
    const refPath = current.slice(1, -1);
    const next = get(refPath);

    if (next == null) {
      return current;
    }

    current = next;
    depth += 1;
  }

  return current;
}
