<template>
  <div>
    <el-row>
      <el-col :span="11">
        <router-link to="/yushou">
          <div><span class="ribbon2">即<br>将<br>上<br>市<br></span></div>
          <img src="../../assets/home/yushou.jpg" alt="" class="image img-responsive">
        </router-link>
      </el-col>
      <el-col :span="11" :offset="2">
        <router-link to="/theme">
          <span class="ribbon4">主题蛋糕</span>
          <img src="../../assets/home/meigui.jpg" alt="" class="image img-responsive">
        </router-link>
      </el-col>
    </el-row>
  </div>


</template>

<script>
  export default {
    name: "adddonghua"
  }
</script>

<style scoped>
  /*@import "../../assets/css/sidai.css";*/
  /*.ribbon {*/
  /*display: inline-block;*/
  /*width: 48%;*/
  /*height: 188px;*/
  /*position: relative;*/
  /*float: left;*/
  /*margin-bottom: 30px;*/
  /*background: url("../../assets/home/yushou.jpg");*/
  /*background-size: cover;*/
  /*text-transform: uppercase;*/
  /*color: white;*/
  /*}*/
  /*.ribbon:nth-child(even) {margin-right: 4%;}*/
  /*@media (max-width: 500px) {*/
  /*.ribbon {width: 100%}*/
  /*.ribbon:nth-child(even) {margin-right: 0%;}*/
  /*}*/
  .ribbon2 {
    display: inline-block;
    width: 60px;
    padding: 10px 0;
    background: #F47530;
    top: -6px;
    left: 25px;
    position: absolute;
    text-align: center;
    border-top-left-radius: 3px;
  }

  .ribbon2:before {
    height: 0;
    width: 0;
    border-bottom: 6px solid #8D5A20;
    border-right: 6px solid transparent;
    right: -6px;
    top: 0;
  }

  .ribbon2:before, .ribbon2:after {
    content: "";
    position: absolute;
  }

  .ribbon2:after {
    height: 0;
    width: 0;
    border-left: 30px solid #F47530;
    border-right: 30px solid #F47530;
    border-bottom: 30px solid transparent;
    bottom: -30px;
    left: 0;
  }

  .ribbon4 {
    position: absolute;
    top: 15px;
    padding: 8px 10px;
    background: #00B3ED;
    box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .ribbon4:before, .ribbon4:after {
    position: absolute;
    content: "";
    display: block;
  }

  .ribbon4:before {
    width: 7px;
    height: 100%;
    padding: 0 0 7px;
    top: 0;
    left: -7px;
    background: inherit;
    border-radius: 5px 0 0 5px;
  }

  .ribbon4:after {
    width: 5px;
    height: 5px;
    background: rgba(0, 0, 0, 0.35);
    bottom: -5px;
    left: -5px;
    border-radius: 5px 0 0 5px;
  }
</style>
