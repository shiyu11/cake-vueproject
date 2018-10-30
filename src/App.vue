<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="top" id="top"></div>
      <router-view></router-view>

      <app-footer></app-footer>

      <el-row class="navbar-fixed-bottom" style="position: fixed">
        <el-col :span="2" :offset="22">
          <a href="#top" title="飞回顶部" >
            <img src="./assets/home/top.gif" class="img-responsive" alt="Responsive image">
          </a>

        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import Header from './components/common/Header'
  import foot from './components/common/Foot'
  export default {
    name: 'App',
    components:{
      'app-header':Header,
      'app-footer':foot,

    }
  }
</script>

<style>
  .top{
    width: 100px;
    height: 70px;
  }

</style>
