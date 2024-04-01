import { setActivePinia, createPinia } from 'pinia';
import useApiStore from '@/stores/apiStore.js';
import { expect } from 'vitest';
import { escapeRegExUrls } from '@/utils/utils.js';

describe('API Store', () => {
    let store = undefined;

    beforeEach(() => {
        setActivePinia(createPinia());
        store = useApiStore();
    });

    test('Create API Options', () => {
        const expectedOptions = {
            method: 'GET',
            headers: { 'x-api-key': expect.any(String) }
        };
        const options = store.createApiOptions();

        expect(options).toEqual(expectedOptions);
    });

    test('Create Random Lorem Url', () => {
        const expectedUrl
            = new RegExp(`${escapeRegExUrls(store.baseUrl)}${escapeRegExUrls(store.loremApi.loremIpsumUrl)}\\d+`);

        const url = store.createRandomLoremUrl();

        expect(url).toMatch(expectedUrl);
    });
});
