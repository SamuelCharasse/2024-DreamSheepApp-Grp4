<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import {
  pb,
  getComments,
  addComment,
  likeDream,
  unlikeDream,
  getLikes,
} from "@/assets/backend";
import type { DreamsResponse } from "@/pocketbase-types";
import { useRouter } from "vue-router";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import HeartFullIcon from "@/components/icons/HeartFullIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";

const route = useRoute();
const dreamId = route.params.id;
const comments = ref([]);
const commentMessage = ref("");
const dream = ref<DreamsResponse | null>(null);
const userId = pb.authStore.model?.id;
const router = useRouter();
const likes = ref(0);
const hasLiked = ref(false);

const fetchDreamAndComments = async () => {
  try {
    dream.value = await pb.collection("dreams").getOne(dreamId, {
      expand: "userId",
    });
    comments.value = await getComments(dreamId);
    fetchLikes();
  } catch (error) {
    console.error("Failed to fetch dream or comments:", error);
  }
};

const postComment = async () => {
  if (commentMessage.value.trim() === "") return;
  try {
    await addComment(userId, dreamId, commentMessage.value);
    comments.value = await getComments(dreamId);
    commentMessage.value = "";
  } catch (error) {
    console.error("Failed to post comment:", error);
  }
};

const fetchLikes = async () => {
  const result = await getLikes(dreamId);
  likes.value = result.length;
  hasLiked.value = result.some((like) => like.userId === userId);
};

const toggleLike = async () => {
  if (hasLiked.value) {
    await unlikeDream(dreamId);
  } else {
    await likeDream(dreamId, userId);
  }
  fetchLikes();
};

function goBack() {
  router.back(); // Navigue à la page précédente dans l'historique du navigateur
}

onMounted(fetchDreamAndComments);

const username = computed(() => dream.value?.expand?.userId?.username || "Utilisateur inconnu");
</script>

<template>
  <div class="container mx-auto p-4 mb-32">
    <div class="m-1">
      <BackArrowIconsvg @click="goBack" class="cursor-pointer" />
    </div>

    <div v-if="dream">
      <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-1 mt-4">
        <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
          <ProfileIcon />
          <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">
            {{ username }}
          </p>
        </div>
        <div class="p-3">
          <h3 class="text-black overflow-auto">{{ dream.title }}</h3>
          <p class="text-black text-base overflow-auto">
            {{ dream.description }}
          </p>
        </div>
        <div class="flex flex-col">
          <div
            class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-4"
          >
            <CommentIcon />
            <span>{{ comments.length }}</span>
            <div @click="toggleLike" class="cursor-pointer">
              <component :is="hasLiked ? HeartFullIcon : HeartIcon" />
            </div>
            <p class="text-black text-sm pl-0.5">{{ likes }}</p>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-lg mb-2 text-white">Commentaires</p>
        <div class="flex justify-between gap-4 items-center">
          <textarea
            v-model="commentMessage"
            class="w-full px-2 py-1 border rounded mb-2 bg-DarkPurple text-white"
            rows="2"
            placeholder="Laisser un commentaire"
          ></textarea>
          <button
            @click="postComment"
            class="bg-yellow-200 text-black p-2 text-sm rounded"
          >
            Envoyer
          </button>
        </div>
        <ul class="mt-4">
          <li
            v-for="comment in comments"
            :key="comment.id"
            class="bg-DarkPurple overflow-hidden pt-2 rounded-lg mb-2"
          >
            <div class="flex items-center py-2 px-4">
              <ProfileIcon />
              <div class="ml-4">
                <p class="text-indigo-900 font-normal text-xl">
                  {{ comment.user.username }}
                </p>
                <p class="text-black text-base overflow-auto">
                  {{ comment.Message }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>
