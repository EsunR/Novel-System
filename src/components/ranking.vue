<template>
  <div id="ranking">
    <h4>下载量榜</h4>
    <div class="main">
      <div class="novel_list row">
        <div class="col-md-4" v-for="item in downloadNum" :key="item.id">
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

    <h4>阅读量榜</h4>
    <div class="main">
      <div class="novel_list row">
        <div class="col-md-4" v-for="item in clickNum" :key="item.id">
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

    <h4>评论榜</h4>
    <div class="main">
      <div class="novel_list row">
        <div class="col-md-4" v-for="item in commentNum" :key="item.id">
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
      downloadNum: [],
      clickNum: [],
      commentNum: []
    };
  },
  methods:{
    getData(){
      let arr = ['downloadNum', 'clickNum', 'commentNum'];
      for(let item in arr){
        this.axios.get('/getRanking?sort=' + arr[item]).then(res=>{
          if(res.data.code == 1){
            this[arr[item]] = res.data.data;
          }else{
            this.$message(arr[item] + '数据获取失败');
          }
        }).catch(err=>{
          console.log(err);
          this.$message(arr[item] + '数据获取失败，无法连接服务器');
        })
      }
    }
  },
  mounted(){
    this.getData()
  }
};
</script>

<style lang='scss' scoped>
#ranking {
  margin: -30px -20px;
  h4 {
    background-color: #007bff;
    color: white;
    line-height: 3rem;
    padding-left: 1rem;
    margin-bottom: 20px;
  }
  .main{
    padding: 0 20px;
  }
}
</style>