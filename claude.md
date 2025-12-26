# CLAUDE.md - Neobrut Component Library

## Working Style

I want to do the work myself. Guide me through what to do step-by-step rather than writing all the code for me. Explain what we're doing and why so I understand each piece.

## Project Overview

**Neobrut** is a neo-brutalist component library. Vue 3 is the primary framework, with a React port planned for the future. The library uses Tailwind CSS for styling and TypeScript throughout.

This is a **pnpm monorepo** with the following structure:

```
neobrut/
├── packages/
│   ├── core/           # Shared: tokens, utilities, neobrutalize()
│   ├── vue/            # Vue 3 component library
│   └── react/          # React component library (future)
├── apps/
│   └── docs/           # Documentation site (Histoire or Storybook)
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Design System

### Visual Style

Neo-brutalism: bold black borders, hard offset shadows, high contrast colors, optional playful rotation, no border-radius (sharp corners).

### Design Tokens (Fixed)

```typescript
// Borders
borderWidth: '4px';
borderColor: '#000000';
borderRadius: '0';

// Shadows
shadowNeo: '6px 6px 0px 0px rgba(0,0,0,1)';
shadowNeoSm: '4px 4px 0px 0px rgba(0,0,0,1)';
shadowNeoHover: '3px 3px 0px 0px rgba(0,0,0,1)';

// Transitions
hoverTranslate: 'translate(1px, 1px)';
activeTranslate: 'translate(1.5px, 1.5px)';
transition: 'all 150ms ease';

// Typography
fontFamily: 'Space Grotesk'(primary), 'Space Mono'(stats / numbers);
fontWeightBold: 700;
```

### Default Color Palette

```typescript
const colors = {
  primary: '#3B82F6', // blue-500
  secondary: '#FACC15', // yellow-400
  danger: '#EF4444', // red-500
  success: '#22C55E', // green-500
  white: '#FFFFFF',
  black: '#000000',
};
```

Users can override these and pass custom colors. The library exposes a `neobrutalize()` function that transforms any color to fit the aesthetic.

## Core Utilities

### neobrutalize(hex: string): string

Transforms colors to be more neo-brutal by increasing saturation and brightening dark colors:

```typescript
const neobrutalize = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const hsl = rgbToHsl(r, g, b);
  hsl[1] = Math.min(hsl[1] * 1.2, 1); // Increase saturation by 20%

  if (hsl[2] < 0.5) {
    hsl[2] = Math.min(hsl[2] * 1.3 + 0.1, 0.9);
  }

  const [r2, g2, b2] = hslToRgb(hsl[0], hsl[1], hsl[2]);

  return (
    '#' +
    Math.round(r2).toString(16).padStart(2, '0') +
    Math.round(g2).toString(16).padStart(2, '0') +
    Math.round(b2).toString(16).padStart(2, '0')
  );
};
```

### getContrastTextColor(hex: string): string

Returns black or white based on background brightness for accessible text.

## Component Inventory

### Typography (Phase 2)

- `NeoHeading` - titles/headers (sizes: xl, lg, md, sm)
- `NeoText` - body text, labels, stats (variants: body, label, stat; sizes: lg, md, sm)
- Utility classes: `.neo-heading-{size}`, `.neo-text-{variant}`, `.neo-text-{size}`

### Form Components (Phase 3)

- `NeoButton` - sizes (sm, md, lg), colors, disabled, rotate, type
- `NeoInput` - text input with label support
- `NeoSelect` - dropdown with custom styling
- `NeoCheckbox` - custom checkbox
- `NeoRadio` - custom radio button
- `NeoRadioGroup` - manages radio state

### Layout & Display (Phase 4)

- `NeoCard` - container (props: rotate, shadow, padding)
- `NeoBadge` - small inline label/tag
- `NeoDivider` - horizontal rule (thickness: sm, md, lg)

### Interactive (Phase 5)

- `NeoToggle` / `NeoButtonGroup` - segmented control switcher
- `NeoTabs` (stretch goal)

## Component Patterns

All components follow these patterns:

1. **Naming**: `Neo{ComponentName}` prefix
2. **Props**: TypeScript interfaces, sensible defaults
3. **Styling**: Tailwind classes, inline styles only for dynamic colors
4. **States**: default, hover, active, disabled, focus
5. **Accessibility**: proper ARIA attributes, keyboard navigation

### Example: NeoButton (React reference)

```typescript
interface NeoButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  primaryColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  rotate?: boolean;
}
```

Vue components should use `<script setup lang="ts">` with `defineProps` and follow the same prop patterns.

## Build & Package Setup

- **Build tool**: Vite in library mode
- **Output**: ESM + CJS + TypeScript declarations
- **Package naming**: `@neobrut/core`, `@neobrut/vue`, `@neobrut/react`

## Current Progress

### Completed

- [x] Project scaffolding (monorepo structure)
- [x] pnpm workspace config (pnpm-workspace.yaml)
- [x] TypeScript configs (root + core + vue)
- [x] Vue type shim (env.d.ts in packages/vue/src)
- [x] Tailwind v4 config with neo-brutalist tokens (theme.css with CSS variables)
- [x] packages/core utilities (neobrutalize, getContrastTextColor, rgbToHsl, hslToRgb)
- [x] packages/vue Vite setup (library mode configured)
- [x] Basic dev app structure (index.html, src/dev/main.ts, src/dev/App.vue)
- [x] CSS architecture (core/src/styles.css imports Tailwind, vue imports core styles)

### In Progress

- [ ] Build Phase 2 components (Typography: NeoHeading, NeoText)

### Next Steps

1. Create NeoHeading component with sizes (xl, lg, md, sm)
2. Create NeoText component with variants (body, label, stat) and sizes
3. Add typography utility classes (.neo-heading-{size}, .neo-text-{variant})
4. Build Phase 3 components (Form Components)
5. Build Phase 4 components (Layout & Display)

## Development Notes

- Use pnpm (not npm/yarn) for this monorepo
- All packages extend the root tsconfig.json
- Design tokens are fixed (not configurable by consumers)
- Typography exposed as both components AND utility classes
- Primitives only for v1 (no pre-composed components)

## Reference Files

- Visual mockup: See `neobrut-mockup.html` for component designs
- Plan document: See `neobrut-component-library-plan.md` for full checklist
