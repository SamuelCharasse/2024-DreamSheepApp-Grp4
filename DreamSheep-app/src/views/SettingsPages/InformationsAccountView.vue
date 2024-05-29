<script setup lang="ts">
import { RouterLink } from "vue-router";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import ExitIcon from "@/components/icons/ExitIcon.vue";
import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";
</script>

<template>
  <main class="settings mx-3 py-5 overflow-auto">
    <div class="flex justify-center items-center pb-5">
      <RouterLink to="/settings"><BackArrowIconsvg class="flex-grow-0" /></RouterLink> 
      <h2 class="text-white text-sm font-norma px-7 justify-center">
        Informations du compte
      </h2>
    </div>

    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5">Prénom</p>
      <p class="bg-white text-black rounded-md p-2.5">
        Prénom de l'utilisateur
      </p>
    </div>

    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5">Nom</p>
      <p class="bg-white text-black rounded-md p-2.5">Nom de l'utilisateur</p>
    </div>

    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5">Email</p>
      <p class="bg-white text-black rounded-md p-2.5">Email de l'utilisateur</p>
    </div>

    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5">Téléphone</p>
      <p class="bg-white text-black rounded-md p-2.5">
        Num tel de l'utilisateur
      </p>
    </div>

    <div class="pt-5">
      <div class="flex px-2.5 pb-2.5 justify-between">
        <div class="flex-grow flex items-center">
          <ExitIcon class="items-start" />
          <h3 class="text-left ml-2">Se déconnecter</h3>
        </div>
        <RightArrowIcon class="items-end" />
      </div>
      <div class="px-2.5 flex-grow">
        <p class="ml-8">
          Déconnectez-vous, vos données et vos informations seront conservées.
        </p>
      </div>
    </div>

  </main>
</template>
