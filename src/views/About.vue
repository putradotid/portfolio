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

        <div class="w-full flex px-20 py-20">
            <div class="education px-20 flex-1">
                <div class="flex h-10 space-x-4 items-center">
                    <i class="fa-solid fa-school fa-xl"></i>
                    <h2 class="text-xl font-bold text-center">Education</h2>
                </div>
                <div class="card">
                    <span>2019 - 2021</span>
                    <p>SMK NEGERI 1 BAWANG BANJARNEGARA</p>
                    <p>Rekayasa Perangkat Lunak</p>
                </div>
                <div class="card">
                    <span>2023 - Now</span>
                    <p>UNIVERSITAS AMIKOM PURWOKERTO</p>
                    <p>Teknik Informatika</p>
                </div>
            </div>
            <div class="experience px-20 flex-1">
                <div class="flex h-10 space-x-4 items-center">
                    <i class="fa-solid fa-list-check fa-xl"></i>
                    <h2 class="text-xl font-bold text center">Experience</h2>
                </div>
                <div class="card">
                    <span>2022 - 2023</span>
                    <p>STAFF AND MAREKTING SDTEL</p>
                    <p>SDTEL Matematika Cepat Bekerja selama 1,5 tahun sebagai Staff dan Marketing, bertanggung jawab menjalin kerja sama dengan sekolah dasar, mengelola promosi langsung, serta melakukan pendekatan personal kepada calon siswa, guru, dan orang tua untuk mengenalkan metode belajar cepat.</p>
                </div>
                <div class="card">
                    <span>2024 - 2025</span>
                    <p>FREELANCE AND MENTOR PKL</p>
                    <p>Kombas Digital Marketing Bekerja selama kurang lebih satu tahun, dimulai sebagai freelancer dalam proyek digital marketing, dan dipercaya menjadi mentor PKL selama 3 bulan. Membimbing peserta dalam pengeditan buku, pembuatan dan analisis konten untuk kebutuhan pemasaran digital.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>