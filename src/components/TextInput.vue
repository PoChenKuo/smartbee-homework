<template>
  <div class="text-input">
    <input type="text" v-model="msg" />
    <font-awesome-icon :class="['sent-button', 'button']" :icon="sendIcon" @click="send" />
  </div>
</template>

<script>
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "TextInput",
  data() {
    return {
      sendIcon: faPaperPlane,
      msg: ""
    };
  },
  mounted() {},
  methods: {
    send() {
      if (this.msg.length) {
        this.$emit("send", this.msg);
        this.msg = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text-input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  input {
    width: calc(100% - 35px);
    border-radius: 40px;
    border: 1px solid #aaa;
    margin-right: 15px;
    line-height: 27px;
    outline: none;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  .sent-button {
    cursor: pointer;
  }
}
</style>