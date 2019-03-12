<template>
  <div id="new">
    <h4 class="title">最新上架</h4>

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
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: "1",
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        {
          id: "2",
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmQbkPoRf-W6i38kuxCI6y_16S0AJP9UeURc8inEBSnI8353Qfg",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        {
          id: "3",
          cover:
            "http://wfqqreader-1252317822.image.myqcloud.com/cover/199/23311199/t5_23311199.jpg",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        {
          id: "4",
          cover:
            "http://wfqqreader-1252317822.image.myqcloud.com/cover/199/23311199/t5_23311199.jpg",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        }
      ]
    };
  },
  mounted() {
    // TODO: Axios 挂载data
  }
};
</script>

<style lang='scss' scoped>
.title {
  background-color: #007bff;
  margin-top: -30px;
  margin-left: -20px;
  margin-right: -20px;
  padding: 20px;
  margin-bottom: 30px;
  color: white;
}
</style>