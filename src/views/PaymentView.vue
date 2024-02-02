<template>
  <div v-if="orderId">
    <div>填寫付款資訊</div>
    <select name="" id="">
      <option value="">請選擇付款方式</option>
      <option value="creditCard">信用卡</option>
    </select>
    <hr />
    <div>模擬付款</div>
    <button type="button" @click="goToPayment">付款</button>
  </div>

  <hr />
  <div v-if="orderData.id">
    <h4>付款成功！ 以下是您完成的訂單 (之後會用表格呈現)</h4>
    <pre>
    {{ orderData }}
  </pre
    >
  </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../stores/cartsStore';
const cartStore = useCartStore();
const { payment, fetchOrder } = cartStore;
const orderData = ref([]);

const route = useRoute();
const orderId = ref(route.query.orderId); // 取出 orderId 參數
watchEffect(() => {
  console.log('orderId', orderId.value);
});

const goToPayment = async () => {
  try {
    if (orderId.value) {
      const response = await payment(orderId.value);
      console.log('payyerwer', response);
      const fetchOrderState = await fetchOrder(orderId.value);
      console.log('fetchOrderState', fetchOrderState);
      orderData.value = fetchOrderState.data.order;
      orderId.value = '';
    } else {
      console.log('訂單已完成，不可再付款');
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="scss"></style>
