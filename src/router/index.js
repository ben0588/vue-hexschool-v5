import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/carts',
      name: 'carts',
      component: () => import('../views/CartsView.vue'),
      children: [
        {
          path: '',
          name: 'cartsIndex',
          component: () => import('../views/CartsListView.vue')
        },
        {
          path: 'orderConfirm',
          component: () => import('../views/OrderConfirmView.vue')
        },
        {
          path: 'orderInfo',
          component: () => import('../views/OrderInfoView.vue')
        },
        {
          path: 'payment',
          component: () => import('../views/PaymentView.vue')
        },
        {
          path: 'completeOrder',
          component: () => import('../views/CompleteOrderView.vue')
        }
      ]
    }
  ]
});

export default router;
