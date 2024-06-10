<script setup>
import { ref, onMounted } from "vue";
import { pb, getDreamsWithUsernames } from "@/assets/backend";
import CardHome from "@/components/CardHome.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchBar from "@/components/SearchBar.vue";

const dreams = ref([]);
const filteredDreams = ref([]);
const searchQuery = ref('');

// Fonction pour charger les rêves partagés
const fetchSharedDreams = async () => {
  try {
    dreams.value = await getDreamsWithUsernames();
  } catch (error) {
    console.error("Failed to fetch shared dreams:", error);
  }
};

onMounted(fetchSharedDreams);

// Fonction pour filtrer les rêves en fonction de la recherche
const filterDreams = (query) => {
  searchQuery.value = query;
  if (!query) {
    filteredDreams.value = dreams.value;
  } else {
    const lowerCaseQuery = query.toLowerCase();
    filteredDreams.value = dreams.value.filter(dream =>
      dream.title.toLowerCase().includes(lowerCaseQuery) ||
      dream.description.toLowerCase().includes(lowerCaseQuery) 
    );
  }
};

onMounted(fetchSharedDreams);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Rêves Partagés</h1>
    <div v-if="dreams.length > 0">
      <div v-for="dream in dreams" :key="dream.id">
        <CardHome v-bind="dream" />
      </div>
    </div>
    <div v-else>
      <p>Aucun rêve partagé disponible.</p>
    </div>
  </div>
</template>