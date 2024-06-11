<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardHome from "@/components/CardHome.vue";
import { pb } from "@/assets/backend";

const dreams = ref([]);

const fetchDreams = async () => {
  try {
    const response = await pb.collection("dreams").getFullList({
      filter: "partage === true",
      expand: "userId",
    });
    dreams.value = response.map((dream) => ({
      ...dream,
      username: dream.userId ? dream.userId.username : "Utilisateur inconnu",
    }));
  } catch (error) {
    console.error("Failed to fetch shared dreams:", error);
  }
};

onMounted(fetchDreams);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
};
</script>
<template>
  <div class="pb-32">
    <CardHome/>
    <div v-for="dream in dreams" :key="dream.id">
      <CardHome
        :id="dream.id"
        :title="dream.title"
        :description="dream.description"
        :tags="dream.tags"
        :date="formatDate(dream.date)"
        :username="dream.username"
      />
    </div>
  </div>
</template>
