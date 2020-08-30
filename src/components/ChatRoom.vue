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
    <control-panel @send="sendMessage" @sendImage="sendImage" />
  </div>
</template>

<script>
import { db, storage } from "../firebase.js";
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
    _this = this;
    console.log(storageRef);

    messageRef.on("value", function(snapshot) {
      console.log(snapshot.val());
    });
  },
  beforeDestroy() {
    messageRef.off("value");
  },
  watch: {
    boardMessage() {
      const data = this.message.reverse().filter(e => e.type);
      return data;
    }
  },
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
      console.log(data, ` is ready for firebase`);
      // if (data.type !== "photo") {
      // console.log(db);
      db.ref("smartbee-message").push(data);
      // }
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
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;

        case "storage/canceled":
          // User canceled the upload
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
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
      const ref = storageRef.child(name).put(entry.data);
      ref.on(
        "state_changed",
        function() {
          /*snapshot */
        },
        function(error) {
          this.uploadImageErrorHandel(error);
        },
        function() {
          // Upload completed successfully, now we can get the download URL
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
</style>