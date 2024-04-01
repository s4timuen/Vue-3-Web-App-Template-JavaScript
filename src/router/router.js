import { createWebHashHistory, createWebHistory, createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PageNotFound from '@/views/PageNotFound.vue';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: PageNotFound
    }
];

function createCustomRouter(historyMode) {
    let history = undefined;

    switch (true) {
        case historyMode === 'web':
            history = createWebHistory();
            break;
        case historyMode === 'hash':
            history = createWebHashHistory();
            break;
        case historyMode === 'memory':
            history = createMemoryHistory();
            break;
        default:
            history = createWebHashHistory();
    }

    return createRouter({
        history,
        routes,
    });
}


export { createCustomRouter };
