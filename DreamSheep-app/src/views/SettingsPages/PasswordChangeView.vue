<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import BackArrowIconsvg from '@/components/icons/BackArrowIconsvg.vue';
import Button from '@/components/Button.vue';
import { changePassword } from '@/assets/backend';
import { pb } from '@/assets/backend';

const newPassword = ref('');
const confirmPassword = ref('');

const onSubmit = async () => {
  const userId = pb.authStore.model?.id;

  try {
    await changePassword(userId, newPassword.value, confirmPassword.value);
    alert('Mot de passe mis à jour avec succès');
  } catch (error: any) {
    alert(error.message);
  }
};
</script>

<template>
    <main class="settings mx-3 py-5 overflow-auto">
        <div class="flex justify-center items-center pb-5">
        <RouterLink to="/settings"><BackArrowIconsvg class="flex-grow-0" /></RouterLink> 
        <h2 class="text-white text-sm font-norma px-7 justify-center">
            Changer de mot de passe
        </h2>
        </div>
        <form @submit.prevent="onSubmit">
        <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Nouveau mot de passe</p>
        <input v-model="newPassword" type="text" placeholder="8 caractères minimum" class="bg-white text-black rounded-md p-2.5 w-full" />
        </div>
    
        <div class="border-y border-slate-100 py-5">
        <p class="pb-2.5 text-slate-50">Confirmer le nouveau mot de passe</p>
        <input v-model="confirmPassword" type="text" placeholder="8 caractères minimum" class="bg-white text-black rounded-md p-2.5 w-full" />
        </div>
    
        <div class="pt-5">
            <Button @click="onSubmit" type="submit" class="w-full justify-center font-bold" text="Changer de mot de passe" url=""></Button>
        </div>
        </form>
    </main>
</template>