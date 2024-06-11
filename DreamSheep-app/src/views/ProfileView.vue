<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { pb } from '@/assets/backend';
import CardHome from '@/components/CardHome.vue';

const userId = pb.authStore.model?.id;
const likedDreams = ref([]);
const isLoading = ref(true);
const errorMessage = ref("");

const fetchLikedDreams = async () => {
  try {
    if (!userId) {
      throw new Error("Utilisateur non authentifié");
    }
    likedDreams.value = await getUserLikedDreams(userId);
  } catch (error) {
    console.error("Failed to fetch liked dreams:", error);
    errorMessage.value = "Erreur lors de la récupération des rêves likés.";
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchLikedDreams);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-white">Rêves Likés</h1>
    <div v-if="isLoading">
      <p class="text-center text-white">Chargement...</p>
    </div>
    <div v-else-if="likedDreams.length > 0">
      <div v-for="dream in likedDreams" :key="dream.id">
        <CardHome
          :id="dream.id"
          :title="dream.title"
          :description="dream.description"
          :tags="dream.tags"
          :date="dream.date"
          :username="dream.expand.userId.username"
        />
      </div>
    </div>
    <div v-else>
      <p class="text-white text-center mt-20">Vous n'avez pas encore liké de rêve.</p>
    </div>
    <div v-if="errorMessage">
      <p class="text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>
