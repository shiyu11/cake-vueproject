<!--<template>-->
<!--<div>-->
<!--<img src="../../assets/p1.jpg" alt="">-->
<!--<router-link to="/productDetail/1" tag="button">详情</router-link>-->
<!--<button >加入购物车</button>-->
<!--</div>-->
<!--</template>-->
<template>
  <div>
    <h2>我是场合{{myoccasion}}</h2>
    <div>
    <span class="changtitle" >
        <span class="maxtitle">{{occasion[myoccasion-1].occa}}</span><span class="mintitle">&nbsp;/专区</span>
      </span>
      <el-row class="space">
        <el-col :span="24">
          <img :src="occasion[myoccasion-1].pic" class="image">
        </el-col>
      </el-row>
      <my-products></my-products>
    </div>

    <div class="dwidth">
    <el-row  class="space" justify="center" :gutter="20" >
      <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.occasion==myoccasion">
        <el-card :body-style="{ padding: '2px' }" class="space">
          <!--<img src="../../assets/p1.jpg" class="image">-->
          <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
            <img :src="onep.ppic"  class="image">
          </router-link>
          <!--<img  :src="imgSrc(nonep.img)"  class="image">-->
          <div style="padding:14px;">
            <el-row>
              <el-col :span="24">
              <span class="pname">{{onep.pname}}</span>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <span class="ptaste">{{onep.taste}}</span>
              </el-col>
            </el-row>

            <el-row>
            <div class="bottom clearfix">
              <el-col :span="12">
              <span class="pname"><span>￥</span>{{onep.pprice}}</span>
              </el-col>
              <el-col :span="12">

                <button type="button" class="btn button" data-toggle="modal" data-target=".bs-example-modal-sm">加入购物车</button>


              </el-col>
            </div>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          ...
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import ProductSize from '../productdetails/ProductSize'
  export default {
    data() {
      return {
        myoccasion: this.$route.params.occasion,
        occasion:[
          {"occa":"新品","pic":require("../../assets/newlong.jpg")},
          {"occa":"儿童","pic":require("../../assets/childlong.jpg")},
          {"occa":"生日","pic":require("../../assets/birthlong.jpg")},
          {"occa":"聚会","pic":require("../../assets/togetherlong.jpg")},
        ],
        products: [
          {
            "pname": "1黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 1,
            "occasion": 1,
            "taste": "慕斯",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "2蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 2,
            "occasion": 2,
            "taste":"慕斯",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "3蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 3,
            "occasion": 3,
            "taste":"慕斯",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "4蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 4,
            "occasion": 4,
            "taste":"慕斯",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "5蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 5,
            "occasion": 2,
            "taste":"鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "6黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 6,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "7蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 7,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "8蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 8,
            "occasion": 3,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "9蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 9,
            "occasion": 4,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "10蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 10,
            "occasion": 4,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "11黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 11,
            "occasion": 3,
            "taste": "鲜奶",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "12蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 12,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "13蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 13,
            "occasion": 2,
            "taste": "鲜奶",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "14蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 14,
            "occasion": 4,
            "taste": "巧克力",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "15蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 15,
            "occasion": 1,
            "taste":"巧克力",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "16黛西的旅行",
            "ppic": require("../../assets/p1.jpg"),
            "pprice": "255",
            "pid": 16,
            "occasion": 3,
            "taste":"巧克力",
            "dpic": require("../../assets/d1.jpg"),
            "xpic": require("../../assets/x1.jpg")
          },
          {
            "pname": "17蔓越莓红丝绒",
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "285",
            "pid": 17,
            "occasion": 4,
            "taste":"巧克力",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
          },
          {
            "pname": "18蓝莓轻乳拿破仑",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 18,
            "occasion": 2,
            "taste": "芝士",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "19蓝莓轻乳拿破仑2",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 19,
            "occasion": 3,
            "taste": "芝士",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "20蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 20,
            "occasion": 1,
            "taste": "芝士",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
          {
            "pname": "21蓝莓轻乳拿破仑4",
            "ppic": require("../../assets/p3.jpg"),
            "pprice": "555",
            "pid": 21,
            "occasion": 4,
            "taste": "芝士",
            "dpic": require("../../assets/d3.jpg"),
            "xpic": require("../../assets/x3.jpg")
          },
        ],
        showproducts:[]
      }
    },
    components:{
      'my-productsize':ProductSize
    },
    watch:{
      '$route':function(to,from){
        this.myoccasion=to.params.occasion
      }
    },
    methods: {

      },
    computed:{

    }


  }
</script>


<style>
  .maxtitle {
    font-size: 30px;
    color: #B0916A;
  }

  .changtitle {
    display: block;
    margin-top: 20px;
  }

  .mintitle {
    font-size: 20px;
    color: #B0916A;
    font-weight: bold;
  }
  .space{
    display:block;
    margin-top: 20px;
  }
  .image{
    dispaly:block;
    width: 100%;
  }
  .dwidth{
    margin-bottom: 20px;
  }


  el-row{
    text-align: center;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    color: #B0916A;
  }

  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .pname{
    font-size:20px
  }
  .ptaste{
    color:#B0916A;
    font-size:15px ;
  }

</style>


