<template>
  <div class="flex flex-col">
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
        <h1 class="text-3xl md:text-4xl text-gray-700 mb-4">
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
          class="border-2 rounded-md p-2 relative z-0"
        >
          <div>
            <span
              class="text-gray-500 bg-white text-sm absolute -top-3 left-1 px-1"
            >
              Top Skills:
            </span>
            <h2 class="text-xl text-gray-600 ml-1 flex flex-row space-x-2 mt-1">
              <strong class="typing"></strong>
            </h2>
          </div>
        </vue-typed-js>
      </div>
    </div>

    <div class="flex flex-col bg-slate-100 rounded-xl p-4 mt-16">
      <span class="text-gray-800 font-medium text-xl mb-3"> Summary </span>
      <p
        class="text-gray-600 font-normal text-md text-justify leading-6 md:px-4"
        v-html="$appData.bio"
      />
    </div>

    <div class="flex flex-col bg-slate-100 rounded-xl px-4 pt-4 mt-6">
      <span class="text-gray-800 font-medium text-xl mb-5">
        Pinned Repositories
      </span>
      <div class="grid grid-cols-2">
        <div
          v-for="(repo, index) in $pinnedRepoData"
          :key="'work-' + index"
          class="col-span-2 md:col-span-1 flex flex-col mb-4 md:px-4"
        >
          <div class="flex flex-row mb-1">
            <a
              :href="repo.link"
              target="_blank"
              :aria-label="repo.title"
              class="font-medium group flex flex-row space-x-1 mb-1"
            >
              <v-icon
                name="link"
                class="fill-blue-700 group-hover:fill-blue-500 mt-1"
                scale="1"
              />
              <span
                class="underline text-blue-700 group-hover:text-blue-500 text-sm mt-0.5 capitalize"
              >
                {{ repo.title }}
              </span>
            </a>
          </div>
          <div class="flex flex-row space-x-2">
            <span class="text-gray-600 text-sm font-normal">
              {{ repo.desc }}
            </span>
          </div>
        </div>
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
