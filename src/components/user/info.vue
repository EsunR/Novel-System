<template>
  <div id="info">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="key">账号</div>
        <div class="value">{{data.account}}</div>
      </li>
      <li class="list-group-item">
        <div class="key">用户名</div>
        <div class="value">{{data.name}}</div>
      </li>
      <li class="list-group-item">
        <div class="key">身份</div>
        <div class="value">{{data.identity | identity}}</div>
      </li>
      <li class="list-group-item">
        <div class="key">vip点</div>
        <div class="value">{{data.vp}}</div>
      </li>
      <li class="list-group-item">
        <div class="key">喜好</div>
        <div class="value">
          <el-tag v-for="item in data.like" :key="item">{{item}}</el-tag>
        </div>
      </li>
    </ul>
    <div class="btn_box">
      <el-button type="primary" @click="signing" v-if="$store.state.identity == 'reader'">签约为作者</el-button>
      <el-button type="success" @click="$router.push('/user/recharge')">充值vip点</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getUserInfo(callback) {
      this.axios
        .get("/userInfo")
        .then(res => {
          if (res.data.code == 1) {
            let obj = res.data.data;
            callback(obj);
          } else {
            this.$message("获取用户信息失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("与服务器连接失败");
        });
    },
    signing() {
      this.$confirm("您却定要签约为作者吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .get("/signing")
            .then(res => {
              if (res.data.code == 1) {
                this.$message("签约成功，正在刷新页面");
                setTimeout(function() {
                  window.location.reload();
                }, 1000);
              } else {
                this.$message("签约失败");
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("与服务器连接失败");
            });
        })
        .catch(() => {
          this.$message("已取消");
        });
    }
  },
  mounted() {
    this.getUserInfo(obj => {
      this.data = obj;
    });
  }
};
</script>

<style lang='scss' scoped>
.list-group-item {
  display: flex;
  line-height: 2rem;
  .key {
    width: 60px;
    background-color: #007bff;
    color: white;
    text-align: center;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 14px;
  }
  .value {
    color: rgba($color: #000000, $alpha: 0.8);
  }
  .el-tag {
    margin-right: 10px;
  }
}
.btn_box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>