<script setup lang="ts">
import CrossIcon from '@/components/icons/CrossIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import TagIcon from '@/components/icons/TagIcon.vue'
import { createDream } from '@/assets/backend'

const props = defineProps<{
    id: string
    title: string
    description: string
    tags: string[]
    date: string
}>()

</script>

<template>
    <div class="overflow-hidden px-2">
    <div class="bg-LightPurple pt-2 rounded-lg mx-4 mt-4">
        <div class="text-center">
            <p class="text-xs text-black ">{{ date }}</p>
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