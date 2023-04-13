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
        {{ $t("headed.Coach_Service") }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row animate__animated animate__fadeInLeft">
            <li
              v-for="(item, index) in coach_service_content.coachServiceList"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="selectNav(index)"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            v-if="coach_service_content.coachServiceList.length > 0"
            size="large"
            v-model="nav_index"
            class="menu-select"
            @change="
              (val) => {
                selectNav(val);
              }
            "
            :teleported="false"
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
          <div align="center" class="animate__animated animate__fadeInRight">
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
                  $t("coach_service.Effect_Day") +
                  (coach_service_content &&
                    coach_service_content.coachServiceList.length !== 0 &&
                    coach_service_content.coachServiceList[nav_index].launchTime.slice(
                      0,
                      10
                    ))
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
                        <span
                          class="subTitle"
                          style="font-size: 24px; color: #fff; line-height: 50px"
                          >{{ item.titleEnUs }}</span
                        >
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
                    v-for="(item2, index2) in getColMaxLength(item.fleidList)"
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
                          item.fleidList[index3].columnList[index2] &&
                          item.fleidList[index3].columnList[index2].textEnUs
                            ? item.fleidList[index3].columnList[index2].textEnUs
                            : ""
                        }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style="text-align: left; font-size: 18px">
                {{ $t("coach_service.Expected_arrival_time") }}
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
                    <td
                      valign="top"
                      v-for="(item, index) in coach_service_content.coachServiceList[
                        nav_index
                      ].endModuleList"
                      :key="index"
                      style="
                        font-size: 18px;
                        padding-right: 5px;
                        color: rgb(156, 194, 18);
                        font-weight: bold;
                      "
                    >
                      {{ item.titleEnUs }}
                    </td>
                  </tr>
                  <tr
                    valign="top"
                    v-for="(item, index) in getColMaxLength(
                      coach_service_content.coachServiceList[nav_index].endModuleList
                    )"
                    :key="index"
                    style="font-size: 18px"
                  >
                    <td
                      valign="top"
                      v-for="(item2, index2) in coach_service_content.coachServiceList[
                        nav_index
                      ].endModuleList"
                      :key="index2"
                      style="font-size: 18px"
                    >
                      {{
                        coach_service_content.coachServiceList[nav_index].endModuleList[
                          index2
                        ].columnList[index] &&
                        coach_service_content.coachServiceList[nav_index].endModuleList[
                          index2
                        ].columnList[index].textEnUs
                          ? coach_service_content.coachServiceList[nav_index]
                              .endModuleList[index2].columnList[index].textEnUs
                          : ""
                      }}
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
                {{ $t("coach_service.content_1") }}
              </a>
              <p style="font-size: 18px; text-align: left; margin-top: 10px">
                {{ $t("coach_service.content_2") }}
              </p>
            </div>
            <!-- 专巴收费表 -->
            <div
              class="fs-15 price-table"
              v-if="nav_index === coach_service_content.coachServiceList.length - 2"
            >
              <!--  -->
              <div class="mb-30">
                <div style="overflow: auto; padding: 0">
                  <h5
                    style="
                      background-color: #9cc212;
                      margin: 0;
                      padding: 0;
                      color: #fff;
                      font-size: 24px;
                      line-height: 50px !important;
                      height: 50px;
                      min-width: 400px;
                      border-right: 2px solid #fff;
                      font-weight: normal;
                    "
                  >
                    {{ $t("coach_service.COACH_FARE_TABLE") }}
                  </h5>
                  <ul class="flex-row" style="padding: 0; margin: 0 0 2px 0">
                    <li
                      v-for="(item, index) in [
                        {
                          text: $t('coach_service.Route'),
                        },
                        {
                          text: $t('coach_service.Fare'),
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
                          $t("coach_service.Octopus_Card")
                        }}</span>
                      </div>
                      <div class="flex-row col-12">
                        <div
                          v-for="(item, index) in [
                            {
                              text: $t('coach_service.Fare_of_Registered_Resident'),
                            },
                            {
                              text: $t(
                                'coach_service.Fare_of_Registered_Resident_Elderly_and_Children'
                              ),
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
                          : $t("coach_service.Not_Applicable")
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!--  -->
              <!-- <p style="text-align: left; font-size: 18px">
                <b>{{ $t("coach_service.Estate_Coach_Fare_Discount") }}</b>
              </p>
              <p style="text-align: left; font-size: 18px">
                {{ $t("coach_service.content_3") }}
                <u>{{ $t("coach_service.content_4") }}</u>
                {{ $t("coach_service.content_5") }}
              </p>
              <p
                style="text-align: left; font-size: 18px"
                v-html="$t('coach_service.content_6')"
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
                      line-height: 50px !important;
                      height: 50px;
                      border-right: 2px solid #fff;
                      min-width: 682px;
                      font-weight: normal;
                    "
                  >
                    {{ $t("coach_service.content_7") }}
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
                        {{ $t("coach_service.Age") }}
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
                        {{ $t("coach_service.Resident") }}
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
                        {{ $t("coach_service.Requirements") }}
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
                        {{ $t("coach_service.Type_of_Octopus_Card") }}
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
                        {{ $t("coach_service.Benefit") }}
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
                        {{ $t("coach_service.from_4_to_13") }}
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
                        {{ $t("coach_service.content_8") }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Children") }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Half_Fare") }}
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
                        {{ $t("coach_service.from_13_to_60") }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Adult_or_Personalised") }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Resident_Privilege") }}
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
                        {{ $t("coach_service.from_60_to_65") }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Personalised") }}
                      </td>
                      <td
                        style="
                          background-color: #fffde9;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Half_Fare_2") }}
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
                        {{ $t("coach_service.at_or_above_65") }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Elderly_or_Personalised") }}
                      </td>
                      <td
                        style="
                          background-color: #f9fcf0;
                          padding: 15px;
                          border: 2px solid #fff;
                          font-size: 18px;
                        "
                      >
                        {{ $t("coach_service.Half_Fare_3") }}
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
                        {{ $t("coach_service.Non_Resident") }}
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
                        {{ $t("coach_service.No_Benefit") }}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <p style="font-size: 18px; text-align: left; margin-top: 50px">
                  {{ $t("coach_service.content_2") }}
                </p> -->
              <div class="content">
                <div style="width: 100%; padding: 20px 0" id="price-table"></div>
                <p style="font-size: 18px; text-align: left; margin-top: 50px">
                  {{ $t("coach_service.content_2") }}
                </p>
              </div>
            </div>
            <!-- 免费穿梭巴士 -->
            <div
              class="free-bus"
              v-if="nav_index === coach_service_content.coachServiceList.length - 1"
            >
              <div class="table">
                <h5>
                  {{ $t("coach_service.free_bus.No_1_Blue_Route_Shuttle_Bus") }}
                </h5>
                <div style="display: flex; border: none">
                  <p style="width: 50%">
                    {{ $t("coach_service.free_bus.From_Bus_Terminus") }}
                  </p>
                  <p style="width: 50%">
                    {{ $t("coach_service.free_bus.From_Bus_Terminus") }}
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
                      </div>
                    </span>
                    <span>
                      <div style="width: 150px; text-align: left; margin: 0 auto">
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index2
                        }}</i
                        >{{ item.time2 }}
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
              <!-- 線路圖 -->
              <div>
                <p style="text-align: left" class="fs-18">
                  {{ $t("coach_service.free_bus.Shuttle_Bus_Routing") }}
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
                  {{ $t("coach_service.free_bus.No_2_Red_Route_Shuttle_Bus") }}
                </h5>
                <div style="display: flex; border: none">
                  <p style="width: 50%">
                    {{ $t("coach_service.free_bus.From_Bus_Terminus") }}
                  </p>
                  <p style="width: 50%">
                    {{ $t("coach_service.free_bus.From_Bus_Terminus") }}
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
                      </div>
                    </span>
                    <span>
                      <div style="width: 150px; text-align: left; margin: 0 auto">
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index2
                        }}</i
                        >{{ item.time2 }}
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
              <!-- 線路圖 -->
              <div>
                <p style="text-align: left" class="fs-18">
                  {{ $t("coach_service.free_bus.Shuttle_Bus_Routing") }}
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
    <!-- loading -->
    <div
      class="loading"
      v-loading="v_loading"
      style="
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10000;
      "
      :style="{ display: v_loading ? '' : 'none' }"
    ></div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, nextTick } from "vue";
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
      v_loading: false,
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
          data.v_loading = false;
          data.coach_service_content.lineMoneyList = res.data.data.records;
        }
      } catch (error) {
        data.v_loading = false;
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
          data.v_loading = false;
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
        data.v_loading = false;
      }
    };
    //獲取table中最長的col的數據
    const getColMaxLength = (item) => {
      let maxLength = 0;
      item.map((item) => {
        if (item.columnList.length > maxLength) {
          maxLength = item.columnList.length;
        }
      });
      return maxLength;
    };
    //选择nav
    const selectNav = (index) => {
      if (index === data.coach_service_content.coachServiceList.length - 2) {
        nextTick(async () => {
          //https://fairviewpark.hk/file/coach_fare_table_CN.html
          //https://fairviewpark.hk/file/coach_fare_table_EN.html
          fetch(
            `${
              data.fairview_park_lang === "en_us"
                ? "https://fairviewpark.hk/file/coach_fare_table_EN.html"
                : "https://fairviewpark.hk/file/coach_fare_table_CN.html"
            }`
          )
            .then( (response)=> {
              return response.text();
            })
            .then((htmlJson)=>{
              document.getElementById("price-table").innerHTML = htmlJson;
            });
        });
      }
      data.nav_index = index;
    };
    onMounted(async () => {
      data.v_loading = true;
      findLineMoneyList();
      findOneCoachServiceFile();
      findCoachServiceList();
    });
    return {
      ...toRefs(data),
      findLineMoneyList,
      findOneCoachServiceFile,
      findCoachServiceList,
      getColMaxLength,
      selectNav,
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
            line-height: 50px !important;
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

@media (max-width: 991px) {
  .banner {
    height: 200px;

    img {
      width: auto;
    }

    p {
      font-size: 36px;
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

          .el-popper {
            position: absolute;
            top: 52px !important;
            left: 0 !important;

            .el-select-dropdown {
              .el-scrollbar {
                .el-select-dropdown__wrap {
                  .el-scrollbar__view {
                    .el-select-dropdown__item {
                      text-align: left;

                      span {
                        margin: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      .nav-content {
        padding: 0;

        p,
        span,
        a {
          font-size: 15px !important;
        }

        .title {
          p {
            font-size: 28px !important;
          }

          span {
            font-size: 15px;
          }
        }

        .subTitle {
          font-size: 20px !important;
        }

        td {
          font-size: 15px !important;
        }

        .price-table {
          h5 {
            font-size: 20px !important;
          }
        }

        .free-bus .table h5 {
          font-size: 20px !important;
        }
      }
    }
  }
}
</style>
