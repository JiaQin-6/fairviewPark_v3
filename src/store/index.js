/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-06-14 21:36:13
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-10 23:42:21
 * @FilePath: /fairviewpark/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate"; //引入vuex状态持久化（页面刷新状态依然保存）
export default createStore({
    state: {
        loginStatus: null,
    },
    getters: {},
    mutations: {
        setLoginStatus(state, payload) {
            state.loginStatus = payload;
        },
    },
    actions: {},
    modules: {},
    plugins: [
        createPersistedState({
            key: 'fairview-part-store',
            storage: window.sessionStorage, //使用会话缓存机制
        })
    ]
});
