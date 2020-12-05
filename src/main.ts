import { createApp } from 'vue'
import './assets/reset.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router/index'
import markedDirective from './directives/marked'
createApp(App).use(router).directive('marked',markedDirective).mount('#app')
