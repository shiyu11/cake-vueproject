<template>
    <div class="container">
      <el-col :span="22" :offset="2">
        <img src="../../../static/images/a11.png" alt="" class="a11" style="width: 90%">
      </el-col>

      <div class="rule">
        <h2>活动规则</h2>
        <p>
          1、本活动仅限上海、苏州地区；（产品请详见各<br/>地官网，如当地没有此款产品则不参加特惠活动）<br/>
          2、活动支付方式 : 仅限银行卡在线支付或银联在线支付；<br/>
          3、本活动不可使用代金卡，不与其他优惠同享<br/>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "EventDetail"
    }
</script>

<style>
  .a11{
    margin-top: 50px;
  }
  .rule{
    margin-left: 400px;
  }
  .rule h2{
    font-size: 24px;
    font-weight: 400;
    margin-top: 200px;
  }
  p{
    font-size: 16px;
    /*margin-left: 60px;*/
  }
</style>

