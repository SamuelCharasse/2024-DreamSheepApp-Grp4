<script setup lang="ts">
import { RouterLink } from 'vue-router';
import NewDreamIcon from '@/components/icons/NewDreamIcon.vue';
import StatisticIcon from './icons/StatisticIcon.vue';
import NotificationUpIcon from './icons/NotificationUpIcon.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
</script>

<template>
    <div v-if="$route.path === '/'" class="flex p-2 bg-blue-950 text-slate-50 justify-around items-center">
        <h2>home page</h2>
        <!-- <div class="flex items-center"> faut finir de mettre en forme ici  -->
            <NewDreamIcon/>
            <NotificationIcon/>
        </div>
    </div>
    <div v-if="$route.path === '/diary'" class="flex p-2 bg-blue-950 text-slate-50 justify-around items-center">
        <h2>diary page</h2>
        <NewDreamIcon/>
        <StatisticIcon/>
    </div>
    <div v-if="$route.path === '/profile'" class="flex p-2 bg-blue-950 text-slate-50 justify-around items-center">
        <h2>profile page</h2>
        <!-- les icons là -->
    </div>
    <div v-if="$route.path === '/shop'" class="flex p-2 bg-blue-950 text-slate-50 justify-around items-center">
        <h2>shop page</h2>
        <!-- les icons là -->
    </div>
    <div v-if="$route.path === '/settings'" class="flex p-2 bg-blue-950 text-slate-50 justify-around items-center">
        <h2>settings page</h2>
        <!-- les icons là -->
    </div>
</template>