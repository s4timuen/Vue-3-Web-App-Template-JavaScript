import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router.js';
import i18n from '@/i18n/i18n.js';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');
