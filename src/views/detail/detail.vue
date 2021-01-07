<template>
  <div class="main-screen desktop">
      <div class="main desk-container scroll-y p10">
        <BlockImgBg :scale="1/4" url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607180904300&di=5a4e10ab0f10d96102ac194f731c1e8f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F589c327ec723e.jpg"/>
        <article>
          <MarkdownArt :md="body"/>
        </article>
      </div>
  </div>
</template>

<script>
import {reactive,toRefs,onMounted,watch, ref} from 'vue';
import BlockImgBg from '../../components/BlockImgBg.vue'
import MarkdownArt from '../../components/MarkdownArt.vue'
import bodyData from '../../mock/api/detail/body'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },
    setup(){
      const body=ref('');
      body.value=bodyData.body
      return {
        body
      }
    },
    components: {BlockImgBg,MarkdownArt},

    computed: {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>