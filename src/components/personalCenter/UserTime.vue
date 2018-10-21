<template>
  <div class="el-container">
    <div class="bg bg-blur"></div>
  <div class="icon-1 content content-front">
      <h3>欢迎您{{users.uname}}</h3>
      <h3>来到品味·梦幻蛋糕</h3>
      <button @click="goData" style="float: right">完善个人资料</button>
      <p>会员级别:{{users.level}}</p>
    <div>
      <p>我的订单:
        <span @click="goOrderAfter" style="text-decoration: underline">待收货{{order.state}}</span><br>
        <span @click="goOrderFinish" style="margin-left: 69px;text-decoration: underline">已完成{{order.state}}</span>
        <button @click="goOrder" style="float: right">全部订单>></button>
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
              level:'V2',
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
    margin-left: 60px;
  }
  /*.content {*/
    /*color: #ffffff;*/
  /*}*/
  .bg {
    background: url("../../../static/images/hmhpic/timg.jpg");
    height:600px;
    width: 800px;
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
    left: 270px;
    right: 10px;
    top: 34px;
    height:600px;
    text-align: left;
  }
  button{
    line-height: 10px;
  }
</style>
