<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { addUser } from "@/assets/backend";
import Button from "@/components/Button.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";
import DreamSheep_Logo_vector from "@/components/icons/DreamSheep_Logo_vector.vue";
const router = useRouter();
const email = ref("");
const username = ref("");
const name = ref("");
const password = ref("");
const passwordConfirm = ref("");
const avatar = ref<File | null>(null);
const banniere = ref<File | null>(null);
const avatarPreview = ref<string | null>(null);
const bannierePreview = ref<string | null>(null);
const isLoading = ref(false);
const errorMessage = ref("");

const handleFileChange = (event: Event, type: "avatar" | "banniere") => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0] || null;
  if (type === "avatar") {
    avatar.value = file;
    if (file) {
      avatarPreview.value = URL.createObjectURL(file);
    } else {
      avatarPreview.value = null;
    }
  } else {
    banniere.value = file;
    if (file) {
      bannierePreview.value = URL.createObjectURL(file);
    } else {
      bannierePreview.value = null;
    }
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
      avatar: avatar.value!,
      banniere: banniere.value!
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
    <div class="text-white text-center py-8 flex flex-col items-center">
      <h2>Bienvenue sur</h2>
      <h1>DreamSheep</h1>
      <DreamSheep_Logo_vector/>
    </div>
  </section>
  <main>
    <div class="m-5">
      <form @submit.prevent="handleSignUp">
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="email">Email:</label>
          <input class="text-black rounded-md p-2" type="email" id="email" v-model="email" placeholder="Ex : exemple@gmail.com" required />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="username">Nom d'utilisateur:</label>
          <input class="text-black rounded-md p-2" type="text" id="username" v-model="username" placeholder="Ex : Dreamer25" required />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="name">Nom:</label>
          <input class="text-black rounded-md p-2" type="text" id="name" v-model="name" placeholder="Ex : Julie" required />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="password">Mot de passe:</label>
          <input class="text-black rounded-md p-2" type="password" id="password" placeholder="8 caractères minimum" v-model="password" required />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="passwordConfirm">Confirmez le mot de passe:</label>
          <input class="text-white rounded-md p-2" type="password" id="passwordConfirm" v-model="passwordConfirm" required />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="avatar">Avatar:</label>
          <input class="text-white rounded-md p-2" type="file" id="avatar" @change="event => handleFileChange(event, 'avatar')" />
        </div>
        <div class="pb-4 flex flex-col">
          <label class="text-white text-base font-medium pb-1" for="banniere">Bannière:</label>
          <input class="text-white rounded-md p-2" type="file" id="banniere" @change="event => handleFileChange(event, 'banniere')" />
        </div>

        <div v-if="password !== passwordConfirm" class="error-message">Les mots de passe ne correspondent pas</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="bannierePreview" class="relative w-full max-w-3xl mx-auto my-4 bg-indigo-900 rounded-lg">
      <div class="w-full h-40 bg-cover rounded-t-lg" :style="{ backgroundImage: `url(${bannierePreview})` }"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img :src="avatarPreview || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'" alt="avatar" class="w-16 h-16 rounded-full mb-2" />
        <p class="text-white text-xl text-bold">{{ username }}</p>
      </div>
    </div>
        <div class="flex justify-center py-4">
          <button class="text-black bg-yellow-200 px-3 py-2 rounded-md" type="submit">S'inscrire</button>
        </div>
        <p class="text-white text-sm text-center">Vous avez déjà un compte ? <RouterLink to="/login" class="text-LightPurple font-bold">Connectez-vous</RouterLink></p>
      </form>
    </div>
    
  </main>
  <div class="flex justify-center pt-6">
    <CloudIcon class="m-2" />
    <MoonIcon class="m-12" />
  </div>
</template>
