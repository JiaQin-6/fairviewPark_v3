/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-14 21:38:05
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-14 22:26:34
 * @FilePath: /fairviewpark/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import Header from '../../components/header'
import Footer from '../../components/footer'
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <Header></Header>
          <RouterView></RouterView>
          <Footer></Footer>
        </div>
      );
    };
  },
});
