<template>
  <div id="addChapter" v-loading.fullscreen.lock="loading" element-loading-text="拼命上传中">
    <h4>添加章节</h4>
    <div class="published_chapter">
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          style="font-weight: bold"
        >
          已发布章节
          <span class="badge badge-primary badge-pill">{{data.length}}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="item in data"
          :key="item.id"
        >第{{item.chapter}}章 {{item.title}}</li>
      </ul>
    </div>
    <div class="add">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        :label-position="'top'"
      >
        <div class="title">添加章节：第{{form.chapter}}章</div>
        <el-form-item label="章节标题" prop="title">
          <el-input v-model="form.title" placeholder="请填写"></el-input>
        </el-form-item>
        <el-form-item class="upload_group" label="上传文件方式添加章节">
          <i class="el-icon-upload"></i>
          <el-upload
            ref="upload"
            :action="COMMON.host + '/api/novel/upload'"
            :file-list="fileList"
            :on-change="selectFile"
            :on-remove="removeFile"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :limit="1"
            :auto-upload="false"
            :data="uploadAuthorization"
            accept=".txt"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件 | 仅限.txt文件</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <div class="editor_head">
            小说编辑器
            <span v-show="form.upload == '1'">（已禁用，已编辑内容不会被上传）</span>
          </div>
          <div id="editor_addChapter"></div>
        </el-form-item>

        <div class="btn_box">
          <el-button @click="publish" type="primary">确定发布</el-button>
          <el-button @click="save" type="info">存为草稿</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
// 创建编辑器
var editor = new E("#editor_addChapter");
export default {
  data() {
    return {
      loading: false,
      data: [
        {
          id: "111", // 章节id
          chapter: "1",
          title: "霸道李延富爱上我"
        },
        {
          id: "112", // 章节id
          chapter: "2",
          title: "霸道李延富娶了我"
        },
        {
          id: "113", // 章节id
          chapter: "3",
          title: "霸道李延富打了我"
        }
      ],
      form: {
        chapter: "",
        title: "",
        content: "",
        upload: "0",
        novelId: this.$route.params.id
      },
      rules: {
        title: [
          {
            required: true,
            message: "请填写章节标题",
            trigger: ["change", "blur"]
          }
        ]
      },
      fileList: [],
      uploadAuthorization: {
        novelId: this.$route.params.id
      }
    };
  },
  methods: {
    createEditor() {
      editor.customConfig.menus = [];
      editor.customConfig.zIndex = 1;
      editor.create();
    },
    selectFile() {
      this.form.upload = "1";
      editor.$textElem.attr("contenteditable", false);
    },
    removeFile() {
      this.form.upload = "0";
      editor.$textElem.attr("contenteditable", true);
    },
    publish() {
      this.$confirm("发布后的小说将不能更改，您确定发布吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        if (this.form.title == "") {
          this.$message("章节标题不能为空！");
          return;
        }
        // 如果无上传内容
        if (this.form.upload == "0") {
          let check_content = editor.txt
            .html()
            .replace(/<p>/g, "")
            .replace(/<\/p>/g, "")
            .replace(/<br>/g, "");
          if (check_content == "") {
            this.$message("章节内容不能为空！");
            return;
          } else {
            this.form.content = editor.txt.html();
            this.loading = true;
            // TODO: AXIOS 直接上传form /addChapter
            console.log(this.form);
            this.loading = false;
          }
        }
        // 如果有上传内容
        else {
          this.loading = true;
          this.$refs.upload.submit();
          // 成功执行uploadSuccess
          // 失败执行uploadError
        }
      });
    },
    save() {
      if (this.form.upload == "1") {
        this.$message("上传文件方式添加的章节无法存为草稿");
        return;
      } else {
        if (this.form.title == "") {
          this.$message("章节标题不能为空！");
          return;
        }
        // 如果无上传内容
        if (this.form.upload == "0") {
          let check_content = editor.txt
            .html()
            .replace(/<p>/g, "")
            .replace(/<\/p>/g, "")
            .replace(/<br>/g, "");
          if (check_content == "") {
            this.$message("章节内容不能为空！");
            return;
          } else {
            this.form.content = editor.txt.html();
            this.loading = true;
            let obj = {
              title: this.form.title,
              content: this.form.content,
              novelId: this.form.novelId,
              chapter: this.form.chapter
            };
            // TODO: AXIOS 直接上传obj到草稿箱 /addChapter
            console.log(obj);
            this.loading = false;
          }
        }
      }
    },
    uploadSuccess(res) {
      this.form.content = "";
      console.log(res);
      this.loading = false;
      // TODO: 拿到返回值后上传form数据 /addChapter
      // 拿到的数据为章节ID
    },
    uploadError() {
      this.loading = false;
      this.$message("上传失败！");
    }
  },
  mounted() {
    this.form.chapter = this.data.length;
    this.createEditor();
  }
};
</script>

<style lang="scss" scoped>
h4 {
  background-color: #e6a23c;
  margin: -20px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}
.published_chapter {
  color: rgba(0, 0, 0, 0.8);
}
.add {
  margin-top: 20px;
  .title {
    background-color: #409eff;
    width: 150px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    color: #ffffff;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
#addChapter {
  label {
    margin-bottom: 0;
  }
  .upload_group {
    .el-form-item__label {
      padding-left: 18px;
    }
    .el-icon-upload {
      position: absolute;
      top: -37px;
    }
  }
}
.editor_head {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0 0;
  line-height: 3rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.3);
}
</style>


