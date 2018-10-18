<template>
  <div class="el-container">
    <div class="bg bg-blur"></div>
  <div class="icon-1 content content-front">
    <div id="Date">{{now}}</div>
      <h3>欢迎您</h3>
      <h3>来到品味·梦幻蛋糕</h3>
      <button @click="goData">完善个人资料</button>
      <p>会员级别:</p>
      <span>我的订单:</span><button @click="goOrder" style="float: right">全部订单</button>
  </div>
  </div>
</template>

<script>
    export default {
        name: "UserTime",
      data:function(){
          return{
            now:''
          }
      },
      methods:{
          goData(){
            this.$router.push({path:'/usercenter/Personaldata'})
          },
        goOrder(){
            this.$router.push({path:'/usercenter/Myorder'})
        }
      },
      created(){
          let _this  = this;
        setInterval(function(){
          var date=new Date();
          var year=date.getFullYear(); //获取当前年份
          var mon=date.getMonth()+1; //获取当前月份
          var da=date.getDate(); //获取当前日
          var day=date.getDay(); //获取当前星期几
          var h=date.getHours(); //获取小时
          var m=date.getMinutes(); //获取分钟
          var s=date.getSeconds(); //获取秒
          _this.now='今天是:'+year+'年'+mon+'月'+da+'日'+'星期'+day+' ' +h+':'+m+':'+s;
          console.log(_this.now)
        },1000)
      }
    }

</script>

<style scoped>
  .el-container .icon-1{
    color: #da9f1d;
  }
 .el-container .icon-1 p{
   color: #da9f1d;
  text-align: left;
   font-size: 18px;
   font-weight: normal;
   line-height: 200%;
}
  .el-container{
    border: 2px solid transparent;
    margin: 30px;
    margin-left: 60px;
  }
  .content {
    color: #ffffff;
  }
  .bg {
    background: url("../../assets/timg.jpg");
    height:600px;
    width: 800px;
  }
  .bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(9px);
    -moz-filter: blur(9px);
    -o-filter: blur(9px);
    -ms-filter: blur(9px);
    filter: blur(9px);
  }
  .content-front {
    position:absolute;
    left: 170px;
    right: 10px;
    height:600px;
    text-align: left;
  }
</style>
