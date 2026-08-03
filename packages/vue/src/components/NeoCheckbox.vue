<script setup lang="ts">
import { computed } from 'vue';
import { getContrastTextColor } from '@neobrut/core';

interface NeoCheckboxProps {
  modelValue?: boolean;
  label?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<NeoCheckboxProps>(), {
  modelValue: false,
  label: '',
  color: 'primary',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const presetColors: Record<string, string> = {
  primary: 'bg-neo-primary',
  secondary: 'bg-neo-secondary',
  danger: 'bg-neo-danger',
  success: 'bg-neo-success',
};

const isCustomColor = computed(() => !(props.color in presetColors));

const boxClasses = computed(() => [
  'w-6 h-6 border-4 border-black flex items-center justify-center',
  {
    [presetColors[props.color]]: props.modelValue && !isCustomColor.value,
    'bg-white': !props.modelValue,
    'shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all': !props.disabled,
    'shadow-neo-sm': props.disabled,
  },
]);

const boxStyles = computed(() => {
  if (!props.modelValue || !isCustomColor.value) return {};
  return { backgroundColor: props.color };
});

const checkColor = computed(() => {
  if (!isCustomColor.value) {
    if (props.color === 'secondary') return '#000000';
    return '#ffffff';
  }
  return getContrastTextColor(props.color);
});

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
};
</script>

<template>
  <label
    :class="[
      'inline-flex items-center gap-3 select-none',
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer group',
    ]"
    @click.prevent="toggle"
  >
    <div :class="boxClasses" :style="boxStyles">
      <svg
        v-if="modelValue"
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="4"
        :style="{ color: checkColor }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span v-if="label" class="font-medium">{{ label }}</span>
    <span v-else class="font-medium"><slot /></span>
  </label>
</template>
