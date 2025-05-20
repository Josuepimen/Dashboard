<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white  flex flex-col items-center justify-center p-6">
    <div class="bg-gray-700 rounded-2xl shadow-md p-8 w-full max-w-xl ">
      <h2 class="text-2xl font-semibold mb-6 text-gray-700 text-center">Configuración</h2>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-gray-300 font-extrabold text-4xl">Modo oscuro</span>
          <input type="checkbox" v-model="darkMode" class="w-5 h-5" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-gray-300 font-extrabold text-4xl">Notificaciones</span>
          <input type="checkbox" v-model="notifications" class="w-5 h-5" />
        </div>
      </div>

      <div class="mt-8 text-center">
        <button class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-lg transition-all">
          Guardar configuración
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const darkMode = ref(false)
const notifications = ref(true)
</script>
