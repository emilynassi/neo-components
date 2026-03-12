<script setup lang="ts">
import NeoHeading from '../../components/NeoHeading.vue';
import NeoText from '../../components/NeoText.vue';
</script>

<template>
  <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
    >
      Typography
    </h2>

    <div class="space-y-6 mt-8">
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoHeading xl</span>
        <NeoHeading size="xl">The Quick Brown Fox</NeoHeading>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoHeading lg</span>
        <NeoHeading size="lg">The Quick Brown Fox</NeoHeading>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoHeading md</span>
        <NeoHeading size="md">The Quick Brown Fox</NeoHeading>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoHeading sm</span>
        <NeoHeading size="sm">The Quick Brown Fox</NeoHeading>
      </div>

      <hr class="border-gray-200 my-8" />

      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText body (lg)</span>
        <NeoText variant="body" size="lg">
          This is large body text. It's clean and readable, designed for
          longer content blocks and descriptions.
        </NeoText>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText body (md)</span>
        <NeoText variant="body" size="md">
          This is medium body text. It's clean and readable, designed for
          longer content blocks and descriptions.
        </NeoText>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText body (sm)</span>
        <NeoText variant="body" size="sm">
          This is small body text for captions and secondary content.
        </NeoText>
      </div>

      <hr class="border-gray-200 my-8" />

      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText label</span>
        <NeoText variant="label">SEASON * TEAM * PLAYER</NeoText>
      </div>

      <hr class="border-gray-200 my-8" />

      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText stat (lg)</span>
        <NeoText variant="stat" size="lg">8:47</NeoText>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText stat (md)</span>
        <NeoText variant="stat" size="md">12:34</NeoText>
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-gray-500 tracking-wider">NeoText stat (sm)</span>
        <NeoText variant="stat" size="sm">99.7%</NeoText>
      </div>
    </div>
  </section>
</template>
