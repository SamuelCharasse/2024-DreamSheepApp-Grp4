<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { pb } from '@/assets/backend';

const route = useRoute();
const router = useRouter();
const password = ref('');
const passwordConfirm = ref('');

const handleResetPassword = async () => {
  const token = route.params.token; // Assurez-vous que le token est passé en tant que paramètre de route
  if (password.value !== passwordConfirm.value) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }

  try {
    await pb.collection('users').confirmPasswordReset(token, password.value, passwordConfirm.value);
    alert('Votre mot de passe a été réinitialisé avec succès.');
    router.push('/login');
  } catch (error) {
    console.error('Error resetting password:', error);
    alert('Erreur lors de la réinitialisation du mot de passe.');
  }
};
</script>

<template>
    <div>
      <h1>Réinitialiser le mot de passe</h1>
      <form @submit.prevent="handleResetPassword">
        <input v-model="password" type="password" placeholder="Nouveau mot de passe" required />
        <input v-model="passwordConfirm" type="password" placeholder="Confirmez le mot de passe" required />
        <button type="submit">Réinitialiser le mot de passe</button>
      </form>
    </div>
  </template>
  
 
  