<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold text-center">Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            class="w-full px-4 py-2 border rounded-md"
          />
          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'

const email = ref('')
const password = ref('')

const login = () => {
  if (!email.value || !password.value) {
    Swal.fire('Error', 'Todos los campos son obligatorios', 'error')
    return
  }
  Swal.fire('¡Éxito!', 'Inicio de sesión simulado', 'success')
}
</script>

