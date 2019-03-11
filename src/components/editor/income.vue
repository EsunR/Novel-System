<template>
  <div id="income">
    <h4>稿酬收入</h4>
    <div class="main">
      <div class="info">
        <div class="key">VIP点数</div>
        <div class="value">{{vp}}</div>
      </div>
      <div class="info">
        <div class="key">折合人民币</div>
        <div class="value">{{vp/100}}元</div>
      </div>
      <div class="info">
        <div class="key">总收入</div>
        <div class="value">{{3000 + vp/100}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vp: this.$store.state.vp
    };
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
h4 {
  background-color: #67c23a;
  margin: -20px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}
.main{
  .info{
    display: flex;
    line-height: 2rem;
    margin-bottom: 1rem;
    .key{
      background-color: #67C23A;
      width: 95px;
      text-align: center;
      color: white;
      border-radius: 5px;
    }
    .value{
      padding-left: 1rem;
    }
  }
}
</style>