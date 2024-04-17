import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/components/WelcomePage.vue";
import AchievementPage from "@/components/AchievementDetail.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage
  },
  {
    path: '/achievements',
    component:AchievementPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
