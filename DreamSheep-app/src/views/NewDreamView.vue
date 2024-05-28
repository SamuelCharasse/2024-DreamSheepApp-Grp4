<script setup lang="ts">
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import StarIcon_1 from "@/components/icons/StarIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import SquareIcon from "@/components/icons/SquareIcon.vue";
import Button from "@/components/Button.vue";
</script>
<template>
  <div class="m-4 ">
    <div class="flex justify justify-between">
      <BackArrowIconsvg />
      <div class="flex gap-2">
        <StarIcon_1 class="text-white" />
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

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <h3 class="text-white text-2xl">Contenu</h3>
        <div class="p-2">
          <p class="text-black bg-white p-3 overflow-auto">
            Décrivez votre rêve
          </p>
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
    <button class="bg-yellow-200 text-black">Ajouter</button>
    <div class="flex gap-3 justify-center">
      <SquareIcon />
      <p class="text-white text-xs pt-2">Partager ce rêve à la communauté</p>
    </div>
  </div>

 
</template>
