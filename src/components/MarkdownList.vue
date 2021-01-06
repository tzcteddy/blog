<template>
  <div class="MarkdownList">
      <div class="pic"><BlockImgBg :scale="1/2" url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607180904300&di=5a4e10ab0f10d96102ac194f731c1e8f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F589c327ec723e.jpg"/></div>
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
    height: 77.42px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>