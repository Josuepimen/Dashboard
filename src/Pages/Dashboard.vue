<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white flex flex-col items-center">
    <header class="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg mb-8 animate__animated animate__fadeInDown">
      <h1 class="text-3xl font-extrabold text-blue-400 tracking-wide">Mi Dashboard</h1>
      <nav>
        <ul class="flex space-x-6">
          <li><router-link to="/settings" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Ajustes</router-link></li>
          <li><router-link to="/profile" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Perfil</router-link></li>
          <li>
            <button 
              @click="logout" 
              className="text-red-400 hover:text-red-300 transition-colors duration-300 font-medium"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main class="w-full max-w-6xl flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeInUp">
      
      <div class="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-gray-700 transform transition-all duration-500 hover:scale-[1.01]">
        <h2 class="text-5xl font-extrabold text-white mb-4 leading-tight">¡Bienvenido de nuevo!</h2>
        <p class="text-xl text-gray-300">Aquí tienes un resumen de tu actividad reciente.</p>
      </div>

      <div class="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700 transform transition-all duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-bold text-blue-400 mb-4">Estadísticas Rápidas</h3>
        <ul class="space-y-3 text-lg text-gray-300">
          <li>Proyectos Activos: <span class="font-semibold text-white">7</span></li>
          <li>Tareas Completadas: <span class="font-semibold text-white">42</span></li>
          <li>Notificaciones Nuevas: <span class="font-semibold text-yellow-400">3</span></li>
        </ul>
      </div>

      <div class="md:col-span-1 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700 transform transition-all duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-bold text-green-400 mb-4">Actividad Reciente</h3>
        <ul class="space-y-3 text-lg text-gray-300">
          <li><span class="text-gray-400 text-sm">Hace 10 min:</span> Tarea 'Diseñar Landing' completada.</li>
          <li><span class="text-gray-400 text-sm">Hace 1 hr:</span> Nuevo comentario en Proyecto 'Alpha'.</li>
          <li><span class="text-gray-400 text-sm">Ayer:</span> Documento 'Especificaciones V2' subido.</li>
        </ul>
      </div>

      <div class="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700 transform transition-all duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-bold text-purple-400 mb-4">Acciones Rápidas</h3>
        <div class="flex flex-col space-y-4">
          <button class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5">Crear Nueva Tarea</button>
          <button class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5">Añadir Proyecto</button>
        </div>
      </div>
    </main>

    <footer class="w-full max-w-6xl mt-8 py-4 px-6 text-center text-gray-400 text-sm">
      © 2024 Mi Dashboard Personalizado. Todos los derechos reservados.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../Store/auth'
import Swal from 'sweetalert2'; 

const router = useRouter()
const auth = useAuthStore()

const logout = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¿Quieres cerrar tu sesión?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      auth.logout();
      router.push('/login');
      Swal.fire(
        '¡Sesión cerrada!',
        'Has cerrado tu sesión exitosamente.',
        'success'
      );
    }
  });
};
</script>

<style scoped>
@import 'animate.css';
</style>