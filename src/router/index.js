import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = ()=>import('@/views/Main.vue')
const About = ()=>import('@/views/About.vue')

//1.使用
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/Main'
  },
  {
    path:'/main',
    component: Main
  },
  {
    path:'/about',
    component: About
  }

]

const router = new VueRouter({
  routes,
  mode:'history',
  base: process.env.BASE_URL
})
export default router