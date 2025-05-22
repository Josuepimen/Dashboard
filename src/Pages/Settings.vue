<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
    <div class="bg-gray-700 rounded-2xl shadow-md p-8 w-full max-w-xl">
      <h2 class="text-2xl font-semibold mb-6 text-center text-white">Configuración</h2>

      <div class="space-y-4 mb-6">
        <div class="flex items-center justify-between">
          <span class="text-gray-300 font-extrabold text-4xl">Modo oscuro</span>
          <input type="checkbox" v-model="darkMode" class="w-5 h-5" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-gray-300 font-extrabold text-4xl">Notificaciones</span>
          <input type="checkbox" v-model="notifications" class="w-5 h-5" />
        </div>
      </div>

      <div class="space-y-4 text-center">
        <button @click="mostrarTareas" class="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-md">
          Ver Tareas Guardadas
        </button>
        <button @click="mostrarProyectos" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md">
          Ver Proyectos Guardados
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../Store/TaskStore'
import { useProjectStore } from '../Store/ProjectStore'
import Swal from 'sweetalert2'

const darkMode = ref(false)
const notifications = ref(true)

const taskStore = useTaskStore()
const projectStore = useProjectStore()

const mostrarTareas = () => {
  if (taskStore.tasks.length === 0) {
    Swal.fire('No hay tareas', 'Aún no has agregado tareas.', 'info')
  } else {
    const taskList = taskStore.tasks.map(t => `<li>📝 ${t.title}</li>`).join('')
    Swal.fire({
      title: 'Tareas Guardadas',
      html: `<ul style="text-align:left;">${taskList}</ul>`,
      icon: 'success'
    })
  }
}

const mostrarProyectos = () => {
  if (projectStore.projects.length === 0) {
    Swal.fire('No hay proyectos', 'Aún no has agregado proyectos.', 'info')
  } else {
    const projectList = projectStore.projects.map(p => `<li>📁 ${p.name}</li>`).join('')
    Swal.fire({
      title: 'Proyectos Guardados',
      html: `<ul style="text-align:left;">${projectList}</ul>`,
      icon: 'success'
    })
  }
}
</script>
