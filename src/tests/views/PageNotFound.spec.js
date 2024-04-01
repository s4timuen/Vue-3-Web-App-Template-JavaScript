import { shallowMount } from '@vue/test-utils';
import PageNotFound from '@/views/PageNotFound.vue';
import i18n from '@/i18n/i18n.js';

describe('Page Not Found View', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallowMount(PageNotFound, {
            global: {
                plugins: [i18n]
            },
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('Component Rendered', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toMatch(i18n.global.t('views.page-not-found.text'));
    });
});
