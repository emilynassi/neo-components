<script setup lang="ts">
import { ref } from 'vue';
import { NeoInput, NeoSelect } from '../../index';

const email = ref('');
const disabledValue = ref("Can't touch this");
const selectedTeam = ref('');

const teamOptions = [
  { label: 'New York Rangers', value: 'nyr' },
  { label: 'Boston Bruins', value: 'bos' },
  { label: 'Toronto Maple Leafs', value: 'tor' },
];
</script>

<template>
  <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
    >
      Form Inputs
    </h2>

    <div class="mt-8 max-w-md space-y-8">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoInput
        </p>
        <NeoInput
          v-model="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
        />
        <p class="text-sm text-gray-500 mt-2">Value: {{ email }}</p>
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoInput (disabled)
        </p>
        <NeoInput
          v-model="disabledValue"
          disabled
        />
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoSelect
        </p>
        <NeoSelect
          v-model="selectedTeam"
          label="Team"
          placeholder="Pick a team"
          :options="teamOptions"
        />
        <p class="text-sm text-gray-500 mt-2">Value: {{ selectedTeam }}</p>
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoCheckbox
        </p>
        <div class="space-y-3">
          <label class="flex items-center gap-3 cursor-pointer group">
            <div class="w-6 h-6 border-4 border-black bg-blue-500 flex items-center justify-center shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="font-medium">Checked option</span>
          </label>
          <label class="flex items-center gap-3 cursor-pointer group">
            <div class="w-6 h-6 border-4 border-black bg-white shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all"></div>
            <span class="font-medium">Unchecked option</span>
          </label>
          <label class="flex items-center gap-3 cursor-not-allowed opacity-50">
            <div class="w-6 h-6 border-4 border-black bg-gray-100 shadow-neo-sm"></div>
            <span class="font-medium">Disabled option</span>
          </label>
        </div>
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoRadio
        </p>
        <div class="space-y-3">
          <label class="flex items-center gap-3 cursor-pointer group">
            <div class="w-6 h-6 border-4 border-black bg-white rounded-full shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all flex items-center justify-center">
              <div class="w-2.5 h-2.5 bg-black rounded-full"></div>
            </div>
            <span class="font-medium">Selected option</span>
          </label>
          <label class="flex items-center gap-3 cursor-pointer group">
            <div class="w-6 h-6 border-4 border-black bg-white rounded-full shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all"></div>
            <span class="font-medium">Unselected option</span>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>
