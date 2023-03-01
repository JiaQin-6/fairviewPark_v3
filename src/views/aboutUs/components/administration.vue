<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:49:40
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
       
        <p class="title" style="font-size: 36px; color: #9cc212; font-weight: bold">
          {{ $t("aboutUs_Administration.Administration") }}
        </p>
        <p>
          {{
            $t('aboutUs_Administration.content_1')
          }}
        </p>
        <div
          v-for="(item, index) in content"
          :key="index"
        >
          <li class="li" style="font-weight:bold;">{{ item.title }}</li>
          <ul>
            <li v-for="(item2, index2) in item.list" :key="index2" v-html="item2"></li>
          </ul>
        </div>
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
      content:'',
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.aboutUs_Administration.content_2
        : window.i18n_zh_tw.aboutUs_Administration.content_2;
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.nav-content {
  padding-left: 20px;
  .container {
    padding: 0px 0px;
    h3 {
      font-size: 20px;
      color: #3a6547;
      margin-bottom: 20px;
      font-weight: normal;
    }
    p {
      font-size: 18px;
      list-style: none;
    }
    .li {
      margin-bottom: 20px;
      font-size: 24px;
    }
    ul {
      padding: 0px 0 15px 0px;
      li {
        font-size: 18px;
        list-style-type: disc;
        list-style: none;
        
      }
    }
  }
}
@media (max-width: 991px) {
  .nav-content {
  padding-left: 20px;
  .container {
    padding: 0px 0px;
    h3 {
    }
    .title{
      font-size: 28px!important;
    }
    p {
      font-size: 15px;
    }
    .li {
      font-size: 20px;
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
