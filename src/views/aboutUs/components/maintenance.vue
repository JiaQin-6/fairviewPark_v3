<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:05:39
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
        
        <p style="font-size: 36px; color: #9cc212; font-weight: bold">
          {{ $t("Maintenance") }}
        </p>
        <div>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'Maintenance Department carries day to day repair and maintenance works in the Estate such as repainting street plates, traffic signs, fences of public parks, checking public facilities of Town Centre such as the children playgrounds.',
                    'Maintenance Department designs and installs colorful lightings at the Open Stage, Lakeside Path and Main Gate during festivals to enrich the atmosphere.',
                    'There are 112 streets in the Estate with a total length of 27 kilometers. Good repair and maintenance of more than one thousand street lamps are vital for illumination at night. Maintenance Department checks the condition of the street lamp and notifies electricity company to follow up if there is any fault found in order to ensure reliable lighting system.',
                    'Other large scale projects like road maintenance, water and drainage pipes replacement, sewage treatment and other improvement works are carried out by contractors. Maintenance Department participates in the tender process, issues tender to reputable contractor at reasonable cost, supervises the work progress throughout and ensures the quality of works. For example, the MDPE pipe replacement phase II had been completed at the end of October 2006 which was one month earlier than the scheduled completion date. In addition, a series of renovation works including renovation of basketball court and the children playground at Golden Bamboo Road North, redesign and construction of Block E Park had also been carried out and opened for public use in early 2007. Refurbishment works of Lakeside Path have been completed in December 2008 as part of landscaping improvement scheme in Town Centre.',
                    'There is a sewage treatment plant in the Estate operating round the clock. Maintenance Department supervises the performance of the contractor in order to ensure the smooth operation of the plant. For the purpose of environmental protection and resources utilization, the treated water will be used for cleaning streets and watering plants in our Estate.',
                    'Moreover, the fountain of Central Lake and lake water circulation, the pump house and tidal gate are also operated and maintained by the Maintenance Department.',
                  ]
                : [
                    '維修部進行一般邨內日常修葺工作，例如翻髹街道名牌及交通標誌牌鐵架、公園圍牆及鐵欄杆、檢查市中心之各類公共設施如兒童遊樂場等。',
                    '每逢佳節，露天劇場、環湖徑和大閘都張燈結彩，增添節日氣氛，有關項目都是由維修部自行設計及安裝。',
                    '本邨共有大小街道112條，總長度約為27公里，夜間街道照明全賴千餘支街燈，所以街燈的良好保養及維修極之重要。維修部會檢查街燈情況，如發現街燈故障，便立即通知電力公司維修和跟進，務使邨內有良好的照明系統。',
                    '其他大型工程項目如馬路、水務、渠務修葺、污水處理以及改善項目均屬外判工程。維修部參與整個投標過程，批出合約予信譽良好及價錢合理之工程公司，並在工程施工期間內，監管外判工程公司之工作進度及質量。舉例，第二期更換水管工程已於2006年10月底較原訂時間提早一個月完工。另外，維修部亦於2007年初進行了一連串工程，包括翻新籃球場及金竹北路兒童遊樂場，以及重新設計及興建E座對開公園，並已開放予公眾使用；而環湖徑亦已於2008年12月完成重鋪地面工程，美化市中心環境。',
                    '邨內設有一座污水處理廠，24小時不停運作。維修部亦會監管外判公司之表現，以確保污水廠正常操作。為了顧及環保和善用資源，本邨會取用污水廠處理後的再用水作為洗街及灌溉花木。',
                    '此外，市中心中央湖的噴泉及湖水循環系統、泵房、河堤潮水水閘都是由維修部負責日常操作及保養維修。',
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
  padding-left: 20px;
  .container {
    padding: 0px 0;
    h3 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: normal;
    }
    ul {
      padding: 0px 0 15px 0px;
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
