<script setup lang="ts">
import { computed } from 'vue';

interface NeoInputProps {
  modelValue?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<NeoInputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  label: '',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputClasses = computed(() => [
  'w-full px-4 py-3 text-lg border-4 border-black bg-white font-grotesk',
  {
    'shadow-neo focus:outline-none focus:shadow-neo-hover focus:translate-x-0.5 focus:translate-y-0.5 transition-all placeholder:text-gray-400': !props.disabled,
    'shadow-neo opacity-50 cursor-not-allowed bg-gray-100': props.disabled,
  },
]);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div>
    <label
      v-if="label"
      class="text-xs font-bold uppercase tracking-wider block mb-2"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClasses"
      @input="onInput"
    />
  </div>
</template>
