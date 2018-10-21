<template>
  <div class="container">

    <div class="myh2">
      <h2>---------更多梦幻选择---------</h2>
    </div>

    <div class="mian mian">
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="dwidth">
            <el-carousel :interval="6000" type="card" height="500px">
              <el-carousel-item v-for="(onep,index) in products" v-if="index<6">
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
                        <el-col :span="8">
                          <span class="pprice1"><s>原价<span>￥</span>{{onep.pprice*1.5}}</s></span>
                        </el-col>
                        <el-col :span="8">
                          <span class="pprice2">现价<span>￥</span>{{onep.pprice}}</span>
                        </el-col>
                        <el-col :span="8">
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
  import axios from 'axios'
  export default {
    name: "Event",
    mounted: function () {
      let _this = this
      axios.get(`http://localhost:3000/product`).then(function (result) {
        _this.products = result.data.data;
        console.log(result.data.data)
      })
    },
    data() {
      return {
        products:[]
      }
    }
  }
</script>

<style scoped>

  .myh2 h2{
    text-align: center;
    margin: 66px;
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
    font-size:18px;
  }
  .image {
    width: 100%;
    display: block;
  }
  .pname{
    font-size:20px;
    font-weight: bold;
  }
  .pprice1,.pprice2{
    font-size:16px
  }
</style>
