<script setup lang="ts">
import { provide, computed } from 'vue';

interface NeoRadioGroupProps {
  modelValue?: string;
  label?: string;
}

const props = withDefaults(defineProps<NeoRadioGroupProps>(), {
  modelValue: '',
  label: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

provide('neo-radio-group', {
  get modelValue() {
    return props.modelValue;
  },
  update: (val: string) => emit('update:modelValue', val),
});
</script>

<template>
  <fieldset>
    <legend v-if="label" class="text-xs font-bold uppercase tracking-wider block mb-2">
      {{ label }}
    </legend>
    <div class="space-y-3">
      <slot />
    </div>
  </fieldset>
</template>
