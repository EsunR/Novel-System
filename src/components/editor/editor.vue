<template>
  <div id="editor">
    <div class="select">
      <h4>创作中心</h4>
      <hr>
      <div class="btn_box">
        <el-button
          type="primary"
          icon="el-icon-edit"
          circle
          @click="$router.push('/editor/createNovel')"
        ></el-button>
        <el-button type="warning" icon="el-icon-document" circle @click="$router.push('/editor/novelManager')"></el-button>
        <el-button type="info" icon="el-icon-edit-outline" circle @click="$router.push('/editor/draft')"></el-button>
        <el-button type="success" icon="mdi mdi-cash-usd" circle @click="$router.push('/editor/income')"></el-button>
      </div>
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
  }
};
</script>

<style lang='scss' scoped>
.select {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  hr {
    margin: 20px 0;
  }
  .btn_box {
    display: flex;
    justify-content: flex-end;
    button {
      outline: none;
    }
  }
}

.main {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 30px auto;
  overflow: hidden;
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
