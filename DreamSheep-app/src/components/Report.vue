<script setup lang="ts">
import { submitReport } from '@/assets/backend';
import { ref } from 'vue';

const reportForm = ref({
  nature: '',
  message: '',
  userId: '',
  postId: ''
});
</script>
<template>
    <div>
      <h2>Signaler une publication</h2>
      <form @submit.prevent="submitReport">
        <label for="nature">Nature du signalement :</label>
        <input v-model="reportForm.nature" id="nature" type="text" required />

        <label for="message">Message :</label>
        <textarea v-model="reportForm.message" id="message" required></textarea>

        <input v-model="reportForm.userId" type="hidden" />
        <input v-model="reportForm.postId" type="hidden" />

        <button type="submit">Envoyer le signalement</button>
      </form>
    </div>
  </template>