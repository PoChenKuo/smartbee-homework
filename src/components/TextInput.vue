<template>
  <div class="text-input">
    <input type="text" />
    <font-awesome-icon :class="['sent-button', 'button']" :icon="sendIcon" />
  </div>
</template>

<script>
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "TextInput",
  data() {
    return {
      sendIcon: faPaperPlane
    };
  },
  mounted() {}
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