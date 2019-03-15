<template>
  <div id="customerService">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="您遇到的问题" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn_box">
          <el-button type="primary" @click="submitForm('form')">反馈问题</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        content: "",
        email: ""
      },
      rules: {
        content: [
          {
            required: true,
            message: "请输入您遇到的问题",
            trigger: ["blur", "change"]
          }
        ],
        email: [
          {
            required: true,
            message: "请输入正确的邮箱格式",
            type: "email",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj = {
            content: this.form.content,
            email: this.form.email
          };
          console.log(obj);
          // TODO: 发送反馈信息
          this.axios
            .post("/customerService", obj)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("我们已收到您的消息");
                this.content = "";
                this.email = "";
              }
            })
            .catch(err => {
              console.log(err);
              this.message("服务器无法连接");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='scss'>
#customerService {
  .btn_box {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>