<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-4">¡Bienvenido al Dashboard!</h1>
    <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Cerrar sesión</button>
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
