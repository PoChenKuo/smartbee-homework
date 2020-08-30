<template>
  <div class="chat-board">
    <div class="context">
      <chat-message
        v-for="item in message"
        :key="item.ts"
        :class="{self:item.self}"
        :self="item.self"
        :name="item.name"
        :type="item.type"
        :data="item.data"
        :color="item.color"
      />
    </div>
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";
export default {
  name: "ChatBoard",
  props: ["message"],
  components: { ChatMessage },
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
  background: radial-gradient(white, #f5f9c8);

  border-radius: 15px 15px 0 0;
  margin-top: 30px;
  padding-bottom: 30px;
  .context {
    height: auto;
    overflow: auto;
    max-height: 100%;
    padding-bottom: 20px;
    box-sizing: border-box;
  }
}
</style>