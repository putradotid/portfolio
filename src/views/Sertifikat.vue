<script setup>
import { ref } from "vue";
import cert1 from "@/assets/sertifikat/Cek_Ongkir.jpg";
import cert2 from "@/assets/sertifikat/HTML.jpg";
import cert3 from "@/assets/sertifikat/PHP.jpg";
import cert4 from "@/assets/sertifikat/Laravel_dasar.jpg";
import cert5 from "@/assets/sertifikat/Laravel_OAuth.jpg";
import cert6 from "@/assets/sertifikat/Laravel6.jpg";
import cert7 from "@/assets/sertifikat/Laravel6_API.jpg";
import cert8 from "@/assets/sertifikat/Laravel8.jpg";
import cert9 from "@/assets/sertifikat/MYSQL.jpg";
import cert10 from "@/assets/sertifikat/Role_Mnagement.jpg";
import cert11 from "@/assets/sertifikat/Toko_Online.jpg";

// Daftar sertifikat
const sertifikatList = [
  { id: 1, img: cert1, title: "Certificate CEK ONGKIR APP - CODEPOLITAN" },
  { id: 2, img: cert2, title: "Certificate HTML Dasar - CODEPOLITAN" },
  { id: 3, img: cert3, title: "Certificate PHP Dasar - CODEPOLITAN" },
  { id: 4, img: cert4, title: "Certificate LARAVEL DASAR - CODEPOLITAN" },
  { id: 5, img: cert5, title: "Certificate LARAVEL OAUTH - CODEPOLITAN" },
  { id: 6, img: cert6, title: "Certificate LARAVEL6 - CODEPOLITAN" },
  { id: 7, img: cert7, title: "Certificate LARAVEL6 API - CODEPOLITAN" },
  { id: 8, img: cert8, title: "Certificate LARAVEL8 - CODEPOLITAN" },
  { id: 9, img: cert9, title: "Certificate MYSQL - CODEPOLITAN" },
  { id: 10, img: cert10, title: "Certificate ROLE MANAGEMENT - CODEPOLITAN" },
  { id: 11, img: cert11, title: "Certificate TOKO ONLINE APP WITH PAYMENT GATEWAY - CODEPOLITAN" },
];

// State untuk modal
const showModal = ref(false);
const selectedImage = ref(null);

// Fungsi saat gambar ditekan
const openModal = (img) => {
  selectedImage.value = img;
  showModal.value = true;
};

// Tutup modal
const closeModal = () => {
  showModal.value = false;
  selectedImage.value = null;
};
</script>

<template>
  <div class="bg-zinc-900 text-white min-h-screen p-8 pt-10">
    <div class="w-full">
      <h2 class="text-3xl font-bold text-center mb-10">Sertifikat Preview</h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center"
      >
        <div
          v-for="sertifikat in sertifikatList"
          :key="sertifikat.id"
          class="w-full max-w-md bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
          @click="openModal(sertifikat.img)"
        >
          <img
            :src="sertifikat.img"
            :alt="sertifikat.title"
            class="w-full h-auto object-cover"
          />
          <div class="p-4 text-center">
            <p class="text-lg font-semibold">{{ sertifikat.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Fullscreen -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-zinc-800 bg-opacity-90 flex items-center justify-center z-50 p-4"
      @click.self="closeModal"
    >
      <div class="relative max-w-5xl w-full">
        <button
          @click="closeModal"
          class="absolute -top-6 -right-35 text-white text-3xl font-bold hover:text-red-500"
        >
          &times;
        </button>
        <img
          :src="selectedImage"
          alt="Full View"
          class="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.02);
}
</style>
