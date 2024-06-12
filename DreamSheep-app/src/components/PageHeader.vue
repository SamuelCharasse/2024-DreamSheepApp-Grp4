<script setup lang="ts">
import { RouterLink } from "vue-router";
import { computed } from "vue";
import { useRoute } from "vue-router";

import NewDreamIcon from "@/components/icons/NewDreamIcon.vue";
import StatisticIcon from "./icons/StatisticIcon.vue";
import NotificationUpIcon from "./icons/NotificationUpIcon.vue";

const route = useRoute();
import NotificationIcon from "./icons/NotificationIcon.vue";
import Star_1Icon from "./icons/Star_1Icon.vue";
const isDreamDetails = computed(() => route.params.id !== undefined);
</script>

<template>
  <div
    v-if="$route.path === '/home'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Communauté</h2>
      <div class="flex items-center gap-4">
        <RouterLink to="/newdreamhome">
        <NewDreamIcon />
        </RouterLink>
        <NotificationIcon />
      </div>
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/diary'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Vos rêves</h2>
      <div class="flex items-center gap-4">
        <RouterLink to="/newdream">
          <NewDreamIcon />
        </RouterLink>
        <RouterLink to="/stat">
          <StatisticIcon />
        </RouterLink>
      </div>
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>

  <div
    v-if="$route.path === '/profile'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>profile page</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/shop'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>shop page</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/shop-premium'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>shop page</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>

  <div
    v-if="$route.path === '/settings'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>settings page</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/newdream'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Nouveau Rêve</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="isDreamDetails"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Détails du rêve</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/stat'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Statistiques</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/newdreamhome'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Partager un rêve</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
  <div
    v-if="$route.path === '/more-info'"
    class="flex flex-col gap-4 p-2 h-16 bg-blue-950 text-slate-50"
  >
    <div class="flex justify-around items-center">
      <h2>Paramètres</h2>
      <Star_1Icon />
    </div>
    <span class="border border-slate-50 w-full"></span>
  </div>
</template>
