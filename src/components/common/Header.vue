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
          <el-submenu index="2">
            <template slot="title">蛋糕馆</template>
            <el-menu-item index="新品">新品</el-menu-item>
            <el-menu-item index="儿童">儿童</el-menu-item>
            <el-menu-item index="生日">生日</el-menu-item>
            <el-menu-item index="聚会">聚会</el-menu-item>
          </el-submenu>
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
          <el-menu-item index=""  v-if="getName != null">欢迎<span class="username">*{{getName}}*</span>
            <a v-if="getName != null" @click="clearUser" class="out">[退出]</a>
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
        }
        else if (key == '新品') {
          this.$router.push({path: '/productlist/1'})
        }
        else if (key == '生日') {
          this.$router.push({path: '/productlist/3'})
        }
        else if (key == '聚会') {
          this.$router.push({path: '/productlist/4'})
        }
        else if (key == '儿童') {
          this.$router.push({path: '/productlist/2'})
        }
      },
      clearUser(){
        sessionStorage.clear();
        // this.$router.push({path:'/login'})
        window.location.href='http://10.40.4.15:8080/'
      },
    },
    // watch: {
    //   '$route' (to, from) {
    //     this.$router.go(0);
    //   }},
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
    margin-top: 5px;
    color:#8a6d3b;
  }
  .out{
    cursor: pointer;
  }
</style>
<style scoped>
  .header-text{
    font-size:25px;
  }
/*.mac{*/
  /*background-image: url("../../assets/home/huaban.png");*/
/*}*/
</style>


