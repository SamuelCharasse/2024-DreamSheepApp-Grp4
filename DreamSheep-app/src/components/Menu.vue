<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
    <nav class="fixed bottom-0 inset-x-0 bg-white">
        <div class="flex justify-around p-4">
            <router-link to="/" class="mx-2">Home</router-link>
            <router-link to="/diary" class="mx-2">Diary</router-link>
            <router-link to="/profile" class="mx-2">Profile</router-link>
            <router-link to="/shop" class="mx-2">Shop</router-link>
            <router-link to="/settings" class="mx-2">Settings</router-link>
        </div>
    </nav>
</template>