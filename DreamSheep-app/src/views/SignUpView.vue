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
const firstName = ref("");
const password = ref("");
const passwordConfirm = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

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
  <div class="m-5">
    <form @submit.prevent="handleSignUp">
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="email"
          >Email:</label
        >
        <input
          class="text-black rounded-md p-2"
          type="email"
          id="email"
          v-model="email"
          placeholder="Ex : damals@gmail.com"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="email"
          >Nom d'utilisateur:</label
        >
        <input
          class="text-black rounded-md p-2"
          type="username"
          id="username"
          v-model="username"
          placeholder="Ex : damals25"
          required
        />
      </div>

      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="email"
          >Nom:</label
        >
        <input
          class="text-black rounded-md p-2"
          type="name"
          id="name"
          v-model="name"
          placeholder="Ex : Malsot"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label class="text-white text-base font-medium pb-1" for="password"
          >Mot de passe:</label
        >
        <input
          class="text-black rounded-md p-2"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div class="pb-4 flex flex-col">
        <label
          class="text-white text-base font-medium pb-1"
          for="passwordConfirm"
          >Confirmez le mot de passe:</label
        >
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
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div class="flex justify-center pt-8 pb-5">
        <button type="submit" >S'inscrire</button>
      </div>
      
    </form>
  </div>
</template>
