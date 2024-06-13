<script setup lang="ts">
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { fetchDreamDetails, updateDream } from "@/assets/backend";

const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref("");
const dreamDetails = ref({
  title: "",
  description: "",
  date: "",
  recurrent: false,
  type: "",
  tags: "",
  partage: false,
});

function setPartage(value) {
  dreamDetails.value.partage = value;
}
function setRecurrent(value) {
  dreamDetails.value.recurrent = value;
}
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
    router.push("/diary"); // ou une autre route appropriée
  } catch (error) {
    errorMessage.value = `Erreur lors de la mise à jour: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="mx-3 mb-32">
    <div class="flex justify-center text-center text-white gap-20">
      <h1 class="text-center ">Modifier le Rêve</h1>
    </div>
    <form @submit.prevent="handleUpdateDream">
      <div class="flex flex-col mt-6">
        <h2 class="text-white">Titre du rêve</h2>
        <input
          v-model="dreamDetails.title"
          placeholder="Titre du rêve"
          class="rounded-sm mb-3 p-1 bg-slate-200"
        />
      </div>
      <div class="flex flex-col mt-6">
        <h2 class="text-white">Description du rêve</h2>
        <textarea
          v-model="dreamDetails.description"
          placeholder="Description du rêve"
          class="rounded-sm mb-3 p-1 bg-slate-200 h-auto"
        ></textarea>
      </div>
      <div class="flex flex-col mt-6">
        <h2 class="text-white">Date du rêve</h2>
        <input
          type="date"
          v-model="dreamDetails.date"
          placeholder="Date du rêve"
          class="rounded-sm mb-3 p-2 bg-slate-200"
        />
      </div>
      <div class="flex flex-col mt-6">
        <h2 class="text-white">Type de rêve</h2>
        <select
          v-model="dreamDetails.type"
          class="rounded-sm mb-3 p-2 bg-slate-200"
        >
          <option value="Rêve">Rêve</option>
          <option value="Cauchemar">Cauchemar</option>
        </select>
      </div>
      <div class="flex flex-col mt-6">
        <h2 class="text-white">Tags</h2>
        <select
          v-model="dreamDetails.tags"
          class="rounded-sm mb-3 p-2 bg-slate-200"
        >
          <option value="humour">humour</option>
          <option value="amour">Amour</option>
          <option value="drôle">Drôle</option>
          <option value="étrange">Etrange</option>
          <option value="joyeux">Joyeux</option>
          <option value="peur">Peur</option>
          <option value="horreur">Horreur</option>
        </select>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="text-white">Rêve récurrent</h2>
        <div class="flex space-x-2 justify-center mb-3">
      <button
        :class="{'bg-blue-500 text-white': dreamDetails.recurrent, 'bg-gray-200 text-gray-800': !dreamDetails.recurrent}"
        class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        @click.prevent="setRecurrent(true)"><p>Oui</p>
       
      </button>
      <button
        :class="{'bg-red-500 text-white': !dreamDetails.recurrent, 'bg-gray-200 text-gray-800': dreamDetails.recurrent}"
        class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
        @click.prevent="setRecurrent(false)">
        Non
      </button>
    </div>
      </div>
      <div class="flex gap-3 flex-col">
        <h2 class="text-white">Partager</h2>
        <div class="flex space-x-2 justify-center">
    <button
      :class="{'bg-blue-500 text-white': dreamDetails.partage, 'bg-gray-200 text-gray-800': !dreamDetails.partage}"
      class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
      @click.prevent="setPartage(true)">
      Oui
    </button>
    <button
      :class="{'bg-red-500 text-white': !dreamDetails.partage, 'bg-gray-200 text-gray-800': dreamDetails.partage}"
      class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
      @click.prevent="setPartage(false)">
      Non
    </button>
  </div>
      </div>
      <div class="flex justify-center mt-3">
      <button :disabled="isLoading" class="text-black rounded-md bg-yellow-200 p-2 mt-10">
        Sauvegarder 
      </button>
    </div>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
