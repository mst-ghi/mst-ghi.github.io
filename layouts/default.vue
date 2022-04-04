<template>
  <div class="flex flex-col">
    <div class="flex w-full container">
      <Nuxt />
    </div>

    <main-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'
import MainFooter from './core/footer.vue'

@Component({
  scrollToTop: true,
  transition: 'default',
  components: {
    MainFooter,
  },
})
export default class LayoutDefaultComponent extends Vue {}
</script>
