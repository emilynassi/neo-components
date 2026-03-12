<template>
  <!-- Color Palette Section -->
  <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
    >
      Color Palette
    </h2>

    <div class="mt-8">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <div class="h-20 bg-blue-500 border-4 border-black shadow-neo-sm"></div>
          <p class="mt-2 font-bold text-sm">Primary</p>
          <p class="text-xs text-gray-500 font-mono">#3B82F6</p>
        </div>
        <div>
          <div class="h-20 bg-yellow-400 border-4 border-black shadow-neo-sm"></div>
          <p class="mt-2 font-bold text-sm">Secondary</p>
          <p class="text-xs text-gray-500 font-mono">#FACC15</p>
        </div>
        <div>
          <div class="h-20 bg-red-500 border-4 border-black shadow-neo-sm"></div>
          <p class="mt-2 font-bold text-sm">Danger</p>
          <p class="text-xs text-gray-500 font-mono">#EF4444</p>
        </div>
        <div>
          <div class="h-20 bg-green-500 border-4 border-black shadow-neo-sm"></div>
          <p class="mt-2 font-bold text-sm">Success</p>
          <p class="text-xs text-gray-500 font-mono">#22C55E</p>
        </div>
        <div>
          <div class="h-20 bg-white border-4 border-black shadow-neo-sm"></div>
          <p class="mt-2 font-bold text-sm">White</p>
          <p class="text-xs text-gray-500 font-mono">#FFFFFF</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Design Tokens Reference -->
  <section class="mb-16 bg-gray-900 text-white border-4 border-black p-8 shadow-neo">
    <h2
      class="text-2xl font-bold mb-6 pb-2 border-b-4 border-white inline-block"
    >
      Design Tokens
    </h2>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">
      <div>
        <p class="text-yellow-400 font-bold mb-2">// Borders</p>
        <p>border-width: <span class="text-green-400">4px</span></p>
        <p>border-color: <span class="text-green-400">#000000</span></p>
        <p>border-radius: <span class="text-green-400">0</span></p>
      </div>
      <div>
        <p class="text-yellow-400 font-bold mb-2">// Shadows</p>
        <p>shadow-neo: <span class="text-green-400">6px 6px 0 0 rgba(0,0,0,1)</span></p>
        <p>shadow-neo-sm: <span class="text-green-400">4px 4px 0 0 rgba(0,0,0,1)</span></p>
        <p>shadow-neo-hover: <span class="text-green-400">3px 3px 0 0 rgba(0,0,0,1)</span></p>
      </div>
      <div>
        <p class="text-yellow-400 font-bold mb-2">// Transitions</p>
        <p>hover-translate: <span class="text-green-400">translate(1px, 1px)</span></p>
        <p>active-translate: <span class="text-green-400">translate(1.5px, 1.5px)</span></p>
        <p>transition: <span class="text-green-400">all 150ms ease</span></p>
      </div>
      <div>
        <p class="text-yellow-400 font-bold mb-2">// Typography</p>
        <p>font-family: <span class="text-green-400">'Space Grotesk'</span></p>
        <p>font-mono: <span class="text-green-400">'Space Mono'</span></p>
        <p>font-weight-bold: <span class="text-green-400">700</span></p>
      </div>
    </div>
  </section>
</template>
