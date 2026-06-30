import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import { plugin, defaultConfig } from '@formkit/vue';
import 'virtual:uno.css';
import '@/assets/styles/main.scss';
import App from './App.vue';
createApp(App).use(createPinia()).use(router).use(plugin, defaultConfig).mount('#app');
