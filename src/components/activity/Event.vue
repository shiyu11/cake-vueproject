<template>
<div class="container">

  <div class="myh2">
    <h2>---------更多美味选择---------</h2>
  </div>

  <div class="mian mian">
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="dwidth">
          <el-carousel :interval="6000" type="card" height="500px">
            <el-carousel-item v-for="(onep,index) in products">
              <el-card :body-style="{ padding: '6px' }" class="space">
                <img :src="onep.ppic" class="image">
                <div style="padding:15px;">
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
                        <el-button type="text" class="button">立即购买</el-button>
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
    export default {
        name: "Event",
      data() {
        return {
          products:[
            {ppic:require("../../assets/4.jpg"),pname:'qqq',pprice:'186'},
            {ppic:require("../../assets/3.jpg"),pname:'gghg',pprice:'199'},
            {ppic:require("../../assets/5.jpg"),pname:'er',pprice:'219'},
            {ppic:require("../../assets/4.jpg"),pname:'ee',pprice:'168'},
            {ppic:require("../../assets/5.jpg"),pname:'dd',pprice:'119'},
            {ppic:require("../../assets/4.jpg"),pname:'ddd',pprice:'188'}

          ]
        }
        }
    }
</script>

<style scoped>
  .container{
    background-image: url("../../assets/beijing.png");
  }
  .myh2 h2{
    text-align: center;
    margin: 50px;
    color:lightpink;
    font-weight: bold;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
  .button {
    padding: 0;
    float: right;
    color: #B0916A;
    font-size:20px;
  }
  .image {
    width: 100%;
    display: block;
  }
  .pname{
    font-size:22px
  }

</style>
