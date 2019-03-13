<template>
  <div id="editDraft">
    <h4>修改草稿</h4>
    <el-form
      :model="form"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
      :label-position="'top'"
    >
      <div class="title">修改章节：第{{form.chapter}}章</div>
      <div class="title waring" v-if="published == 1">您已经发布过该章节，不能发布该草稿</div>
      <el-form-item label="章节标题" prop="title">
        <el-input v-model="form.title" placeholder="请填写"></el-input>
      </el-form-item>

      <el-form-item>
        <div class="editor_head">小说编辑器</div>
        <div id="editor_editDraft"></div>
      </el-form-item>

      <div class="btn_box">
        <el-button @click="publish" type="primary" v-if="published == 0">发布</el-button>
        <el-button @click="save" type="info" v-if="published == 0">保存</el-button>
        <el-button @click="deleteDraft" type="danger">删除</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
var editor = new E("#editor_editDraft");
export default {
  data() {
    return {
      publishedChapter: [],
      published: 0,
      form: {
        title: "",
        content: "",
        novelId: "",
        chapter: ""
      },
      rules: {
        title: [
          {
            required: true,
            message: "请填写章节标题",
            trigger: ["change", "blur"]
          }
        ]
      }
    };
  },
  methods: {
    formDataInit() {
      editor.customConfig.menus = [];
      editor.customConfig.zIndex = 1;
      editor.create();
      editor.txt.html(this.form.content);
    },
    check() {
      let check_content = editor.txt
        .html()
        .replace(/<p>/g, "")
        .replace(/<\/p>/g, "")
        .replace(/<br>/g, "");
      if (this.form.title == "") {
        this.$message("章节标题不能为空");
        return false;
      } else if (check_content == "") {
        this.$message("章节内容不能为空");
        return false;
      } else {
        this.form.content = editor.txt.html();
        return true;
      }
    },
    publish() {
      if (this.check()) {
        let obj = {
          chapter: this.form.chapter,
          title: this.form.title,
          content: this.form.content,
          upload: 0,
          novelId: this.form.novelId
        };
        this.$confirm("发布草稿后原草稿将被删除且不能更改", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          console.log(obj);
          this.axios
            .post("/addChapter", obj)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("发布成功，正在删除该草稿");
                setTimeout(() => {
                  this.deleteDraftSure();
                }, 1000);
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("发布失败，无法连接服务器");
            });
        });
      }
    },
    save() {
      if (this.check()) {
        let obj = {
          title: this.form.title,
          content: this.form.content,
          id: this.form.id
        };
        console.log(obj);
        this.axios
          .post("saveChapterToDraft", obj)
          .then(res => {
            if (res.data.code == 1) {
              this.$message("保存草稿成功");
            }
          })
          .catch(err => {
            console.log(err);
            this.$message("保存失败，无法连接服务器");
          });
      }
    },
    deleteDraft() {
      this.$confirm("您确定要删除草稿？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.deleteDraftSure();
      });
    },
    deleteDraftSure() {
      this.axios
        .get("/deleteDraft?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            this.$message("删除成功");
            this.$router.push("/editor/draft");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("服务器无法连接，删除失败");
        });
    },
    getDraft(callbakc) {
      this.axios
        .get("/getDraft?id=" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 1) {
            this.form = res.data.data;
            this.form.id = this.$route.params.id;
            this.formDataInit();
            callbakc();
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("无法连接服务器");
        });
    },
    getPublished() {
      this.axios
        .get("/getNovelChapter?id=" + this.form.novelId)
        .then(res => {
          if (res.data.code == 1) {
            this.publishedChapter = res.data.data;
            if (this.publishedChapter.length >= this.form.chapter) {
              this.published = 1;
            }
          } else {
            this.$message("获取章节失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取章节失败");
        });
    }
  },
  mounted() {
    this.getDraft(() => {
      this.getPublished();
    });
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
.title {
  width: 150px;
  height: 34px;
  color: white;
  text-align: center;
  line-height: 34px;
  background-color: #409eff;
  border-radius: 5px;
}
.waring {
  background: #f56c6c;
  width: 300px;
  margin-top: 20px;
}
</style>

<style lang="scss">
#editDraft {
  label {
    margin-bottom: -10px;
  }
}
</style>
