import { setActivePinia, createPinia } from 'pinia';
import useTemplateStore from '@/stores/templateStore.js';
import { expect } from 'vitest';

describe('Template Store', () => {
    let store = undefined;

    beforeEach(() => {
        setActivePinia(createPinia());
        store = useTemplateStore();
    });

    test('Getter Title', () => {
        expect(store.getTitle).toMatch(store.title);
    });

    test('Getter Description', () => {
        expect(store.getDescription).toMatch(store.description);
    });

    test('Action Set Description', () => {
        const oldDescription = store.getDescription;
        const newDescription = 'test';

        store.setDescription(newDescription);

        expect(store.getDescription).not.toMatch(oldDescription);
        expect(store.getDescription).toMatch(newDescription);
    });
});
