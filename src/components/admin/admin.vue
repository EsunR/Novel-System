<template>
  <div id="admin">
    <div class="head">
      <el-menu :default-active="'userList'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="userList">用户列表</el-menu-item>
        <el-menu-item index="novelList">小说管理</el-menu-item>
        <el-menu-item index="reportList">留言管理</el-menu-item>
        <el-menu-item index="feedback">用户反馈</el-menu-item>
      </el-menu>
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
    return {};
  },
  methods: {
    handleSelect(index) {
      this.$router.push("/admin/" + index);
    }
  }
};
</script>

<style lang='scss' scoped>
.head {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.main {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 30px auto;
}
</style>