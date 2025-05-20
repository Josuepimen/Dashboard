import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userEmail: '',
  }),
  actions: {
    login(email: string) {
      this.isAuthenticated = true
      this.userEmail = email
    },
    logout() {
      this.isAuthenticated = false
      this.userEmail = ''
    },
  },
})
