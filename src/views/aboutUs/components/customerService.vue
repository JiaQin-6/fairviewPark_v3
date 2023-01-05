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
          {{ $t("Customer Service") }}
        </p>
        <ul>
          <li
            v-for="(item, index) in fairview_park_lang === 'en_us'
              ? [
                  'Customer Service Department receives service requests, complaints and performance feedbacks from residents and delivers the messages to the departments concerned for follow-up action aiming at further enhancing our service quality.',
                  'Customer Service Department is also responsible for organizing festive activities in the estate.',
                  'We will assign a reference number for each service request or complaint made in person, by phone or in writing so that progress can be traced and monitored easily and closely to ensure the requests or complaints are handled properly.',
                ]
              : [
                  '客戶服務部負責接收業戶的服務要求、投訴及對我們服務表現的意見，並將收到的訊息轉交予有關的部門跟進，從而提升服務質素。',
                  '客戶服務部並負責籌備及推廣本邨舉辦的節日活動。',
                  '在接獲每一宗服務要求或投訴個案，不論是透過親身、電話或書面方式，我們會給予一個檔案編號，方便日後密切跟進及監察每宗個案，務求令業戶的要求或投訴獲得最妥善的處理。',
                ]"
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
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
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
