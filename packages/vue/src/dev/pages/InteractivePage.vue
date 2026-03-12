<template>
  <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
    >
      Interactive
    </h2>

    <div class="mt-8 space-y-8">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoToggle / NeoButtonGroup
        </p>
        <div class="inline-flex border-4 border-black shadow-neo">
          <button class="px-6 py-3 font-bold bg-black text-white border-r-4 border-black">
            Regular Season *
          </button>
          <button class="px-6 py-3 font-bold bg-white text-black hover:bg-gray-100 transition-colors">
            Playoffs
          </button>
        </div>
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          Three options
        </p>
        <div class="inline-flex border-4 border-black shadow-neo">
          <button class="px-5 py-3 font-bold bg-white text-black border-r-4 border-black hover:bg-gray-100 transition-colors">
            Day
          </button>
          <button class="px-5 py-3 font-bold bg-black text-white border-r-4 border-black">
            Week
          </button>
          <button class="px-5 py-3 font-bold bg-white text-black hover:bg-gray-100 transition-colors">
            Month
          </button>
        </div>
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          With colors
        </p>
        <div class="inline-flex border-4 border-black shadow-neo">
          <button class="px-5 py-3 font-bold bg-blue-500 text-white border-r-4 border-black">
            Active
          </button>
          <button class="px-5 py-3 font-bold bg-white text-black hover:bg-gray-100 transition-colors">
            Inactive
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
