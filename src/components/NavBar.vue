<template>
  <div class="NavBar">
     <div class="nav-wrap">
       <ul class="inline-block">
        <li class="nav-active">推荐</li>
        <li>js</li>
        <li>node</li>
        <li>vue</li>
        <li>webpack</li>
        <li>ts</li>
        <li>微信</li>
        <li>移动</li>
     </ul>
     </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

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