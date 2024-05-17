<script setup>
import Menu from './components/Menu.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <header>
    <Menu />
  </header>
  <main>
    <RouterView />
  </main>
</template>