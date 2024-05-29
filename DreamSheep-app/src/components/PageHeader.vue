<script setup lang="ts">
import { RouterLink } from 'vue-router';
import NewDreamIcon from '@/components/icons/NewDreamIcon.vue';
import StatisticIcon from './icons/StatisticIcon.vue';
import NotificationUpIcon from './icons/NotificationUpIcon.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import Star_1Icon from './icons/Star_1Icon.vue';
</script>

<template>
    <div v-if="$route.path === '/'" class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50">
        <div class="flex justify-around items-center">
            <h2>Communauté</h2>
            <div class="flex items-center gap-4"> <!-- faut finir de mettre en forme ici  -->
                <NewDreamIcon/>
                <NotificationIcon/>
            </div>
        </div>
        <span class="border border-slate-50 w-full"></span>
    </div>
    <div v-if="$route.path === '/diary'" class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50">
        <div class="flex justify-around items-center">
            <h2>diary page</h2>
            <div class="flex items-center gap-4">
                <NewDreamIcon/>
                <StatisticIcon/>
            </div>
        </div>
        <span class="border border-slate-50 w-full"></span>
    </div>
    <div v-if="$route.path === '/profile'" class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50">
        <div class="flex justify-around items-center">
            <h2>profile page</h2>
            <Star_1Icon/>
        </div>
        <span class="border border-slate-50 w-full"></span>
    </div>
    <div v-if="$route.path === '/shop'" class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50">
        <div class="flex justify-around items-center">
            <h2>shop page</h2>
            <Star_1Icon/>
        </div>
        <span class="border border-slate-50 w-full"></span>
    </div>
    <div v-if="$route.path === '/settings'" class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50">
        <div class="flex justify-around items-center">
            <h2>settings page</h2>
            <Star_1Icon/>
        </div>
        <span class="border border-slate-50 w-full"></span>
    </div>
</template>