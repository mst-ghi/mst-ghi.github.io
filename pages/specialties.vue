<template>
  <div class="flex flex-col divide-y-2 md:pt-12">
    <div
      v-for="(stack, index) in $stacksData"
      :key="stack.title"
      class="flex flex-col w-full py-20 md:py-12 md:px-4"
    >
      <div class="grid grid-cols-3">
        <div
          :class="[
            'col-span-3 md:col-span-1 w-full',
            stack.isLeftLogo ? 'order-1' : 'order-1 md:order-2',
          ]"
        >
          <div
            :class="[
              'flex justify-center pb-6 md:pb-0',
              stack.isLeftLogo ? 'md:justify-start' : 'md:justify-end',
            ]"
          >
            <svg-icon :name="stack.logo" class="w-72 h-40" />
          </div>
        </div>

        <div
          :class="[
            'col-span-3 md:col-span-2 flex-col',
            stack.isLeftLogo ? 'order-1 md:order-2' : 'order-1',
          ]"
        >
          <h1 class="stack--title text-gray-700">{{ stack.title }}</h1>

          <h2 class="stack--subtitle text-gray-700">
            {{ stack.subtitle }}
          </h2>

          <p class="stack--desc text-gray-600">
            {{ stack.desc }}
          </p>
          <a
            :href="stack.link"
            target="_blank"
            :aria-label="stack.title"
            class="font-medium group flex flex-row space-x-1"
          >
            <v-icon
              name="link"
              class="fill-blue-700 group-hover:fill-blue-500 mt-1"
              scale="1"
            />
            <span class="underline text-blue-700 group-hover:text-blue-500">
              Website
            </span>
          </a>
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
export default class StacksPageComponent extends Vue {}
</script>

<style></style>
