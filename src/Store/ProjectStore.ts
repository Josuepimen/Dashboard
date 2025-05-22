import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: JSON.parse(localStorage.getItem('projects') || '[]') as { name: string, file: File }[] // Cargar proyectos desde localStorage
  }),
  actions: {
    addProject(project: { name: string, file: File }) {
      this.projects.push(project)
      localStorage.setItem('projects', JSON.stringify(this.projects)) // Guardar proyectos en localStorage
    }
  }
})
