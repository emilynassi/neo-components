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
        <label class="text-xs font-bold uppercase tracking-wider block mb-2">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          class="w-full px-4 py-3 text-lg border-4 border-black shadow-neo focus:outline-none focus:shadow-neo-hover focus:translate-x-0.5 focus:translate-y-0.5 transition-all placeholder:text-gray-400"
        />
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoInput (disabled)
        </p>
        <input
          type="text"
          value="Can't touch this"
          disabled
          class="w-full px-4 py-3 text-lg border-4 border-black shadow-neo opacity-50 cursor-not-allowed bg-gray-100"
        />
      </div>

      <div>
        <p class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
          NeoSelect
        </p>
        <label class="text-xs font-bold uppercase tracking-wider block mb-2">Team</label>
        <div class="relative">
          <select
            class="w-full px-4 py-3 text-lg border-4 border-black shadow-neo focus:outline-none focus:shadow-neo-hover focus:translate-x-0.5 focus:translate-y-0.5 transition-all appearance-none bg-white cursor-pointer"
          >
            <option>New York Rangers</option>
            <option>Boston Bruins</option>
            <option>Toronto Maple Leafs</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
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
