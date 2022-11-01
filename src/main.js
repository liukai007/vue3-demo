import { createApp } from 'vue'
import App from './App.vue'
import FirstOneName from './components/FirstOneName.vue'
import axios from "axios";

const app =createApp(App)
//挂载在全局
app.config.globalProperties.$axios=axios
app.mount('#app')
createApp(FirstOneName).mount('#liuKai')
