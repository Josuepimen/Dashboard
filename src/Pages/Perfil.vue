<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
    <div class="bg-gray-700 rounded-2xl shadow-lg p-8 w-full max-w-xl">
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-300">Perfil del Usuario</h2>
      <div class="space-y-4">
        <div>
          <label class="block font-medium text-gray-700 mb-1">Nombre</label>
          <input type="text" v-model="name" class="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block font-medium text-gray-700 mb-1">Correo electrónico</label>
          <input type="email" v-model="email" class="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="text-center">
          <button class="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-lg transition-all">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Josue Pimentel')
const email = ref('Jdpimen47@gmail.com')
</script>
