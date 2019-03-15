<template>
  <div id="chapter" v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中">
    <div id="novelInfo">
      <div class="novelName">{{novelData.novelName}}</div>
      <el-button @click="$router.push('/novel/' + novelId)" icon="el-icon-tickets">目录</el-button>
    </div>

    <div v-if="buy == 0" class="noBuy">
      <span>您尚未购买该章节</span>
      <el-button @click="$router.push('/novel/' + novelId)">购买</el-button>
    </div>
    <div id="chapterInfo" v-if="buy == 1">
      <div class="chapter">第{{chapterData.chapter}}章</div>
      <div class="title">{{chapterData.title}}</div>
      <hr>
      <div class="content" v-html="chapterData.content"></div>
      <hr>
      <el-button-group class="btn_box">
        <el-button type="primary" icon="el-icon-arrow-left" @click="Previous">上一章</el-button>
        <el-button type="primary" @click="next">
          下一章
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      novelId: this.$route.params.novelId,
      chapter: this.$route.params.chapter,
      chapterData: {},
      novelData: {},
      buy: 0
    };
  },
  methods: {
    checkBuy() {
      if (this.chapter <= 3) {
        this.buy = 1;
        this.getChapterData();
        return;
      } else if (this.$store.state.uid == this.novelData.editorId) {
        this.buy = 1;
        this.getChapterData();
        return;
      } else {
        this.axios
          .get("/getStatus?novelId=" + this.novelId)
          .then(res => {
            if (res.data.data.status == 1) {
              this.buy = 1;
              this.getChapterData();
            } else {
              this.buy = 0;
            }
          })
          .catch(err => {
            console.log(err);
            this.$message("无法检查购买状态，请您检查是否登录");
          });
      }
    },
    getNovelInfo() {
      this.axios
        .get("/getNovelInfo?id=" + this.novelId)
        .then(res => {
          if (res.data.code == 1) {
            this.novelData = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("无法获取小说信息，服务器无法连接");
        });
    },
    getChapterData() {
      this.loading = true;
      this.axios
        .get(
          "/getChapterInfo?novelId=" + this.novelId + "&chapter=" + this.chapter
        )
        .then(res => {
          if (res.data.code == 1) {
            setTimeout(() => {
              this.chapterData = res.data.data;
              let str = res.data.data.content;
              this.chapterData.content = str.replace(/\s+/g, "");
              this.loading = false;
              document.body.scrollTop = document.documentElement.scrollTop = 0;
            }, 200);
          } else {
            this.$message("您尚未登录，不能查看后几章的内容！");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("无法获取章节信息，服务器无法连接");
          this.loading = false;
        });
    },
    Previous() {
      if (this.chapter == 1) {
        this.$message("这已经是第一章了");
      } else {
        this.chapter--;
        this.checkBuy();
      }
    },
    next() {
      this.axios
        .get("/getNovelChapter?id=" + this.novelId)
        .then(res => {
          if (res.data.code == 1) {
            let count = res.data.data.length;
            if (this.chapter == count) {
              this.$message("这已经是最后一章了");
              return;
            } else {
              this.chapter++;
              this.checkBuy();
            }
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("无法获取章节信息，服务器无法连接");
        });
    }
  },
  mounted() {
    this.getNovelInfo();
    this.checkBuy();
  }
};
</script>

<style lang='scss' scoped>
#novelInfo {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    .novelName {
      width: 100% !important;
      font-size: 1.5rem !important;
      margin-bottom: 1rem;
    }
  }
  .novelName {
    font-size: 1.8rem;
    width: 60%;
  }
}
.noBuy {
  background-color: #f56c6c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#chapterInfo {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 30px auto;
  .chapter {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  hr {
    margin: 30px 0;
  }
  .btn_box {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>

<style lang="scss">
#chapter {
  .content {
    p {
      text-indent: 2em;
      text-align: justify;
    }
  }
}
</style>
