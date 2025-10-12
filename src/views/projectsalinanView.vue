<script setup>
import Project from "@/assets/project/image.png"
import Project2 from "@/assets/project/image2.png"
import Project3 from "@/assets/project/image3.png"

// contoh placeholder jika kamu belum punya gambar lain
import Placeholder from "@/assets/project/image.png"

const projectList = [
  {
    id: 1,
    img: Project,
    title: "Vue Start",
    link: "https://vue-start-phi.vercel.app/",
  },
  {
    id: 2,
    img: Project2,
    title: "Gunung Jawa",
    link: "https://gunung-jawa.vercel.app/",
  },
  {
    id: 3,
    img: Project3,
    title: "Daging-Ku",
    link: "https://daging-ku.vercel.app/",
  },
  {
    id: 4,
    img: Placeholder,
    title: "Coming Soon",
    link: "#",
  },
  {
    id: 5,
    img: Placeholder,
    title: "Coming Soon",
    link: "#",
  },
  {
    id: 6,
    img: Placeholder,
    title: "Coming Soon",
    link: "#",
  },
  {
    id: 6,
    img: Placeholder,
    title: "Coming Soon",
    link: "#",
  },
  {
    id: 6,
    img: Placeholder,
    title: "Coming Soon",
    link: "#",
  },
  {
    id: 6,
    img: Placeholder,
    title: "Coming Soon",
    link: "#",
  },
]
</script>

<template>
  <div class="bg-zinc-900 text-white min-h-screen p-8 pt-10">
    <div class="w-full">
      <h2 class="text-3xl font-bold text-center mb-10">Project Preview</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <div
          v-for="project in projectList"
          :key="project.id"
          class="group relative w-full max-w-md bg-zinc-800 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <!-- Gambar project -->
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <!-- Overlay teks muncul saat hover -->
          <div
            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          >
            <p class="text-lg font-semibold text-center px-2">
              {{ project.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahan opsional untuk transisi halus */
img {
  transition: transform 0.4s ease;
}
</style>
