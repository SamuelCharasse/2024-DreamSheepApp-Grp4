<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import PageHeader from '@/components/PageHeader.vue';

</script>

<template>
  <Header/>
  <PageHeader/>
  <main>
    <RouterView v-slot="{ Component }">
      
        <component :is="Component"/>
    
    </RouterView>
  </main>
  <Menu/>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
