<script setup>
import { onMounted } from 'vue';
import { useCartStore } from './stores/cartsStore';
import { useLoadingStore } from './stores/loadingStore';
const catsStore = useCartStore();
const LoadingStore = useLoadingStore();

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

onMounted(() => {
  catsStore.getCarts();
});
</script>

<template>
  <h1>首頁</h1>
  <nav>
    <ul>
      <li><router-link to="/">回首頁</router-link></li>
      <li><router-link to="/products">全部商品</router-link></li>
      <li>
        <router-link to="/carts">購物車{{ catsStore.carts.length }}</router-link>
      </li>
    </ul>
  </nav>

  <VueLoading :active="LoadingStore.isLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
  <main class="container">
    <router-view> </router-view>
  </main>
</template>

<style lang="scss">
@import './assets/all.scss';
</style>
