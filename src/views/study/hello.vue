<template>
  <div>
    
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
const component = defineComponent({
  name:'',
  props:{
    msg:String
  },
  setup(props,context){
    props.msg
    context.slots
  }
})
export default component
</script>
<style lang='' scoped>

</style>