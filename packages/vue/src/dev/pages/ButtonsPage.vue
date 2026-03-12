<script setup lang="ts">
import NeoButton from '../../components/NeoButton.vue';
</script>

<template>
  <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
    >
      Buttons
    </h2>

    <div class="mt-8">
      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        Sizes
      </p>
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <NeoButton size="sm">Small</NeoButton>
        <NeoButton size="md">Medium</NeoButton>
        <NeoButton size="lg">Large</NeoButton>
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        Colors
      </p>
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <NeoButton color="primary">Primary</NeoButton>
        <NeoButton color="secondary">Secondary</NeoButton>
        <NeoButton color="danger">Danger</NeoButton>
        <NeoButton color="success">Success</NeoButton>
        <NeoButton color="white">White</NeoButton>
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        States
      </p>
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <NeoButton color="primary">Default</NeoButton>
        <NeoButton color="primary" disabled>Disabled</NeoButton>
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        With Rotation
      </p>
      <div class="flex flex-wrap items-center gap-6">
        <NeoButton color="primary" rotate>Rotated</NeoButton>
        <NeoButton color="danger" rotate>Rotated</NeoButton>
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4 mt-8">
        Custom Colors
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <NeoButton color="#8B5CF6">Purple</NeoButton>
        <NeoButton color="#EC4899">Pink</NeoButton>
        <NeoButton color="#14B8A6">Teal</NeoButton>
      </div>
    </div>
  </section>
</template>
