<template>
  <div class="BlockUser">
    <div class="user-block">
      <p class="avatar mb5"><img src="" alt=""/><span @click="clickHandler" class=" icon iconfont" :class="flag?'icon-kejian':'icon-biyan'"></span></p>
      <h3 class="name mb5">一起放风筝的日子</h3>
      <h6>驾 驾 驾</h6>
      <ul></ul>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
  export default {
    name:'',
    setup(){
      const flag = ref(true)
      
      return {
        flag
      }
    },

    components: {},

    computed: {},

    methods: {
      clickHandler(){
        this.flag=!this.flag
      }
    },

    watch: {}

  }

</script>
<style lang="less" scoped>
.BlockUser{
  padding: 20px 10px;
  display: inline-block;
  width: 50vw;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  max-width: 750px;
  color: @color-level1;
  box-shadow: 0px 1px 20px -6px @color-font-level1;
  .user-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar{
      border-radius: 50%;
      // border: 1px solid @color-level1;
    }
  }
}
</style>