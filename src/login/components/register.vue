<template>
  <div id="register">
    <div class="title">用户注册 | REGISTER</div>
    <hr>
    <el-form :model="loginForm" :rules="rules" label-width="80px" :label-position="'left'">
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="password2">
        <el-input v-model="loginForm.password2"></el-input>
      </el-form-item>
      <el-form-item class="btn_box">
        <el-button type="primary">登 录</el-button>
        <el-button type="info" @click="$router.push('/login')">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
        password2: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password2: [{ required: true, message: "请输入密码", trigger: ["blur", "change"] }]
      }
    };
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