<template>
  <div class="container">
    <div class="row">
      <ul class="nav nav-pills">
        <li><p>我的购物车</p></li>
        <li><span>></span></li>
        <li><p class="p2">填写订单信息</p></li>
        <li><span>></span></li>
        <li><p>完成订单</p></li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    name: "OrderList"
  }
</script>

<style scoped>
  p{
    font-size: 20px;
  }
  .p2{
    color:cornflowerblue;
  }
  span{
    margin: 100px;
  }
  ul{
    margin-left: 200px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
</style>
