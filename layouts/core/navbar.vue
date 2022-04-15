<template>
  <nav class="fixed w-full bg-gray-800 px-1 md:px-4 py-3.5 shadow-sm z-50">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
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
        </ul>
      </div>

      <a href="/" class="flex items-center">
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
