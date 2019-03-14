<template>
  <div id="novelManager">
    <h4>管理小说</h4>
    <div class="main novel_list row">
      <h3 style="padding-left: 10px; opacity: 0.8" v-show="data.length == 0">您还没有发布过小说</h3>
      <div class="col-md-4" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="cover" v-show="item.cover == ''">无封面</div>
          <img
            class="card-img-top"
            v-show="item.cover != ''"
            :src="item.cover"
            alt="Card image cap"
          >
          <div class="card-body">
            <h5 class="card-title">{{item.novelname}}</h5>
            <p class="card-text">{{item.introduction | introduction}}</p>
            <el-button @click="$router.push('/novel/' + item.id)" type="primary">查看</el-button>
            <el-button @click="$router.push('/editor/addChapter/' + item.id)" type="info">添加章节</el-button>
            <el-button @click="deleteNovel(item.id)" type="danger">删除</el-button>
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
    deleteNovel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(id);
          this.axios
            .get("/deleteNovel?id=" + id)
            .then(res => {
              if (res.data.code == 1) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getData();
              } else {
                this.$message({
                  type: "info",
                  message: "删除失败"
                });
              }
            })
            .catch(err => {
              console.log(err);
              this.$message({
                type: "info",
                message: "无法连接服务器"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getData() {
      this.axios
        .get("/getPublishedNovel")
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data;
          } else {
            this.$message("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("服务器连接失败");
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang='scss' scoped>
h4 {
  background-color: #e6a23c;
  margin: -20px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}

</style>