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
        <tr v-for="(product,index) in products" :key="product.id">
          <td>
            <img :src="product.ppic" style="width:30%">
          </td>
          <td width="20%">
            <div class="info">
              <h5>{{ product.pname }}</h5>
              <p>赠品：标配餐具10份  生日蜡烛1支</p>
            </div>
          </td>
          <td width="15%" class="size">
            {{product.size}}
            </td>
          <td width="10%" class="price">{{ product.pprice }}</td>
          <td width="10%" class="num">{{product.pnum}}</td>
          <td width="10%" class="allprice">{{ product.pprice * product.pnum }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProductOrder",
      data(){
        return{
          products:[
            {pname:'蓝莓轻乳拿破仑',pnum:2,ppic:require("../../assets/a3.jpg"),size:'2磅',pprice:198}
          ],
        }
      },
    }
</script>

<style scoped>
  .table{
    background-color:#F2F6F7;
  }
  .price,.allprice,.num,.size{
    line-height:100px;
  }
</style>
