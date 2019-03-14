<template>
  <div id="recharge">
    <h4>充值中心</h4>
    <el-input placeholder="请输入充值金额（单位：元）" v-model="rechargeNum">
      <template slot="append">
        <el-button type="success" @click="recharge">充值</el-button>
      </template>
    </el-input>
    <div class="label">折合Vip点：{{rechargeNum*100}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rechargeNum: ""
    };
  },
  methods: {
    recharge() {
      if (this.rechargeNum == "") {
        this.$message("请输入充值金额");
      } else if (!/^[0-9]*$/.test(this.rechargeNum)) {
        this.$message("请输入纯数字");
      } else {
        this.axios
          .get("/recharge?vp=" + parseInt(this.rechargeNum) * 10)
          .then(res => {
            if (res.data.code == 1) {
              this.$message("充值成功，即将返回上一界面");
              setTimeout(() => {
                this.userInfo();
                this.$router.go(-1);
              }, 1000);
            } else {
              this.$message("充值失败");
            }
          })
          .catch(err => {
            console.log(err);
            this.$message("无法连接服务器");
          });
      }
    },
    userInfo() {
      this.axios
        .get("/userInfo")
        .then(res => {
          if (res.data.code == 1) {
            let obj = res.data.data;
            this.$store.commit("setData", obj);
          } else {
            this.$message("登录出错");
          }
        })
        .catch(() => {
          this.$store.state.identity = "tourist";
          this.$message("您正在以游客身份浏览");
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.el-input {
  margin-top: 20px;
  margin-bottom: 20px;
}
.label {
  display: inline;
  line-height: 2;
  text-align: center;
  border-radius: 5px;
  background: #67c23a;
  color: white;
  font-size: 14px;
  padding: 5px 10px;
}
</style>