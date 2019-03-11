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
      <el-form-item label="章节标题" prop="title">
        <el-input v-model="form.title" placeholder="请填写"></el-input>
      </el-form-item>

      <el-form-item>
        <div class="editor_head">小说编辑器</div>
        <div id="editor_editDraft"></div>
      </el-form-item>

      <div class="btn_box">
        <el-button @click="publish" type="primary">确定发布</el-button>
        <el-button @click="save" type="info">保存草稿</el-button>
        <el-button @click="deleteDraft" type="danger">删除草稿</el-button>
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
      data: {
        title: "暴躁李延富在线打人",
        content: "<p>从前有个叫李延富的老哥</p><p>脾气暴躁天天打人</p>",
        chapter: "2",
        novelId: "1"
      },
      form: {
        title: "",
        content: "",
        novelId: "",
        chapter: "",
        id: this.$route.params.id
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
      this.form.title = this.data.title;
      this.form.content = this.data.content;
      this.form.novelId = this.data.novelId;
      this.form.chapter = this.data.chapter;
      editor.customConfig.menus = [];
      editor.customConfig.zIndex = 1;
      editor.create();
      editor.txt.html(this.data.content);
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
          title: this.form.title,
          content: this.form.content,
          contentUrl: "",
          upload: 0,
          novelId: this.form.novelId
        };
        this.$confirm("发布草稿后原草稿将被删除且不能更改", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          // TODO: AXIOS 发布草稿 回调后再调用一个删除草稿的API
          console.log(obj);
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
        // TODO: AXIOS 发送obj /saveChapterToDraft
        console.log(obj);
      }
    },
    deleteDraft(){
      this.$confirm("您确定要删除草稿？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(()=>{
          // TODO: axios 删除草稿
          let id = this.form.id
        })
    }
  },
  mounted() {
    // TODO: AXIOS 获取草稿详情挂载到 data上，之后将form内容初始化
    this.formDataInit();
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
</style>

<style lang="scss">
#editDraft {
  label {
    margin-bottom: -10px;
  }
}
</style>
