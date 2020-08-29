<template>
    <div class="chatroom">
        <h1 class="title">chatroom!</h1>
    </div>
</template>

<script>
// import {db} from '../db.js'
import uuid from '../uuid.js'
export default {
    name : "ChatRoom",
    data(){
        return {
            uuid : uuid
        }
    },
    mounted(){
        console.log(this.uuid);
    }
}
</script>

<style lang="scss" scoped>

</style>