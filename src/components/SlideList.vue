<template>
  <div class="SlideList">
      <ul>
          <li><BlockImgBg url="//wx2.sinaimg.cn/mw690/6c009866ly1gl9vlxvvxqj20m80go79g.jpg" :scale="3/4"><div class="p-center card-box fcd fcw">淘宝社区</div></BlockImgBg></li>
          <li><BlockImgBg url="//wx2.sinaimg.cn/mw690/6c009866ly1gl9vlxvvxqj20m80go79g.jpg" :scale="3/4"><div class="p-center card-box fcd fcw">淘宝社区</div></BlockImgBg></li>
          <li><BlockImgBg url="//wx2.sinaimg.cn/mw690/6c009866ly1gl9vlxvvxqj20m80go79g.jpg" :scale="3/4"><div class="p-center card-box fcd fcw">淘宝社区</div></BlockImgBg></li>
          <li><BlockImgBg url="//wx2.sinaimg.cn/mw690/6c009866ly1gl9vlxvvxqj20m80go79g.jpg" :scale="3/4"><div class="p-center card-box fcd fcw">淘宝社区</div></BlockImgBg></li>
      </ul>
      <span class="look-more">查看更多</span>
  </div>
</template>

<script>
  import BlockImgBg from './BlockImgBg'
  export default {
    name:'SlideList',
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
.SlideList{
  padding: 0 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  text-align: center;
  box-sizing: border-box;
  ul{
    margin-right: -10px;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li{
      margin-right: 10px;
      display: inline-block;
      width: 200px;
      border-radius: 6px;
      overflow: hidden;
      
  }
  }
 
}
</style>