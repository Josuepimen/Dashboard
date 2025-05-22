import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as { title: string, completed: boolean }[] // Cargar tareas desde localStorage
  }),
  getters: {
    completedCount: (state) => state.tasks.filter(t => t.completed).length
  },
  actions: {
    addTask(task: { title: string, completed: boolean }) {
      this.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(this.tasks)) // Guardar tareas en localStorage
    }
  }
})
