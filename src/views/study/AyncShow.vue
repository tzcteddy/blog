<template>
  <div>
    <h1>{{result}}</h1>
  </div>
</template>

<script lang="ts">
 import {ref,defineComponent,onErrorCaptured} from 'vue'
  export default defineComponent({
    setup(){
      const error=ref(null)
      onErrorCaptured((e: any)=>{
          error.value=e
          return true
      })
      return new Promise((resolve)=>{
        setTimeout(()=>{
            return resolve({
              result:42
            })
        },3000)
      })
    }
  })

</script>
<style lang='' scoped>

</style>