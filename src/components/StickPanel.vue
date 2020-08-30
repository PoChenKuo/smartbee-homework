<template>
  <div class="stick-panel" :class="{active}">
    <div
      v-for="(item) in stickyList"
      :key="item.id"
      :class="[item.code, 'sticky-item']"
      @click="send(item.code)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "StickPanel",
  data() {
    return {
      stickyList: [
        { code: "sticky_code_01", id: 0 },
        { code: "sticky_code_02", id: 1 },
        { code: "sticky_code_03", id: 2 },
        { code: "sticky_code_04", id: 3 },
        { code: "empty-fill-items", id: 4 },
        { code: "empty-fill-items", id: 5 },
        { code: "empty-fill-items", id: 6 },
        { code: "empty-fill-items", id: 7 }
      ],
      active: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.active = true;
    });
  },
  methods: {
    send(code) {
      if (code !== "empty-fill-items") {
        this.$emit("send", code);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/stick";
.stick-panel {
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-evenly;
  max-height: 0;
  flex-wrap: wrap;
  overflow: auto;
  transition: max-height 0.16s ease-in-out;
  &.active {
    max-height: 500px;
  }
  .sticky-item {
    height: 80px;
    width: 30%;
    margin-bottom: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &.empty-fill-items {
      width: 30%;
      height: 0;
      margin: 0;
      visibility: hidden;
      cursor: default;
    }
  }
}
</style>