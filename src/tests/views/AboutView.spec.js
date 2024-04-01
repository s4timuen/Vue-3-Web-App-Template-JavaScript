import { shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';
import i18n from '@/i18n/i18n.js';

describe('About View', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallowMount(AboutView, {
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
    });
});
