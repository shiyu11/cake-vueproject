<template>
    <div>
      <!--<div v-for="(address,index) in ad" v-if="index<4">-->
      <div v-for="address in ad" v-if="address.uid==$store.state.uid" >
      <span>姓名：{{address.aname}}</span>
      <span>电话：{{address.phone}}</span>
      <span>详细地址：{{address.address}}</span>
      <span>{{address.defaultaddress}}</span>
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
          let _this=this
        axios.get('http://localhost:3000/alladdress').then((res)=>{
          //渲染页面
          console.log(res)
          _this.ad = res.data.data;
        }),(err)=>{
          console.log(err)
        }
      },
    }

</script>

<style scoped>

</style>
