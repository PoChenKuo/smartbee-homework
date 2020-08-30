<template>
  <div id="app">
    <chat-room />
  </div>
</template>

<script>
import ChatRoom from "./components/ChatRoom";

export default {
  name: "App",
  components: {
    ChatRoom
  }
};
</script>
<style>
body {
  border: none;
  margin: 0;
  padding: 0;
  background: #333;
}
</style>
<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 5px;
  box-sizing: border-box;
}
</style>