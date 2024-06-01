<script setup lang="ts">
import { SignUp } from "@/assets/backend.mjs";
import type { users } from "@/type.ts";


</script>

<template>
    <div class="profile">
        <p><label>E-mail</label><input type="email" id="email"/></p>
        <p><label>Password</label><input type="password" id="Password"/></p>
        <p><label>Name</label><input type="text" id="name"/></p>
        <p><button v-on:click="SignUp()">Sign Up</button></p>
        <h1>test</h1>
    </div>
</template>