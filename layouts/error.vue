<template>
  <div class="flex flex-col md:container justify-center items-center pt-16">
    <img src="/not-found.png" alt="Not Found" loading="lazy" />
    <a
      href="/"
      aria-label="home"
      class="mt-8 md:mt-3 text-gray-700 text-xl font-medium border-2 p-2 rounded-lg cursor-pointer w-48 text-center"
    >
      Back to home
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  scrollToTop: true,
  transition: 'default',
})
export default class LayoutErrorComponent extends Vue {}
</script>
