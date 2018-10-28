<template>
  <div class="container">
    <div class="row">
    <!--<div v-for="(address,index) in ad" v-if="index<4">-->
    <div>
      <div class="col-md-11">
        <table class="table">
          <thead>
          <tr>
            <th>收货人姓名</th>
            <th>电话</th>
            <th>详细地址</th>
            <th>默认地址</th>
            <!--<th>地址操作</th>-->
          </tr>
          </thead>
          <tbody>
          <tr v-for="address in ad">
            <td>{{address.aname}}</td>
            <td>{{address.phone}}</td>
            <td>{{address.address}}</td>
            <td>{{address.defaultaddress}}</td>
          </tr>
          </tbody>
        </table>
      <!--<span>姓名：{{address.aname}}</span>-->
      <!--<span>电话：{{address.phone}}</span>-->
      <!--<span>详细地址：{{address.address}}</span>-->
      <!--<span>{{address.defaultaddress}}</span>-->
    </div>
    </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "UsergetAddress",
    data(){
      return{
        mypid: this.$route.params.pid,
        ad:[ ],
      }
    },
    components:{
    },
    mounted(){
      let _this=this;
      axios.get(`http://localhost:3000/alladdress/${sessionStorage.getItem('uid')}`).then((res)=>{
        //渲染页面
        // console.log(res);
        _this.ad = res.data.data;
      }),(err)=>{
        console.log(err)
      }
    },
  }

</script>

<style scoped>

</style>


