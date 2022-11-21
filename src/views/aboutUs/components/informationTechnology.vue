<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-19 02:01:29
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-9 nav-content">
    <div class="container">
      <div class="row">
        <h3
          style="color: #000; font-size: 32px; margin-bottom: 30px; font-weight: bold"
          v-html="
            $t('Information Technology')
              .replace(
                'Customer',
                '<b style=border-bottom-width:4px;border-bottom-color:#f0be64;border-bottom-style:solid;>Information</b>'
              )
              .replace(
                '資訊',
                '<b style=border-bottom-width:4px;border-bottom-color:#f0be64;border-bottom-style:solid;>資訊</b>'
              )
          "
        ></h3>
        <div
          v-for="(item, index) in fairview_park_lang === 'en_us'
            ? [
                {
                  title: 'Main Duty of Information Technology Department',
                  list: [
                    'Provide technical support service to all departments for all equipment and system related to information technology, including Server, Workstation, Intranet and Administration System, and Hardware and Software installation and maintenance service.',
                  ],
                },
                {
                  title:
                    'Other systems in Fairview Park related to information technology',
                  list: [
                    'Provide maintenance service for Fairview Park Website and all IT Systems such as Resident Smart Card System, CCTV System, Electronic Door Look System, Main Gate and Bus Stop Information Display System.',
                  ],
                },
              ]
            : [
                {
                  title: '資訊科技部主要工作',
                  list: [
                    '負責錦綉花園管理處各部門之資訊科技相關技術之支援工作，包括所有伺服器、工作站、內聯網及各行政系統以及軟硬件安裝及維護等。',
                  ],
                },
                {
                  title: '錦綉花園屋苑範圍內與資訊科技相關之工作',
                  list: [
                    '工作範圍包括維護錦綉花園網站及所有與資訊科技相關的系統，例如住戶智能咭系統、閉路電視系統、電子門鎖、大閘及巴士站訊息公告系統等。',
                  ],
                },
              ]"
          :key="index"
        >
          <li class="li">{{ item.title }}</li>
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
    padding: 10px 0;
    h3 {
      font-size: 20px;
      color: #3a6547;
      margin-bottom: 20px;
    }
    .li {
      list-style: disc;
      margin-bottom: 10px;
      color: #3a6547;
      font-weight: bold;
    }
    ul {
      padding: 0px 0 15px 0px;
      li {
        font-size: 15px;
        list-style-type: disc;
        font-family: "Quicksand";
        font-weight: 700;
        color: #3a6547;
        list-style: none;
        
      }
    }
  }
}
</style>
