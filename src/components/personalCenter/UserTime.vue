<template>
  <div class="el-container">
    <div class="bg bg-blur"></div>
  <div class="icon-1 content content-front">
      <h3>欢迎您{{users.uname}}</h3>
      <h3>来到品味·梦幻蛋糕</h3>
      <p @click="goData">完善个人资料</p>

    <div>
      <p>我的订单:
        <span @click="goOrderAfter" style="text-decoration: underline">待收货{{order.state}}</span><br>
        <span @click="goOrderFinish" style="margin-left: 69px;text-decoration: underline">已完成{{order.state}}</span><br>
        <span @click="goOrder">全部订单>></span>
      </p>

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
            users:[
              {uname:'哈哈',
              }],
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
        goOrderFinish(){
          this.$router.push({path:'/usercenter/Myorder/finish'})
        }
      },
    }

</script>

<style scoped>
  .el-container .icon-1{
    color: #B0916A;
    right: 50px;
  }
 .el-container .icon-1 p{
   color: #B0916A;
   text-align: left;
   font-size: 15px;
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

    /*z-index: -1;!*-1 可以当背景*!*/
    /*-webkit-filter: blur(2px);*/
    /*filter: blur(3px);*/
  }
  .bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /*-webkit-filter: blur(5px);*/
    /*-moz-filter: blur(5px);*/
    /*-o-filter: blur(5px);*/
    /*-ms-filter: blur(5px);*/
    /*filter: blur(5px);*/
  }
  .content-front {
    position:absolute;
    left: 370px;
    right: 10px;
    top: 135px;
    height:600px;
    text-align: left;
  }
  button{
    line-height: 10px;
  }
</style>
