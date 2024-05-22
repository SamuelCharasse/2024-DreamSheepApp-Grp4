<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
    <nav class="fixed bottom-0 inset-x-0 bg-indigo-900 rounded-t-lg h-15">
        <ul class="flex flex-row justify-between items-center p-4 text-slate-50">
            <li>
                <router-link to="/" class="flex flex-col items-center">
                <img src="./icons/HomeIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <img v-if="$route.path === '/'" src="./icons/EllipseMenu.svg" alt="Ellispe" class="h-4 w-4">
                <span v-else>Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/diary" class="flex flex-col items-center">
                <img src="./icons/DiaryIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <img v-if="$route.path === '/diary'" src="./icons/EllipseMenu.svg" alt="Ellispe" class="h-4 w-4">
                <span v-else>Diary</span>
                </router-link>
            </li>
            <li>
                <router-link to="/profile" class="flex flex-col items-center">
                <img src="./icons/ProfileIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <img v-if="$route.path === '/profile'" src="./icons/EllipseMenu.svg" alt="Ellispe" class="h-4 w-4">
                <span v-else>Profile</span>
                </router-link>
            </li>
            <li>
                <router-link to="/shop" class="flex flex-col items-center">
                <img src="./icons/ShopIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <img v-if="$route.path === '/shop'" src="./icons/EllipseMenu.svg" alt="Ellispe" class="h-4 w-4">
                <span v-else>Shop</span>
                </router-link>
            </li>
            <li>
                <router-link to="/settings" class="flex flex-col items-center">
                <img src="./icons/SettingsIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <img v-if="$route.path === '/settings'" src="./icons/EllipseMenu.svg" alt="Ellispe" class="h-4 w-4">
                <span v-else>Settings</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>