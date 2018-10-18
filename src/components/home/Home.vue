<template>
  <div>
    <!--轮播图-->
    <div id="carousel-example-generic" class="carousel slide space" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../assets/test1.jpg" alt="...">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/test2.jpg" alt="...">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/test3.jpg" alt="...">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/test4.jpg" alt="...">
          <div class="carousel-caption">
          </div>
        </div>
      </div>
      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>

      </a>

    </div>

    <!--四种分类-->
    <div>
      <el-row :gutter="20"
              class="space">
        <el-col :span="6">
          <el-card shadow="hover"><img src="../../assets/newlogo.png" alt="" class="image"></el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover"><img src="../../assets/birthlogo.png" alt="" class="image"></el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover"><img src="../../assets/childlogo.png" alt="" class="image"></el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover"><img src="../../assets/togetherlogo.png" alt="" class="image"></el-card>
        </el-col>
      </el-row>
    </div>

    <!--<div>-->
    <!--<my-products></my-products>-->
    <!--</div>-->


    <!--一部分-->

    <div class="mian mian1">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../../static/images/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../../static/images/bg-ds-1.png" class="img-responsive" alt="Responsive image">
          <h2>慕斯</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='慕斯'">
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <!--<img src="../../assets/p1.jpg" class="image">-->
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
                        <el-col :span="12">
                          <el-button type="text" class="button">加入购物车</el-button>
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
    </div>

    <div class="mian mian2">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../../static/images/title-line.png" class="img-responsive space" alt="Responsive image">

        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../../static/images/bg-ds-3.png" class="img-responsive" alt="Responsive image">
          <h2>鲜奶</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='鲜奶'">
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <!--<img src="../../assets/p1.jpg" class="image">-->
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image img-circle">
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
                        <el-col :span="12">
                          <el-button type="text" class="button">加入购物车</el-button>
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
    </div>

    <div class="mian mian3">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../../static/images/title-line.png" class="img-responsive space" alt="Responsive image">

        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../../static/images/bg2.png" class="img-responsive" alt="Responsive image">
          <h2>巧克力</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='巧克力'">
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <!--<img src="../../assets/p1.jpg" class="image">-->
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image img-circle">
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
                        <el-col :span="12">
                          <el-button type="text" class="button">加入购物车</el-button>
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
    </div>

    <div class="mian mian4">
      <el-row>
        <el-col :span="18" :offset="4">
          <img src="../../../static/images/title-line.png" class="img-responsive space" alt="Responsive image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <img src="../../../static/images/bg-ds-2.png" class="img-responsive" alt="Responsive image">
          <h2>芝士</h2>
        </el-col>
        <el-col :span="18">
          <div class="dwidth">
            <el-row class="space" justify="center" :gutter="20">
              <el-col :sm="8" :md="6" :lg="6" :xl="6" v-for="(onep,index) in products" v-if="onep.taste=='芝士'">
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <!--<img src="../../assets/p1.jpg" class="image">-->
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image img-circle">
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
                        <el-col :span="12">
                          <el-button type="text" class="button">加入购物车</el-button>
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
    </div>

    <div class="mian mian5">
      <el-row>
        <el-col :span="4" >
        <h2>新品推荐</h2>
        </el-col>
      <el-col :span="14" :offset="6">
        <img src="../../../static/images/topsnow.png" class="img-responsive" alt="Responsive image">
      </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="dwidth">
            <el-carousel :interval="8000" type="card" height="500px">
              <el-carousel-item v-for="(onep,index) in products" v-if="onep.occasion==1">
                <el-card :body-style="{ padding: '2px' }" class="space">
                  <!--<img src="../../assets/p1.jpg" class="image">-->
                  <router-link :to="`/productDetail/${onep.pid}`" tag="a" type="text" class="thumbnail">
                    <img :src="onep.ppic" class="image">
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
                        <el-col :span="12">
                          <el-button type="text" class="button">加入购物车</el-button>
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


    <!--<el-row>-->
    <!--<el-col :span="6" :offset="1">-->
    <!--<img src="../../../static/images/bg-ds-3.png" class="img-responsive" alt="Responsive image">-->
    <!--</el-col>-->
    <!--<el-col :span="8" :offset="1">-->
    <!--<img src="../../../static/images/bg-ds-2.png" class="img-responsive" alt="Responsive image">-->
    <!--</el-col>-->
    <!--</el-row>-->

  </div>
</template>

<script>
  import Products from './Products'

  export default {
    name: "Home",
    components: {
      'my-products': Products
    },
    data() {
      return {
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
            "ppic": require("../../assets/p4.jpg"),
            "pprice": "555",
            "pid": 4,
            "occasion": 4,
            "taste":"慕斯",
            "dpic": require("../../assets/d4.jpg"),
            "xpic": require("../../assets/x4.jpg")
          },
          {
            "pname": "5蓝莓轻乳拿破仑3",
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "555",
            "pid": 5,
            "occasion": 2,
            "taste":"鲜奶",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
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
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "285",
            "pid": 7,
            "occasion": 1,
            "taste": "鲜奶",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
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
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "555",
            "pid": 10,
            "occasion": 4,
            "taste": "鲜奶",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
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
            "ppic": require("../../assets/p4.jpg"),
            "pprice": "555",
            "pid": 14,
            "occasion": 4,
            "taste": "巧克力",
            "dpic": require("../../assets/d4.jpg"),
            "xpic": require("../../assets/x4.jpg")
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
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "255",
            "pid": 16,
            "occasion": 3,
            "taste":"巧克力",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
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
            "ppic": require("../../assets/p2.jpg"),
            "pprice": "555",
            "pid": 19,
            "occasion": 3,
            "taste": "芝士",
            "dpic": require("../../assets/d2.jpg"),
            "xpic": require("../../assets/x2.jpg")
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
            "ppic": require("../../assets/p5.jpg"),
            "pprice": "555",
            "pid": 21,
            "occasion": 4,
            "taste": "芝士",
            "dpic": require("../../assets/d5.jpg"),
            "xpic": require("../../assets/x5.jpg")
          },
        ],
      }
    }
  }
</script>

<style>

  .space {
    margin-top: 20px;
  }

  .mian {
    height: 100%;
    width: 100%;
    opacity: 0.8;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    /*line-height: 200px;*/
    margin: 0;
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
    font-size:15px
  }

</style>
