<template>
  <div id="novel">
    <div id="novel_info">
      <div class="row">
        <div class="col-md-4 cover">
          <img :src="data.cover">
        </div>
        <div class="col-md-8 info">
          <div class="novelName">
            {{data.novelName}}
            <el-tag
              type="info"
              style="margin-left:10px; position: relative; bottom: 5px;"
            >{{data.sort}}</el-tag>
          </div>
          <hr>
          <div class="introduction">简介：{{data.introduction}}</div>
          <div class="num_box">
            <div class="num">阅读：{{data.clickNum}}</div>
            <div class="num">下载：{{data.downloadNum}}</div>
            <div class="num">评论：{{data.commentNum}}</div>
          </div>

          <el-button-group class="btn_box">
            <el-button type="warning" icon="el-icon-star-on">收藏</el-button>
            <el-button type="primary">购买（{{data.price}}Vip点）</el-button>
          </el-button-group>
        </div>
      </div>
    </div>

    <div id="novel_chapter">
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          style="font-weight: bold"
        >
          已发布章节
          <span class="badge badge-primary badge-pill">{{chapter_data.length}}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center chapter_list_item"
          v-for="item in chapter_data"
          :key="item.id"
        >第{{item.chapter}}章：{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        novelName: "霸道李先生爱上我我该怎么办",
        editorName: "李延富",
        editorId: "1",
        introduction:
          "绝路下她被迫接受天价交易，本以为钱货两清，没想到五年后再相逢。他嘴上说着厌弃，身体却很诚实的耍流氓。她拼命守护的秘密忽然曝光，他誓要将她困在身边一睡到底！无耻！别以为你长得帅体力好就人见人爱！",
        clickNum: "999",
        commentNum: "999",
        downloadNum: "999",
        sort: "玄幻",
        price: "1000",
        cover: "http://study.esunr.xyz/FmmucXXxzfTLEKJ613SbzU-tD2Bc",
        time: Date.parse(new Date())
      },
      chapter_data: []
    };
  },
  methods: {
    getData() {
      // TODO: 获取小说的基本信息
      this.axios
        .get("/getNovelInfo?id=" + this.$route.params.id)
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
    },
    getChapter() {
      // TODO: 获取某小说的章节
      this.axios
        .get("/getNovelChapter?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            this.chapter_data = res.data.data;
          } else {
            this.$message("获取章节失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取章节失败，无法连接服务器");
        });
    }
  },
  mounted() {
    this.getData();
    this.getChapter();
  }
};
</script>

<style lang='scss' scoped>
#novel_info {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 30px;
  .cover {
    img {
      width: 100%;
      height: 450px;
      border-radius: 20px;
      margin-bottom: 10px;
    }
  }
  .info {
    min-height: 400px;
    color: rgba(0, 0, 0, 0.8);
    .novelName {
      font-size: 2rem;
      font-weight: bold;
    }
    .num_box {
      margin-top: 1rem;
      display: flex;
      .num {
        background-color: #606266;
        margin-right: 10px;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
      }
    }
    .btn_box {
      position: absolute;
      bottom: 5px;
      right: 20px;
    }
  }
}
#novel_chapter {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .chapter_list_item {
    cursor: pointer;
    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
}
</style>