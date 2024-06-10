<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardDiary from "@/components/CardDiary.vue";
import { pb } from "@/assets/backend";
import type { DreamsResponse } from "@/pocketbase-types";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";
import {props} from 'vue'
const dreams = ref([]);
const isLoading = ref(true);
const errorMessage = ref("");
const fetchDreams = async () => {
  try {
    const userId = pb.authStore.model?.id;
    if (!userId) {
      throw new Error("Utilisateur non authentifié");
    }

    const response = await pb.collection("dreams").getFullList({
      filter: `userId="${userId}"`,
    });

    dreams.value = response;
  } catch (error) {
    console.error("Failed to fetch dreams:", error);
    errorMessage.value = "Erreur lors de la récupération des rêves.";
  } finally {
    isLoading.value = false;
  }
};

// Appeler fetchDreams au montage du composant
onMounted(fetchDreams);
</script>
<template>
  <div class="pb-32">
  <div class="mx-2 flex justify-between items-center">
    <p class="text-white text-xs">Les 7 derniers jours</p>
    <div class="flex justify-center items-center">
      <p class="text-white flex-shrink-0 flex-grow-0 text-xs relative">Trier par</p>
      <FilterIcon />
    </div>
  </div>
  <div v-if="isLoading">
    <p class="text-center text-white">Chargement...</p>
  </div>
  <div v-else-if="dreams.length > 0">
    <router-link v-for="dream in dreams" :key="dream.id" :to="`/dreams/${dream.id}`">
      <CardDiary v-bind="dream" />
    </router-link>
  </div>
  <div v-else>
    <p class="text-white text-center mt-20">Vous n'avez pas de rêve enregistrés</p>
    <div class="flex justify-center pt-6">
      <CloudIcon class="m-2" />
      <MoonIcon class="m-12" />
    </div>
  </div>
  <div v-if="errorMessage">
    <p class="text-red-500">{{ errorMessage }}</p>
  </div>
</div>
</template>

