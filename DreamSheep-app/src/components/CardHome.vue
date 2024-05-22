<script setup lang="ts">
import CommentIcon from './icons/CommentIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import FlagIcon from './icons/FlagIcon.vue';
import ProfilIcon1 from './icons/ProfilIcon1.vue';
import TagIcon from '@/components/icons/TagIcon.vue';
</script>

<template>
    <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 mt-4">
        <div class="flex flex-grow-0 flex-shrink-0 py-3 pl-4">
            <ProfilIcon1/>
            <p class="text-indigo-900 font-normal text-xl pl-4 pt-3">Pseudonyme utilisateur</p>
        </div>
        <div class="p-3">
            <h3 class="text-black overflow-auto">Titre du rêve</h3>
            <p class="text-black text-base overflow-auto">j'ai rêvé que je me promenais dans une forêt mystérieuse. Les arbres  s'inclinaient gracieusement sous le poids de la lune brillante, et le  sol était tapissé de pétales de fleurs lumineuses. Alors que [...]</p>
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
            <p class=" text-black text-xs">Tag 1</p>
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