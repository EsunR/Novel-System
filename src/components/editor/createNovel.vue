<template>
  <div id="createNovel">
    <h4>创建小说</h4>
    <el-form :model="form" :rules="rules" ref="form" :label-position="'top'">
      <el-form-item label="小说名称" prop="novelName">
        <el-input v-model="form.novelName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="上传封面">
        <el-upload
          action="http://upload.qiniup.com"
          :on-success="uploadSuccess"
          :file-list="fileList"
          :limit="1"
          list-type="picture"
          :data="postData"
          accept=".png, .jpg"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="简介" prop="introduction">
        <el-input type="textarea" v-model="form.introduction" rows="5" placeholder="请输入"></el-input>
      </el-form-item>
      <div class="row">
        <div class="col-md-6">
          <el-form-item label="小说分类" prop="sort">
            <el-select v-model="form.sort" placeholder="请选择小说分类">
              <el-option label="玄幻" value="玄幻"></el-option>
              <el-option label="奇幻" value="奇幻"></el-option>
              <el-option label="武侠" value="武侠"></el-option>
              <el-option label="仙侠" value="仙侠"></el-option>
              <el-option label="都市" value="都市"></el-option>
              <el-option label="现实" value="现实"></el-option>
              <el-option label="爱情" value="爱情"></el-option>
              <el-option label="游戏" value="游戏"></el-option>
              <el-option label="科幻" value="科幻"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="col-md-6">
          <el-form-item label="售价 (单位：vip点)" prop="price">
            <el-input v-model="form.price" placeholder="请输入" :disabled="free"></el-input>
            <el-checkbox v-model="free" @change="readForFree()">免费阅读</el-checkbox>
          </el-form-item>
        </div>
        <div class="btn_box">
          <el-button type="primary" @click="publish" icon="el-icon-upload">发布</el-button>
          <el-button type="danger" @click="clear" icon="el-icon-circle-close-outline">清空</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        novelName: "",
        introduction: "",
        sort: "",
        cover: "",
        price: "",
        time: ""
      },
      rules: {
        novelName: [
          {
            required: true,
            message: "请输入小说名称",
            trigger: ["blur", "change"]
          }
        ],
        introduction: [
          { required: true, message: "请输入简介", trigger: ["blur", "change"] }
        ],
        sort: [
          { required: true, message: "请选择分类", trigger: ["blur", "change"] }
        ],
        price: [
          { required: true, message: "请输入售价", trigger: ["blur", "change"] }
        ]
      },
      fileList: [],
      free: false,
      postData: {
        // 测试token
        token:
          "noucWTUuRY84Z0DSDJyJiszjO7OtRY3Vtj4yAWT1:1D6bk4yfCW51XqjgG-igP_Bi6dc=:eyJzY29wZSI6Im5vdmVsLXN5c3RlbSIsImRlYWRsaW5lIjoxNTc1MTI5NjAwfQ=="
      },
      EncodedEntryURI: ""
    };
  },
  methods: {
    publish() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.form.time = Date.parse(new Date()).toString();
          this.axios
            .post("/publishNovel", this.form)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("发布成功");
                this.$router.push("/editor/novelManager");
              } else {
                this.$message("发布失败");
              }
            })
            .catch(err => {
              console.log(err);
              this.$message("无法连接服务器");
            });
        }
      });
    },
    clear() {
      this.$refs.form.resetFields();
      this.free = false;
    },
    readForFree() {
      if (this.free) {
        this.form.price = "0";
      } else {
        this.form.price = "";
      }
    },
    uploadSuccess(res) {
      this.form.cover = "http://study.esunr.xyz/" + res.key;
      this.EncodedEntryURI = res.key;
    }
  }
};
</script>

<style lang='scss' scoped>
h4 {
  background-color: #409eff;
  margin: -20px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}
.btn_box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  button {
    margin: 0 20px;
  }
}
</style>

<style lang="scss">
#createNovel {
  label {
    margin-bottom: 0;
  }
  .el-select {
    width: 100%;
  }
}
</style>
