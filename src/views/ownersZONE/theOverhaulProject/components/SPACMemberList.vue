<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-04 23:34:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:28:22
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/theOverhaulProject/components/theOverhaulProject.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p style="font-size: 36px; color: #9cc212; font-weight: bold">
      {{
        $t('TheOverhaulProject_SPAC_Member_List.SPAC_Member_List')
      }}
    </p>
    <ul style="padding:0">
      <li
        style="font-size: 18px"
        class="mb-16"
        v-for="(item, index) in content"
        :key="index"
      >
        {{ index + 1 }}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      content:null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.TheOverhaulProject_SPAC_Member_List.content
        : window.i18n_zh_tw.TheOverhaulProject_SPAC_Member_List.content;
    onMounted(async () => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
 @media (max-width: 991px) {
  p{
    font-size: 28px!important;
  }
  ul{
    li{
      font-size: 15px!important;
    }
  }
 }
</style>
