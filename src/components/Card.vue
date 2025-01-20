<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon?: string
  title?: string
}>()

</script>

<template>
  <div class="flex flex-col bg-bg-card hover:(bg-bg-hovercard border-brand-border) p-(6.5 t-5 b-5) rounded-lg border-(solid 1 transparent) transition gap-2.5">
    <h2 class="m-0 p-0 flex items-center gap-2.5 text-text-primary">
      <Icon :icon v-if="icon"/> {{ title }}
    </h2>
    <div class="flex flex-col gap-2.5">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>