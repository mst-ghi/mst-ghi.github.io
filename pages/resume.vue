<template>
  <div class="flex md:pt-12 w-full -mb-6 md:-mb-14 relative">
    <div
      class="grid grid-cols-6 space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full"
    >
      <div
        :class="[
          'col-span-6 md:col-span-2 bg-blue-100 rounded-xl px-0 py-4 md:p-4',
          'h-min max-w-[400px] relative md:sticky top-0 md:top-20',
        ]"
      >
        <div class="flex flex-col">
          <div class="flex flex-col items-center">
            <img
              src="/img/me-square.png"
              :alt="$appData.nickname"
              loading="lazy"
              class="rounded-full border-2 border-white aspect-square"
            />

            <div class="flex flex-col items-center p-2">
              <h1 class="text-gray-600 font-medium text-2xl">
                {{ $appData.name }}
              </h1>

              <h2 class="text-gray-600 font-normal text-base mt-2">
                {{ $appData.headline }}
              </h2>
            </div>
          </div>

          <div class="flex flex-col px-6 py-4 space-y-2">
            <a
              href="mail::mostafagholamidev@gmail.com"
              aria-label="mostafagholamidev@gmail.com"
              class="text-gray-600 font-normal text-sm flex flex-row"
            >
              <v-icon
                name="regular/envelope"
                class="fill-gray-500 mr-2"
                scale="1.3"
              />
              <span> {{ $appData.email }}</span>
            </a>

            <a
              href="tel:+989365895522"
              aria-label="989365895522"
              class="text-gray-600 font-normal text-sm flex flex-row"
            >
              <v-icon
                name="phone"
                class="fill-gray-500 mt-0.5 mr-2"
                scale="1.1"
              />
              <span> {{ $appData.phone }}</span>
            </a>

            <a
              :href="$appData.site"
              :aria-label="$appData.site"
              class="text-gray-600 font-normal text-sm flex flex-row"
            >
              <v-icon
                name="link"
                class="fill-gray-500 mt-0.5 mr-2"
                scale="1.1"
              />
              <span> {{ $appData.site }}</span>
            </a>

            <div class="text-gray-600 font-normal text-sm flex flex-row">
              <v-icon
                name="map-marked-alt"
                class="fill-gray-500 mt-0.5 mr-2"
                scale="1.1"
              />
              <span> {{ $appData.address }}</span>
            </div>

            <div class="text-gray-600 font-normal text-sm flex flex-row">
              <v-icon
                name="calendar-alt"
                class="fill-gray-500 mt-0.5 mr-2"
                scale="1.1"
              />
              <span> {{ $appData.birthday }}</span>
            </div>
          </div>

          <div class="flex flex-col px-6 mt-3 pb-3">
            <span class="text-gray-800 font-medium text-xl mb-3">
              Specialties
            </span>
            <div
              v-for="(stack, index) in $appData.headlineStacks"
              :key="'stack-' + index"
              class="text-gray-600 font-normal text-sm text-justify leading-6 pb-2 flex flex-row items-center"
            >
              <v-icon
                name="dot-circle"
                class="fill-gray-500 mt-0.5 mr-2"
                scale="1.1"
              />

              <div class="flex flex-row justify-between w-full space-x-2">
                <span class="border-[1px] border-white rounded-md p-1 w-full">
                  {{ stack.split(',')[0].trim() }}
                </span>
                <span class="border-[1px] border-white rounded-md p-1 w-full">
                  {{ stack.split(',')[1].trim() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-6 md:col-span-4 flex flex-col space-y-4">
        <div class="flex flex-col bg-slate-50 rounded-xl p-4">
          <span class="text-gray-800 font-medium text-xl mb-5"> Summary </span>
          <p class="text-gray-600 font-normal text-sm text-justify leading-6">
            {{ $appData.bio }}
          </p>
        </div>

        <div class="flex flex-col bg-slate-50 rounded-xl px-4 pt-4">
          <span class="text-gray-800 font-medium text-xl mb-5">
            Work Experience
          </span>
          <div class="grid grid-cols-2">
            <div
              v-for="(work, index) in $worksData"
              :key="'work-' + index"
              class="col-span-2 md:col-span-1 flex flex-col mb-8 md:px-4"
            >
              <div class="flex flex-row mb-1">
                <span class="text-gray-800">
                  {{ work.title }}
                </span>
              </div>
              <div class="flex flex-row space-x-2">
                <span class="text-sm text-gray-500 font-light">Company:</span>
                <span class="text-gray-600 text-sm font-normal">
                  {{ work.company }}
                </span>
              </div>
              <div class="flex flex-row space-x-2">
                <span class="text-sm text-gray-500 font-light">Location:</span>
                <span class="text-gray-600 text-sm font-normal">
                  {{ work.location }}
                </span>
              </div>
              <div class="flex flex-row space-x-2">
                <span class="text-sm text-gray-500 font-light">Date:</span>
                <span class="text-gray-600 text-sm font-normal">
                  {{ work.date }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col bg-slate-50 rounded-xl px-4 pt-4">
          <span class="text-gray-800 font-medium text-xl mb-5">
            Top Projects and Source Code
          </span>
          <div
            v-for="(project, index) in $projectsData"
            :key="'project-' + index"
            class="flex flex-row mb-8 md:px-4"
          >
            <div class="flex flex-col">
              <span class="text-gray-800 mb-1">
                {{ project.title }}
              </span>
              <span class="text-gray-600 text-sm font-normal">
                {{ project.desc }}
              </span>
              <a
                :href="project.link"
                target="_blank"
                :aria-label="project.title"
                class="font-medium group flex flex-row space-x-1 mt-1"
              >
                <v-icon
                  name="link"
                  class="fill-blue-700 group-hover:fill-blue-500 mt-1"
                  scale="1"
                />
                <span
                  class="underline text-blue-700 group-hover:text-blue-500 text-sm mt-0.5"
                >
                  {{ project.link }}
                </span>
              </a>
            </div>
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
export default class ResumePageComponent extends Vue {}
</script>

<style></style>
