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
    <control-panel @send="sendMessage" />
  </div>
</template>

<script>
import { db } from "../db.js";
import uuid from "../uuid.js";
import ChatBoard from "./ChatBoard";
import ControlPanel from "./ControlPanel";
const messageLEntry = db
  .ref("message")
  .orderByChild("ts")
  .startAt(Date.now(), "ts");
export default {
  name: "ChatRoom",
  components: { ChatBoard, ControlPanel },
  data() {
    return {
      token: uuid(),
      name: "",
      guests: [],
      colors: [],
      message: [],
      boardMessage: [],
      ts: Date.now()
    };
  },

  mounted() {
    messageLEntry.on("value", function(snapshot) {
      console.log(snapshot.val());
    });
  },
  beforeDestroy() {
    messageLEntry.off("value");
  },
  watch: {
    boardMessage() {
      const data = this.message.reverse().filter(e => e.type);
      return data;
    }
  },
  methods: {
    sendMessage(entry) {
      const data = Object.assign({}, entry, {
        uuid: this.token,
        name: this.name || "John Don(unknown)",
        ts: Date.now()
      });
      console.log(data, ` is ready for firebase`);
      if (data.type !== "photo") {
        console.log(db);
        db.ref("message").push(data);
      }
    }
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