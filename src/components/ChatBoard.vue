<template>
  <div class="chat-board"></div>
</template>

<script>
export default {
  name: "ChatBoard",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.chat-board {
  width: 100%;
  height: calc(100% - 150px);
  background: #fff;
  border-radius: 15px 15px 0 0;
  margin-top: 30px;
  padding-bottom: 30px;
}
</style>