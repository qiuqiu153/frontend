
import{RouteRecordRaw}from "vue-router"


export const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '@/components/home.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "about" */ '@/components/chat.vue')
    },
  ]