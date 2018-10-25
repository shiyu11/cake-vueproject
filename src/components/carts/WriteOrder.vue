<template>
  <div class="container">
    <div class="row">
      <hr>
      <div class="checkout-title">
        <span class="span2">CONFIRMATION</span>
        <h4>订单确认</h4>
      </div>

      <div>
        <app-address></app-address>
      </div>

      <br/>
      <div>
        <app-date></app-date>
      </div>
      <hr>
      <div>
        <app-product-order></app-product-order>
      </div>

      <table class="table" style="text-align: right">
        <tbody>
        <tr>
          <td><span class="span4">{{$store.state.rnum}}</span>件商品，总商品金额：   ￥{{$store.state.money}}</td>
        </tr>
        <tr>
          <td>应付总额：<span class="span3">￥{{$store.state.money}}</span></td>
        </tr>
        <tr>
          <td>配送至：{{$store.state.address1}},收货人：{{$store.state.name1}}，{{$store.state.phone1}}</td>
        </tr>
        </tbody>
      </table>

      <div style="text-align:right;">
        <button class="btn btn-primary" v-on:click="submit">提交订单</button>
      </div>
      <div style="text-align:right;">
        <router-link to="/cart">返回购物车</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import Address from './Address'
  import Date from './Date'
  import ProductOrder from './ProductOrder'
  import axios from 'axios'
  export default {
    name: "OrderDetail",
    components: {
      'app-address': Address,
      'app-date': Date,
      'app-product-order': ProductOrder
    },
    methods: {
      submit() {
        if(this.$store.state.name1==''||this.$store.state.phone1==''||this.$store.state.address1==''||this.$store.state.time1==''){
          alert('请确认信息不能为空')
        }else{
          this.$router.push({path:'/finish'})
          axios.post(`http://localhost:3000/orderAdd`, {
            state:0,
            uid:1,
            money:222,
            rnum:111,
            oid:1,
            pid:1,
            aname: this.$store.state.name1,
            phone: this.$store.state.phone1,
            address: this.$store.state.address1,
            defaultaddress:1
          }).then(function (result) {
            console.log(result.data)
          })
          alert('成功')
        }
      }
    }
  }

</script>

<style>

  .checkout-title{
    text-align:center;
    margin-bottom: 50px;
    color:darkgray;
  }
  .table{
    background-color:#F2F6F7;
  }
  .span2{
    font-family: 'Comic Sans MS';
    font-size: 32px;
  }
  .span3{
    font-size: 22px;
    color:firebrick;
    font-weight: bold;
  }
  .span4{
    color:firebrick;
  }
</style>
