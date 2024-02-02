<template>
  <h2>填寫訂購資訊</h2>
  <hr />
  <div class="border border-2" v-if="cartsStore.carts.length">
    <h3>確認訂單</h3>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>商品明細</th>
          <th class="text-center">數量</th>
          <th class="text-end">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartsStore.carts" :key="item.id">
          <td>
            <img :src="item.product.imageUrl" alt="" class="order-img" /> {{ item.product.title }}
          </td>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-end">$ {{ item.product.price * item.qty }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="text-end">總價：</td>
          <td class="text-end">$ {{ total.final_total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div v-else>購物車無商品，請返回購物 (這邊以後應該會用 router 偵測返回購物車頁)</div>
  <div class="border border-2 p-3 mt-5">
    <h3>填寫訂購資料</h3>
    <hr />
    <Form
      @submit="onSubmit"
      v-slot="{ validate, values, errors, isSubmitting, meta }"
      :validation-schema="schema"
    >
      <!-- <div>
        <label for="userName" class="form-label fs-5">填寫姓名</label>
        <Field
          name="userName"
          id="userName"
          class="form-control"
          placeholder="請填填寫中文姓名"
          type="text"
        />
        <span>{{ errors.userName }}</span>
      </div> -->
      <VeeValidateInput
        :name="'userName'"
        :label="'姓名'"
        :value="'測試中'"
        :placeholder="'請填寫中文姓名'"
        :type="'text'"
        :error-text="errors.userName"
      />
      <VeeValidateInput
        :name="'email'"
        :label="'電子信箱'"
        :value="'ummm@example.com'"
        :placeholder="'請填寫電子信箱'"
        :type="'email'"
        :error-text="errors.email"
      />
      <VeeValidateInput
        :name="'phone'"
        :label="'電話'"
        :placeholder="'請填寫電話'"
        :type="'tel'"
        :error-text="errors.phone"
      />
      <VeeValidateInput
        :name="'address'"
        :label="'地址'"
        :placeholder="'請填寫地址'"
        :type="'text'"
        :value="'台北市大安區敦化南路二段100號'"
        :error-text="errors.address"
      />
      <VeeValidateInput
        :name="'userMessage'"
        :label="'備註'"
        :placeholder="'請填寫備註'"
        :type="'text'"
        :error-text="errors.userMessage"
        :as="'textarea'"
      />
      <input
        type="submit"
        :value="`${cartsStore.carts.length < 1 ? '購物車無內容不可建立訂單' : '建立訂單'}`"
        :disabled="cartsStore.carts.length < 1 || !meta.valid || isSubmitting"
        @click="validate"
        class="btn btn-primary w-100"
      />
      <!-- <button type="reset">reset</button> -->
      <!-- <pre>
        {{ values }}
      </pre> -->
    </Form>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '../stores/cartsStore';
import { Form, Field, useForm } from 'vee-validate';
import VeeValidateInput from '../components/VeeValidateInput.vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

const cartsStore = useCartStore();
const { carts, getCarts, checkIsLoadingState, total, orderCheckout } = cartsStore;
onMounted(() => {
  getCarts();
});

console.log(carts);

// 設定規則 (如果input沒有設置一樣就會無法送出 submit)
const schema = {
  userName: 'name-required|tw-name',
  email: 'required|email',
  phone: 'required|tel:8',
  address: 'address-required|tw-address'
};

// 模擬呼叫後端的 AJAX
// function apiCall(state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state) {
//         resolve('成功了');
//       } else {
//         reject('失敗了');
//       }
//     }, 2000);
//   });
// }

// async function onSubmit(values, actions) {
//   try {
//     console.log('提交準備送出', values);
//     const response = await apiCall(22); // 呼叫 API
//     console.log('response', response);
//     // actions.setFieldValue('userName', 'ummm@example.com'); // 可以透過此方式賦予指定值
//     actions.resetForm(); // 重置表單

//     // return new Promise((resolve) => resolve(JSON.stringify(values, null, 2)));
//   } catch (error) {
//     console.log('error', error);
//     // 如果 API 呼叫失敗，用 toast 提示錯誤資訊。
//   }
// }

async function onSubmit(values, actions) {
  try {
    const newData = {
      user: {
        name: values.userName,
        tel: values.phone,
        email: values.email,
        address: values.address
      },
      message: values.userMessage
    };
    const response = await orderCheckout(newData); // 呼叫 API
    const { orderId } = response.data;
    actions.resetForm(); // 重置表單
    router.replace({
      path: '/carts/payment',
      query: { orderId: orderId } // 將剛建立好的訂單傳送到下一頁
    }); // replace 不可回到上一頁
  } catch (error) {
    console.log('error', error);
  }
}
</script>

<style lang="scss">
.order-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
