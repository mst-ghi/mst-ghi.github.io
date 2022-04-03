<template>
  <div class="flex flex-col items-center">
    <svg-icon name="hero" class="h-96" />

    <h1 class="text-3xl text-gray-700 mb-2">Hi, I'm Mostafa Gholami</h1>
    <h2 class="text-xl text-gray-600 mb-5">Back-end and Front-end Developer</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  scrollToTop: true,
  transition: 'default',
})
export default class IndexPageComponent extends Vue {}
</script>
