<template>
    <div>
      <div class="icon">
        <img src="../../../static/images/hmhpic/person1.png" alt="">
      </div>
      <hr style="background-color:silver;height: 1px;border: none;"/>
      <el-row :gutter="20">
        <el-col :span="4">
          <div id="Date">{{now}}</div>
          <div class="grid-content bg-purple">
            <el-tabs :tab-position="tabPosition" @tab-click="handleClick" style="height:70%;">
              <el-tab-pane label="cake"></el-tab-pane>
              <el-tab-pane label="完善个人资料"></el-tab-pane>
              <el-tab-pane label="我的订单"></el-tab-pane>
              <el-tab-pane label="安全中心"></el-tab-pane>
              <el-tab-pane label="收货地址" ></el-tab-pane>
            </el-tabs>
            <button @click="toHome">退出登录</button>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
          <router-view></router-view>
        </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import UserData from './UserData'
  import UserOrder from './UserOrder'
  import Userupdatepsd from './Userupdatepsd'
  import UserAddress from './UserAddress'
  import UserTime from './UserTime'
    export default {
        name: "UserCenter",
      data() {
        return {
          tabPosition: 'left',
          now:''
          // username:''
        };
      },
      methods:{
          toHome(){
            request.getSession().invalidate();
          },
        handleClick(tab, event) {
            if(tab.$options.propsData.label=='完善个人资料'){
              this.$router.push({path:'/usercenter/Personaldata'})
            }
            else if (tab.$options.propsData.label=='cake') {
              this.$router.push({path:'/usercenter/UserTime'})
            }
            else if (tab.$options.propsData.label=='我的订单') {
              this.$router.push({path:'/usercenter/Myorder'})
            }
            else if (tab.$options.propsData.label=='安全中心') {
              this.$router.push({path:'/usercenter/Userupdatepsd'})
            }
            else if (tab.$options.propsData.label=='收货地址') {
              this.$router.push({path:'/usercenter/UserAddress'})
            }
          //
          // console.log(tab.$options.propsData.label);
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
          // console.log(_this.now)
        },1000)
      },
      components:{
        'my-user-data':UserData,
        'my-user-order':UserOrder,
        'my-user-updatepsd':Userupdatepsd,
        'my-user-address':UserAddress,
        'my-user-time':UserTime
      }
    }

</script>


<style>
  .el-tabs__item.el-tabs__item.is-active{
    /*background-color: rgba(207,90,91,0.95);*/
    /*border: 1px solid rgba(207,90,91,0.95);*/
  }
  .el-tabs--left .el-tabs__item.is-left {
    text-align: center;
  }
  .el-tabs__item{
    font-size: 20px;
    padding: 8px 26px;
    height: 56px;
    color: #B0916A;
  }
</style>

<style scoped>
  .container h2{
    position: absolute;
    top: 65px;
    left: 81px;
    color: #B0916A;
  }
  .container h3{
    color: #B0916A;
  }
  .icon{
    width:280px;
    margin:  0 auto;
    position: relative;
  }
  .icon img{
    width: 280px;
  }
  .icon h2{
    /*font-family: Axure Handwriting;*/
    font-family: 'Helvetica';
    color: #b0916a;
  }
  el-tab-pane{
    margin-top:100px;
  }
  .el-tab-pane {
    color: #767676;
  }
  .grid-content{
    color: #767676;
  }
  #Date{
    font-size: 18px;
    /*font-family: "Axure Handwriting";*/
    font-family:"Axure Handwriting";
    font-weight: bold;
    color: rgba(211,108,90,0.95);
  }
</style>
