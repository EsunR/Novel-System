<template>
  <div id="reportList">
    <h4>举报列表</h4>
    <h3 v-if="reportList.length == 0">暂无举报</h3>
    <div class="report_card" v-for="(item, index) in reportList" :key="index">
      <div class="box_left">
        <div class="content">评论：{{item.content}}</div>
        <div class="user">用户：{{item.name}}</div>
      </div>
      <div class="box_right">
        <el-button type="info" @click="banUser(item.uid)">禁言用户</el-button>
        <el-button type="danger" @click="deleteComment(item.id)">删除评论</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportList: []
    };
  },
  methods: {
    getReportList() {
      this.axios
        .get("/getRepotedComment")
        .then(res => {
          if (res.data.code == 1) {
            this.reportList = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("服务器无法连接");
        });
    },
    banUser(uid) {
      this.$confirm("您确定要禁言该用户吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .get("/managerUser?id=" + uid + "&action=ban")
            .then(res => {
              if (res.data.code == 1) {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("服务器无法连接");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    deleteComment(id) {
      this.$confirm("您确定要删除该评论吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .get("/deleteComment?id=" + id)
            .then(res => {
              if (res.data.code == 1) {
                this.getReportList();
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("服务器无法连接");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    }
  },
  mounted() {
    this.getReportList();
  }
};
</script>

<style lang='scss' scoped>
h4 {
  margin-bottom: 30px;
}
.report_card {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 994px) {
    display: block;
    .box_right {
      margin-top: 20px !important;
    }
  }
}
</style>