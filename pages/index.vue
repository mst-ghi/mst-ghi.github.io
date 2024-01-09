<template>
  <div class="flex flex-col mt-16">
    <div class="grid grid-cols-2">
      <div class="col-span-2 md:col-span-1 md:order-2 md:pt-20">
        <lottie-vue-player
          src="https://assets1.lottiefiles.com/packages/lf20_qjryhqec/data.json"
          style="width: 100%; height: 400px"
          autoplay
          loop
        />
      </div>

      <div
        class="col-span-2 md:col-span-1 flex-col pt-0 md:pt-48 md:pl-12 md:order-1"
      >
        <h1 class="text-2xl md:text-3xl text-gray-700 mb-8">
          Hi, I'm <strong>{{ $appData.name }}</strong>
        </h1>
        <h2 class="text-xl text-gray-600 mb-8">
          {{ $appData.headline }}, +{{ $appData.experienceYear }}
          Year of Experience.
        </h2>
        <vue-typed-js
          :strings="$appData.headlineStacks"
          :loop="true"
          :typeSpeed="50"
          :backSpeed="20"
          :backDelay="2000"
          class="border-2 rounded-md p-4 relative z-0"
        >
          <div>
            <span
              class="text-gray-500 bg-white text-sm absolute -top-3 left-1 px-1"
            >
              Top Skills:
            </span>
            <h2 class="text-xl text-gray-600 ml-1 flex flex-row space-x-2 mt-1">
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
  height: 500px;
  width: 600px;
}
</style>
