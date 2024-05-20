<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <Header/>
  <main><RouterView /></main>
  <Menu/>
</template>
