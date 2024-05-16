<script setup lang="ts">
</script>
<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <i class="fa fa-home"></i> Home
        </router-link>
      </li>
      <li>
        <router-link to="/diary">
          <i class="fa fa-book"></i> Diary
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <i class="fa fa-user"></i> Profile
        </router-link>
      </li>
      <li>
        <router-link to="/shop">
          <i class="fa fa-shopping-cart"></i> Shop
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <i class="fa fa-cog"></i> Settings
        </router-link>
      </li>
    </ul>
  </nav>
</template>