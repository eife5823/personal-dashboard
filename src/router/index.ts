import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('@/views/weather/Weather.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
