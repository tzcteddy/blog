<template>
  <div class="home">
    <header>
        <BlockImgBg :scale="0" url="//wx1.sinaimg.cn/mw690/6c009866ly1ggz092exw6g20m80go4qq.gif" >
        <div class="p10 f-c-center" >
          <BlockUser/>
        </div>
        </BlockImgBg>
    </header>
    <!-- 首页内容 -->
    <div class="content">
      <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl8sj5vb9fj20p00p0wm9.jpg -->
          <BlockImgBg :scale='0' url="" v-if="false">
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 ">推荐社区</h3>
              <SlideList/></div>
            </div>
          </BlockImgBg>
          <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl9vgsjzroj20m80vrnb9.jpg -->
          <BlockImgBg :scale='0' url="" v-if="false">
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 ">推荐工具</h3>
              <SlideList/></div>
            </div>
          </BlockImgBg>
          <BlockImgBg :scale='0' url="" v-if="false">
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 ">推荐工具</h3>
              <SlideList/></div>
            </div>
          </BlockImgBg>
          <div class="main "><NavBar/></div>
          <BlockImgBg :scale='0' url="//wx4.sinaimg.cn/mw690/6c009866ly1gl8sj5vb9fj20p00p0wm9.jpg">
            <ul class="p10 ">
              <li class="card-box-b main"><MarkdownList/></li>
              <li class="card-box-b main"><MarkdownList/></li>
              <li class="card-box-b main"><MarkdownList/></li>
              <li class="card-box-b main"><MarkdownList/></li>
          </ul>
          </BlockImgBg>
          
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  import BlockImgBg from '../../components/BlockImgBg'
  import BlockUser from '../../components/BlockUser'
  import SlideList from '../../components/SlideList'
  import MarkdownList from '../../components/MarkdownList'
  import NavBar from '../../components/NavBar'
  export default {
    name:'',
    data () {
      return {

      };
    },
    components: {BlockUser,BlockImgBg,SlideList,MarkdownList,NavBar},
    setup(){
      axios.post('http://localhost:1111/mock/web/home').then(res=>{console.log(res)})
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