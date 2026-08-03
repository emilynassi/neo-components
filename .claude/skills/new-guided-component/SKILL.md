---
name: new-guided-component
description: Scaffold a new component as a guided skeleton (TODO comments, no implementation) so the user can write it themselves without going back and forth
argument-hint: '[vue|react] [ComponentName]'
allowed-tools: Read, Write, Glob, Grep
---

Create a **guided skeleton** for a new `$ARGUMENTS` component — not a
finished component. This skill exists for when the user wants to write the
component themselves and just needs a scaffold with comments explaining
what to do at each step, instead of Claude building it or walking them
through it conversationally.

## Validation

- `$ARGUMENTS` is `<framework> <ComponentName>`, e.g. `vue NeoDivider` or
  `react NeoDivider`. Framework must be `vue` or `react`.
- `ComponentName` must start with "Neo" — if not, stop and tell the user.

## Steps

1. Check CLAUDE.md's Component Inventory section for the component. If it
   lists props, use those as the spec. If not, ask the user what props are
   needed (names, types, defaults) before generating — don't guess.

2. Find one or two existing components in the *same* package
   (`packages/vue/src/components/*.vue` or
   `packages/react/src/components/*.tsx`) that are structurally similar
   (e.g. a simple display component like NeoBadge/NeoCard for something
   with variant props; NeoInput/NeoSelect for form-adjacent ones). Read
   them for the conventions in play: presetColors records, `computed`/
   `useMemo` class assembly, the `isCustomColor` fallback pattern, shadow/
   border token usage. Reference these by filename in the TODO comments so
   the user knows where to look — don't inline the full solution.

3. Write the new component file with:
   - Real imports only where certain (e.g. `computed` from `vue`, or
     `useMemo`/types from `react`) — leave anything conditional on the
     user's design choices (e.g. `getContrastTextColor`) as a TODO.
   - **No props interface, no defineProps/props destructuring, no class
     logic, no template markup filled in.** These are left as numbered
     TODO comments that describe *what* to build and *why*, pointing at
     the reference file(s) from step 2 for *how* similar problems were
     solved elsewhere. Ask leading questions in the comments (e.g. "what
     TS type describes these three options?") rather than stating the
     answer.
   - Comments should sequence logically: interface → defaults → style
     lookups → computed class assembly → template root element. Each
     TODO should build on the state left by the previous one.
   - Only suggest extracting a value into its own named `computed`/
     `useMemo` when it's genuinely reused in more than one place (e.g.
     `isCustomColor` feeding both the class list and a style-override
     object, as in NeoBadge/NeoButton/NeoCard). For a single-use derived
     value, tell the user to inline it directly in the one `computed`
     that needs it — don't suggest a computed-referencing-computed chain
     (e.g. `const a = computed(...)` then `a.value` inside a second
     `computed`) when nothing else consumes the intermediate value.
   - Do not write the `<template>` (Vue) or JSX return (React) body —
     leave an HTML comment / JSX comment describing the root element and
     any accessibility considerations (ARIA role, semantic tag).

4. Do **not** add the export to `index.ts` or a preview to the dev app.
   The component isn't functional yet, and wiring it up is itself part of
   what the user should do once they've implemented it — mention this to
   them in your summary instead of doing it for them.

## Working style

After creating the file, tell the user where it is and briefly what's
left as an exercise (the TODOs), plus the two follow-up steps they'll do
once it's implemented: export it from `index.ts` and add a usage example
to the dev preview app. Don't implement any of the TODOs yourself even if
asked to "check" the file — this skill's whole point is that the user
writes the logic.
