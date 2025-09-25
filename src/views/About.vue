<script setup>
import Foto from "@/assets/MyFoto.png"
</script>

<template>
    <div class="bg-zinc-900 text-white min-h-screen pt-20">
        <div class="w-full">
            <div class="flex mx-auto flex-row items-center space-x-10 justify-center">
                <img :src="Foto" alt="Putra" class="object-cover object-bottom-right rounded-full shadow-lg h-52 w-52"/>
                <div class="w-full max-w-2xl">
                    <h2 class="text-3xl font-bold text-center mb-10">About Me</h2>
                    <p class="leading-relaxed text-center">
                        Hello! I'm Aprliyanto Dwi Saputra, an Informatics student with a passion for technology and innovation. 
                        I am dedicated to exploring new knowledge and pushing the boundaries of what is possible in the tech world. 
                        With a strong foundation in programming and design, I strive to create solutions that are both logical and creative. 
                        My journey in the field of informatics has been driven by curiosity and a desire to make a positive impact through technology.
                    </p>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col md:flex-row px-10 md:px-20 py-20 gap-10">
            <div class="experience flex-1">
                <div class="flex items-center space-x-4 mb-6">
                <i class="fa-solid fa-list-check text-2xl pl-3"></i>
                <h2 class="text-2xl font-bold text-center md:text-left">Experience</h2>
                </div>

                <div class="bg-zinc-800 p-6 rounded-lg shadow mb-6">
                    <span class="block text-sm text-stone-400 mb-2">2022 - 2023</span>
                    <p class="font-semibold">STAFF AND MARKETING SDTEL</p>
                    <p class="text-sm text-stone-300 mt-2">
                        SDTEL Matematika Cepat. Bekerja selama 1,5 tahun sebagai Staff dan Marketing,
                        bertanggung jawab menjalin kerja sama dengan sekolah dasar, mengelola promosi langsung,
                        serta melakukan pendekatan personal kepada calon siswa, guru, dan orang tua untuk
                        mengenalkan metode belajar cepat.
                    </p>
                </div>

                <div class="bg-zinc-800 p-6 rounded-lg shadow">
                    <span class="block text-sm text-stone-400 mb-2">2024 - 2025</span>
                    <p class="font-semibold">FREELANCE AND MENTOR PKL</p>
                    <p class="text-sm text-stone-300 mt-2">
                        Kombas Digital Marketing. Bekerja selama kurang lebih satu tahun, dimulai sebagai freelancer
                        dalam proyek digital marketing, dan dipercaya menjadi mentor PKL selama 3 bulan. Membimbing
                        peserta dalam pengeditan buku, pembuatan dan analisis konten untuk kebutuhan pemasaran digital.
                    </p>
                </div>
            </div>

            <div class="education flex-1">
                <div class="flex items-center space-x-4 mb-6">
                <i class="fa-solid fa-school text-2xl pl-3"></i>
                <h2 class="text-2xl font-bold text-center md:text-left">Education</h2>
                </div>

                <div class="bg-zinc-800 p-6 rounded-lg shadow mb-6">
                    <span class="block text-sm text-stone-400 mb-2">2019 - 2021</span>
                    <p class="font-semibold">SMK NEGERI 1 BAWANG BANJARNEGARA</p>
                    <p class="text-sm text-stone-300">Rekayasa Perangkat Lunak</p>
                </div>

                <div class="bg-zinc-800 p-6 rounded-lg shadow">
                    <span class="block text-sm text-stone-400 mb-2">2023 - Now</span>
                    <p class="font-semibold">UNIVERSITAS AMIKOM PURWOKERTO</p>
                    <p class="text-sm text-stone-300">Teknik Informatika</p>
                </div>
            </div>
        </div>


        <div class="maps w-full px-20 pb-20">
            <h2 class="text-3xl font-bold text-center mb-10">My Home</h2>
            <iframe class="rounded-lg shadow-lg h-100 w-full"
                src="https://www.google.com/maps?q=-7.398976461906811,109.65420204629316&hl=es;z=14&output=embed"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</template>

<style scoped>

</style>