import { createRouter, createWebHistory} from 'vue-router';
const routerHadler=createWebHistory();
const router=createRouter({
  history:routerHadler,
  routes:[
    {
      path: '/',
      name: 'index',
      component: ()=>import('../views/index/index.vue')
    },{
      path: '/home',
      name: 'home',
      component: ()=>import('../views/home/home.vue')
    }
  ]
})
export default router
