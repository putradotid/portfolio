<script setup>
import Project from "@/assets/project/image.png"
import Project2 from "@/assets/project/image2.png"
import Project3 from "@/assets/project/image3.png"
import Project4 from "@/assets/project/image4.png"
</script>

<template>
    <div class="bg-zinc-900 text-white min-h-screen p-8 pt-10">
        <div class="w-full">
            <h2 class="text-3xl font-bold text-center mb-10">Project Preview</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-y-8 md:gap-4">
                <div class="img">
                    <a href="https://vue-start-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img :src="Project" alt="project" class="object-cover shadow-lg h-42 md:h-48 mx-auto"/>
                    </a>
                </div>
                <div class="img">
                    <a href="https://gunung-jawa.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img :src="Project2" alt="project" class="object-cover shadow-lg h-42 md:h-48 mx-auto"/>
                    </a>
                </div>
                <div class="img">
                    <a href="https://daging-ku.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img :src="Project3" alt="project" class="object-cover shadow-lg h-42 md:h-48 mx-auto"/>
                    </a>
                </div>
                <div class="img">
                    <a href="https://solar-company-profile.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img :src="Project4" alt="project" class="object-cover shadow-lg h-42 md:h-48 mx-auto"/>
                    </a>
                </div>
                <div class="img">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img :src="P" alt="project" class="object-cover shadow-lg h-42 md:h-48 mx-auto"/>
                    </a>
                </div>
                <div class="img">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img :src="P" alt="project" class="object-cover shadow-lg h-42 md:h-48 mx-auto"/>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>