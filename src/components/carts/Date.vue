<template>
  <div class="container">
    <div class="row">
      <div class="Occupant">
        <br>
        <h4 class="demonstration">选择配送日期</h4>
        <div class="occf">
          <el-date-picker v-model="time" type="datetime" placeholder="选择日期时间" format="yyyy年MM月dd HH时mm" value-format="yyyy-MM-dd-HH-mm" default-time="12:00:00"></el-date-picker><hr>
          <p style="color:darkgray">配送时间:10:00-22:00，当天21:30至次日9:00的订单，<br/>最早配送时间为次日14:00；
            实际配送时间会有前后30分钟<br/>误差；配送当天不可修改。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Date",
    computed: {
      time: {
        get: function () {
          return this.$store.state.time1
        },
        set(value) {
          this.$store.state.time1 = value
        }
      },
    },
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        date1: '',
        date2: '',
        // Ptime: '',


      };
    },
  }
</script>

<style scoped>
  .Occupant{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px gainsboro;
  }
  .occf{
    /*border:1px solid gainsboro;*/
    margin-left: 30px;
    /*width: 450px;*/
  }

</style>
