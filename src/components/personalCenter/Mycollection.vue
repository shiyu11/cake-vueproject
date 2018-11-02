<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <table class="table">
          <tbody>
          <tr v-for="product in products">
            <td>
              <router-link :to="`/productDetail/${product.pid}`" >
                <img :src="product.ppic" style="width:150px;">
              </router-link>

            </td>
            <td >
              <div class="info">
                <h5>{{ product.pname }}</h5>
              </div>
            </td>
            <td>
              <div class="button">
                <button v-on:click="del(product.pid)">删除</button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Mycollection",
      data(){
          return{
            products:[]
          }
      },
      methods:{
        del (pid) {
          let _this = this
          this.$axios.get(`deletecollect/${pid}`).then(function (result) {
            _this.products = result.data.data;
            _this.aaa()
            console.log(result.data)
          })
      },
        aaa() {
          let _this = this
          this.$axios.get(`getcollect/${sessionStorage.getItem('uid')}`).then(function (result) {
            _this.products = result.data.data;
            console.log(_this.products)
          })
        }
      },
      created(){
        this.aaa()
      }
    }
</script>

<style scoped>

</style>
