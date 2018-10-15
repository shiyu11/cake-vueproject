<template>
  <div class="p-size">
    <div v-if="type==0">
      <span class="p-price">￥298.00</span>
      <ul>
        <li><img src="../../assets/sweet.png" alt="">适合3-4人分享</li>
        <li><img src="../../assets/sweet.png" alt="">含5套餐具</li>
        <li><img src="../../assets/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else-if="type==1">
      <span class="p-price">￥1298.00</span>
      <ul>
        <li><img src="../../assets/sweet.png" alt="">适合7-8人分享</li>
        <li><img src="../../assets/sweet.png" alt="">含10套餐具</li>
        <li><img src="../../assets/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else-if="type==2">
      <span class="p-price">￥2298.00</span>
      <ul>
        <li><img src="../../assets/sweet.png" alt="">适合11-12人分享</li>
        <li><img src="../../assets/sweet.png" alt="">含15套餐具</li>
        <li><img src="../../assets/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else>
      <span class="p-price">￥3298.00</span>
      <ul>
        <li><img src="../../assets/sweet.png" alt="">适合15-20人分享</li>
        <li><img src="../../assets/sweet.png" alt="">含20套餐具</li>
        <li><img src="../../assets/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <el-row :gutter="20" class="el-row-bang">
      <el-col :span="4" >
        <el-button type="warning" round plain v-on:click="show(0)">1磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button  round type="warning" plain v-on:click="show(1)">2磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button  round type="warning" plain v-on:click="show(2)">3磅</el-button>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button round type="warning" plain v-on:click="show(3)">4磅</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row-cart">
      <el-col :span="6" :offset="1">
        <el-button  round type="warning">加入购物车</el-button>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-button round type="warning" >立即购买</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: "ProductSize",
    data() {
      return {
        message: '内容一',
        type: 0,
      }
    },
    methods: {
      show: function (index) {
        this.type = index;
      }
    }


  }
</script>
<style>
 .el-row-cart{
   margin-top:50px;
 }
  .p-size{
    margin-top: 15px;
  }
  .el-row-bang{
    margin-top: 20px;
  }
 .p-price {
   display: block;
   font-size: 25px;
   color: #B0916A;
   margin-top: 20px
 }
</style>

<style scoped>
  ul {
    list-style: none;
    margin-top: 20px;
  }

  li {
    font-size: 20px;
    color: #ccc;

  }

</style>
