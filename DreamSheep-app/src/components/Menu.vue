<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
    <nav class="fixed bottom-0 inset-x-0 bg-indigo-500">
        <ul class="flex flex-row">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/diary">Diary</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/settings">Settings</router-link></li>
        </ul>
    </nav>
</template>