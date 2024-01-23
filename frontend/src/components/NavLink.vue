<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router';

defineProps<RouterLinkProps>();
</script>

<template>
  <router-link
    v-bind="$props"
    class="relative inline-block p-3 text-gray-700 hover:text-slate-900 focus:outline-2 focus:outline-blue-300 dark:text-gray-200"
    active-class="font-semibold text-gray-900 dark:text-white"
    ><slot
  /></router-link>
</template>

<!--
// <script setup lang="ts">
// import { defineAsyncComponent, type DefineComponent } from 'vue'

// interface Props {
//   a: number
// }

// const Bar = defineAsyncComponent<DefineComponent<Props>>(
//   () => import('./Bar.vue') as any
// )
// defineProps<Props>()
// </script>-->
