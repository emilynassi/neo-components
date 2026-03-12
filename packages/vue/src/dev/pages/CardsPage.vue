<script setup lang="ts">
import NeoCard from '../../components/NeoCard.vue';
import NeoBadge from '../../components/NeoBadge.vue';
</script>

<template>
  <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
    >
      Cards & Layout
    </h2>

    <div class="mt-8">
      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        NeoCard variations
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <NeoCard>
          <h3 class="text-xl font-bold mb-2">Standard Card</h3>
          <p class="text-gray-600">Default card with shadow and padding.</p>
        </NeoCard>

        <NeoCard color="secondary">
          <h3 class="text-xl font-bold mb-2">Colored Card</h3>
          <p>Cards can have background colors applied.</p>
        </NeoCard>

        <NeoCard rotate>
          <h3 class="text-xl font-bold mb-2">Rotated Card</h3>
          <p class="text-gray-600">Adds playful tilt to the design.</p>
        </NeoCard>
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        Stat Cards (example composition)
      </p>
      <div class="flex flex-wrap gap-4 mb-8">
        <NeoCard padding="sm">
          <p class="text-4xl font-bold font-mono">8:47</p>
          <p class="text-xs font-bold uppercase tracking-wider mt-1">AVG MINUTES</p>
        </NeoCard>
        <NeoCard color="primary" padding="sm" rotate>
          <p class="text-4xl font-bold font-mono">5:53</p>
          <p class="text-xs font-bold uppercase tracking-wider mt-1">LAST 5 AVG</p>
        </NeoCard>
        <NeoCard color="danger" padding="sm">
          <p class="text-4xl font-bold font-mono">23</p>
          <p class="text-xs font-bold uppercase tracking-wider mt-1">GAMES</p>
        </NeoCard>
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        NeoBadge
      </p>
      <div class="flex flex-wrap items-center gap-3 mb-8">
        <NeoBadge label="Primary" color="primary" />
        <NeoBadge label="Secondary" color="secondary" />
        <NeoBadge label="Danger" color="danger" />
        <NeoBadge label="Success" color="success" />
        <NeoBadge label="White" color="white" />
        <NeoBadge label="Custom" color="#3B82F6" />
      </div>

      <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
        NeoDivider
      </p>
      <div class="space-y-4">
        <div>
          <span class="text-xs text-gray-400">Thickness: sm (2px)</span>
          <hr class="border-t-2 border-black mt-1" />
        </div>
        <div>
          <span class="text-xs text-gray-400">Thickness: md (4px)</span>
          <hr class="border-t-4 border-black mt-1" />
        </div>
        <div>
          <span class="text-xs text-gray-400">Thickness: lg (8px)</span>
          <div class="h-2 bg-black mt-1"></div>
        </div>
      </div>
    </div>
  </section>
</template>
