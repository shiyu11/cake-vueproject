<template>
  <div class="container">
    <div class="row">

      <div>
        <app-over-list></app-over-list>
      </div>

      <div>
        <h2 class="h2">订单已完成</h2>
      </div>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">收货人姓名：</span>{{$store.state.name1}}</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">手机号：</span>{{$store.state.phone1}}</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">收货人地址：</span>{{$store.state.address1}}</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15" :offset="2">
          <h4><span style="font-weight: bold">配送时间：</span>{{$store.state.time1}}</h4>
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
        <tr>
          <td>
            <img src="../../assets/a3.jpg" style="width:20%">
          </td>
          <td>
            Velour rouge<br/>
            蔓越莓红丝绒<br/>
            2磅<br/>
            标配：10份标配餐具<br/>
          </td>
          <td>x1</td>
          <td>￥298.00</td>
        </tr>
        <tr>
          <td>
            <img src="../../assets/a5.jpg" style="width:20%">
          </td>
          <td>
            Napoléon aux myrtilles<br/>
            蓝莓轻乳拿破仑<br/>
            2磅<br/>
            标配：10份标配餐具<br/>
          </td>
          <td>x1</td>
          <td>￥218.00</td>
        </tr>
        </tbody>
      </table>

<div>
  <button @click="allOrder" style="float: right">查看全部订单</button>
</div>
    </div>
  </div>
</template>

<script>
  import OverList from './OverList'
  export default {
    name: "Over",
    components:{
      'app-over-list':OverList
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
</style>
