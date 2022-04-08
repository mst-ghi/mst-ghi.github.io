<template>
  <div class="flex flex-col w-full md:pt-16">
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
        <h2 class="text-xl text-gray-600 mb-4">
          +{{ $appData.experienceYear }}
          Year of Experience
        </h2>
        <vue-typed-js
          :strings="$appData.headlineStacks"
          :loop="true"
          :typeSpeed="50"
          :backSpeed="20"
          :backDelay="2000"
          class="border-2 rounded-md md:w-1/2 p-1 relative"
        >
          <div>
            <span
              class="text-gray-500 bg-white text-sm absolute -top-3 left-1 px-1"
            >
              Top Specialties:
            </span>
            <h2
              class="text-2xl text-gray-600 ml-1 flex flex-row space-x-2 mt-1"
            >
              <v-icon
                name="brands/stack-exchange"
                class="fill-gray-500 mt-1"
                scale="1.5"
              />
              <strong class="typing"></strong>
            </h2>
          </div>
        </vue-typed-js>
      </div>
    </div>

    <div class="py-8 bg-blue-100 rounded-lg mt-24">
      <nuxt-link to="/specialties" exact>
        <div class="container">
          <div class="text-center">
            <h2 class="text-2xl text-gray-700 font-medium">Top Specialties</h2>
          </div>
          <div
            class="flex md:flex-row flex-wrap space-y-2 items-center justify-between md:px-8"
          >
            <svg-icon name="nestjs" class="w-24" />
            <svg-icon name="nextjs" class="w-32" />
            <svg-icon name="laravel" class="w-24" />
            <svg-icon name="nuxtjs" class="w-40 md:w-44" />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  transition: 'page',
})
export default class IndexPageComponent extends Vue {}
</script>

<style>
.hero--svg {
  height: 340px;
  width: auto;
}
</style>
