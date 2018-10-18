<template>
  <div class="el-container">
    <h3>您当前的会员等级为：</h3>
      <div class="member-3"><p>0</p></div>
      <div class="member-4"><p>500</p></div>
      <div class="member-5"><p>1000</p></div>
      <div class="member-6"><p>1500</p></div>
      <div class="member-7"><p>2000</p></div>
      <div id="member-1"></div>
      <div class="member-2" >
        <ul>
          <li>V1</li>
          <li>V2</li>
          <li>V3</li>
          <li>V4</li>
          <li>V5</li>
        </ul>
      </div>
      <div class="message">
        <ul>
          <li><el-button type="text" @click="open">纪念日优惠</el-button></li>
          <li><el-button type="text" @click="open">邀请好友获得奖励</el-button></li>
          <li><el-button type="text" @click="open">v1免费领取会员卡</el-button></li>
          <li><el-button type="text" @click="open">v2进入贵宾尊享特价区</el-button></li>
          <li><el-button type="text" @click="open1">v3尊享永久订购9.8折优惠</el-button></li>
          <li><el-button type="text" @click="open2">v4尊享永久订购9.5折优惠</el-button></li>
          <li><el-button type="text" @click="open">v5进入蛋糕五折购买区</el-button></li>
        </ul>
      </div>

  </div>
</template>

<script>
    export default {
        name: "UserMember",
      methods:{
        open() {
          this.$alert('即将推出，敬请期待', {
            confirmButtonText: '确定',
          });
        },
        open1() {
          this.$alert('V3会员尊享永久订购9.8折优惠' + '(与其他优惠共享，订单提交页立减)', {
            confirmButtonText: '确定',
          });
        },
        open2() {
          this.$alert('V3会员尊享永久订购9.8折优惠' + '(与其他优惠共享，订单提交页立减)', {
            confirmButtonText: '确定',
          });
        },
      }
    }
</script>

<style scoped>
  .el-container{
    border: 2px solid transparent;
    margin: 20px;
    margin-left: 60px;
  }
  .el-container xsf{
    position:relative;
  }
  .el-container xss{
    position:absolute;
    left: 0;
    top: 0;
  }
  .el-container #member-1{
    border: 4px solid #B0916A;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    width: 450px;
    height: 350px;
    position: absolute;
    left: 300px;
  }
  .el-container .member-2{
    width: 300px;
    height: 40px;
    display:inline-block
  }
  .el-container .member-3{
    position: absolute;
    left: 350px;
    top: 350px;
  }
  .el-container .member-4{
    position: absolute;
    background-color: #B0916A;
    left: 416px;
    top: 298px;
    height: 70px;
    width: 50px;
  }
  .el-container .member-5{
    position: absolute;
    background-color: #B0916A;
    left: 501px;
    top: 228px;
    height: 140px;
    width: 50px;
  }
  .el-container .member-6{
    position: absolute;
    background-color: #B0916A;
    left: 584px;
    top: 158px;
    height: 210px;
    width: 50px;
  }
  .el-container .member-7{
    position: absolute;
    background-color: #B0916A;
    left: 668px;
    top: 88px;
    height: 280px;
    width: 50px;
  }
  .member-2 ul{
    list-style: none;
    display:inline-block;
    position: absolute;
    top: 375px;
    left: 280px;
  }
  .member-2 li{
    display:inline-block;
    width:80px;
    heigth:30px;
    text-align:center;
    /*line-height:51px;*/
    color: firebrick;
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: 1px palevioletred;
  }
  p{
    color: #363534;
  }
  .message li{
    list-style: none;
  }


</style>
