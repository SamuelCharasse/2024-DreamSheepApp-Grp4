<script setup lang="ts">
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import FavouriteIcon from "@/components/icons/FavouriteIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import SquareIcon from "@/components/icons/SquareIcon.vue";
import Button from "@/components/Button.vue";

import { useRouter } from 'vue-router';
import { ref } from 'vue';
</script>
<template>
  <div class="m-4 ">
    <div class="flex justify justify-between">
      <BackArrowIconsvg />
      <div class="flex gap-2">
        <FavouriteIcon class="text-white" />
        <p class="text-white text-sm">Ajouter aux favoris</p>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <h3 class="text-white text-2xl">Titre</h3>
        <div class="p-2">
          <p class="text-black bg-white p-3 overflow-auto">
            Donnez un titre à votre rêve
          </p>
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5 pb-2">
      <div class="m-2">
        <h3 class="text-white text-2xl pb-2">Contenu</h3>
        <div class="px-2">
          <label for="content" class="text-black bg-white justify-satrt py-2 flex pl-3">Décrivez votre rêve</label>
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <h3 class="text-white text-2xl">Type</h3>
        <div class="p-2 flex justify-center gap-3  ">
            <Button variant="purple" text="Rêve" size="large"/>
          <Button variant="purple" text="Cauchemar" size="medium"/>
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="pb-2 m-2">
        <h3 class="text-white text-2xl">Date</h3>
        <div class="flex bg-white m-2 p-2 justify-between">
          <p class="text-black overflow-auto">Cette nuit</p>
          <DownArrowIcon />
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <h3 class="text-white text-2xl">Récurrent</h3>
        <div class="p-2 flex justify-center gap-3 ">
          <Button variant="purple" text="Oui" size="large"/>
          <Button variant="purple" text="Non" size="large"/>
        </div>
        
      </div>
    </div>
    <div class="flex justify-center py-2">
    <Button  variant="yellow" text="Enregistrer" size="small"/>
</div>
    <div class="flex gap-3 justify-center">
      <SquareIcon />
      <p class="text-white text-xs pt-2">Partager ce rêve à la communauté</p>
    </div>
  </div>

 
</template>
