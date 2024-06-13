<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pb } from "@/assets/backend";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import TagIcon from "@/components/icons/TagIcon.vue";
const route = useRoute();
const dreamDetails = ref(null);
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.back();
}

async function fetchDreamDetails() {
  const id = route.params.id;
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
  router.push({ name: 'editdream', params: { id: route.params.id }});
};
</script>

<template>
  <div class="mb-32">
    <div class="mx-4 text-white bg-DarkPurple bg-opacity-40 rounded-md">
      <div v-if="dreamDetails">
        <h2 class="text-center mb-3 mt-4 pt-3">{{ dreamDetails.title }}</h2>

        <div class="flex justify-end mr-3 mb-1">
          <p class="text-xs">{{ formatDate(dreamDetails.date) }}</p>
        </div>
        <div class="px-3 py-5 rounded-md">
          <div class="pb-2 overflow-hidden">
            <p class="text-base">{{ dreamDetails.description }}</p>
          </div>
          <div class="flex flex-col mt-3">
            <h2>Type du rêve :</h2>
            <p>{{ dreamDetails.type }}</p>
          </div>
          <div class="flex flex-col items-start mt-3 pb-4">
            <h2 class="mb-2">Tags :</h2>
            <div class="bg-LightPurple rounded-lg flex items-start px-2 py-1 space-x-1">
              <TagIcon />
              <p class="text-black text-xs">{{ dreamDetails.tags }}</p>
            </div>
          </div>
          <div class="flex flex-col mt-3 pb-4">
            <h2>Récurrent :</h2>
            <div class="flex space-x-2 justify-center items-center mt-2">
              <button
                :class="{'bg-blue-500 text-white': dreamDetails.recurrent, 'bg-DarkPurple text-white': !dreamDetails.recurrent}"
                class="px-2 text-lg rounded"
                disabled
              >
                Oui
              </button>
              <button
                :class="{'bg-DarkPurple text-white': dreamDetails.recurrent, 'bg-red-500 text-white': !dreamDetails.recurrent}"
                class="px-2 text-lg rounded"
                disabled
              >
                Non
              </button>
            </div>
          </div>
          <div class="flex flex-col  mt-3 pb-4">
            <h2 class="pb-2">Favoris :</h2>
            <div class="flex space-x-2 justify-center items-center mt-2">
              <button
                :class="{'bg-blue-500 text-white': dreamDetails.favoris, 'bg-DarkPurple text-white': !dreamDetails.favoris}"
                class="px-2 text-lg rounded"
                disabled
              >
                Oui
              </button>
              <button
                :class="{'bg-DarkPurple text-white': dreamDetails.favoris, 'bg-red-500 text-white': !dreamDetails.favoris}"
                class="px-2 text-lg rounded"
                disabled
              >
                Non
              </button>
            </div>
          </div>
          <div class="flex flex-col  mt-3 pb-4">
            <h2>Partagé :</h2>
            <div class="flex space-x-2 justify-center items-center mt-2">
              <button
                :class="{'bg-blue-500 text-white': dreamDetails.partage, 'bg-DarkPurple text-white': !dreamDetails.partage}"
                class="px-2 text-lg rounded"
                disabled
              >
                Oui
              </button>
              <button
                :class="{'bg-DarkPurple text-white': dreamDetails.partage, 'bg-red-500 text-white': !dreamDetails.partage}"
                class="px-2 text-lg rounded"
                disabled
              >
                Non
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center py-5">
          <button class="text-black bg-yellow-200 rounded-md py-2 px-3" @click="goToEditPage">Modifier</button>
        </div>
      </div>
      <div v-else>
        <p>Chargement des détails du rêve...</p>
      </div>
    </div>
  </div>
</template>
