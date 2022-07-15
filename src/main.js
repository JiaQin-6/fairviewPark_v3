/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 21:54:34
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-07-15 12:15:56
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App'
import i18n from "./i18n/index.js";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
createApp(App).use(i18n).mount('#app')
