<script setup lang="ts">
import { defineProps } from 'vue';
import ProfileIcon from './icons/ProfileIcon.vue';
import CommentIcon from './icons/CommentIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import FlagIcon from './icons/FlagIcon.vue';
import TagIcon from './icons/TagIcon.vue';

const props = defineProps({
  id: String,
  title: String,
  description: String,
  tags: String,
  date: String,
  username: String
});

</script>

<template>
  <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 my-4">
    <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
      <ProfileIcon/>
      <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">{{ username }}</p>
    </div>
    <div class="p-3">
      <h3 class="text-black overflow-auto">{{ title }}</h3>
      <p class="text-black text-base overflow-auto">{{ description }}</p>
    </div>
    <div class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-4">
      <CommentIcon/>
      <p class="text-black text-sm pl-0.5">Nbr Commentaires</p>
      <HeartIcon/>
      <p class="text-black text-sm pl-0.5">Nbr Likes</p>
      <FlagIcon/>
      <p class="text-black text-sm pl-0.5">Signaler</p>
    </div>
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 pb-4">
      <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
        <TagIcon/>
        <p class="text-black text-xs">{{ tags }}</p>
      </div>
    </div>
  </div>
</template>