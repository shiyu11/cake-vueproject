<template>
  <div>
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation">全部口味</li>
        <li role="presentation" v-on:click="show(0)">巧克力</li>
        <li role="presentation" v-on:click="show(1)">水果</li>
        <li role="presentation" v-on:click="show(2)">慕斯</li>
        <li role="presentation" v-on:click="show(3)">冰淇淋</li>
      </ul>
      <div v-if="type==0">内容一？？？？？？？？？？</div>
      <div v-else-if="type==1">内容2？？？？？？？</div>
      <div v-else-if="type==2">内容3</div>
      <div v-else>内容4</div>

  </div>
</template>

<script>
    export default {
        name: "ProductNav",
      data() {
        return {
          message: '内容一',
          type: 2
        }
      },
      methods: {
        show: function (index) {
          this.type = index;
        }
      }
    }
</script>

<style scoped>

</style>
