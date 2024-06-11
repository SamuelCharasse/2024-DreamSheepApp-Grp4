<script setup lang="ts">
import { pb } from "@/assets/backend";
import CardHome from "@/components/CardHome.vue";
import { ref, onMounted } from "vue";
import { fetchUserSharedDreams, fetchUserLikedDreams } from "@/assets/backend";

const userId = pb.authStore.model?.id; // Ou obtenir l'ID de l'utilisateur connecté d'une autre manière
const sharedDreams = ref([]);
const likedDreams = ref([]);
const activeTab = ref("posts");

onMounted(async () => {
  sharedDreams.value = await fetchUserSharedDreams(userId);
  likedDreams.value = await fetchUserLikedDreams(userId);
});
const switchTab = (tab) => {
  activeTab.value = tab;
};
</script>
<template>
  <div class="text-white flex justify-center gap-28 my-4">
    <h3 @click="switchTab('posts')" :class="{'text-blue-500': activeTab === 'posts'}">Posts</h3>
    <h3 @click="switchTab('likes')" :class="{'text-blue-500': activeTab === 'likes'}">J'aime</h3>
  </div>
  <div v-if="activeTab === 'posts'" class="mb-32">
    <p>Rêve partagé</p>
    <CardHome v-for="dream in sharedDreams"
              :key="dream.id"
              :id="dream.id"
              :title="dream.title"
              :description="dream.description"
              :tags="dream.tags"
              :date="dream.date"
              :username="dream.username" />
    <p v-if="sharedDreams.length === 0" class="text-center text-sm">Aucun rêve partagé.</p>
  </div>
  <div v-if="activeTab === 'likes'">
    <p>Rêve liké</p>
    <CardHome v-for="dream in likedDreams"
              :key="dream.id"
              :id="dream.id"
              :title="dream.title"
              :description="dream.description"
              :tags="dream.tags"
              :date="dream.date"
              :username="dream.username"/>
    <p v-if="likedDreams.length === 0" class="text-center text-sm text-white">Aucun rêve liké.</p>
  </div>
</template>
