<template>
  <kinesis-container :perspective="3000" class="absolute w-full h-full">
    <kinesis-element :strength="4">
      <svg-icon name="js" class="absolute w-16 top-12 left-5 md:left-32" />
    </kinesis-element>

    <kinesis-element :strength="6">
      <svg-icon name="reactjs" class="absolute w-20 top-12 left-2/4" />
    </kinesis-element>

    <kinesis-element :strength="6">
      <svg-icon name="vuejs" class="absolute w-20 top-5 right-12 md:right-32" />
    </kinesis-element>
  </kinesis-container>
</template>

<script lang="ts">
import { Component, Vue } from '@/decorators'

@Component({})
export default class StacksLogoComponent extends Vue {}
</script>
