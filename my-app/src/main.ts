import { createApp } from 'vue'
import App from './App.vue'
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import '@/assets/style/global.less';
import i18n from './i18n';
import router from './router/index.js';
createApp(App).use(i18n).use(router).use(elementPlus).mount('#app')
