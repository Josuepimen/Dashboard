<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 text-white">
    <div class="w-full max-w-md p-8 space-y-8 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 transform transition-all duration-700 hover:scale-[1.02] animate__animated animate__fadeIn">
      <h2 class="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">Iniciar Sesión</h2>
      
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" class="sr-only">Correo electrónico</label>
          <input
            id="email"
            v-model="email"
            type="email"
            autocomplete="email"
            required
            placeholder="Correo electrónico"
            class="appearance-none relative block w-full px-4 py-3 border-2 border-gray-600 rounded-lg placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 sm:text-base"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            autocomplete="current-password"
            required
            placeholder="Contraseña"
            class="appearance-none relative block w-full px-4 py-3 border-2 border-gray-600 rounded-lg placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 sm:text-base"
          />
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
        >
          Iniciar sesión
        </button>
      </form>
      
      <p class="mt-8 text-center text-base text-gray-400">
        ¿No tienes cuenta? 
        <router-link to="/register" class="font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">Regístrate aquí</router-link>
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
    Swal.fire({
      title: 'Error',
      text: 'Todos los campos son obligatorios',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return;
  }

  try {
    auth.login(email.value);
    Swal.fire({
      title: '¡Éxito!',
      text: `Bienvenido ${email.value}`,
      icon: 'success',
      confirmButtonText: 'Continuar'
    }).then(() => {
      router.push('/dashboard'); 
    });
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Ocurrió un error inesperado';
    Swal.fire({
      title: 'Error',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'Entendido'
    });
  }
};
</script>

<style scoped>
@import 'animate.css';
</style>