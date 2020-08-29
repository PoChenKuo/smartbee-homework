<template>
  <div class="chat-room">
    <h3 class="title">
      Welcome chatroom
      <input
        type="text"
        class="name"
        v-model="name"
        placeholder="type nickname here"
      />!
    </h3>

    <chat-board />
    <control-panel />
  </div>
</template>

<script>
// import {db} from '../db.js'
import uuid from "../uuid.js";
import ChatBoard from "./ChatBoard";
import ControlPanel from "./ControlPanel";
export default {
  name: "ChatRoom",
  components: { ChatBoard, ControlPanel },
  data() {
    return {
      token: uuid(),
      name: ""
    };
  },
  mounted() {
    // console.log(this.token);
  }
};
</script>

<style lang="scss" scoped>
.chat-room {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 800px;
  max-height: 100%;
  background: rgba(200, 200, 200, 0.7);
  border-radius: 10px;
  padding: 15px 10px;
  box-sizing: border-box;

  .title {
    line-height: 1.2em;
    margin: 10px 5px;
    font-style: italic;
    input {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      outline: none;
      text-align: center;
      font-size: 0.8em;
      width: 160px;
      margin-left: 15px;
      &::placeholder {
        font-size: 0.6em;
      }
    }
  }
}
</style>