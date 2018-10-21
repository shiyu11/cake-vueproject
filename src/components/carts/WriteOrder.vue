<template>

  <div class="container">
    <div class="row">
      <hr>
      <div class="checkout-title">
        <span class="span2">CONFIRMATION</span>
        <h4>订单确认</h4>
      </div>
      <div>
        <app-order-list></app-order-list>
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
          <td><span class="span4">2</span>件商品，总商品金额：   ￥596.00</td>
        </tr>
        <tr>
          <td>应付总额：<span class="span3">￥596.00</span></td>
        </tr>
        <tr>
          <td>配送至：{{$store.state.address1}},收货人：{{$store.state.name1}}，{{$store.state.phone1}}</td>
        </tr>
        </tbody>
      </table>

      <div style="text-align:right;">
        <router-link tag="button" active-class="active" role="presentation" to="/finish" @click="ok" exact><a>提交订单</a></router-link>
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
  import OrderList from './OrderList'
  export default {
    name: "OrderDetail",
    components: {
      'app-address': Address,
      'app-date': Date,
      'app-product-order': ProductOrder,
      'app-order-list': OrderList
    },
    methods: {
      ok() {
          axios.post(`http://localhost:3000/addressAdd`, {
            aid:2,
            aname: this.$store.state.name1,
            phone: this.$store.state.phone1,
            address: this.$store.state.address1,
            defaultaddress:1,
            uid:2
          }).then(function (result) {
            console.log(result.data)
          })
          alert('成功')
      }
    }
  }
    // data() {
    //   return {
    //     pickerOptions1: {
    //       shortcuts: [{
    //         text: '今天',
    //         onClick(picker) {
    //           picker.$emit('pick', new Date());
    //         }
    //       }, {
    //         text: '昨天',
    //         onClick(picker) {
    //           const date = new Date();
    //           date.setTime(date.getTime() - 3600 * 1000 * 24);
    //           picker.$emit('pick', date);
    //         }
    //       }, {
    //         text: '一周前',
    //         onClick(picker) {
    //           const date = new Date();
    //           date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
    //           picker.$emit('pick', date);
    //         }
    //       }]
    //     },
    //     value1: '',
    //     value2: '',
    //     value3: '',
    //
    //
    //   };
    // },
    // methods:{

    // sure:function(){
    //   this.ruleForms.push(this.ruleForm)
    //   this.ruleForm ={}
    // },
    // no:function(){
    //     this.ruleForm = {}
    // },
    // delPro:function(index){
    //   this.ruleForms.splice(index,1);
    // },


</script>

<style>

  .checkout-title{
    text-align:center;
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
