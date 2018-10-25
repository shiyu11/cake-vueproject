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
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='慕斯'" >
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
    </div>

<!--水果-->
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
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='水果'" >
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
    </div>
    <!--巧克力-->
    <div class="mian mian3">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../assets/home/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../assets/home/bg2.png" class="img-responsive" alt="Responsive image">
          <h2>巧克力</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='巧克力'"  >
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
    </div>

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
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='芝士'"  >
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
    </div>

    <div class="mian mian5">
      <!--<el-row>-->
        <!--<el-col :span="18" :offset="2">-->
          <!--<img src="../../assets/home/topsnow.png" class="img-responsive space" alt="Responsive image">-->
        <!--</el-col>-->
      <!--</el-row>-->
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
                  <!--<img src="../../assets/p1.jpg" class="image">-->
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
                        <!--<el-col :span="12">-->
                          <!--<button type="button" class="btn button" data-toggle="modal" data-target=".bs-example-modal-sm" @click="putCart(type)"><a href="#/cart">加入购物车</a></button>-->
                        <!--</el-col>-->
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
  import axios from 'axios'
    export default {
      name: "Products",
      components: {
        'my-addcart': addcart
      },
      data() {
        return {
          // showAll:false,
          // products: [
          //   // {
          //   //   "pname": "1黛西的旅行",
          //   //   "ppic": require("../../assets/products/p1.jpg"),
          //   //   "pprice": "255",
          //   //   "pid": 1,
          //   //   "occasion": 1,
          //   //   "taste": "慕斯",
          //   //   "dpic": require("../../assets/products/d1.jpg"),
          //   //   "xpic": require("../../assets/products/x1.jpg")
          //   // },
          // {
          // "pname": "1黛西的旅行",
          //   //   "ppic": require("../../assets/products/p1.jpg"),
          //   //   "pprice": "255",
          //   //   "pid": 1,
          //   //   "occasion": 1,
          //   //   "taste": "慕斯",
          //   //   "dpic": require("../../assets/products/d1.jpg"),
          //   //   "xpic": require("../../assets/products/x1.jpg")
          // }

          // ]
          products:[]
        }
      },
      // computed:{
      //   showList:function(){
      //     if(this.showAll == false){                    //当数据不需要完全显示的时候
      //       var showList = [];　　　　　　　　　　　　　　　 //定义一个空数组
      //       if(this.products.length > 4){　　　　　　　//这里我们先显示前三个
      //         for(var i=0;i<4;i++){
      //           showList.push(this.products[i])
      //           console.log(showList)
      //         }
      //       }else{
      //         showList = this.products
      //       }
      //       return showList;　　　　　　　　　　　　　　　　 //返回当前数组
      //     }else{
      //       return this.products;
      //     }
      //   },
      //   word:function(){
      //     if(this.showAll == false){　　　　　　　　　　　//对文字进行处理
      //       return '展开全部'
      //     }else{
      //       return '收起'
      //     }
      //   }
      // }

      mounted: function () {
        let _this = this
        axios.get(`http://localhost:3000/product`).then(function (result) {
          _this.products = result.data.data;
          console.log(result.data)
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

</style>
