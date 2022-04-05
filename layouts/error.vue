<template>
  <div class="flex flex-col relative">
    <div class="flex container">not found</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  scrollToTop: true,
  transition: 'default',
})
export default class LayoutErrorComponent extends Vue {}
</script>
