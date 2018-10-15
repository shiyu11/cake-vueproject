<!--<template>-->
  <!--<div>-->
      <!--<ul class="nav nav-pills">-->
      <!--<router-link to="/" role="presentation"><img src="" alt="">logo</router-link>-->
      <!--<router-link to="/" role="presentation" class="active"><a>首页</a></router-link>-->
      <!--<router-link to="/product" role="presentation"><a>蛋糕馆</a></router-link>-->
      <!--<router-link to="/activity" role="presentation"><a>最新活动</a></router-link>-->
      <!--<router-link to="/user" role="presentation"><a >会员中心</a></router-link>-->
      <!--<router-link to="/" role="presentation"><img src="" alt="">图片</router-link>-->
      <!--<router-link to="/login" role="presentation"><a>登录</a></router-link>-->
      <!--<router-link to="/register" role="presentation"><a >注册</a></router-link>-->
      <!--<router-link to="/cart" role="presentation"><a >购物车</a></router-link>-->
    <!--</ul>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

  <!--export default {-->
    <!--name: "Header"-->
  <!--}-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div class="header-text">
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#fff"
  text-color="#000"
  active-text-color="#B0916A">
  <el-menu-item index="logo">logo</el-menu-item>
  <el-menu-item index="首页">首页</el-menu-item>
  <el-menu-item index="蛋糕馆">蛋糕馆</el-menu-item>
  <el-menu-item index="最新活动" >最新活动</el-menu-item>
  <el-menu-item index="会员中心">会员中心</el-menu-item>
  <el-menu-item index="图片">图片</el-menu-item>
  <el-menu-item index="登录" class="header">登录</el-menu-item>
  <el-menu-item index="注册" class="header">注册</el-menu-item>
  <el-menu-item index="购物车" class="header">购物车</el-menu-item>
</el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '首页'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key=='首页'){
          this.$router.push({path:'/'})
        }
        else if (key=='蛋糕馆') {
          this.$router.push({path:'/product'})
        }
        else if (key=='最新活动') {
          this.$router.push({path:'/activity'})
        }
        else if (key=='会员中心') {
          this.$router.push({path:'/user'})
        }else if (key=='图片') {
          this.$router.push({path:'/'})
        }else if (key=='登录') {
          this.$router.push({path:'/login'})
        }
        else if (key=='注册') {
          this.$router.push({path:'/register'})
        }
        else if (key=='购物车') {
          this.$router.push({path:'/cart'})
        }
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .header-text{
    font-size:40px
  }
</style>
<style scoped>
.header{
  float:right;
}

</style>
