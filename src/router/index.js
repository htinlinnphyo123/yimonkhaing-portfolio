import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/components/WelcomePage.vue";
import AchievementPage from "@/components/AchievementDetail.vue";
import SkillRelated from "@/components/SkillRelated.vue";
import VolunteeringDetail from "@/components/VolunteeringDetail.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage
  },
  {
    path: '/achievements',
    component:AchievementPage
  },
  {
    path: '/skill-related',
    component:SkillRelated
  },
  {
    path: '/volunteering-experiences',
    component: VolunteeringDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
