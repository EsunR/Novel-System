<template>
  <div id="register">
    <div class="title">用户注册 | REGISTER</div>
    <hr>
    <el-form
      :model="registerForm"
      :rules="rules"
      label-width="80px"
      :label-position="'left'"
      ref="registerForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="registerForm.account"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="password2" required>
        <el-input type="password" v-model="registerForm.password2"></el-input>
      </el-form-item>
      <el-form-item label="选择喜好" prop="like" required>
        <el-select
          style="width:100%"
          v-model="registerForm.like"
          :multiple-limit="3"
          multiple
          placeholder="请选择三个喜好"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="签约" prop="editor">
        <el-radio v-model="registerForm.editor" label="0">普通用户</el-radio>
        <el-radio v-model="registerForm.editor" label="1">签约为作者</el-radio>
      </el-form-item>
      <el-form-item class="btn_box">
        <el-button type="primary" @click="registerClick">注 册</el-button>
        <el-button type="info" @click="$router.push('/login')">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePassword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateLike = (rule, value, callback) => {
      if (this.registerForm.like.length != 3) {
        callback(new Error("请选择三个喜好"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        account: "",
        name: "",
        password: "",
        password2: "",
        editor: "0",
        like: []
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password2: [
          { validator: validatePassword2, trigger: ["blur", "change"] }
        ],
        editor: [{ required: true, message: "请选择", trigger: "blur" }],
        like: [
          {
            required: true,
            message: "请选择",
            trigger: ["blur", "change"]
          },
          {
            validator: validateLike,
            trigger: ["blur", "change"]
          }
        ]
      },
      options: [
        {
          value: "玄幻",
          label: "玄幻"
        },
        {
          value: "奇幻",
          label: "奇幻"
        },
        {
          value: "武侠",
          label: "武侠"
        },
        {
          value: "仙侠",
          label: "仙侠"
        },
        {
          value: "都市",
          label: "都市"
        },
        {
          value: "现实",
          label: "现实"
        },
        {
          value: "军事",
          label: "军事"
        },
        {
          value: "历史",
          label: "历史"
        },
        {
          value: "游戏",
          label: "游戏"
        },
        {
          value: "科幻",
          label: "科幻"
        }
      ]
    };
  },
  methods: {
    registerClick() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          let obj = {
            account: this.registerForm.account,
            password: this.registerForm.password,
            name: this.registerForm.name,
            editor: this.registerForm.editor,
            like: this.registerForm.like
          };
          console.log(obj);
          this.axios
            .post("/register", obj)
            .then(res => {
              if (res.data.code == 1) {
                this.$message("注册成功，请登录");
                this.$router.push("/login");
              } else {
                this.$message("该用户名已被占用，注册失败");
              }
            })
            .catch(() => {
              this.$message("无法连接服务器");
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
#register {
  .title {
    font-size: 1.5rem;
  }
  .btn_box {
    float: right;
  }
}
</style>