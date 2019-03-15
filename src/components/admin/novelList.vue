<template>
  <div id="novelList">
    <h4>小说列表</h4>
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
      <el-button
        type="primary"
        style="display: flex; margin: 0 auto;"
        v-if="data.length < total"
      >加载更多</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      page: 1,
      total: 0
    };
  },
  methods: {
    // TODO: 获取小说
    getData() {
      this.axios
        .get("/getNewPublish?page=" + this.page)
        .then(res => {
          if (res.data.code == 1) {
            this.total = res.data.data.total;
            this.data = res.data.novelList;
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
</style>