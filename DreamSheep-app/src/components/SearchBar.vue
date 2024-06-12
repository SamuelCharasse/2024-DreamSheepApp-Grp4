<template>
    <div class="w-full my-4">
      <input
        type="text"
        v-model="query"
        @input="onSearch"
        placeholder="Rechercher des rêves..."
        class="p-1 border rounded w-full"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  
  const query = ref('');
  const emit = defineEmits(['search']);
  
  const onSearch = () => {
    emit('search', query.value);
  };
  </script>