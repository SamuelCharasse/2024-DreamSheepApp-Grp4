<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import {
  pb,
  getComments,
  likeDream,
  unlikeDream
} from "@/assets/backend";
import CommentIcon from "./icons/CommentIcon.vue";
import HeartFullIcon from "./icons/HeartFullIcon.vue";
import HeartIcon from "./icons/HeartIcon.vue";
import FlagIcon from "./icons/FlagIcon.vue";
import ProfileIcon from "./icons/ProfileIcon.vue";
import TagIcon from "./icons/TagIcon.vue";
import { useRouter } from "vue-router";

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

const userId = pb.authStore.model?.id;
const likes = ref(props.likes);
const commentCount = ref(props.commentaires);
const hasLiked = ref(false);
const router = useRouter();


onMounted(async () => {
  fetchLikes();
  fetchComments();
});
const fetchLikes = async () => {
  const result = await pb.collection('likes').getFullList({
    filter: `dreamId="${props.id}"`,
  });
  likes.value = result.length;
  hasLiked.value = result.some((like) => like.userId === userId);
};


const fetchComments = async () => {
  const result = await getComments(props.id);
  commentCount.value = result.length;
};

const toggleLike = async () => {
  if (hasLiked.value) {
    await unlikeDream(props.id, userId);
  } else {
    await likeDream(props.id, userId);
  }
  fetchLikes();
};

const goToComments = () => {
  router.push(`/dreams/${props.id}/comments`);
};

const username = computed(() => props.user?.username || "Utilisateur inconnu");
const userAvatar = computed(() => {
  return props.user && props.user.avatar
    ? `http://127.0.0.1:8090/api/files/_pb_users_auth_/${props.user.id}/${props.user.avatar}`
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
});
</script>

<template>
  <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 mt-4">
    <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
      <img :src="userAvatar" alt="avatar" class="w-10 h-10 rounded-full mr-3" />
      <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">
        {{ username }}
      </p>
    </div>
    <div class="p-3">
      <h3 class="text-black overflow-auto">{{ props.title }}</h3>
      <p class="text-black text-base overflow-auto">{{ props.description }}</p>
    </div>
    <div class="flex flex-col">
      <div
        class="bg-violet-200 rounded-lg flex items-start justify-start ml-2 py-1 px-3 w-[fit-content] gap-2"
      >
        <TagIcon />
        <p class="text-black text-xs">{{ props.tags }}</p>
      </div>
      <div
        class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-4"
      >
        <div class="comments cursor-pointer flex gap-3" @click="goToComments">
          <CommentIcon />
          <span>{{ commentCount }}</span>
        </div>
        <div @click="toggleLike" class="cursor-pointer">
          <component :is="hasLiked ? HeartFullIcon : HeartIcon" />
        </div>
        <p class="text-black text-sm pl-0.5">{{ likes }}</p>
        <RouterLink to="/report">
          <FlagIcon />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
