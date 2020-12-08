<template>
 <teleport to="#module">
   <div class="module card-box" v-if="isOpen"><h2><slot>this is a module</slot></h2><button @click="buttonClick">关闭</button></div>
   
 </teleport>
</template>

<script>
 import  {defineComponent} from 'vue'
  const component=defineComponent({
    props:{
      isOpen:Boolean
    },
    emits:{
      // 'close-module':(payload)=>{
      //   return payload.type==='close'
      // }
      'close-module':null
    },
    setup(props,context){
      const buttonClick=()=>{
        context.emit('close-module')
      } 
      return {
        buttonClick
      }
    }
  })
  export default component
</script>
<style lang='less' scoped>
.module{
  width: 200px;
  height: 100px;
  border:  1px solid @color-level1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(255, 255, 255, 0.6);
}
</style>