<script setup lang="ts">
import Pocketbase from 'pocketbase';
const pb = new Pocketbase("http://127.0.0.1:8090");
</script>

<template>
    <div class="login">
        <h2 class="text-slate-50">Login</h2>
    </div>
</template>