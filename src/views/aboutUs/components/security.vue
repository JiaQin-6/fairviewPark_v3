<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:05:48
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
       
        <p style="font-size: 36px; color: #9cc212; font-weight: bold">
          {{ $t("Security") }}
        </p>
        <p>
          {{
            fairview_park_lang === "en_us"
              ? "The main role of Security Department is to protect the peaceful and safe environment of Fairview Park to ensure every household enjoys living in Fairview Park. All security staff possess Security Personnel Permits issued by the Hong Kong Police Force. Their duties include:"
              : "保安部主要職務是保護錦綉花園和諧及安全的環境，令家家戶戶得以安居樂業。所有保安員均持有警務處發出之保安人員許可証，職務範圍如下︰"
          }}
        </p>
        <div
          v-for="(item, index) in fairview_park_lang === 'en_us'
            ? [
                {
                  title: 'Main Gate Security',
                  list: [
                    'Security control at the main gate includes checking incoming and departing vehicles in order to prevent crime.',
                  ],
                },
                {
                  title: 'Security Patrol',
                  list: [
                    'Security Department uses advanced electronic security patrol system and arranges security staff patrol around the estate by patrol cars, bicycles and on foot.',
                  ],
                },
                {
                  title: 'Security Control Room',
                  list: [
                    'The security control room is located on the 1/F of the Management Office and operates 24 hours daily. The duty staff is responsible for answering residents’ enquiries and dealing with complaints and emergencies.',
                  ],
                },
                {
                  title: 'Street Parking',
                  list: [
                    'As our residential streets are not designed for street parking, it is our policy that no cars may be parked in any road, street or common area. Any violating car will be impounded without warning.',
                    'We will charge the impounded or towed vehicle the following fees:',
                    'Impounding charge -------- HK$ 320.00</br>Towing charge -------------- HK$ 350.00</br>Storage charge ------------- HK$ 320.00 per day',
                    'For the details of impounding action, the registered owner may refer to our Owners’ Zone –「Lottery System for Impounding Action」',
                  ],
                },
                {
                  title: 'Other Services',
                  list: [
                    'Security staff have to deal with traffic accidents, burglaries, fires and disputes etc. In the past, our security staff rescued people and apprehended thieves and illegal immigrants. We had assisted the Police and the Immigration Department to apprehend ten plus illegal workers in our Estate and finally referred to the Police for further handling. Furthermore, our security staff is always prepared to assist residents such as taking lost persons home.',
                    'Security Department provides service on a 24-hour basis, even during the hoist of typhoon signals, black rainstorms and bad weather.',
                  ],
                },
              ]
            : [
                {
                  title: '閘口保安',
                  list: [
                    '保安部員工於閘口查詢出入車輛，避免可疑人物及車輛進出本邨，以防止罪案發生。',
                  ],
                },
                {
                  title: '保安巡邏',
                  list: [
                    '保安部採用了先進之電子警衛巡邏系統，並安排保安員以巡邏車、單車或步行在本邨各街道巡邏。',
                  ],
                },
                {
                  title: '保安控制中心',
                  list: [
                    '保安控制中心設於管理處一樓，每日24小時運作。中心之保安人員負責解答住戶諮詢、處理業戶投訴和緊急事故。',
                  ],
                },
                {
                  title: '街道停泊',
                  list: [
                    '由於本邨的住宅街道並非為停泊車輛而設，因此，本司政策並不容許車輛泊於任何屋邨道路、街道或公用地方。任何違例停泊車輛將被鎖押而不會預先作出警告。',
                    '保安部會向每輛被鎖押之車輛收取下列的費用：',
                    '鎖上車輛收費 -------- HK$ 320.00</br>移走車輛收費 -------------- HK$ 350.00</br>存放車輛收費 ------------- HK$ 320.00 per day',
                    '有關鎖車機制詳情請業主參考業主專區「抽籤鎖車機制」。',
                  ],
                },
                {
                  title: '其他服務',
                  list: [
                    '保安員須應付突發事件，如交通意外、爆竊、火警、糾紛等。過往有保安員英勇救人，捉拿賊人和非法入境者的個案，我們過去曾協助警方及入境處人員於邨內拘捕十多名黑工，並已交警方處理。保安員亦樂意向業戶提供協助，如帶領迷途人士找尋親人。',
                    '保安部提供全日24小時之保安服務，即使在懸掛風球、黑雨及惡劣天氣下仍會繼續執行任務。',
                  ],
                },
              ]"
          :key="index"
        >
          <li class="li">{{ item.title }}</li>
          <ul>
            <li v-for="(item2, index2) in item.list" :key="index2" v-html="item2">
             
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
    padding: 10px 0;
    h3 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: normal;
    }
    p{
        font-size: 18px;
        list-style-type: disc;
        margin-bottom: 30px;
        list-style: none; 
    }
    .li {
      list-style: disc;
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
</style>
