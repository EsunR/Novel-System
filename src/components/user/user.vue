<template>
  <div id="user">
    <div class="head">
      <h4>用户中心</h4>
      <hr>
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a
          class="flex-sm-fill text-sm-center nav-link active"
          @click="$router.push('/user/collection')"
        >收藏</a>
        <a class="flex-sm-fill text-sm-center nav-link" @click="$router.push('/user/info')">个人信息</a>
        <a class="flex-sm-fill text-sm-center nav-link" @click="logout">注销</a>
      </nav>
    </div>

    <div class="main">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    changeNav() {
      $(".nav-link").click(function() {
        $(".nav-link").each(function() {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
      });
    },
    logout() {
      localStorage.clear();
      window.location.href = "/login.html";
    }
  },
  mounted() {
    this.changeNav();
  }
};
</script>

<style lang='scss' scoped>
.head {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  h4 {
    margin-bottom: 1rem;
  }
  .nav-link {
    color: #007bff;
    cursor: pointer;
  }
}
.main {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 30px auto;
}
</style>