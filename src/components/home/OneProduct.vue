
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
        <el-col :span="24" >
          <img :src="occasion[myoccasion-1].pic" class="image" style="border-radius: 25px">
        </el-col>
      </el-row>
    </div>
    <div class="dwidth">
    <el-row  class="space" justify="center" :gutter="20" >



      <el-col :sm="12" :md="6" :lg="6" :xl="6"  v-for="(onep,index) in mydata[myoccasion-1]" :key="index">
        <el-card :body-style="{ padding: '2px' }" class="space">
          <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
            <img :src="onep.ppic"  class="image">
          </router-link>
          <div class="shuom">
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
            </div>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
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
        mydata:[],


      }
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
      this.$axios.get(`product`).then(function (result) {
        _this.products = result.data.data;
        // console.log(result.data)
        let data1=[], data2=[], data3=[], data4=[]
        for(let i=0;i<result.data.data.length;i++){
          if(result.data.data[i].occasion==1){
           data1.push(result.data.data[i])
          }
          if(result.data.data[i].occasion==2){
            data2.push(result.data.data[i])
          }
          if(result.data.data[i].occasion==3){
            data3.push(result.data.data[i])
          }
          if(result.data.data[i].occasion==4){
            data4.push(result.data.data[i])
          }
        }
        _this.mydata.push(data1,data2,data3,data4)
      })
    },

  }
</script>


<style scoped>
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
    font-size:20px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .ptaste{
    color:#B0916A;
    font-size:15px ;
    border: 1px solid #B0916A;
    margin-top: 5px;
  }
  .shuom{
    margin-left: 15px;
  }


</style>


