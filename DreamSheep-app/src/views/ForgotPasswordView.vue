<!-- src/views/ResetPasswordView.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import Pocketbase from 'pocketbase';
const pb = new Pocketbase("http://45.155.169.177:3000");

const email = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const handleForgotPassword = async () => {
  try {
    await pb.collection('users').requestPasswordReset(email.value);
    successMessage.value = 'Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.';
  } catch (error) {
    console.error('Error requesting password reset:', error);
    errorMessage.value = 'Erreur lors de la demande de réinitialisation du mot de passe.';
  }
};
</script>

<template>
  <section>
    <div class="text-white text-center py-8">
      <h2>Réinitialiser le mot de passe</h2>
      <p>Entrez votre adresse email pour recevoir un lien de réinitialisation du mot de passe</p>
    </div>
  </section>
  <main>
    <div class="m-5">
      <form @submit.prevent="handleForgotPassword" class="flex flex-col items-center">
        <div class="pb-4 flex flex-col w-full max-w-md">
          <label class="text-white text-base font-medium pb-1" for="email">Email:</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Votre adresse email"
            required
            class="text-black rounded-md p-2"
          />
        </div>
        <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
        <div v-if="successMessage" class="text-green-500">{{ successMessage }}</div>
        <div class="flex justify-center pt-8 pb-5 w-full">
          <button class="text-black bg-yellow-200 px-3 py-2 rounded-md w-full max-w-md" type="submit">Envoyer le lien de réinitialisation</button>
        </div>
      </form>
    </div>
  </main>
</template>
