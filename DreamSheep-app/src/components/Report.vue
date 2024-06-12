<script setup lang="ts">
import { reportDream } from '@/assets/backend';
import { ReportNatureOptions } from '@/pocketbase-types';
import BackArrowIconsvg from './icons/BackArrowIconsvg.vue';

const props = defineProps({
  nature: {
    type: String as () => keyof typeof ReportNatureOptions,
    required: true,
  },
  message: String,
});

const reportTypes = Object.values(ReportNatureOptions);

import { useRouter } from "vue-router";
const router = useRouter();
function goBack() {
  router.back();
}

</script>

<template>
  <div class="flex justify-center items-center pb-5">
        <RouterLink to="" @click.native="goBack"><BackArrowIconsvg class="flex-grow-0" /></RouterLink> 
        <h2 class="text-white text-sm font-norma px-7 justify-center">
            Signaler ce rêve
        </h2>
  </div>
  <div class="bg-LightPurple overflow-hidden p-2 rounded-lg m-4">
    <form @submit.prevent="reportDream">
      <div class="flex flex-col gap-2">
        <label for="nature">Nature du signalement :</label>
        <select id="nature" v-model="props.nature" required>
          <option v-for="type in reportTypes" :key="type" :value="type">{{ type }}</option>
        </select>

        <label for="message">Message :</label>
        <textarea id="message" v-model="props.message" required></textarea>

        <button type="submit" @click="goBack">Envoyer le signalement</button>
      </div>
    </form>
  </div>
</template>