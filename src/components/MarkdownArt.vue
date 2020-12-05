<template>
  <div class="markdown-body" v-marked="md"></div>
</template>
<script>
  export default {
    name:'MarkdownArt',
    props:{
      md:{
        type:String,
        default:''
      }
    }
  }

</script>
<style lang='less' scoped>
.markdown-body{
  -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #24292e;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
    &::after,&::before{
      display: table;
      content: "";
    }
}
</style>