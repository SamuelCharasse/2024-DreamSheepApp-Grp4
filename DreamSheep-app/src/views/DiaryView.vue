<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CardDiary from '@/components/CardDiary.vue';
import { pb } from '@/assets/backend';
import type { DreamsResponse } from '@/pocketbase-types';
const dreams = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');
const fetchDreams = async () => {
  try {
    const userId = pb.authStore.model?.id;
    if (!userId) {
      throw new Error('Utilisateur non authentifié');
    }

    const response = await pb.collection('dreams').getFullList({
      filter: `userId="${userId}"`,
    });

    dreams.value = response;
  } catch (error) {
    console.error('Failed to fetch dreams:', error);
    errorMessage.value = 'Erreur lors de la récupération des rêves.';
  } finally {
    isLoading.value = false;
  }
};

// Appeler fetchDreams au montage du composant
onMounted(fetchDreams);
</script>
<template>
    <div >
      <CardDiary v-for="dream in dreams" :key="dream.id" v-bind="dream"/>
      
    </div>
</template>