import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';
import i18n from '@/i18n/i18n.js';
import { createCustomRouter } from '@/router/router.js';

describe('NavBar Component', () => {
    const router = createCustomRouter('memory');
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallowMount(NavBar, {
            global: {
                plugins: [i18n, router]
            },
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('Component Rendered', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Links Available', () => {
        const routes = router.getRoutes();
        const links = wrapper.findAllComponents({ name: 'RouterLink' });

        links.forEach((link, index) => {
            expect(link.props().to).toMatch(routes[index].path);
        });
    });

    test('Localization Available', () => {
        const locales = wrapper.findAll('.locale__selection option');
        const availableLocales = i18n.global.availableLocales;

        availableLocales.forEach((locale, index) => {
            expect(locale).toMatch(locales[index]);
        });
    });
});
