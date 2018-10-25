
<!--场合的分类展示页-->
<!--场合是定的数字，保留-->
<!--接口获取所有的蛋糕数据-->
<template>
<div>
    <div>
    <span class="changtitle" >
        <span class="maxtitle">{{occasion[myoccasion-1].occa}}</span><span class="mintitle">&nbsp;/专区</span>
      </span>
      <el-row class="space">
        <el-col :span="24">
          <img :src="occasion[myoccasion-1].pic" class="image">
        </el-col>
      </el-row>
    </div>

    <div class="dwidth">
    <el-row  class="space" justify="center" :gutter="20" >
      <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.occasion==myoccasion"  >
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
              <span class="pname"><span>￥</span>{{onep.pprice}}{{onep.pid}}</span>
              </el-col>
              <!--<el-col :span="12">-->
                <!--<button type="button" class="btn button" data-toggle="modal" data-target=".bs-example-modal-sm">加入购物车</button>-->
              <!--</el-col>-->
            </div>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

<!--模态框-->
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content mymodal">
          <span class="buytitle">选择您要订购的磅数</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <hr>
          <my-addcart></my-addcart>
        </div>
      </div>
    </div>

</div>
</template>

<script>
  import addcart from '../home/addcart'
  import axios from 'axios'

  export default {
    data() {
      return {
        myoccasion: this.$route.params.occasion,
        occasion:[
          {"occa":"新品","pic":require("../../assets/home/newlong.jpg")},
          {"occa":"儿童","pic":require("../../assets/home/childlong.jpg")},
          {"occa":"生日","pic":require("../../assets/home/birthlong.jpg")},
          {"occa":"聚会","pic":require("../../assets/home/togetherlong.jpg")},
        ],

        products: [
        ],
        // products:null
      }
    },
    components:{
      'my-addcart':addcart
    },
    watch:{
      '$route':function(to,from){
        this.myoccasion=to.params.occasion
      }
    },
    methods: {

    },
    computed:{

    },
    mounted: function () {
      let _this = this
      axios.get(`http://localhost:3000/product`).then(function (result) {
        _this.products = result.data.data;
        console.log(result.data)
      })
    },

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
    border: 1px solid #B0916A;
    margin-top: 5px;
  }
  .buytitle{
    font-size:20px;

  }
  .mymodal{
    width:400px;
    padding:10px;
  }

</style>


