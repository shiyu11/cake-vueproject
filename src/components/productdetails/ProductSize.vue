<template>
  <div class="p-size">
    <div v-if="type==0">
      <span class="p-price"><span>￥</span>{{father.pprice}} <span>/磅</span> </span>
      <ul>
        <li><span class="p-chooseprice">已选1磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合3-4人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含5套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else-if="type==1">
      <span class="p-price"><span>￥</span>{{father.pprice*2}} </span>
      <ul>
        <li><span class="p-chooseprice">已选2磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合7-8人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含10套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else-if="type==2">
      <span class="p-price"><span>￥</span>{{father.pprice*3}}</span>
      <ul>
        <li><span class="p-chooseprice">已选3磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合11-12人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含15套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
      </ul>
    </div>
    <div v-else>
      <span class="p-price"><span>￥</span>{{father.pprice*4}}</span>
      <ul>
        <li><span class="p-chooseprice">已选4磅</span></li>
        <li><img src="../../assets/home/sweet.png" alt="">适合15-20人分享</li>
        <li><img src="../../assets/home/sweet.png" alt="">含20套餐具</li>
        <li><img src="../../assets/home/sweet.png" alt="">最早明天 09:30配送</li>
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
      <el-col :span="6" :offset="2">
        <el-button  round type="warning" @click="putCart(type)"><a href="#/cart">加入购物车</a></el-button>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-button round type="warning" ><a href="#/check">立即购买</a></el-button>
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
      },
      putCart: function (type) {
        var bangshu = type + 1;
        var productpid = this.father.pname
        var shuju = '{' + productpid + ',' + bangshu + '}'
        console.log(shuju)
        // console.log(bangshu,productpid)
        if (sessionStorage.getItem('products')) {
          var products = sessionStorage.getItem('products');
          products += (',' + shuju);
          sessionStorage.setItem('products', products);
          alert('已经放入购物车中！')
        } else {
          //var products = [];
          //products.push(product); JSON.stringify(products)
          sessionStorage.setItem('products', shuju);
        }

      }
    },
    props:['father'],


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
  .p-chooseprice{
    display: block;
    font-size: 20px;
    color: #B0916A;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

<style scoped>
  ul {
    list-style: none;
    margin-top: 20px;
  }

  li {
    font-size: 20px;
    color:#696969;

  }

</style>
