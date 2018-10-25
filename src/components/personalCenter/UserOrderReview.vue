<template>
  <div class="el-container">
    <div class="col-md-12">
      <table class="table">
        <thead>
        <tr>
          <th></th>
          <th>订单信息</th>
          <!--<th>订单编号</th>-->
          <th>数量</th>
          <th>金额</th>
          <th>订单状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in or" v-if="order.state=='待评价'">
          <td><img :src="order.ppic" style="width:120px;height:120px;" ></td>
          <td class="info">
            <h4>{{order.pname}}</h4>
          </td>
          <!--<td>{{order.oid}}</td>-->
          <td>{{order.rnum}}</td>
          <td>{{order.pprice}}</td>
          <td>{{order.state}}</td>
          <td>
            <el-form >
            <el-input type="textarea" style="border: 1px solid #B0926A" v-model="vcon">
          </el-input>
            </el-form>
            <button v-on:click="evaluateOrder(order.oid,order.pid)">评价
           </button></td>
        </tr>
        </tbody>
      </table>
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
          myuid:this.$store.state.uid,
          mytime:new Date(),
          vcon:''
        }
      },
      mounted(){
        let _this=this
        axios.get('http://localhost:3000/allorder').then((res)=>{
          //渲染页面
          console.log(res)
          _this.or = res.data.data;
        }),(err)=>{
          console.log(err)
        }
      },
      methods:{

        evaluateOrder:function (oid,pid) {
          let  _this=this
          // console.log(`http://localhost:3000/updateor2/${oid}`);
          axios.get("http://localhost:3000/updateor2/"+oid).then((res)=>{
            console.log(res);

          })
          axios.post('http://localhost:3000/product/adduserreview',{
            vcontent:_this.vcon,
            vtime:_this.mytime,
            pid:pid,
            uid:_this.myuid
          }).then((res)=>{
            console.log(res);
          })
          console.log("执行成功");
          // console.log('wode==='+this.myuid+'wodetime'+this.mytime+'wovcontnet'+this.form.vcontent+'wodepid'+this.or.pid)
        }
      }
    }
</script>

<style scoped>
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
  .el-container{
    margin-top: 1px;
    margin-left: 2px;
  }
  .el-textarea__inner{
    border:1px solid #B0926A;
  }
</style>
