<template>
  <div class="home">
    <header>
        <BlockImgBg :scale="0" bg="#117C6F" >
        <div class="p10 f-c-center" >
          <BlockUser/>
          <Suspense>
            <template #default>
              <async-show/>
            </template>
            <template #fullback>
              <h1>loading...</h1>
            </template>
          </Suspense>
        </div>
        </BlockImgBg>
    </header>
    <!-- 首页内容 -->
    <div class="content">
      <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl8sj5vb9fj20p00p0wm9.jpg -->
          <BlockImgBg :scale='0' bg="#117C6F" >
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 ">推荐社区</h3>
              <RecommendList/></div>
            </div>
          </BlockImgBg>
          <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl9vgsjzroj20m80vrnb9.jpg -->
          <BlockImgBg :scale='0' bg="#117C6F" >
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 " @click="openModule">推荐工具</h3>
              <RecommendList/></div>
            </div>
          </BlockImgBg>
          <BlockImgBg :scale='0' url="" v-if="false">
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 " >推荐工具</h3>
              <RecommendList/></div>
            </div>
          </BlockImgBg>
          <div class="main "><NavBar/></div>
          <BlockImgBg :scale='0' bg="#117C6F">
            <ul class="p10 ">
              <li class="card-box-b main"><MarkdownList/></li>
              <li class="card-box-b main"><MarkdownList/></li>
              <li class="card-box-b main"><MarkdownList/></li>
              <li class="card-box-b main"><MarkdownList/></li>
          </ul>
          </BlockImgBg>
          <Module :isOpen="moduleIsOpen" @close-module="onModuleClose">hello module</Module>
          
    </div>
  </div>
</template>

<script lang='ts'>
import {ref, watch} from 'vue'
import axios from 'axios';
  import BlockImgBg from '../../components/BlockImgBg.vue'
  import BlockUser from '../../components/BlockUser.vue'
  import RecommendList from '../../components/RecommendList.vue'
  import MarkdownList from '../../components/MarkdownList.vue'
  import NavBar from '../../components/NavBar.vue'
  import useUrlLoader from '../../hooks/useUrlLoader'
  import Module from '../../components/Module.vue'
  import AsyncShow from '../study/AyncShow.vue'
  interface ResultData {
    code: number;
    msg: string;
    [key: string]: any;
  }
  export default {
    name:'',
    data () {
      return {

      };
    },
    components: {BlockUser,BlockImgBg,RecommendList,MarkdownList,NavBar,Module,AsyncShow},
    setup(){
      axios.post('http://localhost:1111/mock/web/home').then(res=>{console.log(res)})
      const {result,loading,loaded,error} = useUrlLoader<ResultData>()
      watch(result,()=>{
        if(result.value){
          console.log('value',result.value.msg)
        }
        console.log(result)
      })
      const images=ref({
        img1:require('../../static/img/1.jpg'),
        img2:require('../../static/img/2.jpg'),
        img3:require('../../static/img/3.jpg'),
      })
      const moduleIsOpen=ref(false)
      const openModule = ()=>{
        moduleIsOpen.value=true
      }
      const onModuleClose = ()=>{
        moduleIsOpen.value=false
      }
      return {
        images,
        result,
        loading,
        loaded,
        error,
        moduleIsOpen,
        openModule,
        onModuleClose
      }
    }
  }

</script>
<style lang='less' scoped>
.home{
 header{
   position: relative;
   min-height: 110px;
 }
 .content{
   
    li{
      margin-bottom: 10px;
    }
 }
}
</style>