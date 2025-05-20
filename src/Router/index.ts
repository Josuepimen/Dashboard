import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../Pages/Dashboard.vue'
import { useAuthStore } from '../Store/auth' 
import Perfil from '../Pages/Perfil.vue'
import Settings from '../Pages/Settings.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: Perfil },
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, _from, next) => {
  const auth = useAuthStore()

  
  if (to.path === '/dashboard' && !auth.isLoggedIn()) {
    next('/register') 
  } else {
    next()
  }
})

export default router
