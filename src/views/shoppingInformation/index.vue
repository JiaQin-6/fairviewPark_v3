<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:52:13
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
        {{ fairview_park_lang === "en_us" ? "Shops" : "商場"
        }}{{ fairview_park_lang === "en_us" ? " Directory" : "資訊" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row" id="shopping-information-menu">
            <li
              v-for="(item, index) in shop_information_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="jumpLink(index)"
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
              (index) => {
                jumpLink(index);
              }
            "
          >
            <el-option
              v-for="(item, index) in shop_information_list"
              :key="index"
              :label="item.titleEnUs"
              :value="index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20" id="nav-content">
          <div
            class="nav-content-list"
            :id="'shop_information_' + (index + 1)"
            v-for="(item, index) in shop_information_list"
            :key="index"
          >
            <span v-if="nav_index !== 0 && index !== 0" class="header">{{
              item && item.titleEnUs
            }}</span>
            <ul v-if="nav_index !== 0" class="flex-row">
              <li
                class="col-4"
                v-for="(item2, index2) in shop_information_list[index].secondList"
                :key="index2"
              >
                <div class="img col-4">
                  <img @click="openUrl(item2.websiteUrl)" :src="item2.logUrl" alt="" />
                </div>
                <p>{{ item2.titleEnUs }}</p>
                <span
                  ><el-icon><LocationFilled /></el-icon>{{ item2.shopNo }}</span
                >

                <span v-if="item2.tel">
                  <el-icon><PhoneFilled /></el-icon>
                  <a
                    class="fs-15"
                    v-for="(item3, index3) in item2.tel.indexOf(',') !== -1
                      ? item2.tel.split(',')
                      : [item2.tel]"
                    :key="index3"
                    style="color: #000; text-decoration: none"
                    :href="'tel:' + item3"
                    >{{ item3 }}</a
                  ></span
                >
              </li>
            </ul>
          </div>
          <div class="nav-content-list2" v-if="nav_index === 0">
            <span class="header">{{ $t("Carpark Parking Privilege Payment") }}</span>
            <table
              align="center"
              border="1"
              cellpadding="0"
              cellspacing="0"
              style="width: 100%"
            >
              <tbody>
                <tr height="34" style="height: 25.5pt">
                  <td
                    align="center"
                    colspan="3"
                    height="34"
                    style="font-size: 20px; color: red; font-weight: bold"
                  >
                    {{
                      fairview_park_lang === "en_us"
                        ? "GINKGO ROAD CARPARK - PARKING PRIVILEGE PAYMENT"
                        : "銀杏路停車場 - 泊車優惠收費"
                    }}
                  </td>
                </tr>

                <tr height="25" style="height: 18.75pt">
                  <td align="center" colspan="3" height="25" bgcolor="#dfecd7">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Parking Fee：Hourly Charge + Entry Fee : HK$ 1"
                        : "停車場收費：時租收費 + 入場費 : HK$ 1"
                    }}
                  </td>
                </tr>

                <tr height="67" style="">
                  <td rowspan="2" colspan="2" height="88" width="300" style="">
                    <p style="margin-left: 5px; font-weight: bold">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Owner Registered Octopus Users"
                          : "業主有登記八達通咭之用戶"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK$16"
                        : "時租收費HK$16"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="23" style="">
                  <td rowspan="2" height="44" colspan="3" style="font-weight: bold">
                    <p style="margin-left: 5px">
                      {{ fairview_park_lang === "en_us" ? "Other Drivers" : "其他司機" }}
                    </p>
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45">
                  <td rowspan="2" height="66" colspan="2">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us" ? "Mon to Sat" : "星期一至星期六"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK$16"
                        : "時租收費HK$16"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45">
                  <td rowspan="2" height="66" colspan="2">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Sun & Public Holidays"
                          : "星期日及公眾假期"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK $20"
                        : "時租收費HK $20"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="height: 16.5pt">
                  <td height="22" colspan="3">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Hourly Charge：Calculated on hourly basis. Part of an hour is colunted as full hour."
                          : "時租收費：按小時計算，不足一小時亦當一小時計算。"
                      }}
                      <br />{{
                        fairview_park_lang === "en_us"
                          ? "For Carpark Rules, please see sign board at Ginkgo Road Carpark entrance."
                          : "停車場使用守則，請參閱銀杏路停車場入口標示板。"
                      }}
                    </p>
                  </td>
                </tr>

                <tr height="25" style="height: 18.75pt">
                  <td
                    height="25"
                    colspan="3"
                    bgcolor="#dce9f3"
                    style="font-size: 20px; font-weight: bold; text-align: center"
                  >
                    {{
                      fairview_park_lang === "en_us"
                        ? "Owner Registered Octopus Users"
                        : "業主有登記八達通咭之用戶"
                    }}
                  </td>
                </tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    bgcolor="#dce9f3"
                    width="300"
                    style="height: 49.5pt; width: 300px"
                  >
                    {{ fairview_park_lang === "en_us" ? "Time of Exit" : "出車時間" }}
                  </td>
                  <td rowspan="2" width="229" bgcolor="#dce9f3" style="width: 229px">
                    {{ fairview_park_lang === "en_us" ? "Mon - Sat" : "星期一至星期六" }}
                  </td>
                  <td rowspan="2" width="169" bgcolor="#dce9f3" style="width: 169px">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Sun & Public Holidays"
                        : "星期日及公眾假期"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="23" style="text-align: center">
                  <td rowspan="2" height="44" width="385" style="height: 33pt">
                    {{ fairview_park_lang === "en_us" ? "0-30min" : "0-30分鐘" }}
                  </td>
                  <td rowspan="6" width="200" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "HK＄1" : "HK＄1" }}
                  </td>
                  <td rowspan="4" width="191" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "HK＄1" : "HK＄1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞30min – 1hr"
                        : "＞30 分鐘 – 1 小時"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us" ? "＞1hr – 2hr" : "＞1小時 – 2小時"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{ fairview_park_lang === "en_us" ? "HK$16＋HK＄1" : "HK$16＋HK＄1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us" ? "＞2hr – 3hr" : "＞2小時 – 3小時"
                    }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$16 + HK＄1" : "HK$16 + HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{ fairview_park_lang === "en_us" ? "HK$32＋HK＄1" : "HK$32＋HK＄1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us" ? "＞3hr – 4hr" : "＞3小時 – 4小時"
                    }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$32 + HK＄1" : "HK$32 + HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{ fairview_park_lang === "en_us" ? "HK$48＋HK＄1" : "HK$48＋HK＄1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385" style="height: 31.5pt">:</td>
                  <td rowspan="2" width="295" style="">&nbsp;:</td>
                  <td rowspan="2" width="191" style="">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385" style="height: 31.5pt">:</td>
                  <td rowspan="2" width="295" style="">&nbsp;:</td>
                  <td rowspan="2" width="191" style="">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="67" style="text-align: center">
                  <td rowspan="2" height="88" width="385" style="height: 66pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞(n-1)hr–n hr"
                        : "＞(n-1) 小時–n小時"
                    }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us"
                        ? "HK＄16 x (n-2)＋HK＄1"
                        : "HK＄16 x (n-2)＋HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{
                      fairview_park_lang === "en_us"
                        ? "HK＄16 x (n-1)＋HK＄1"
                        : "HK＄16 x (n-1)＋HK＄1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="">
                  <td height="22" colspan="3">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Note : n = number of parking hours"
                          : "注: n＝泊車時數"
                      }}
                    </p>
                  </td>
                </tr>

                <tr height="25" style="height: 18.75pt">
                  <td
                    height="25"
                    colspan="3"
                    bgcolor="#dce9f3"
                    style="font-size: 20px; font-weight: bold; text-align: center"
                  >
                    {{ fairview_park_lang === "en_us" ? "Other Drivers" : "其他司機" }}
                  </td>
                </tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    bgcolor="#dce9f3"
                    width="385"
                    style="height: 49.5pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "Time of Exit" : "出車時間" }}
                  </td>
                  <td rowspan="2" width="295" bgcolor="#dce9f3" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "Mon - Sat" : "星期一至星期六"
                    }}
                  </td>
                  <td rowspan="2" width="191" bgcolor="#dce9f3" style="">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Sun & Public Holidays"
                        : "星期日及公衆假期"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="23" style="text-align: center">
                  <td rowspan="2" height="44" width="385" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "0-30 min" : "0-30 分鐘" }}
                  </td>
                  <td rowspan="4" width="295" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "HK＄1" : "HK＄1" }}
                  </td>
                  <td rowspan="2" width="191" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "HK＄1" : "HK＄1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us" ? "＞30min－1hr" : "＞30分鐘－1小時"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{
                      fairview_park_lang === "en_us" ? "HK＄20＋HK＄1" : "HK＄20＋HK＄1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞1hr－2hr" : "＞1小時－2小時" }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK＄16＋HK＄1" : "HK＄16＋HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{
                      fairview_park_lang === "en_us" ? "HK＄40＋HK＄1" : "HK＄40＋HK＄1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞2hr－3hr" : "＞2小時－3小時" }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;
                    {{
                      fairview_park_lang === "en_us" ? "HK＄32＋HK＄1" : "HK＄32＋HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{
                      fairview_park_lang === "en_us" ? "HK＄60＋HK＄1" : "HK＄60＋HK＄1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞3hr－4hr" : "＞3小時－4小時" }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK＄48＋HK＄1" : "HK＄48＋HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{
                      fairview_park_lang === "en_us" ? "HK＄80＋HK＄1" : "HK＄80＋HK＄1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385" style="height: 31.5pt">:</td>
                  <td rowspan="2" width="295" style="">&nbsp;:</td>
                  <td rowspan="2" width="191" style="">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385" style="height: 31.5pt">:</td>
                  <td rowspan="2" width="295" style="">&nbsp;:</td>
                  <td rowspan="2" width="191" style="">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="67" style="text-align: center">
                  <td rowspan="2" height="88" width="385" style="height: 66pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞(n-1)hr–nhr"
                        : "＞(n-1)小時–n小時"
                    }}
                  </td>
                  <td rowspan="2" width="295" style="">
                    &nbsp;{{
                      fairview_park_lang === "en_us"
                        ? "HK＄16 x (n-1)＋HK＄1"
                        : "HK＄16 x (n-1)＋HK＄1"
                    }}
                  </td>
                  <td rowspan="2" width="191" style="">
                    {{
                      fairview_park_lang === "en_us"
                        ? "HK＄20 x (n)＋HK＄1"
                        : "HK＄20 x (n)＋HK＄1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="">
                  <td height="22" colspan="3">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Note : n = number of parking hours"
                          : "注: n＝泊車時數"
                      }}
                    </p>
                  </td>
                </tr>

                <!--[if supportMisalignedColumns]-->
                <tr height="0" style="display: none">
                  <td width="300" style=""></td>
                  <td width="229" style=""></td>
                  <td width="169" style=""></td>
                </tr>
                <!--[endif]-->
              </tbody>
            </table>
            <table
              class="mt-30"
              align="center"
              border="1"
              cellpadding="0"
              cellspacing="0"
              style="width: 100%"
            >
              <tbody>
                <tr height="34" style="">
                  <td
                    align="center"
                    colspan="3"
                    height="34"
                    style="font-size: 20px; color: red; font-weight: bold"
                  >
                    {{
                      fairview_park_lang === "en_us"
                        ? "LOTUS ROAD CARPARK - PARKING PRIVILEGE PAYMENT(24 Hours)"
                        : "紅荷路停車場 - 泊車優惠收費表(24小時)"
                    }}
                  </td>
                </tr>

                <tr height="25" style="">
                  <td align="center" colspan="3" height="25" bgcolor="#dfecd7" style="">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Parking Fee：Hourly Charge + Entry Fee : HK$ 1"
                        : "停車場收費：時租收費 ＋入場費 : HK$ 1"
                    }}
                  </td>
                </tr>

                <tr height="67" style="">
                  <td rowspan="2" colspan="2" height="88" width="400" style="">
                    <p style="margin-left: 5px; font-weight: bold">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Owner Registered Octopus Users"
                          : "業主有登記八達通咭之用戶"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" width="300" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK＄16"
                        : "時租收費HK＄16"
                    }}
                  </td>
                </tr>
                <tr height="21" style=""></tr>

                <tr height="67" style="mso-height-source: userset; height: 50.25pt">
                  <td rowspan="2" height="88" colspan="2" width="400" style="">
                    <p style="margin-left: 5px; font-weight: bold">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Club Registered Octopus Users"
                          : "會所有登記八達通咭之用戶"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" width="300" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK＄16"
                        : "時租收費HK＄16"
                    }}
                  </td>
                </tr>
                <tr height="21" style=""></tr>

                <tr height="23" style="">
                  <td rowspan="2" height="44" colspan="3" width="300" style="">
                    <p style="margin-left: 5px; font-weight: bold">
                      {{ fairview_park_lang === "en_us" ? "Other Drivers" : "其他司機" }}
                    </p>
                  </td>
                </tr>

                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="">
                  <td rowspan="2" height="66" colspan="2" width="400" style="">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us" ? "Mon - Sat" : "星期一至星期六"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" width="300" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK＄16"
                        : "時租收費HK＄16"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="">
                  <td rowspan="2" height="66" colspan="2" width="400" style="">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Sun & Public Holidays"
                          : "星期日及公衆假期"
                      }}
                    </p>
                  </td>
                  <td rowspan="2" width="300" style="text-align: center">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Hourly Charge HK＄20"
                        : "時租收費HK＄20"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="height: 16.5pt">
                  <td height="22" colspan="3">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Hourly Charge：Calculated on hourly basis. Part of an hour is counted as full hour."
                          : "時租收費：按小時計算，不足一小時亦當一小時計算。"
                      }}<br />
                      {{
                        fairview_park_lang === "en_us"
                          ? "For Carpark Rules, please see sign board at the Lotus Road Carpark entrance."
                          : "停車場使用守則，請參閱紅荷路停車場入口標示板。"
                      }}
                    </p>
                  </td>
                </tr>

                <tr height="25" style="height: 18.75pt">
                  <td
                    height="25"
                    colspan="3"
                    bgcolor="#dce9f3"
                    style="font-size: 20px; font-weight: bold; text-align: center"
                  >
                    {{
                      fairview_park_lang === "en_us"
                        ? "Club Registered Octopus Users"
                        : "會所有登記八達通咭之用戶"
                    }}
                  </td>
                </tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    bgcolor="#dce9f3"
                    height="66"
                    width="385"
                    style="height: 49.5pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "Time of Exit" : "出車時間" }}
                  </td>
                  <td rowspan="2" bgcolor="#dce9f3" width="438" style="">
                    &nbsp;
                    {{ fairview_park_lang === "en_us" ? "Mon - Sat" : "星期一至星期六" }}
                  </td>
                  <td rowspan="2" bgcolor="#dce9f3" width="207" style="">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Sun & Public Holidays"
                        : "星期日及公衆假期"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="23" style="text-align: center">
                  <td rowspan="2" height="44" width="385" style="height: 33pt">
                    {{ fairview_park_lang === "en_us" ? "0-30min" : "0-30分鐘" }}
                  </td>
                  <td rowspan="14" width="438" bgcolor="#dce9f3" style="width: 152pt">
                    &nbsp;{{ fairview_park_lang === "en_us" ? "HK$1" : "HK$1" }}
                  </td>
                  <td rowspan="14" width="207" bgcolor="#dce9f3" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$1" : "HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞30min－1hr"
                        : "＞30分鐘－1小時$1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞1hr－2hr" : "＞1小時－2小時" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞2hr－3hr" : "＞2小時－3小時" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞3hr－4hr" : "＞3小時－4小時" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞4hr－5hr" : "＞4小時－5小時" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞5hr－6hr" : "＞5小時－6小時" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞6hr－7hr" : "＞6小時－7小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$16＋HK$1" : "HK$16＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$16＋HK$1" : "HK$16＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞7hr－8hr" : "＞7小時－8小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$32＋HK$1" : "HK$32＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$32＋HK$1" : "HK$32＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385">:</td>
                  <td rowspan="2" width="438">&nbsp;:</td>
                  <td rowspan="2" width="207">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="67" style="text-align: center">
                  <td rowspan="2" height="88" width="385" style="height: 66pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞(n-1)hr-nhr"
                        : "＞(n-1)小時-n小時"
                    }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us"
                        ? "HK$16 x (n-6)＋HK$1"
                        : "HK$16 x (n-6)＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "HK$16 x (n-6)＋HK$1"
                        : "HK$16 x (n-6)＋HK$1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="height: 16.5pt">
                  <td height="22" colspan="3" style="height: 16.5pt">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Note : n = number of parking hours"
                          : "註：n＝泊車時數"
                      }}
                    </p>
                  </td>
                </tr>

                <tr height="25" style="height: 18.75pt">
                  <td
                    height="25"
                    colspan="3"
                    bgcolor="#dce9f3"
                    style="font-size: 20px; font-weight: bold; text-align: center"
                  >
                    {{
                      fairview_park_lang === "en_us"
                        ? "Owner Registered Octopus Users"
                        : "業主有登記八達通咭之用戶"
                    }}
                  </td>
                </tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    bgcolor="#dce9f3"
                    width="385"
                    style="height: 49.5pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "Time of Exit" : "出車時間" }}
                  </td>
                  <td rowspan="2" width="200" bgcolor="#dce9f3" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "Mon - Sat" : "星期一至星期六"
                    }}
                  </td>
                  <td rowspan="2" width="200" bgcolor="#dce9f3" style="width: 155pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Sun & Public Holidays"
                        : "星期日及公衆假期"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="23" style="text-align: center">
                  <td
                    rowspan="2"
                    height="44"
                    width="385"
                    style="height: 33pt; width: 465pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "0-30min" : "0-30分鐘" }}
                  </td>
                  <td rowspan="6" width="438" bgcolor="#dce9f3" style="width: 152pt">
                    {{ fairview_park_lang === "en_us" ? "HK$1" : "HK$1" }}
                  </td>
                  <td rowspan="4" width="207" bgcolor="#dce9f3" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$1" : "HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    width="385"
                    style="height: 49.5pt; width: 465pt"
                  >
                    {{
                      fairview_park_lang === "en_us" ? "＞30min-1hr" : "＞30分鐘-1小時"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    width="385"
                    style="height: 49.5pt; width: 465pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "＞1hr-2hr" : "＞1小時-2小時" }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$16＋HK$1" : "HK$16＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    width="385"
                    style="height: 49.5pt; width: 465pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "＞2hr-3hr" : "＞2小時-3小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$16 + HK$1" : "HK$16 + HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$32＋HK$1" : "HK$32＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞3hr-4hr" : "＞3小時-4小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$32 + HK$1" : "HK$32 + HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$48＋HK$1" : "HK$48＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385">:</td>
                  <td rowspan="2" width="438">&nbsp;:</td>
                  <td rowspan="2" width="207">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385">:</td>
                  <td rowspan="2" width="438">&nbsp;:</td>
                  <td rowspan="2" width="207">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="67" style="text-align: center">
                  <td rowspan="2" height="88" width="385" style="height: 66pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞(n-1)hr-nhr"
                        : "＞(n-1)小時-n小時"
                    }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us"
                        ? "HK$16 x (n-2)＋HK$1"
                        : "HK$16 x (n-2)＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "HK$16 x (n-1)＋HK$1"
                        : "HK$16 x (n-1)＋HK$1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="height: 16.5pt">
                  <td height="22" colspan="3" style="height: 16.5pt">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Note : n = number of parking hours"
                          : "註：n＝泊車時數"
                      }}
                    </p>
                  </td>
                </tr>

                <tr height="25" style="">
                  <td
                    height="25"
                    colspan="3"
                    bgcolor="#dce9f3"
                    style="font-size: 20px; font-weight: bold; text-align: center"
                  >
                    {{ fairview_park_lang === "en_us" ? "Other Drivers" : "其他司機" }}
                  </td>
                </tr>

                <tr height="45" style="text-align: center">
                  <td
                    rowspan="2"
                    height="66"
                    bgcolor="#dce9f3"
                    width="385"
                    style="height: 49.5pt"
                  >
                    {{ fairview_park_lang === "en_us" ? "Time of Exit" : "出車時間" }}
                  </td>
                  <td rowspan="2" width="438" bgcolor="#dce9f3" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "Mon - Sat" : "星期一至星期六"
                    }}
                  </td>
                  <td rowspan="2" width="207" bgcolor="#dce9f3" style="width: 155pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Sun & Public Holidays"
                        : "星期日及公衆假期"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="23" style="text-align: center">
                  <td rowspan="2" height="44" width="385">
                    {{ fairview_park_lang === "en_us" ? "0-30min" : "0-30分鐘" }}
                  </td>
                  <td rowspan="4" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "HK$1" : "HK$1" }}
                  </td>
                  <td rowspan="2" bgcolor="#dce9f3">
                    {{ fairview_park_lang === "en_us" ? "HK$1" : "HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{
                      fairview_park_lang === "en_us" ? "＞30min－1hr" : "＞30分鐘－1小時"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$20＋HK$1" : "HK$20＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞1hr－2hr" : "＞1小時－2小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$16＋HK$1" : "HK$16＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$40＋HK$1" : "HK$40＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞2hr－3hr" : "＞2小時－3小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$32＋HK$1" : "HK$32＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$60＋HK$1" : "HK$60＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="45" style="text-align: center">
                  <td rowspan="2" height="66" width="385" style="height: 49.5pt">
                    {{ fairview_park_lang === "en_us" ? "＞3hr－4hr" : "＞3小時－4小時" }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us" ? "HK$48＋HK$1" : "HK$48＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{ fairview_park_lang === "en_us" ? "HK$80＋HK$1" : "HK$80＋HK$1" }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385">:</td>
                  <td rowspan="2" width="438">&nbsp;:</td>
                  <td rowspan="2" width="207">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="21" style="text-align: center; font-weight: bold">
                  <td rowspan="2" height="42" width="385">:</td>
                  <td rowspan="2" width="438">&nbsp;:</td>
                  <td rowspan="2" width="207">:</td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="67" style="text-align: center">
                  <td rowspan="2" height="88" width="385" style="height: 66pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "＞(n-1)hr-nhr"
                        : "＞(n-1)小時-n小時"
                    }}
                  </td>
                  <td rowspan="2" width="438" style="width: 152pt">
                    &nbsp;{{
                      fairview_park_lang === "en_us"
                        ? "HK$16 x (n-1)＋HK$1"
                        : "HK$16 x (n-1)＋HK$1"
                    }}
                  </td>
                  <td rowspan="2" width="207" style="width: 155pt">
                    {{
                      fairview_park_lang === "en_us"
                        ? "HK$20 x (n)＋HK$1"
                        : "HK$20 x (n)＋HK$1"
                    }}
                  </td>
                </tr>
                <tr height="21" style="height: 15.75pt"></tr>

                <tr height="22" style="">
                  <td height="22" colspan="3">
                    <p style="margin-left: 5px">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Note : n = number of parking hours"
                          : "註：n＝泊車時數"
                      }}
                    </p>
                  </td>
                </tr>

                <!--[if supportMisalignedColumns]-->
                <tr height="0" style="display: none">
                  <td width="385" style=""></td>
                  <td width="438" style="width: 152pt"></td>
                  <td width="207" style="width: 155pt"></td>
                </tr>

                <!--[endif]-->
              </tbody>
            </table>
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
        "../../assets/image/common-banner/shopping-information.jpg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      shop_information_list: [],
      shop_information_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋苑资料 列表
    const findShopsDirectoryList2 = async (id, index) => {
      try {
        const res = await proxy.$http.findShopsDirectoryList2({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          data.shop_information_list = res.data.data.records;
          data.shop_information_list.unshift({
            titleEnUs: proxy.$t("Carpark Parking Privilege Payment"),
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findShopsDirectoryList2();
      if (
        document.getElementById("shopping-information-menu").getBoundingClientRect()
          .height
      ) {
        document.getElementsByClassName("nav-content")[0].style.height =
          document.getElementById("shopping-information-menu").getBoundingClientRect()
            .height > 500
            ? document.getElementById("shopping-information-menu").getBoundingClientRect()
                .height + "px"
            : "500px";
      } else {
        document.getElementsByClassName("nav-content")[0].style.height = "500px";
      }
    });
    const jumpLink = (index) => {
      if (index === 0) {
      } else {
        let top = 0;
        for (let i = 0; i < index; i++) {
          top += document.querySelector("#shop_information_" + (i + 1)).scrollHeight;
        }
        console.log(top);
        console.log(document.querySelector("#nav-content"));
        document.querySelector("#nav-content").scrollTop = top;
      }
      data.nav_index = index;
    };
    const openUrl = (url) => {
      if (url) {
        const a = document.createElement("a");
        (a.href = url), (a.target = "_blank");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };
    return {
      ...toRefs(data),
      findShopsDirectoryList2,
      jumpLink,
      openUrl,
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
      overflow: auto;
      position: relative;
      padding: 0 20px;
      &::-webkit-scrollbar {
        display: none;
      }
      .nav-content-list {
        position: relative;
        .header {
          color: #9cc212;
          font-size: 36px;
          font-weight: bold;
        }

        ul {
          padding: 0;
          flex-wrap: wrap;
          li {
            padding-right: 10px;
            align-items: center;
            span {
              text-align: center;
              a {
                &:hover {
                  color: #0d6efd !important;
                }
              }
            }
            .img {
              border: 2px solid #f7f7f7;
              text-align: center;
              padding: 20px;
              box-sizing: border-box;
              width: 100%;
              max-width: 280px;
              height: 150px;
              position: relative;
              img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 90%;
                max-height: 90%;
              }
            }
            p {
              margin: 10px 0 5px;
              font-weight: bold;
            }
            span {
              display: block;
              text-align: left;
              i {
                color: var(--mainColor2);
                vertical-align: text-bottom;
                font-size: 18px;
                margin-right: 5px;
              }
            }
          }
        }
      }
      .nav-content-list2 {
        position: relative;
        .header {
          color: #9cc212;
          font-size: 36px;
          font-weight: bold;
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
    p{
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
        }
      }
      .nav-content{
        padding:0;
        .nav-content-list{
          .header{
            font-size: 28px;
          }
          ul{
            li{

            }
          }
        }
        .nav-content-list2{
          .header{
            font-size: 28px;
          }
        }

      }
    }
  }
}
</style>
