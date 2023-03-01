<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-14 22:59:51
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
          <ul class="row animate__animated animate__fadeInLeft" id="shopping-information-menu">
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
            v-if="shop_information_list.length > 0"
            size="large"
            v-model="nav_index"
            class="menu-select"
            @change="
              (index) => {
                jumpLink(index);
              }
            "
            :teleported="false"
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
        <div class="col-12 col-lg-10 nav-content mb-20 animate__animated animate__fadeInRight" id="nav-content" :style="{'height':nav_index===0?'auto':'500px'}">
          <div
            class="nav-content-list"
            :id="'shop_information_' + (index + 1)"
            v-for="(item, index) in shop_information_list"
            :key="index"
          >
            <span v-show="nav_index !== 0 && index !== 0" class="header">{{
              item && item.titleEnUs
            }}</span>
            <ul v-show="nav_index !== 0" class="flex-row">
              <li
                class="col-4"
                v-for="(item2, index2) in shop_information_list[index]
                  .secondList"
                :key="index2"
              >
                <div class="img col-4">
                  <img
                    @click="openUrl(item2.websiteUrl)"
                    :src="item2.logUrl"
                    alt=""
                  />
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
            <span class="header">{{
              $t("shopping_Information.Carpark_Parking_Privilege_Payment")
            }}</span>
            <!-- 停車場泊車收費表 -->
            <!-- <div v-if="fairview_park_lang === 'zh_tw'">
              <table width="100%" border="0" cellspacing="1" cellpadding="10">
                <tbody>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#9cc212">
                      <span
                        style="
                          font-size: 24px;
                          color: #ffffff;
                          font-weight: bold;
                        "
                        >銀杏路停車場 - 泊車優惠收費</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#fffde9">
                      停車場收費 : 時租收費+入場費 : HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      <strong>業主有登記八達通咭之用戶</strong>
                    </td>
                    <td width="33%" class="border_line">時租收費HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2"><strong>其他司機</strong></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">星期一至六</td>
                    <td class="border_line">時租收費HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">星期日及公眾假期</td>
                    <td class="border_line">時租收費HK$20</td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      時租收費 : 按小時計算，不足一小時亦當一小時計算。<br />
                      停車場使用守則，請參閱銀杏路停車場入口標示板。
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >業主有登記八達通咭之用戶</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>出車時間</strong>
                    </td>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>星期一至六</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期日及公眾假期</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30分鐘
                    </td>
                    <td
                      rowspan="3"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                  </tr>
                  <tr align="center">
                    <td class="border_line">&gt;30 分鐘 - 1 小時</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;1小時 - 2小時
                    </td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;2小時 - 3小時
                    </td>
                    <td align="center" class="border_line"> HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;3小時 - 4小時
                    </td>
                    <td align="center" class="border_line"> HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1) 小時 - n小時
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-2)+HK$1
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-1)+HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">注 : n=泊車時數</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >其他司機</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#fffde9">
                      <strong>出車時間</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期一至六</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期日及公衆假期</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30 分鐘
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      HK$1
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;30分鐘 - 1小時
                    </td>
                    <td align="center" class="border_line">HK$20+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;1小時 - 2小時
                    </td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$40+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;2小時 - 3小時
                    </td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$60+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;3小時 - 4小時
                    </td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                    <td align="center" class="border_line">HK$80+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)小時 - n小時
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-1)+HK$1
                    </td>
                    <td align="center" class="border_line">HK$20 x (n)+HK$1</td>
                  </tr>
                  <tr>
                    <td colspan="3">注 : n=泊車時數</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <table width="100%" border="0" cellspacing="1" cellpadding="10">
                <tbody>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#9cc212">
                      <span
                        style="
                          font-size: 24px;
                          color: #ffffff;
                          font-weight: bold;
                        "
                        >紅荷路停車場 - 泊車優惠收費(24小時)</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#fffde9">
                      停車場收費 : 時租收費+入場費 : HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      <strong>業主有登記八達通咭之用戶</strong>
                    </td>
                    <td width="33%" class="border_line">時租收費HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      <strong>會所有登記八達通咭之用戶</strong>
                    </td>
                    <td class="border_line">時租收費HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="3"><strong>其他司機</strong></td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">星期一至六</td>
                    <td class="border_line">時租收費HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">星期日及公眾假期</td>
                    <td class="border_line">時租收費HK$20</td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      時租收費 : 按小時計算，不足一小時亦當一小時計算。<br />
                      停車場使用守則，請參閱銀杏路停車場入口標示板。
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >業主有登記八達通咭之用戶</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>出車時間</strong>
                    </td>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>星期一至六</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期日及公眾假期</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30分鐘
                    </td>
                    <td
                      rowspan="7"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td
                      rowspan="7"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;30 分鐘 - 1 小時
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;1小時 - 2小時
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;2小時 - 3小時
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;3小時 - 4小時
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;4小時 - 5小時
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;5小時 - 6小時
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;6小時 - 7小時
                    </td>
                    <td align="center" class="border_line"> HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;7小時 - 8小時
                    </td>
                    <td align="center" class="border_line"> HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1) 小時 - n小時
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-6)+HK$1
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-6)+HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">注 : n=泊車時數</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >業主有登記八達通咭之用戶</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#fffde9">
                      <strong>出車時間</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期一至六</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期日及公衆假期</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30 分鐘
                    </td>
                    <td
                      rowspan="3"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                  </tr>
                  <tr align="center">
                    <td class="border_line">&gt;30分鐘 - 1小時</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;1小時 - 2小時
                    </td>
                    <td align="center" class="border_line">HK$20+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;2小時 - 3小時
                    </td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;3小時 - 4小時
                    </td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)小時 - n小時
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-2)+HK$1
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-1)+HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">注 : n=泊車時數</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >其他司機</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#fffde9">
                      <strong>出車時間</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期一至六</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>星期日及公衆假期</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30 分鐘
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      HK$1
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;30分鐘 - 1小時
                    </td>
                    <td align="center" class="border_line">HK$20+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;1小時 - 2小時
                    </td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$40+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;2小時 - 3小時
                    </td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$60+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;3小時 - 4小時
                    </td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                    <td align="center" class="border_line">HK$80+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)小時 - n小時
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-2)+HK$1
                    </td>
                    <td align="center" class="border_line">HK$20 x (n)+HK$1</td>
                  </tr>
                  <tr>
                    <td colspan="3">注: n=泊車時數</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div> -->
            <!-- <div v-if="fairview_park_lang === 'en_us'">
              <table width="100%" border="0" cellspacing="1" cellpadding="10">
                <tbody>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#9cc212">
                      <span
                        style="
                          font-size: 24px;
                          color: #ffffff;
                          font-weight: bold;
                        "
                        >GINKGO ROAD CARPARK - PARKING PRIVILEGE PAYMENT</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#fffde9">
                      Parking Fee : Hourly Charge+Entry Fee : HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      <strong>Owner Registered Octopus Users </strong>
                    </td>
                    <td width="33%" class="border_line">Hourly Charge HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2"><strong>Other Drivers </strong></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">Mon to Sat</td>
                    <td class="border_line">Hourly Charge HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      Sun &amp; Public Holidays
                    </td>
                    <td class="border_line">Hourly Charge HK$20</td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      Hourly Charge : Calculated on hourly basis. Part of an
                      hour is colunted as full hour.<br />
                      For Carpark Rules, please see sign board at Ginkgo Road
                      Carpark entrance.
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >Owner Registered Octopus Users</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>Time of Exit</strong>
                    </td>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>Mon - Sat</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Sun &amp; Public Holidays</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30min
                    </td>
                    <td
                      rowspan="3"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                  </tr>
                  <tr align="center">
                    <td class="border_line">&gt;30min - 1hr</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;1hr - 2hr</td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;2hr - 3hr</td>
                    <td align="center" class="border_line"> HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;3hr - 4hr</td>
                    <td align="center" class="border_line"> HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)hr - n hr
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-2)+HK$1
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-1)+HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">Note : n = number of parking hours</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >Other Drivers</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Time of Exit</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Mon - Sat</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Sun &amp; Public Holidays</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30 min
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      HK$1
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;30min - 1hr</td>
                    <td align="center" class="border_line">HK$20+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;1hr - 2hr</td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$40+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;2hr - 3hr</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$60+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;3hr - 4hr</td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                    <td align="center" class="border_line">HK$80+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)hr - nhr
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-1)+HK$1
                    </td>
                    <td align="center" class="border_line">HK$20 x (n)+HK$1</td>
                  </tr>
                  <tr>
                    <td colspan="3">Note : n = number of parking hours</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <table width="100%" border="0" cellspacing="1" cellpadding="10">
                <tbody>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#9cc212">
                      <span
                        style="
                          font-size: 24px;
                          color: #ffffff;
                          font-weight: bold;
                        "
                        >LOTUS ROAD CARPARK - PARKING PRIVILEGE PAYMENT(24
                        Hours)</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#fffde9">
                      Parking Fee : Hourly Charge+Entry Fee : HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      <strong>Owner Registered Octopus Users</strong>
                    </td>
                    <td width="33%" class="border_line">Hourly Charge HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      <strong>Club Registered Octopus Users</strong>
                    </td>
                    <td class="border_line">Hourly Charge HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="3"><strong>Other Drivers</strong></td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">Mon - Sat</td>
                    <td class="border_line">Hourly Charge HK$16</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border_line">
                      Sun &amp; Public Holidays
                    </td>
                    <td class="border_line">Hourly Charge HK$20</td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      Hourly Charge : Calculated on hourly basis. Part of an
                      hour is counted as full hour.<br />
                      For Carpark Rules, please see sign board at the Lotus Road
                      Carpark entrance.
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >Club Registered Octopus Users</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>Time of Exit</strong>
                    </td>
                    <td width="33%" align="center" bgcolor="#fffde9">
                      <strong>Mon - Sat</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Sun &amp; Public Holidays</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30min
                    </td>
                    <td
                      rowspan="7"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td
                      rowspan="7"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">
                      &gt;30min - 1hr
                    </td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">&gt;1hr - 2hr</td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">&gt;2hr - 3hr</td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">&gt;3hr - 4hr</td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">&gt;4hr - 5hr</td>
                  </tr>
                  <tr align="center">
                    <td bgcolor="#F2FAFF" class="border_line">&gt;5hr - 6hr</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;6hr - 7hr</td>
                    <td align="center" class="border_line"> HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;7hr - 8hr</td>
                    <td align="center" class="border_line"> HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)hr - nhr
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-6)+HK$1
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-6)+HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">Note : n = number of parking hours</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >Owner Registered Octopus Users</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Time of Exit</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Mon - Sat</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Sun &amp; Public Holidays</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30min
                    </td>
                    <td
                      rowspan="3"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                  </tr>
                  <tr align="center">
                    <td class="border_line">&gt;30min - 1hr</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;1hr - 2hr</td>
                    <td align="center" class="border_line">HK$20+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;2hr - 3hr</td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;3hr - 4hr</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)hr - nhr
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-2)+HK$1
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-1)+HK$1
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">Note : n = number of parking hours</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center" bgcolor="#f1fcdd">
                      <span style="font-size: 20px; font-weight: bold"
                        >Other Drivers</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Time of Exit</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Mon - Sat</strong>
                    </td>
                    <td align="center" bgcolor="#fffde9">
                      <strong>Sun &amp; Public Holidays</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      0 - 30min
                    </td>
                    <td
                      rowspan="2"
                      align="center"
                      bgcolor="#F2FAFF"
                      class="border_line"
                    >
                      HK$1
                    </td>
                    <td align="center" bgcolor="#F2FAFF" class="border_line">
                      HK$1
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;30min - 1hr</td>
                    <td align="center" class="border_line">HK$20+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;1hr - 2hr</td>
                    <td align="center" class="border_line">HK$16+HK$1</td>
                    <td align="center" class="border_line">HK$40+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;2hr - 3hr</td>
                    <td align="center" class="border_line">HK$32+HK$1</td>
                    <td align="center" class="border_line">HK$60+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">&gt;3hr - 4hr</td>
                    <td align="center" class="border_line">HK$48+HK$1</td>
                    <td align="center" class="border_line">HK$80+HK$1</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                    <td align="center" class="border_line">:</td>
                  </tr>
                  <tr>
                    <td align="center" class="border_line">
                      &gt;(n-1)hr - nhr
                    </td>
                    <td align="center" class="border_line">
                      HK$16 x (n-2)+HK$1
                    </td>
                    <td align="center" class="border_line">HK$20 x (n)+HK$1</td>
                  </tr>
                  <tr>
                    <td colspan="3">Note : n = number of parking hours</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div> -->
            <!--  -->
            <iframe
              class="iframe-zh"
              v-show="fairview_park_lang === 'zh_tw'"
              style="display: block; width: 100%; height: 800px"
              src="https://fairviewpark.hk/file/parking-privilege-payment_cn.html"
            ></iframe>
            <iframe
              class="iframe-en"
              v-show="fairview_park_lang === 'en_us'"
              style="display: block; width: 100%; height: 800px"
              src="https://fairviewpark.hk/file/parking-privilege-payment_en.html"
            ></iframe>
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
      :style="{'display':v_loading?'':'none'}"
    ></div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  onMounted,
  nextTick,
} from "vue";
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
      v_loading:false,
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
          data.v_loading = false;
          data.shop_information_list = res.data.data.records;
          data.shop_information_list.unshift({
            titleEnUs: proxy.$t("shopping_Information.Carpark_Parking_Privilege_Payment"),
          });
        }
      } catch (error) {
        data.v_loading = false;
        console.log(error);
      }
    };
    onMounted(async () => {
      data.v_loading = true;
      await findShopsDirectoryList2();
      if (
        document
          .getElementById("shopping-information-menu")
          .getBoundingClientRect().height
      ) {
        document.getElementsByClassName("nav-content")[0].style.height =
          document
            .getElementById("shopping-information-menu")
            .getBoundingClientRect().height > 500
            ? document
                .getElementById("shopping-information-menu")
                .getBoundingClientRect().height + "px"
            : "500px";
      } else {
        document.getElementsByClassName("nav-content")[0].style.height =
          "500px";
      }
    });
    const jumpLink = (index) => {
      data.nav_index = index;
      if (index !== 0) {
        nextTick(() => {
          let top = 0;
          for (let i = 0; i < index; i++) {
            top += document.querySelector(
              "#shop_information_" + (i + 1)
            ).scrollHeight;
          }
          document.querySelector("#nav-content").scrollTop = top;
        });
      }
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
            margin-bottom: 15px;
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
        .nav-content-list {
          .header {
            font-size: 28px;
          }
          ul {
            li {
            }
          }
        }
        .nav-content-list2 {
          .header {
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
