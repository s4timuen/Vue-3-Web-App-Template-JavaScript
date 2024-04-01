<template>
    <div class="page-not-found__view" ref="root">
        <h1>{{ $t('views.page-not-found.text') }}</h1>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const root = ref(null);
</script>

<style scoped lang="scss">
.page-not-found__view {
    @include view;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
