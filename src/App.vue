<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="top"></div>
      <router-view></router-view>
      <app-footer></app-footer>
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
