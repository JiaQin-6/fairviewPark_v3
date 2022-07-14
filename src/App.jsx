/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 22:03:21
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-07-14 11:04:11
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";

export default defineComponent({
  emit: ["emit"],
  setup(props,{emit}) {
    console.log(emit('emit'));
    const getData = (value) => {
        console.log(value);
    }
    return () => {
      return (
        <div>
          <HelloWorld msg="向子组件传值" onEmit={getData}/>
        </div>
      );
    };
  },
});
