<script setup lang="ts">
import {RouterLink} from 'vue-router';
import DiaryIcon from '@/components/icons/DiaryIcon.vue';
import EllipseMenu from '@/components/icons/EllipseMenu.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import ProfileIcon from '@/components/icons/ProfileIcon.vue';
import ShopIcon from '@/components/icons/ShopIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
</script>

<template>
    <nav class="fixed bottom-0 inset-x-0 bg-indigo-900 rounded-t-lg h-15" v-if="$route.path !== '/signup' && $route.path !== '/login'">
        <ul class="grid grid-cols-5 justify-between items-center p-4 text-slate-50">
            <li>
                <router-link to="/" class="flex flex-col items-center">
                <HomeIcon class="h-6 w-6 text-slate-50"/>
                <span>Home</span>
                <EllipseMenu v-if="$route.path === '/'" class="h-4 w-4"/>
            </router-link>
            </li>
            <li>
                <router-link to="/diary" class="flex flex-col items-center">
                <DiaryIcon class="h-6 w-6 text-slate-50"/>
                <span>Diary</span>
                <EllipseMenu v-if="$route.path === '/diary'" class="h-4 w-4"/>
                </router-link>
            </li>
            <li>
                <router-link to="/profile" class="flex flex-col items-center">
                <ProfileIcon class="h-6 w-6 text-slate-50"/>
                <span>Profile</span>
                <EllipseMenu v-if="$route.path === '/profile'" class="h-4 w-4"/>
                </router-link>
            </li>
            <li>
                <router-link to="/shop" class="flex flex-col items-center">
                <ShopIcon class="h-6 w-6 text-slate-50"/>
                <span>Shop</span>
                <EllipseMenu v-if="$route.path === '/shop'" class="h-4 w-4"/>
                </router-link>
            </li>
            <li>
                <router-link to="/settings" class="flex flex-col items-center">
                <SettingsIcon class="h-6 w-6 text-slate-50"/>
                <span>Settings</span>
                <EllipseMenu v-if="$route.path === '/settings'" class="h-4 w-4"/>
                </router-link>
            </li>
        </ul>
    </nav>
</template>