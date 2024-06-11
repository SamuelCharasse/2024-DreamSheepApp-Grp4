<script setup>
import { ref, onMounted } from "vue";
import CardHome from "@/components/CardHome.vue";
import { fetchSharedDreams } from "@/assets/backend";
import SearchBar from "@/components/SearchBar.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
const dreams = ref([]);
const filteredDreams = ref([]);
const searchQuery = ref("");

// Chargement des rêves au montage du composant
onMounted(async () => {
  try {
    const result = await fetchSharedDreams();
    dreams.value = result;
    filteredDreams.value = result; // Initialise filteredDreams avec tous les rêves au départ
  } catch (error) {
    console.error("Error loading dreams:", error);
  }
});

// Fonction pour filtrer les rêves basée sur la requête de recherche
const filterDreams = (query) => {
  searchQuery.value = query;
  if (!query) {
    filteredDreams.value = dreams.value;
  } else {
    const lowerCaseQuery = query.toLowerCase();
    filteredDreams.value = dreams.value.filter(
      (dream) =>
        dream.title.toLowerCase().includes(lowerCaseQuery) ||
        dream.description.toLowerCase().includes(lowerCaseQuery)
    );
  }
};
</script>

<template>
  <div class="container mx-auto p-4 mb-32">
    <div>
      <SearchBar @search="filterDreams" />
      <div class="flex justify-end">
        <p class="text-white">Filtrer</p>
        <FilterIcon />
      </div>
    </div>
    <div v-if="filteredDreams.length > 0">
      <div v-for="dream in filteredDreams" :key="dream.id">
        <CardHome v-bind="dream" />
      </div>
    </div>
    <div v-else>
      <p>Aucun rêve partagé disponible.</p>
    </div>
  </div>
</template>
