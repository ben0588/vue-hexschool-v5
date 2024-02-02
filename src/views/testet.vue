<template>
  <div class="border border-2 p-3 mt-5">
    <h3>填寫訂購資料</h3>
    <Form
      @submit="onSubmit"
      v-slot="{ validate, values, errors, isSubmitting, meta }"
      :validation-schema="schema"
    >
      <label for="userName">填寫姓名</label>
      <Field name="useName" id="userName" />
      <span>{{ errors.useName }}</span>
      <Field name="password" type="password" />
      <input type="submit" value="提交" :disabled="!meta.valid || isSubmitting" @click="validate" />
      <button type="reset">reset</button>
      {{ isSubmitting }}
      <pre>
          {{ values }}
        </pre
      >
    </Form>
  </div>
</template>
<script setup>
import { Form, Field } from 'vee-validate';

// 設定規則 (如果input沒有設置一樣就會無法送出 submit)
const schema = {
  useName: 'required',
  password: 'required'
  // email: 'required|email',
  // phone: 'required|tel:8',
  // address: 'required',
  // message: ''
};

import { onMounted } from 'vue';
import { useCartStore } from '../stores/cartsStore';

const cartsStore = useCartStore();
const { getCarts, checkIsLoadingState, total } = cartsStore;
onMounted(() => {
  getCarts();
});

// 模擬呼叫後端的 AJAX
function apiCall(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) {
        resolve('成功了');
      } else {
        reject('失敗了');
      }
    }, 2000);
  });
}

async function onSubmit(values, actions) {
  try {
    // actions 有很多參數，請參考文件：https://vee-validate.logaretm.com/v4/guide/components/handling-forms/
    const response = await apiCall(22); // 呼叫 API
    console.log('response', response);
    actions.setFieldValue('useName', 'ummm@example.com'); // 可以透過此方式賦予指定值
    actions.resetForm(); // 重置表單
    // return new Promise((resolve) => resolve(JSON.stringify(values, null, 2)));
  } catch (error) {
    console.log('error', error);
    // 如果 API 呼叫失敗，用 toast 提示錯誤資訊。
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
