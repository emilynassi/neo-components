<script setup lang="ts">
import { computed } from 'vue';
import { getContrastTextColor } from '@neobrut/core';

interface NeoCardProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'white' | string;
  shadow?: 'sm' | 'md' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  rotate?: boolean;
}

const props = withDefaults(defineProps<NeoCardProps>(), {
  color: 'white',
  shadow: 'md',
  padding: 'md',
  rotate: false,
});

const presetColors: Record<string, string> = {
  primary: 'bg-neo-primary text-neo-white',
  secondary: 'bg-neo-secondary text-neo-black',
  danger: 'bg-neo-danger text-neo-white',
  success: 'bg-neo-success text-neo-white',
  white: 'bg-neo-white text-neo-black',
};

const shadowClasses: Record<string, string> = {
  sm: 'shadow-neo-sm',
  md: 'shadow-neo',
  none: '',
};

const paddingClasses: Record<string, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  none: '',
};

const isCustomColor = computed(() => {
  return !(props.color in presetColors);
});

const cardClasses = computed(() => [
  'border-4 border-black',
  shadowClasses[props.shadow],
  paddingClasses[props.padding],
  !isCustomColor.value && presetColors[props.color],
  {
    'rotate-2': props.rotate,
  },
]);

const customStyles = computed(() => {
  if (!isCustomColor.value) {
    return {};
  }
  return {
    backgroundColor: props.color,
    color: getContrastTextColor(props.color),
  };
});
</script>

<template>
  <div :class="cardClasses" :style="customStyles">
    <slot></slot>
  </div>
</template>
