<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">Registrarse</h2>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Correo" class="w-full mb-3 p-2 border rounded" />
        <input v-model="password" type="password" placeholder="Contraseña" class="w-full mb-3 p-2 border rounded" />
        <button class="w-full bg-green-600 text-white p-2 rounded">Registrarse</button>
      </form>
      <p class="mt-4 text-center">
        ¿Ya tienes cuenta? <router-link to="/login" class="text-blue-600">Inicia sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useAuthStore } from '../Store/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

const register = () => {
  if (!email.value || !password.value) {
    Swal.fire('Error', 'Todos los campos son obligatorios', 'error')
    return
  }

  try {
    auth.register(email.value)
    Swal.fire('¡Registrado!', 'Ahora puedes iniciar sesión', 'success').then(() => {
      router.push('/login')
    })
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : String(error)
    Swal.fire('Error', errorMessage, 'error')
  }
}
</script>
