<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 00:37:24
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h5>
      {{ fairview_park_lang === "en_us" ? "Samlpe of Nomination Form" : "提名表格樣本" }}
    </h5>
    <div style="text-align: center">
      <img
        style="margin-bottom: 20px; width: 100%"
        :src="
          fairview_park_lang === 'en_us'
            ? 'https://en.fairviewpark.hk/images/mac-appendix1.png'
            : 'https://cn.fairviewpark.hk/images/mac-appendix1.png'
        "
        alt=""
      />
      <img
        style="width: 100%"
        :src="
          fairview_park_lang === 'en_us'
            ? '	https://en.fairviewpark.hk/images/mac-appendix1-2.png'
            : 'https://cn.fairviewpark.hk/images/mac-appendix1-2.png'
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    onMounted(async () => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
h5 {
  font-size: 36px;
  color: var(--mainColor3);
  text-align: left;
}
@media (max-width: 991px) {
  h5{
    font-size: 28px;
  }
}
</style>
