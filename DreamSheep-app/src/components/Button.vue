<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "yellow" | "purple";
    size?: "small" | "medium" | "large";
    fontSize?: "small" | "medium" | "large";
    url?: string;
    text?: string;
  }>(),
  {
    variant: "yellow",
    size: "medium",
    fontSize: "medium",
  }
);
const variantClass = {
  yellow: "bg-yellow-200 text-black",
  purple: "bg-LightPurple text-black hover:bg-yellow-200",
};
const sizeClass = {
  small: "px-4 py-2.5 text-base ",
  medium: "px-6 py-3 text-base ",
  large: "px-10 py-2.5 text-base ",
};
const fontSize ={
    small :"font-base",
    medium :"font-semibold",
    large :"font-bold",
}
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
