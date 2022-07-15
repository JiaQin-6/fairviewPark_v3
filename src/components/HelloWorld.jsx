/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 22:23:40
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-07-15 14:09:08
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/components/HelloWorld.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//getCurrentInstance 当前实例
import {
  onBeforeMount,
  onMounted,
  defineComponent,
  ref,
  getCurrentInstance,
} from "vue";
import http from "../api/api";

import { useI18n } from "vue-i18n";
export default defineComponent({
  //接收父向子传递过来的值
  props: ["msg"],
  setup(props, { emit }) {
    const count = ref(0);
    console.log(count);
    console.log(props.msg);
    //api
    const _http = () => {
      http.languageList().then((res) => {
        console.log(res);
      });
    };
    //获取变量方法去动态显示内容和修改语言
    const { t } = useI18n();
    console.log(getCurrentInstance());
    let { proxy } = getCurrentInstance();
    console.log(proxy.$i18n);
    const changeI18n = () => {
      proxy.$i18n.locale = "zh_tw";
    };

    // mounted
    onMounted(() => {
      console.log("Component is mounted!");
    });
    // mounted
    onBeforeMount(() => {
      console.log("Component is BeforeMount!");
    });
    return () => {
      return (
        <div>
          <p style={{ color: "red" }}>{props.msg}</p>
          <p
            onClick={() => {
              emit("emit", "向父组件传值");
            }}
          >
            点击我向父组件传值
          </p>
          <p onClick={_http}>http</p>
          <div>
            <p>{t("i18n")}</p>
            <p onClick={changeI18n}>修改多语言</p>
          </div>
        </div>
      );
    };
  },
});
