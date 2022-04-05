<template>
  <div class="flex flex-col relative justify-between h-screen">
    <navbar />
    <div class="flex container">
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
  transition: 'default',
  components: {
    Navbar,
    MainFooter,
  },
})
export default class LayoutDefaultComponent extends Vue {}
</script>
