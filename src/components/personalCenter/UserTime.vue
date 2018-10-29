<template>
  <div class="el-container">
    <div class="bg bg-blur"></div>
  <div class="icon-1 content content-front">
      <h3 style="line-height: 1.3">欢迎您<br>
        {{uname}}</h3>
      <h3>来到品味·梦幻蛋糕</h3>
      <p @click="goData">点击完善个人资料</p>

    <div>
      <p>我的订单:
        <span @click="goOrder">全部订单>></span>
      </p>

    <div class="box shadow">
      <a @click="goOrderAfter" >待收货{{order.state}}</a>
      <div class="circle"></div>
    </div>
    <div class="box shadow">
      <a @click="goOrderReview">待评价{{order.state}}</a>
      <div class="circle"></div>
    </div>
    <div class="box shadow">
      <a  @click="goOrderFinish">已完成{{order.state}}</a>
      <div class="circle"></div>
    </div>



    </div>
  </div>
  </div>

</template>

<script>
    export default {
        name: "UserTime",

      data:function(){
          return{
            now:'',
            uname:sessionStorage.getItem('sname'),

            order:[{
              state:'1'
            }]
          }
      },
      methods:{
          goData(){
            this.$router.push({path:'/usercenter/Personaldata'})
          },
        goOrder(){
            this.$router.push({path:'/usercenter/Myorder'})
        },
        goOrderAfter(){
            this.$router.push({path:'/usercenter/Myorder/after'})
        },
        goOrderReview(){
          this.$router.push({path:'/usercenter/Myorder/review'})
        },
        goOrderFinish(){
          this.$router.push({path:'/usercenter/Myorder/finish'})
        }
      },
    }

</script>

<style scoped>
  .el-container .icon-1{
    color: #B0916A;
  }
 .el-container .icon-1 p{

   color: rgba(211,108,90,0.95);
   text-align: left;
   font-size: 18px;
   font-weight: normal;
   line-height: 200%;
}
  .el-container{
    border: 2px solid transparent;
    margin: 30px;
    margin-left: 10px;
  }
  /*.content {*/
    /*color: #ffffff;*/
  /*}*/
  .bg {
    background: url("../../../static/images/hmhpic/timg1.jpg");
    height:600px;
    width: 800px;
  }
  .bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .content-front {
    position:absolute;
    left: 570px;
    top: 100px;
    height:600px;
    text-align: center;
  }
  button{
    line-height: 10px;
  }



  html {
    box-sizing: border-box;
    font: 18px PT Mono;
    background: antiquewhite;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }

  .box {
    width: 15%;
    min-width: 150px;
    display: block;
    height: 45px;
    position: relative;
    border-radius: 5px;
    background: linear-gradient(to right, rgba(211,108,90,0.95), #d6e2ad 100%);
    margin-bottom: 25px;
    padding: 15px 25px 0 40px;
    color: darkslategray;
    box-shadow: 1px 2px 1px -1px #777;
    transition: background 200ms ease-in-out;
  }

  .box a{color: rgba(69,6,7,0.95);text-decoration:none;}

  .shadow {
    position: relative;
  }
  .shadow:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 13px;
    right: 7px;
    width: 75%;
    top: 0;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
    transition: all 150ms ease-in-out;
  }

  .box:hover {
    background: linear-gradient(to right, rgba(211,108,90,0.95), #abbd73 100%);
  }

  .shadow:hover::before {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    bottom: 20px;
    z-index: -10;
  }

  .circle {
    position: absolute;
    top: 14px;
    left: 15px;
    border-radius: 50%;
    box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 0 0 0 25px antiquewhite;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align:right;
    padding:0 20px 0 0;
  }
</style>
