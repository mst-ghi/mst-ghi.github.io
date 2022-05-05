<template>
  <nav class="fixed w-full bg-gray-800 px-1 md:px-4 py-3.5 shadow-sm z-50">
    <div
      class="md:container flex flex-row justify-between items-center mx-2 md:mx-auto"
    >
      <div
        class="w-full md:w-auto order-2 md:order-1 pl-2 md:pl-0"
        id="mobile-menu"
      >
        <ul
          class="flex mt-0 flex-row md:space-x-8 text-xs md:text-sm md:font-medium"
        >
          <li>
            <nuxt-link
              to="/"
              exact
              class="block py-1 px-3 text-white border-b border-transparent hover:border-gray-100 duration-300"
            >
              Home
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/specialties"
              exact
              class="block py-1 px-3 text-white border-b border-transparent hover:border-gray-100 duration-300"
            >
              Specialties
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/resume"
              exact
              class="block py-1 px-3 text-white border-b border-transparent hover:border-gray-100 duration-300"
            >
              Resume
            </nuxt-link>
          </li>
        </ul>
      </div>

      <a href="/" class="flex items-center order-1 md:order-2">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white uppercase"
        >
          {{ $appData.nickname }}
        </span>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  name: 'navbar',
})
export default class NavbarComponent extends Vue {}
</script>
