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
                <h5 style="margin-top: 55px">{{product.pname }}</h5>
              </div>
            </td>
            <td>
              <div class="button">
                <button v-on:click="centerDialogVisible= true" @click="del(product.pid)" class="button btn_style3">删除</button>
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
            products:[],
            centerDialogVisible: false,
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
          this.$confirm('你将失去你的小可爱?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '不忍心',
            type: 'warning'
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
  .button {
    font-size:14px;
    font-family:Verdana;
    font-weight:normal;
    -moz-border-radius:25px;
    -webkit-border-radius:25px;
    border-radius:25px;
    padding:4px 20px;
    margin: 18px;
    text-decoration:none;
  }
  .btn_style3 {
    border-radius: 25px 0 25px 0;
    background-color:rgb(176,146,106);
    opacity: 0.8;
    color: white;
  }
  /*.btn_style3:hover {*/
     /*!*background:-moz-linear-gradient( center top, pink 8%, #bddbfa 97% );*!*/
     /*background:-ms-linear-gradient( top, #B0926A 8%, white 97% );*/
     /*filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa');*/
     /*background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, #B0926A), color-stop(97%, white) );*/
     /*background-color:#B0926A;*/
   /*}.btn_style3:active {*/
      /*position:relative;*/
      /*top:1px;*/
    /*}*/
</style>
