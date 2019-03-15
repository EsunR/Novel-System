<template>
  <div id="bought">
    <div class="novel_list row">
      <h4 v-if="data.length == 0" style="margin-left:20px;">您还没有购买过任何小说</h4>
      <div class="col-md-4" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="cover" v-show="item.cover == ''">无封面</div>
          <img class="card-img-top" :src="item.cover" alt="Card image cap">
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
      data: []
    };
  },
  methods: {
    getData(){
      //TODO: 获取已购买小说
      this.axios
        .get('/getBought')
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data
          }
      })
      .catch(err => {
        console.log(err);
        this.$message('无法获取已购列表，服务器无法连接');
      });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>