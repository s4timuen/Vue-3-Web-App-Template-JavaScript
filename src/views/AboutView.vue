<template>
    <div class="about__view" ref="root">
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const root = ref(null);
</script>

<style scoped lang="scss">
.about__view {
    @include view;
}
</style>