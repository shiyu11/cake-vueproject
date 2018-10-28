<template>
<div class="container">
  <el-row>
      <el-col :span="12">
        <img src="../../../static/images/a6.png" alt="" style="width: 55%">
      </el-col>
      <el-col :span="12">
        <img src="../../../static/images/a7.png" alt="" style="width: 40%" class="a7 ">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="3">
        <img src="../../../static/images/a8.png" alt="" class="a8 ">
      </el-col>
    </el-row>
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
    export default {
        name: "EventHeader"
    }
</script>

<style scoped>
  .a7{
    float:right;
  }

</style>
