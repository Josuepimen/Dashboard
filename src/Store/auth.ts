import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user') || null
  }),
  actions: {
    login(email: string) {
      // Verificar si el usuario está registrado (puedes agregar más validaciones si lo deseas)
      const registeredUser = localStorage.getItem('registeredUser')
      if (registeredUser === email) {
        this.user = email
        localStorage.setItem('user', email) // Guardamos al usuario logueado
      } else {
        throw new Error('Usuario no registrado')
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    register(email: string) {
      // Aquí puedes agregar una validación si el usuario ya está registrado
      localStorage.setItem('registeredUser', email)
      this.user = email // Establecemos al usuario recién registrado
      localStorage.setItem('user', email) // Guardamos al usuario registrado en el localStorage
    },
    isLoggedIn(): boolean {
      return !!this.user
    }
  }
})
