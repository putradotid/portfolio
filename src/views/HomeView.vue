<script setup>
import Foto from "@/assets/MyFoto.png"
import Ilustrator from "@/assets/icons/adobe-illustrator.png"
import Photoshop from "@/assets/icons/adobe-photoshop.png"
import Javascript from "@/assets/icons/javascript.png"
import MySql from "@/assets/icons/MySql.png"
import Ae from "@/assets/icons/adobe-after-effects.png"
import Nuxt from "@/assets/icons/nuxt.png"
import Firebase from "@/assets/icons/firebase.png"
import Tailwind from "@/assets/icons/tailwind.png"

</script>

<template>
  <div class="bg-zinc-900 text-white min-h-screen p-8 pt-20">
    <div class="hero max-w-4xl mx-50 grid grid-cols-2 items-center gap-8 mt-5">
      <div class="text">
        <span class="font-bold text-stone-500">ABOUT ME</span>
        <h1 class="text-3xl font-bold">I Design with Logic, Code with Creativity.</h1>
        <p class="mt-4 leading-relaxed">
          I am an Informatics student with a strong dedication and enthusiasm 
          for exploring knowledge and innovation in technology.
        </p>
        <div class="flex space-x-4 mt-10">
          <i class="fa-solid fa-envelope fa-xl"></i>
          <i class="fa-brands fa-whatsapp fa-xl"></i>
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-github fa-xl"></i>
        </div>
      </div>
      <div class="img">
        <img :src="Foto" alt="Putra" class="object-cover object-bottom-right shadow-lg h-80 w-80 mx-40"/>
      </div>
    </div>

    <div class="skill w-full pt-40 pb-3">
      <h2 class="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div class="grid grid-cols-4 gap-5">
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">HTML & </h3>
          <i class="fa-brands fa-html5 fa-2xl"></i>
          <i class="fa-brands fa-css3 fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Adobe Ilustrator</h3>
          <img :src="Ilustrator" alt="ilutrator" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">PHP</h3>
          <i class="fa-brands fa-php fa-2xl"></i>
          <img src="" alt="">
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Photoshop</h3>
          <img :src="Photoshop" alt="photoshop" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Javascript</h3>
          <img :src="Javascript" alt="javascript" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">MySql</h3>
          <img :src="MySql" alt="mysql" class="h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">After Effect</h3>
          <img :src="Ae" alt="after-effects" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Bootstrap</h3>
          <i class="fa-brands fa-bootstrap fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Tailwin</h3>
          <img :src="Tailwind" alt="tailwin" class="h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Nuxt</h3>
          <img :src="Nuxt" alt="nuxt" class="h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Laravel</h3>
          <i class="fa-brands fa-laravel fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Vue</h3>
          <i class="fa-brands fa-vuejs fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">React</h3>
          <i class="fa-brands fa-react fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Github</h3>
          <i class="fa-brands fa-github fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2">Firebase</h3>
          <img :src="Firebase" alt="firebase" class="h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2" >Figma</h3>
          <i class="fa-brands fa-figma fa-2xl"></i>
        </div>
      </div>
    </div>

  </div>
</template>


