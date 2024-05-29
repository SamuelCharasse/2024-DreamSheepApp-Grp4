<script setup lang="ts">
import ShopPremiumIcon from "@/components/icons/ShopPremiumIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import OkIcon from "@/components/icons/OkIcon.vue";
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
            Premium
            <DownArrowIcon class="-mr-1 mt-0.5 ml-2 h-4 w-4" />
          </summary>
          <ul
            class="origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-open:block"
          >
            <li>
              <RouterLink
                to="/shop"
                class="block pl-0.5 pr-0.5 py-2 text-sm font-normal text-gray-700"
                >Personnalisation</RouterLink
              >
            </li>
          </ul>
        </details>
      </div>
      <ShopPremiumIcon class="mt-2" />
    </div>
    <h3 class="text-white text-center pt-2 pb-3">Nos offres du moment</h3>
    <div class="py-3 bg-DarkPurple border border-white rounded-lg mx-5 my-2">
      <div class=" pt-2">
        <h2 class="text-center text-white">Dreamsheep Premium</h2>
        <p class="text-center text-white">4,99€ /mois</p>
      </div>
      <div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Pas de publicités</p>
        </div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Avatars exclusifs</p>
        </div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Bannière Premium offerte</p>
        </div>
      </div>
      <div class="flex justify-center pt-3">
        <Button text="Découvrir" variant="yellow"/>
      </div>
    </div>

    <div class="py-3 bg-DarkPurple border border-yellow-200 rounded-lg mx-5 my-6">
      <div class=" pt-2">
        <h2 class="text-center text-white">Dreamsheep Premium</h2>
        <p class="text-center text-white">11,99€ /3mois</p>
      </div>
      <div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Pas de publicités</p>
        </div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Avatars exclusifs</p>
        </div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Bannière Premium offerte</p>
        </div>
      </div>
      <div class="flex justify-center pt-3">
        <Button text="Découvrir" variant="yellow"/>
      </div>
    </div>
    <div class="py-3 bg-DarkPurple border-2 border-yellow-200 rounded-lg mx-5 my-6">
      <div class=" pt-2">
        <h2 class="text-center text-white">Dreamsheep Premium</h2>
        <p class="text-center text-white">54,99€ /an</p>
      </div>
      <div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Pas de publicités</p>
        </div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Avatars exclusifs</p>
        </div>
        <div class="flex justify-start gap-2 px-3 pt-3">
          <OkIcon/>
          <p class="text-white">Bannière Premium offerte</p>
        </div>
      </div>
      <div class="flex justify-center pt-3">
        <Button text="Découvrir" variant="yellow"/>
      </div>
    </div>
    </main>
</template>