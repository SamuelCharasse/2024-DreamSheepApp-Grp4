<script setup>
import { ref, onMounted } from "vue";
import CardHome from "@/components/CardHome.vue";
import { fetchSharedDreams } from '@/assets/backend';

const dreams = ref([]);

onMounted(async () => {
  try {
    dreams.value = await fetchSharedDreams();
  } catch (error) {
    console.error('Error loading dreams:', error);
  }
});
</script>

<template>
  <div class="container mx-auto p-4 mb-32">
    <div v-if="dreams.length > 0">
      <CardHome
        v-for="dream in dreams"
        :key="dream.id"
        v-bind="dream"
      />
    </div>
    <div v-else>
      <p>Aucun rêve partagé disponible.</p>
    </div>
  </div>
</template>
