<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pb } from "@/assets/backend"; // Assurez-vous que cette importation correspond à votre configuration
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import TagIcon from "@/components/icons/TagIcon.vue";
const route = useRoute();
const dreamDetails = ref(null);
import { useRouter } from "vue-router";
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

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
}

onMounted(fetchDreamDetails);
const goToEditPage = () => {
  // Remplacez 'editdream' par le nom de la route de l'édition et assurez-vous d'avoir l'ID du rêve si nécessaire
  router.push({ name: 'editdream', params: { id: route.params.id }});
};
</script>

<template>
  <div class="m-2">
    <BackArrowIconsvg @click="goBack" class="cursor-pointer" />
  </div>
  
  <div class="mx-4 text-white">
    <div v-if="dreamDetails">
      <h2 class="text-center mb-3">{{ dreamDetails.title }}</h2>

      <div class="flex justify-end mr-3 mb-6">
        <p class="text-xs">{{ formatDate(dreamDetails.date) }}</p>
      </div>
      <div class="bg-DarkPurple px-3 py-5 rounded-md">
      <div class="pb-2  overflow-hidden">
        <h2>Description du rêve :</h2>
        <p>{{ dreamDetails.description }}</p>
      </div>
      <div class="flex flex-col mt-3 ">
        <h2>Type du rêve :</h2>
        <p>{{ dreamDetails.type }}</p>
      </div>
      <div class="flex flex-col items-start mt-3  ">
        <h2 class="mb-2">Tags :</h2>
    <div class="bg-LightPurple rounded-lg flex items-start px-2 py-1 space-x-1">
        <TagIcon />
        <p class="text-black text-xs">{{ dreamDetails.tags }}</p>
    </div>
    </div>
    <div class="flex flex-col mt-3 ">
        <h2>Récurrent :</h2>
        <p>{{ dreamDetails.recurrent }}</p>
      </div>
      <div class="flex flex-col mt-3 ">
        <h2>Favoris :</h2>
        <p>{{ dreamDetails.favoris }}</p>
      </div>
      <div class="flex flex-col">
        <h2>Partagé à la communauté</h2>
        <p>{{ dreamDetails.partage }}</p>
      </div>
    </div>
    <div class="flex justify-center py-5 ">
        <button class="text-black bg-yellow-200 rounded-md py-2 px-3" @click="goToEditPage">Modifier</button>
    </div>
      
    </div>
    <div v-else>
      <p>Chargement des détails du rêve...</p>
    </div>
  </div>
</template>
