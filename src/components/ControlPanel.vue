<template>
  <div class="control-panel">
    <div class="controls">
      <font-awesome-icon :icon="imageIcon" />
      <font-awesome-icon
        @click="stickEnable=!stickEnable"
        :class="{active:stickEnable}"
        :icon="stickIcon"
      />
      <text-input />
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
    send() {},
    sendText() {},
    sendStick(code) {
      this.stickEnable = false;
      console.log(code);
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