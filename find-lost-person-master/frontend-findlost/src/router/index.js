import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import LostFound from '../views/LostFound.vue'
import Lost from '../views/Lost.vue'
import Found from '../views/Found.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name:'Register',
    component: Register
  },
  {
    path: '/login',
    name:'Login',
    component: Login
  },
  {
    path: '/lostfound',
    name:'LostFound',
    component: LostFound
  },
  {
    path: '/lost',
    name:'Lost',
    component: Lost
  },
  {
    path: '/found',
    name:'Found',
    component: Found
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
