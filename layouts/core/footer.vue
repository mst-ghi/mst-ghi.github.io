<template>
  <div class="fixed bottom-0 w-full mt-24">
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
