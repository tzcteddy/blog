<template>
  <a class="BlockImgBg" :class="{'clearfix':scale>0}" :href="link?link:'javascript:;'">
    <div class="blockImgBg-child" :class="{'fl':scale>0}" :style="{'padding-top':paddingTop,'background-image':`url(${url})`,'background-color':bg}">
      <slot></slot>
    </div>
  </a>
</template>

<script>
  import { computed} from 'vue'
  export default {
    name:'BlockImgBg',
    props:{
      url:{
        type:String,
        default:''
      },
      scale:{
        type:Number,
        default:0.5
      },
      link:{
        type:String,
        default:''
      },
      bg:{
        type:String,
        default:'transparent'
      }
    },
    data () {
      return {
        
      };
    },
    setup(props){
      const paddingTop=computed(()=>{return props.scale*100+'%'})
      return {
        paddingTop
      }
    },
    components: {},

    computed: {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
.BlockImgBg{
  display: block;
  position: relative;
  width: 100%;
  color: @color-font-level1;
  .blockImgBg-child{
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: linear-gradient(to right, rgb(255, 255, 255), transparent),; 
  }
}
</style>