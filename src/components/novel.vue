<template>
  <div id="novel" v-loading.fullscreen.lock="loading" element-loading-text="正在加载小说信息">
    <div id="novel_info">
      <div class="row">
        <div class="col-md-4 cover">
          <div class="noCover" v-if="data.cover == ''">无封面</div>
          <img v-if="data.cover != ''" :src="data.cover">
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
            <div v-if="$store.state.identity == 'tourist'">
              <el-button type="info" @click="login">登录后可购买</el-button>
            </div>
            <div v-if="$store.state.identity != 'tourist'">
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
              <el-button type="success" v-if="status == 1">
                已购买
                <span v-if="data.editorId == $store.state.uid">（作者为您本人）</span>
              </el-button>
            </div>
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
          @click="$router.push('/novel/' + novelId + '/' + item.chapter)"
        >
          第{{item.chapter}}章：{{item.title}}
          <el-button
            icon="el-icon-download"
            type="primary"
            circle
            @click.stop="download(item.id)"
            size="small"
          ></el-button>
        </li>
        <li
          class="list-group-item align-items-center block"
          v-if="this.status == 0"
        >抱歉，未购买仅能免费阅读前三章的内容</li>
      </ul>
    </div>

    <div id="comment">
      <div class="tourist" v-if="$store.state.identity == 'tourist'">请您
        <el-button type="danger" @click="login">登录</el-button>后评论
      </div>
      <div class="ban" v-if="ban == 1 && $store.state.identity != 'tourist'">
        <i class="el-icon-error"></i> 您被禁言中
      </div>
      <div class="user_comment" v-if="$store.state.identity != 'tourist' && this.ban != 1">
        <el-input type="textarea" v-model="user_comment" class="user_comment" rows="4"></el-input>
        <el-button type="primary" @click="publishComment">发布评论</el-button>
      </div>
      <div class="comment_list">
        <div class="no_commit" v-if="comment_data.length == 0">== 暂无评论 ==</div>
        <div class="comment_card" v-for="(item,i) in comment_data" :key="i">
          <div class="content">{{item.name}}：{{item.content}}</div>
          <hr>
          <div class="time">{{item.time | dateFormat('YYYY-MM-DD HH:mm')}}</div>
        </div>
        <el-button
          type="primary"
          @click="loadMore"
          class="load_more"
          v-if="comment_data.length < comment_total"
          icon="el-icon-arrow-down"
          plain
        >加载更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      collectionStatus: 0,
      status: 0,
      novelId: this.$route.params.id,
      data: {},
      chapter_data: [],
      published_chapter_num: "",
      comment_data: [],
      user_comment: "",
      comment_page: 1,
      comment_total: 0,
      ban: 1
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
      if (this.$store.state.identity == "tourist") {
        this.blockRead();
        return;
      } else {
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
      }
    },
    blockRead() {
      if (this.status == 0 && this.chapter_data.length > 3) {
        this.chapter_data = this.chapter_data.slice(0, 3);
      }
      this.loading = false;
    },
    getCollectionStatus() {
      if (this.$store.state.identity == "tourist") {
        return;
      } else {
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
      }
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
          this.axios
            .get("/buyNovel?id=" + this.novelId)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("购买成功");
                this.getChapter();
              } else {
                this.$router.push("/user/recharge");
                this.$message("您的VIP点数不足，请充值");
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
    },
    publishComment() {
      let str = this.user_comment.replace(/^\s+|\s+$/g, "");
      if (str == "") {
        this.$message("输入内容不能为空");
        return;
      }
      let time = Date.parse(new Date());
      let newArr = {
        id: 0,
        uid: this.$store.state.uid,
        name: this.$store.state.name,
        content: str,
        time: time
      };
      this.comment_data.unshift(newArr);
      let obj = {
        novelId: this.novelId,
        content: str,
        time: time
      };
      this.axios
        .post("/publishComment", obj)
        .then(res => {
          if (res.data.code == 1) {
            this.$message("发布评论成功");
            this.getData();
            this.user_comment = "";
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("评论失败，服务器无法连接");
        });
    },
    getComment() {
      this.axios
        .get("/getComment?id=" + this.novelId + "&page=" + this.comment_page)
        .then(res => {
          if (res.data.code == 1) {
            this.comment_data = this.comment_data.concat(
              res.data.data.comment_data
            );
            this.comment_total = res.data.data.total;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("评论获取失败，服务器无法连接");
        });
    },
    loadMore() {
      this.comment_page++;
      this.getComment();
    },
    login() {
      window.location.href = this.COMMON.login_location;
    },
    banTest() {
      if (this.$store.state.identity == "tourist") {
        return;
      } else {
        this.axios
          .get("/userInfo")
          .then(res => {
            if (res.data.code == 1) {
              if (res.data.data.ban != 1) {
                this.ban = 0;
              }
            }
          })
          .catch(err => {
            console.log(err);
            this.$message("身份验证失败，服务器无法连接");
          });
      }
    },
    download(id) {
      window.location.href = this.COMMON.host + "/download?id=" + id;
    }
  },
  mounted() {
    // 执行顺序：getChapter、getData、getStatus、blockRead
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.getChapter();
    this.getCollectionStatus();
    this.getComment();
    this.banTest();
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
    .noCover {
      width: 100%;
      height: 450px;
      border-radius: 20px;
      margin-bottom: 10px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
      font-size: 2rem;
      line-height: 450px;
      color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
    }
  }
  .info {
    @media screen and (max-width: 768px) {
      .btn_box {
        display: block;
        position: initial !important;
        margin-top: 20px;
      }
    }
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
  .tourist {
    text-align: center;
    position: relative;
    top: 30px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    button {
      margin: 0 10px;
    }
  }
  .ban {
    color: white;
    background-color: #f56c6c;
    margin: -20px;
    border-radius: 10px 10px 0 0;
    line-height: 50px;
    text-align: center;
    margin-bottom: -60px;
  }
  .user_comment {
    button {
      margin-top: 20px;
      float: right;
    }
  }
  .comment_list {
    margin-top: 80px;
    .no_commit {
      text-align: center;
      font-size: 1.8rem;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.5);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding-top: 1rem;
    }
    .comment_card {
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      color: rgba(0, 0, 0, 0.8);
      margin-bottom: 20px;
      .time {
        text-align: right;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .load_more {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>