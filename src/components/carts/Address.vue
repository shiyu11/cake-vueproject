<template>
    <div class="container">
      <div class="row">
        <div class="Occupant">
                 <el-button type="text" @click="dialogFormVisible = true" class="tab">添加新的收货地址</el-button>
                 <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                    <el-form :rules="rules">
                       <el-form-item label="收货人" :label-width="formLabelWidth">
                          <el-input v-model="name" autocomplete="off" placeholder="收货人姓名" style="width: 370px"></el-input>
                       </el-form-item>
                       <el-form-item label="联系方式" :label-width="formLabelWidth">
                         <el-input v-model="phone" autocomplete="off" placeholder="收货人手机号" style="width: 370px"></el-input>
                       </el-form-item>
                       <el-form-item label="详细地址" :label-width="formLabelWidth">
                         <el-input v-model="address" autocomplete="off" placeholder="收货人详细地址" style="width: 370px"></el-input>
                       </el-form-item>
                    </el-form>
                   <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false;confirm()" >确 定</el-button>
                   </div>
                 </el-dialog>
                <div v-if="submited">
                  <input type="checkbox" checked="checked"> 收货人：{{$store.state.name1}},收货地址：{{$store.state.address1}},{{$store.state.phone1}}
                </div>
              </div>
          </div>
    </div>
</template>

<script>

  export default {
    computed: {
      name: {
        get:function() {
          return this.$store.state.name1
        },
        set(value) {
          this.$store.state.name1 = value
        }
      },
      phone: {
        get:function() {
          return this.$store.state.phone1
        },
        set(value) {
          this.$store.state.phone1 = value
        }
      },
      address: {
        get:function() {
          return this.$store.state.address1
        },
        set(value) {
          this.$store.state.address1 = value
        }
      },
    },
    data() {
      return {
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form:{},
        submited:false,
        // ruleForm: {
        //   name: '',
        //   phone:'',
        //   // Address:'',
        //   address:''
        // },
        rules: {
          name:[
            // {required: true, message: '请输入真实姓名', trigger: 'blur' },
            { min: 2, message: '长度至少 2 个字符', trigger: 'blur' }
          ],
          phone:[
            // {required: true, message: '请输入真实手机号', trigger: 'blur' },
            {inputPattern:/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/ ,
              message: '长度在 8 到 11 个字符', trigger: 'blur' }
          ],
          address:[
            // {required: true, message: '请输入地址', trigger: 'blur' },
            { min: 2, message: '长度至少 2 个字符', trigger: 'blur' }
          ],
        },
        // ruleForms:[]
      };
    },
    methods: {
      confirm:function(){
        this.submited = true;
        // axios.post(`http://localhost:3000/addressAdd`, {
        //   aid:2,
        //   aname: this.$store.state.name1,
        //   phone: this.$store.state.phone1,
        //   address: this.$store.state.address1,
        //   defaultaddress:1,
        //   uid:2
        // }).then(function (result) {
        //   console.log(result.data)
        // })
        // alert('成功')
        }
      }
  }
</script>

<style scoped>
  .tab{
    color:black;
    font-size: 18px;
  }
  .Occupant{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px gainsboro;
  }
</style>
