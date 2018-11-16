<template>
    <div class="container">
      <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
        <!--<el-tab-pane label="ALL 所有订单" name="first"></el-tab-pane>-->
        <!--<el-tab-pane label="AFTER RECEIPT 待收货" name="second"></el-tab-pane>-->
        <!--<el-tab-pane label="REVIEW 待评价" name="fourth"></el-tab-pane>-->
        <!--<el-tab-pane label="FINISH 已完成" name="third"></el-tab-pane>-->
      <!--</el-tabs>-->
      <div>
        <ul>
          <router-link class="list-group-item" to="/usercenter/Myorder/all" tag="li" active-class="active">ALL 所有订单</router-link>
          <router-link class="list-group-item" to="/usercenter/Myorder/after" tag="li" active-class="active">AFTER RECEIPT 待收货</router-link>
          <router-link class="list-group-item" to="/usercenter/Myorder/review" tag="li" active-class="active">REVIEW 待评价</router-link>
          <router-link class="list-group-item" to="/usercenter/Myorder/finish" tag="li" active-class="active">FINISH 已完成</router-link>
        </ul>
      </div>
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

          }
      },

    }
</script>

<style scoped>
  .el-container{
    border: 2px solid transparent;
    margin: 50px;
    margin-left: 20px;
  }
  ul{list-style: none}
  li{
    float: left;
    margin-right: 23px;
    font-size: 18px;
    cursor: pointer
  }
  .list-group-item.active,.list-group-item.active:hover {
    background-color: #B0916A;;
    opacity: 0.8;
    border-color: white;
    border-radius: 10px;
  }
  .list-group-item{
    border: 1px solid transparent;
  }
</style>
