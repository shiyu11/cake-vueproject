import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import ProductNav from '@/components/product/ProductNav'
import ProductDetail from '@/components/productdetails/ProductDetail'
import OneProduct from '@/components/home/OneProduct'

// 黄
import UserCenter from '@/components/personalCenter/UserCenter'
import UserData from '@/components/personalCenter/UserData'
import UserTime from '../components/personalCenter/UserTime'
import UserOrder from '../components/personalCenter/UserOrder'
import UserMember from '../components/personalCenter/UserMember'
import UserAddress from '../components/personalCenter/UserAddress'
import UserOrderAll from '../components/personalCenter/UserOrderAll'
import UserOrderAfter from '../components/personalCenter/UserOrderAfter'
import UserOrderFinish from '../components/personalCenter/UserOrderFinish'

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
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path:'/product',component:ProductNav},
    {path:'/productDetail/:pid',component:ProductDetail},
    {path:'/productlist/:occasion',component:OneProduct},


    // 黄
      {path:'/usercenter',component:UserCenter,children:[
        {path:'Personaldata',component:UserData},
        {path:'UserTime',component:UserTime},
        {path:'Myorder',component:UserOrder,children: [
            {path:'',component:UserOrderAll},
            {path:'after',component:UserOrderAfter},
            {path:'finish',component:UserOrderFinish}
          ]},
        {path:'Mymember',component:UserMember},
        {path:'UserAddress',component:UserAddress}
       ]},

// 谭
    {path:'/cart',component:MyCarts},
    {path:'/check',component:WriteOrder},
    {path:'/finish',component:Over},
    {path:'/event',component:Event},

    // 沈
    {path:'/login',component:login},
    {path:'/register',component:register},
  ]
})
