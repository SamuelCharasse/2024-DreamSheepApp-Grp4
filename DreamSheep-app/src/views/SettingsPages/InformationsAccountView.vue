<script setup lang="ts">
import { RouterLink } from "vue-router";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import ExitIcon from "@/components/icons/ExitIcon.vue";
import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";
import Button from "@/components/Button.vue";
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
        <p class="pb-2.5 text-slate-50">Prénom</p>
        <input type="text" placeholder="Votre prénom" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Nom</p>
        <input type="text" placeholder="Votre nom" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Email</p>
        <input type="email" placeholder="Votre adresse mail" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Téléphone</p>
        <input type="text" placeholder="Votre numéro de téléphone" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="pt-5">
        <Button class="w-full justify-center font-bold" text="Sauvegarder les changements" url="/"></Button>
    </div>

  </main>
</template>
