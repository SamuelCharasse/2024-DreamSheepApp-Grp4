<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { pb, fetchUserSharedDreams, fetchLikedDreams, fetchUserProfile  } from "@/assets/backend";
import CardHome from "@/components/CardHome.vue";

// Définitions des propriétés
const props = defineProps({
  id: String,
  title: String,
  description: String,
  date: String,
  tags: String,
  user: Object,
  likes: Number,
  commentaires: Number,
});

const route = useRoute();
const userId = pb.authStore.model?.id; // Utilisez l'ID de l'utilisateur connecté
const activeTab = ref("posts");
const userDreams = ref([]);
const likedDreams = ref([]);
const userProfile = ref<User | null>(null); // Stockage des informations de l'utilisateur connecté

const switchTab = (tab: string) => {
  activeTab.value = tab;
};

// Récupération des rêves partagés par l'utilisateur
const fetchUserDreams = async () => {
  try {
    const dreams = await fetchUserSharedDreams(userId);
    userDreams.value = dreams;
  } catch (error) {
    console.error('Error fetching user dreams:', error);
  }
}

// Récupération des rêves aimés par l'utilisateur
const loadLikedDreams = async () => {
  try {
    const dreams = await fetchLikedDreams();
    likedDreams.value = dreams;
  } catch (error) {
    console.error('Error fetching liked dreams:', error);
  }
}

// Récupération du profil de l'utilisateur connecté
const loadUserProfile = async () => {
  try {
    const profile = await fetchUserProfile();
    userProfile.value = profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

onMounted(() => {
  fetchUserDreams();
  loadLikedDreams();
  loadUserProfile(); // Chargement des informations de l'utilisateur connecté
});

const username = computed(() => userProfile.value?.username || "Utilisateur inconnu");
const userAvatar = computed(() => {
  return userProfile.value && userProfile.value.avatar
    ? `http://127.0.0.1:8090/api/files/users/${userProfile.value.id}/${userProfile.value.avatar}`
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
});

</script>

<template>
  <div class="flex justify-center text-center items-center mt-4">
    <img :src="userAvatar" alt="avatar" class="w-10 h-10 rounded-full mr-3" />
    <p class="text-white text-base">{{ username }}</p>
  </div>
  <div class="text-white flex justify-center gap-28 my-4 cursor-pointer">
    <div @click="switchTab('posts')" :class="{'border-b border-yellow-200 text-yellow-200': activeTab === 'posts'}">
      <h3>Posts</h3>
    </div>
    <div @click="switchTab('likes')" :class="{'border-b border-yellow-200 text-yellow-200': activeTab === 'likes'}">
      <h3>J'aime</h3>
    </div>
  </div>

  <div v-if="activeTab === 'posts'" class="mb-32">
    <CardHome
      v-for="dream in userDreams"
      :key="dream.id"
      :id="dream.id"
      :title="dream.title"
      :description="dream.description"
      :date="dream.created"
      :tags="dream.tags"
      :user="dream.user"
      :likes="dream.likes || 0"
      :commentaires="dream.commentaires || 0"
      @deleteDream="fetchUserDreams"
    />
  </div>

  <div v-if="activeTab === 'likes'" class="mb-32">
    <CardHome
      v-for="dream in likedDreams"
      :key="dream.id"
      :id="dream.id"
      :title="dream.title"
      :description="dream.description"
      :date="dream.created"
      :tags="dream.tags"
      :user="dream.user"
      :likes="dream.likes || 0"
      :commentaires="dream.commentaires || 0"
      @deleteDream="loadLikedDreams"
    />
  </div>
</template>
