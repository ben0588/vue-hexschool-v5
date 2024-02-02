import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loadingStore', () => {
  const isLoading = ref(false);
  function toggleLoading() {
    isLoading.value = !isLoading.value;
  }
  return { isLoading, toggleLoading };
});
