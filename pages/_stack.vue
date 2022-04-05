<template>
  <div class="flex flex-col justify-center items-center">
    <svg-icon name="laravel" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({
  scrollToTop: true,
  transition: 'default',
})
export default class StackPageComponent extends Vue {}
</script>

<style>
.hero--svg {
  height: 340px;
  width: auto;
}
</style>
