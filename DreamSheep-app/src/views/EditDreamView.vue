<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchDreamDetails, updateDream } from '@/assets/backend';

const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref('');
const dreamDetails = ref({
  title: '',
  description: '',
  date: '',
  recurrent: false,
  type: '',
  tags: [],
  partage: false
});

// Charger les détails du rêve
onMounted(async () => {
  isLoading.value = true;
  try {
    const dreamId = route.params.id;
    const details = await fetchDreamDetails(dreamId);
    dreamDetails.value = { ...details }; // Assume details is directly usable
  } catch (error) {
    errorMessage.value = `Erreur lors du chargement: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
});

// Fonction pour sauvegarder les modifications
const handleUpdateDream = async () => {
  isLoading.value = true;
  try {
    await updateDream(route.params.id, dreamDetails.value);
    router.push('/diary'); // ou une autre route appropriée
  } catch (error) {
    errorMessage.value = `Erreur lors de la mise à jour: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <h1>Modifier le Rêve</h1>
    <form @submit.prevent="handleUpdateDream">
      <input v-model="dreamDetails.title" placeholder="Titre du rêve" />
      <textarea v-model="dreamDetails.description" placeholder="Description du rêve"></textarea>
      <!-- Autres champs ici -->
      <button :disabled="isLoading">Sauvegarder les modifications</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
