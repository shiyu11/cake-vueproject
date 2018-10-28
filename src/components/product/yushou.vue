<template>
  <div>
    <div>
      <h1 class="newYear">敬请期待</h1>
    </div>

    <div class="fuzhu">
        <div class="kong"></div>
        <!--旋转图片-->
        <div class="box">
          <div style="transform: rotateY(0deg) translateZ(275px);">
            <img src="../../assets/yushou/pp1.png" class="img1">
          </div>
          <div style="transform: rotateY(40deg) translateZ(275px);">
            <img src="../../assets/yushou/pp2.png" class="img1">
          </div>
          <div style="transform: rotateY(80deg) translateZ(275px);">
            <img src="../../assets/yushou/pp3.png" class="img1">
          </div>
          <div style="transform: rotateY(120deg) translateZ(275px);">
            <img src="../../assets/yushou/pp4.png" class="img1">
          </div>
          <div style="transform: rotateY(160deg) translateZ(275px);">
            <img src="../../assets/yushou/pp5.png" class="img1">
          </div>
          <div style="transform: rotateY(200deg) translateZ(275px);">
            <img src="../../assets/yushou/pp6.png" class="img1">
          </div>
          <div style="transform: rotateY(240deg) translateZ(275px);">
            <img src="../../assets/yushou/pp7.png" class="img1">
          </div>
          <div style="transform: rotateY(280deg) translateZ(275px);">
            <img src="../../assets/yushou/pp8.png" class="img1">
          </div>
          <div style="transform: rotateY(320deg) translateZ(275px);">
            <img src="../../assets/yushou/pp9.png" class="img1">
          </div>
        </div>


        <div>

          <div class="tm1">

          </div>

          <img src="../../assets/yushou/shuzi1.jpg" class="img-responsive tm">


        </div>
    </div>

     <div class="zhengwen">
       <el-row>
         <el-col :span="12" class="text-center textr">
           <p>我与你的倾心一刻</p>
           <p>是天使奶油的邂逅</p>
           <p>这1314你知道520吗</p>
         </el-col>
         <el-col :span="8">
           <img src="../../assets/home/yushoushuoming.png" class="img-responsive tm">
         </el-col>

       </el-row>
         <el-row>
        <el-col :span="12">
          <img src="../../assets/yushou/shuzi2.jpg" class="img-responsive"></el-col>
        <el-col :span="12" class="text-center textr">
          <p>用心打发而成的美味奶油</p>
          <p>口感绵密，精致细腻</p>
          <p>这份雪白让你有如获至宝的幸福感</p>
        </el-col>
         </el-row>
       <el-row>
         <el-col :span="12" class="text-center textr">
           <p> 草莓薰红的季节</p>
           <p> 带来满口的酸甜</p>
           <p>原汁原味</p>
           <p> 鲜丽诱人</p>
         </el-col>
         <el-col :span="12">
           <img src="../../assets/yushou/shuzi3.jpg" class="img-responsive ">
         </el-col>
       </el-row>
       <el-row>
         <el-col :span="12">
           <img src="../../assets/yushou/shuzi4.jpg" class="img-responsive "></el-col>
         <el-col :span="12" class="text-center textr">
           <p> 新鲜的蓝莓</p>
           <p> 与蛋糕的精心配比</p>
           <p>酸甜清爽</p>
           <p> 回味无穷</p>
         </el-col>
       </el-row>
     </div>



  </div>
</template>

<script>
  export default {
    name: "yushou",
    //  methods:{
    //   methods1:function(){
    //    yushou1();
    //   }
    // }
  }
</script>

<style>
  /*@import "../../assets/css/yushou1.css";*/
  @import "../../assets/css/wenzi.css";
  /*@import "../../assets/css/zhanshi.css";*/
</style>
<style scoped>
  /*.bo{*/
  /*margin-bottom: 20px;*/
  /*}*/
  /*@import "../../assets/css/home.css";*/
  * {
    padding: 0;
    margin: 0;
  }

  .img1 {
    width: 200px;
    height: 300px;
  }

  body {
    background-color: #313131;
  }

  @keyframes fn {
    0% {
      transform: rotateX(-15deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-15deg) rotateY(360deg);
    }

  }

  @-moz-keyframes fn {
    0% {
      transform: rotateX(-15deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-15deg) rotateY(360deg);
    }
  }

  @-ms-keyframes fn {
    0% {
      transform: rotateX(-15deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-15deg) rotateY(360deg);
    }
  }

  @-webkit-keyframes fn {
    0% {
      transform: rotateX(-15deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-15deg) rotateY(360deg);
    }
  }

  .box {
    width: 200px;
    height: 300px;
    position: relative;
    margin: auto;
    margin-top: 150px;
    transform-style: preserve-3d;
    transform: rotateX(-10deg);
    animation: fn 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: relative
  }

  .box:hover {
    animation-play-state: paused;
  }

  .box > div {
    width: 200px;
    height: 300px;
    position: absolute;
    left: 0;
    top: 0;

  }

  .fuzhu {

  background-color: #fff0f5;
  /*background-color: #fbeac7;*/

  }
  .tm1{
    margin-top:50px;

  }
  .kong{
    margin-top: 20px;
    width: 20px;
    height: 10px;
  }
  .zhengwen{
    background-color: #f9f9f9;
  }
  .textr{
    margin-top: 200px;
    font-size: 20px;
  }
  .texre p{
    padding:8px;
  }


</style>
