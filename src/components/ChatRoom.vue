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

    <chat-board :message="boardMessage"/>
    <control-panel @send="sendMessage" @sendImage="sendImage" />
    <div class="loading" v-if="loading"></div>
  </div>
</template>

<script>
import { db, storage } from "../firebase.js";
import getRandomColor from "../getRandomColor.js";
import uuid from "../uuid.js";
import ChatBoard from "./ChatBoard";
import ControlPanel from "./ControlPanel";
const messageRef = db
  .ref("smartbee-message")
  .orderByChild("ts")
  .startAt(Date.now(), "ts");
const storageRef = storage.ref();
let _this = null;
export default {
  name: "ChatRoom",
  components: { ChatBoard, ControlPanel },
  data() {
    return {
      loading: false,
      token: uuid(),
      name: "",
      guests: [],
      colors: [],
      boardMessage: [],
      ts: Date.now(),
      last_ts: Date.now()
    };
  },

  mounted() {
    _this = this;
    console.log(storageRef);

    messageRef.on("value", function(snapshot) {
      const list = snapshot.val() && Object.values(snapshot.val()) || [];
      const newList = list.filter(e => e.ts > _this.last_ts);
      newList.forEach(e => {
        if (_this.guests.indexOf(e.name) === -1) {
          _this.guests.push(e.name);
          let color = "#000000";
          do {
            color = getRandomColor();
          } while (_this.colors.indexOf(color) !== -1);
          _this.colors.push(color);
        }
      });
      _this.boardMessage = list.map(e => {
        let obj = Object.assign({}, e);
        obj.color = _this.colors[_this.guests.indexOf(e.name)];
        obj.self = e.uuid === _this.token;
        return obj;
      });
      _this.last_ts = list.length && list[list.length - 1].ts;
    });
  },
  beforeDestroy() {
    messageRef.off("value");
  },
  watch: {},
  computed: {
    subToken() {
      return this.token.substring(0, 6);
    }
  },
  methods: {
    sendMessage(entry) {
      const data = Object.assign({}, entry, {
        uuid: this.token,
        name: this.name
          ? `${this.name} (#${this.subToken})`
          : `John Don (#${this.subToken})`,
        ts: Date.now()
      });
      db.ref("smartbee-message").push(data);
    },
    getImageExt(filename) {
      let ext = filename.match(/(jpg|jpeg|png)$/);
      if (ext !== null) {
        ext = ext[0];
      }
      return ext;
    },
    generateUploadNameForImage(name) {
      const ext = this.getImageExt(name);
      return `smartbee-image/${this.token}-${Date.now()}.${ext}`;
    },
    uploadImageErrorHandel(error) {
      alert("upload error", error.code);
    },
    uploadImageSuccessHandel(ref, type) {
      ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        _this.sendMessage({
          type: type,
          data: downloadURL
        });
      });
    },
    sendImage(entry) {
      const name = this.generateUploadNameForImage(entry.data.name);
      this.loading = true;
      const ref = storageRef.child(name).put(entry.data);
      ref.on(
        "state_changed",
        function() {
          /*snapshot */
        },
        function(error) {
          _this.loading = false;
          _this.uploadImageErrorHandel(error);
        },
        function() {
          _this.loading = false;
          _this.uploadImageSuccessHandel(ref, entry.type);
        }
      );
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

.loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: relative;
    width: 300px;
    height: 300px;
    background: url("~@/assets/loading.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>