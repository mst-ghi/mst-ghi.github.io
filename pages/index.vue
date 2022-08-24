<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <div class="grid grid-cols-2">
        <div class="col-span-2 md:col-span-1 order-2">
          <div class="flex justify-center">
            <svg-icon name="hero" class="hero--svg" />
          </div>
        </div>

        <div
          class="col-span-2 md:col-span-1 flex-col pt-10 md:pt-48 md:pl-12 order-1"
        >
          <h1 class="text-2xl md:text-3xl text-gray-700 mb-4">
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
            class="border-2 rounded-md md:w-1/2 p-1 relative z-0"
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

          <a
            class="linkedin-button mt-8 w-full md:w-[280px] h-12"
            href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mst-ghi"
            target="_blank"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <nuxt-link to="/specialties" exact class="w-full">
        <div class="py-8 bg-blue-100 rounded-lg mt-12 md:mt-24">
          <div class="container">
            <div class="text-center">
              <h2 class="text-2xl text-gray-700 font-medium">
                Top Specialties
              </h2>
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
  height: 500px;
  width: 600px;
}
.linkedin-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7px;
  text-align: center;
  outline: none;
  text-decoration: none !important;
  color: #ffffff !important;
  border-radius: 12px;
  background-color: #0a66c2;
  font-family: 'SF Pro Text', Helvetica, sans-serif;
}
</style>
