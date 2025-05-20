import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './Router/index' 
import 'animate.css';
import './style.css'

const app = createApp(App)
app.use(createPinia()) 
app.use(router)        
app.mount('#app')
