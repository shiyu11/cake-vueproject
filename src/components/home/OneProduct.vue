<!--<template>-->
<!--<div>-->
<!--<img src="../../assets/p1.jpg" alt="">-->
<!--<router-link to="/productDetail/1" tag="button">详情</router-link>-->
<!--<button >加入购物车</button>-->
<!--</div>-->
<!--</template>-->
<template>
  <div>
    <el-row>
    <el-col :span="24">
      <el-card shadow="hover">
        <img src="../../assets/newlong.jpg" >

      </el-card>
    </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="1">
        <el-card :body-style="{ padding: '2px' }">
          <img src="../../assets/p1.jpg" class="image">
          <div style="padding: 14px;">
            <span>尼诺</span>
            <div class="bottom clearfix">
              <!--<time class="time">{{ currentDate }}</time>-->
              <span>￥285</span>

              <el-button type="text" class="button">加入购物车</el-button>
              <router-link to="/productDetail/1" tag="el-button" type="text" class="button">详情</router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // currentDate: new Date()
      };
    }
  }
</script>


<style scoped>
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
</style>
