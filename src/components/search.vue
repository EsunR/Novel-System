<template>
  <div id="search">
    <h4>搜索结果</h4>
    <div class="main">
      <h3 v-if="data.length == 0">暂无结果</h3>
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
        .get("/getSearch", {
          params: {
            searchWay: this.$route.query.searchWay,
            key: this.$route.query.key
          }
        })
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data;
          } else {
            this.$message("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("无法连接服务器");
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    "$route.query": function() {
      this.getData();
    }
  }
};
</script>

<style lang='scss' scoped>
h4 {
  margin: -30px -20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  padding: 20px;
}
</style>