<template>
  <div id="userList">
    <h4>用户列表</h4>
    <el-button-group>
      <el-button type="primary" @click="getUsual">一般用户</el-button>
      <el-button type="info" @click="getBaned">禁言用户</el-button>
    </el-button-group>
    <div class="row">
      <div class="col-md-4" v-for="item in userList" :key="item.id">
        <div class="user_card">
          <div class="name">
            {{item.name}}
            <span>{{item.identity | identity}}</span>
          </div>
          <div class="info_box">
            <div class="info">账号：{{item.account}}</div>
            <div class="info">VIP点：{{item.vp}}</div>
            <div class="info">喜好：{{item.like | arr}}</div>
          </div>
          <hr>
          <div class="btn_box">
            <el-button
              type="danger"
              v-if="item.ban == 0"
              size="small"
              @click="deleteUser(item.id)"
            >删除用户</el-button>
            <el-button type="info" v-if="item.ban == 0" size="small" @click="ban(item.id)">禁 言</el-button>
            <el-button type="success" v-if="item.ban == 1" size="small" @click="unBan(item.id)">取消禁言</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-button
      class="load_more"
      @click="loadMore"
      type="primary"
      v-if="userList.length < total"
    >加载更多</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          id: 1,
          identity: "editor",
          name: "EsunR",
          account: "16031210105",
          vp: "1000",
          ban: 0,
          like: ["武侠", "爱情", "都市"]
        },
        {
          id: 2,
          identity: "editor",
          name: "EsunR",
          account: "16031210105",
          vp: "1000",
          ban: 0,
          like: ["武侠", "爱情", "都市"]
        },
        {
          id: 3,
          identity: "editor",
          name: "EsunR",
          account: "16031210105",
          vp: "1000",
          ban: 0,
          like: ["武侠", "爱情", "都市"]
        }
      ],
      total: 10,
      page: 1,
      mode: 0
    };
  },
  methods: {
    getUserList(mode) {
      // TODO: 获取两种模式的用户列表
      this.axios
        .get("/getUserList?ban=" + mode + "&page=" + this.page)
        .then(res => {
          if (res.data.code == 1) {
            if (this.page == 1) {
              this.userList = res.data.data.userList;
            } else {
              let arr = this.userList;
              let arr2 = res.data.data.userList;
              this.userList = [...arr, ...arr2];
            }
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("获取用户列表失败，服务器无法连接");
        });
    },
    getUsual() {
      this.page = 1;
      this.mode = 0;
      this.getUserList(this.mode);
    },
    getBaned() {
      this.page = 1;
      this.mode = 1;
      this.getUserList(this.mode);
    },
    loadMore() {
      this.page++;
      this.getUserList(this.mode);
    },
    managerUser(id, action) {
      // TODO: 操作用户
      this.axios
        .get("/userBan?id=" + id + "&action=" + action)
        .then(res => {
          if (res.data.code == 1) {
            this.$message("操作成功");
            for (let i in this.userList) {
              if (this.userList[i].id == id) {
                this.userList.splice(i, 1);
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
          this.$message("操作失败，服务器无法连接");
        });
    },
    ban(id) {
      this.managerUser(id, "ban");
    },
    unBan(id) {
      this.managerUser(id, "unBan");
    },
    deleteUser(id) {
      this.managerUser(id, "delete");
    }
  },
  mounted() {
    this.getUserList("0");
  }
};
</script>

<style lang='scss' scoped>
.el-button-group {
  margin: 20px 0;
}
.user_card {
  color: rgba($color: #000000, $alpha: 0.8);
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    span {
      font-size: 14px;
      font-weight: 500;
      background-color: #007bff;
      padding: 2px 10px;
      color: white;
      border-radius: 5px;
      position: relative;
      top: -3px;
    }
  }
  .btn_box {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
.load_more {
  margin: 0 auto;
  display: flex;
}
</style>