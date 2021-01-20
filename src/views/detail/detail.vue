<template>
  <div class="main-screen desktop">
      <div class="main desk-container scroll-y p10">
        <BlockImgBg :scale="1/4" :url="image"/>
        <article>
          <MarkdownArt :md="body"/>
        </article>
      </div>
  </div>
</template>

<script>
import {reactive,toRefs,onMounted,watch, ref} from 'vue';
import { useRoute } from 'vue-router'
import BlockImgBg from '../../components/BlockImgBg.vue'
import MarkdownArt from '../../components/MarkdownArt.vue'
import {getDetail} from '@/http/api'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },
    setup(){
      const body=ref('');
      const image=ref('');
      const route=useRoute()
      const id=route.params.id
      onMounted(async ()=>{
        const detail=await getDetail({id})
        console.log(detail)
        body.value=detail.data.data.body
        image.value=detail.data.data.image
      })
      
      return {
        image,
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