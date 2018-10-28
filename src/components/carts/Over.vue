<template>
  <div class="container max">
    <div class="row">

      <div>
        <h2 class="h2">订单已完成</h2>
      </div>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">收货人姓名：</span>{{aname}}</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">手机号：</span>{{phone}}</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">收货人地址：</span>{{address}}</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">配送时间：</span>{{time}}</h4>
        </el-col>
      </el-row>
      <!--<el-row>-->
        <!--<el-col :span="15" :offset="2">-->
          <!--<h4 style="font-weight: bold">已购买的商品：</h4>-->
        <!--</el-col>-->
      <!--</el-row>-->

      <!--<table class="table">-->
        <!--<tbody>-->
        <!--<tr>-->
          <!--<th></th>-->
          <!--<th>订单信息</th>-->
          <!--<th>数量</th>-->
          <!--<th>小计</th>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td>-->
            <!--<img src="../../assets/a3.jpg" style="width:26%">-->
          <!--</td>-->
          <!--<td width="30%">-->
            <!--Velour rouge<br/>-->
            <!--蔓越莓红丝绒<br/>-->
            <!--2磅<br/>-->
            <!--标配：10份标配餐具<br/>-->
          <!--</td>-->
          <!--<td width="10%" class="num">x1</td>-->
          <!--<td width="15%" class="price">￥298.00</td>-->
        <!--</tr>-->
        <!--</tbody>-->
      <!--</table>-->
      <div class="tdiv">
        <span class="span4">共{{totalNum}}</span>件商品，
        总商品金额:￥{{totalMoney}}
      </div>



<div>
  <button @click="allOrder" style="float: right">查看全部订单</button>
</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Over",
    data(){
      return{
        aname:sessionStorage.getItem('aname'),
        phone:sessionStorage.getItem('phone'),
        address:sessionStorage.getItem('address'),
        time:sessionStorage.getItem('time1'),
        totalNum:sessionStorage.getItem('totalNum1'),
        totalMoney:sessionStorage.getItem('totalMoney1'),
      }
    },
    methods:{
      allOrder(){
        this.$router.push({path:'/usercenter/Myorder'})
      }
    }
  }
</script>

<style scoped>
  table{
    background-color:#F2F6F7;
  }
  .h2{
    margin-top: 50px;
    margin-left: 500px;
  }
  .num,.price{
    line-height: 100px;
  }
  .tdiv{
    font-size:16px;
    text-align: right;
    margin-bottom: 10px;
  }
  .span4{
    color:firebrick;
  }
  .max{
    margin-bottom: 200px;
  }
</style>
