<script setup lang="ts">
import CardDiary from '@/components/CardDiary.vue';
import { pb } from '@/assets/backend';
import type { DreamsResponse } from '@/pocketbase-types';
const userId = pb.authStore.model?.id;
const reve = await pb.collection('users').getOne('pb.authStore.model?.id')
console.log(reve)

const dreams = await pb.collection('dreams').getFullList({
  sorted: {
    filter: `userId="${userId}"`,
  }
})

</script>
<template>
    <div >
      <CardDiary v-for="dream in dreams" :key="dream.id" v-bind="dream"/>
      
    </div>
</template>