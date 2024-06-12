<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { addUser } from "@/assets/backend";
import Button from "@/components/Button.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";

const router = useRouter();
const email = ref("");
const username = ref("");
const name = ref("");
const password = ref("");
const passwordConfirm = ref("");
const avatar = ref<File | null>(null);
const avatarPreview = ref<string | null>(null);
const isLoading = ref(false);
const errorMessage = ref("");

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    avatar.value = target.files[0];
    avatarPreview.value = URL.createObjectURL(target.files[0]);
  } else {
    avatar.value = null;
    avatarPreview.value = null;
  }
};

const handleSignUp = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    await addUser({
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
      username: username.value,
      name: name.value,
      avatar: avatar.value as File,
    });
    router.push("/login");
  } catch (error) {
    errorMessage.value =
      "Erreur lors de l'inscription: " + (error as Error).message;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section>
    <div class="text-white text-center py-8">
      <h2>Bienvenue sur</h2>
      <h1>DreamSheep</h1>
    </div>
  </section>
  <main>
  <div class="m-5">
    <form @submit.prevent="handleSignUp">
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="email">Email:</label>
        <input
          class="text-black rounded-md p-2"
          type="email"
          id="email"
          v-model="email"
          placeholder="Ex : exemple@gmail.com"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="username">Nom d'utilisateur:</label>
        <input
          class="text-black rounded-md p-2"
          type="text"
          id="username"
          v-model="username"
          placeholder="Ex : Dreamer25"
          required
        />
      </div>

      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="name">Nom:</label>
        <input
          class="text-black rounded-md p-2"
          type="text"
          id="name"
          v-model="name"
          placeholder="Ex : Durand"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="password">Mot de passe:</label>
        <input
          class="text-black rounded-md p-2"
          type="password"
          id="password"
          placeholder="8 caractères minimum"
          v-model="password"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="passwordConfirm">Confirmez le mot de passe:</label>
        <input
          class="text-black rounded-md p-2"
          type="password"
          id="passwordConfirm"
          v-model="passwordConfirm"
          required
        />
      </div>
      <div v-if="password !== passwordConfirm" class="error-message">
        Les mots de passe ne correspondent pas
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="avatar">Avatar:</label>
        <input
          class="text-white"
          type="file"
          id="avatar"
          @change="handleFileChange"
        />
      </div>
      <div v-if="avatarPreview" class="pb-4 flex flex-col items-center">
        <label class="text-white text-base font-medium pb-1">Prévisualisation de l'avatar:</label>
        <img :src="avatarPreview" alt="Prévisualisation de l'avatar" class="w-24 h-24 rounded-full object-cover" />
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div class="flex justify-center py-4">
        <button class="text-black bg-yellow-200 px-3 py-2 rounded-md" type="submit">
          S'inscrire
        </button>
      </div>
      <p class="text-white text-sm text-center">
        Vous avez déjà un compte ?
        <RouterLink to="/login" class="text-LightPurple font-bold">Connectez-vous</RouterLink>
      </p>
    </form>
  </div>
  </main>
  <div class="flex justify-center pt-6">
    <CloudIcon class="m-2" />
    <MoonIcon class="m-12" />
  </div>
</template>
