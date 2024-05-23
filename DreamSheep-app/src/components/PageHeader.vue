<script setup lang="ts">
</script>

<template>
    <div v-if="$route.path === '/'">
        <h2>En tête de la home page</h2>
    </div>
    <div v-if="$route.path === '/diary'">
        <h2>En tête de la diary page</h2>
    </div>
    <div v-if="$route.path === '/profile'">
        <h2>En tête de la profile page</h2>
    </div>
    <div v-if="$route.path === '/shop'">
        <h2>En tête de la shop page</h2>
    </div>
    <div v-if="$route.path === '/settings'">
        <h2>En tête de la settings page</h2>
    </div>
</template>