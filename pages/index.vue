<template>
  <div class="flex flex-col w-full pt-16">
    <div class="grid grid-cols-2">
      <div class="col-span-2 md:col-span-1 w-full md:pr-20">
        <div class="flex justify-center md:justify-end">
          <svg-icon name="hero" class="hero--svg" />
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 flex-col pt-10 md:pt-32">
        <h1 class="text-3xl text-gray-700 mb-4">
          Hi, I'm <strong>{{ $appData.name }}</strong>
        </h1>
        <h2 class="text-xl text-gray-600 mb-2">
          {{ $appData.headline }}
        </h2>
        <vue-typed-js
          :strings="$appData.headlineStacks"
          :loop="true"
          :typeSpeed="50"
          :backSpeed="20"
          :backDelay="2000"
        >
          <h2 class="text-xl text-gray-600 mb-4">
            <strong class="typing"></strong>. +{{ $appData.experienceYear }}
            Year of Experience.
          </h2>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  scrollToTop: true,
  transition: 'default',
})
export default class IndexPageComponent extends Vue {
  mounted() {
    console.log(this.$appData)
  }
}
</script>

<style>
.hero--svg {
  height: 340px;
  width: auto;
}
</style>
