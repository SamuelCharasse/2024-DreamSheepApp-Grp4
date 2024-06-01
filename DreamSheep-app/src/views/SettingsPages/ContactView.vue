<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BackArrowIconsvg from '@/components/icons/BackArrowIconsvg.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <form action="" class="settings mb-20 mx-3 py-5 overflow-auto">
    <div class="flex justify-center items-center pb-5">
      <RouterLink to="/settings"><BackArrowIconsvg/></RouterLink> 
      <h2 class="text-white text-sm font-norma px-7 justify-center">
        Contact
      </h2>
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Prénom</p>
        <input type="text" required placeholder="Votre prénom" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Nom</p>
        <input type="text" required placeholder="Votre nom" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Email</p>
        <input type="email" required placeholder="Votre adresse mail" class="bg-white text-black rounded-md p-2.5 w-full" />
    </div>

    <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Message</p>
        <textarea required placeholder="Votre message" class="bg-white text-black rounded-md p-2.5 w-full" rows="4" maxlength="500"></textarea>
    </div>

    <div class="pt-5">
      <Button class="w-full justify-center font-bold" text="Envoyer"/>
    </div>

  </form>
</template>