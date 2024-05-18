<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <RouterView />
</template>
