<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { pb } from "@/assets/backend";
import DreamSheep_Logo_vector from "@/components/icons/DreamSheep_Logo_vector.vue";

const route = useRoute();
const router = useRouter();
const password = ref("");
const passwordConfirm = ref("");

const handleResetPassword = async () => {
  const token = route.params.token; // Assurez-vous que le token est passé en tant que paramètre de route
  if (password.value !== passwordConfirm.value) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  try {
    await pb
      .collection("users")
      .confirmPasswordReset(token, password.value, passwordConfirm.value);
    alert("Votre mot de passe a été réinitialisé avec succès.");
    router.push("/login");
  } catch (error) {
    console.error("Error resetting password:", error);
    alert("Erreur lors de la réinitialisation du mot de passe.");
  }
};
</script>

<template>
  <div class="text-white mx-3">
    <div class="flex justify-center gap-8 mt-8 items-center">
      <DreamSheep_Logo_vector />
      <p class="text-lg">Dreamsheep</p>
    </div>
    <h2 class="text-center mt-20">Réinitialiser votre mot de passe</h2>
    <form @submit.prevent="handleResetPassword">
      <div class="flex flex-col mt-4">
        <input
          v-model="password"
          type="password"
          placeholder="Nouveau mot de passe"
          required
          class="mt-6 mb-10 rounded-sm px-2 py-3"
        />
        <input
          v-model="passwordConfirm"
          type="password"
          placeholder="Confirmez le mot de passe"
          required
          class="mb-4 rounded-sm px-2 py-3"
        />
      </div>
      <div class="flex justify-center mt-8">
        <button type="submit" class="bg-yellow-200 text-black px-2 py-1 rounded-md">Réinitialiser le mot de passe</button>
      </div>
    </form>
  </div>
</template>
