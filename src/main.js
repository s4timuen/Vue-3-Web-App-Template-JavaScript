import { createApp } from 'vue';
import App from './App.vue';
import { createCustomRouter } from '@/router/router.js';
import i18n from '@/i18n/i18n.js';
import { createPinia } from 'pinia';

const router = createCustomRouter('hash');
const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');
