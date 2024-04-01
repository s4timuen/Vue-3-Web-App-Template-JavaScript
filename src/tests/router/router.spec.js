import { createCustomRouter } from '@/router/router.js';

describe('Router', () => {
    const router = createCustomRouter('memory');
    const routes = router.getRoutes();

    test('Available Routes', async () => {
        for (const route of routes) {
            if (route.name !== 'PageNotFound') {
                await router.push(route.path);
                await router.isReady();

                const { default: expectedComponent } = await import(`@/views/${route.name}.vue`);

                expect(router.currentRoute.value.path).toMatch(route.path);
                expect(router.currentRoute.value.matched[0].components.default).toBe(expectedComponent);
            }
        };
    });

    test('Page Not Found', async () => {
        const routeName = 'PageNotFound';
        const nonExistingRoutes = ['/xyz', '/123', '/soiiozvhvbc', '/gibberish'];

        for (const route of nonExistingRoutes) {
            await router.push(route);

            const { default: expectedComponent } = await import(`@/views/${routeName}.vue`);

            expect(router.currentRoute.value.path).toMatch();
            expect(router.currentRoute.value.matched[0].components.default).toBe(expectedComponent);
        };
    });
});
