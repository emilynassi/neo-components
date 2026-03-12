<script setup lang="ts">
import { computed } from 'vue';

interface NeoTextProps {
  variant?: 'body' | 'label' | 'stat';
  size?: 'lg' | 'md' | 'sm';
  tag?: 'p' | 'span' | 'div';
}

const props = withDefaults(defineProps<NeoTextProps>(), {
  variant: 'body',
  size: 'md',
  tag: 'p',
});

const bodySizeClasses: Record<string, string> = {
  lg: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
};

const statSizeClasses: Record<string, string> = {
  lg: 'text-5xl',
  md: 'text-3xl',
  sm: 'text-xl',
};

const textClasses = computed(() => {
  if (props.variant === 'label') {
    return 'font-grotesk text-xs font-bold uppercase tracking-wider';
  }

  if (props.variant === 'stat') {
    return `font-mono font-bold ${statSizeClasses[props.size]}`;
  }

  // body
  return `font-grotesk ${bodySizeClasses[props.size]}`;
});
</script>

<template>
  <component
    :is="props.tag"
    :class="textClasses"
  >
    <slot />
  </component>
</template>
