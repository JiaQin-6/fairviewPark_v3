<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-04 23:34:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:48:18
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/theOverhaulProject/components/theOverhaulProject.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p style="font-size: 36px; color: #9cc212; font-weight: bold">
      {{
        fairview_park_lang === "en_us"
          ? "The Overhaul Project"
          : "大維修"
      }}
    </p>
    <p style="font-size:18px">
      {{
        fairview_park_lang === "en_us"
          ? "The Overhaul Project refers to the Project for Replacement of Underground Water Pipes and Refurbishment of Roads."
          : "「大維修」即 更換地下喉管及行車道路翻新工程"
      }}
    </p>
    <div
      class="mb-20"
      v-for="(item, index) in [
        {
          title:
            fairview_park_lang === 'en_us'
              ? 'Estate Development Background'
              : '屋苑發展背景',
          children: [
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'The Government granted the land for Fairview Park (the “Land”) to the Developer by way of a New Grant No. 2265 dated 20 June 1975 (“New Grant”). It included certain unique and special conditions e.g. the Developer shall bear the responsibility to ensure the Land is well managed in accordance with the Deed of Mutual Covenant (“DMC”) throughout the whole term of the lease for the Land. Because of this special condition, no undivided shares could be found on this Land. This is quite different from most of the other estates or developments in Hong Kong.'
                  : '1975 年 6 月 20 日政府以一份名為新批地書第2265 號 (New Grant No.2265)的土地契約（「新批地書」）為錦綉花園發展商訂明不少獨特的條款，其中包括要求發展商確保於整個批地年期內妥善管理錦綉花園直至批地年期終止日為止。鑒於這項政府的特別規定，錦綉花園跟多數其他屋苑不同，沒有“不可分割份數” (Undivided Shares)。',
            },
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'The Government granted the land for Fairview Park (the “Land”) to the Developer by way of a New Grant No. 2265 dated 20 June 1975 (“New Grant”). It included certain unique and special conditions e.g. the Developer shall bear the responsibility to ensure the Land is well managed in accordance with the Deed of Mutual Covenant (“DMC”) throughout the whole term of the lease for the Land. Because of this special condition, no undivided shares could be found on this Land. This is quite different from most of the other estates or developments in Hong Kong.Fairview Park was completed in phases since 1979. A total number of 5024 residential house units were built. There are three primary and secondary schools, church, town centre and club house on the Land. As our Estate was built over 40 years, it appears to be an appropriate time to consider a comprehensive pipe replacement plan. Although the management fee charged is relatively low as compared with other estates or developments, no fundraising had ever been done over the last 40 years.'
                  : '錦綉花園在1979年起分階段落成，共建有5,024間花園洋房，並設有三間中小學、教會、商場及會所。至今超過40年，現在探討第一次大規模維修是正常的。儘管我們收取的管理費向來比多數大型私家屋苑較低，但屋苑過去 40 年來從未向業主要求過集資。',
            },
          ],
        },
        {
          title: fairview_park_lang === 'en_us' ? 'Title' : '業權',
          children: [
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'There are different stakeholders in the Estate:'
                  : '屋苑內擁有那些不同的持份者：',
            },
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'Private Properties:<br/>- There are over 5,000 residential units and commercial units. The operation, function as well as the financial account of the company that owns the commercial properties are independent from those of the Developer or the Estate Management. The three companies involved are three different and financially independent companies.<br/>- The DMC provides that each Owner (whether the Owners of the residential units or Owners of the commercial units) shall enjoy the same right and shall have a duty to pay his due share of the management fee and maintenance and repairing fees.'
                  : '私人物業：<br/>- 包括屋苑内的5,000多戶花園洋房住宅單位及商業物業。擁有商業物業的公司的運作、功能和賬戶，是獨立於發展商公司和物業管理公司。三間公司性質不同且財政獨立。<br/>- 在公契 (DMC) 裏，商業物業與住宅單位是被視爲一樣，擁有同樣的權利，亦需同樣遵從公契條款和履行業主的責任，同樣需要支付管理費和分攤大維修工程費其應付的份額。',
            },
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'Common Area and Facilities:<br/>- These include all estate roads, water pipes and gardens within the Estate. It is true for some estates or developments that the common areas have been allocated with undivided shares and thus are commonly owned by the owners. However, it was not the case for our Estate that all common areas and facilities are owned by the Developer.'
                  : '共用空間及服務設施：<br/>- 這包括屋苑内的道路、水管、公園等。有些屋苑的共用空間配了不可分割份數，並由業主共同持有當中的份數；而有些屋苑的共用空間及設施則由發展商擁有。',
            },
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'Although the estate roads and common areas are owned by the Developer, it was stipulated in the New Grant that certain lands shall be set aside for public utilities use and certain land shall be surrendered to the Government on demand free of cost. The New Grant also provides that any private streets, roads and lanes which are required to be constructed shall be handed over to the Government free of cost if so required.'
                  : '雖然發展商擁有屋苑道路及其他共用空間，但根據政府新批地書的規定，政府要求發展商預留土地作公共事業用途，並當政府認為有需要時，必須在無條件下交出有關土地。同時亦列明政府可在無任何條件下收回錦綉花園內的所有道路。',
            },
          ],
        },
        {
          title: fairview_park_lang === 'en_us' ? 'Managing Duty' : '管理權',
          children: [
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'It is provided in the New Grant that the Developer shall bear the responsibility to ensure the Land is well managed in accordance with the DMC and thus the Developer establish “Fairview Park Property Management Limited” (the Estate Management) in order to take care of the daily management of the Estate. Such a managing duty for the Developer was expressly stated in the New Grant notwithstanding the fact as to whether the Developer owns any property or what it owns.'
                  : '新批地書列明發展商必須按照公契妥善管理屋苑，以確保發展商承擔有關責任。為此，發展商成立「錦綉花園物業管理有限公司」按公契負責屋苑的日常管理。由「錦綉花園物業管理有限公司」管理屋苑，是發展商履行新批地書的責任，無論發展商是否擁有任何業權或業權的大小，都必須妥善管理此屋苑。此新批地書要求的屋苑管理責任，亦與任何業主擁有的物業種類或面積大小完全沒有關係。',
            },
            {
              text:
                fairview_park_lang === 'en_us'
                  ? 'The concepts of “Title” and “Managing Duty” are two different concepts. In order to uphold a better communication with our residents, the Fairview Park Management Advisory Committee (“MAC”) was formed 20 years ago by way of election by the owners of the Estate.'
                  : '「業權」和「管理權」是兩個不同的概念，兩者不應混淆。管理公司爲了建立良好的居民溝通橋梁及意見平台，20年前成立了透過由各業主選舉產生每段代表的錦綉花園管理諮詢委員會 (MAC)。',
            },
          ],
        },
      ]"
      :key="index"
    >
      <h5 style="background-color: #389818; color: #fff; font-size: 18px; padding: 5px">
        {{ item.title }}
      </h5>
      <p
        style="font-size: 18px; padding: 10px 20px; margin: 0"
        v-for="(item2, index2) in item.children"
        :key="index2"
        v-html="item2.text"
      ></p>
    </div>
    <!-- 大維修影片 -->
    <div>
      <h5 style="background-color: #389818; color: #fff; font-size: 16px; padding: 5px">
        {{
          fairview_park_lang === "en_us" ? "Overhaul Project Video" : "「大維修」資訊影片"
        }}
      </h5>
      <div style="text-align: center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bjW8bxYGMC8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- 大維修資訊 -->
    <div>
      <h5 style="background-color: #389818; color: #fff; font-size: 16px; padding: 5px">
        {{
          fairview_park_lang === "en_us" ? "Overhaul Project Information" : "大維修資訊"
        }}
      </h5>
      <div style="text-align: center">
        <div id="viewer" style="width: 100%; height: 600px; margin: 0 auto"></div>
      </div>
    </div>
    <!-- 2021年5月24日 宣傳單張 2021年4月12日 宣傳單張 -->
    <div
      v-for="(item, index) in [
        {
          title:
            fairview_park_lang === 'en_us'
              ? '24 May 2021 Leaflet'
              : '2021年5月24日 宣傳單張',
          children: [
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet2e_eng_1.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet2e_chi_1.jpg',
            },
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet2e_eng_2.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet2e_chi_2.jpg',
            },
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet2e_eng_3.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet2e_chi_3.jpg',
            },
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet2e_eng_4.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet2e_chi_4.jpg',
            },
          ],
        },
        {
          title:
            fairview_park_lang === 'en_us'
              ? '12 April 2021 Leaflet'
              : '2021年4月12日 宣傳單張',
          children: [
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet_eng_1.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet_chi_1s.jpg',
            },
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet_eng_2.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet_chi_2s.jpg',
            },
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet_eng_3.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet_chi_3s.jpg',
            },
            {
              url:
                fairview_park_lang === 'en_us'
                  ? 'https://www.fairviewpark.hk/eng/overhaul/leaflet_eng_4.jpg'
                  : 'https://www.fairviewpark.hk/cn/overhaul/leaflet_chi_4s.jpg',
            },
          ],
        },
      ]"
      :key="index"
    >
      <h5 style="background-color: #389818; color: #fff; font-size: 16px; padding: 5px">
        {{ item.title }}
      </h5>
      <div style="text-align: center" class="flex-row">
        <div
          class="col-lg-3 demo-image__preview"
          v-for="(item2, index2) in item.children"
          :key="index2"
          style="padding: 10px"
        >
          <el-image
            class="el-image"
            style="width: 100%"
            :src="item2.url"
            :preview-src-list="[item2.url]"
            fit="cover"
          />
        </div>
      </div>
      <p style="font-size: 15px">
        {{ fairview_park_lang === "en_us" ? "*Click to enlarge" : "*點選宣傳單張放大" }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFJSExpress from "@pdftron/pdfjs-express";
export default {
  data() {
    return {
      banner: new URL("../../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      tohpByFpn: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 业主手册及地图 列表
    const findTohpByFpn = async () => {
      try {
        const res = await proxy.$http.findTohpByFpn({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.tohpByFpn = res.data.data.fileEnUs;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findTohpByFpn();
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc: data.tohpByFpn,
        },
        document.getElementById("viewer")
      ).then((instance) => {
        // use APIs here
      });
    });
    return {
      ...toRefs(data),
      findTohpByFpn,
    };
  },
};
</script>

<style lang="less" scoped>
.el-image {
  &:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    transition: 0.3s;
  }
}
</style>
