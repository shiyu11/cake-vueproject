<template>
  <div class="container">
    <div class="row">
      <el-row>
        <el-col :span="15" :offset="2">
          <h4>确认商品信息</h4>
        </el-col>
      </el-row>

      <table class="table">
        <tbody>
        <tr>
          <td></td>
          <td>商品</td>
          <td>规格</td>
          <td>单价</td>
          <td>数量</td>
          <td>小计</td>
        </tr>
        <tr>
          <td>
            <img src="../../assets/1.jpg" style="width:35%">
          </td>
          <td>
            Velour rouge
            蔓越莓红丝绒
          </td>
          <td>2磅 4-7人食<br/>
            标配：10份标配餐具</td>
          <td>￥298.00</td>
          <td>x1</td>
          <td>￥298.00</td>
        </tr>
        <tr>
          <td>
            <img src="../../assets/2.jpg" style="width:35%">
          </td>
          <td>
            Napoléon aux myrtilles
            蓝莓轻乳拿破仑
          </td>
          <td>2磅 4-7人食<br/>
            标配：10份标配餐具</td>
          <td>￥298.00</td>
          <td>x1</td>
          <td>￥298.00</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProductOrder"
    }
</script>

<style scoped>
  .table{
    background-color:#F2F6F7;
  }
</style>
