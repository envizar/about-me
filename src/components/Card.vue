<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon?: string
  title?: string
}>()

</script>

<template>
  <div class="flex flex-col bg-black/20 p-6.5 p-t-5 p-b-5 rounded-lg border-solid border-1 border-transparent hover:border-red-2/30 transition gap-2.5">
    <h2 class="m-0 p-0 flex items-center gap-2.5">
      <Icon :icon v-if="icon"/> {{ title }}
    </h2>
    <div class="color-[#DBD1D1] flex flex-col gap-2.5">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>