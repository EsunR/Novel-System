<template>
  <div id="collection">
    <div class="novel_list row">
      <h4 v-if="data.length == 0" style="margin-left:20px;">暂无收藏</h4>
      <div class="col-md-4" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="cover">无封面</div>
          <img class="card-img-top" :src="item.cover" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.novelName}}</h5>
            <p class="card-text">{{item.introduction | introduction}}</p>
            <el-button @click="$router.push('/novel/' + item.id)" type="primary">查看详情</el-button>
            <el-button type="danger" @click="deleteCollection(item.id)">删除</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    deleteCollection(id) {
      // TODO: AXIOS 删除收藏 /deleteCollection
      this.$confirm("您确定要删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.axios
          .get("/deleteCollection?id=" + id)
          .then(res => {
            if (res.data.code == 1) {
              this.$message("删除成功");
              this.getData();
            } else {
              this.$message("删除失败");
            }
          })
          .catch(() => {
            this.$message("无法连接服务器");
          });
      });
    },
    getData() {
      // TODO: 获取用户收藏
      this.axios
        .get("/getCollection")
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data;
          } else {
            this.$message("获取失败");
          }
        })
        .catch(() => {
          this.$message("无法连接服务器");
        });
    }
  },
  mounted() {
    this.COMMON.renderNoCover();
    this.getData();
  }
};
</script>

<style lang='scss' scoped>
</style>