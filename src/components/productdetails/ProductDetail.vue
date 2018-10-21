<!--调用单个商品信息-->
<!--修改动态的数据-->
<template>
  <div>
    <!--<h2>蛋糕{{mypid}}详情</h2>-->

    <el-row :gutter="20" name="top">
      <el-col :span="12">
        <!--json-->
        <!--<img :src="product[mypid-1].xpic" alt="" class="p-img">-->
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

      <el-col :span="6" :offset="5">
        <img src="../../assets/home/katong2.gif" class="img-responsive" alt="Responsive image">
      </el-col>
      <el-col :span="8" class="moretext hidden-sm-and-down">
        <p class="buttonp">已经到底啦</p>
        <a href="#top" class="buttonp">回顶部</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ProductSize from './ProductSize'
  import axios from 'axios'
  export default {
    name: "ProductSize",
    data() {
      return {
        mypid: this.$route.params.pid,
        // product: [
        //   {
        //     "pname": "1黛西的旅行",
        //     "ppic": require("../../assets/products/p1.jpg"),
        //     "pprice": "255",
        //     "pid": 1,
        //     "occasion": 1,
        //     "taste": "慕斯",
        //     "dpic": require("../../assets/products/d1.jpg"),
        //     "xpic": require("../../assets/products/x1.jpg")
        //   },
        //   {
        //     "pname": "2蔓越莓红丝绒",
        //     "ppic": require("../../assets/products/p2.jpg"),
        //     "pprice": "355",
        //     "pid": 2,
        //     "occasion": 2,
        //     "taste":"慕斯",
        //     "dpic": require("../../assets/products/d2.jpg"),
        //     "xpic": require("../../assets/products/x2.jpg")
        //   },
        //   {
        //     "pname": "3蓝莓轻乳拿破仑",
        //     "ppic": require("../../assets/products/p3.jpg"),
        //     "pprice": "455",
        //     "pid": 3,
        //     "occasion": 3,
        //     "taste":"慕斯",
        //     "dpic": require("../../assets/products/d3.jpg"),
        //     "xpic": require("../../assets/products/x3.jpg")
        //   },
        //   {
        //     "pname": "4蓝莓轻乳拿破仑2",
        //     "ppic": require("../../assets/products/p3.jpg"),
        //     "pprice": "555",
        //     "pid": 4,
        //     "occasion": 4,
        //     "taste":"慕斯",
        //     "dpic": require("../../assets/products/d3.jpg"),
        //     "xpic": require("../../assets/products/x3.jpg")
        //   },
        //   {
        //     "pname": "5蓝莓轻乳拿破仑3",
        //     "ppic": require("../../assets/products/p3.jpg"),
        //     "pprice": "655",
        //     "pid": 5,
        //     "occasion": 2,
        //     "taste":"鲜奶",
        //     "dpic": require("../../assets/products/d3.jpg"),
        //     "xpic": require("../../assets/products/x3.jpg")
        //   },
        //   {
        //     "pname": "6黛西的旅行",
        //     "ppic": require("../../assets/products/p7.jpg"),
        //     "pprice": "755",
        //     "pid": 6,
        //     "occasion": 1,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d7.jpg"),
        //     "xpic": require("../../assets/products/x7.jpg")
        //   },
        //   {
        //     "pname": "7蔓越莓红丝绒",
        //     "ppic": require("../../assets/products/p8.jpg"),
        //     "pprice": "855",
        //     "pid": 7,
        //     "occasion": 1,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d8.jpg"),
        //     "xpic": require("../../assets/products/x8.jpg")
        //   },
        //   {
        //     "pname": "8蓝莓轻乳拿破仑",
        //     "ppic": require("../../assets/products/p9.jpg"),
        //     "pprice": "955",
        //     "pid": 8,
        //     "occasion": 3,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d9.jpg"),
        //     "xpic": require("../../assets/products/x9.jpg")
        //   },
        //   {
        //     "pname": "9蓝莓轻乳拿破仑2",
        //     "ppic": require("../../assets/products/p10.jpg"),
        //     "pprice": "155",
        //     "pid": 9,
        //     "occasion": 4,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d10.jpg"),
        //     "xpic": require("../../assets/products/x10.jpg")
        //   },
        //   {
        //     "pname": "10蓝莓轻乳拿破仑3",
        //     "ppic": require("../../assets/products/p11.jpg"),
        //     "pprice": "255",
        //     "pid": 10,
        //     "occasion": 4,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d11.jpg"),
        //     "xpic": require("../../assets/products/x11.jpg")
        //   },
        //   {
        //     "pname": "11黛西的旅行",
        //     "ppic": require("../../assets/products/p6.jpg"),
        //     "pprice": "355",
        //     "pid": 11,
        //     "occasion": 3,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d6.jpg"),
        //     "xpic": require("../../assets/products/x6.jpg")
        //   },
        //   {
        //     "pname": "12蔓越莓红丝绒",
        //     "ppic": require("../../assets/products/p5.jpg"),
        //     "pprice": "455",
        //     "pid": 12,
        //     "occasion": 1,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d5.jpg"),
        //     "xpic": require("../../assets/products/x5.jpg")
        //   },
        //   {
        //     "pname": "13蓝莓轻乳拿破仑",
        //     "ppic": require("../../assets/products/p4.jpg"),
        //     "pprice": "555",
        //     "pid": 13,
        //     "occasion": 2,
        //     "taste": "鲜奶",
        //     "dpic": require("../../assets/products/d4.jpg"),
        //     "xpic": require("../../assets/products/x4.jpg")
        //   },
        //   {
        //     "pname": "14蓝莓轻乳拿破仑2",
        //     "ppic": require("../../assets/products/p7.jpg"),
        //     "pprice": "655",
        //     "pid": 14,
        //     "occasion": 4,
        //     "taste": "巧克力",
        //     "dpic": require("../../assets/products/d7.jpg"),
        //     "xpic": require("../../assets/products/x7.jpg")
        //   },
        //   {
        //     "pname": "15蓝莓轻乳拿破仑3",
        //     "ppic": require("../../assets/products/p5.jpg"),
        //     "pprice": "755",
        //     "pid": 15,
        //     "occasion": 1,
        //     "taste":"巧克力",
        //     "dpic": require("../../assets/products/d5.jpg"),
        //     "xpic": require("../../assets/products/x5.jpg")
        //   },
        //   {
        //     "pname": "16黛西的旅行",
        //     "ppic": require("../../assets/products/p11.jpg"),
        //     "pprice": "855",
        //     "pid": 16,
        //     "occasion": 3,
        //     "taste":"巧克力",
        //     "dpic": require("../../assets/products/d11.jpg"),
        //     "xpic": require("../../assets/products/x11.jpg")
        //   },
        //   {
        //     "pname": "17蔓越莓红丝绒",
        //     "ppic": require("../../assets/products/p7.jpg"),
        //     "pprice": "955",
        //     "pid": 17,
        //     "occasion": 4,
        //     "taste":"巧克力",
        //     "dpic": require("../../assets/products/d7.jpg"),
        //     "xpic": require("../../assets/products/x7.jpg")
        //   },
        //   {
        //     "pname": "18蓝莓轻乳拿破仑",
        //     "ppic": require("../../assets/products/p3.jpg"),
        //     "pprice": "155",
        //     "pid": 18,
        //     "occasion": 2,
        //     "taste": "芝士",
        //     "dpic": require("../../assets/products/d3.jpg"),
        //     "xpic": require("../../assets/products/x3.jpg")
        //   },
        //   {
        //     "pname": "19蓝莓轻乳拿破仑2",
        //     "ppic": require("../../assets/products/p9.jpg"),
        //     "pprice": "255",
        //     "pid": 19,
        //     "occasion": 3,
        //     "taste": "芝士",
        //     "dpic": require("../../assets/products/d9.jpg"),
        //     "xpic": require("../../assets/products/x9.jpg")
        //   },
        //   {
        //     "pname": "20蓝莓轻乳拿破仑3",
        //     "ppic": require("../../assets/products/p11.jpg"),
        //     "pprice": "355",
        //     "pid": 20,
        //     "occasion": 1,
        //     "taste": "芝士",
        //     "dpic": require("../../assets/products/d11.jpg"),
        //     "xpic": require("../../assets/products/x11.jpg")
        //   },
        //   {
        //     "pname": "21蓝莓轻乳拿破仑4",
        //     "ppic": require("../../assets/products/p10.jpg"),
        //     "pprice": "455",
        //     "pid": 21,
        //     "occasion": 4,
        //     "taste": "芝士",
        //     "dpic": require("../../assets/products/d10.jpg"),
        //     "xpic": require("../../assets/products/x10.jpg")
        //   },
        // ],
        product:[]


    }},
    components: {
      'my-productsize': ProductSize
    },
    mounted: function () {
      let _this = this
      axios.get(`http://localhost:3000/product/details/${this.mypid}`).then(function (result) {
        _this.product = result.data.data;
        console.log(result.data.data)
      })
    },


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
    margin-top: 80px;
  }

</style>

<style scoped>
  .p-img {
    width: 100%
  }

</style>
