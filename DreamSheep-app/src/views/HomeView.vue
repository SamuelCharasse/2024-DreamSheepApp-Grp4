<script setup>
import { ref, onMounted } from "vue";
import { pb } from "@/assets/backend";
import CardHome from "@/components/CardHome.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchBar from "@/components/SearchBar.vue";
import Report from "@/components/Report.vue";

const dreams = ref([]);
const filteredDreams = ref([]);
const searchQuery = ref('');

// Fonction pour charger les rêves partagés
const fetchSharedDreams = async () => {
  try {
    const response = await pb.collection("dreams").getFullList({
      filter: "partage === true",
      expand: "userId",
      filter: 'partage = true',
    });
    dreams.value = response.map((dream) => ({
      ...dream,
      username: dream.userId ? dream.userId.username : "Utilisateur inconnu",
    }));

    const dreamsWithUsernames = await Promise.all(
      response.map(async (dream) => {
        let username = 'Dreamer anonyme';
        if (dream.userId) {
          try {
            const user = await pb.collection("users").getOne(dream.userId);
            username = user.username;
          } catch (userError) {
            console.error(`Failed to fetch user details for userId ${dream.userId}:`, userError);
          }
        }
        return {
          ...dream,
          username
        };
      })
    );

    dreams.value = dreamsWithUsernames;
    filteredDreams.value = dreamsWithUsernames;
  } catch (error) {
    console.error("Failed to fetch shared dreams:", error);
  }
};

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
    <SearchBar @search="filterDreams" />
    <div v-if="filteredDreams.length > 0">
      <div class="mx-2 flex justify-between items-center">
        <div class="flex justify-center items-center">
          <p class="text-white flex-shrink-0 flex-grow-0 text-xs relative">Trier par</p>
          <FilterIcon />
        </div>
      </div>
      <div>
        <CardHome
          v-for="dream in filteredDreams"
          :key="dream.id"
          :id="dream.id"
          :title="dream.title"
          :description="dream.description"
          :tags="dream.tags"
          :date="dream.date"
          :username="dream.username"
        />
      </div>
    </div>
    <div v-else>
      <p>Aucun rêve partagé disponible.</p>
  <div class="pb-32">
    <CardHome/>
    <div v-for="dream in dreams" :key="dream.id">
      <CardHome
        :id="dream.id"
        :title="dream.title"
        :description="dream.description"
        :tags="dream.tags"
        :date="formatDate(dream.date)"
        :username="dream.username"
      />
    </div>
  </div>
</template>