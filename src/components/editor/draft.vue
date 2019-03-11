<template>
  <div id="draft">
    <h4>草稿箱</h4>
    <div class="main">
      <div class="card" v-for="item in data" :key="item.id">
        <div class="card-header">来自小说：《{{item.novelName}}》</div>
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">章节：第{{item.chapter}}章</p>
          <router-link :to="'/editor/draft/'+item.id" class="btn btn-primary">修改草稿</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          novelName: "李先生传记",
          id: "1",
          chapter: "1",
          title: "暴躁李延富在线打人"
        },
        {
          novelName: "李先生传记",
          id: "2",
          chapter: "1",
          title: "暴躁李延富在线打人"
        }
      ]
    };
  },
  mounted(){
    // TODO: AXIOS 获取data数据 /getDraftBox
  }
};
</script>

<style lang='scss' scoped>
h4 {
  background-color: #909399;
  margin: -20px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}
.card {
  color: rgba($color: #000000, $alpha: 0.8);
  margin-bottom: 20px;
  .card-title {
    font-weight: bold;
  }
  .btn {
    float: right;
  }
}
</style>