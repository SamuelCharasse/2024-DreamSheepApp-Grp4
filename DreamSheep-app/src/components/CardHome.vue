<script setup lang="ts">
import CommentIcon from './icons/CommentIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import FlagIcon from './icons/FlagIcon.vue';
import ProfileIcon from './icons/ProfileIcon.vue';
import TagIcon from '@/components/icons/TagIcon.vue';
import { ref, onMounted } from "vue";
import { createDream } from '@/assets/backend'
import { defineProps, computed } from 'vue';
import { pb } from '@/assets/backend';

const dreams = ref([]);

const fetchDreams = async () => {
  try {
    // Remplacer `getRecords` par `getFullList` pour récupérer tous les enregistrements
    const response = await pb.collection("dreams").getFullList({
      filter: 'partage = true',
      expand: 'userId'
    });
    dreams.value = response.map(dream => ({
      ...dream,
      username: dream.userId ? dream.userId.username : 'Utilisateur inconnu'  // Assurez-vous que 'userId' est correctement configuré pour renvoyer les détails de l'utilisateur
    }));
  } catch (error) {
    console.error("Failed to fetch shared dreams with user details:", error);
  }
};

onMounted(fetchDreams);

onMounted(fetchDreams);
const props = defineProps<{
    id: string
    title: string
    description: string
    tags: string[]
    date: string
    username: string
}>()
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois commence à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const formattedDate = computed(() => formatDate(props.date));
</script>

<template>
    <div>
      <div v-for="dream in dreams" :key="dream.id" class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 mt-4">
        <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
          <ProfileIcon/>
          <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">{{  dream.userId }}</p>
        </div>
        <div class="p-3">
          <h3 class="text-black overflow-auto">{{ dream.title }}</h3>
          <p class="text-black text-base overflow-auto">{{ dream.description }}</p>
        </div>
        <div class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-4">
          <CommentIcon/>
          <p class="text-black text-sm pl-0.5">Nbr Commentaires</p>
          <HeartIcon/>
          <p class="text-black text-sm pl-0.5">Nbr Likes</p>
          <FlagIcon/>
          <p class="text-black text-sm pl-0.5">Signaler</p>
        </div>
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 pb-4 ">
          <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class="text-black text-xs">{{ dream.tags }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>