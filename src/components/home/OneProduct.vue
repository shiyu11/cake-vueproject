
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
      <el-col :sm="12" :md="6" :lg="6" :xl="6"  v-for="(onep,index) in mydata[myoccasion-1]" >
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
            </div>
            </el-row>
          </div>
        </el-card>
      </el-col>

      <!--序号-->
      <!--<el-col>-->
        <!--<div class="block">-->
          <!--<span class="demonstration">显示总数</span>-->
          <!--<el-pagination-->
            <!--@current-change="handleCurrentChange"-->
            <!--:current-page.sync="5"-->
            <!--:page-size="5"-->
            <!--layout="total, prev, pager, next"-->
            <!--:total="100">-->
          <!--</el-pagination>-->
        <!--</div>-->
      <!--</el-col>-->
    </el-row>
  </div>

<!--模态框-->
    <!--<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">-->
      <!--<div class="modal-dialog modal-sm" role="document">-->
        <!--<div class="modal-content mymodal">-->
          <!--<span class="buytitle">选择您要订购的磅数</span>-->
          <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
          <!--<hr>-->
          <!--<my-addcart></my-addcart>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

</div>
</template>

<script>
  import addcart from '../home/addcart'


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
    font-size:20px
  }
  .ptaste{
    color:#B0916A;
    font-size:15px ;
    border: 1px solid #B0916A;
    margin-top: 5px;
  }


</style>


