<template>
  <h2>購物車列表</h2>
  <table class="table align-middle" v-if="cartsStore.carts.length">
    <thead>
      <tr>
        <th>名稱</th>
        <th>價錢</th>
        <th>數量</th>
        <th>小計</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cartsStore.carts" :key="item.id">
        <th>{{ item.product.title }}</th>
        <td>{{ item.product.price }}</td>
        <td>
          <div class="input-group w-50">
            <button
              @click="changeCartQty('reduce', item.id, item.product_id, item.qty)"
              class="btn btn-primary"
              :class="{
                disabled: checkIsLoadingState
              }"
            >
              -
            </button>
            <input type="number" v-model.number="item.qty" class="form-control" />
            <button
              @click="changeCartQty('add', item.id, item.product_id, item.qty)"
              class="btn btn-primary"
              :class="{
                disabled: checkIsLoadingState
              }"
            >
              +
            </button>
          </div>
        </td>
        <td>{{ item.product.price * item.qty }}</td>
        <td><button type="button" @click="deleteCart(item.id)">刪除</button></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">總價：{{ total.final_total }}</td>
        <td>
          <router-link to="/carts/orderConfirm" class="btn btn-primary"
            >前往填寫訂購資訊</router-link
          >
        </td>
      </tr>
    </tfoot>
  </table>
  <div v-else>購物車目前無項目，前往選購</div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '../stores/cartsStore';

const cartsStore = useCartStore();
const { getCarts, deleteCart, changeCartQty, checkIsLoadingState, total } = cartsStore;
onMounted(() => {
  getCarts();
});
</script>
<style lang="sass"></style>
