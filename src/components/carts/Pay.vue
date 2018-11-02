<template>
  <div class="container">
    <div class="row row_t">
      <div class="col-xs-4 col-xs-push-2 hh">收款方：tease dream蛋糕</div>
      <div class="col-xs-3 col-xs-push-3"><span class="pay1">应付款：￥</span><span class="mymoney1">{{totalMoney}}</span></div>
    </div>
    <div class="row mypay">
      <p>扫一扫付款（元)</p>
      <p class="mymoney">{{totalMoney}}</p>
    </div>
    <div class="row h1">
      <div class="col-sm-2 col-sm-push-5">
        <div class="thumbnail">
          <img src="../../../static/images/pay.jpg" style="width: 100%"/>
          <div class="caption">
            <p class="sao">扫一扫继续付款</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-xs-2 col-xs-push-10">
    <button @click="allOrder" class="btn btn-primary" style="float: right;width: 90%">查看此订单</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Pay",
      data(){
          return{
            totalMoney:sessionStorage.getItem('totalMoney1'),
          }
      },
      methods:{
        allOrder(){
          this.$router.push({path:'/usercenter/Myorder/after'})
        },
      }
    }
</script>

<style scoped>
  .mypay{
    text-align:center;
    margin-top: 50px;
  }
  .mymoney{
    font-weight: bold;
    font-size: 28px;
    color:#F47530;
  }
  .mymoney1{
    font-size: 28px;
  }
  .sao{
    margin-top: 5px;
    font-size: 15px;
    text-align: center;
  }
  .pay1{
    font-size: 18px;
  }
  .h1{
    margin-top: 2px;
  }
  .hh{
    font-size: 18px;
    margin-top: 12px;
  }
  .row_t{
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:#F2F6F7;
  }
</style>
