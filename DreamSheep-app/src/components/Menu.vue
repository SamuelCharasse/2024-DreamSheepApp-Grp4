<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
    <nav class="fixed bottom-0 inset-x-0 bg-indigo-900 rounded-t-lg">
        <ul class="flex flex-row justify-between items-center p-4 text-slate-50">
            <li>
                <router-link to="/" class="flex flex-col items-center">
                <img src="./icons/HomeIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <span :class="{ 'text-transparent': $route.path === '/' }">Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/diary" class="flex flex-col items-center">
                <img src="./icons/DiaryIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <span :class="{ 'text-transparent': $route.path === '/diary'}">Diary</span>
                </router-link>
            </li>
            <li>
                <router-link to="/profile" class="flex flex-col items-center">
                <img src="./icons/ProfileIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <span :class="{ 'text-transparent': $route.path === '/profile'}">Profile</span>
                </router-link>
            </li>
            <li>
                <router-link to="/shop" class="flex flex-col items-center">
                <img src="./icons/ShopIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <span :class="{ 'text-transparent': $route.path === '/shop'}">Shop</span>
                </router-link>
            </li>
            <li>
                <router-link to="/settings" class="flex flex-col items-center">
                <img src="./icons/SettingsIcon.svg" alt="Icon" class="h-6 w-6 text-slate-50">
                <span :class="{ 'text-transparent': $route.path === '/settings'}">Settings</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>