<template>
  <div id="recommend">
    <div class="noRecommed" v-if="$store.state.identity == 'tourist'">请您登录后查看推荐</div>
    <div class="title_box" v-if="$store.state.identity != 'tourist'">
      <div class="title">向您推荐：</div>
      <el-button type="danger" icon="el-icon-refresh" @click="refresh">换一批</el-button>
    </div>
    <div class="main">
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
              <el-button @click="$router.push('/novel/' + item.id)" type="primary">查看详情</el-button>
            </div>
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
    getData() {
      this.axios
        .get("/getRecommend")
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data;
            this.$message("获取成功");
          } else {
            this.$message("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("服务器连接失败");
        });
    },
    refresh() {
      this.getData();
    }
  },
  mounted() {
    if (this.$store.state.identity == "tourist") {
      return;
    } else {
      this.getData();
    }
  }
};
</script>

<style lang='scss' scoped>
.title_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  .title {
    font-size: 1.5rem;
  }
}
.noRecommed{
  margin-bottom: 20px;
  color: rgba($color: #000000, $alpha: .8)
}
</style>