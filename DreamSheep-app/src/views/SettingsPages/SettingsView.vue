<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ProfileSettingsIcon from '@/components/icons/ProfileSettingsIcon.vue';
import KeyIcon from '@/components/icons/KeyIcon.vue';
import MoneyIcon from '@/components/icons/MoneyIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';
import LogOutIcon from '@/components/icons/LogOutIcon.vue';
import CrossSettingsIcon from '@/components/icons/CrossSettingsIcon.vue';
import RightArrowIcon from '@/components/icons/RightArrowIcon.vue';
</script>

<template>
    <nav>
        <ul class="text-slate-50 h-screen flex flex-col justify-between p-4 mb-20">
            <li>
                <div class="flex gap-2 items-center">
                    <ProfileSettingsIcon/>
                    <router-link class="flex gap-2 items-center font-bold text-lg" to="/info">Informations du compte
                        <RightArrowIcon/>
                    </router-link>
                </div>
                <p>Affichez les informations de votre compte, comme votre numéro de téléphone et votre adresse mail.</p>
            </li>
            <li>
                <div class="flex gap-2 items-center">
                    <KeyIcon/>
                    <router-link class="flex gap-2 items-center font-bold text-lg" to="/password">Changer de mot de passe
                        <RightArrowIcon/>
                    </router-link>                    
                </div>
                <p>Changez de mot de passe à tout moment.</p>
            </li>
            <li>
                <div class="flex gap-2 items-center">
                    <MoneyIcon/>
                    <router-link class="flex gap-2 items-center font-bold text-lg" to="/">Premium
                        <RightArrowIcon/>
                    </router-link>                    
                </div>
                <p>Gérez les fonctionnalités de votre abonnement, notamment la période d'annulation</p>
            </li>
            <li>
                <div class="flex gap-2 items-center">
                    <MoreIcon/>
                    <router-link class="flex gap-2 items-center font-bold text-lg" to="/">Ressources supplémentaires
                        <RightArrowIcon/>
                    </router-link>                   
                </div>
                <p>Obtenez des informations sur la gestion de vos données et l'application.</p>
            </li>
            <li>
                <div class="flex gap-2 items-center">
                    <LogOutIcon/>
                    <router-link class="flex gap-2 items-center font-bold text-lg" to="/">Se déconnecter
                        <RightArrowIcon/>
                    </router-link>
                </div>
                <p>Déconnectez-vous de votre compte. Vos données et vos informations seront conservées</p>
            </li>
            <li>
                <div class="flex gap-2 items-center">
                    <CrossSettingsIcon/>
                    <router-link class="flex gap-2 items-center font-bold text-lg" to="/">Supprimer le compte
                        <RightArrowIcon/>
                    </router-link>
                </div>
                <p>Supprimez votre compte. Vos données et vos informations seront supprimées</p>
            </li>
        </ul>
    </nav>
</template>