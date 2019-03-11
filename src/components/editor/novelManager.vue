<template>
  <div id="novelManager">
    <h4>管理小说</h4>
    <div class="main row">
      <div class="col-md-4" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="cover">无封面</div>
          <img class="card-img-top" :src="item.cover" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.novelName}}</h5>
            <p class="card-text">{{item.introduction | introduction}}</p>
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
        }
      ]
    };
  },
  methods: {
    renderNoCover() {
      $(".card-img-top").each(function() {
        if ($(this).attr("src") == "") {
          $(this).css("display", "none");
          $(this)
            .prev()
            .css("display", "block");
        }
      });
    },
    deleteNovel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(id);
          // TODO: AXIOS 删除小说 /deleteNovel
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.renderNoCover();
    // TODO: AXIOS 渲染小说 /getPublishedNovel
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
.main {
  .card {
    margin-bottom: 1rem;
    .cover {
      height: 15rem;
      line-height: 15rem;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.3);
      display: none;
    }
    img {
      height: 15rem;
    }
  }
}
</style>