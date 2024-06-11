<script setup lang="ts">
import { reportDream } from '@/assets/backend';
import { ReportNatureOptions } from '@/pocketbase-types';

const props = defineProps({
  nature: {
    type: String as () => keyof typeof ReportNatureOptions,
    required: true,
  },
  message: String,
});

const reportTypes = Object.values(ReportNatureOptions);

</script>

<template>
  <form @submit.prevent="reportDream" class="">
    <label for="nature">Nature du signalement :</label>
    <select id="nature" v-model="props.nature" required>
      <option v-for="type in reportTypes" :key="type" :value="type">{{ type }}</option>
    </select>

    <label for="message">Message :</label>
    <textarea id="message" v-model="props.message" required></textarea>

    <button type="submit">Envoyer le signalement</button>
  </form>
</template>