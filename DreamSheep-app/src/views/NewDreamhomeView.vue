<script setup lang="ts">
import { ref } from "vue";
import { createSharedDream } from "@/assets/backend";
import { useRouter } from "vue-router";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";

const router = useRouter();
const title = ref("");
const description = ref("");
const date = ref("");
const recurrent = ref(false);
const type = ref(""); // 'cauchemar' ou 'reve'
const tags = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const handleCreateDream = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    const newDream = await createSharedDream({
      title: title.value,
      description: description.value,
      date: date.value,
      recurrent: recurrent.value,
      type: type.value,
      tags: tags.value,
    });
    router.push("/home"); // Redirigez vers la page d'accueil ou une autre page appropriée après la création du rêve
  } catch (error) {
    errorMessage.value = "Erreur lors de la création du rêve: " + (error as Error).message;
  } finally {
    isLoading.value = false;
  }
};
function goBack() {
  router.back(); // Navigue à la page précédente dans l'historique du navigateur
} 
</script>

<template>
  <div class="pb-32">
    <form method="post" @submit.prevent="handleCreateDream">
      <div class="m-3">
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="title">Titre du rêve</label>
          <input
            class="text-black rounded-md p-2 border border-black border-1"
            type="text"
            id="title"
            v-model="title"
            required
          />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="description">Contenu du rêve</label>
          <textarea
            class="text-black rounded-md p-2 border border-black border-1 pb-4"
            id="description"
            v-model="description"
            required
          />
        </div>
        <div class="pb-4 flex flex-col pt-4">
          <label class="text-white text-base font-medium pb-1" for="date">Date du rêve</label>
          <input
            class="text-black rounded-md p-2 border border-black border-1"
            type="date"
            id="date"
            v-model="date"
            required
          />
        </div>
        <div class="pb-4 flex flex-col">
          <label for="tags" class="text-white font-bold">Tags :</label>
          <select class="text-black p-2 rounded-md" id="tags" v-model="tags" required>
            <option value="humour">humour</option>
            <option value="amour">Amour</option>
            <option value="drôle">Drôle</option>
            <option value="étrange">Etrange</option>
            <option value="joyeux">Joyeux</option>
            <option value="peur">Peur</option>
            <option value="horreur">Horreur</option>
          </select>
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium " for="type">Type</label>
          <select class="text-black p-2 rounded-md" id="type" v-model="type" required>
            <option value="Rêve">Rêve</option>
            <option value="Cauchemar">Cauchemar</option>
          </select>
        </div>
        <div class="flex space-x-2 flex-col mb-3">
          <label for="recurrent" class="text-white">Rêve récurrent :</label>
          <div class="flex space-x-2 justify-center mb-3">
            <button
              :class="{'bg-blue-500 text-white': recurrent.value, 'bg-gray-200 text-gray-800': !recurrent.value}"
              class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              @click.prevent="recurrent.value = true"
            >
              <p>Oui</p>
            </button>
            <button
              :class="{'bg-red-500 text-white': !recurrent.value, 'bg-gray-200 text-gray-800': recurrent.value}"
              class="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
              @click.prevent="recurrent.value = false"
            >
              <p>Non</p>
            </button>
          </div>
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div class="flex justify-center py-4">
          <button
            class="text-black bg-yellow-200 rounded-md px-3 py-2"
            type="submit"
            :disabled="isLoading"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
