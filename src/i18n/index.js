/*
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-07-15 10:45:20
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-07-15 11:51:17
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\fairviewPark\fairviewPark_v3\src\i18n\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from 'vue-i18n';
import zh from './zh_tw';
import en from './en_us';
const i18n = createI18n({
    legacy: false,
    // globalInjection: true,// 全局注册 $t方法
    locale: localStorage.getItem('language') || 'en_us',
    messages: {
        'zh_tw': zh,
        'en_us': en,
    }
});
export default i18n;
