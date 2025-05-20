import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user') || null
  }),
  actions: {
    login(email: string) {
   
      const registeredUser = localStorage.getItem('registeredUser')
      if (registeredUser === email) {
        this.user = email
        localStorage.setItem('user', email) 
      } else {
        throw new Error('Usuario no registrado')
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    register(email: string) {

      localStorage.setItem('registeredUser', email)
      this.user = email 
      localStorage.setItem('user', email)
    },
    isLoggedIn(): boolean {
      return !!this.user
    }
  }
})
