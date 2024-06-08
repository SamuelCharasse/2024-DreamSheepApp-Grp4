<script setup lang="ts">
import { ref } from "vue";
import FavouriteIcon from "@/components/icons/FavouriteIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import SquareIcon from "@/components/icons/SquareIcon.vue";
import Button from "@/components/Button.vue";
import { createDream } from "@/assets/backend";
import { useRouter } from "vue-router";

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
    const newDream = await createDream({
      title: title.value,
      description: description.value,
      date: date.value,
      recurrent: recurrent.value,
      type: type.value,
      tags: tags.value,
    });
    router.push("/diary");
  } catch (error) {
    errorMessage.value =
      "Erreur lors de la création du rêve: " + (error as Error).message;
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <form method="post" @submit.prevent="handleCreateDream">
    <div class="m-3">
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="title"
          >Titre du rêve</label
        >
        <input
          class="text-black rounded-md p-2 border border-black border-1"
          type="text"
          id="title"
          v-model="title"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="description"
          >Contenu du rêve</label
        >
        <textarea
          class="text-black rounded-md p-2 border border-black border-1 pb-4"
          id="description"
          v-model="description"
          required
        />
        <div class="pb-4 flex flex-col pt-4">
          <label class="text-white text-base font-medium pb-1" for="date"
            >Date du rêve</label
          >
          <input
            class="text-black rounded-md p-2 border border-black border-1"
            type="date"
            id="date"
            v-model="date"
            required
          />
        </div>
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
        <label class="text-white text-base font-medium " for="type"
          >Type</label
        >
        <select class="text-black p-2 rounded-md" id="type" v-model="type" required>
          <option value="Rêve">Rêve</option>
          <option value="Cauchemar">Cauchemar</option>
        </select>
      </div>
      <div >
        <label for="recurent" class="text-white">Rêve récurrent :</label>
        <input
          class="text-black "
          type="checkbox"
          id="recurent"
          v-model="recurrent"
        />
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div class="flex justify-center pb-4">
        <button
          class="text-white bg-teal-700 rounded-md px-3 py-2"
          type="submit"
          :disabled="isLoading"
        >
          Créer
        </button>
      </div>
    </div>
  </form>
</template>
