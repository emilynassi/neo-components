<script setup lang="ts">
// NeoDivider — horizontal rule (CLAUDE.md Component Inventory, Phase 4)
// This file is a guided skeleton, not a finished component. Work through
// the TODOs top to bottom; each one builds on the last. Compare against
// NeoBadge.vue or NeoCard.vue in this folder if you get stuck on a pattern.

import { computed } from 'vue';


// TODO 1: Define the props interface, named `NeoDividerProps`.
//   - CLAUDE.md lists NeoDivider's only spec'd prop: thickness (sm, md, lg).
//   - What TS type describes 'sm' | 'md' | 'lg'?
//   - Optional stretch: add a `color` prop following the
//     presetColors-record + custom-hex pattern used in NeoBadge.vue,
//     since a plain black line is the only option otherwise.
interface NeoDividerProps {
  thickness?: 'sm' | 'md' | 'lg';
  color?: string;
}

// TODO 2: Declare the props with `withDefaults(defineProps<NeoDividerProps>(), { ... })`.
//   - Pick a sensible default thickness (look at NeoButton/NeoCard's `size`
//     defaults for the convention this library uses).
const props = withDefaults(defineProps<NeoDividerProps>(), {
  thickness: 'md',
  color: 'black'
});

// TODO 3: Map `thickness` to a Tailwind border-width class.
//   - A divider is a horizontal rule, so you want `border-t-*` (a top
//     border on a zero-height element), not the `border-4` box style
//     used by NeoBadge/NeoCard/NeoInput.
//   - Define a `Record<string, string>` lookup, e.g.:
//       const thicknessClasses: Record<string, string> = {
//         sm: 'border-t-2',
//         md: 'border-t-4',
//         lg: 'border-t-8',
//       };

const thicknessClasses: Record<string, string> = {
  sm: 'border-t-2',
  md: 'border-t-4',
  lg: 'border-t-8',
};

// TODO 4: Build a `computed` (e.g. `dividerClasses`) that assembles the
// final class list for the root element:
//   - Border color is always black per the fixed Design Tokens in
//     CLAUDE.md — don't make this configurable.
//   - Pull the width class from your `thicknessClasses` lookup using
//     `props.thickness`.
//   - No border-radius, no shadow — a divider is flat.

const dividerClasses = computed(() => [
  thicknessClasses[props.thickness],
  props.color,
]);


</script>

<template>
  <hr :class="dividerClasses" />
</template>
