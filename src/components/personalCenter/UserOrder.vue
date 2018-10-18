<template>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="ALL 所有订单" name="first"></el-tab-pane>
        <el-tab-pane label="AFTER RECEIPT 待收货" name="second"></el-tab-pane>
        <el-tab-pane label="FINISH 已完成" name="third"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </div>

</template>

<script>
  // import UserOrderAll from '../personalCenter/UserOrderAll'
  // import UserOrderAfter from '../personalCenter/UserOrderAfter'
  // import UserOrderFinish from '../personalCenter/UserOrderFinish'
    export default {
        name: "UserOrder",
      data(){
          return{
            activeName:'first'
          }
      },
      methods:{
        handleClick(tab,event){
          if(tab.$options.propsData.label=='ALL 所有订单'){
            this.$router.push({path:'/usercenter/Myorder'})
          }
          else if(tab.$options.propsData.label=='AFTER RECEIPT 待收货'){
            this.$router.push({path:'/usercenter/Myorder/after'})
          }
          else if(tab.$options.propsData.label=='FINISH 已完成'){
            this.$router.push({path:'/usercenter/Myorder/finish'})
          }
          console.log(tab.$options.propsData.label);
        }
      },
      // components:{
      //   // 'my-user-order-all':UserOrderAll,
      //   // 'my-user-order-after':UserOrderAfter,
      //   // 'my-user-order-finish':UserOrderFinish
      // }
    }
</script>

<style scoped>
  .el-container{
    border: 2px solid transparent;
    margin: 20px;
    margin-left: 60px;
  }
</style>
