<script setup lang="ts">
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import FavouriteIcon from "@/components/icons/FavouriteIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import SquareIcon from "@/components/icons/SquareIcon.vue";
import Button from "@/components/Button.vue";
const errorMessage = ref("");
const isLoading = ref(false);
import { useRouter } from "vue-router";
import { ref } from "vue";
import { NewDream } from "@/assets/backend";

const title = ref("");
const description = ref("");
const type = ref(false);
const date = ref("");
const recurrent = ref(false);
const router = useRouter();
const tags = ref();

const dream = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    await NewDream({
      title: title.value,
      description: description.value,
      type: type.value,
      date: date.value,
      recurrent: recurrent.value,
      tags: tags.value,
    });
    router.push("/diary");
  } catch (error) {
    errorMessage.value =
      "Erreur lors de l'ajout du rêve: " + (error as Error).message;
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="m-4">
    <div class="flex justify justify-between">
      <BackArrowIconsvg />
      <div class="flex gap-2">
        <FavouriteIcon class="text-white" />
        <p class="text-white text-sm">Ajouter aux favoris</p>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <label for="title">Titre</label>
        <div class="p-2">
          <input
            class="text-black"
            type="text"
            id="title"
            v-model="title"
            required
          />
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5 pb-2">
      <div class="m-2">
        <label for="description">Contenu</label>
        <div class="px-2">
          <input
            class="text-black"
            type="text"
            id="description"
            v-model="description"
            required
          />
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <label for="description">Type</label>
        <div class="p-2 flex justify-center gap-3">
          <select
            class="text-black"
            type="checkbox"
            id="type"
            v-model="type"
            required
          >
            <option value="cauchemar">Cauchamr</option>
            <option value="Rêve">reve</option>
          </select>
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="pb-2 m-2">
        <label for="description">Date</label>
        <div class="flex bg-white m-2 p-2 justify-between">
          <input
            class="text-black"
            type="date"
            id="date"
            v-model="date"
            required
          />
          <DownArrowIcon />
        </div>
      </div>
    </div>

    <div class="bg-DarkPurple rounded-lg mt-5">
      <div class="m-2">
        <label for="description">Récurrent</label>
        <div class="p-2 flex justify-center gap-3">
          <input
            class="text-black"
            type="checkbox"
            id="recurrent"
            v-model="recurrent"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center py-2">
      <button type="submit" :disabled="isLoading">Enregistrer</button>
    </div>
    <div class="flex gap-3 justify-center">
      <SquareIcon />
    </div>
  </div>
</template>
