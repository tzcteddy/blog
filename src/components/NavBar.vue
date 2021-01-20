<template>
  <div class="NavBar">
     <div class="nav-wrap">
       <ul class="inline-block">
        <li class="click" :class="{'nav-active':type.id==curTypeId}" @click="changeType(type.id)" v-for="type in articleTypeOptions" :key="type.id">{{type.name}}</li>
     </ul>
     </div>
  </div>
</template>

<script>
  import {reactive,toRefs,ref} from 'vue'
  import {articleTypeOptions} from '@/lib/config'
  export default {
    name:'',
    setup(){
      const curTypeId=ref("1")
      const options=reactive({articleTypeOptions});
      const changeType=(id)=>{
          curTypeId.value=id
      }
      return {
        curTypeId,
        changeType,
        ...toRefs(options)
      }
    },
    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
.NavBar{
  width: 100%;
  height: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  background: #fff;
  box-shadow: -1px 5px 18px -12px @color-level1;
  .nav-wrap{
    width: 100%;
    height: 50px;
    overflow-y: hidden;
     ul{
       padding: 10px 0;
       height: 50px;
      white-space: nowrap;
    li{
      padding: 0 10px;
      display: inline-block;
      &.nav-active{
        color: @color-level1;
      }
    }
  }
  }
}
</style>