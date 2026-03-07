<template>
  <component
    :is="props.tag"
    :class="headingClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface NeoHeadingProps {
  size?: 'xl' | 'lg' | 'md' | 'sm';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const sizeClasses: Record<string, string> = {
  xl: 'text-5xl',
  lg: 'text-4xl',
  md: 'text-2xl',
  sm: 'text-xl',
};

const props = withDefaults(defineProps<NeoHeadingProps>(), {
  size: 'lg',
  tag: 'h2',
});

const headingClasses = computed(() => {
  return `font-grotesk font-bold ${sizeClasses[props.size]}`;
});
</script>
