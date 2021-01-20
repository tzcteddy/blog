<template>
  <div class="main-screen desktop" :style="{'backgroundImage' : background}">
      <div class="desk-container">
        <header @click="toDetail">
        <BlockImgBg :scale="0" >
        <div class="p10 f-c-center" >
          <BlockUser/>
          <p>x:{{x}},y:{{y}}</p>
        </div>
        </BlockImgBg>
    </header>
    <!-- 首页内容 -->
    <div class="content">
      <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl8sj5vb9fj20p00p0wm9.jpg -->
          <BlockImgBg v-for="(recommend,index) in recommendList" :key="index" :scale='0' :url="recommend.bgImageUrl">
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 ">{{recommend.title}}</h3>
              <RecommendList :list="recommend.list"/></div>
            </div>
          </BlockImgBg>
          <div class="main "><NavBar @change="changeType"/></div>
          <BlockImgBg :scale='0' >
            <ul class="p10 ">
              <router-link class="card-box-b main mb10" tag="li" v-for="(art,index) in articleList" :key="index" :to="`/detail/${art._id}`">
                <MarkdownList :art="art"/>
              </router-link>
          </ul>
          </BlockImgBg>
          
    </div>
      </div>
  </div>
</template>

<script lang="ts">

  import {RecommendProps,ArtItemProps} from '../../mock/types'
  import {getArticle} from '../../http/api'
  import useMousePosition from '../../hooks/useMousePosition'
  import {reactive,toRefs,onMounted,watch} from 'vue';
  import BlockImgBg from '../../components/BlockImgBg.vue'
  import BlockUser from '../../components/BlockUser.vue'
  import RecommendList from '../../components/RecommendList.vue'
  import MarkdownList from '../../components/MarkdownList.vue'
  import NavBar from '../../components/NavBar.vue'
    interface DataStyle {
    background: string;
  }
  interface HomeData {
    recommendList?: RecommendProps[];
    articleList?: ArtItemProps[];
    [propName: string]: any;
  }
  export default {
    name : 'index',
    data () {
      return {
        pagesParam: { total: 0, pageSize: 50, pageNum: 1 }
      };
    },
    setup(){
      const homeData: HomeData=reactive({recommendList : [],articleList:[]})
      const styleData: DataStyle = reactive({
        background : 'url(https://up.enterdesk.com/edpic/30/df/67/30df67370f38e85a044bf1e6f8b63cb0.jpg)'
      });
      const changeType=async (id: string)=>{
        const result=await getArticle({typeId:id,})
        homeData.articleList=result.data.list
      }
      watch([()=>styleData.background],(newValue,oldValue)=>{
          console.log(newValue,oldValue)
      })
     
      onMounted(async() => {
        const result=await getArticle({})
        homeData.articleList=result.data.data.list
      })
      
      const {x,y}=useMousePosition()
      const style=toRefs(styleData);
      return {
        ...style,
        x,y,
        changeType,
        ...toRefs(homeData)
      }
    },
 
    components: {BlockUser,BlockImgBg,RecommendList,MarkdownList,NavBar},

    computed: {},

    methods: {
      toDetail(){
        // this.$router.push({
        //   path:"/detail",
        //   param:{id}
        // })
      }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
.desktop{
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
}
</style>