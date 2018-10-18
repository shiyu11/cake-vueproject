<template>
  <div class="container">
    <div class="row">

      <div>
        <app-over-list></app-over-list>
      </div>

    </div>
  </div>
</template>

<script>
  import OverList from './OverList'
  export default {
    name: "Over",
    components:{
      'app-over-list':OverList
    }
  }
</script>

<style scoped>

</style>
