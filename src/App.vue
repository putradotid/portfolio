<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="bg-neutral-950 text-white z-index-10 fixed w-full top-0">
        <div class="flex justify-between items-center p-2 max-w-7xl mx-auto">
            <div class="flex items-center space-x-4">
              <img src="@/assets/MyLogo.png" alt="MyLogo" class="w-12 h-12 rounded-full"/>
              <h1 class="text-lg font-extrabold">aprll_028</h1>
            </div>
            <nav class="flex space-x-6 text-sm font-semibold">
              <router-link to="/">Home</router-link>
              <router-link to="/">Project</router-link>
              <router-link to="/">Sertifikat</router-link>
              <router-link to="/">Blog</router-link>
              <router-link to="/">Contact Me</router-link>
            </nav>
        </div>
    </div>
  </header>
  <div class="content mt-16 bg-zinc-900 text-white min-h-screen">
    <RouterView />
  </div>
  <footer>
    <div class="bg-neutral-950 text-neutral-400 p-2 text-center">
      <p class="text-sm">&copy; 2024 Aprliyanto Dwi Saputra. All rights reserved.</p>
      <p class="text-sm">Build & Design by Me</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
