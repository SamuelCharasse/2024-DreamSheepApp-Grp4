<script setup lang="ts">
import { pb } from "@/assets/backend";
import CardHome from "@/components/CardHome.vue";
import { ref, onMounted } from "vue";
import { fetchUserSharedDreams, fetchUserLikedDreams } from "@/assets/backend";

const userId = pb.authStore.model?.id; 
const sharedDreams = ref([]);
const likedDreams = ref([]);
const activeTab = ref("posts");

const switchTab = (tab) => {
  activeTab.value = tab;
};

onMounted(async () => {
  try {
    sharedDreams.value = await fetchUserSharedDreams(userId);
    likedDreams.value = await fetchUserLikedDreams(userId);
  } catch (error) {
    console.error('Error fetching dreams:', error);
  }
});
</script>

<template>
  <div class="text-white flex justify-center gap-28 my-4">
    <div @click="switchTab('posts')" :class="{'border-b border-yellow-200 text-yellow-200': activeTab === 'posts'}">
      <h3>Posts</h3>
    </div>
    <div @click="switchTab('likes')" :class="{'border-b border-yellow-200 text-yellow-200': activeTab === 'likes'}">
      <h3>J'aime</h3>
    </div>
  </div>

  <div v-if="activeTab === 'posts'"class="mb-32">
    <CardHome
      v-for="dream in sharedDreams"
      :key="dream.id"
      :id="dream.id"
      :title="dream.title"
      :description="dream.description"
      :tags="dream.tags"
      :date="dream.created"
      :likes="dream.likes"
      :commentaires="dream.commentaires"
      :user="dream.userId"
    />
  </div>

  <div v-if="activeTab === 'likes'" class="mb-32">
    <CardHome
      v-for="dream in likedDreams"
      :key="dream.id"
      :id="dream.id"
      :title="dream.title"
      :description="dream.description"
      :tags="dream.tags"
      :date="dream.created"
      :likes="dream.likes"
      :commentaires="dream.commentaires"
      :user="dream.userId"
    />
  </div>
</template>