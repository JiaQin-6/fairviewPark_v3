/*
 * @Author: your name
 * @Date: 2019-09-03 08:49:48
 * @LastEditTime: 2022-11-09 23:58:27
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Description: In User Settings Edit
 * @FilePath: \hospitald:\软件2\vue\后台项目\manager\src\api\api.js
 */
//导入axios
import axios from "axios";
import router from '../router'
//创建多个基地址
//创建一个axios实例
let baseUrl = "";
switch (process.env.NODE_ENV) {
  case "development": // 注意这里的名字要和步骤二中设置的环境名字对应起来
    baseUrl = "http://43.154.184.138:8084"; //这里是测试环境中的url
    break;
  case "production":
    baseUrl = "http://43.154.184.138:8084"; //生产环境url
    break;
  default:
    baseUrl = "http://43.154.184.138:8084"; //这里是本地的请求url
}
export const http: any = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // 异步请求携带cookie
  timeout: 1800000, //数据响应过期时间
  // headers: {
  //   // 设置后端需要的传参类型
  //   "Content-Type": "application/json",
  //   token: "your token",
  //   "X-Requested-With": "XMLHttpRequest",
  // },
});
//登录
http.login = (arr:any) => {
  return http.post(`/houseweb/member/login`,arr);
};
//註冊
http.register = (arr:any) => {
  return http.post(`/houseweb/member/register`,arr);
};
//忘记密码
http.forgetPassword = (arr:any) => {
  return http.post(`/houseweb/member/forgetPassword`,arr);
};
//申请智能卡
http.applyRCard = (arr:any) => {
  return http.post(`/houseweb/rcard/applyRCard`,arr);
};
//查看所有 最新消息
http.findNewNoticeList = (arr:any) => {
  return http.post(`/houseweb/newNotice/findNewNoticeList`,arr);
};
//获取 屋邨资料 列表
http.findEstateFacilitiesList = (arr:any) => {
  return http.post(`/houseweb/estateFacilities/findEstateFacilitiesList`,arr);
};
//根据 id 和 语言获取一条数据
http.findOneEstateFacilities = (arr:any) => {
  return http.post(`/houseweb/estateFacilities/findOneEstateFacilities`, arr);
};
//查询 屋邨通告 列表
http.findEstateNoticeList = (arr:any) => {
  return http.post(`/houseweb/estateNotice/findEstateNoticeList`,arr);
};
//查询 商场资讯 列表
http.findShopsDirectoryList = (arr:any) => {
  return http.post(`/houseweb/shopsDirectory/findShopsDirectoryList`,arr);
};
//查询 用户电话 列表
http.findUsefulTelephoneNosList = (arr:any) => {
  return http.post(`/houseweb/usefulTelephoneNos/findUsefulTelephoneNosList`,arr);
};
//查询所有 banner 列表
http.findWebsiteBannerList = (arr:any) => {
  return http.post(`/houseweb/websiteBanner/findWebsiteBannerList`,arr);
};
//查询 FaqFromResidents 列表
http.findFaqFromResidentsList = (arr:any) => {
  return http.post(`/houseweb/faqFromResidents/findFaqFromResidentsList`,arr);
};
//查询 FaqFromResidents 一条数据
http.findOneFaqFromResidents = (arr:any) => {
  return http.post(`/houseweb/faqFromResidents/findOneFaqFromResidents`,arr);
};
//查询 錦綉專訓 列表
http.findFairviewParkNewsList = (arr:any) => {
  return http.post(`/houseweb/fairviewParkNews/findFairviewParkNewsList`,arr);
};
//查询 人口统计 列表
http.findDemographicOpinionSurveyList = (arr:any) => {
  return http.post(`/houseweb/demographicOpinionSurvey/findDemographicOpinionSurveyList`,arr);
};
//查询 最新消息 列表
http.findNewUpdateList = (arr:any) => {
  return http.post(`/houseweb/newUpdate/findNewUpdateList`,arr);
};
//查询 最新消息 單獨一条信息
http.findOneNewUpdateById = (arr:any) => {
  return http.post(`/houseweb/newUpdate/findOneNewUpdateById`,arr);
};
//查询 常用表格 列表
http.findFrequentlyUsedFormsList = (arr:any) => {
  return http.post(`/houseweb/frequentlyUsedForms/findFrequentlyUsedFormsList`,arr);
};
//查询 抽籤鎖車機制 列表
http.findLotterySystemForImpound = (arr:any) => {
  return http.post(`/houseweb/lotterySystemForImpound/findLotterySystemForImpound`,arr);
};
//查询 屋邨活动 列表
http.findEstateActivitesList = (arr:any) => {
  return http.post(`/houseweb/estateActivites/findEstateActivitesList`,arr);
};
//查询 屋邨活动 單獨一条信息
http.findOneEstateActivitesById = (arr:any) => {
  return http.post(`/houseweb/estateActivites/findOneEstateActivitesById`,arr);
};
//查询 业主手册及地图 
http.findResidentsHandbookMap = (arr:any) => {
  return http.post(`/houseweb/residentsHandbookMap/findResidentsHandbookMap`,arr);
};
//查询 時間表
http.findCoachServiceList = (arr:any) => {
  return http.post(`/houseweb/coachService/findCoachServiceList`,arr);
};
//查询 時間表 單獨一条信息
http.findOneCoachService = (arr:any) => {
  return http.post(`/houseweb/coachService/findOneCoachService`,arr);
};
//查询 價格表 
http.findLineMoneyList = (arr:any) => {
  return http.post(`/houseweb/coachServiceMoney/findLineMoneyList`,arr);
};
//查看专车 pdf 链接
http.findOneCoachServiceFile = (arr:any) => {
  return http.post(`/houseweb/coachService/findOneCoachServiceFile`,arr);
};
//查看 大會議
http.findMinutesOfMacMeetingsList = (arr:any) => {
  return http.post(`/houseweb/minutesOfMacMeetings/findMinutesOfMacMeetingsList`,arr);
};
//查看 小會議
http.findMinutesOfSubComMeetingsList = (arr:any) => {
  return http.post(`/houseweb/minutesOfSubComMeetings/findMinutesOfSubComMeetingsList`,arr);
};
//查看 周邊發展項目
http.findNearbyProposedDevelopmentsList = (arr:any) => {
  return http.post(`/houseweb/nearbyProposedDevelopments/findNearbyProposedDevelopmentsList`,arr);
};
//查看 會議回顧 pdf
http.findOneMacColumnFile = (arr:any) => {
  return http.post(`/houseweb/coachService/findOneMacColumnFile`,arr);
};
//查看 大维修会议记录 列表
http.findTheOverhaulProjectList = (arr:any) => {
  return http.post(`/houseweb/theOverhaulProject/findTheOverhaulProjectList`,arr);
};
//查看 锦绣花园 pdf
http.findTohpByFpn = (arr:any) => {
  return http.post(`/houseweb/theOverhaulProject/findTohpByFpn`,arr);
};
//查看当前登录用户是否已读
http.findPmLogHave = (arr:any) => {
  return http.post(`/houseweb/pmLogHave/findPmLogHave`,arr);
};
//查看推送消息
http.findPmLogList = (arr:any) => {
  return http.post(`/houseweb/pmLog/findPmLogList`,arr);
};
/* ---------------------------------------------------------------------- */
/* 请求拦截:在浏览器发送请求报文给服务器的途中执行 */
/* 在发送给服务器的时候带token给服务器 */
http.interceptors.request.use(
  (config: any) => {
    //在发送之前做点什么
    if(window.localStorage.getItem('login-info')){
      config.headers.Authorization = JSON.parse(window.localStorage.getItem('login-info')||'').jwt;
    }
    
    return config;
  },
  function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/* 响应拦截: 在服务器把响应报文发送给浏览器的途中执行 */
/* 登录后让服务器带给浏览器token */
http.interceptors.response.use(
  function (response: any) {
    if (response.data.status === 104) {
      localStorage.removeItem('login-info')
      router.push('/home')
    }
    return response;
  },
  function (error: any) {
    // Vue.prototype.$message.error("request_error_title");
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
/* ----------------------------------------------------------------------- */
export default http;
