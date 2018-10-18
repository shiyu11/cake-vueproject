<template>
  <div>
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation">TASTY</li>
        <li role="presentation" v-on:click="show(0)"><router-link to="/productnav">全部蛋糕</router-link></li>
        <li role="presentation" v-on:click="show(1)"><router-link to="/productnav/1">新品</router-link></li>
        <li role="presentation" v-on:click="show(2)"><router-link to="/productnav/2">生日</router-link></li>
        <li role="presentation" v-on:click="show(3)">聚会</li>
        <li role="presentation" v-on:click="show(4)">儿童</li>
      </ul>
      <div v-if="type==0">

      </div>
      <div v-else-if="type==1">
        <my-oneproduct></my-oneproduct>
      </div>
      <div v-else-if="type==2"><my-oneproduct></my-oneproduct></div>
      <div v-else-if="type==3"><my-oneproduct></my-oneproduct></div>
      <div v-else><my-oneproduct></my-oneproduct></div>

  </div>
</template>

<script>
  import OneProduct from '../home/OneProduct'
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
        },
        methods: {
          handleSelect(key, keyPath) {
            if (key == '全部蛋糕') {
              this.$router.push({path: '/allproduct'})
            }
            else if (key == '新品') {
              this.$router.push({path: '/newproduct'})
            }
            else if (key == '儿童') {
              this.$router.push({path: '/child'})
            }
            else if (key == '聚会') {
              this.$router.push({path: '/user'})
            }
            else if (key == '生日') {
              this.$router.push({path: '/login'})
            }
            // console.log(key, keyPath);
          }
        }
      },
      components:{
          'my-oneproduct':OneProduct
      }
    }
</script>

<style scoped>

</style>
