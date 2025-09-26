<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'

const is_expanded = ref(false)

</script>

<template>
  <header>
    <div class="bg-neutral-950 text-white z-10 fixed w-full top-0">
        <div class="flex justify-between items-center p-2 max-w-7xl mx-auto">
            <div class="flex items-center space-x-4">
              <img src="@/assets/MyLogo.png" alt="MyLogo" class="w-12 h-12 rounded-full"/>
              <h1 class="text-lg font-extrabold">aprll_028</h1>
            </div>
            <button class="md:hidden mr-3" @click="is_expanded = !is_expanded">
              <i v-if="!is_expanded" class="fa-solid fa-bars fa-xl"></i>
              <i v-else class="fa-solid fa-xmark fa-xl"></i>
            </button>
            <nav class="flex space-x-6 text-sm font-semibold md:flex" 
              :class="[is_expanded ? 'flex' : 'hidden' ,
                'absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-950 md:bg-transparent flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 text-sm font-semibold px-6 md:px-0 py-4 md:py-0 overflow-auto transition-all duration-300 ease-in-out'
              ]">
              <router-link to="/">Home</router-link>
              <router-link to="/project">Project</router-link>
              <router-link to="/sertifikat">Sertifikat</router-link>
              <router-link to="/blog">Blog</router-link>
              <router-link to="/about">About</router-link>
            </nav>
        </div>
    </div>
  </header>
  <div class="content mt-16 bg-zinc-900 text-white min-h-screen">
    <RouterView />
  </div>
  <footer>
    <div class="bg-neutral-950 text-neutral-400 p-2 text-center">
      <p class="text-xs">&copy; 2024 Aprliyanto Dwi Saputra. All rights reserved.</p>
      <p class="text-xs">Build & Design by Me</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
