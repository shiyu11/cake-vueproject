<template>
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <el-input v-model="input" placeholder="请输入商品名" style="width: 240px;"></el-input>
            <el-button type="warning" plain icon="el-icon-search" circle>搜索</el-button>
          </div>
      <div class="col-md-11">
        <table class="table">
          <tr>
            <th>订单信息</th>
            <th>收货人</th>
            <th>金额</th>
            <th>订单状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <td class="order-1">
              <img src="../../assets/strawbercake.png" alt="" width="150" height="150">
              <h3>Fraise-Chantilly</h3>
              <h4>鲜梅印雪</h4>
              <p>赠品：标配餐具10份 生日蜡烛一支</p>
            </td>
            <td>小朋友</td>
            <td>333</td>
            <td>已完成</td>
            <td>删除</td>
          </tr>
          <tr>
            <td class="order-1">
              <img src="../../assets/strawbercake.png" alt="" width="150" height="150">
              <h3>Fraise-Chantilly</h3>
              <h4>鲜梅印雪</h4>
              <p>赠品：标配餐具10份 生日蜡烛一支</p>
            </td>
            <td>大朋友</td>
            <td>222</td>
            <td>未完成</td>
            <td>删除</td>
          </tr>
        </table>
      </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserOrderAll",
      data(){
          return {
            input:''
          }
      }
    }
</script>

<style scoped>
  .table{
    border:solid 1px #add9c0;
    margin-top: 20px;
  }
  .table th{
    text-align: center;
    background-color:;
    font-size: 20px;
    color: white;
  }
  .table td{
    text-align: center;
  }
  .order-1{
    width: 500px;
    height: 200px;
  }
  img{
    float: left;
    margin-left: 53px;
  }
</style>
