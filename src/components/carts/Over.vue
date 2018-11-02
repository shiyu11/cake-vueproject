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
      <el-row>
        <el-col :span="15" :offset="2">
          <h4 style="font-weight: bold">已购买的商品：</h4>
        </el-col>
      </el-row>

      <table class="table">
        <tbody>
        <tr>
          <th></th>
          <th>订单信息</th>
          <th>数量</th>
          <th>小计</th>
        </tr>
        <tr v-for="(onew,index) in products">
          <td>
            <img :src="onew.ppic" style="width:26%">
          </td>
          <td width="30%">
            {{onew.pname}}<br/>
            {{onew.size}}磅<br/>
            标配：10份标配餐具<br/>
          </td>
          <td width="10%" class="num">{{onew.rnum}}</td>
          <td width="15%" class="price">{{ onew.pprice * onew.rnum }}</td>
        </tr>
        </tbody>
      </table>
      <div class="tdiv">
        共<span class="span4">{{totalNum}}</span>件商品，
        应支付:<span class="span4">￥{{totalMoney}}</span>
      </div>


     <div class="row col-xs-2 col-xs-push-10">
       <button @click="pay" class="btn btn-primary" style="width: 100%">去付款</button>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Over",
    data(){
      return{
        products:'',
        aname:sessionStorage.getItem('aname'),
        phone:sessionStorage.getItem('phone'),
        address:sessionStorage.getItem('address'),
        time:sessionStorage.getItem('time1'),
        totalNum:sessionStorage.getItem('totalNum1'),
        totalMoney:sessionStorage.getItem('totalMoney1'),
      }
    },
    methods:{
      pay(){
        this.$router.push({path:'/over'})
      }
    },
    mounted() {
      this.products=JSON.parse(sessionStorage.getItem('product'));
      console.log('获取的数据'+JSON.stringify(this.products))
    },
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
    font-size:18px;
    text-align: right;
    margin-bottom: 10px;
  }
  .span4{
    color:firebrick;
    font-size: 25px;
  }
  .max{
    margin-bottom: 200px;
  }
</style>
