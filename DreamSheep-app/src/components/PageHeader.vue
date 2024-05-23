<script setup lang="ts">
</script>

<template>
    <div v-if="$route.path === '/'" class="bg-blue-950 text-slate-50">
        <h2>En tête de la home page</h2>
        <!-- les icons là -->
    </div>
    <div v-if="$route.path === '/diary'" class="bg-blue-950 text-slate-50">
        <h2>En tête de la diary page</h2>
        <!-- les icons là -->
    </div>
    <div v-if="$route.path === '/profile'" class="bg-blue-950 text-slate-50">
        <h2>En tête de la profile page</h2>
        <!-- les icons là -->
    </div>
    <div v-if="$route.path === '/shop'" class="bg-blue-950 text-slate-50">
        <h2>En tête de la shop page</h2>
        <!-- les icons là -->
    </div>
    <div v-if="$route.path === '/settings'" class="bg-blue-950 text-slate-50">
        <h2>En tête de la settings page</h2>
        <!-- les icons là -->
    </div>
</template>