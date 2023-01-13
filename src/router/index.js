import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapaView from '../views/MapaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

   {
    path: '/mapa',
    name: 'mapa',
    component: MapaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
