<template>
  <div class="MarkdownList">
      <div class="pic"><BlockImgBg :scale="1/2" url="//wx4.sinaimg.cn/mw690/6c009866ly1gl9vgsjzroj20m80vrnb9.jpg"/></div>
      <div class="ctn">
         <div>
            <h2>Vue源码分析</h2>
            <p>vue3出来了，vue2学会了吗？</p>
         </div>
         <div class="fcv f12">发表时间:2020-01-01 12:00:00</div>
      </div>
  </div>
</template>

<script>
  import BlockImgBg from './BlockImgBg'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {BlockImgBg},

    computed: {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
.MarkdownList{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content:flex-start ;
  align-items: center;
  .pic{
    display: flex;
    margin-right: 10px;
    width: 200px;
  }
  .ctn{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>