<script setup lang="ts">
import { RouterView } from 'vue-router'
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


