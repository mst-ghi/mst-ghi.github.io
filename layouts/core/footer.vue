<template>
  <div class="container border-t-[1px] border-gray-300 px-3 py-2">
    <div class="flex flex-row py-2 justify-between items-center">
      <p class="text-xs text-gray-400 font-medium">
        Designed and Developed by
        <br class="block md:hidden" />
        <a
          href="https://github.com/mst-ghi"
          aria-label="mst-ghi"
          class="text-sm"
          target="_blank"
        >
          <strong>Mostafa Gholami</strong>
        </a>
      </p>

      <p class="text-xs text-gray-400 font-medium">
        Source of this project is
        <br class="block md:hidden" />
        <a
          href="https://github.com/mst-ghi/mst-ghi.github.io"
          aria-label="mst-ghi.github.io"
          class="text-sm"
          target="_blank"
        >
          <strong>Here</strong>
        </a>
      </p>
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
