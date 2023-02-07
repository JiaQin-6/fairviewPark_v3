/*
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-07-15 10:45:20
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-22 00:43:17
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\fairviewPark\fairviewPark_v3\src\i18n\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from 'vue-i18n';
// import zh from '/i18n/zh_tw.js'
// import en from '/i18n/en_us.js'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,// 全局注册 $t方法
  locale: sessionStorage.getItem('fairview_park_lang') || 'zh_tw',
  messages: {
    'zh_tw': window.i18n_zh_tw,
    'en_us': window.i18n_en_us,
  }
});

export default i18n;