import { createRouter, createWebHistory} from 'vue-router';
const routerHadler=createWebHistory();
const router=createRouter({
  history:routerHadler,
  routes:[
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'home',
      component: ()=>import('../views/home/home.vue')
    }
  ]
})
export default router
