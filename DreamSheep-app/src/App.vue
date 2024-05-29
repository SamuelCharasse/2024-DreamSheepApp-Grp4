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
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </main>
  <Menu/>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: translateX(0);
}
</style>
