<template>
  <div class="header-text navbar-fixed-top mac">
    <el-row>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#000"
        active-text-color="#B0916A"
      >
        <el-col :span="3">
          <img src="../../assets/home/taste-dream.png" alt="" class="img-rounded image">
        </el-col>
        <el-col :span="2" class="topq">
          <el-menu-item index="首页">首页</el-menu-item>
        </el-col>
        <el-col :span="2" class="topq">
          <el-menu-item index="蛋糕馆">蛋糕馆</el-menu-item>
        </el-col>
        <el-col :span="2" class="topq">
          <el-menu-item index="最新活动">最新活动</el-menu-item>
        </el-col>

        <el-col :span="2" class="topq">
          <el-menu-item index="about">配送说明</el-menu-item>
        </el-col>
        <el-col :span="2" class="topq">
          <el-menu-item index="购物车">购物车</el-menu-item>
        </el-col>
        <el-col :span="2" class="topq">
          <el-menu-item index="会员中心" v-if="getName != null">会员中心</el-menu-item>
        </el-col>
        <el-col :span="4" class="topq" :offset="2">
          <el-menu-item index=""  v-if="getName != null">欢迎<span class="username">{{getName}}</span>
            <a v-if="getName != null" @click="clearUser" class="out" ><img src="../../assets/home/111.png" alt="" style="width: 40px;height: 40px;"><span class="tuichu">退出</span></a>
          </el-menu-item>
        </el-col>
        <el-col :span="1" class="topq">
          <el-menu-item index="注册"  v-if="getName == null">注册</el-menu-item>
        </el-col>
        <el-col :span="1" class="topq">
          <el-menu-item index="登录" v-if="getName == null">登录</el-menu-item>
        </el-col>

      </el-menu>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '首页',
      };
    },
    computed:{
      getName(){
        return sessionStorage.getItem('sname')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key == '首页') {
          this.$router.push({path: '/'})
        }
        else if (key == '最新活动') {
          this.$router.push({path: '/event'})
        }
        else if (key == '会员中心') {
          this.$router.push({path: '/usercenter/UserTime'})
        } else if (key == 'about') {
          this.$router.push({path: '/about'})
        } else if (key == '登录') {
          this.$router.push({path: '/login'})
        }
        else if (key == '注册') {
          this.$router.push({path: '/register'})
        }
        else if (key == '购物车') {
          this.$router.push({path: '/cart'})
        }else if(key == '蛋糕馆'){
          this.$router.push({path: '/allproducts'})
        }
      },
      clearUser(){
        sessionStorage.clear();
        window.location.href='http://localhost:8080/'
      },
    },
  }
</script>

<style>
  .image {
    display: block;
    width: 100%;
  }
  .topq {
    margin-top: 5px;
  }
  .username {
    /*margin-top: 5px;*/
    margin-left:5px;
    color:#8a6d3b;
    font-family: "STXingkai";
    font-size: 25px;
  }
  .out{
    cursor: pointer;

  }
</style>
<style scoped>
  .header-text{
    font-size:25px;
  }
  .tuichu{
    font-family:"Axure Handwriting";
    color: #cd8d11;
  }
/*.mac{*/
  /*background-image: url("../../assets/home/huaban.png");*/
/*}*/
</style>


