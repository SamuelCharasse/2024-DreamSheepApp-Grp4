<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "yellow" | "purple";
    size?: "small" | "medium" | "large";
    url?: string;
    text?: string;
  }>(),
  {
    variant: "yellow",
    size: "medium",
  }
);
const variantClass = {
  yellow: "bg-yellow-500 text-black",
  purple: "bg-LightPurple text-black hover:bg-yellow-200",
};
const sizeClass = {
  small: "px-4 py-2.5 text-base font-bold",
  medium: "px-6 py-3 text-base font-bold",
  large: "px-10 py-2.5 text-base font-bold",
};
</script>
<template>
  <RouterLink
    class="inline-flex items-center gap-2 text-black rounded-lg transition duration-300 ease-in-out"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
    :to="`${url}`"
  >
    {{ text }}
  </RouterLink>
</template>
