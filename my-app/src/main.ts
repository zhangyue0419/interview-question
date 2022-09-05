import { createApp } from 'vue'
import App from './App.vue'
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import '@/assets/style/global.less';
import router from './router/index.js';
createApp(App).use(router).use(elementPlus).mount('#app')
