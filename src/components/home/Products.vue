<template>
  <!--首页的口味分类-->
  <div>
    <div class="mian mian1" >
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../assets/home/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/home/bg-ds-1.png" class="img-responsive" alt="Responsive image">
          <h2>慕斯</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth" data-dismiss="modal">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="12" :md="6" :lg="6" :xl="6" v-for="(onep,index) in showList0"  >
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <!--<img :src="getImg(onep.ppic)" class="image">-->
                    <img :src="onep.ppic" class="image">
                  </router-link>
                  <div style="padding:10px;">
                    <el-row>
                      <el-col :span="24">
                        <span class="pname">{{onep.pname}}</span>
                      </el-col>
                    </el-row>
                    <el-row>
                      <div class="bottom clearfix">
                        <el-col :span="12">
                          <span class="pname"><span>￥</span>{{onep.pprice}}</span>
                        </el-col>
                        <!--<el-col :span="12">-->
                          <!--<button type="button" class="btn button" data-toggle="modal" data-target=".bs-example-modal-sm" >加入购物车</button>-->
                        <!--</el-col>-->
                      </div>
                    </el-row>
                  </div>
                </el-card>
                <!--测验-->
                <!--<input type="button" :value="getImg(onep.ppic)">-->
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div @click="showAll0 = !showAll0" class="button1 btn_style3" style="float: right">{{word0}}</div>
      </el-row>
    </div>


    <div class="mian mian2">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../assets/home/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/home/bg-ds-3.png" class="img-responsive" alt="Responsive image">
          <h2>水果</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="12" :md="6" :lg="6" :xl="6" v-for="(onep,index) in showList1"  >
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image">
                  </router-link>
                  <div style="padding:10px;">
                    <el-row>
                      <el-col :span="24">
                        <span class="pname">{{onep.pname}}</span>
                      </el-col>

                    </el-row>
                    <el-row>
                      <div class="bottom clearfix">
                        <el-col :span="12">
                          <span class="pname"><span>￥</span>{{onep.pprice}}</span>
                        </el-col>
                        <!--<el-col :span="12">-->
                          <!--<button type="button" class="btn button" data-toggle="modal" data-target=".bs-example-modal-sm">加入购物车</button>-->
                        <!--</el-col>-->
                      </div>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
              <!--<div @click="showAll = !showAll" class="show-more">{{word}}</div>-->
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div @click="showAll1 = !showAll1" class="button1 btn_style3" style="float: right">{{word1}}</div>
      </el-row>
    </div>
    <!--巧克力-->
    <div class="mian mian3">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../assets/home/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" style="margin-right:10px; margin-top:40px">
          <img src="../../assets/home/qiaokeli.png" class="img-responsive" alt="Responsive image" >
          <h2>巧克力</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="12" :md="6" :lg="6" :xl="6" v-for="(onep,index) in showList2">
                <el-card :body-style="{ padding: '2px' }" class="space">

                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image ">
                  </router-link>
                  <div style="padding:10px;">
                    <el-row>
                      <el-col :span="24">
                        <span class="pname">{{onep.pname}}</span>
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
        </el-col>
      </el-row>
      <el-row>
       <div @click="showAll2 = !showAll2" class="button1 btn_style3" style="float: right">{{word2}}</div>
      </el-row>
    </div>

    <!---->
    <!---->
    <!---->
    <div class="mian mian4">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../assets/home/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/home/bg-ds-2.png" class="img-responsive" alt="Responsive image">
          <h2>芝士</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="12" :md="6" :lg="6" :xl="6" v-for="(onep,index) in showList3" >
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <!--<img src="../../assets/p1.jpg" class="image">-->
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image ">
                  </router-link>
                  <div style="padding:10px;">
                    <el-row>
                      <el-col :span="24">
                        <span class="pname">{{onep.pname}}</span>
                      </el-col>

                    </el-row>
                    <el-row>
                      <div class="bottom clearfix">
                        <el-col :span="12">
                          <span class="pname"><span>￥</span>{{onep.pprice}}</span>
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
        </el-col>

      </el-row>
      <el-row>
        <div @click="showAll3 = !showAll3" class="button1 btn_style3" style="float: right">{{word3}}</div>
      </el-row>
    </div>

    <div class="mian mian5">
      <el-row>
        <el-col :span="6">
          <img src="../../assets/home/katong1.gif" class="img-responsive" alt="Responsive image">
          <h2>新品推荐</h2>
        </el-col>
        <el-col :span="14" :offset="2">
          <div class="dwidth">
            <el-carousel :interval="8000" type="card" height="500px">
              <el-carousel-item v-for="(onep,index) in products" v-if="onep.occasion==1"  >
                <el-card :body-style="{ padding: '2px' }" class="space">

                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image img-circle">
                  </router-link>
                  <div style="padding:14px;">
                    <el-row>
                      <el-col :span="24">
                        <span class="pname">{{onep.pname}}</span>
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
              </el-carousel-item>
            </el-carousel>

          </div>
        </el-col>
      </el-row>
    </div>




  </div>
</template>

<script>
  import addcart from '../home/addcart'
  import axios from 'axios'
    export default {
      name: "Products",
      components: {
        'my-addcart': addcart
      },
      data() {
        return {
          products:[],
          mydata:[],
          showAll0:false,
          showAll1:false,
          showAll2:false,
          showAll3:false,
           musi:[],
           shuiguo:[],
          qiaokeli:[],
           zhishi:[]

        }
      },
      computed: {
        showList0: function () {
          if (this.showAll0 == false) {                    //当数据不需要完全显示的时候
            var showList0 = [];　　　　　　　　　　　　　　　 //定义一个空数组
            if (this.musi.length > 4) {　　　　　　　//这里我们先显示前三个
              for (var i = 0; i < 4; i++) {
                showList0.push(this.musi[i])
                // console.log(showList0)
              }
            } else {
              showList0 = this.musi
            }
            return showList0;　　　　　　　　　　　　　　　　 //返回当前数组
          } else {
            return this.musi
          }
        },
        word0: function () {
          if (this.showAll0 == false) {　　　　　　　　　　　//对文字进行处理
            return '展开全部'
          } else {
            return '收起'
          }
        },
        showList1: function () {
          if (this.showAll1 == false) {                    //当数据不需要完全显示的时候
            var showList1 = [];　　　　　　　　　　　　　　　 //定义一个空数组
            if (this.shuiguo.length > 4) {　　　　　　　//这里我们先显示前三个
              for (var i = 0; i < 4; i++) {
                showList1.push(this.shuiguo[i])
                // console.log(showList1)
              }
            } else {
              showList1 = this.shuiguo
            }
            return showList1;　　　　　　　　　　　　　　　　 //返回当前数组
          } else {
            return this.shuiguo
          }
        },
        word1: function () {
          if (this.showAll1 == false) {　　　　　　　　　　　//对文字进行处理
            return '展开全部'
          } else {
            return '收起'
          }
        },
        showList2: function () {
          if (this.showAll2 == false) {                    //当数据不需要完全显示的时候
            var showList2 = [];　　　　　　　　　　　　　　　 //定义一个空数组
            if (this.qiaokeli.length > 4) {　　　　　　　//这里我们先显示前三个
              for (var i = 0; i < 4; i++) {
                showList2.push(this.qiaokeli[i])
                // console.log(showList2)
              }
            } else {
              showList2 = this.qiaokeli
            }
            return showList2;　　　　　　　　　　　　　　　　 //返回当前数组
          } else {
            return this.qiaokeli
          }
        },
        word2: function () {
          if (this.showAll2 == false) {　　　　　　　　　　　//对文字进行处理
            return '展开全部'
          } else {
            return '收起'
          }
        },
        showList3: function () {
          if (this.showAll3 == false) {                    //当数据不需要完全显示的时候
            var showList3 = [];　　　　　　　　　　　　　　　 //定义一个空数组
            if (this.zhishi.length > 4) {　　　　　　　//这里我们先显示前三个
              for (var i = 0; i < 4; i++) {
                showList3.push(this.zhishi[i])
                // console.log(showList3)
              }
            } else {
              showList3 = this.zhishi
            }
            return showList3;　　　　　　　　　　　　　　　　 //返回当前数组
          } else {
            return this.zhishi
          }
        },
        word3: function () {
          if (this.showAll3 == false) {　　　　　　　　　　　//对文字进行处理
            return '展开全部'
          } else {
            return '收起'
          }
        },


      },
      mounted: function () {
        let _this = this
        axios.get(`http://localhost:3000/product`).then(function (result) {
          _this.products = result.data.data;
          console.log(result.data)
          let data1=[], data2=[], data3=[], data4=[]
          for(let i=0;i<result.data.data.length;i++){
            if(result.data.data[i].taste=="慕斯"){
              data1.push(result.data.data[i])
            }
            if(result.data.data[i].taste=="水果"){
              data2.push(result.data.data[i])
            }
            if(result.data.data[i].taste=="巧克力"){
              data3.push(result.data.data[i])
            }
            if(result.data.data[i].taste=="芝士"){
              data4.push(result.data.data[i])
            }
          }
          _this.musi=data1
          _this.shuiguo=data2
          _this.qiaokeli=data3
          _this.zhishi=data4
        })
      },

      // methods: {
      //   getImg(ppic) {
      //     return `require("../../assets/products/${ppic}.jpg")`
      //   }
      // }
      methods:{
        // function (type) {
        //   var bangshu = type + 1;
        //   var productpid = this.father.pname
        //   var shuju = '{' + productpid + ',' + bangshu + '}'
        //   console.log(shuju)
        //   // console.log(bangshu,productpid)
        //   if (sessionStorage.getItem('product')) {
        //     var products = sessionStorage.getItem('product');
        //     products += (',' + shuju);
        //     sessionStorage.setItem('product', products);
        //     alert('已经放入购物车中！')
        //   } else {
        //     //var products = [];
        //     //products.push(product); JSON.stringify(products)
        //     sessionStorage.setItem('products', shuju);
        //   }

        }

    }
</script>


<style>
  .mian {
    height: 100%;
    width: 100%;
    /*opacity: 0.;*/
    margin-top: 20px;
    padding: 20px;
  }

  .mian1 {
    background-color: #F0FFFF;
  }

  .mian2 {
    background-color: #FFF0F5;
  }

  .mian3 {
    background-color: #CDBA96;
  }

  .mian4 {
    background-color:#F4F4F4;
  }
  .mian5{
    background-color:#FDF5E6;
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
    font-size:15px
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  h2{
    margin-left: 50px;
    /*font-family:"微软雅黑";*/
  }
</style>

<style scoped>
  .button1 {
    font-size:14px;
    font-family:Verdana;
    font-weight:normal;
    -moz-border-radius:25px;
    -webkit-border-radius:25px;
    border-radius:25px;
    padding:5px 25px;
    text-decoration:none;
    cursor: pointer;
  }
  .btn_style3 {
    border:1px solid #84bbf3;
    background:-moz-linear-gradient( center top, #bddbfa 8%, #80b5ea 97% );
    background:-ms-linear-gradient( top, #bddbfa 8%, #80b5ea 97% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea');
    background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, #bddbfa), color-stop(97%, #80b5ea) );
    background-color:#bddbfa;
    color:#ffffff;
    display:inline-block;
    text-shadow:0px 0px 0px #528ecc;
    -webkit-box-shadow:inset 0px 0px 0px -50px #dcecfb;
    -moz-box-shadow:inset 0px 0px 0px -50px #dcecfb;
    box-shadow:inset 0px 0px 0px -50px #dcecfb;
  }.btn_style3:hover {
     background:-moz-linear-gradient( center top, #80b5ea 8%, #bddbfa 97% );
     background:-ms-linear-gradient( top, #80b5ea 8%, #bddbfa 97% );
     filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa');
     background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, #80b5ea), color-stop(97%, #bddbfa) );
     background-color:#80b5ea;
   }.btn_style3:active {
      position:relative;
      top:1px;
    }
</style>
