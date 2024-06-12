<script setup>
import { ref, onMounted, watch } from "vue";
import CardHome from "@/components/CardHome.vue";
import { fetchSharedDreams, fetchSharedDreamsSorted, fetchSharedDreamsByTag, fetchSharedDreamsByTagAndDate } from "@/assets/backend";
import SearchBar from "@/components/SearchBar.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";

const dreams = ref([]);
const filteredDreams = ref([]);
const searchQuery = ref("");
const sortBy = ref(localStorage.getItem("sortBy") || "");
const selectedTag = ref(localStorage.getItem("selectedTag") || "");
const tags = ["étrange", "drôle", "peur", "amour", "horreur"]; // Exemple de tags
const showFilters = ref(false);

// Chargement des rêves au montage du composant
const loadDreams = async () => {
  try {
    let result;
    if (sortBy.value && selectedTag.value) {
      result = await fetchSharedDreamsByTagAndDate(selectedTag.value, sortBy.value);
    } else if (sortBy.value) {
      result = await fetchSharedDreamsSorted(sortBy.value);
    } else if (selectedTag.value) {
      result = await fetchSharedDreamsByTag(selectedTag.value);
    } else {
      result = await fetchSharedDreams();
    }
    dreams.value = result;
    filteredDreams.value = result; // Initialise filteredDreams avec tous les rêves au départ
  } catch (error) {
    console.error("Error loading dreams:", error);
  }
};

onMounted(loadDreams);

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

// Sauvegarder les filtres dans le localStorage
const saveFilters = () => {
  localStorage.setItem("sortBy", sortBy.value);
  localStorage.setItem("selectedTag", selectedTag.value);
  showFilters.value = false; // Masquer les filtres après l'enregistrement
  loadDreams(); // Recharger les rêves avec les nouveaux filtres
};

// Réinitialiser les filtres
const resetFilters = () => {
  sortBy.value = "";
  selectedTag.value = "";
  localStorage.removeItem("sortBy");
  localStorage.removeItem("selectedTag");
  showFilters.value = false;
  loadDreams(); // Recharger les rêves sans aucun filtre
};

watch([sortBy, selectedTag], loadDreams);
</script>

<template>
  <div class="container mx-auto p-4 mb-32">
    <div class="flex justify-between gap-3 items-center">
      <SearchBar @search="filterDreams" />
      <div class="flex items-center cursor-pointer border p-1.5 rounded-md" @click="showFilters = !showFilters">
        <p class="text-white">Filtrer</p>
        <FilterIcon />
      </div>
    </div>
    <div v-if="showFilters" class="mt-4">
      <div class="flex gap-4">
        <div>
          <label for="sort" class="text-white">Trier par date :</label>
          <select id="sort" v-model="sortBy" class="p-2 border rounded">
            <option value="">Aucun</option>
            <option value="newest">Du plus récent au plus ancien</option>
            <option value="oldest">Du plus ancien au plus récent</option>
          </select>
        </div>
        <div>
          <label for="tag" class="text-white">Filtrer par tag :</label>
          <select id="tag" v-model="selectedTag" class="p-2 border rounded">
            <option value="">Aucun</option>
            <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
          </select>
        </div>
      </div>
      <div class="flex gap-4 mt-4">
        <button @click="saveFilters" class="bg-blue-500 text-white p-1 rounded">Enregistrer</button>
        <button @click="resetFilters" class="bg-red-500 text-white p-1 rounded">Réinitialiser</button>
      </div>
    </div>
    <div v-if="filteredDreams.length > 0">
      <CardHome
        v-for="dream in filteredDreams"
        :key="dream.id"
        :id="dream.id"
        :title="dream.title"
        :description="dream.description"
        :tags="dream.tags"
        :user="dream.user"
        :date="dream.created"
        :likes="dream.likes"
        :commentaires="dream.commentaires"
      />
    </div>
    <div v-else>
      <p>Aucun rêve partagé disponible.</p>
    </div>
  </div>
</template>
