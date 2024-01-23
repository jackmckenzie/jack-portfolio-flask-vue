<script setup lang="ts">
interface SocialLinkProps {
  href: string;
  label: string;
}

defineProps<SocialLinkProps>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="duration-400 flex transform items-center gap-2 rounded-full bg-gray-700/25 p-3 transition-transform hover:-translate-y-0.5 dark:bg-gray-100 dark:text-gray-700"
  >
    <slot name="icon"></slot>
    <span class="sr-only">{{ label }}</span>
  </a>
</template>
