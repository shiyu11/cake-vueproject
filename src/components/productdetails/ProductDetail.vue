<!--调用单个商品信息-->
<!--修改动态的数据-->
<template>
  <div>
    <!--<h2>蛋糕{{mypid}}详情</h2>-->

    <el-row :gutter="20" name="top">
      <el-col :span="12">
        <img :src="product.xpic" alt="" class="p-img">

      </el-col>

      <el-col :span="10" :offset="1">
        <div class="p-int">
          <!--json-->
          <!--<span class="p-title">{{product[mypid-1].pname}}</span><br>-->
          <span class="p-title">{{product.pname}}</span><br>
          <!--json-->
          <!--<my-productsize :father="product[mypid-1]"></my-productsize>-->
          <my-productsize :father="product"></my-productsize>
          <div class="describe">
            <p>{{product.text}}</p>
            <!--<a href="#ping" style="margin-top:10px">查看评论》》》》》》》》》》</a>-->
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="moredes">
      <el-col :span="5">
        <hr/>
      </el-col>
      <el-col :span="2">
        <img src="../../assets/products/middleicon.png" alt="" class="image">
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

    <el-row class="bottomdes">
      <el-col :span="4" >
        <img src="../../assets/home/katong2.gif" class="img-responsive" alt="Responsive image" >
        <p class="buttonp" name="ping">累积评论</p>
      </el-col>
      <el-col :span="16" class="hidden-sm-and-down" :offset="2">
        <my-review :fpid="mypid"></my-review>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="2" :offset="22">
        <a href="#top">
        <img src="../../assets/home/top.gif" class="img-responsive" alt="Responsive image">
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ProductSize from './ProductSize'
  import Review from './Review'
  import axios from 'axios'
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
      axios.get(`http://localhost:3000/product/details/${this.mypid}`).then(function (result) {
        _this.product = result.data.data;
        console.log(result.data.data)
      })
      // $(function(){
      //   $host = $('[mag-thumb="outer-drag"]');
      // this.$refs.bimg.mag.mode='outer'
      // this.$refs.bimg.mag.position='drag'
      // this.$refs.bimg.mag.toggle='false'

      }
      //   $host.mag({
      //     mode: 'outer',
      //     position: 'drag',
      //     toggle: false
      // })
      //
      // });


 }

</script>
<style>
  .p-title {
    font-size: 25px;
    color: #000;
  }
  .describe {
    margin-top: 20px;
  }
  .moredes{
    margin-top: 20px;
  }
  .moretext{
    color: #DEB887;
  }
  hr{
    height:1px;
    background-color:#000
  }
  .p-int{
    margin-top:20px;
  }
  .bottomdes{
    margin-top: 20px;
    font-size:50px
  }
  .buttonp{
    margin-top: 20px;
    color: #DEB887;
    font-size: 30px;
    margin-left: 20px;
  }
  .topimg{
    /*background: #00B3ED*/
  }

</style>

<style scoped>
  .p-img {
    width: 100%
  }



  /*小鬼*/

</style>
