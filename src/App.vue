<script setup lang="ts">
import Menu from './components/Menu.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <Menu />
  <main>
    <RouterView />
  </main>
</template>