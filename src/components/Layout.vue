<template>
  <div class="flex min-h-screen bg-gray-100 relative"> 

    <aside class="w-64 bg-white shadow-xl p-6 space-y-6 z-10">
      <h2 class="text-2xl font-bold text-indigo-600 text-center">Mi Panel</h2>
      <nav class="space-y-4">
        <router-link to="/dashboard" class="block py-2 px-4 rounded-md hover:bg-indigo-300" :class="{ 'bg-indigo-400': $route.path === '/dashboard' }">
          📊 Dashboard
        </router-link>
        <router-link to="/profile" class="block py-2 px-4 rounded-md hover:bg-indigo-300" :class="{ 'bg-indigo-400': $route.path === '/profile' }">
          👤 Perfil
        </router-link>
        <router-link to="/settings" class="block py-2 px-4 rounded-md hover:bg-indigo-300" :class="{ 'bg-indigo-400': $route.path === '/settings' }">
          ⚙️ Configuración
        </router-link>
        <button @click="logout" class="w-full text-left py-2 px-4 rounded-md hover:bg-red-300 text-red-600">
          🔓 Cerrar sesión
        </button>
      </nav>
    </aside>

    <main class="flex-1 p-8 z-0">
      <slot />
    </main>
  </div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../Store/auth'

const router = useRouter()
const auth = useAuthStore()

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>
