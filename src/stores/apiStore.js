import { defineStore } from 'pinia';
import { getRandomNumber } from '@/helpers/utils.js';

const useApiStore = defineStore('apiStore', {
    state: () => ({
        apiKey: 'yI14Ba/rboMpbjrPvOsjyw==4ng7q3RSwukth6Nd',
        baseUrl: 'https://api.api-ninjas.com/v1/',
        loremApi: {
            loremIpsumUrl: 'loremipsum?max_length=',
            maxLength: 200
        }
    }),
    getters: {},
    actions: {
        createApiOptions: function () {
            return {
                method: 'GET',
                headers: { 'x-api-key': this.apiKey }
            };
        },
        createRandomLoremUrl: function () {
            const maxLengthPram = getRandomNumber(this.loremApi.maxLength);
            return this.baseUrl
                .concat(this.loremApi.loremIpsumUrl)
                .concat(maxLengthPram);
        }
    }
});

export default useApiStore;
