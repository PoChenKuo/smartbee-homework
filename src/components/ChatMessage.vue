<template>
  <div class="chat-message">
    <div class="name">
      <b :style="{color:self?defaultColor:color}">{{name}}</b>
    </div>
    <div
      class="context"
      :class="[type]"
      :style="{
          borderColor:borderOfMessage,
          backgroundColor:backgroundForMessage
        }"
    >
      <template v-if="type==='text'">{{data}}</template>
      <template v-else-if="type==='stick'">
        <div :class="[type, data, 'sticky-item']"></div>
      </template>

      <template v-else-if="type==='photo'">
        <a :href="data" target="_blank">
          <div :class="[type]" :style="{backgroundImage:`url(${data})`}"></div>
        </a>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatMessage",
  props: ["name", "type", "data", "color", "self"],
  data() {
    return {
      defaultColor: "#121273"
    };
  },
  mounted() {},
  computed: {
    borderOfMessage() {
      return this.type === "text"
        ? this.self
          ? this.defaultColor
          : this.color
        : "transparent";
    },
    backgroundForMessage() {
      if (this.type === "text") {
        return this.self ? this.defaultColor : this.color;
      } else {
        return "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/stick";

.chat-message {
  width: 100%;
  margin: 5px 0px;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &.self {
    align-items: flex-end;
    .context {
      border-radius: 10px 0 10px 10px;
      color: #fff;
    }
  }

  .name {
    font-size: 16px;
  }
  .context {
    font-size: 18px;
    padding: 5px 7px;
    border-radius: 0px 10px 10px 10px;
    border: 1px solid;
    font-weight: 200;
    .stick,
    .photo {
      width: 150px;
      height: 150px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>