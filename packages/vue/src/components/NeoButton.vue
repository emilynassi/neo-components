<script setup lang="ts">
import { computed } from 'vue';
import { getContrastTextColor } from '@neobrut/core';

interface NeoButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'white' | string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  rotate?: boolean;
}

const props = withDefaults(defineProps<NeoButtonProps>(), {
  color: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  rotate: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const presetColors: Record<string, string> = {
  primary: 'bg-neo-primary text-neo-white',
  secondary: 'bg-neo-secondary text-neo-black',
  danger: 'bg-neo-danger text-neo-white',
  success: 'bg-neo-success text-neo-white',
  white: 'bg-neo-white text-neo-black',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm shadow-neo-sm',
  md: 'px-6 py-3 text-lg shadow-neo',
  lg: 'px-8 py-4 text-xl shadow-neo',
};

// Check if color is a preset or a custom value
const isCustomColor = computed(() => {
  return !(props.color in presetColors);
});

const buttonClasses = computed(() => [
  'border-4 border-black font-bold',
  sizeClasses[props.size],
  // Only apply preset color classes if not a custom color
  !isCustomColor.value && presetColors[props.color],
  {
    'hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all': !props.disabled,
    'rotate-1': props.rotate,
    'opacity-50 cursor-not-allowed': props.disabled,
  },
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

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    :style="customStyles"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
