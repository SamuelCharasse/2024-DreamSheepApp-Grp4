<script setup lang="ts">
import DreamSheep_Logo_Vector from '@/components/icons/DreamSheep_Logo_vector.vue';
import {RouterLink} from 'vue-router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
import NotificationIcon from './icons/NotificationIcon.vue';
const isDreamDetails = computed(() => route.params.id !== undefined);
</script>

<template>
    <div v-if="$route.path === '/home'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/about'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/CGU'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/cookies'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/diary'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/newdream'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/profile'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/shop'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/settings'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/legal'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/info'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/password'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/more-info'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/shop-premium'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/privacy-policy'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="isDreamDetails" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/stat'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
    <div v-if="$route.path === '/newdreamhome'" class="flex items-center justify-center p-4 gap-4 bg-indigo-900">
        <RouterLink to="/home">
        <DreamSheep_Logo_Vector/>
        </RouterLink> 
        <h1 class="text-slate-50">Dreamsheep</h1>
    </div>
</template>
