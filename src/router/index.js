import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import SertifikatView from '../views/Sertifikat.vue'
import BlogView from '../views/Blog.vue'
import ContactMeView from '../views/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
    },
    {
      path: '/sertifikat',
      name: 'sertifikat',
      component: SertifikatView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/contactme',
      name: 'contactme',
      component: ContactMeView,
    },
  ],
})

export default router
