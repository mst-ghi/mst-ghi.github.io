<template>
  <div class="flex flex-col relative justify-between h-screen">
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WCPZ46S"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>

    <navbar />
    <div
      class="flex justify-center items-center md:container px-4 pt-20 md:pt-10"
    >
      <Nuxt />
    </div>
    <main-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'
import Navbar from './core/navbar.vue'
import MainFooter from './core/footer.vue'

@Component({
  scrollToTop: true,
  transition: 'page',
  components: {
    Navbar,
    MainFooter,
  },
})
export default class LayoutDefaultComponent extends Vue {}
</script>
