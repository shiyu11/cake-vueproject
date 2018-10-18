<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/common/Header'
  export default {
    name: 'App',
    components:{
      'app-header':Header
    }
  }
</script>

<style>

</style>
