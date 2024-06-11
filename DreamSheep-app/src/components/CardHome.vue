<script setup lang="ts">
import { ref, onMounted } from "vue";
import { pb, likeDream, unlikeDream, getLikes, getComments } from "@/assets/backend";
import CommentIcon from "./icons/CommentIcon.vue";
import HeartFullIcon from "./icons/HeartFullIcon.vue";
import HeartIcon from "./icons/HeartIcon.vue";
import FlagIcon from "./icons/FlagIcon.vue";
import ProfileIcon from "./icons/ProfileIcon.vue";
import TagIcon from "./icons/TagIcon.vue";
import { useRouter } from "vue-router";
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  id: String,
  title: String,
  description: String,
  tags: String,
  date: String,
  username: String,
});

const userId = pb.authStore.model?.id;
const likes = ref([]);
const commentCount = ref([]);
const hasLiked = ref(false);
const router = useRouter();

const fetchLikes = async () => {
  likes.value = await getLikes(props.id);
  hasLiked.value = likes.value.some((like) => like.userId === userId);
};

const fetchComments = async () => {
  commentCount.value = await getComments(props.id);
};

const toggleLike = async () => {
  try {
    if (hasLiked.value) {
      const like = likes.value.find((like) => like.userId === userId);
      await unlikeDream(like.id);
    } else {
      await likeDream(props.id, userId);
    }
    await fetchLikes();
  } catch (error) {
    console.error("Failed to toggle like:", error);
  }
};


const goToComments = () => {
  router.push(`/dreams/${props.id}/comments`);
};
onMounted(() => {
  fetchLikes();
});
</script>

<template>
  <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 mt-4">
    <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
      <ProfileIcon />
      <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">
        {{ username }}
      </p>
    </div>
    <div class="p-3">
      <h3 class="text-black overflow-auto">{{ title }}</h3>
      <p class="text-black text-base overflow-auto">{{ description }}</p>
    </div>
    <div class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-4">
      <div class="comments cursor-pointer flex gap-3" @click="goToComments">
        <CommentIcon />
        <span>{{ commentCount.length }}</span>
      </div>
      <div @click="toggleLike" class="cursor-pointer">
        <component :is="hasLiked ? HeartFullIcon : HeartIcon" />
      </div>
      <div class="flex gap-2">
      <p class="text-black text-sm pl-0.5">{{ likes.length }}</p>
      <FlagIcon/>
      <RouterLink to="/report">Signaler</RouterLink>
      </div>
      <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
        <TagIcon />
        <p class="text-black text-xs">{{ tags }}</p>
      </div>
    </div>
  </div>
</template>
