<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getUserDreams } from "@/assets/backend";
import { pb } from "@/assets/backend";
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
import { useRouter } from "vue-router";
// Assurez-vous que le chemin est correct

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
const dreamCount = computed(
  () => dreams.value.filter((dream) => dream.type === "Rêve").length
);
const nightmareCount = computed(
  () => dreams.value.filter((dream) => dream.type === "Cauchemar").length
);
const recurrentDreamCount = computed(
  () => dreams.value.filter((dream) => dream.recurrent).length
);

const tagCounts = computed(() => {
  const tagMap = {};
  dreams.value.forEach((dream) => {
    const tags = dream.tags.split(",");
    tags.forEach((tag) => {
      tag = tag.trim();
      if (tagMap[tag]) {
        tagMap[tag]++;
      } else {
        tagMap[tag] = 1;
      }
    });
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
      <h1 class="text-xl font-bold text-center text-white flex-1">Statistiques de Rêve</h1>
    </div>

    <div v-if="totalDreams > 0" class="space-y-8">
      <!-- Rapport Rêves/Cauchemars -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md">
        <h2 class="text-center text-xl font-semibold text-white mb-4">
          RAPPORT
        </h2>
        <div class="flex justify-around">
          <div class="flex flex-col items-center">
            <div class="relative w-32 h-32 rounded-full bg-blue-200">
              <div
                class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-900"
              >
                {{ dreamCount }}
              </div>
            </div>
            <p class="text-white mt-2">Rêves</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="relative w-32 h-32 rounded-full bg-red-200">
              <div
                class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-red-900"
              >
                {{ nightmareCount }}
              </div>
            </div>
            <p class="text-white mt-2">Cauchemars</p>
          </div>
        </div>
      </div>

      <!-- Statistiques par Tags -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md">
        <h2 class="text-center text-xl font-semibold text-white mb-4">
          TYPE DE RÊVE
        </h2>
        <div>
          <div v-for="(count, tag) in tagCounts" :key="tag" class="mb-2">
            <div class="flex items-center">
              <div
                :class="getTagColor(tag)"
                class="w-4 h-4 rounded-full mr-2"
              ></div>
              <span class="text-white font-semibold mr-2">{{ tag }}</span>
              <div class="flex-1 h-4 bg-gray-200 rounded">
                <div
                  class="h-4 rounded"
                  :class="getTagColor(tag)"
                  :style="{ width: (count / totalDreams.value) * 100 + '%' }"
                ></div>
              </div>
              <span class="ml-2 text-white">{{ count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistiques de Rêves Récurrents -->
      <div class="bg-DarkPurple p-4 rounded-lg shadow-md">
        <h2 class="text-center text-xl font-semibold text-white mb-4">
          RÊVES RÉCURRENTS
        </h2>
        <div class="flex flex-col items-center">
          <div class="relative w-32 h-32 rounded-full bg-green-200">
            <div
              class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-green-900"
            >
              {{ recurrentDreamCount }}
            </div>
          </div>
          <p class="text-white mt-2">Récurrents</p>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center text-white">Aucun rêve enregistré.</p>
    </div>
  </div>
</template>
