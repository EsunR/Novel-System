<template>
  <div id="collection">
    <div class="novel_list row">
      <h4 v-if="data.length == 0" style="margin-left:20px;">暂无收藏</h4>
      <div class="col-md-4" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="cover" v-show="item.cover == ''">无封面</div>
          <img class="card-img-top" :src="item.cover" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.novelName}}</h5>
            <p class="card-text">{{item.introduction | introduction}}</p>
            <el-button @click="$router.push('/novel/' + item.novelId)" type="primary">查看详情</el-button>
            <el-button type="danger" @click="deleteCollection(item.id)">删除收藏</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="title">- 为您推荐 -</div>
    <div class="novel_list row">
      <div class="col-md-4" v-for="item in recommendData" :key="item.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{item.novelName}}</h5>
            <p class="card-text">{{item.introduction | introduction}}</p>
            <el-button @click="$router.push('/novel/' + item.id)" type="primary">查看详情</el-button>
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
      data: [],
      recommendData:[]
    };
  },
  methods: {
    deleteCollection(id) {
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
    },
    getRecommend(){
      this.axios
        .get('/getRecommend ')
        .then(res => {
          if (res.data.code == 1) {
            this.recommendData = res.data.data.slice(0,3);
          }
      })
      .catch(err => {
        console.log(err);
        this.$message('服务器无法连接');
      });
    }
  },
  mounted() {
    this.getData();
    this.getRecommend();
  }
};
</script>

<style lang='scss' scoped>
.title{
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: rgba($color: #000000, $alpha: 0.5);
  font-weight: bold;
}
h4{
  display: block;
  width: 100%;
  margin-right: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
</style>