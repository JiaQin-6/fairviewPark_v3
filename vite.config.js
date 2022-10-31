/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 21:54:34
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-15 22:07:23
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true, // 严格端口 true:如果端口已被使用，则直接退出，而不会再进行后续端口的尝试。
  },
  plugins: [vue(), vueJsx()],
  server: {
    open: true,
  },
  base: './',
});
