<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CardHome from '@/components/CardHome.vue';
import { pb, getComments, addComment } from '@/assets/backend';
import type { DreamsResponse } from '@/pocketbase-types';

const route = useRoute();
const dreamId = route.params.id;
const comments = ref([]);
const commentMessage = ref('');
const dream = ref<DreamsResponse | null>(null);
const userId = pb.authStore.model?.id;

const fetchDreamAndComments = async () => {
  try {
    dream.value = await pb.collection('dreams').getOne(dreamId, {
      expand: 'userId'
    });
    comments.value = await getComments(dreamId);
  } catch (error) {
    console.error("Failed to fetch dream or comments:", error);
  }
};

const postComment = async () => {
  if (commentMessage.value.trim() === '') return;
  try {
    await addComment(userId, dreamId, commentMessage.value);
    comments.value = await getComments(dreamId);
    commentMessage.value = '';
  } catch (error) {
    console.error("Failed to post comment:", error);
  }
};

onMounted(fetchDreamAndComments);
</script>

<template>
  <div class="container mx-auto p-4">
    <div v-if="dream">
      <CardHome 
        :id="dream.id"
        :title="dream.title"
        :description="dream.description"
        :tags="dream.tags"
        :date="dream.date"
        :username="dream.userId.username"
        :liked="false"  
      />
      <div class="mt-4">
        <h2 class="text-xl font-bold mb-2 text-white">Commentaires</h2>
        <textarea v-model="commentMessage" class="w-full px-2 py-1 border rounded mb-2" rows="3" placeholder="Laisser un commentaire"></textarea>
        <button @click="postComment" class="bg-yellow-200 text-black px-4 py-2 rounded">Envoyer</button>
        <ul class="mt-4">
          <li v-for="comment in comments" :key="comment.id" class="border-b py-2">
            <p class="text-white">{{ comment.expand.userId.username }} : {{ comment.Message }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>
