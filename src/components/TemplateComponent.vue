<template>
  <div class="template__container" :id="props.id" v-if="!deleted" ref="root">
    <h3 class="template__title">{{ getTitle }}</h3>
    <p class="template__text">{{ getDescription }}</p>
    <div class="template__buttons">
      <button class="btn btn--success" @click="changeDescription()">{{ $t(`buttons.${changeOrLoading}`) }}</button>
      <button class="btn btn--critical" @click="deleteComponent()">{{ $t("buttons.delete") }}</button>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import useTemplateStore from '@/stores/templateStore.js';
import useApiStore from '@/stores/apiStore.js';
import useDeleteComponent from '@/composables/deleteComponent.js';

// eslint-disable-next-line -- compiler macro
const props = defineProps({
  id: String
});

// eslint-disable-next-line -- compiler macro
const emits = defineEmits(['delete-template-info']);

// Stores
const templateStore = useTemplateStore();
const apiStore = useApiStore();
const { getTitle, getDescription } = storeToRefs(templateStore);

// Delete Template
const { root, deleted, deleteComponent } = useDeleteComponent();

// Change Description
const isLoading = ref(false);
const changeOrLoading = computed(() => {
  return isLoading.value ? 'loading' : 'change';
});

function changeDescription() {
  const changeBtn = root.value.querySelector('.btn.btn--success');
  changeBtn.disabled = true;
  isLoading.value = true;

  const url = apiStore.createRandomLoremUrl();
  const options = apiStore.createApiOptions();

  fetch(url, options)
    .then(res => res.json())
    .then(res => this.templateStore.setDescription(res.text))
    .catch(error => console.error('Fetch', error))
    .finally(() => {
      isLoading.value = false;
      changeBtn.disabled = false;
    });
}
</script>

<style scoped lang="scss">
.template__container {
  @include button;

  border: 2px solid $color-gray;
  border-radius: 5px;
  background-color: $color-main-tint-04;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: $shadow;

  .template__title {
    font-size: 2rem;
  }

  .template__text {
    line-height: 2;
  }

  .template__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
