<template>
  <div class="w-full mt-16 md:mt-24">
    <div class="bg-gray-800 py-4">
      <div class="flex flex-col px-5 md:px-20">
        <div class="flex flex-col md:flex-row pb-4 divide-y-1">
          <div
            class="flex flex-col space-y-2 my-2 text-white w-full md:w-2/3 md:pr-8"
          >
            <h1 class="font-semibold text-xl mb-1">
              {{ $appData.name }} ({{ $appData.nickname }})
            </h1>
            <p class="text-base md:text-sm text-justify">{{ $appData.bio }}</p>

            <a href="/MostafaGholami-Resume.pdf" download="" class="text-sm">
              <div class="flex flex-row items-center space-x-2">
                <v-icon name="file-download" scale="1" class="fill-slate-50" />
                <span class="mt-1"> Download Resume </span>
              </div>
            </a>
          </div>

          <div class="flex flex-col md:flex-row w-full md:w-1/3">
            <div
              class="flex flex-col my-2 text-white space-y-4 w-full md:w-2/3"
            >
              <span class="text-lg md:text-base font-medium">
                Contact info
              </span>

              <div class="flex flex-col space-y-1">
                <a
                  href="mail::mostafagholamidev@gmail.com"
                  aria-label="mostafagholamidev@gmail.com"
                  class="text-sm font-medium cursor-pointer flex flex-row space-x-1"
                >
                  <v-icon
                    name="regular/envelope"
                    class="fill-white mt-0.5"
                    scale="1"
                  />
                  <span>mostafagholamidev@gmail.com</span>
                </a>
                <a
                  href="tel:+989365895522"
                  aria-label="989365895522"
                  class="text-sm font-medium cursor-pointer flex flex-row space-x-1"
                >
                  <v-icon name="phone" class="fill-white mt-0.5" scale="0.9" />
                  <span>+989365895522</span>
                </a>
              </div>
            </div>

            <div
              class="flex flex-row md:flex-col my-4 md:my-2 md:space-y-4 space-x-4 md:space-x-0 items-start md:items-end w-full md:w-1/3"
            >
              <span class="text-white text-lg md:text-base font-medium">
                Find me on
              </span>

              <div class="flex flex-row space-x-3">
                <a
                  href="https://www.linkedin.com/in/mst-ghi/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <v-icon
                    name="brands/linkedin"
                    class="fill-white hover:fill-blue-700 cursor-pointer"
                    scale="2"
                  />
                </a>

                <a
                  href="https://github.com/mst-ghi"
                  target="_blank"
                  aria-label="Github"
                >
                  <v-icon
                    name="brands/github-square"
                    class="fill-white hover:fill-gray-700 cursor-pointer"
                    scale="2"
                  />
                </a>

                <a
                  href="https://twitter.com/mst_ghi"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <v-icon
                    name="brands/twitter-square"
                    class="fill-white hover:fill-blue-500 cursor-pointer"
                    scale="2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row py-2 justify-between items-center">
          <p class="text-white text-xs font-medium">
            Designed and Developed by
            <br class="block md:hidden" />
            <a
              href="https://github.com/mst-ghi"
              aria-label="mst-ghi"
              class="text-sm"
              target="_blank"
            >
              <strong class="underline">Mostafa Gholami</strong>
            </a>
          </p>

          <p class="text-white text-xs font-medium">
            The source of this project is
            <br class="block md:hidden" />
            <a
              href="https://github.com/mst-ghi/mst-ghi.github.io"
              aria-label="mst-ghi.github.io"
              class="text-sm"
              target="_blank"
            >
              <strong class="underline">here</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  name: 'main-footer',
})
export default class FooterComponent extends Vue {}
</script>
