import { ref } from 'vue';

export default function useDeleteComponent() {
    const root = ref(null);
    const deleted = ref(false);
    
    function deleteComponent() {
        deleted.value = true;
    }

    return {
        root,
        deleted,
        deleteComponent
    }
}
