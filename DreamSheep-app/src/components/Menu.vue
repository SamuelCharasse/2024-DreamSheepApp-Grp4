<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/diary">Diary</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/settings">Settings</router-link>
    </nav>
</template>