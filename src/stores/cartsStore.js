import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';
import { useLoadingStore } from './loadingStore';

const ApiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const useCartStore = defineStore('cartsStore', () => {
  const carts = ref([]);
  const total = ref({});
  const cartLoading = ref(false);
  const targetProductId = ref({ id: '' });
  const loadingStore = useLoadingStore();
  const { toggleLoading } = loadingStore;

  const checkIsLoadingState = computed(() => cartLoading); // 每次 isLoading 更改就重新回值

  const changeTargetId = computed(() => targetProductId.value); // 動態紀錄更新當前的商品 id

  const getCarts = async () => {
    try {
      const api = `${ApiBaseUrl}/v2/api/${import.meta.env.VITE_API_PATH}/cart`;
      const response = await axios.get(api);
      carts.value = response.data.data.carts; // 直接更新 carts.value，先結構出來會讀取失敗
      total.value.final_total = response.data.data.final_total;
      total.value.total = response.data.data.total;
    } catch (error) {
      console.log(error);
    }
  };

  const addToCarts = async (productId, qty = 1) => {
    try {
      targetProductId.value.id = productId; // 紀錄產品 ID
      cartLoading.value = true;
      const api = `${ApiBaseUrl}/v2/api/${import.meta.env.VITE_API_PATH}/cart`;
      const response = await axios.post(api, {
        data: {
          product_id: productId,
          qty
        }
      });
      console.log('response', response);
      const { success } = response.data;
      if (success) {
        getCarts(); // 每次新增成功就會重新呼叫取得最新購物車資訊
      }
    } catch (error) {
      console.log(error);
    } finally {
      cartLoading.value = false;
    }
  };

  const deleteCart = async (cartId) => {
    try {
      if (window.confirm('您確定要執行這個操作嗎？')) {
        console.log('確認完畢'); // 之後會改其他更好看的套件
        const api = `${ApiBaseUrl}/v2/api/${import.meta.env.VITE_API_PATH}/cart/${cartId}`;
        const response = await axios.delete(api);
        const { success } = response.data;
        if (success) {
          getCarts(); // 刪除成功之後重新呼叫取得
          alert('刪除商品成功');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeCartQty = async (type, cartId, product_id, qty) => {
    try {
      cartLoading.value = true;
      toggleLoading();
      let newQty;
      if (type === 'reduce') {
        newQty = qty - 1;
      } else if (type === 'add') {
        newQty = qty + 1;
      }
      const api = `${ApiBaseUrl}/v2/api/${import.meta.env.VITE_API_PATH}/cart/${cartId}`;
      const response = await axios.put(api, {
        data: {
          product_id,
          qty: newQty
        }
      });
      const { success } = response.data;
      if (success) {
        getCarts(); // 刪除成功之後重新呼叫取得
        cartLoading.value = false;
        toggleLoading();
        alert('修改商品資料完成');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const orderCheckout = async (data) => {
    try {
      toggleLoading();
      const api = `${ApiBaseUrl}/v2/api/${import.meta.env.VITE_API_PATH}/order`;
      const response = await axios.post(api, {
        data
      });
      // console.log('orderCheckout', response);
      const { success } = response.data;
      if (success) {
        getCarts(); // 刪除成功之後重新呼叫取得
        toggleLoading();
        alert('建立訂單完成');
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    carts,
    total,
    addToCarts,
    getCarts,
    deleteCart,
    changeCartQty,
    cartLoading,
    checkIsLoadingState,
    targetProductId,
    changeTargetId,
    orderCheckout
  };
});
