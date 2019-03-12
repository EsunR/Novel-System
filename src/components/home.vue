<template>
  <div id="home">
    <div class="search_bar_box">
      <div class="search_bar">
        <el-input placeholder="请输入内容" v-model="key" class="input-with-select">
          <el-select style="width: 80px" v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="书名" value="book_name"></el-option>
            <el-option label="作者" value="editor_name"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
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
    return {
      select: "book_name",
      key: ""
    };
  },
  methods: {
    search() {
      console.log(1);
      if (this.key != "") {
        console.log(2);
        this.$router.push(
          "/home/search?select=" + this.select + "&key=" + this.key
        );
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.search_bar_box {
  background: url("../assets/index_banner.gif");
  padding: 5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  @media screen and (max-width: 768px) {
    & {
      padding: 5rem 1rem;
    }
  }
}
.main {
  overflow: hidden;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>

<style lang="scss">
.novel_list {
  .card {
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 20px;
    .cover {
      height: 15rem;
      line-height: 15rem;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.3);
    }
    .card-text {
      font-size: 14px;
      line-height: 1.5;
    }
    img {
      height: 15rem;
    }
  }
}
</style>
