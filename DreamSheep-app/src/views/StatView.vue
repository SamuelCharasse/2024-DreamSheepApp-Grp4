<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getUserDreams } from "@/assets/backend";
import { pb } from "@/assets/backend";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.back(); // Navigue à la page précédente dans l'historique du navigateur
}

const userId = pb.authStore.model?.id || "anonymous";
const dreams = ref([]);

const fetchUserDreams = async () => {
  try {
    dreams.value = await getUserDreams(userId);
  } catch (error) {
    console.error("Failed to fetch user dreams:", error);
  }
};

const totalDreams = computed(() => dreams.value.length);
const dreamCount = computed(() => dreams.value.filter(dream => dream.type === "Rêve").length);
const nightmareCount = computed(() => dreams.value.filter(dream => dream.type === "Cauchemar").length);
const recurrentDreamCount = computed(() => dreams.value.filter(dream => dream.recurrent).length);

const dreamPercentage = computed(() => totalDreams.value > 0 ? (dreamCount.value / totalDreams.value) * 100 : 0);
const nightmarePercentage = computed(() => totalDreams.value > 0 ? (nightmareCount.value / totalDreams.value) * 100 : 0);
const recurrentPercentage = computed(() => totalDreams.value > 0 ? (recurrentDreamCount.value / totalDreams.value) * 100 : 0);

const tagCounts = computed(() => {
  const tagMap = {};
  dreams.value.forEach((dream) => {
    const tag = dream.tags.trim();
    if (tagMap[tag]) {
      tagMap[tag]++;
    } else {
      tagMap[tag] = 1;
    }
  });
  return tagMap;
});

const getTagColor = (tag) => {
  switch (tag) {
    case "humour":
      return "bg-yellow-200";
    case "amour":
      return "bg-pink-200";
    case "drôle":
      return "bg-green-200";
    case "étrange":
      return "bg-purple-200";
    case "joyeux":
      return "bg-blue-200";
    case "peur":
      return "bg-red-200";
    case "horreur":
      return "bg-teal-200";
    default:
      return "bg-gray-500";
  }
};

onMounted(fetchUserDreams);
</script>

<template>
  <div class="container mx-auto p-4 mb-32">
    <div class="flex items-center mb-4">
      <BackArrowIconsvg @click="goBack" class="cursor-pointer mr-auto" />
      <h1 class="text-xl font-bold text-center text-white flex-1">Statistiques</h1>
    </div>

    <div v-if="totalDreams > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Carte pour le nombre total de rêves -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md text-center">
        <h2 class="text-white text-lg font-semibold">Total des Rêves</h2>
        <p class="text-3xl font-bold text-blue-200">{{ totalDreams }}</p>
      </div>

      <!-- Carte pour les rêves -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md text-center">
        <h2 class="text-white text-lg font-semibold">Rêves</h2>
        <p class="text-3xl font-bold text-green-200">{{ dreamCount }}</p>
        <p class="text-sm text-green-200">{{ dreamPercentage.toFixed(2) }}%</p>
      </div>

      <!-- Carte pour les cauchemars -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md text-center">
        <h2 class="text-white text-lg font-semibold">Cauchemars</h2>
        <p class="text-3xl font-bold text-red-200">{{ nightmareCount }}</p>
        <p class="text-sm text-red-200">{{ nightmarePercentage.toFixed(2) }}%</p>
      </div>

      <!-- Carte pour les rêves récurrents -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md text-center">
        <h2 class="text-white text-lg font-semibold">Rêves Récurrents</h2>
        <p class="text-3xl font-bold text-teal-200">{{ recurrentDreamCount }}</p>
        <p class="text-sm text-teal-200">{{ recurrentPercentage.toFixed(2) }}%</p>
      </div>

      <!-- Carte pour les statistiques par tags -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
        <h2 class="text-center text-lg font-semibold text-white mb-4">Type de Rêve</h2>
        <div class="flex flex-wrap gap-2 justify-center">
          <div v-for="(count, tag) in tagCounts" :key="tag" class="flex items-center gap-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div :class="`${getTagColor(tag)} w-4 h-4 rounded-full`"></div>
            <span class="text-white text-sm font-semibold">{{ tag }}</span>
            <div class="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-4 rounded-full"
                :class="getTagColor(tag)"
                :style="{ width: totalDreams.value > 0 ? (count / totalDreams.value) * 100 + '%' : '0%' }"
              ></div>
            </div>
            <span class="ml-2 text-white text-sm">{{ totalDreams.value > 0 ? ((count / totalDreams.value) * 100).toFixed(2) : 0 }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center text-white">Aucun rêve enregistré.</p>
    </div>
  </div>
</template>
