<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-24 23:57:02
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
        <h3>{{ $t("Human Resources") }}</h3>
        <div>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'Human Resources Department is responsible for recruiting, organizing, managing and motivating our staff members whose common aim is to always provide quality service to the residents of Fairview Park.',
                    'Human Resources Department’s work is internal, but it has the key role in developing staff members from each department, so the most suitable people will be retained to directly serve our valued residents every day.',
                  ]
                : [
                    '人力資源部負責招聘、調配、管理及推動一眾同心合力為錦綉花園居民提供優質服務的員工。',
                    '人力資源部的工作雖然是對內，其主要功能卻是致力發展每個部門的員工之所長，務求讓最適合的人，在公司內各司其職，一同服務錦綉居民。',
                  ]"
              :key="index"
              v-html="item"
            ></li>
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
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.nav-content {
  .container {
    background-color: #e6eae5;
    padding: 20px;
    h3 {
      font-size: 20px;
      color: #3a6547;
      margin-bottom: 20px;
    }
    ul {
      padding: 0px 0 15px 0px;
      li {
        font-size: 16px;
        list-style-type: disc;
        font-family: "Quicksand";
        font-weight: 700;
        color: #3a6547;
        margin-bottom: 20px;
        list-style: none;
      }
    }
  }
}
</style>
