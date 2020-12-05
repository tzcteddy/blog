<template>
  <div class="main-screen desktop" :style="{'backgroundImage':style.background}">
      <div class="desk-container">
        <header>
        <BlockImgBg :scale="0" >
        <div class="p10 f-c-center" >
          <BlockUser/>
        </div>
        </BlockImgBg>
    </header>
    <!-- 首页内容 -->
    <div class="content">
      <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl8sj5vb9fj20p00p0wm9.jpg -->
          <BlockImgBg :scale='0' url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607180904300&di=5a4e10ab0f10d96102ac194f731c1e8f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F589c327ec723e.jpg">
            <div class="f-r-center p10">
              <div class="card-box main">
              <h3 class="tac p10 ">推荐社区</h3>
              <SlideList/></div>
            </div>
          </BlockImgBg>
          <!-- //wx4.sinaimg.cn/mw690/6c009866ly1gl9vgsjzroj20m80vrnb9.jpg -->
          <BlockImgBg :scale='0' >
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
          <BlockImgBg :scale='0' >
            <ul class="p10 ">
              <li class="card-box-b main mb10"><MarkdownList/></li>
              <li class="card-box-b main mb10"><MarkdownList/></li>
              <li class="card-box-b main mb10"><MarkdownList/></li>
              <li class="card-box-b main mb10"><MarkdownList/></li>
          </ul>
          </BlockImgBg>
          
    </div>
      </div>
  </div>
</template>

<script>
  import {ref} from 'vue';
    import BlockImgBg from '../../components/BlockImgBg'
  import BlockUser from '../../components/BlockUser'
  import SlideList from '../../components/SlideList'
  import MarkdownList from '../../components/MarkdownList'
  import NavBar from '../../components/NavBar'
  export default {
    name:'index',
    data () {
      return {

      };
    },
    setup(){
      const style=ref({
        background:'url(https://up.enterdesk.com/edpic/30/df/67/30df67370f38e85a044bf1e6f8b63cb0.jpg)'
      })
      return {
        style
      }
    },
 
    components: {BlockUser,BlockImgBg,SlideList,MarkdownList,NavBar},

    computed: {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
.desktop{
  background-position: center center;
  background-repeat: no-repeat;
  background-size:100% 100%;
}
</style>