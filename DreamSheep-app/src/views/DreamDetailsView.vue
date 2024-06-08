<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pb } from "@/assets/backend"; // Assurez-vous que cette importation correspond à votre configuration
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
const route = useRoute();
const dreamDetails = ref(null);
import { useRouter } from 'vue-router';
 // Assurez-vous que le chemin est correct

const router = useRouter();

function goBack() {
  router.back(); // Navigue à la page précédente dans l'historique du navigateur
}

// Fonction pour charger les détails du rêve
async function fetchDreamDetails() {
  const id = route.params.id; // Récupération de l'ID du rêve depuis l'URL
  try {
    const response = await pb.collection("dreams").getOne(id);
    dreamDetails.value = response;
  } catch (error) {
    console.error("Failed to fetch dream details:", error);
  }
}

onMounted(fetchDreamDetails);
</script>

<template>
    <div class="m-2">
        <BackArrowIconsvg @click="goBack" class="cursor-pointer"/>
    </div>
  <div class="m-3 text-white">
    <div v-if="dreamDetails">
      <div class="flex pb-2">
        <h2>Titre :</h2>
        <p class="text-center">{{ dreamDetails.title }}</p>
      </div>
      <div class="pb-2">
        <h2>Description du rêve :</h2>
        <p>{{ dreamDetails.description }}</p>
      </div>
      <div class="flex">
        <h2>Type du rêve :</h2>
        <p>{{ dreamDetails.type }}</p>
      </div>
    </div>
    <div v-else>
      <p>Chargement des détails du rêve...</p>
    </div>
  </div>
</template>
