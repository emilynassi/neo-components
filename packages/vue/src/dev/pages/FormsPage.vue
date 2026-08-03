<script setup lang="ts">
import { ref } from 'vue';
import { NeoInput, NeoSelect, NeoCheckbox, NeoRadio, NeoRadioGroup } from '../../index';

const email = ref('');
const disabledValue = ref("Can't touch this");
const selectedTeam = ref('');
const checked1 = ref(true);
const checked2 = ref(false);
const checkedDisabled = ref(false);
const selectedRadio = ref('option1');

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
          <NeoCheckbox v-model="checked1" label="Checked option" />
          <NeoCheckbox v-model="checked2" label="Unchecked option" />
          <NeoCheckbox v-model="checkedDisabled" label="Disabled option" disabled />
        </div>
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoRadio
        </p>
        <NeoRadioGroup v-model="selectedRadio">
          <NeoRadio value="option1" label="Selected option" />
          <NeoRadio value="option2" label="Unselected option" />
          <NeoRadio value="option3" label="Another option" />
        </NeoRadioGroup>
        <p class="text-sm text-gray-500 mt-2">Value: {{ selectedRadio }}</p>
      </div>
    </div>
  </section>
</template>
