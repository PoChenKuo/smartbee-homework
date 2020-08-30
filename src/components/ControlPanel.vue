<template>
  <div class="control-panel">
    <div class="controls">
      <div class="photo-selector">
        <font-awesome-icon :icon="imageIcon" />
        <input type="file" accept="image/png, image/jpeg" @change.passive="sendImage" />
      </div>
      <font-awesome-icon
        @click="stickEnable=!stickEnable"
        :class="{active:stickEnable}"
        :icon="stickIcon"
      />
      <text-input @send="sendText" />
    </div>
    <stick-panel @send="sendStick" v-if="stickEnable" />
  </div>
</template>

<script>
import StickPanel from "./StickPanel";
import TextInput from "./TextInput";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
export default {
  name: "ControlPanel",
  components: { StickPanel, TextInput },
  data() {
    return {
      stickEnable: false,
      imageIcon: faImage,
      stickIcon: faStickyNote
    };
  },
  mounted() {},
  methods: {
    send(entry) {
      this.$emit("send", entry);
    },
    sendText(message) {
      this.send({
        type: "text",
        data: message
      });
    },
    sendStick(code) {
      this.stickEnable = false;
      this.send({
        type: "stick",
        data: code
      });
    },
    sendImage(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.$emit("sendImage", {
          type: "photo",
          data: files[0]
        });
        event.target.value = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.control-panel {
  width: calc(100% - 20px);
  height: auto;
  min-height: 70px;
  background: #fff;
  position: absolute;
  bottom: 30px;
  box-shadow: black 0px 0px 3px;
  border-radius: 5px 5px 2px 2px;

  .controls {
    padding: 5px 10px;
    box-sizing: border-box;
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    .photo-selector {
      width: auto;
      height: auto;
      overflow: height;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        opacity: 0;
        outline: none;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .svg-inline--fa {
      color: #777;
      font-size: 30px;
      margin: 5px 15px;
      cursor: pointer;
      &.active {
        color: #555;
      }
    }
    .text-input {
      width: calc(100% - 120px);
      margin-left: 15px;
    }
  }
}
</style>