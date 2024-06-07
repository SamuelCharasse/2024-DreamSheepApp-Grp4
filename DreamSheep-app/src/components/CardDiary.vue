<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import TagIcon from '@/components/icons/TagIcon.vue'
import { createDream } from '@/assets/backend'
import { defineProps, computed } from 'vue';
import { deleteDreams } from '@/assets/backend'

const props = defineProps<{
    id: string
    title: string
    description: string
    tags: string[]
    date: string
}>()
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois commence à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const formattedDate = computed(() => formatDate(props.date));
const handleDelete = async () => {
    try {
        await deleteDreams(props.id);
        alert('Rêve supprimé avec succès');
        // Optionnel : ajouter une logique pour mettre à jour l'affichage des rêves après la suppression
    } catch (error) {
        console.error('Erreur lors de la suppression du rêve:', error);
        alert('Erreur lors de la suppression du rêve');
    }
};
</script>

<template>
    <div class="overflow-hidden px-2">
    <div class="bg-LightPurple pt-2 rounded-lg mx-4 mt-4">
        <div class="text-center">
            <p class="text-xs text-black ">{{ formattedDate }}</p>
        </div>
        <div class="p-3 flex flex-col justify-start relative overflow-hidden ">
            <h3 class="text-black ">{{title}}</h3>
            <p class="text-black text-base flex justify-start flex-grow-0 flex-shrink-0 ">{{description}}</p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-1 ">
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs overflow-auto ">{{ tags }}</p>
            </div>
            
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-1 pb-2.5">
            <div class="flex items-center space-x-1 px-2 py-1">
                <EditIcon/>
                <p class=" text-black text-xs">Modifier</p>
            </div>
            <div class="flex items-center space-x-1 px-2 py-1">
                    <CrossIcon @click="handleDelete" class="cursor-pointer" />
                    <p class="text-black text-xs cursor-pointer" @click="handleDelete">Supprimer</p>
                </div>
            <div class="flex items-center space-x-1 px-2 py-1">
                <StarIcon/>
                <p class=" text-black text-xs">Favoris</p>
            </div>
        </div>
    </div>
</div>
</template>