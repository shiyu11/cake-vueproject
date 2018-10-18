<template>
    <div>
      <div class="icon">
        <h2>会员中心</h2>
        <img src="../../assets/person1.png" alt="">
      </div>
      <el-row :gutter="20">
        <el-col :span="3">
          <span id="leaf"></span>
          <div class="grid-content bg-purple">
            <el-tabs :tab-position="tabPosition" @tab-click="handleClick" style="height: 400px;">
              <el-tab-pane label="cake" name="first"></el-tab-pane>
              <el-tab-pane label="完善个人资料" name="second"></el-tab-pane>
              <el-tab-pane label="我的订单" name="third"></el-tab-pane>
              <el-tab-pane label="我的会员" name="fourth"></el-tab-pane>
              <el-tab-pane label="收货地址" name="fifth"></el-tab-pane>
            </el-tabs>
            <button @click="toHome">退出登录</button>
          </div>
        </el-col>
        <el-col :span="21">
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
  import UserMember from './UserMember'
  import UserAddress from './UserAddress'
  import UserTime from './UserTime'
    export default {
        name: "UserCenter",
      data() {
        return {
          activeName2:'first',
          tabPosition: 'left'

          // username:''
        };
      },
      methods:{
          toHome(){
            this.$router.push({path:'/'})
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
            else if (tab.$options.propsData.label=='我的会员') {
              this.$router.push({path:'/usercenter/Mymember'})
            }
            else if (tab.$options.propsData.label=='收货地址') {
              this.$router.push({path:'/usercenter/UserAddress'})
            }

          console.log(tab.$options.propsData.label);
        }
      },
      components:{
        'my-user-data':UserData,
        'my-user-order':UserOrder,
        'my-user-member':UserMember,
        'my-user-address':UserAddress,
        'my-user-time':UserTime
      }
    }

</script>

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
  span{
    display:block;
    width: 31px;
    height: 36px;
    background: url(../../assets/cake2-1.png);
  }

</style>
