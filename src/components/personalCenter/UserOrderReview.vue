<template>
  <div class="container">
    <div class="row">
    <div class="col-md-9">
      <table class="table">
        <thead>
        <tr>
          <th></th>
          <th>订单信息</th>
          <!--<th>订单编号</th>-->
          <th>数量</th>
          <!--<th>评论内容</th>-->
          <th>订单状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(order,index) in or" v-if="order.state=='待评价'">
          <td><router-link :to="`/productDetail/${order.pid}`">
            <img :src="order.ppic" style="width:120px;height:120px;" ></router-link></td>
          <td class="info">
            <h4>{{order.pname}}</h4>
          </td>
          <!--<td>{{order.oid}}</td>-->
          <td>{{order.rnum}}</td>

          <td>{{order.state}}</td>
          <td>
            <el-form >
            <el-input type="textarea" style="border: 1px solid #B0926A" v-model="order.vcon">
          </el-input>
            </el-form>
            <button v-on:click="evaluateOrder(index,order.oid,order.pid)">评价
           </button></td>
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
        name: "UserOrderReview",
      data(){
        return {
          myoid: this.$route.params.oid,
          or:[],
          myuid:sessionStorage.getItem('uid'),
          mytime:new Date(),
          vcon:''
        }
      },
      mounted(){
        let _this=this
        axios.get(`http://localhost:3000/allorder/${this.myuid}`).then((res)=>{
          //渲染页面
          // console.log(res)
          _this.or = res.data.data;
          console.log(_this.log)
          for(let i in _this.or){
            (_this.or)[i].vcon = '';
          }
        }),(err)=>{
          console.log(err)
        }
      },
      //提交评价内容
      methods:{
        evaluateOrder:function (index,oid,pid) {
          let  _this=this
          // console.log(`http://localhost:3000/updateor2/${oid}`);
          axios.get("http://localhost:3000/updateor2/"+oid).then((res)=>{
            // console.log(res);
            alert('评价成功成功')
            this.$router.push({path:'/usercenter/Myorder/finish'})
          })
          axios.post('http://localhost:3000/product/adduserreview',{
            vcontent:_this.or[index].vcon,
            vtime:_this.mytime,
            pid:pid,
            uid:_this.myuid

          }).then((res)=>{
            // console.log(res);
          })
          console.log("执行成功");
          // console.log('wode==='+this.myuid+'wodetime'+this.mytime+'wovcontnet'+this.form.vcontent+'wodepid'+this.or.pid)
        },

      }
    }
</script>

<style scoped>
  .col-md-9 {
    width: 81%;
  }
  .table{
    border:solid 1px transparent;
    margin-top: 10px;
  }
  .table th{
    text-align: center;
    background-color:#B0926A;
    font-size: 14px;
    color: white;
    padding: 1px;
  }
  .table td{
    text-align: center;
    width: 200px;
    border-bottom:dashed 1px silver;
  }
  img{
    float: left;
    margin-left: 53px;
  }
  table>tbody>tr>td{

    vertical-align: middle
  }
  table>tbody>tr>td.info{
    background-color: white;
  }
  .container{
    margin-left: 2px;
  }
  .el-textarea__inner{
    border:1px solid #B0926A;
  }
</style>
