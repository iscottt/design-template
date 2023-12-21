import { createApp } from 'vue'
import './assets/stylesheets/global.scss'
import App from './App.vue'
import router from './router';
import 'virtual:uno.css'

// 全局组件注册
import globelComponent from '@/components'
const app = createApp(App)
app.use(globelComponent)

app.use(router);
app.mount('#app')
