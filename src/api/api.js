/*
 * @Author: your name
 * @Date: 2019-09-03 08:49:48
 * @LastEditTime: 2022-07-15 10:27:53
 * @LastEditors: 嘉嘉 1723470065@qq.com
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
    baseUrl = "https://api-insurer.dt3aws-uat.com/dtx/v1"; //这里是测试环境中的url
    break;
  case "production":
    baseUrl = "https://api-insurer.dt3-uat.com/dtx/v1"; //生产环境url
    break;
  default:
    baseUrl = "https://api-insurer.dt3aws-uat.com/dtx/v1"; //这里是本地的请求url
}
export const http = axios.create({
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
//獲取语言list
http.languageList = () => {
  return http.get(`/templatemodule/languageList`);
};
/* ---------------------------------------------------------------------- */
/* 请求拦截:在浏览器发送请求报文给服务器的途中执行 */
/* 在发送给服务器的时候带token给服务器 */
http.interceptors.request.use(
  (config) => {
    //在发送之前做点什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/* 响应拦截: 在服务器把响应报文发送给浏览器的途中执行 */
/* 登录后让服务器带给浏览器token */
http.interceptors.response.use(
  function (response) {
    if (response.status != 200 && response.status != 201) {
      console.log("錯誤了");
    }
    return response;
  },
  function (error) {
    // Vue.prototype.$message.error("request_error_title");
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
/* ----------------------------------------------------------------------- */
export default http;
