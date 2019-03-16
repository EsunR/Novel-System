<template>
  <div id="novelList">
    <h4>小说列表</h4>
    <el-dialog title="小说数据" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="key" label="范围"></el-table-column>
        <el-table-column property="value" label="数据"></el-table-column>
      </el-table>
    </el-dialog>
    <div class="novel_list row">
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
            <h5 class="card-title">{{item.novelName}}</h5>
            <p class="card-text">{{item.introduction | introduction}}</p>
            <el-button @click="$router.push('/novel/' + item.id)" type="primary">详情</el-button>
            <el-button @click="getNovelData(item.id)" type="info">数据</el-button>
            <el-button @click="deleteNovel(item.id)" type="danger">删除</el-button>
          </div>
        </div>
      </div>
      <el-button
        type="primary"
        style="display: flex; margin: 0 auto;"
        v-if="data.length < total"
        @click="loadMore"
      >加载更多</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      novelData: {
        collection: 11,
        download: 11,
        comment: 11,
        click: 11
      },
      gridData: [],
      data: [
        {
          id: "1",
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        }
      ],
      page: 1,
      total: 0
    };
  },
  methods: {
    getData() {
      this.axios
        .get("/getNewPublish?page=" + this.page)
        .then(res => {
          if (res.data.code == 1) {
            this.total = res.data.data.total;
            if (this.page == 1) {
              this.data = res.data.data.novelList;
            } else {
              let arr = this.data;
              let arr2 = res.data.data.novelList;
              this.data = [...arr, ...arr2];
            }
          } else {
            this.$message("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("服务器连接失败");
        });
    },
    getNovelData(id) {
      this.dialogTableVisible = true;
      this.axios
        .get("/getNovelData?id=" + id)
        .then(res => {
          if (res.data.code == 1) {
            this.novelData = res.data.data;
            this.gridData = [
              {
                key: "收藏数",
                value: this.novelData.collection
              },
              {
                key: "下载数",
                value: this.novelData.download
              },
              {
                key: "留言数",
                value: this.novelData.comment
              },
              {
                key: "点击数",
                value: this.novelData.click
              }
            ];
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取数据失败，服务器无法连接");
        });
    },
    deleteNovel(id) {
      this.$confirm("您确定要执行此操作吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .get("/deleteNovel?id=" + id)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("删除成功");
                this.page = 1;
                this.getData();
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("删除失败，服务器无法连接");
            });
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "操作已取消"
          });
        });
    },
    loadMore() {
      this.page++;
      this.getData();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang='scss' scoped>
h4 {
  margin-bottom: 30px;
}
</style>