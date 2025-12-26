<script setup lang="ts">
// Import components here as you build them
import NeoButton from '../components/NeoButton.vue';

console.log(NeoButton);
</script>

<template>
  <div class="min-h-screen bg-neo-white p-8">
    <h1 class="text-4xl font-bold font-grotesk mb-8">Neobrut Dev</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-bold font-grotesk mb-4">Components</h2>
      <p class="text-neo-black">Add components here as you build them!</p>

      <!-- Example: -->
      <NeoButton>Click me</NeoButton>
    </section>
  </div>
</template>
