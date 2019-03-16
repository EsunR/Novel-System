<template>
  <div id="feedback">
    <h4>反馈列表</h4>
    <div class="feedback_card" v-for="item in data" :key="item.id">
      <div class="content">{{item.content}}</div>
      <hr>
      <div class="btn_box">
        <a class="btn btn-light" role="button" :href="'mailto:' + item.email">邮件回复该用户</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          content: "举报内容",
          email: "641411169@qq.com"
        },
        {
          id: 2,
          content: "举报内容",
          email: "641411169@qq.com"
        }
      ]
    };
  },
  methods: {
    getData() {
      this.axios
        .get("/getFeedback")
        .then(res => {
          if (res.data.code == 1) {
            this.data = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("服务器无法连接");
        });
    }
  },
  mounted(){
    this.getData();
  }
};
</script>

<style lang='scss' scoped>
h4 {
  margin-bottom: 30px;
}
.feedback_card {
  background-color: #007bff;
  color: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  .content {
    font-size: 1.2rem;
    font-weight: bold;
  }
  hr {
    border-color: white;
    opacity: 0.7;
    margin: 15px 0;
  }
  .btn_box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>