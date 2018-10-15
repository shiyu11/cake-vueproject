import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import ProductNav from '@/components/product/ProductNav'
import ProductDetail from '@/components/productdetails/ProductDetail'
import Activity from '@/components/activity/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path:'/product',component:ProductNav},
    {path:'/productDetail/:pid',component:ProductDetail},
    {path:'/activity',component:Activity},
  ]
})
