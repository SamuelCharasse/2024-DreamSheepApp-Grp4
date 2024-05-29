<script setup lang="ts">
import ShopPremiumIcon from "@/components/icons/ShopPremiumIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <main class="m-3">
    <div class="flex justify-between pb-4">
      <div class="relative inline-block text-center">
        <details class="group">
          <summary
            class="inline-flex justify-center w-full rounded-md border-2 border-indigo-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50 focus:outline-none cursor-pointer"
          >
            Personnalisation
            <DownArrowIcon class="-mr-1 mt-0.5 ml-2 h-4 w-4" />
          </summary>
          <ul
            class="origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-open:block"
          >
            <li>
              <RouterLink
                to="/shop/premium"
                class="block pl-0.5 pr-0.5 py-2 text-sm font-normal text-gray-700"
                >Premium</RouterLink
              >
            </li>
          </ul>
        </details>
      </div>
      <ShopPremiumIcon class="mt-2" />
    </div>
    <div
      class="grid grid-cols-3 cols-span-3 bg-DarkPurple rounded-lg justify-items-center px-2 py-3"
    >
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
      <ProfileIcon />
    </div>
    <div class="flex justify-center pt-4">
      <Button text="Enregistrer" variant="yellow"></Button>
    </div>
  </main>
</template>
