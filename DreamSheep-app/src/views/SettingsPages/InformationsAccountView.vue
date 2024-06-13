<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getUserData, updateUserData } from "@/assets/backend";
import { pb } from "@/assets/backend";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import Button from "@/components/Button.vue";

const userId = pb.authStore.model?.id;
const name = ref("");
const username = ref("");
const avatar = ref("");
const email = ref("");
const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref("");
const banniere = ref("");

const fetchUserData = async () => {
  if (!userId) return;
  try {
    const user = await getUserData(userId);
    name.value = user.name || "";
    username.value = user.username || "";
    avatar.value = user.avatar || "";
    email.value = user.email || "";
    banniere.value = user.banniere || "";
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

onMounted(fetchUserData);

const handleUpdateUserData = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    await updateUserData(userId, {
      name: name.value,
      username: username.value,
      avatar: avatar.value,
      email: email.value,
      banniere: banniere.value,
    });
    router.push("/settings");
  } catch (error) {
    errorMessage.value =
      "Erreur lors de la mise à jour des informations utilisateur: " +
      (error as Error).message;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <main class="settings mx-3 py-5 overflow-auto mb-32">
    <div class="flex justify-center items-center pb-5">
      <RouterLink to="/settings">
        <BackArrowIconsvg class="flex-grow-0" />
      </RouterLink>
      <h2 class="text-white text-sm font-norma px-7 justify-center">
        Informations du compte
      </h2>
    </div>

    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5 text-slate-50">Nom</p>
      <input
        type="text"
        placeholder="Votre nom"
        class="bg-white text-black rounded-md p-2.5 w-full"
        v-model="name"
      />
    </div>

    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5 text-slate-50">Nom d'utilisateur</p>
      <input
        type="text"
        placeholder="Votre nom d'utilisateur"
        class="bg-white text-black rounded-md p-2.5 w-full"
        v-model="username"
      />
    </div>
    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5 text-slate-50">Email</p>
      <input
        type="email"
        placeholder="Votre adresse mail"
        class="bg-white text-black rounded-md p-2.5 w-full"
        v-model="email"
      />
    </div>
    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5 text-slate-50">Avatar</p>
      <input
        type="text"
        placeholder="Votre avatar"
        class="bg-white text-black rounded-md p-2.5 w-full"
        v-model="avatar"
      />
    </div>
    <div class="border-y border-slate-100 py-5">
      <p class="pb-2.5 text-slate-50">Bannière</p>
      <input
        type="text"
        placeholder="Votre avatar"
        class="bg-white text-black rounded-md p-2.5 w-full"
        v-model="banniere"
      />
    </div>

    <div v-if="errorMessage" class="text-red-500">
      {{ errorMessage }}
    </div>

    <div class="pt-5">
      <button
        @click="handleUpdateUserData"
        class="text-black bg-yellow-200 rounded-md px-3 py-2 w-full justify-center font-bold"
        :disabled="isLoading"
      >
        Sauvegarder les changements
      </button>
    </div>
  </main>
</template>
