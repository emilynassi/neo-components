---
name: new-vue-component
description: Scaffold a new Vue component for the @neobrut/vue package
argument-hint: '[ComponentName]'
allowed-tools: Read, Write, Edit, Glob, Grep
---

Create a new Vue component called `$ARGUMENTS` in the @neobrut/vue package.

## Validation

If `$ARGUMENTS` does not start with "Neo", stop and tell the user the
component name must start with "Neo" (e.g., NeoCard, NeoBadge).

## Reference

Here is NeoButton as a reference for the component structure:
!`cat packages/vue/src/components/NeoButton.vue`

## Steps

1. Create `packages/vue/src/components/$ARGUMENTS.vue` following this
   structure:
   - Check `CLAUDE.md` for the component in the Component Inventory section.
     If the component is listed with props, use them. If the component is
     listed without detailed props, or not listed at all, ask the user what
     props the component needs (names, types, and defaults) before generating.
   - `<script setup lang="ts">` block with `import { computed } from 'vue'`
   - A props interface named `${ARGUMENTS}Props` with sensible defaults
   - `withDefaults(defineProps<...>(), { ... })`
   - A `computed` for assembling Tailwind classes
   - `<template>` with a root element using `:class` binding and a `<slot
/>`

2. Add an export for the new component to `packages/vue/src/index.ts`

3. Add a basic usage example of the component to
   `packages/vue/src/dev/App.vue`

## Working style

Create the component file, register the export, and add the dev preview automatically. After everything is created, show the user a summary of what was generated and where the files are.

