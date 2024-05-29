<script setup lang="ts">
import { RouterLink } from 'vue-router';
import RightArrowIcon from '@/components/icons/RightArrowIcon.vue';
import BackArrowIconsvg from '@/components/icons/BackArrowIconsvg.vue';
</script>

<template>
    <main class="flex flex-col text-slate-50 p-4 mb-20">
        <div>
            <RouterLink to="/settings">
                <BackArrowIconsvg/>
            </RouterLink> 
            <h2>Ressources supplémentaires</h2>
        </div>
        <nav>
            <ul>
                <li>
                    <div>
                        <RouterLink to="/">Conditions d'utilisation</RouterLink>
                        <RightArrowIcon/>
                    </div>
                    <p>Apprenez-en plus sur DreamSheep et son équipe !</p>
                </li>
                <li>
                    <div>
                        <RouterLink to="/">Contact</RouterLink>
                        <RightArrowIcon/>
                    </div>
                    <p>Contactez-nous en cas de problème ou de questions</p>
                </li>
                <li>
                    <div>
                        <RouterLink to="/">Mentions légales</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div>
                        <RouterLink to="/">Conditions d'utilisation</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div>
                        <RouterLink to="/">Politique de confidentialité</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
                <li>
                    <div>
                        <RouterLink to="/">Utilisation des cookies</RouterLink>
                        <RightArrowIcon/>
                    </div>
                </li>
            </ul>
        </nav>
    </main>
</template>