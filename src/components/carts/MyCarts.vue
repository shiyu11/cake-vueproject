<template>
  <div class="container">
    <div class="row">
      <hr>
      <div class="checkout-title">
        <span class="span1">MON  PANIER</span>
        <h4>购物车</h4>
      </div>

        <div>
          <app-cart-list></app-cart-list>
        </div>

      <table class="table">
      <thead>
      <tr>
        <th>
          <input type="checkbox" v-on:click="selectAll(isSelectAll)">
          <label for="all">全选</label>
        </th>
        <th></th>
        <th width="500">商品信息</th>
        <th scope="col">规格</th>
        <th scope="col">单价（元）</th>
        <th scope="col">数量</th>
        <th scope="col">金额</th>
        <th scope="col">操作</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(item,index) in list" :key="item.id">
        <td>
          <input type="checkbox" name="" id="" v-model="item.selected">
        </td>
        <td>
         <img :src="item.img" style="width:43%;">
        </td>
        <td>
         <div class="info">
           <h6>{{ item.tit }}</h6>
           <p>赠品：{{item.content}}</p>
         </div>
       </td>
        <td>{{item.size}}</td>
        <td>{{ item.price }}</td>
        <td>
          <div class="num">
          <button v-on:click="item.num--">-</button>
            {{item.num}}
          <button v-on:click="item.num++">+</button>
        </div>
        </td>
        <td>{{ item.price * item.num }}</td>
        <td>
          <button class="btn btn-primary" v-on:click="deleteNowGoods(index)">删除</button>
        </td>
      </tr>
      </tbody>
        <tfoot>
        <tr>
          <td colspan="8" class="text-right">已选{{getGoodsNums.goodsNum }}件商品，商品合计{{getGoodsNums.goodsPrice}}元</td>
        </tr>
        </tfoot>
      </table>
      <div style="text-align:right;">
        <router-link tag="button" active-class="active" role="presentation" to="/aaa" exact><a>继续购物</a></router-link>
        <router-link tag="button" active-class="active" role="presentation" to="/check" exact><a>结算</a></router-link>
      </div>

    </div>
</div>
</template>

<script>
  import CartList from './CartList'
  export default {
      name: "MyCart",
    components:{
      'app-cart-list':CartList
    },
      data(){
        return{
          list:[
            {id:1,tit:'蓝莓轻乳拿破仑',num:2,img:require("../../assets/1.jpg"),content:'标配餐具10份  生日蜡烛1支',size:'2磅',price:198,selected:false},
            {id:2,tit:'奶酪轻乳拿破仑',num:1,img:require("../../assets/2.jpg"),content:'标配餐具10份  生日蜡烛1支',size:'3磅',price:178,selected:true},
            {id:3,tit:'草莓轻乳拿破仑',num:3,img:require("../../assets/1.jpg"),content:'标配餐具10份  生日蜡烛1支',size:'5磅',price:218,selected:false}
          ]
        }
      },
      methods:{
        selectAll:function(e){
          console.log(e,this.list.length);
          for(var i=0; i<this.list.length; i++){
            this.list[i].selected=!e;
          }
        },
        //删除商品
        deleteNowGoods:function(index){
          //根据索引删除list的记录
          this.list.splice(index, 1);
          // console.log(this.list);
        }
      },
      computed:{
        isSelectAll:function(){
          return this.list.every(function(e){
            return e.selected;
          })
        },
        getGoodsNums:function(e){
          //已选中商品
          var goods = this.list.filter(function(e){
            return e.selected;
          });
          //已选中商品总价格
          var totalGoodsPrice = 0;
          for(var i=0; i<goods.length; i++){
            totalGoodsPrice += goods[i].price*goods[i].num;
          }
          return {
            goodsNum:goods.length,
            goodsPrice:totalGoodsPrice
          }
        }
      },
      // mounted:function(){
      //
      // }
    }
</script>

<style scoped>
  .checkout-title{
    text-align:center;
    color:darkgray;
  }
  .table{
    background-color:#F2F6F7;
  }
  .span1{
    font-family: 'Comic Sans MS';
    font-size: 32px;
  }
</style>
