<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-24 23:57:13
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
        <h3>{{ $t("Administration") }}</h3>
        <p>
          {{
            fairview_park_lang === "en_us"
              ? "The main duties of administration staff are listed as follows:"
              : "行政部工作主要有以下各點："
          }}
        </p>
        <div
          v-for="(item, index) in fairview_park_lang === 'en_us'
            ? [
                {
                  title: 'General Administration and Enforcement of DMC and Estate Rules',
                  list: [
                    'Administration Department collects management fees and delivers receipts, liaises with residents and persuades them to comply with the DMC and Estate Rules, follows up legal actions relating to outstanding management fee or other costs payable, or breaches of DMC and Estate Rules.',
                  ],
                },
                {
                  title: 'Communication with Residents',
                  list: [
                    'Administration Department communicates with residents through various means. It is responsible for issuing Estate Notices and Fairview Park News that serve to inform residents of the latest news affecting the estate as a whole. In addition, Administration Department’s staff will make direct face-to-face contact with residents so that both new owners and residents would be introduced to the Estate environment and become aware of important matters related to the estate and their respective properties.',
                  ],
                },
              ]
            : [
                {
                  title: '一般行政事項及執行「公契」和屋邨守則條款',
                  list: [
                    '行政部負責收取管理費及派發有關單據，與業戶接觸及勸喻業戶遵守「公契」及屋邨守則條款，跟進有關欠交管理費或其他應收取費用或違反「公契」及屋邨守則條款的法律行動。',
                  ],
                },
                {
                  title: '與業戶保持緊密聯絡',
                  list: [
                    '行政部透過不同途徑跟業戶溝通。除了定期發放屋邨通告與錦绣專訊予全邨業戶，行政部每位職員均樂意與業戶直接會面和對話，以期將本屋苑的環境介紹給新、舊業戶，讓業戶能夠更加了解本屋苑一些重要事項，與及業戶本身居住之物業的有關資料。',
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
    background-color: #e6eae5;
    padding: 20px;
    h3 {
      font-size: 20px;
      color: #3a6547;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      list-style-type: disc;
      font-family: "Quicksand";
      font-weight: 700;
      color: #3a6547;
      margin-bottom: 30px;
      list-style: none;
    }
    .li {
      list-style: disc;
      margin-bottom: 20px;
      color: #3a6547;
      font-weight: bold;
    }
    ul {
      padding: 0px 0 15px 0px;
      li {
        font-size: 16px;
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
