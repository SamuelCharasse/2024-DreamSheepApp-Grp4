<script setup lang="ts">
import { RouterLink } from 'vue-router';
import RightArrowIcon from '@/components/icons/RightArrowIcon.vue';
import BackArrowIconsvg from '@/components/icons/BackArrowIconsvg.vue';
</script>

<template>
    <main class="flex flex-col items-start text-slate-50 p-4 mb-20">
        <div class="flex gap-2 items-center self-start py-4">
            <RouterLink to="/more-info">
                <BackArrowIconsvg/>
            </RouterLink> 
            <h3>Ressources supplémentaires</h3>
        </div>
        <nav>
            <ul class="flex flex-col m-4 gap-10">
                <li>
                    <div class="flex gap-2">
                        <RouterLink to="/contact" class="font-bold">Contact</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div class="flex gap-2">
                        <RouterLink to="/legal" class="font-bold">Mentions légales</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div class="flex gap-2">
                        <RouterLink to="/cgu" class="font-bold">Conditions d'utilisation</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div class="flex gap-2">
                        <RouterLink to="/privacy-policy" class="font-bold">Politique de confidentialité</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div class="flex gap-2">
                        <RouterLink to="/cookies" class="font-bold">Utilisation des cookies</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
            </ul>
        </nav>
        <p class="self-center">version 0.1</p>
    </main>
</template>