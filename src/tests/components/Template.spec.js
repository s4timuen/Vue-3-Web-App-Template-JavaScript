import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import TemplateComponent from '@/components/Template.vue';
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

    it('Component Available', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
