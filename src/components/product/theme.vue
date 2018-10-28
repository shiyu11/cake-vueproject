<template>
  <div class="meigui">
    <div>
      <el-row>
        <h2><span>送你玫瑰</span></h2>
      </el-row>
    </div>
    <div id="iii">
      <div class="shangbu">
       <el-row>
        <el-col :span="6">
          <router-link to="/productDetail/1" tag="a">
            <img src="../../assets/yushou/ailisi.jpg" class="image1 img-circle">
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/productDetail/2" tag="a">
            <img src="../../assets/yushou/p4.jpg" class="image2 img-circle">
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

      <el-row class="text-center">
        <el-col :span="12" class="textr">
            <span class="span1">
             <span class="span2">一</span>朵玫瑰花代表我心里只有你一人
            </span>
          <p>九千九百九十九朵玫瑰代表我永远爱你</p>
          <p>古希腊和古罗马民族用玫瑰象征他们的爱神</p>
          <p>阿芙罗狄蒂维纳斯</p>
        </el-col>
        <el-col :span="8">
          <router-link to="/productDetail/14">
            <img src="../../assets/yushou/ailisi.png" class="img-responsive tm">
            <span class="tiaozhuan">查看详情>></span>
          </router-link>

        </el-col>
      </el-row>


      <el-row class="text-center">
        <el-col :span="8" style="margin-left: 60px">
          <router-link to="/productDetail/5">
            <img src="../../assets/yushou/luosai.png" class="img-responsive tm">
            <span class="tiaozhuan">查看详情>></span>
          </router-link>
        </el-col>
        <el-col :span="12" class="textr1">
            <span>
            <span class="span2">在</span>希腊神话中
            </span>
          <p>玫瑰既是美神的化身</p>
          <p> 又溶进了爱神的鲜血</p>
          <p>它集爱与美于一身</p>
        </el-col>

      </el-row>


      <el-row class="text-center">
        <el-col :span="12" class="text-center textr2">
            <span>
             <span class="span2">玫瑰</span>集爱与美于一身
                <p>这在花的国度里</p>
                <p>可是相当幸运的了</p>
            </span>
          <p>可以说</p>
          <p>在世界范围内</p>
          <p>玫瑰是用来表达爱情的通用语言</p>
          <p>玫瑰在中国古代文学里象征刺客</p>
        </el-col>
        <el-col :span="8" style="margin-left: 60px">
          <router-link to="/productDetail/4">
            <img src="../../assets/yushou/p4.jpg" class="img-responsive tm2">
            <span class="tiaozhuan">查看详情>></span>
          </router-link>
        </el-col>
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
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  #box {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 1px;
    position: relative;
  }

  .box01, .box02, .box03, .box04, .box05, .box06, .box07, .box08, .box09 {
    width: 300px;
    height: 300px;
    border-radius: 300px 0;
    background: pink;
    opacity: 0.6;
    position: absolute;
    top: 300px;
    left: 500px;
    transform-origin: 0 300px;
    transform: rotate(-45deg);
    transition: all 8s;
  }

  #box:hover :nth-child(3) {
    transform: rotate(-23deg);
  }

  #box:hover :nth-child(4) {
    transform: rotate(0deg);
  }

  #box:hover :nth-child(5) {
    transform: rotate(23deg);
  }

  #box:hover :nth-child(6) {
    transform: rotate(45deg);
  }

  #box:hover :nth-child(7) {
    transform: rotate(-68deg);
  }

  #box:hover :nth-child(8) {
    transform: rotate(-90deg);
  }

  #box:hover :nth-child(9) {
    transform: rotate(-113deg);
  }

  #box:hover :nth-child(10) {
    transform: rotate(-135deg);
  }

  /*展示图片*/
  .image1, .image2, .image3, .image4 {
    position: absolute;
    /*bottom:100px;*/
    left: 500px;
    transform-origin: 0 300px;
    transform: rotate(-45deg);
    transition: all 8s;
  }

  #iii:hover .image1 {
    transform: rotate(-23deg);
  }

  #iii:hover .image2 {
    transform: rotate(30deg);
  }

  #iii:hover .image3 {
    transform: rotate(-68deg);
  }

  #iii:hover .image4 {
    transform: rotate(-100deg);
  }

  /*蛋糕*/
  .meigui {
    /*background: url('../../assets/yushou/meiguibei.jpg');*/
    /*background-color: #f8f8f8;*/
    /*background-image: url("../../assets/yushou/huaban.png");*/
    background-image: url("../../assets/home/huanbanshao.png");
    background-repeat: no-repeat;
    margin-bottom: 30px;
  }

  .textr {
    font-size: 20px;
    margin-top: 130px;

  }

  .textr1 {
    font-size: 20px;
    margin-top: 60px;
  }

  .textr2 {
    font-size: 20px;
    margin-top: 60px;
  }

  h2 {
    font-weight: normal;
    position: relative;
    background: deeppink;
    width: 50%;
    color: black;
    text-align: center;
    padding: 10px 20px;
    margin: 20px auto 40px;
    text-transform: uppercase;
    border-radius: 2px;
  }

  h2:before, h2:after {
    content: "";
    position: absolute;
    display: block;
    top: -6px;
    border: 18px solid deeppink;
  }

  h2:before {
    left: -36px;
    border-right-width: 18px;
    border-left-color: transparent;
  }

  h2:after {
    right: -36px;
    border-left-width: 18px;
    border-right-color: transparent;
  }

  h2 span:before, h2 span:after {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #A7CECC transparent transparent transparent;
    top: -6px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  h2 span:before {
    left: 0;
    border-width: 6px 0 0 6px;
  }

  h2 span:after {
    right: 0;
    border-width: 6px 6px 0 0;
  }

  .tiaozhuan {
    color: #a94442;
  }

  .span1 {
    margin-top: 50px;
  }
  .span2{
    color: #a94442;
    font-size: 30px;
  }

  .tm2 {
    margin-top: 50px;
  }
  .shangbu{

  }
</style>
