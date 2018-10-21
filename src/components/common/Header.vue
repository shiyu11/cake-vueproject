<template>
  <div class="header-text navbar-fixed-top">
      <!--<el-row :gutter="20">-->

        <!--&lt;!&ndash;<el-col :span="4" :offset="14" class="user">欢迎用户<span>moumou</span></el-col>&ndash;&gt;-->
      <!--</el-row>-->

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
            <el-menu-item index="会员中心">会员中心</el-menu-item>
          </el-col>
          <el-col :span="3" class="topq">
            <el-menu-item index="about">配送范围内满100元包邮</el-menu-item>
          </el-col>
          <el-col :span="2" :offset="2" class="topq">
            <el-menu-item index="location" >
              <el-dropdown>
                       <span class="el-dropdown-link">
                          城市<i class="el-icon-arrow-down el-icon--right"></i>
                       </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>上海</el-dropdown-item>
                  <el-dropdown-item>苏州</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
          </el-col>
          <el-col :span="2" class="topq">
            <el-menu-item index="购物车">购物车</el-menu-item>
          </el-col>
          <el-col :span="2" class="topq">
            <el-menu-item index="注册">注册</el-menu-item>
          </el-col>
          <el-col :span="2" class="topq">
            <el-menu-item index="登录" >登录</el-menu-item>
          </el-col>
        </el-menu>
      </el-row>
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
        if (key == '首页') {
          this.$router.push({path: '/'})
        }
        // else if (key == '蛋糕馆') {
        //   this.$router.push({path: '/product'})
        // }
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


        // console.log(key, keyPath);
      }
    }
  }
</script>

<style>
/*.user{*/
  /*color:#B0916A;*/
  /*margin-top:20px*/
/*}*/
  .image{
    display: block;
    width: 100%;
  }
.topq{
  margin-top: 5px;
}

</style>
<style scoped>


</style>


