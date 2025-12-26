<script setup lang="ts">
import { computed } from 'vue';

interface NeoButtonProps {
  primaryColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  rotate?: boolean;
}

const props = withDefaults(defineProps<NeoButtonProps>(), {
  primaryColor: '#4C7BF4',
  size: 'md',
  disabled: false,
  type: 'button',
  rotate: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const computedTextColor = computed(() => {
  if (props.textColor) return props.textColor;

  if (props.primaryColor === '#FFFFFF' || props.primaryColor?.toLowerCase() === '#fff') {
    return '#000';
  }

  try {
    const hex = props.primaryColor!.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128 ? '#fff' : '#000';
  } catch {
    return '#000';
  }
});

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-lg',
  lg: 'px-8 py-4 text-xl',
};

const buttonClasses = computed(() => [
  'border-4 border-black font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
  sizeClasses[props.size],
  {
    'hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all': !props.disabled,
    'rotate-1': props.rotate,
    'opacity-50 cursor-not-allowed': props.disabled,
  },
]);

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
    :style="{
      backgroundColor: primaryColor,
      color: computedTextColor,
    }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
