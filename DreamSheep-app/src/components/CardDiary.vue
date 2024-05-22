<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import TagIcon from '@/components/icons/TagIcon.vue'
</script>

<template>
    <div class="">
    <div class="bg-LightPurple overflow-hidden pt-2 rounded-lg mx-4 mt-4">
        <div class="text-center">
            <p class="text-xs text-black ">Date</p>
        </div>
        <div class="p-3">
            <h3 class="text-black overflow-auto">Titre du rêve</h3>
            <p class="text-black text-base overflow-auto">j'ai rêvé que je me promenais dans une forêt mystérieuse. Les arbres  s'inclinaient gracieusement sous le poids de la lune brillante, et le  sol était tapissé de pétales de fleurs lumineuses. Alors que [...]</p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-1 ">
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs">Tag 1</p>
            </div>
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs">Tag 2</p>
            </div>
            <div class="bg-violet-200 rounded-lg flex items-center space-x-1 px-2 py-1">
            <TagIcon/>
            <p class=" text-black text-xs">Tag 3</p>
            </div>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2 py-1 pb-2.5">
            <div class="flex items-center space-x-1 px-2 py-1">
                <EditIcon/>
                <p class=" text-black text-xs">Modifier</p>
            </div>
            <div class="flex items-center space-x-1 px-2 py-1">
                <CrossIcon/>
                <p class=" text-black text-xs" >Supprimer</p>
            </div>
            <div class="flex items-center space-x-1 px-2 py-1">
                <StarIcon/>
                <p class=" text-black text-xs">Favoris</p>
            </div>
        </div>
    </div>
</div>
</template>