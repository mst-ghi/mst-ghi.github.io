<template>
  <nav
    class="fixed w-full bg-white px-1 md:px-4 py-3.5 border-b-[1px] border-gray-300 z-50"
  >
    <div
      class="md:container flex flex-row justify-between items-center mx-2 md:mx-auto"
    >
      <div class="flex flex-row justify-start items-center">
        <a href="/" class="flex items-center md:mr-10">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap uppercase"
          >
            {{ $appData.nickname }}
          </span>
        </a>

        <div class="w-full md:w-auto pl-2 md:pl-0" id="mobile-menu">
          <ul
            class="flex mt-0 flex-row md:space-x-2 text-sm md:text-md md:font-medium"
          >
            <li>
              <nuxt-link
                to="/"
                exact
                class="block py-1 px-3 border-b border-transparent hover:border-gray-100 duration-300"
              >
                Home
              </nuxt-link>
            </li>

            <li>
              <nuxt-link
                to="/resume"
                exact
                class="block py-1 px-3 border-b border-transparent hover:border-gray-100 duration-300"
              >
                Resume
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <a
        href="/MostafaGholami-Resume.pdf"
        download=""
        class="px-4 py-2 rounded-lg text-sm float-right"
      >
        <div class="flex flex-row justify-center items-center space-x-2">
          <v-icon name="file-download" class="mt-[-3px]" />
          <span> Resume </span>
        </div>
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
