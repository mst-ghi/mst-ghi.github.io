<template>
  <div class="flex flex-col relative overflow-x-hidden">
    <stacks-logo />
    <div class="flex w-full h-screen container">
      <Nuxt />
    </div>
    <main-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'
import MainFooter from './core/footer.vue'
import StacksLogo from './core/stacks-logo.vue'

@Component({
  scrollToTop: true,
  transition: 'default',
  components: {
    StacksLogo,
    MainFooter,
  },
})
export default class LayoutDefaultComponent extends Vue {}
</script>
