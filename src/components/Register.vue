<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 text-white">
    <div class="w-full max-w-md p-8 space-y-8 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 transform transition-all duration-700 hover:scale-[1.02] animate__animated animate__fadeIn">
      <h2 class="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">Registrarse</h2>
      
      <form @submit.prevent="register" class="space-y-6">
        <div>
          <label for="reg-email" class="sr-only">Correo electrónico</label>
          <input
            id="reg-email"
            v-model="email"
            type="email"
            autocomplete="email"
            required
            placeholder="Correo electrónico"
            class="appearance-none relative block w-full px-4 py-3 border-2 border-gray-600 rounded-lg placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 sm:text-base"
          />
        </div>
        <div>
          <label for="reg-password" class="sr-only">Contraseña</label>
          <input
            id="reg-password"
            v-model="password"
            type="password"
            autocomplete="new-password"
            required
            placeholder="Contraseña"
            class="appearance-none relative block w-full px-4 py-3 border-2 border-gray-600 rounded-lg placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 sm:text-base"
          />
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg shadow-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
        >
          Registrarse
        </button>
      </form>
      
      <p class="mt-8 text-center text-base text-gray-400">
        ¿Ya tienes cuenta? 
        <router-link to="/login" class="font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300">Inicia sesión</router-link>
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
    Swal.fire({
      title: 'Error',
      text: 'Todos los campos son obligatorios',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return;
  }

  try {
    auth.register(email.value);
    Swal.fire({
      title: '¡Registrado!',
      text: 'Ahora puedes iniciar sesión',
      icon: 'success',
      confirmButtonText: 'Continuar'
    }).then(() => {
      router.push('/login');
    });
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : String(error);
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