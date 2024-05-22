<script setup lang="ts">
import CommentIcon from './icons/CommentIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import FlagIcon from './icons/FlagIcon.vue';
import PinIcon from './icons/PinIcon.vue';
</script>

<template>
    <div class="bg-LightPurple px-3 m-4 rounded-lg border-indigo-900 border-2 overflow-hidden">
        <div class="flex justify-between py-2.5 ">
            <h2 class="text-indigo-900">Titre Reve semaine</h2>
            <PinIcon/>
        </div>
        <div class="pb-3">
            <p class="text-black overflow-auto">Description du rêve</p>
        </div>

        <div class="flex justify-self-start flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-5">
        <div class="flex justify-self-start flex-grow-0 flex-shrink-0 relative">
            <CommentIcon/>
            <p class="text-black text-sm pl-0.5">Nbr </p>
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
    </div>
</template>