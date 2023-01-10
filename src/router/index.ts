
/*
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 15:08:30
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-12 00:31:16
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\Fairview Park\fairviewpark\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import axios from 'axios'
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
       //居民常見問題﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/FAQ-from-residents',
        name: 'FAQ-from-residents',
        component: () => import('../views/ownersZONE/FAQFromResidents/index.vue'),
      },
      //錦綉專訓﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
      {
        path: '/fairview-part-news',
        name: 'fairview-part-news',
        component: () => import('../views/ownersZONE/fairviewPartNews/index.vue'),
      },
       //人口統計及意見調查﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/demographic-opinion-survey',
        name: 'demographic-opinion-survey',
        component: () => import('../views/ownersZONE/demographicOpinionSurvey/index.vue'),
      },
       //屋邨活動﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/estate-activities',
        name: 'estate-activities',
        component: () => import('../views/ownersZONE/estateActivities/index.vue'),
      },
       //最新消息﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/news-update',
        name: 'news-update',
        component: () => import('../views/ownersZONE/newsUpdate/index.vue'),
      },
      //業主手冊及屋邨地圖﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
      {
        path: '/residents-handbook-map',
        name: 'residents-handbook-map',
        component: () => import('../views/ownersZONE/residentsHandbookMap/index.vue'),
      },
      //常用表格﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
      {
        path: '/frequently-used-forms',
        name: 'frequently-used-forms',
        component: () => import('../views/ownersZONE/frequentlyUsedForms/index.vue'),
      },
      //管理諮詢委員會專欄﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
      {
        path: '/MAC-column',
        name: 'MAC-column',
        component: () => import('../views/ownersZONE/MACColumn/index.vue'),
      },
      //收費表﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
      {
        path: '/payment-list',
        name: 'payment-list',
        component: () => import('../views/ownersZONE/paymentList/index.vue'),
      },
       //抽簽鎖車機制﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/lottery-system-for-impound',
        name: 'lottery-system-for-impound',
        component: () => import('../views/ownersZONE/lotterySystemForImpound/index.vue'),
      },
       //更換地下喉管及行車道路翻新工程（大維修）﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/the-overhaul-project',
        name: 'the-overhaul-project',
        component: () => import('../views/ownersZONE/theOverhaulProject/index.vue'),
      },
       //专巴时间表﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/coach-service',
        name: 'coach-service',
        component: () => import('../views/coachService/index.vue'),
      },
       //专巴时间表﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
       {
        path: '/apply-resident-smartcard',
        name: 'apply-resident-smartcard',
        component: () => import('../views/ownersZONE/applyRCard/index.vue'),
      },
      //30天信息推送﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣
      {
        path: '/information-push',
        name: 'information-push',
        component: () => import('../views/informationPush/index.vue'),
      },
      {
        path: '/pdf',
        name: 'pdf',
        component: () => import('../views/pdf/pdf.vue'),
      },
    ]
  }
]

const router = createRouter({
  //创建路由实例
  history: createWebHashHistory(),
  routes
});
//定义全局导航守卫
router.beforeEach((to, from, next) => {
  // 检查版本更新
  if (location.hostname !== "localhost") {
    checkAppNewVersion()
    // 监听页面打开显示
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) {
        checkAppNewVersion()
      }
    })
  }
  next();
})
// 检查服务端是否已经更新，如果更新刷新页面
async function checkAppNewVersion() {
  const url = `${location.pathname.split('index.html')}version.json?t=${Date.now()}`
  let res = null
  try {
    res = await axios.get(url)
  } catch (err) {
    console.error('checkAppNewVersion error: ', err)
  }
  if (!res) return
  const version = res.data.version
  //此处使用sessionStorage不用localStorage,不然多开同一个窗口有问题
  const sessionVersion = sessionStorage.getItem('fairview-park-version')
  if (sessionVersion && sessionVersion !== version) {
    sessionStorage.setItem('fairview-park-version', version)
    window.location.reload()
  }
  sessionStorage.setItem('fairview-park-version', version)
}
export default router
