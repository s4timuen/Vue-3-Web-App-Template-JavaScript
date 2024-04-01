import { shallowMount } from '@vue/test-utils';
import { waitFor } from '@testing-library/vue';
import TemplateComponent from '@/components/TemplateComponent.vue';
import { v4 as uuid } from 'uuid';
import { createPinia } from 'pinia';
import i18n from '@/i18n/i18n.js';

const pinia = createPinia();

describe('Template', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallowMount(TemplateComponent, {
            global: {
                plugins: [i18n, pinia]
            },
            propsData: { id: uuid() }
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('Component Available', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Change Description', async () => {
        const button = wrapper.find('.btn.btn--success');
        const textEl = wrapper.find('.template__text');
        const oldText = textEl.text();

        button.trigger('click');

        await waitFor(() => {
            expect(textEl.text()).not.toMatch(oldText);
        });
    });

    test('Button Text Change or Loading', async () => {
        const button = wrapper.find('.btn.btn--success');

        expect(button.text()).toMatch(i18n.global.t('buttons.change'));
        expect(wrapper.vm.changeOrLoading).toMatch('change');

        button.trigger('click');

        await waitFor(() => {
            expect(button.text()).toMatch(i18n.global.t('buttons.loading'));
            expect(wrapper.vm.changeOrLoading).toMatch('loading');
        });

        await waitFor(() => {
            expect(button.text()).toMatch(i18n.global.t('buttons.change'));
            expect(wrapper.vm.changeOrLoading).toMatch('change');
        });
    });
});
