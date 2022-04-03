<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-3xl text-gray-700 mb-2">Hi, I'm Mostafa Gholami</h1>
    <h2 class="text-xl text-gray-600 mb-5">Back-end and Front-end Developer</h2>
    <h3 class="text-xl text-gray-600">
      New website <strong>Coming Soon</strong>
    </h3>
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
