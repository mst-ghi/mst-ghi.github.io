<template>
  <div class="bg-slate-100 mt-24 py-4">
    <div class="flex flex-col container">
      <div class="flex flex-row my-2 space-x-3 justify-center items-center">
        <a href="https://www.linkedin.com/in/mst-ghi/" target="_blank">
          <v-icon
            name="brands/linkedin"
            class="fill-gray-500 hover:fill-blue-700 cursor-pointer"
            scale="2"
          />
        </a>

        <a href="https://github.com/mst-ghi" target="_blank">
          <v-icon
            name="brands/github-square"
            class="fill-gray-500 hover:fill-gray-700 cursor-pointer"
            scale="2"
          />
        </a>

        <a href="https://twitter.com/mst_ghi" target="_blank">
          <v-icon
            name="brands/twitter-square"
            class="fill-gray-500 hover:fill-blue-500 cursor-pointer"
            scale="2"
          />
        </a>
      </div>
      <div
        class="flex flex-row text-gray-500 font-medium text-xs py-2 justify-center items-center"
      >
        <p>@{{ new Date().getFullYear() }}, Designed and Developed with 💕</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({})
export default class MainFooterComponent extends Vue {}
</script>
