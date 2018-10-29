
<template>
  <div>
    <!--轮播图-->
    <div id="carousel-example-generic" class="carousel slide space lunbo" data-ride="carousel" name="top">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" ></li>
        <li data-target="#carousel-example-generic" data-slide-to="1" ></li>
        <li data-target="#carousel-example-generic" data-slide-to="2" class="active"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../assets/home/test2.jpg" alt="..." class="img-responsive imgh">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/home/test1.jpg" alt="..." class="img-responsive imgh">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/home/test4.jpg" alt="..." class="img-responsive imgh">
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
  import Products from './Products'
  import adddonghua from './adddonghua'
  export default {
    name: "Home",
    components: {
      'my-products': Products,
      'my-adddonghua':adddonghua,

    },
    data() {
      return {

      }
    },

  }
</script>

<style>

  .space {
    margin-top: 20px;
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

  .image {
    width: 100%;
    display: block;
  }
  /*.image1{*/
    /*height:10%;*/
    /*display: block;*/
  /*}*/
.yushou{
  margin-top: 20px;
}

</style>
