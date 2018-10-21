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
        <th>商品信息</th>
        <th>规格</th>
        <th>单价（元）</th>
        <th>数量</th>
        <th>金额</th>
        <th>操作</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(product,index) in products" :key="product.id">
        <td>
          <input type="checkbox" name="" id="" v-model="product.selected">
        </td>
        <td>
         <img :src="product.ppic" style="width:30%;">
        </td>
        <td>
          <!--border-bottom: 1px solid #d9e8ec;-->
         <div class="info">
           <h5>{{ product.pname }}</h5>
           <p>赠品：标配餐具10份  生日蜡烛1支</p>
         </div>
       </td>
        <td>{{product.size}}</td>
        <td>{{ product.price }}</td>
        <td>
          <div class="num">
          <button v-on:click="product.pnum--">-</button>
            {{product.pnum}}
          <button v-on:click="product.pnum++">+</button>
        </div>
        </td>
        <td>{{ product.price * product.pnum }}</td>
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
        <router-link tag="button" active-class="active" role="presentation" to="/" exact><a>继续购物</a></router-link>
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
          products:[
            {id:1,pname:'蓝莓轻乳拿破仑',pnum:2,ppic:require("../../assets/a3.jpg"),size:'2磅',price:198,selected:false},
            {id:2,pname:'奶酪轻乳拿破仑',pnum:1,ppic:require("../../assets/a5.jpg"),size:'3磅',price:178,selected:true},
            {id:3,pname:'草莓轻乳拿破仑',pnum:3,ppic:require("../../assets/a3.jpg"),size:'5磅',price:218,selected:false}
          ]
        }
      },
      methods:{
        selectAll:function(e){
          console.log(e,this.products.length);
          for(var i=0; i<this.products.length; i++){
            this.products[i].selected=!e;
          }
        },
        //删除商品
        deleteNowGoods:function(index){
          //根据索引删除list的记录
          this.products.splice(index, 1);
          // console.log(this.list);
        }
      },
      computed:{
        isSelectAll:function(){
          return this.products.every(function(e){
            return e.selected;
          })
        },
        getGoodsNums:function(e){
          //已选中商品
          var goods = this.products.filter(function(e){
            return e.selected;
          });
          //已选中商品总价格
          var totalGoodsPrice = 0;
          for(var i=0; i<goods.length; i++){
            totalGoodsPrice += goods[i].price*goods[i].pnum;
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
