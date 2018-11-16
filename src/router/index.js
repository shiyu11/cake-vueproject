import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import ProductDetail from '@/components/productdetails/ProductDetail'
import OneProduct from '@/components/home/OneProduct'
import about from '@/components/home/about'
import yushou from '@/components/product/yushou'
import theme from '@/components/product/theme'
import allProducts from '@/components/home/allproducts'
import  cakebox from '../components/home/cakebox'
import Pay from '@/components/carts/Pay.vue'


// 黄
import UserCenter from '@/components/personalCenter/UserCenter'
import UserData from '@/components/personalCenter/UserData'
import UserTime from '../components/personalCenter/UserTime'
import UserOrder from '../components/personalCenter/UserOrder'
import Userupdatepsd from '../components/personalCenter/Userupdatepsd'
import UserAddress from '../components/personalCenter/UserAddress'
import UserOrderAll from '../components/personalCenter/UserOrderAll'
import UserOrderAfter from '../components/personalCenter/UserOrderAfter'
import UserOrderReview from '../components/personalCenter/UserOrderReview'
import UserOrderFinish from '../components/personalCenter/UserOrderFinish'
import Mycollection from '../components/personalCenter/Mycollection'


// 谭
import MyCarts from '@/components/carts/MyCarts.vue'
import WriteOrder from '@/components/carts/WriteOrder.vue'
import Over from '@/components/carts/Over.vue'
import Event from '@/components/activity/Event.vue'

// 沈
import login from '@/components/login/login.vue'
import register from '@/components/login/register.vue'



Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'about', component: about},
    {path:'/productDetail/:pid',component:ProductDetail},
    {path:'/productlist/:occasion',component:OneProduct},
    {path:'/yushou',component:yushou},
    {path:'/theme',component:theme},
    {path:'/allproducts',component:allProducts},
    {path: '/cakebox', name: 'cakebox', component: cakebox},


    // 黄
    {path:'/usercenter',component:UserCenter,children:[
        {path:'Personaldata',component:UserData},
        {path:'UserTime',component:UserTime},
        {path:'Myorder',component:UserOrder,children: [
            {path:'all',component:UserOrderAll},
            {path:'after',component:UserOrderAfter},
            {path:'review',component:UserOrderReview},
            {path:'finish',component:UserOrderFinish}
          ]},
        {path:'Userupdatepsd',component:Userupdatepsd},
        {path:'UserAddress',component:UserAddress},
        {path:'Mycollection',component:Mycollection}
      ]},

// 谭
    {path:'/cart',component:MyCarts},
    {path:'/check',component:WriteOrder},
    {path:'/finish',component:Over},
    {path:'/event',component:Event},
    {path:'/over',component:Pay},

    // 沈
    {path:'/login',component:login},
    {path:'/register',component:register},
  ]
})
