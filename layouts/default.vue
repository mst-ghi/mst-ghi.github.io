<template>
  <div class="flex justify-center items-center h-screen">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  scrollToTop: true,
  transition: 'default',
})
export default class LayoutDefaultComponent extends Vue {}
</script>
