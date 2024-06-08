<script setup lang="ts">
import CommentIcon from './icons/CommentIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import FlagIcon from './icons/FlagIcon.vue';
import ProfileIcon from './icons/ProfileIcon.vue';
import TagIcon from '@/components/icons/TagIcon.vue';
import { createDream } from '@/assets/backend'
import { defineProps, computed } from 'vue';
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
    <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 mt-4">
        <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
            <ProfileIcon/>
            <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">{{username}}</p>
        </div>
        <div class="p-3">
            <h3 class="text-black overflow-auto">{{title}}</h3>
            <p class="text-black text-base overflow-auto">{{description}}</p>
        </div>

        <div class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-4">
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <CommentIcon/>
            <p class="text-black text-sm pl-0.5">Nbr Commentaires</p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
            <HeartIcon/>
            <p class="text-black text-sm pl-0.5">Nbr Likes</p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
            <FlagIcon/>
            <p class="text-black text-sm pl-0.5">Signaler</p>
        </div>
        </div>

        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 pb-4 ">
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs">{{tags}}</p>
            </div>
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs">Tag 2</p>
            </div>
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs">Tag 3</p>
            </div>
        </div>
    </div>
</template>