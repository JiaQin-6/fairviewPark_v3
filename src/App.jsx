/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 22:03:21
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-14 22:15:31
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup(props) {
    return () => {
      return (
        <div>
          <RouterView></RouterView>
        </div>
      );
    };
  },
});
