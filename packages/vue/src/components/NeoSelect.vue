<script setup lang="ts">
import { computed } from 'vue';

export interface NeoSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface NeoSelectProps {
  modelValue?: string;
  options: NeoSelectOption[];
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<NeoSelectProps>(), {
  modelValue: '',
  placeholder: '',
  label: '',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const selectClasses = computed(() => [
  'w-full px-4 py-3 pr-12 text-lg border-4 border-black bg-white font-grotesk appearance-none cursor-pointer',
  {
    'shadow-neo focus:outline-none focus:shadow-neo-hover focus:translate-x-0.5 focus:translate-y-0.5 transition-all':
      !props.disabled,
    'shadow-neo opacity-50 cursor-not-allowed bg-gray-100': props.disabled,
  },
]);

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
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
    <div class="relative">
      <select
        :value="modelValue"
        :disabled="disabled"
        :class="selectClasses"
        @change="onChange"
      >
        <option v-if="placeholder" value="" disabled>
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <div
        class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
