<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg opacity-90">
      <h2 class="text-3xl font-extrabold text-center text-gray-800">Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
        <button
          type="submit"
          class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md shadow-lg hover:shadow-xl transition-all"
        >
          Iniciar sesión
        </button>
      </form>
      <!-- Enlace para redirigir al registro -->
      <p class="mt-4 text-center">
        ¿No tienes cuenta? 
        <router-link to="/register" class="text-blue-600">Regístrate aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useAuthStore } from '../Store/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const auth = useAuthStore()

const login = () => {
  if (!email.value || !password.value) {
    Swal.fire('Error', 'Todos los campos son obligatorios', 'error')
    return
  }

  try {
    auth.login(email.value)
    Swal.fire('¡Éxito!', `Bienvenido ${email.value}`, 'success').then(() => {
      router.push('/dashboard') // Redirige al Dashboard después de iniciar sesión correctamente
    })
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Ocurrió un error inesperado'
    Swal.fire('Error', errorMessage, 'error') // Muestra un error si el login no es válido
  }
}
</script>

<style scoped>
/* Puedes agregar más estilos aquí si lo deseas */
</style>
