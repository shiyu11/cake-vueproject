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
                <button v-on:click="del(product.pid)" class="button btn_style3">删除</button>
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
    border:1px solid white;
    /*background:-moz-linear-gradient( center top, #bddbfa 4%, pink 97% );*/
    background:-ms-linear-gradient( top, white 8%, #B0926A 97% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea');
    background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, white), color-stop(97%, #B0926A) );
    background-color:white;
    color: rgba(99,32,29,0.95);
    display:inline-block;
    text-shadow:0px 0px 0px #B0926A;
    -webkit-box-shadow:inset 0px 0px 0px -50px white;
    -moz-box-shadow:inset 0px 0px 0px -50px white;
    box-shadow:inset 0px 0px 0px -50px white;
  }.btn_style3:hover {
     /*background:-moz-linear-gradient( center top, pink 8%, #bddbfa 97% );*/
     background:-ms-linear-gradient( top, #B0926A 8%, white 97% );
     filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa');
     background:-webkit-gradient( linear, left top, left bottom, color-stop(8%, #B0926A), color-stop(97%, white) );
     background-color:#B0926A;
   }.btn_style3:active {
      position:relative;
      top:1px;
    }
</style>
