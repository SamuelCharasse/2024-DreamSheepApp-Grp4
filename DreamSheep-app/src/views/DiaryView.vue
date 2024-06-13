<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import CardDiary from "@/components/CardDiary.vue";
import { pb } from "@/assets/backend";
import type { DreamsResponse } from "@/pocketbase-types";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";
import { format, subDays, subMonths, isWithinInterval } from "date-fns";

const dreams = ref<DreamsResponse[]>([]);
const isLoading = ref(true);
const errorMessage = ref("");
const now = new Date();

const fetchDreams = async () => {
  try {
    const userId = pb.authStore.model?.id;
    if (!userId) {
      throw new Error("Utilisateur non authentifié");
    }

    const response = await pb.collection("dreams").getFullList({
      filter: `userId="${userId}"`,
      sort: '-date', // Trie par date descendante
    });

    dreams.value = response;
  } catch (error) {
    console.error("Failed to fetch dreams:", error);
    errorMessage.value = "Erreur lors de la récupération des rêves.";
  } finally {
    isLoading.value = false;
  }
};

// Calculer les périodes
const last7Days = computed(() => subDays(now, 7));
const lastMonth = computed(() => subMonths(now, 1));

// Filtrer les rêves par période
const dreamsLast7Days = computed(() => dreams.value.filter(dream => isWithinInterval(new Date(dream.date), { start: last7Days.value, end: now })));
const dreamsLastMonth = computed(() => dreams.value.filter(dream => isWithinInterval(new Date(dream.date), { start: lastMonth.value, end: now }) && new Date(dream.date) < last7Days.value));
const olderDreams = computed(() => dreams.value.filter(dream => new Date(dream.date) < lastMonth.value));

// Appeler fetchDreams au montage du composant
onMounted(fetchDreams);
</script>

<template>
  <div class="pb-32">
    <div v-if="isLoading">
      <p class="text-center text-white">Chargement...</p>
    </div>
    <div v-else>
      <template v-if="dreamsLast7Days.length > 0">
        <div class="mx-2 flex justify-between items-center mt-4">
          <p class="text-white text-xs">Les 7 derniers jours</p>
        </div>
        <div v-for="dream in dreamsLast7Days" :key="dream.id" >
          <CardDiary v-bind="dream" />
        </div>
      </template>

      <template v-if="dreamsLastMonth.length > 0">
        <div class="mx-2 flex justify-between items-center mt-4">
          <p class="text-white text-xs">Le mois dernier</p>
        </div>
        <div v-for="dream in dreamsLastMonth" :key="dream.id" >
          <CardDiary v-bind="dream" />
        </div>
      </template>

      <template v-if="olderDreams.length > 0">
        <div class="mx-2 flex justify-between items-center mt-4">
          <p class="text-white text-xs">Plus anciens</p>
        </div>
        <div v-for="dream in olderDreams" :key="dream.id">
          <CardDiary v-bind="dream" />
        </div>
      </template>

      <div v-else-if="dreams.length === 0">
        <p class="text-white text-center mt-20">Vous n'avez pas de rêve enregistrés</p>
        <div class="flex justify-center pt-6">
          <CloudIcon class="m-2" />
          <MoonIcon class="m-12" />
        </div>
      </div>
    </div>
    <div v-if="errorMessage">
      <p class="text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>
