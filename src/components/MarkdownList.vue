<template>
  <div class="MarkdownList">
      <div class="pic"><BlockImgBg :scale="1/2" :url="art.image"/></div>
      <div class="ctn">
         <div class="fcd">
            <h2>{{art.title}}</h2>
            <p>{{art.intro}}</p>
         </div>
         <div class="fcv f12">发表时间:{{art.cTime}}</div>
      </div>
  </div>
</template>

<script>
  import BlockImgBg from './BlockImgBg'
  export default {
    name:'',
    props:{
      art:{
        type:Object,
        required:true,
        default:null
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