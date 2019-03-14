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
            <div class="num">阅读：{{data.clicknum}}</div>
            <div class="num">下载：{{data.downloadnum}}</div>
            <div class="num">评论：{{data.commentnum}}</div>
          </div>

          <div class="editor_box">
            <div class="editor_info">作者：{{data.editorName}}</div>
            <div class="editor_info">发布日期：{{data.time | dateFormat('YYYY-MM-DD')}}</div>
          </div>

          <el-button-group class="btn_box">
            <el-button
              type="warning"
              icon="el-icon-star-off"
              @click="collection"
              v-if="collectionStatus == 0"
            >收藏</el-button>
            <el-button
              type="warning"
              @click="deleteCollectionByNovId"
              icon="el-icon-star-on"
              v-if="collectionStatus == 1"
            >已收藏</el-button>
            <el-button type="primary" @click="buyNovel" v-if="status == 0">购买（{{data.price}}Vip点）</el-button>
            <el-button type="info" v-if="status == 1">已购买<span v-if="data.editorId == $store.state.uid">（作者为您本人）</span></el-button>
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
          <span class="badge badge-primary badge-pill">{{published_chapter_num}}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center chapter_list_item"
          v-for="item in chapter_data"
          :key="item.id"
          @click="$router.push('/chapter/' + item.id)"
        >第{{item.chapter}}章：{{item.title}}</li>
        <li
          class="list-group-item align-items-center block"
          v-if="this.status == 0"
        >抱歉，未购买仅能免费阅读前三章的内容</li>
      </ul>
    </div>

    <div id="comment"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectionStatus: 0,
      status: 0,
      novelId: this.$route.params.id,
      data: {},
      chapter_data: [],
      published_chapter_num: "",
      comment_data: [
        {
          id: 1,
          uid: 1,
          name: "张三",
          content: "这小说真棒",
          time: "1552480459000"
        }
      ]
    };
  },
  methods: {
    getData() {
      this.axios
        .get("/getNovelInfo?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data;
            this.getStatus();
          } else {
            this.$message("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取小说信息失败，无法连接服务器");
        });
    },
    getChapter() {
      this.axios
        .get("/getNovelChapter?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            this.chapter_data = res.data.data;
            this.published_chapter_num = res.data.data.length;
            this.getData();
          } else {
            this.$message("获取章节失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取章节失败，无法连接服务器");
        });
    },
    getStatus() {
      // TODO: 获取小说的购买状态
      this.axios
        .get("/getStatus?novelId=" + this.novelId)
        .then(res => {
          if (res.data.code == 1) {
            // 验证当前用户是不是作者,要在getData之后执行
            if (this.$store.state.uid == this.data.editorId) {
              this.status = 1;
            } else {
              this.status = res.data.data.status;
            }
            this.blockRead();
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取购买状态失败，无法连接服务器");
        });
    },
    blockRead() {
      if (this.status == 0 && this.chapter_data.length > 3) {
        this.chapter_data = this.chapter_data.slice(0, 3);
      }
    },
    getCollectionStatus() {
      this.axios
        .get("/getCollectionStatus?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            if (res.data.data.status == 1) {
              this.collectionStatus = 1;
            }
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取收藏状态失败，无法连接服务器");
        });
    },
    collection() {
      this.axios
        .get("/collection?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            this.$message("收藏成功");
            this.collectionStatus = 1;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("收藏失败，无法连接服务器");
        });
    },
    deleteCollectionByNovId() {
      this.axios
        .get("/deleteCollectionByNovId?id=" + this.novelId)
        .then(res => {
          if (res.data.code == 1) {
            this.$message("已取消收藏");
            this.collectionStatus = 0;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("取消收藏失败，无法连接服务器");
        });
    },
    buyNovel() {
      this.$confirm(
        "您确定花费" + this.data.price + "VIP点数来购买吗?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          // TODO: 购买小说
          this.axios
            .get("/buyNovel?id=" + this.novelId)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("购买成功");
                // window.location.reload();
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("购买失败，服务器无法连接");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买"
          });
        });
    }
  },
  mounted() {
    // 执行顺序：getChapter、getData、getStatus、blockRead
    this.getChapter();
    this.getCollectionStatus();
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
    min-height: 450px;
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
  .editor_box {
    margin-top: 20px;
    .editor_info {
      font-size: 16px;
      line-height: 1.7;
      color: rgba(0, 0, 0, 0.8);
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
  .block {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    padding: 20px 0;
  }
}
#comment {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 30px;
}
</style>