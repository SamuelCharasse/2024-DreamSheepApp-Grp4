<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Pocketbase from 'pocketbase';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="300" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Connexion !" />
    </div>
    <div>
      <p><label>Email :</label><input type="email" id="email"/></p>
      <p><label>Password :</label><input type="password" id="password"/></p>
      <p><label>Name :</label><input type="text" id="name"/></p>
      <p>
        <button v-on:click="signUp()">Sign Up</button>
        <button v-on:click="signIn()">Sign In</button>
        <button v-on:click="signOut()">Sign Out</button>
      </p>
      <label id="status">You are not yet connected !</label>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
<script>
const pb=new Pocketbase("http://127.0.0.1:8090");
export default {
  components: {
    HelloWorld
  },
  methods: {
    async signUp() {
      await pb.collection('users').create({
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        passwordConfirm:document.getElementById('password').value,
        name:document.getElementById('name').value
      });
      document.getElementById('status').innerText="You are registred, please sign in";
    },
    async signIn(){
      try {
        await pb.collections("users").authWithPassword(
          document.getElementById('email').value,
          document.getElementById('password').value
        );
        if (pb.authStore.baseToken !== null) {
          document.getElementById('status').innerHTML = 'You are now connected !';
        }
      } catch (error) {
        document.getElementById('status').innerHTML = 'Connexion problem, please try again !';
      }
    },
    signOut(){

    }
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
