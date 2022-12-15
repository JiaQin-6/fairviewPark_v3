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
        fairview_park_lang === "en_us" ? "SPAC Member List" : "特別工程諮詢委員會委員名單"
      }}
    </p>
    <ul>
      <li
        style="font-size: 18px"
        class="mb-16"
        v-for="(item, index) in [
          {
            text:
              fairview_park_lang === 'en_us'
                ? 'Mr. Wong Wai Kwan (Convener)'
                : '王維君先生 (召集人)',
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Mr. So Wai Yan' : '蘇偉人先生',
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Ms. Choi Mei Nga' : '蔡美雅女士',
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Mr. Wong Chor Ming' : '黃楚銘先生',
          },
          {
            text:
              fairview_park_lang === 'en_us' ? 'Mr. Yu Wing Shing William' : '庾永盛先生',
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Ms. Young Wing Mui' : '楊詠梅女士',
          },
        ]"
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
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    onMounted(async () => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped></style>
