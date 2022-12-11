<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-11 23:35:08
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
        <h3
          style="color: #000; font-size: 32px; margin-bottom: 30px; font-weight: bold"
          v-html="
            $t('Environmental Service')
              .replace(
                'Environmental',
                '<b style=border-bottom-width:4px;border-bottom-color:#f0be64;border-bottom-style:solid;>Environmental</b>'
              )
              .replace(
                '環境',
                '<b style=border-bottom-width:4px;border-bottom-color:#f0be64;border-bottom-style:solid;>環境</b>'
              )
          "
        ></h3>
        <div>
          <li class="li">{{fairview_park_lang==='en_us'?'Cleaning':'清潔'}}</li>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'Environmental Services Department is responsible for refuse collection and cleaning in public areas of the whole estate to ensure a good hygienic environment.',

                    'We will collect the domestic refuse that are packed and tied up properly in PVC bags placed outside the property everyday.',

                    'Upon residents’ request, we will collect non-domestic refuses which include used furniture, electrical appliances, sundries and tree branches etc. We will engage cart-away service to convey the refuse and charge the residents accordingly.',

                    'We transport all collected refuse to the refuse collection point and to be dumped into the compactors. The trucks from the Food and Environmental Hygiene Department then transport the refuse to the landfills.',

                    'In addition, Town Centre and the public streets will be cleaned every day and washed every month. Central Lake, Fairview River, protective bund, bus stops, rubbish bins, dogs’ dropping bins, facilities of children playgrounds, pebble path park, open stage, plaza and Lakeside Path etc will be cleaned from time to time by our staff.',
                  ]
                : [
                    '環境服務部負責收集全邨垃圾及清潔公眾地方，確保環境清潔衛生。',

                    '我們每日會安排員工到每戶收集以膠袋盛載及捆紮，並放置於單位外之家居垃圾。',

                    '我們亦會應業戶要求，上門清理非家居垃圾，包括舊傢俬、電器、雜物及樹枝等，本公司會僱用街車夾走並向業戶收取有關費用。',

                    '收集的所有垃圾會被運往垃圾房，卸於垃圾壓縮箱內，由食環署派鈎車將壓縮箱運往垃圾堆填區。',

                    '另外，我們每天會在市中心及住宅區清掃街道，以及每月用水車清洗街道，亦會不時派員清理中央湖、錦綉河、外圍之渠道、保護堤等、清潔各巴士分站、垃圾桶、狗糞收集箱、兒童遊樂場設施、卵石徑公園、露天劇場、廣場、環湖徑等。',
                  ]"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <li class="li">{{fairview_park_lang==='en_us'?'Landscape Maintenance':'園藝保養'}}</li>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'We are also responsible for servicing the green areas in our Estate including Town Centre, over 60 green areas and grasslands, planting trees and placing plant pots along various main roads. We will continuously improve the landscape design in order to beautify our Estate.',
                    'Furthermore, we will feed and take care of the black and white swans in Central Lake and monitor their health condition.',
                  ]
                : [
                    '環境服務部亦負責保養市中心綠化地帶，包括邨內逾60個綠化地帶或草地、種植於錦綉各大道之樹木及擺設於街道之花槽，並不斷創新園藝設計，以美化本邨。',
                    '此外，我們會悉心餵飼及照顧中央湖之黑、白天鵝，同時監察牠們的健康狀況。',
                  ]"
              :key="index"
            >
              {{ item }}
            </li>
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
    .li{
        list-style: disc;
        margin-bottom: 20px;
        color: #3a6547;
        font-weight: bold;
    }
    ul {
      padding: 0px 0 0px 0px;
      li {
        font-size: 15px;
        list-style-type: disc;
        font-weight: 700;
        color: #3a6547;
        margin-bottom: 20px;
        list-style:none;
      }
    }
  }
}
</style>
