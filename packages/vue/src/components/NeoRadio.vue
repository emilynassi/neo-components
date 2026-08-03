<script setup lang="ts">
import { computed, inject } from 'vue';

interface NeoRadioProps {
  value: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<NeoRadioProps>(), {
  label: '',
  disabled: false,
});

const groupModel = inject<{ modelValue: string; update: (val: string) => void } | null>('neo-radio-group', null);

const isSelected = computed(() => groupModel?.modelValue === props.value);

const circleClasses = computed(() => [
  'w-6 h-6 border-4 border-black bg-white rounded-full flex items-center justify-center',
  {
    'shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all': !props.disabled,
    'shadow-neo-sm': props.disabled,
  },
]);

const select = () => {
  if (!props.disabled && groupModel) {
    groupModel.update(props.value);
  }
};
</script>

<template>
  <label
    :class="[
      'inline-flex items-center gap-3 select-none',
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer group',
    ]"
    @click.prevent="select"
  >
    <div :class="circleClasses">
      <div v-if="isSelected" class="w-2.5 h-2.5 bg-black rounded-full" />
    </div>
    <span v-if="label" class="font-medium">{{ label }}</span>
    <span v-else class="font-medium"><slot></slot></span>
  </label>
</template>
