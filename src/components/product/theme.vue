<template>
    <div>
     <!--<div class="themeimg">-->
      <!--<h1 class="heading">Polaroid Memories</h1>-->
      <!--<div class="card-container">-->
        <!--<div class="card" style="&#45;&#45;image: url('../../assets/yushou/p4.jpg'); &#45;&#45;angle: -5deg; &#45;&#45;x: 5%; &#45;&#45;y: 15%; &#45;&#45;caption: 'Berlin in 2009'"></div>-->
        <!--<div class="card" style="&#45;&#45;image: url('../../assets/yushou/p4.jpg'); &#45;&#45;angle: -1deg; &#45;&#45;x: -10%; &#45;&#45;y: -20%; &#45;&#45;caption: 'London, 2001'"></div>-->
        <!--<div class="card" style="&#45;&#45;image: url('../../assets/yushou/p4.jpg'); &#45;&#45;angle: -4deg; &#45;&#45;x: -20%; &#45;&#45;y: 5%; &#45;&#45;caption: 'Los Angeles - 2004'"></div>-->
      <!--</div>-->
    <!--</div>-->
      <div>
        <el-row>
          <h2>送你玫瑰</h2>
        </el-row>
      </div>
      <div id="iii">
        <el-row>
          <el-col :span="6">
            <router-link to="/productDetail/1" tag="a">
              <img src="../../assets/yushou/p1.jpg" class="image1 img-circle">
            </router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/productDetail/2" tag="a">
              <img src="../../assets/yushou/p2.jpg" class="image2 img-circle">
            </router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/productDetail/4" tag="a">
              <img src="../../assets/yushou/p4.jpg" class="image3 img-circle">
            </router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/productDetail/5" tag="a">
              <img src="../../assets/yushou/p5.jpg" class="image4 img-circle">
            </router-link>
          </el-col>
        </el-row>
        <el-row>
          <div id="box">
            <div class="box01"></div>
            <div class="box02"></div>
            <div class="box03"></div>
            <div class="box04"></div>
            <div class="box05"></div>
            <div class="box06"></div>
            <div class="box07"></div>
            <div class="box08"></div>
            <div class="box09"></div>
          </div>
        </el-row>
      </div>

    </div>
</template>

<script>
    export default {
        name: "theme"
    }
</script>

<style scoped>
  *{margin:0;padding:0;list-style-type:none;}

  #box{
    width:100%;
    height:600px;
    margin:0 auto;
    margin-top:1px;
    position:relative;
  }
  .box01,.box02,.box03,.box04,.box05,.box06,.box07,.box08,.box09{
    width:300px;
    height:300px;
    border-radius:300px 0;
    background:pink;
    opacity:0.6;
    position:absolute;
    top:300px;
    left:500px;
    transform-origin:0 300px;
    transform:rotate(-45deg);
    transition:all 8s;
  }
  #box:hover :nth-child(3){
    transform:rotate(-23deg);
  }
  #box:hover :nth-child(4){
    transform:rotate(0deg);
  }
  #box:hover :nth-child(5){
    transform:rotate(23deg);
  }
  #box:hover :nth-child(6){
    transform:rotate(45deg);
  }
  #box:hover :nth-child(7){
    transform:rotate(-68deg);
  }
  #box:hover :nth-child(8){
    transform:rotate(-90deg);
  }
  #box:hover :nth-child(9){
    transform:rotate(-113deg);
  }
  #box:hover :nth-child(10){
    transform:rotate(-135deg);
  }

  /*展示图片*/
  .image1,.image2,.image3,.image4{
    position:absolute;
    /*bottom:100px;*/
    left:500px;
    transform-origin:0 300px;
    transform:rotate(-45deg);
    transition:all 8s;
  }
 #iii:hover .image1{
   transform:rotate(-23deg);
 }
  #iii:hover .image2{
    transform:rotate(30deg);
  }
  #iii:hover .image3{
    transform:rotate(-68deg);
  }
  #iii:hover .image4{
    transform:rotate(-100deg);
  }



  /*蛋糕*/







</style>
