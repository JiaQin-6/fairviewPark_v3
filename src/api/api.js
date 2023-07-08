/*
 * @Author: your name
 * @Date: 2019-09-03 08:49:48
 * @LastEditTime: 2022-12-14 23:33:28
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Description: In User Settings Edit
 * @FilePath: \hospitald:\软件2\vue\后台项目\manager\src\api\api.js
 */
import { ElMessage } from '../main.js';
//导入axios
import axios from "axios";
import router from '../router';
//创建多个基地址
//创建一个axios实例
let baseUrl = "";
switch (import.meta.env.MODE) {
    case "development": // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "http://43.154.184.138:8084"; //这里是测试环境中的url
        break;
    case "pre":
        baseUrl = "http://43.252.167.44:8092"; //这里是預生產环境中的url
        break;
    case "production":
        baseUrl = "https://app.fairviewpark.hk"; //生产环境url
        break;
    default:
        baseUrl = "http://43.154.184.138:8084"; //这里是本地的请求url
}
export const http = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    timeout: 1800000, //数据响应过期时间
    // headers: {
    //   // 设置后端需要的传参类型
    //   "Content-Type": "application/json",
    //   token: "your token",
    //   "X-Requested-With": "XMLHttpRequest",
    // },
});
//登录
http.login = (arr) => {
    return http.post(`/houseweb/member/login`, arr);
};
//註冊
http.register = (arr) => {
    return http.post(`/houseweb/member/register`, arr);
};
//忘记密码
http.forgetPassword = (arr) => {
    return http.post(`/houseweb/member/forgetPassword`, arr);
};
//更新用户信息
http.editMemberInfo = (arr) => {
    return http.post(`/houseweb/member/editMemberInfo`, arr);
};
//编辑用户信息前验证密码
http.checkPassword = (arr) => {
    return http.post(`/houseweb/member/checkPassword`, arr);
};
//申请智能卡
http.applyRCard = (arr) => {
    return http.post(`/houseweb/rcard/applyRCard`, arr);
};
//查看所有 最新消息
http.findNewNoticeList = (arr) => {
    return http.post(`/houseweb/newNotice/findNewNoticeList`, arr);
};
//获取 屋邨资料 列表
http.findEstateFacilitiesList = (arr) => {
    return http.post(`/houseweb/estateFacilities/findEstateFacilitiesList`, arr);
};
//根据 id 和 语言获取一条数据
http.findOneEstateFacilities = (arr) => {
    return http.post(`/houseweb/estateFacilities/findOneEstateFacilities`, arr);
};
//查询 屋邨通告 列表
http.findEstateNoticeList = (arr) => {
    return http.post(`/houseweb/estateNotice/findEstateNoticeList`, arr);
};
//查询 商场资讯 列表
http.findShopsDirectoryList = (arr) => {
    return http.post(`/houseweb/shopsDirectory/findShopsDirectoryList`, arr);
};
//查询 商场资讯 列表
http.findShopsDirectoryList2 = (arr) => {
    return http.post(`/houseweb/shopsDirectory/findShopsDirectoryList2`, arr);
};
//查询 用户电话 列表
http.findUsefulTelephoneNosList = (arr) => {
    return http.post(`/houseweb/usefulTelephoneNos/findUsefulTelephoneNosList`, arr);
};
//查询 用户电话 列表
http.findUsefulTelephoneNosList2 = (arr) => {
    return http.post(`/houseweb/usefulTelephoneNos/findUsefulTelephoneNosList2`, arr);
};
//查询所有 banner 列表
http.findWebsiteBannerList = (arr) => {
    return http.post(`/houseweb/websiteBanner/findWebsiteBannerList`, arr);
};
//查询 FaqFromResidents 列表
http.findFaqFromResidentsList = (arr) => {
    return http.post(`/houseweb/faqFromResidents/findFaqFromResidentsList`, arr);
};
//查询 FaqFromResidents 一条数据
http.findOneFaqFromResidents = (arr) => {
    return http.post(`/houseweb/faqFromResidents/findOneFaqFromResidents`, arr);
};
//查询 錦綉專訓 列表
http.findFairviewParkNewsList = (arr) => {
    return http.post(`/houseweb/fairviewParkNews/findFairviewParkNewsList`, arr);
};
//查询 人口统计 列表
http.findDemographicOpinionSurveyList = (arr) => {
    return http.post(`/houseweb/demographicOpinionSurvey/findDemographicOpinionSurveyList`, arr);
};
//查询 最新消息 列表
http.findNewUpdateList = (arr) => {
    return http.post(`/houseweb/newUpdate/findNewUpdateList`, arr);
};
//查询 最新消息 單獨一条信息
http.findOneNewUpdateById = (arr) => {
    return http.post(`/houseweb/newUpdate/findOneNewUpdateById`, arr);
};
//查询 常用表格 列表
http.findFrequentlyUsedFormsList = (arr) => {
    return http.post(`/houseweb/frequentlyUsedForms/findFrequentlyUsedFormsList`, arr);
};
//查询 抽籤鎖車機制 列表
http.findLotterySystemForImpound = (arr) => {
    return http.post(`/houseweb/lotterySystemForImpound/findLotterySystemForImpound`, arr);
};
//查询 屋邨活动 列表
http.findEstateActivitesList = (arr) => {
    return http.post(`/houseweb/estateActivites/findEstateActivitesList`, arr);
};
//查询 屋邨活动 單獨一条信息
http.findOneEstateActivitesById = (arr) => {
    return http.post(`/houseweb/estateActivites/findOneEstateActivitesById`, arr);
};
//查询 业主手册及地图 
http.findResidentsHandbookMap = (arr) => {
    return http.post(`/houseweb/residentsHandbookMap/findResidentsHandbookMap`, arr);
};
//查询 時間表
http.findCoachServiceList = (arr) => {
    return http.post(`/houseweb/coachService/findCoachServiceList`, arr);
};
//查询 時間表 單獨一条信息
http.findOneCoachService = (arr) => {
    return http.post(`/houseweb/coachService/findOneCoachService`, arr);
};
//查询 價格表 
http.findLineMoneyList = (arr) => {
    return http.post(`/houseweb/coachServiceMoney/findLineMoneyList`, arr);
};
//查看专车 pdf 链接
http.findOneCoachServiceFile = (arr) => {
    return http.post(`/houseweb/coachService/findOneCoachServiceFile`, arr);
};
//查看 大會議
http.findMinutesOfMacMeetingsList = (arr) => {
    return http.post(`/houseweb/minutesOfMacMeetings/findMinutesOfMacMeetingsList`, arr);
};
//查看 小會議
http.findMinutesOfSubComMeetingsList = (arr) => {
    return http.post(`/houseweb/minutesOfSubComMeetings/findMinutesOfSubComMeetingsList`, arr);
};
//查看 周邊發展項目
http.findNearbyProposedDevelopmentsList = (arr) => {
    return http.post(`/houseweb/nearbyProposedDevelopments/findNearbyProposedDevelopmentsList`, arr);
};
//查看 會議回顧 pdf
http.findOneMacColumnFile = (arr) => {
    return http.post(`/houseweb/coachService/findOneMacColumnFile`, arr);
};
//查看 大维修会议记录 列表
http.findTheOverhaulProjectList = (arr) => {
    return http.post(`/houseweb/theOverhaulProject/findTheOverhaulProjectList`, arr);
};
//查看 锦绣花园 pdf
http.findTohpByFpn2 = (arr) => {
    return http.post(`/houseweb/theOverhaulProject/findTohpByFpn2`, arr);
};
//查看当前登录用户是否已读
http.findPmLogHave = (arr) => {
    return http.post(`/houseweb/pmLogHave/findPmLogHave`, arr);
};
//查看推送消息
http.findPmLogList = (arr) => {
    return http.post(`/houseweb/pmLog/findPmLogList`, arr);
};
//申请智能卡专用 文件上传接口
http.uploadRcard = (arr) => {
    return http.post(`/houseweb/file/uploadRcard`, arr);
};
//查看申请的所有智能卡
http.findRcardList = (arr) => {
    return http.post(`/houseweb/rcard/findRcardList`, arr);
};
/* version2 **/
//查询最新一条弹窗信息
http.findOneNewPopupBox = (arr) => {
    return http.post(`/houseweb/popupBox/findOneNewPopupBox`, arr);
};
//业主查看租客情况
http.selectTenantStatus = (arr) => {
    return http.post(`/houseweb/tenant/selectTenantStatus`, arr);
};
//官网里业主启动关闭租客账号操作
http.clickTenantLaunch = (arr) => {
    return http.post(`/houseweb/tenant/clickTenantLaunch`, arr);
};
//租客修改密码
http.editTenantMemberInfo = (arr) => {
    return http.post(`/houseweb/member/editTenantMemberInfo`, arr);
};
/* ---------------------------------------------------------------------- */
/* 请求拦截:在浏览器发送请求报文给服务器的途中执行 */
/* 在发送给服务器的时候带token给服务器 */
http.interceptors.request.use((config) => {
    //在发送之前做点什么
    if (window.localStorage.getItem('login-info')) {
        config.headers.Authorization = JSON.parse(window.localStorage.getItem('login-info') || '').jwt;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
/* 响应拦截: 在服务器把响应报文发送给浏览器的途中执行 */
/* 登录后让服务器带给浏览器token */
http.interceptors.response.use(function (response) {
    if (response.data.status === 104) {
        if (localStorage.getItem('login-info')) {
            ElMessage({
                showClose: true,
                message: sessionStorage.getItem('fairview_park_lang') === 'en_us' ? 'Login timeout Please login again' : '登錄逾時，請重新登入! ',
                type: 'warning',
            });
        }
        localStorage.removeItem('login-info');
        router.push('/home');
        return;
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
/* ----------------------------------------------------------------------- */
export default http;
