<script setup>
import Foto from "@/assets/MyFoto.png"
import Ilustrator from "@/assets/icons/adobe-illustrator.png"
import Photoshop from "@/assets/icons/adobe-photoshop.png"
import Javascript from "@/assets/icons/javascript.png"
import MySql from "@/assets/icons/mysql.png"
import Ae from "@/assets/icons/adobe-after-effects.png"
import Nuxt from "@/assets/icons/nuxt.png"
import Flutter from "@/assets/icons/flutter.png"
import Firebase from "@/assets/icons/firebase.png"
import Tailwind from "@/assets/icons/tailwind.png"

const openLink = (url) => {
  window.open(url, "_blank"); // buka di tab baru
};

const sendEmail = () => {
  const email = "aprildwi999@gmail.com"; // ganti dengan email kamu
  const subject = "Halo, saya tertarik dengan portofoliomu!";
  const body = "Halo, saya ingin berdiskusi lebih lanjut tentang proyekmu.";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, "_blank");
};
</script>

<template>
  <div class="bg-zinc-900 text-white min-h-screen w-full p-0 md:p-8 pt-10 md:pt-20">
    <div class="hero max-w-4xl mx-10 md:mx-50 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-5 ">
      <div class="text">
        <span class="font-bold text-stone-500">ABOUT ME</span>
        <h1 class="text-3xl font-bold">I Design with Logic, Code with Creativity.</h1>
        <p class="mt-4 leading-relaxed">
          I am an Informatics student with a strong dedication and enthusiasm 
          for exploring knowledge and innovation in technology.
        </p>
        <div class="flex space-x-4 mt-10">
          <!-- Email -->
          <i class="fa-solid fa-envelope fa-xl cursor-pointer hover:text-red-400 transition" @click="sendEmail"></i>
          <!-- WhatsApp -->
          <i class="fa-brands fa-whatsapp fa-xl cursor-pointer hover:text-green-400 transition" @click="openLink('https://wa.me/62895358255244')"></i>
          <!-- Instagram -->
          <i class="fa-brands fa-instagram fa-xl cursor-pointer hover:text-pink-400 transition" @click="openLink('https://instagram.com/aprll_028')"></i>
          <!-- Github -->
          <i class="fa-brands fa-github fa-xl cursor-pointer hover:text-gray-400 transitio" @click="openLink('https://github.com/putradotid')"></i>
        </div>
      </div>
      <div class="img mt-10 md:mt-0">
        <img :src="Foto" alt="Putra" class="object-cover object-bottom-right shadow-lg h-80 w-80 mx-3 md:mx-40"/>
      </div>
    </div>

    <div class="skill w-full pt-20 md:pt-40 pb-3">
      <h2 class="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div class="grid grid-cols-4 gap-3 md:gap-5 mx-3 md:mx-5">
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-7 text-xs md:text-sm">HTML & CSS</h3>
          <div class="flex mx-auto ml-1 justify-center space-x-0.5 md:space-x-4">
            <i class="fa-brands fa-html5 fa-2xl"></i>
            <i class="fa-brands fa-css3 fa-2xl"></i>
          </div>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Adobe Ilustrator</h3>
          <img :src="Ilustrator" alt="ilutrator" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mt-1 md:mt-0 mb-4 md:mb-3 text-xs md:text-sm">PHP</h3>
          <i class="fa-brands fa-php fa-2xl"></i>
          <img src="" alt="">
        </div>
        <div class="skill-item bg-zinc-800 pl-1 pt-4 md:p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-4 md:mb-2 text-xs md:text-sm">Photoshop</h3>
          <img :src="Photoshop" alt="photoshop" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Javascript</h3>
          <img :src="Javascript" alt="javascript" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-4 md:mb-2 text-xs md:text-sm">MySql</h3>
          <img :src="MySql" alt="mysql" class="h-8 md:h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-2 md:p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">After Effect</h3>
          <img :src="Ae" alt="after-effects" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-3 md:p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-5 md:mb-2 text-xs md:text-sm">Bootstrap</h3>
          <i class="fa-brands fa-bootstrap fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Tailwin</h3>
          <img :src="Tailwind" alt="tailwin" class="h-8 md:h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">React</h3>
          <i class="fa-brands fa-react fa-2xl"></i>
          <!-- <img :src="Nuxt" alt="nuxt" class="h-8 md:h-10 mx-auto"/> -->
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Laravel</h3>
          <i class="fa-brands fa-laravel fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Vue</h3>
          <i class="fa-brands fa-vuejs fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Flutter</h3>
          <img :src="Flutter" alt="flutter" class="w-10 h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Github</h3>
          <i class="fa-brands fa-github fa-2xl"></i>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Firebase</h3>
          <img :src="Firebase" alt="firebase" class="h-10 mx-auto"/>
        </div>
        <div class="skill-item bg-zinc-800 p-4 rounded-lg text-center">
          <h3 class="font-semibold mb-2 text-xs md:text-sm">Figma</h3>
          <i class="fa-brands fa-figma fa-2xl"></i>
        </div>
      </div>
    </div>

  </div>
</template>


