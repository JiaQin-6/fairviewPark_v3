<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:05:18
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
        <p style="font-size: 36px; color: #9cc212; font-weight: bold">
          {{ $t("aboutUs_Customer_Service.Customer_Service") }}
        </p>
        <ul>
          <li
            v-for="(item, index) in content"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
      content:[],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.aboutUs_Customer_Service.content_1
        : window.i18n_zh_tw.aboutUs_Customer_Service.content_1;
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~"<<<";
.nav-content {
  padding-left: 20px;
  .container {
    padding: 0px 0;
    h3 {
      font-size: 20px;
      color: #3a6547;
      margin-bottom: 20px;
      font-weight: normal;
    }
    ul {
      li {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
}
@media (max-width: 991px) {
  .nav-content {
  .container {
    h3 {
    }
    .row >p{
      font-size: 28px!important;
    }
    ul {
      li {
        font-size: 15px;
      }
    }
  }
}
}
</style>
