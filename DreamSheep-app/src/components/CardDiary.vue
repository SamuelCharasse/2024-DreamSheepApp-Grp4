<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import TagIcon from '@/components/icons/TagIcon.vue'
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';
import { deleteDreams } from '@/assets/backend'

const props = defineProps<{
    id: string
    title: string
    description: string
    tags: string[]
    date: string
}>();

const router = useRouter();

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois commence à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const formattedDate = computed(() => formatDate(props.date));

const handleDelete = async () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce rêve ?')) {
        try {
            await deleteDreams(props.id);
            alert('Rêve supprimé avec succès');
            // Optionnel : ajouter une logique pour mettre à jour l'affichage des rêves après la suppression
        } catch (error) {
            console.error('Erreur lors de la suppression du rêve:', error);
            alert('Erreur lors de la suppression du rêve');
        }
    }
};

const goToDetails = () => {
    router.push(`/dreams/${props.id}`);
};
const goToEdit =()=>{
    router.push(`/editdream/${props.id}`);
}
</script>

<template>
  <div class="overflow-hidden px-2">
    <div class="bg-LightPurple pt-2 rounded-lg mx-4 mt-4 px-1">
      <div class="mx-1">
        <div class="text-center">
          <p class="text-xs text-black">{{ formattedDate }}</p>
        </div>
        <div class="p-3 flex flex-col justify-start relative overflow-hidden">
          <h3 class="text-black cursor-pointer" @click="goToDetails">{{ title }}</h3>
          <p class="text-black text-base flex justify-start flex-grow-0 flex-shrink-0 cursor-pointer" @click="goToDetails">{{ description }}</p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-1">
          <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon />
            <p class="text-black text-xs overflow-auto">{{ tags }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-1 pb-2.5">
          <div class="flex items-center space-x-1 px-2 py-1" @click="goToEdit">
            <EditIcon class="w-4 h-4"/>
            <p class="text-black text-xs">Modifier</p>
          </div>
          <div class="flex items-center space-x-1 px-2 py-1">
            <CrossIcon @click="handleDelete" class="cursor-pointer w-5 h-5" />
            <p class="text-black text-xs cursor-pointer" @click="handleDelete">Supprimer</p>
          </div>
          <div class="flex items-center space-x-1 px-2 py-1">
            <p class="text-blue-500 text-xs cursor-pointer" @click="goToDetails">Voir les détails</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
