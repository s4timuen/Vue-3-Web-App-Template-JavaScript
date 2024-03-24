import { defineStore } from 'pinia';

const useTemplateStore = defineStore('templateStore', {
    state: () => ({
        title: 'Vue Web-App',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, delectus nam corrupti quae vel quas earum sit itaque tenetur eum.'
    }),
    getters: { // like computet props
        getTitle() {
            return this.title;
        },
        getDescription() {
            return this.description;
        }
    },
    actions: { // like methods
        setDescription(description) {
            this.description = description;
        }
    }
});

export default useTemplateStore;
