<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <ul class="text-slate-50 h-screen flex flex-col justify-between">
            <li>
                <router-link class="font-bold text-lg" to="/">Informations du compte</router-link>
                <p>Affichez les informations de votre compte, comme votre numéro de téléphone et votre adresse mail.</p>
            </li>
            <li>
                <router-link class="font-bold text-lg" to="/">Changer de mot de passe</router-link>
                <p>Changez de mot de passe à tout moment.</p>
            </li>
            <li>
                <router-link class="font-bold text-lg" to="/">Premium</router-link>
                <p>Gérez les fonctionnalités de votre abonnement, notamment la période d'annulation</p>
            </li>
            <li>
                <router-link class="font-bold text-lg" to="/">Ressources supplémentaires</router-link>
                <p>Obtenez des informations sur la gestion de vos données et l'application.</p>
            </li>
            <li>
                <router-link class="font-bold text-lg" to="/">Se déconnecter</router-link>
                <p>Déconnectez-vous de votre compte. Vos données et vos informations seront conservées</p>
            </li>
            <li>
                <router-link class="font-bold text-lg" to="/">Supprimer le compte</router-link>
                <p>Supprimez votre compte. Vos données et vos informations seront supprimées</p>
            </li>
        </ul>
    </nav>
</template>