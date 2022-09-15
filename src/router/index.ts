
/*
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 15:08:30
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-15 22:48:31
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\Fairview Park\fairviewpark\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {  createRouter, createWebHashHistory } from 'vue-router'

const routes =  [
  {
    path: '/',
    name: 'index',
    redirect: "/home", 
    component: () => import('../views/index/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: '/about-us',
        name: 'aboutUs',
        component: () => import('../views/aboutUs/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  //创建路由实例
  history:createWebHashHistory(),
  routes
})

export default router
