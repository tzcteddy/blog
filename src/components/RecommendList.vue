<template>
  <div class="RecommendList">
      <ul>
          <li v-for="(item,index) in list" :key="index">
            <BlockImgBg :url="item.imageUrl" :link="item.link" :scale="3/4"><div class="p-center card-box fcd fcw w90">{{item.title}}</div></BlockImgBg>
          </li>
      </ul>
      <span class="look-more">查看更多</span>
  </div>
</template>

<script>
  import BlockImgBg from './BlockImgBg'
  export default {
    name:'RecommendList',
    props:{
      list:{
        type:Array,
        require:true,
        default:()=>[]
      }
    },
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
.RecommendList{
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