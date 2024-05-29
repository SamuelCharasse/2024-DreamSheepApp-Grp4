<script setup lang="ts">
import ShopPremiumIcon from "@/components/icons/ShopPremiumIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
</script>

<template>
<main class="m-3">
  <div class="relative inline-block  text-center">
  <details class="group">
    <summary class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer">
      Dropdown button
      <DownArrowIcon class="-mr-1 ml-2 h-4 w-4"/>
    </summary>
    <ul class="origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-open:block">
      <li>
        <a href="#" class="block pl-0.5 pr-0.5 py-2 text-sm text-gray-700">Premium</a>
      </li>
        <li>
            <a href="#" class="block pl-0.5 pr-0.5 py-2 text-sm text-gray-700">Ressources supplémentaires</a>
        </li>
    </ul>
    </details>
    </div>
</main>
</template>
