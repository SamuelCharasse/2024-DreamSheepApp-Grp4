<script setup lang="ts">
import Pocketbase from 'pocketbase';
const pb = new Pocketbase("http://45.155.169.177:3000");
const users = {
    username: 'string',
    email: 'string ',
}
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import { logIn } from '@/assets/backend';
import Button from '@/components/Button.vue';
import CloudIcon from '@/components/icons/CloudIcon.vue';
import MoonIcon from '@/components/icons/MoonIcon.vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const handleSignIn = async () => {
    isLoading.value = true;
    errorMessage.value = '';
    try {
        const authData = await logIn(email.value, password.value);
        console.log('authData:', authData); // Ajout de log pour diagnostiquer le problème
        if (authData && authData.token) {
            localStorage.setItem('authToken', authData.token); // permet de restez en ligne après
            localStorage.setItem('userId', authData.record.id); // Utilisez authData.record.id
            router.push('/'); //envoie l'utiliseateur à la page d'accueil  si c'est good
        } else {
            throw new Error('Les données de session sont manquantes.');
        }
    } catch (error) {
        errorMessage.value = "Erreur lors de la connexion: " + (error as Error).message;
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div class="m-5">
    <form @submit.prevent="handleSignIn">
        <div class="pb-7 flex flex-col  rounded-lg">
            <label class="text-white text-base font-medium pb-1" for="email">Email:</label>
            <input class="text-black rounded-md p-2" type="email" id="email" v-model="email" required>
        </div>
        <div class="pb-4 flex flex-col  rounded-lg">
            <label class="text-white text-base font-medium pb-1" for="password">Mot de passe:</label>
            <input class="text-black rounded-md p-2" type="password" id="password" v-model="password" required>
        </div>
        <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
        </div>
        <div class="flex justify-center pt-8 pb-5">
        <Button type="submit" :disabled="isLoading" variant="yellow" size="small" text="Se connecter"/>
    </div>
    </form>
    <div>
        <p class="text-white text-center">Pas encore de compte ? <router-link to="/signup" class="text-LightPurple font-medium">Inscrivez-vous !</router-link></p>
    </div>
    <div class="flex  justify-center pt-6">
<CloudIcon class="m-2"/>
<MoonIcon class="m-12"/>
    </div>
</div>
</template>