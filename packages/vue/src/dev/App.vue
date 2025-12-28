<script setup lang="ts">
// Import components here as you build them
import NeoButton from '../components/NeoButton.vue';
import NeoBadge from '../components/NeoBadge.vue';
</script>

<template>
  <div class="bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <header class="mb-12">
        <h1 class="text-5xl font-bold mb-2 tracking-tight">NEOBRUT</h1>
        <p class="text-lg text-gray-600">Component Library Visual Reference</p>
      </header>

      <!-- Typography Section -->
      <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
        >
          Typography
        </h2>

        <div class="space-y-6 mt-8">
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoHeading xl</span
            >
            <h3 class="text-5xl font-bold tracking-tight">
              The Quick Brown Fox
            </h3>
          </div>
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoHeading lg</span
            >
            <h3 class="text-4xl font-bold tracking-tight">
              The Quick Brown Fox
            </h3>
          </div>
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoHeading md</span
            >
            <h3 class="text-2xl font-bold tracking-tight">
              The Quick Brown Fox
            </h3>
          </div>
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoHeading sm</span
            >
            <h3 class="text-xl font-bold tracking-tight">
              The Quick Brown Fox
            </h3>
          </div>

          <hr class="border-gray-200 my-8" />

          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoText body</span
            >
            <p class="text-base">
              This is body text. It's clean and readable, designed for longer
              content blocks and descriptions.
            </p>
          </div>
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoText label</span
            >
            <p class="text-xs font-bold uppercase tracking-wider">
              SEASON * TEAM * PLAYER
            </p>
          </div>
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoText stat (lg)</span
            >
            <p class="text-5xl font-bold font-mono">8:47</p>
          </div>
          <div>
            <span
              class="text-xs font-bold uppercase text-gray-500 tracking-wider"
              >NeoText stat (md)</span
            >
            <p class="text-3xl font-bold font-mono">12:34</p>
          </div>
        </div>
      </section>

      <!-- Buttons Section -->
      <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
        >
          Buttons
        </h2>

        <div class="mt-8">
          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            Sizes
          </p>
          <div class="flex flex-wrap items-center gap-4 mb-8">
            <NeoButton size="sm">Small</NeoButton>
            <NeoButton size="md">Medium</NeoButton>
            <NeoButton size="lg">Large</NeoButton>
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            Colors
          </p>
          <div class="flex flex-wrap items-center gap-4 mb-8">
            <NeoButton color="primary">Primary</NeoButton>
            <NeoButton color="secondary">Secondary</NeoButton>
            <NeoButton color="danger">Danger</NeoButton>
            <NeoButton color="success">Success</NeoButton>
            <NeoButton color="white">White</NeoButton>
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            States
          </p>
          <div class="flex flex-wrap items-center gap-4 mb-8">
            <NeoButton color="primary">Default</NeoButton>
            <NeoButton color="primary" disabled>Disabled</NeoButton>
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            With Rotation
          </p>
          <div class="flex flex-wrap items-center gap-6">
            <NeoButton color="primary" rotate>Rotated</NeoButton>
            <NeoButton color="danger" rotate>Rotated</NeoButton>
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4 mt-8"
          >
            Custom Colors
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <NeoButton color="#8B5CF6">Purple</NeoButton>
            <NeoButton color="#EC4899">Pink</NeoButton>
            <NeoButton color="#14B8A6">Teal</NeoButton>
          </div>
        </div>
      </section>

      <!-- Form Inputs Section -->
      <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
        >
          Form Inputs
        </h2>

        <div class="mt-8 max-w-md space-y-8">
          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              NeoInput
            </p>
            <label class="text-xs font-bold uppercase tracking-wider block mb-2"
              >Email Address</label
            >
            <input
              type="email"
              placeholder="you@example.com"
              class="w-full px-4 py-3 text-lg border-4 border-black shadow-neo focus:outline-none focus:shadow-neo-hover focus:translate-x-0.5 focus:translate-y-0.5 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
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
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              NeoSelect
            </p>
            <label class="text-xs font-bold uppercase tracking-wider block mb-2"
              >Team</label
            >
            <div class="relative">
              <select
                class="w-full px-4 py-3 text-lg border-4 border-black shadow-neo focus:outline-none focus:shadow-neo-hover focus:translate-x-0.5 focus:translate-y-0.5 transition-all appearance-none bg-white cursor-pointer"
              >
                <option>New York Rangers</option>
                <option>Boston Bruins</option>
                <option>Toronto Maple Leafs</option>
              </select>
              <div
                class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              NeoCheckbox
            </p>
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer group">
                <div
                  class="w-6 h-6 border-4 border-black bg-blue-500 flex items-center justify-center shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span class="font-medium">Checked option</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group">
                <div
                  class="w-6 h-6 border-4 border-black bg-white shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all"
                ></div>
                <span class="font-medium">Unchecked option</span>
              </label>
              <label
                class="flex items-center gap-3 cursor-not-allowed opacity-50"
              >
                <div
                  class="w-6 h-6 border-4 border-black bg-gray-100 shadow-neo-sm"
                ></div>
                <span class="font-medium">Disabled option</span>
              </label>
            </div>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              NeoRadio
            </p>
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer group">
                <div
                  class="w-6 h-6 border-4 border-black bg-white rounded-full shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all flex items-center justify-center"
                >
                  <div class="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>
                <span class="font-medium">Selected option</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group">
                <div
                  class="w-6 h-6 border-4 border-black bg-white rounded-full shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all"
                ></div>
                <span class="font-medium">Unselected option</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Cards & Layout Section -->
      <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
        >
          Cards & Layout
        </h2>

        <div class="mt-8">
          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            NeoCard variations
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Standard Card -->
            <div class="border-4 border-black p-6 shadow-neo bg-white">
              <h3 class="text-xl font-bold mb-2">Standard Card</h3>
              <p class="text-gray-600">Default card with shadow and padding.</p>
            </div>

            <!-- Card with accent color -->
            <div class="border-4 border-black p-6 shadow-neo bg-yellow-400">
              <h3 class="text-xl font-bold mb-2">Colored Card</h3>
              <p>Cards can have background colors applied.</p>
            </div>

            <!-- Rotated Card -->
            <div class="border-4 border-black p-6 shadow-neo bg-white rotate-2">
              <h3 class="text-xl font-bold mb-2">Rotated Card</h3>
              <p class="text-gray-600">Adds playful tilt to the design.</p>
            </div>
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            Stat Cards (example composition)
          </p>
          <div class="flex flex-wrap gap-4 mb-8">
            <div class="border-4 border-black p-4 shadow-neo bg-white">
              <p class="text-4xl font-bold font-mono">8:47</p>
              <p class="text-xs font-bold uppercase tracking-wider mt-1">
                AVG MINUTES
              </p>
            </div>
            <div
              class="border-4 border-black p-4 shadow-neo bg-blue-500 text-white rotate-3"
            >
              <p class="text-4xl font-bold font-mono">5:53</p>
              <p class="text-xs font-bold uppercase tracking-wider mt-1">
                LAST 5 AVG
              </p>
            </div>
            <div
              class="border-4 border-black p-4 shadow-neo bg-red-500 text-white -rotate-2"
            >
              <p class="text-4xl font-bold font-mono">23</p>
              <p class="text-xs font-bold uppercase tracking-wider mt-1">
                GAMES
              </p>
            </div>
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
            NeoBadge
          </p>
          <div class="flex flex-wrap items-center gap-3 mb-8">
            <NeoBadge
              label="Primary"
              color="primary"
              >Primary</NeoBadge
            >
            <NeoBadge
              label="Secondary"
              color="secondary"
              >Secondary</NeoBadge
            >
            <NeoBadge
              label="Danger"
              color="danger"
              >Danger</NeoBadge
            >
            <NeoBadge
              label="Success"
              color="success"
              >Success</NeoBadge
            >
            <NeoBadge
              label="White"
              color="white"
              >White</NeoBadge
            >
            <NeoBadge
              label="Custom"
              color="#3B82F6"
              >Custom</NeoBadge
            >
          </div>

          <p
            class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
          >
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

      <!-- Toggle / Button Group Section -->
      <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
        >
          Interactive
        </h2>

        <div class="mt-8 space-y-8">
          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              NeoToggle / NeoButtonGroup
            </p>

            <!-- Toggle Group -->
            <div class="inline-flex border-4 border-black shadow-neo">
              <button
                class="px-6 py-3 font-bold bg-black text-white border-r-4 border-black"
              >
                Regular Season *
              </button>
              <button
                class="px-6 py-3 font-bold bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Playoffs
              </button>
            </div>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              Three options
            </p>
            <div class="inline-flex border-4 border-black shadow-neo">
              <button
                class="px-5 py-3 font-bold bg-white text-black border-r-4 border-black hover:bg-gray-100 transition-colors"
              >
                Day
              </button>
              <button
                class="px-5 py-3 font-bold bg-black text-white border-r-4 border-black"
              >
                Week
              </button>
              <button
                class="px-5 py-3 font-bold bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Month
              </button>
            </div>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4"
            >
              With colors
            </p>
            <div class="inline-flex border-4 border-black shadow-neo">
              <button
                class="px-5 py-3 font-bold bg-blue-500 text-white border-r-4 border-black"
              >
                Active
              </button>
              <button
                class="px-5 py-3 font-bold bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Inactive
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Color Palette Section -->
      <section class="mb-16 bg-white border-4 border-black p-8 shadow-neo">
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-black inline-block"
        >
          Color Palette (Suggested)
        </h2>

        <div class="mt-8">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div
                class="h-20 bg-blue-500 border-4 border-black shadow-neo-sm"
              ></div>
              <p class="mt-2 font-bold text-sm">Primary</p>
              <p class="text-xs text-gray-500 font-mono">#3B82F6</p>
            </div>
            <div>
              <div
                class="h-20 bg-yellow-400 border-4 border-black shadow-neo-sm"
              ></div>
              <p class="mt-2 font-bold text-sm">Secondary</p>
              <p class="text-xs text-gray-500 font-mono">#FACC15</p>
            </div>
            <div>
              <div
                class="h-20 bg-red-500 border-4 border-black shadow-neo-sm"
              ></div>
              <p class="mt-2 font-bold text-sm">Danger</p>
              <p class="text-xs text-gray-500 font-mono">#EF4444</p>
            </div>
            <div>
              <div
                class="h-20 bg-green-500 border-4 border-black shadow-neo-sm"
              ></div>
              <p class="mt-2 font-bold text-sm">Success</p>
              <p class="text-xs text-gray-500 font-mono">#22C55E</p>
            </div>
            <div>
              <div
                class="h-20 bg-white border-4 border-black shadow-neo-sm"
              ></div>
              <p class="mt-2 font-bold text-sm">White</p>
              <p class="text-xs text-gray-500 font-mono">#FFFFFF</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Design Tokens Reference -->
      <section
        class="mb-16 bg-gray-900 text-white border-4 border-black p-8 shadow-neo"
      >
        <h2
          class="text-2xl font-bold mb-6 pb-2 border-b-4 border-white inline-block"
        >
          Design Tokens
        </h2>

        <div
          class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm"
        >
          <div>
            <p class="text-yellow-400 font-bold mb-2">// Borders</p>
            <p>border-width: <span class="text-green-400">4px</span></p>
            <p>border-color: <span class="text-green-400">#000000</span></p>
            <p>border-radius: <span class="text-green-400">0</span></p>
          </div>
          <div>
            <p class="text-yellow-400 font-bold mb-2">// Shadows</p>
            <p>
              shadow-neo:
              <span class="text-green-400">6px 6px 0 0 rgba(0,0,0,1)</span>
            </p>
            <p>
              shadow-neo-sm:
              <span class="text-green-400">4px 4px 0 0 rgba(0,0,0,1)</span>
            </p>
            <p>
              shadow-neo-hover:
              <span class="text-green-400">3px 3px 0 0 rgba(0,0,0,1)</span>
            </p>
          </div>
          <div>
            <p class="text-yellow-400 font-bold mb-2">// Transitions</p>
            <p>
              hover-translate:
              <span class="text-green-400">translate(1px, 1px)</span>
            </p>
            <p>
              active-translate:
              <span class="text-green-400">translate(1.5px, 1.5px)</span>
            </p>
            <p>
              transition: <span class="text-green-400">all 150ms ease</span>
            </p>
          </div>
          <div>
            <p class="text-yellow-400 font-bold mb-2">// Typography</p>
            <p>
              font-family: <span class="text-green-400">'Space Grotesk'</span>
            </p>
            <p>font-mono: <span class="text-green-400">'Space Mono'</span></p>
            <p>font-weight-bold: <span class="text-green-400">700</span></p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
