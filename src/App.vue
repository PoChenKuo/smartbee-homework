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
html,
body{
  height:100%;
  width:100%;
  border: none;
  margin: 0;
  padding: 0;
}
body {  
  background: #333;
}
</style>
<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
}
</style>