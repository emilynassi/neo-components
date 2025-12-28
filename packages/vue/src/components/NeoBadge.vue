<script setup lang="ts">
import { getContrastTextColor } from '@neobrut/core';
import { computed } from 'vue';

interface NeoBadgeProps {
  label: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'white' | string;
}

const props = withDefaults(defineProps<NeoBadgeProps>(), {
  color: 'primary',
});

const presetColors: Record<string, string> = {
  primary: 'bg-neo-primary text-neo-white',
  secondary: 'bg-neo-secondary text-neo-black',
  danger: 'bg-neo-danger text-neo-white',
  success: 'bg-neo-success text-neo-white',
  white: 'bg-neo-white text-neo-black',
};

// Check if color is a preset or a custom value
const isCustomColor = computed(() => {
  return !(props.color in presetColors);
});

const badgeClasses = computed(() => [
  'inline-block px-3 py-1 text-sm font-bold border-4 border-black shadow-neo-sm',
  // Only apply preset classes if not a custom color
  !isCustomColor.value && presetColors[props.color],
]);

// Only compute these for custom colors
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
  <span :class="badgeClasses" :style="customStyles">
    {{ label }}
  </span>
</template>
