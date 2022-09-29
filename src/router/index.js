/*
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 15:08:30
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-22 22:35:58
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\Fairview Park\fairviewpark\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
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
            //關於我們
            {
                path: '/about-us',
                name: 'about-us',
                component: () => import('../views/aboutUs/index.vue'),
            },
            //新買家須知﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
            {
                path: '/prospective-buyer',
                name: 'prospective-buyer',
                component: () => import('../views/prospectiveBuyer/index.vue'),
            },
            //新業主的一站式服務
            {
                path: '/buyer-server',
                name: 'buyer-buyer',
                component: () => import('../views/prospectiveBuyer/buyerServer.vue'),
            },
            //原型圖查詢
            {
                path: '/decoration',
                name: 'decoration',
                component: () => import('../views/prospectiveBuyer/decoration.vue'),
            },
            //外牆顏色系列
            {
                path: '/wall-color-series',
                name: 'wall-color-series',
                component: () => import('../views/prospectiveBuyer/wallColorSeries.vue'),
            },
            //屋邨資料﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
            {
                path: '/estate-facilities',
                name: 'estate-facilities',
                component: () => import('../views/estateFacilities/index.vue'),
            },
            //商場質詢﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
            {
                path: '/shopping-information',
                name: 'shopping-information',
                component: () => import('../views/shoppingInformation/index.vue'),
            },
            //常用電話及聯繫﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
            {
                path: '/useful-link',
                name: 'useful-link',
                component: () => import('../views/usefulLink/index.vue'),
            },
            //屋邨通知須知﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
            {
                path: '/estate-notice',
                name: 'estate-notice',
                component: () => import('../views/estateNotice/index.vue'),
            },
        ]
    }
];
const router = createRouter({
    //创建路由实例
    history: createWebHashHistory(),
    routes
});
export default router;
