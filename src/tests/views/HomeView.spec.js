import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import TemplateComponent from '@/components/TemplateComponent.vue';
import i18n from '@/i18n/i18n.js';
import { v4 as uuid } from 'uuid';

describe('Home View', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallowMount(HomeView, {
            global: {
                plugins: [i18n]
            }
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('Component Rendered', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Deleted Template ID Logged', () => {
        const id = uuid();
        const templateComponent = wrapper.findComponent(TemplateComponent);
        const consoleLogSpy = vi.spyOn(console, 'log');

        templateComponent.vm.$emit('delete-template-info', id);

        expect(templateComponent.emitted('delete-template-info')).toBeTruthy();
        expect(templateComponent.emitted('delete-template-info')[0][0]).toMatch(id);
        expect(consoleLogSpy).toHaveBeenCalled(id);
    });
});
