<template>
  <div>
    <h2>全部商品頁面</h2>
    <div class="row row-cols-3">
      <div class="col" v-for="item in productsList" :key="item.id">
        <Card :product="item"></Card>
      </div>
    </div>
    <PaginationVue :page="paginationPage" :get-products="getProducts"></PaginationVue>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import PaginationVue from '@/components/Pagination.vue';

const productsList = ref([]);
const paginationPage = ref([]);

const getProducts = async (page = 1) => {
  try {
    const api = `${import.meta.env.VITE_API_BASE_URL}/v2/api/${import.meta.env.VITE_API_PATH}/products?page=${page}`;
    const response = await axios.get(api);
    const { products, pagination, success } = response.data;
    paginationPage.value = pagination;
    productsList.value = products;
    if (success) {
      console.log('取得成功');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  console.log('初始化');
  getProducts();
});
</script>
<style lang="scss">
.card-img {
  height: 250px;
  object-fit: cover;
}
</style>
