<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <!--头顶空格-->
      <div class="top" id="top"></div>
      <router-view></router-view>
      <app-footer></app-footer>
      <!--置顶小图标-->
      <el-row class="navbar-fixed-bottom" style="position: fixed">
        <el-col :span="2" style="float:right">
          <a href="#top" title="飞回顶部" id="bang">
            <img src="./assets/home/top.gif" class="img-responsive" alt="Responsive image" >
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

    },
    mounted(){
      $(window).scroll(function(){
      var h=$(this).scrollTop();//获得滚动条距top的高度
      if(h>600){
        $("#bang").fadeIn();
      }else{
        $("#bang").fadeOut();
      }
    })

  }
  }
</script>

<style scoped>
  .top{
    width: 80px;
    height: 80px;
  }

</style>
