<!--调用单个商品信息-->
<!--修改动态的数据-->
<template>
  <div>
    <!--<h2>蛋糕{{mypid}}详情</h2>-->

    <el-row :gutter="20" name="top">
      <el-col :span="10" class="product-grid">
        <img :src="product.xpic" alt="" class="pic-1">
        <img :src="product.xxpic" alt="" class="pic-2">
      </el-col>

      <el-col :span="10" :offset="1">
        <div class="p-int">
          <!--json-->
          <!--<span class="p-title">{{product[mypid-1].pname}}</span><br>-->
          <span class="p-title">{{product.pname}}</span><br>
          <!--json-->
          <!--<my-productsize :father="product[mypid-1]"></my-productsize>-->
          <my-productsize :father="product"></my-productsize>

        </div>
      </el-col>
    </el-row>

    <!--文字說明查看評論-->
    <el-row>
      <el-col :span="10" class="describe">
          <p>{{product.text}}</p>
      </el-col>
      <el-col :span="14">
        <a href="#ping" class="pinglun">查看评论>>>>></a>
      </el-col>
    </el-row>

    <el-row class="moredes">
      <el-col :span="5">
        <hr/>
      </el-col>
      <el-col :span="2">
        <img src="../../assets/home/middleicon.png" alt="" class="image">
      </el-col>
      <el-col :span="12" class="moretext hidden-sm-and-down">
        <p>{{product.intr}}</p>
      </el-col>
      <el-col :span="5">
        <hr/>
      </el-col>
    </el-row>
    <el-row class="moredes">
      <img :src="product.dpic" alt="" class="p-img">
      <!--json-->
      <!--<img :src="product[mypid-1].dpic" alt="" class="p-img">-->
    </el-row>

    <!--<div  class="zuixia">-->

    <!--</div>-->
    <el-row class="bottomdes" id="ping">
      <el-col :span="4">
        <img src="../../assets/home/katong2.gif" class="img-responsive" alt="Responsive image">
        <p class="buttonp">累积评论</p>
      </el-col>
      <el-col :span="18" class="hidden-sm-and-down" :offset="2">
        <my-review :fpid="mypid"></my-review>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import ProductSize from './ProductSize'
  import Review from './Review'

  export default {
    name: "ProductSize",
    data() {
      return {
        mypid: this.$route.params.pid,
        product: []
      }
    },
    components: {
      'my-productsize': ProductSize,
      'my-review': Review
    },
    mounted: function () {
      let _this = this
      this.$axios.get(`product/details/${this.mypid}`).then(function (result) {
        _this.product = result.data.data;
        console.log(result.data.data)
      })

    }
  }

</script>
<style>
  .p-title {
    font-size: 35px;
    color: #000;
  }

  .describe {
    margin-top: 20px;
  }

  .moredes {
    margin-top: 20px;
  }

  .moretext {
    color: #DEB887;
  }

  hr {
    height: 1px;
    background-color: #000
  }

  .p-int {
    margin-top: 20px;
  }

  .bottomdes {
    margin-top: 20px;
    font-size: 50px
  }

  .buttonp {
    margin-top: 20px;
    color: #DEB887;
    font-size: 30px;
    margin-left: 20px;
  }

  /*.zuixia{*/
  /*height: 20px;*/
  /*width: 20px;*/
  /*position: fixed;*/
  /*}*/

  .pinglun {
    display: block;
    margin-top: 50px;
    font-size: 20px;
    font-weight: bold;
    float: right;
    /*float: bottom;*/
  }
</style>

<style scoped>
  .p-img {
    width: 100%
  }

  /*图片展示*/
  .product-grid .pic-1 {
    opacity: 1;
    transform: rotateY(0);
    transition: all 0.5s ease-out 0s;
  }

  .product-grid:hover .pic-1 {
    opacity: 0;
    transform: rotateY(-90deg);
  }

  .product-grid .pic-2 {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: rotateY(-90deg);
    transition: all 0.5s ease-out 0s;
  }

  .product-grid:hover .pic-2 {
    opacity: 1;
    transform: rotateY(0deg);
  }

  .product-grid .price span {
    display: inline-block;
    color: #999;
    text-decoration: line-through;
    margin-right: 2px;
  }

  .product-grid .rating li {
    display: inline-block;
    font-size: 10px;
    color: #ffc000;
  }

  /*@media only screen and (max-width:990px){*/
  /*.product-grid{ margin-bottom: 30px; }*/
  /*}*/


</style>
