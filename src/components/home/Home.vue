<template>
  <div>
    <!--</div>-->
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 id="toum">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>


    <!--四种分类-->
    <div>
      <el-row :gutter="20"
              class="space">
        <el-col :span="6">
          <el-card shadow="hover">
            <router-link to="/productlist/1">
              <img src="../../assets/home/newlogo.png" alt="" class="image">
            </router-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <router-link to="/productlist/3">
              <img src="../../assets/home/birthlogo.png" alt="" class="image">
            </router-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <router-link to="/productlist/2">
              <img src="../../assets/home/childlogo.png" alt="" class="image">
            </router-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <router-link to="/productlist/4">
              <img src="../../assets/home/togetherlogo.png" alt="" class="image">
            </router-link>
          </el-card>
        </el-col>


      </el-row>
      <el-row>
        <img src="../../assets/home/title.png" alt="" class="image">
      </el-row>
    </div>

    <!--口味-->
    <div>
    </div>
    <!--一部分-->

    <my-products></my-products>

    <!--预售-->
    <div class="yushou">
      <my-adddonghua></my-adddonghua>
    </div>

  <!--<el-row class="navbar-fixed-bottom" style="position: fixed">-->
    <!--<el-col :span="2" :offset="22">-->
      <!--<a href="#top">-->
        <!--<img src="../../assets/home/top.gif" class="img-responsive" alt="Responsive image">-->
      <!--</a>-->
    <!--</el-col>-->
     <!--</el-row>-->
  </div>
</template>

<script>
  import Products from './Products'
  import adddonghua from './adddonghua'
  export default {
    name: "Home",
    components: {
      'my-products': Products,
      'my-adddonghua': adddonghua,
    },
    data() {
      return {}
    },

  }
</script>

<style scoped>
  .space {
    margin-top: 20px;
  }

  el-row {
    text-align: center;
  }

  .image {
    width: 100%;
    display: block;
  }

  .yushou {
    margin-top: 20px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-of-type(1)
  {
    background-image: url("../../assets/home/lunbo6.png");
  }

  .el-carousel__item:nth-of-type(2) {
    background-image: url("../../assets/home/test2.jpg");
  }

  .el-carousel__item:nth-of-type(3) {
    background-image: url("../../assets/home/lunbo2.jpg");
  }

  .block {
    margin-top: 10px;
  }

  #toum {
    color:transparent
  }
</style>
