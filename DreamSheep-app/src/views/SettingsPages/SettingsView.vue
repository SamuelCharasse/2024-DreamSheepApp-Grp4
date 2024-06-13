<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { pb, deleteUserAccount } from '@/assets/backend';
import ProfileSettingsIcon from '@/components/icons/ProfileSettingsIcon.vue';
import KeyIcon from '@/components/icons/KeyIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';
import LogOutIcon from '@/components/icons/LogOutIcon.vue';
import CrossSettingsIcon from '@/components/icons/CrossSettingsIcon.vue';
import RightArrowIcon from '@/components/icons/RightArrowIcon.vue';
import ExitBlue from '@/components/icons/Exit-blue.vue';
import CrossRedIcon from '@/components/icons/CrossRedIcon.vue';

const router = useRouter();
const userId = pb.authStore.model?.id; // Utilisez l'ID de l'utilisateur connecté
const confirmationMessage = ref('');
const showConfirmation = ref(false);

const confirmDeleteAccount = async () => {
  if (!userId) {
    confirmationMessage.value = 'Utilisateur non connecté.';
    return;
  }

  showConfirmation.value = true;
};

const deleteAccount = async () => {
  if (!userId) return;

  const response = await deleteUserAccount(userId);
  confirmationMessage.value = response.message;

  if (response.success) {
    pb.authStore.clear();
    router.push('/signup'); // Redirigez vers la page d'inscription ou une autre page appropriée
  }
};

const cancelDelete = () => {
  showConfirmation.value = false;
};
</script>

<template>
  <nav>
    <ul class="text-slate-50 flex flex-col justify-between p-4 mb-32">
      <li class="py-6">
        <div class="flex gap-2 items-center">
          <ProfileSettingsIcon />
          <router-link class="flex gap-2 items-center font-bold text-lg" to="/info">Informations du compte
            <RightArrowIcon />
          </router-link>
        </div>
        <p>Affichez les informations de votre compte, comme votre numéro de téléphone et votre adresse mail.</p>
      </li>
      <li class="py-6">
        <div class="flex gap-2 items-center">
          <KeyIcon />
          <router-link class="flex gap-2 items-center font-bold text-lg" to="/password">Changer de mot de passe
            <RightArrowIcon />
          </router-link>
        </div>
        <p>Changez de mot de passe à tout moment.</p>
      </li>
      <li class="py-6">
        <div class="flex gap-2 items-center">
          <MoreIcon />
          <router-link class="flex gap-2 items-center font-bold text-lg" to="/more-info">Ressources supplémentaires
            <RightArrowIcon />
          </router-link>
        </div>
        <p>Obtenez des informations sur la gestion de vos données et l'application.</p>
      </li>
      <li class="py-6">
        <div class="flex gap-2 items-center">
          <ExitBlue />
          <router-link class="flex gap-2 items-center font-bold text-lg" to="/">Se déconnecter
            <RightArrowIcon />
          </router-link>
        </div>
        <p>Déconnectez-vous de votre compte. Vos données et vos informations seront conservées</p>
      </li>
      <li class="py-6">
        <div class="flex gap-2 items-center">
          <CrossRedIcon />
          <button @click="confirmDeleteAccount" class="flex gap-2 items-center font-bold text-lg text-white">
            Supprimer le compte
            <RightArrowIcon />
          </button>
        </div>
        <p>Supprimez votre compte. Vos données et vos informations seront supprimées</p>
      </li>
    </ul>
    
    <div v-if="showConfirmation" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div class="bg-white p-6 rounded-md text-center">
        <p class="mb-4">Confirmez-vous la suppression de votre compte ?</p>
        <button @click="deleteAccount" class="bg-red-600 text-white px-4 py-2 rounded mr-2">Oui, supprimer</button>
        <button @click="cancelDelete" class="bg-gray-600 text-white px-4 py-2 rounded">Annuler</button>
      </div>
    </div>

    <div v-if="confirmationMessage" class="mt-4 text-center text-red-600">
      <p>{{ confirmationMessage }}</p>
    </div>
  </nav>
</template>
