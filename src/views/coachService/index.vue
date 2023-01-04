<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 02:26:04
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <div
        class="img"
        style="width: 100%; height: 100%"
        :style="{ 'background-image': 'url(' + banner + ')' }"
      ></div>
      <p>
        {{ fairview_park_lang === "en_us" ? "Coach" : "專巴"
        }}{{ fairview_park_lang === "en_us" ? " Service" : "時間表" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in coach_service_content.coachServiceList"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="nav_index = index"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="menu-select"
            placeholder="Select"
            @change="
              (val) => {
                nav_index = val;
              }
            "
          >
            <el-option
              v-for="(item, index) in coach_service_content.coachServiceList"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20">
          <!--  -->
          <div align="center">
            <!-- pdf -->
            <h5
              class="title fs-18 mb-20 flex-row"
              style="text-align: left; flex-wrap: wrap"
            >
              <p
                style="text-decoration: none; margin: 0"
                v-if="coach_service_content.coachServiceList.length !== 0"
              >
                {{ coach_service_content.coachServiceList[nav_index].titleEnUs }}
              </p>
              <span
                v-if="
                  coach_service_content &&
                  coach_service_content.coachServiceList.length !== 0 &&
                  coach_service_content.coachServiceList[nav_index].launchTime
                "
                >{{
                  fairview_park_lang === "en_us"
                    ? "Effect Day : " +
                      (coach_service_content &&
                        coach_service_content.coachServiceList.length !== 0 &&
                        coach_service_content.coachServiceList[
                          nav_index
                        ].launchTime.slice(0, 10))
                    : "生效日期 : " +
                      (coach_service_content &&
                        coach_service_content.coachServiceList.length !== 0 &&
                        coach_service_content.coachServiceList[
                          nav_index
                        ].launchTime.slice(0, 10))
                }}</span
              >
            </h5>
            <!-- 时间表 -->
            <div
              v-if="
                nav_index !== coach_service_content.coachServiceList.length - 1 &&
                nav_index !== coach_service_content.coachServiceList.length - 2
              "
            >
              <table
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                v-for="(item, index) in coach_service_content.coachServiceList.length !==
                  0 && coach_service_content.coachServiceList[nav_index].sectionList"
                :key="index"
                class="fs-18 mb-30"
              >
                <tbody>
                  <tr style="width: 100%; display: inline-block; margin-bottom: 2px">
                    <td
                      height="auto"
                      :colspan="item.fleidList.length"
                      bgcolor="#9cc212"
                      style="width: 100%; display: inline-block"
                    >
                      <div align="center" style="height: 100%">
                        <span style="font-size: 24px; color: #fff; line-height: 50px">{{
                          item.titleEnUs
                        }}</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="flex-row">
                    <td
                      valign="top"
                      :bgcolor="
                        index2 % 2 === 0 ? '#fffde9' : index2 % 2 === 1 ? '#f1fcdd' : ''
                      "
                      v-for="(item2, index2) in item.fleidList"
                      :key="index2"
                      style="width: 100%; display: inline-block; margin-right: 2px"
                    >
                      <p
                        align="center"
                        class="style34"
                        style="padding: 10px 0; margin: 0; font-weight: bold"
                      >
                        {{ item2.titleEnUs }}
                      </p>
                    </td>
                  </tr>
                  <tr
                    v-if="item.fleidList.length !== 0"
                    v-for="(item2, index2) in item.fleidList[0].columnList.length"
                    :key="index2"
                    class="flex-row"
                  >
                    <td
                      valign="top"
                      :bgcolor="
                        index3 % 2 === 0 ? '#fffde9' : index3 % 2 === 1 ? '#f1fcdd' : ''
                      "
                      style="width: 100%; display: inline-block; margin-right: 2px"
                      v-for="(item3, index3) in item.fleidList.length"
                      :key="index3"
                    >
                      <p
                        align="center"
                        class="style34"
                        style="padding: 10px 0; margin: 0"
                      >
                        {{
                          item.fleidList[index3] &&
                          item.fleidList[index3].columnList[index2] &&
                          item.fleidList[index3].columnList[index2].text
                            ? item.fleidList[index3].columnList[index2].text
                            : item.fleidList[index3].columnList[index2].textEnUs
                        }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style="text-align: left; font-size: 18px">
                {{
                  fairview_park_lang === "en_us"
                    ? "*Expected arrival time"
                    : "*預計抵達時間"
                }}
              </p>
              <table
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                v-if="
                  coach_service_content.coachServiceList.length !== 0 &&
                  coach_service_content.coachServiceList[nav_index].endModuleList
                    .length !== 0
                "
              >
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td
                              valign="top"
                              v-for="(item, index) in coach_service_content
                                .coachServiceList[nav_index].endModuleList"
                              :key="index"
                              style="font-size: 18px"
                            >
                              <p
                                class="style20"
                                style="font-weight: bold; color: rgb(156, 194, 18)"
                              >
                                {{ item.titleEnUs }}
                              </p>
                              <p v-for="(item2, index2) in item.columnList" :key="index2">
                                {{ item2.text || item2.textEnUs }}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                :href="coach_service_content.coachServiceFile"
                target="_blank"
                style="
                  display: inline-block;
                  width: 100%;
                  font-size: 18px;
                  text-align: left;
                  margin-top: 30px;
                  padding: 5px 0;
                  background-color: rgb(255, 253, 233);
                  text-decoration: none;
                "
              >
                {{
                  fairview_park_lang === "en_us"
                    ? "Estate Coach Service During Typhoon and Inclement Weather Condition"
                    : "颱風及惡劣天氣時之專車服務"
                }}
              </a>
              <p style="font-size: 18px; text-align: left; margin-top: 10px">
                {{
                  fairview_park_lang === "en_us"
                    ? "The above information is for reference only. Please refer to the latest announcement made by the coach operator as the updated information. The coach service enquiry hotline is 2471 6348."
                    : "以上資料只供參考，最新資料以專巴公司最新公佈為準， 專巴服務查詢熱線2471 6348 。"
                }}
              </p>
            </div>
            <!-- 专巴收费表 -->
            <div
              class="fs-15"
              v-if="nav_index === coach_service_content.coachServiceList.length - 2"
            >
              <div class="mb-30">
                <div style="overflow: auto; padding: 0">
                  <h5
                    style="
                      background-color: #9cc212;
                      margin: 0;
                      padding: 0;
                      color: #fff;
                      font-size: 24px;
                      line-height:50px!important;
                      height:50px;
                      min-width: 400px;
                      border-right: 2px solid #fff;
                      font-weight: normal;
                    "
                  >
                    {{
                      fairview_park_lang === "en_us" ? "COACH FARE TABLE" : "專巴收費表"
                    }}
                  </h5>
                  <ul class="flex-row" style="padding: 0; margin: 0 0 2px 0">
                    <li
                      v-for="(item, index) in [
                        {
                          text: fairview_park_lang === 'en_us' ? 'Route' : '路線',
                        },
                        {
                          text:
                            fairview_park_lang === 'en_us'
                              ? 'Fare (Non-Resident or by Cash)'
                              : '非住戶或現金票價',
                        },
                      ]"
                      :key="index"
                      style="
                        background-color: #f1fcdd;
                        font-size: 18px;
                        align-items: center;
                        text-align: center;
                        border-right: 2px solid #fff;
                        min-width: 100px;
                        font-weight: bold;
                      "
                      class="col-3 flex-row"
                    >
                      <span style="margin: 0 auto">{{ item.text }}</span>
                    </li>
                    <li class="col-6">
                      <div
                        style="
                          background-color: #f1fcdd;
                          font-size: 18px;
                          align-items: center;
                          text-align: center;
                          padding: 20px;
                          border-bottom: 2px solid #fff;
                          border-right: 2px solid #fff;
                          min-width: 200px;
                          font-weight: bold;
                        "
                        class="col-12 flex-row"
                      >
                        <span style="margin: 0 auto">{{
                          fairview_park_lang === "en_us" ? "Octopus Card" : "八達通咭"
                        }}</span>
                      </div>
                      <div class="flex-row col-12">
                        <div
                          v-for="(item, index) in [
                            {
                              text:
                                fairview_park_lang === 'en_us'
                                  ? 'Fare of Registered Resident'
                                  : '已登記住戶票價',
                            },
                            {
                              text:
                                fairview_park_lang === 'en_us'
                                  ? 'Fare of Registered Resident (Elderly and Children)'
                                  : '已登記住戶 (長者及小童)票價',
                            },
                          ]"
                          :key="index"
                          style="
                            background-color: #f1fcdd;
                            font-size: 18px;
                            align-items: center;
                            text-align: center;
                            padding: 20px 0;
                            min-width: 100px;
                            border-right: 2px solid #fff;
                            font-weight: bold;
                          "
                          class="col-6 flex-row"
                        >
                          <span style="margin: 0 auto">{{ item.text }}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul
                    v-for="(item, index) in coach_service_content.lineMoneyList"
                    :key="index"
                    class="flex-row"
                    style="padding: 0; margin: 0 0 2px 0"
                  >
                    <li
                      style="
                        background-color: #fffde9;
                        font-size: 18px;
                        align-items: center;
                        text-align: center;

                        border-right: 2px solid #fff;
                        padding: 20px;
                        min-width: 100px;
                      "
                      class="col-3 flex-row"
                    >
                      <span style="margin: 0 auto">{{ item.title }}</span>
                    </li>
                    <li
                      v-for="(item2, index2) in JSON.parse(item.moneyJson)"
                      :key="index2"
                      style="
                        background-color: #fffde9;
                        font-size: 18px;
                        align-items: center;
                        text-align: center;
                        border-right: 2px solid #fff;
                        padding: 20px;
                        min-width: 100px;
                      "
                      class="col-3 flex-row"
                    >
                      <span style="margin: 0 auto">{{
                        item2.price
                          ? "$" + item2.price
                          : fairview_park_lang === "en_us"
                          ? "Not Applicable"
                          : "不適用"
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p style="text-align: left; font-size: 18px">
                <b>{{
                  fairview_park_lang === "en_us"
                    ? "Estate Coach Fare Discount"
                    : "乘車優惠"
                }}</b>
              </p>
              <p style="text-align: left; font-size: 18px">
                {{
                  fairview_park_lang === "en_us"
                    ? "Residents who would like to enjoy the concessionary fare for resident"
                    : "住戶如希望享有乘車優惠，"
                }}
                <u>{{
                  fairview_park_lang === "en_us"
                    ? "must register with the Estate Management Office"
                    : "必須於管理公司作出登記"
                }}</u
                >，
                {{
                  fairview_park_lang === "en_us"
                    ? "It will take 3 working days for processing after registration. Next Monday will be counted as the first working day if the registration is made on Friday or Saturday. Residents who have their “Residents Smart Card” and registered their suitable Octopus Cards do not need to submit the application again."
                    : "生效日期為登記後三個工作天起計，如在週五或週六登記，將會當下週一登記計算。早前已申請住戶智能咭並登記其合適八達通咭的住戶，則無需再次登記。"
                }}
              </p>
              <p
                style="text-align: left; font-size: 18px"
                v-html="
                  fairview_park_lang === 'en_us'
                    ? 'Besides, residents aged 60 to 64 who registered with the Owner’s Association of Fairview Park for enjoying the half fare concessions <u>need to register their Personalised Octopus Cards with the Estate Management Office again.</u>'
                    : '此外，已於「錦綉花園業主聯會」登記乘車優惠之60至64歲住戶亦<u>須重新登記其個人八達通</u>，方享有半價乘車優惠。'
                "
              ></p>
              <div class="mb-30" style="margin-top: 30px">
                <div style="overflow: auto; padding: 0">
                  <h5
                    style="
                      background-color: #9cc212;
                      margin: 0;
                      padding: 0;
                      color: #fff;
                      font-size: 24px;
                      line-height:50px!important;
                      height:50px;
                      border-right: 2px solid #fff;
                      min-width: 682px;
                      font-weight: normal;
                    "
                  >
                    {{
                      fairview_park_lang === "en_us"
                        ? "The benefits and their requirements"
                        : "乘車優惠及條件"
                    }}
                  </h5>
                  <table style="width: 100%; text-align: center">
                    <tr style="">
                      <th
                        rowspan="5"
                        style="
                          width: 10%;
                          background-color: #f1fcdd;
                          border: 2px solid #fff;
                          min-width: 90px;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Age" : "年齡" }}
                      </th>
                      <th
                        style="
                          width: 15%;
                          background-color: #f1fcdd;
                          padding: 15px;
                          border: 2px solid #fff;
                          min-width: 100px;
                          font-weight: bold;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Resident" : "住戶" }}
                      </th>
                      <th
                        style="
                          width: 25%;
                          background-color: #f1fcdd;
                          padding: 15px;
                          border: 2px solid #fff;
                          min-width: 165px;
                          font-weight: bold;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Requirements" : "條件" }}
                      </th>
                      <th
                        style="
                          width: 25%;
                          background-color: #f1fcdd;
                          padding: 15px;
                          border: 2px solid #fff;
                          min-width: 165px;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us"
                            ? "Type of Octopus Card"
                            : "適用之八達通咭"
                        }}
                      </th>
                      <th
                        style="
                          width: 25%;
                          background-color: #f1fcdd;
                          padding: 15px;
                          border: 2px solid #fff;
                          min-width: 160px;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Benefit" : "享有優惠" }}
                      </th>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us" ? "from 4 to＜13" : "4至＜13歲"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                        rowspan="4"
                      >
                        {{
                          fairview_park_lang === "en_us"
                            ? "Must apply for a Residents Smart Card and register a suitable Octopus Card at the Estate Management Office"
                            : "於管理公司已申請住戶智能咭及登記其合適八達通咭"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Children" : "兒童八達通" }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Half Fare" : "半價" }}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us" ? "from 13 to＜60" : "13至＜60歲"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us"
                            ? "Adult or Personalised"
                            : "成人或個人八達通"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us"
                            ? "Resident Privilege"
                            : "住戶優惠"
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us" ? "from 60 to＜65" : "60至＜65歲"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us" ? "Personalised" : "個人八達通"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Half Fare" : "半價" }}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us" ? "at or above 65" : "65或以上"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{
                          fairview_park_lang === "en_us"
                            ? "Elderly or Personalised"
                            : "長者或個人八達通"
                        }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Half Fare" : "半價" }}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ fairview_park_lang === "en_us" ? "Non-Resident" : "非住戶" }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                        colspan="4"
                      >
                        {{
                          fairview_park_lang === "en_us" ? "No Benefit" : "無任何乘車優惠"
                        }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <p style="font-size: 18px; text-align: left; margin-top: 50px">
                {{
                  fairview_park_lang === "en_us"
                    ? "The above information is for reference only. Please refer to the latest announcement made by the coach operator as the updated information. The coach service enquiry hotline is 2471 6348."
                    : "以上資料只供參考，最新資料以專巴公司最新公佈為準， 專巴服務查詢熱線2471 6348 。"
                }}
              </p>
            </div>
            <!-- 免费穿梭巴士 -->
            <div
              class="free-bus"
              v-if="nav_index === coach_service_content.coachServiceList.length - 1"
            >
              <div class="table">
                <h5>
                  {{
                    fairview_park_lang === "en_us"
                      ? "No.1 Blue Route Shuttle Bus "
                      : "一號藍線巴士"
                  }}
                </h5>
                <div style="display: flex;border: none;">
                  <p style="width: 50%">
                    {{
                      fairview_park_lang === "en_us"
                        ? "From Bus Terminus"
                        : "巴士總站開出"
                    }}
                  </p>
                  <p style="width: 50%">
                    {{
                      fairview_park_lang === "en_us"
                        ? "From Bus Terminus"
                        : "巴士總站開出"
                    }}
                  </p>
                </div>

                <ul>
                  <li
                    v-for="(item, index) in [
                      {
                        index1: '1.',
                        time1: '10:30',
                        index2: '10.',
                        time2: '15:00',
                      },
                      {
                        index1: '2.',
                        time1: '11:00',
                        index2: '11.',
                        time2: '15:30',
                      },
                      {
                        index1: '3.',
                        time1: '11:30',
                        index2: '12.',
                        time2: '16:00',
                      },
                      {
                        index1: '4.',
                        time1: '12:00',
                        index2: '13.',
                        time2: '16:30',
                      },
                      {
                        index1: '5.',
                        time1: '12:30',
                        index2: '14.',
                        time2: '17:00',
                      },
                      {
                        index1: '6.',
                        time1: '13:00',
                        index2: '15.',
                        time2: '17:30',
                      },
                      {
                        index1: '7.',
                        time1: '13:30',
                        index2: '16.',
                        time2: '18:00',
                      },
                      {
                        index1: '8.',
                        time1: '14:00',
                        index2: '17.',
                        time2: '18:30',
                      },
                      {
                        index1: '9.',
                        time1: '14:30',
                        index2: '18.',
                        time2: '19:00',
                      },
                    ]"
                    :key="index"
                    class="flex-row"
                  >
                    <span style="text-align: center">
                      <div style="width: 150px; text-align: left; margin: 0 auto">
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index1
                        }}</i
                        >{{ item.time1 }}
                      </div></span
                    >
                    <span>
                      <div style="width: 150px; text-align: left; margin: 0 auto">
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index2
                        }}</i
                        >{{ item.time2 }}
                      </div></span
                    >
                  </li>
                </ul>
              </div>
              <!-- 線路圖 -->
              <div>
                <p style="text-align: left" class="fs-18">
                  {{
                    fairview_park_lang === "en_us"
                      ? "Shuttle Bus Routing:"
                      : "巴士途徑路線如下 :"
                  }}
                </p>
                <div
                  class="img"
                  style="
                    width: 100%;
                    max-width: 500px;
                    max-height: 500px;
                    background-color: #ccc;
                  "
                >
                  <img style="width: 100%" :src="router2_blue" alt="" />
                </div>
                <div style="width: 100%">
                  <img
                    style="width: 100%"
                    :src="fairview_park_lang === 'en_us' ? router1_en : router1"
                    alt=""
                  />
                </div>
              </div>
              <!--  -->
              <div class="table mt-30">
                <h5>
                  {{
                    fairview_park_lang === "en_us"
                      ? "No.2 Red Route Shuttle Bus"
                      : "二號红線巴士"
                  }}
                </h5>
                <div style="display: flex;border: none;">
                  <p style="width: 50%">
                    {{
                    fairview_park_lang === "en_us" ? "From Bus Terminus" : "巴士總站開出"
                  }}
                  </p>
                  <p style="width: 50%">
                    {{
                    fairview_park_lang === "en_us" ? "From Bus Terminus" : "巴士總站開出"
                  }}
                  </p>
                </div>
                <ul>
                  <li
                    v-for="(item, index) in [
                      {
                        index1: '1.',
                        time1: '10:30',
                        index2: '10.',
                        time2: '15:00',
                      },
                      {
                        index1: '2.',
                        time1: '11:00',
                        index2: '11.',
                        time2: '15:30',
                      },
                      {
                        index1: '3.',
                        time1: '11:30',
                        index2: '12.',
                        time2: '16:00',
                      },
                      {
                        index1: '4.',
                        time1: '12:00',
                        index2: '13.',
                        time2: '16:30',
                      },
                      {
                        index1: '5.',
                        time1: '12:30',
                        index2: '14.',
                        time2: '17:00',
                      },
                      {
                        index1: '6.',
                        time1: '13:00',
                        index2: '15.',
                        time2: '17:30',
                      },
                      {
                        index1: '7.',
                        time1: '13:30',
                        index2: '16.',
                        time2: '18:00',
                      },
                      {
                        index1: '8.',
                        time1: '14:00',
                        index2: '17.',
                        time2: '18:30',
                      },
                      {
                        index1: '9.',
                        time1: '14:30',
                        index2: '18.',
                        time2: '19:00',
                      },
                    ]"
                    :key="index"
                    class="flex-row"
                  >
                    <span style="text-align: center">
                      <div style="width: 150px; text-align: left; margin: 0 auto">
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index1
                        }}</i
                        >{{ item.time1 }}
                      </div></span
                    >
                    <span>
                      <div style="width: 150px; text-align: left; margin: 0 auto">
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index2
                        }}</i
                        >{{ item.time2 }}
                      </div></span
                    >
                  </li>
                </ul>
              </div>
              <!-- 線路圖 -->
              <div>
                <p style="text-align: left" class="fs-18">
                  {{
                    fairview_park_lang === "en_us"
                      ? "Shuttle Bus Routing:"
                      : "巴士途徑路線如下 :"
                  }}
                </p>
                <div
                  class="img"
                  style="
                    width: 100%;
                    max-width: 500px;
                    max-height: 500px;
                    background-color: #ccc;
                  "
                >
                  <img style="width: 100%" :src="Routing_Red" alt="" />
                </div>
                <div style="width: 100%">
                  <img
                    style="width: 100%"
                    :src="fairview_park_lang === 'en_us' ? router2_en : router2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      banner: new URL(
        "../../assets/image/common-banner/coach-service.jpg",
        import.meta.url
      ).href,
      router1: new URL("../../assets/image/coach service/route1.gif", import.meta.url)
        .href,
      router1_en: new URL(
        "../../assets/image/coach service/route1_en.jpeg",
        import.meta.url
      ).href,
      router2: new URL("../../assets/image/coach service/route2.gif", import.meta.url)
        .href,
      router2_en: new URL(
        "../../assets/image/coach service/route2_en.jpeg",
        import.meta.url
      ).href,
      router2_blue: new URL(
        "../../assets/image/coach service/Routing_Blue.jpeg",
        import.meta.url
      ).href,
      Routing_Red: new URL(
        "../../assets/image/coach service/Routing_Red.jpeg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      coach_service_content: {
        coachServiceList: [],
        lineMoneyList: [],
        coachServiceFile: null,
      },
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看 價格表 列表
    const findLineMoneyList = async (id) => {
      try {
        const res = await proxy.$http.findLineMoneyList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.coach_service_content.lineMoneyList = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //查看专车 pdf 链接
    const findOneCoachServiceFile = async (id) => {
      try {
        const res = await proxy.$http.findOneCoachServiceFile({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.coach_service_content.coachServiceFile = res.data.data.pdfUrlEnUs;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //查看 時間表
    const findCoachServiceList = async (id) => {
      try {
        const res = await proxy.$http.findCoachServiceList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          res.data.data.pageResult.records.map((item, index) => {
            item.index = index;
          });
          data.coach_service_content.coachServiceList = res.data.data.pageResult.records.concat(
            [
              {
                titleEnUs:
                  data.fairview_park_lang === "en_us" ? "Coach Fare Table" : "專巴收費表",
                index: res.data.data.pageResult.records.length,
              },
              {
                titleEnUs:
                  data.fairview_park_lang === "en_us"
                    ? "Free Shuttle Bus"
                    : "邨内免費穿梭巴士",
                index: res.data.data.pageResult.records.length + 1,
              },
            ]
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      findLineMoneyList();
      findOneCoachServiceFile();
      findCoachServiceList();
      document.onscroll = () =>{
        //如果滚动隐藏下拉框
        for (let i = 0; i < document.getElementsByClassName('el-popper').length; i++) {
          document.getElementsByClassName('el-popper')[i].style.display = 'none'
        }
      }
    });
    return {
      ...toRefs(data),
      findLineMoneyList,
      findOneCoachServiceFile,
      findCoachServiceList,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  overflow: hidden;
  height: 280px;

  .img {
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: bottom;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
    font-family: "Poppins-Bold", SourceHanSansCN-Regular, Arial;
    color: #fff;
    text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
    b {
      color: var(--mainColor1);
      text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
    }
  }
}
.nav-wrap {
  padding: 20px;
  .row {
    margin: 0 auto;
    .aside {
      padding: 0;
      ul {
        position: sticky;
        top: 80px;
        overflow: auto;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        background-color: #fff;
        padding: 10px;
        display: block;
        li {
          text-align: left;
          margin-bottom: 5px;
          padding: 6px 0px 6px 10px;
          box-sizing: border-box;
          cursor: pointer;
          i {
            font-size: 18px;
            margin-right: 5px;
            display: none;
            color: #000;
          }
          span {
            font-size: 18px;
            color: #000;
          }
          &:hover {
            background-color: var(--mainColor2);
            color: #fff;
            i {
              color: #fff;
            }
            span {
              color: #fff;
            }
          }
        }
        .active {
          background-color: var(--mainColor2);
          color: #fff;
          i {
            color: #fff;
            // display: inline-block;
          }
          span {
            color: #fff;
          }
        }
      }
      .menu-select {
        display: none;
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 18px;
      padding: 0px 20px;
      .title {
        align-items: center;
        justify-content: space-between;

        p {
          color: var(--mainColor3);
          font-size: 36px;
          font-weight: bold;
        }
        span {
          font-size: 18px;
        }
      }
      .free-bus {
        .table {
          h5 {
            background-color: #9cc212;
            margin: 0;
            font-weight: normal;
            color: #fff;
            border: none;
            font-size: 24px;
            height: 50px;
            line-height: 50px!important;
          }
          p {
            background-color: #fffde9;
            margin: 0;
            font-size: 18px;
            padding: 5px;
            border: none;
          }
          ul {
            border: none;
            padding: 0;
            li {
              font-size: 18px;
              background-color: #fffde9;

              span {
                width: 50%;
                padding: 5px;
                &:last-child {
                  background-color: #ffffe7;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .nav-wrap-container {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-wrap-container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap-container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-wrap-container {
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 992px) {
  .banner {
    height: 200px;
    img {
      width: auto;
    }
  }
  .nav-wrap {
    .row {
      .aside {
        ul {
          flex-wrap: nowrap;
          padding: 0;
          display: none;
          li {
            display: flex;
            text-align: center;
            align-items: center;
            span {
              margin: 0 auto;
            }
          }
        }
        @{deep} .menu-select {
          display: block;
          --el-select-input-focus-border-color: #ccc;
          .select-trigger {
            .el-input {
              font-size: 18px;
              .el-input__wrapper {
              }
            }
            .is-focus {
              border-color: #ccc;
            }
          }
        }
      }
      .nav-content{
        padding: 0;
      }
    }
  }
}
</style>
