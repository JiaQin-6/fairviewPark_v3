/*
 * @Author: your name
 * @Date: 2019-09-03 08:49:48
 * @LastEditTime: 2022-09-28 23:37:57
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Description: In User Settings Edit
 * @FilePath: \hospitald:\软件2\vue\后台项目\manager\src\api\api.js
 */
//导入axios
import axios from "axios";
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
//查询 用户电话 列表
http.findUsefulTelephoneNosList = (arr) => {
    return http.post(`/houseweb/usefulTelephoneNos/findUsefulTelephoneNosList`, arr);
};
//查询所有 banner 列表
http.findWebsiteBannerList = (arr) => {
    return http.post(`/houseweb/websiteBanner/findWebsiteBannerList`, arr);
};
/* ---------------------------------------------------------------------- */
/* 请求拦截:在浏览器发送请求报文给服务器的途中执行 */
/* 在发送给服务器的时候带token给服务器 */
http.interceptors.request.use((config) => {
    //在发送之前做点什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
/* 响应拦截: 在服务器把响应报文发送给浏览器的途中执行 */
/* 登录后让服务器带给浏览器token */
http.interceptors.response.use(function (response) {
    if (response.status != 200 && response.status != 201) {
        console.log("錯誤了");
    }
    return response;
}, function (error) {
    // Vue.prototype.$message.error("request_error_title");
    // 对响应错误做点什么
    return Promise.reject(error);
});
/* ----------------------------------------------------------------------- */
export default http;
