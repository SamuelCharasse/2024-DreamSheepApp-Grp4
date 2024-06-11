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
    <div @click="switchTab('posts')" :class="{'border-b  border-yellow-200 text-yellow-200': activeTab === 'posts'}">
    <h3>Posts</h3>
  </div>
  <div @click="switchTab('likes')" :class="{'border-b  border-yellow-200 text-yellow-200': activeTab === 'likes'}">
    <h3>J'aime</h3>
  </div>
  </div>
  <div v-if="activeTab === 'posts'" class="mb-32">
    <CardHome v-for="dream in sharedDreams"
              :key="dream.id"
              :title="dream.title"
              :description="dream.description"
              :tags="dream.tags"
              :date="dream.date"
              :username="dream.username" />
    <p v-if="sharedDreams.length === 0" class="text-center text-sm">Aucun rêve partagé.</p>
  </div>
  <div v-if="activeTab === 'likes'">
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
