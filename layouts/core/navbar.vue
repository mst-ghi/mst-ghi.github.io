<template>
  <nav class="fixed w-full bg-gray-800 px-1 md:px-4 py-3.5 shadow-sm">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white uppercase"
        >
          {{ $appData.nickname }}
        </span>
      </a>

      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <nuxt-link
              to="/"
              exact
              class="block py-1 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent"
            >
              Home
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/specialties"
              exact
              class="block py-1 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent"
            >
              Specialties
            </nuxt-link>
          </li>
        </ul>
      </div>
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
