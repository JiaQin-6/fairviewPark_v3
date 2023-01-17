/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 21:54:34
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-19 15:03:04
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
// import './style.css'
import router from './router/index';
import store from './store/index';
// console.log(commonFunc)
// app.config.globalProperties.$commonFunc = commonFunc;
//
import ElementPlus from 'element-plus';
import { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//导入公共样式
import './assets/css/defaultCss.css';
import './assets/css/commonClass.css';
import './assets/css/quillEditor.css';
import './assets/css/elementUI.css';
import './assets/css/defaultCss.css';
import './assets/css/animate.css';
import './fonts/iconfont.css';
//国际化
import i18n from "./i18n/index.js";
//axios
import http from './api/api';
app.config.globalProperties.$http = http;
app.use(i18n).use(router).use(store).use(ElementPlus).mount('#app');
export { ElMessage };
