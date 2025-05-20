import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './Router/index' // ✅ Importar router

const app = createApp(App)
app.use(createPinia()) // ✅ Activar Pinia
app.use(router)        // ✅ Activar Router
app.mount('#app')
