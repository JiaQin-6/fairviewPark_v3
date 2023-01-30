<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:05:23
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
        <p style="font-size: 36px; color: #9cc212; font-weight: bold">
          {{ $t("Environmental Service") }}
        </p>
        <em style="font-style:normal">{{ fairview_park_lang === "en_us" ?'The main scope of work of the Environmental Services Department includes cleaning services and landscape maintenance. And the department is working for all the residents of Fairview Park.':'環境服務部主要工作範疇包括清潔服務及園藝保養兩方面，致力服務錦綉花園的居民。' }}</em>
        <div>
          <li class="li" style="font-weight:bold;">{{ fairview_park_lang === "en_us" ? "Cleaning services" : "清潔服務" }}</li>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'Environmental Services Department are responsible for refuse collection and cleaning in public areas of the whole estate to ensure a good hygienic environment.',

                    '- We will collect the domestic refuse that are packed and tied up properly in garbage bag placed outside the property every day.',

                    '- Upon residents’ request, we will collect non-domestic refuses which include used furniture, electrical appliances, sundries and tree branches etc. We will engage cart-away service to convey the refuse and charge the residents accordingly.',

                    '- We transport all collected refuse to the refuse collection point and to be dumped into the compactors. The trucks from the Food and Environmental Hygiene Department then transport the refuse to the landfills.',

                    '- We will recycling the recyclables in the Three-Coloured Waste Separation Bins every day. And the department organizes regular environmental recycling activities with contractors which under Environmental Protection Department.',
                    '- We will responsible for pest control such as rodent and mosquito. Also cleaning up the dead birds and rodent when necessary.',
                    '- In addition, Town Centre and the public streets will be cleaned every day and washed every month. Bus stops, rubbish bins, dogs’ dropping bins, facilities of children playgrounds, pebble path park, open stage, plaza and Lakeside Path will be cleaned from time to time by our staff.',
                  ]
                : [
                    '環境服務部負責收集全邨垃圾及清潔公眾地方，確保環境清潔衛生。',

                    '- 每日會安排員工到每戶收集以膠袋盛載，並放置於單位門外的家居垃圾。',

                    '- 因應住戶要求，上門清理非家居垃圾，包括舊傢俬、電器、雜物及樹枝等，本部會安排承辦商夾走有關垃圾。',

                    '- 所有收集的垃圾會被運送去垃圾房，卸於垃圾壓縮斗內，再由食環署派夾車將壓縮斗運往垃圾堆填區。',

                    '- 除每天定時回收環保三色桶內的回收物，本部亦會與環保署的承辦商定期舉辦環保回收活動。',
                    '- 負責滅鼠、滅蚊、清理死雀及死老鼠等蟲害防止的工作。',
                    '- 在市中心及住宅區清掃街道，以及每月用水車清洗街道，亦會派員清潔各巴士分站、垃圾桶、狗糞收集箱、兒童遊樂場設施、卵石徑公園、露天劇場、市中心廣場、環湖徑等等。',
                  ]"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <li class="li" style="font-weight:bold;">
            {{ fairview_park_lang === "en_us" ? "Landscape Maintenance" : "園藝保養" }}
          </li>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'Environmental Services Department are also responsible for servicing the green areas in our Estate including Town Centre, including 66 green areas and grasslands, planting trees and placing plant pots along various main roads. And beautify the Fairview Park with the landscape design from the seasonal flowers. There is also a nursery in the estate to cultivate flower seedlings and saplings for the seasonal and festival necessary.',
                    'In addition, the risks of trees had paid attention from public in recent years. There are many different types of trees in the Fairview Park. Our environmental services officer will inspect trees regularly. Once a tree with potential safety hazards is found, an arborist will be arranged for further inspection to decide trimming or removing for protecting the safety of residents.',
                  ]
                : [
                    '環境服務部亦負責保養市中心綠化地帶，包括邨內66個綠化地帶或草地、種植於錦綉各大道之樹木及擺設於街道之花槽，並以四季的園藝設計來美化錦綉花園。邨內亦有苗圃培植花苗幼樹，以備四季及節日花卉更換安排。',
                    '此外樹木的安全隱患在近年備受重視，錦綉花園內的樹木繁多，本部的園藝主任會定期巡查。一旦發現有安全隱患的樹木，會進一步安排樹藝師檢查，來決定修剪或移除樹木，保障住戶的人身及財產安全。',
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
  padding-left: 20px;
  .container {
    padding: 0px 0;
    h3 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: normal;
    }
    .li {
      margin-bottom: 20px;
      font-size: 24px;
    }
    ul {
      padding: 0px 0 0px 0px;
      li {
        font-size: 18px;
        list-style-type: disc;
        margin-bottom: 20px;
        list-style: none;
      }
    }
  }
}
@media (max-width: 991px) {
  .nav-content {
  .container {
    .row >p{
      font-size: 28px!important;
    }
    h3 {
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
