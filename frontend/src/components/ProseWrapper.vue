<script setup lang="ts">
defineProps({
  class: String,
});
</script>

<template>
  <div
    class="prose prose-lg dark:prose-invert prose-headings:font-medium prose-h1:font-normal prose-li:marker:text-orange-300 prose-li:marker:dark:text-gray-500"
  >
    <slot></slot>
  </div>
</template>
