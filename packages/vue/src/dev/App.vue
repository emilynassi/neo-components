<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { path: '/typography', label: 'Typography' },
  { path: '/buttons', label: 'Buttons' },
  { path: '/forms', label: 'Forms' },
  { path: '/cards', label: 'Cards & Layout' },
  { path: '/interactive', label: 'Interactive' },
  { path: '/tokens', label: 'Tokens' },
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-white border-b-4 border-black p-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight">NEOBRUT</h1>
        <p class="text-sm text-gray-600 mt-1">Component Library</p>
      </div>
    </header>

    <!-- Nav -->
    <nav class="bg-white border-b-4 border-black">
      <div class="max-w-6xl mx-auto flex flex-wrap gap-0">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-5 py-3 font-bold text-sm uppercase tracking-wider border-r-4 border-black transition-colors"
          :class="isActive(item.path) ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'"
        >
          {{ item.label }}
        </router-link>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-6xl mx-auto p-8">
      <router-view />
    </main>
  </div>
</template>
