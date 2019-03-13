<template>
  <div id="app">
    <!-- Topbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">在线小说阅读</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home/newPublish" class="nav-link" href="#">主页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home/ranking" class="nav-link" href="#">排行</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home/recommend" class="nav-link" href="#">推书区</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <el-button
            @click="$router.push('/editor/createNovel')"
            icon="el-icon-edit"
            v-if="$store.state.identity == 'editor'|| $store.state.identity == 'admin'"
          >创 作</el-button>
          <el-button
            icon="el-icon-info"
            v-if="$store.state.identity != 'tourist'"
            @click="$router.push('/user')"
          >用户中心</el-button>
          <el-button type="danger" v-if="$store.state.identity == 'tourist'" @click="login">登 录</el-button>
        </span>
      </div>
    </nav>

    <div class="container" id="main">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
  $(".nav-item").click(function() {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
});
export default {
  data() {
    return {};
  },
  methods: {
    userInfo() {
      this.axios
        .get("/userInfo")
        .then(res => {
          if (res.data.code == 1) {
            let obj = res.data.data;
            this.$store.state.account = obj.account;
            this.$store.state.name = obj.name;
            this.$store.state.identity = obj.identity;
            this.$store.state.vp = obj.vp;
            this.$store.state.ban = obj.ban;
            this.$store.state.uid = obj.uid;
          } else {
            this.$message("登录出错");
          }
        })
        .catch(() => {
          this.$store.state.identity = "tourist";
          this.$message("您正在以游客身份浏览");
        });
    },
    login() {
      localStorage.clear();
      window.location.href = "/login.html";
    }
  },
  mounted() {
    this.userInfo();
  }
};
</script>

<style lang="scss" scoped>
#main {
  margin: 30px auto;
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 1s ease;
  }
}
</style>



<style>
html {
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
body {
  height: 100%;
  background-color: #f4f5f5 !important;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
</style>
