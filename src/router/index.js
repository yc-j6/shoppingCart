import Vue from 'vue'
import Router from 'vue-router'
import Item from '@/views/item/item'
import Cart from '@/views/cart/cart'
import Payment from '@/views/payment/payment'
import Order from '@/views/order/order'
import Shop  from '@/views/shop/shop'
import Checkout  from '@/views/checkout/checkout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item',
      component: Item
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})
