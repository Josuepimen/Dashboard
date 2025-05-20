import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../Pages/Dashboard.vue'
import { useAuthStore } from '../Store/auth' // 👈 Importamos el store

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🛡️ Protección de ruta: impide entrar a /dashboard si no hay login
router.beforeEach((to, _from, next) => {
  const auth = useAuthStore()

  // Si el destino es /dashboard y no está logueado, redirigir a /register
  if (to.path === '/dashboard' && !auth.isLoggedIn()) {
    next('/register') // Redirige a la página de registro si no estás logueado
  } else {
    next()
  }
})

export default router
