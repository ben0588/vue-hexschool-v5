<template>
  <div class="card">
    <img :src="product.imageUrl" class="card-img-top card-img" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.content }}
      </p>
      <a
        href="#"
        class="btn btn-primary w-100"
        @click.prevent="addToCarts(product.id)"
        :class="{
          disabled: targetProductId.id === product.id && checkIsLoadingState ? true : false
        }"
      >
        <!-- 只有產品 id 與記錄的相同，才會顯示禁用 -->
        <span v-if="targetProductId.id === product.id && checkIsLoadingState">加入中</span>
        <span v-else>加入購物車</span>
      </a>
    </div>
    {{ targetProductId }}
    <br />
    {{ product.id }}
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object
});

import { useCartStore } from '../stores/cartsStore';
const cartsStore = useCartStore();
const { cartLoading, addToCarts, checkIsLoadingState, targetProductId, changeTargetId } =
  cartsStore;
</script>

<style lang="scss"></style>
