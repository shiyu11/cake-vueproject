<template>
<div class="container">
  <app-event-head></app-event-head>
  <el-row>
      <el-col :span="5">
        <img src="../../../static/images/a9.png" alt="" style="width: 90%" class="a9 ">
      </el-col>
      <el-col :span="5" :offset="14">
        <img src="../../../static/images/a10.png" alt="" style="width: 58%" class="a10">
      </el-col>
    </el-row>
</div>
</template>

<script>
  import EventHead from './EventHead'
    export default {
      name: "EventHeader",
      components: {
        'app-event-head': EventHead,
      }
    }
</script>

<style scoped>

</style>
