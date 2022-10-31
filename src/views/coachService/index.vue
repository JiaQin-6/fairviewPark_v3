<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-26 00:33:23
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Coach" : "专巴"
        }}<b>{{
          fairview_park_lang === "en_us" ? "&nbsp;Service" : "时间表"
        }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in coach_service_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="nav_index = index"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <div align="center">
            <!-- 时间表 -->
            <div
              v-if="
                nav_index !== (coach_service_list.length - 1 &&
                coach_service_list.length - 2)
              "
            >
              <table width="720" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td height="30" colspan="3" bgcolor="#7CA628">
                      <div align="center">
                        <img src="central.gif" width="168" height="28" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td height="30" colspan="3" bgcolor="#E7F4BB">
                      <div align="center">
                        <span class="style8"
                          >星期一至星期五（公眾假期除外）</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="240" height="30" bgcolor="#F9FCEF">
                      <div align="center" class="style10">
                        <strong>錦綉花園開出</strong>
                      </div>
                    </td>
                    <td width="240" height="30" bgcolor="#FFFAE6">
                      <div align="center">
                        <span class="style8">告士打道六國中心開出</span>
                      </div>
                    </td>
                    <td width="240" height="30" bgcolor="#FFFFE6">
                      <div align="center" class="style10">
                        <span class="style8">干諾道中8-10號遮打大廈開出</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="240" valign="top" bgcolor="#F9FCEF">
                      <p align="center" class="style34">
                        7:00 a.m. - 7:20 a.m.
                      </p>
                      <p align="center" class="style34">(3班次)</p>
                      <p align="center">&nbsp;</p>
                      <p align="center" class="style34">
                        7:20 a.m. - 7:40 a.m.
                      </p>
                      <p align="center" class="style34">(3班次)</p>
                      <p align="center">&nbsp;</p>
                      <p align="center" class="style34">
                        7:40 a.m. - 7:50 a.m.
                      </p>
                      <p align="center" class="style34">(5班次)</p>
                      <p align="center">&nbsp;</p>
                      <p align="center" class="style34">&nbsp;</p>
                    </td>
                    <td width="240" valign="top" bgcolor="#FFFAE6">
                      <p align="center" class="style34">5:35 p.m.</p>
                      <p align="center" class="style34">5:55 p.m.</p>
                      <p align="center" class="style34">6:10 p.m.</p>
                      <p align="center" class="style34">6:20 p.m.</p>
                      <p align="center" class="style34">6:30 p.m.</p>
                      <p align="center" class="style34">6:40 p.m.</p>
                      <p align="center" class="style34">6:55 p.m.</p>
                      <p align="center" class="style34">7:15 p.m.</p>
                      <p align="center" class="style34">7:30 p.m.</p>
                    </td>
                    <td width="240" valign="top" bgcolor="#FFFFE6">
                      <p align="center" class="style34">5:38 p.m.*</p>
                      <p align="center" class="style34">5:58 p.m.*</p>
                      <p align="center" class="style34">6:13 p.m.*</p>
                      <p align="center" class="style34">6:23 p.m.*</p>
                      <p align="center" class="style34">6:33 p.m.*</p>
                      <p align="center" class="style34">6:43 p.m.*</p>
                      <p align="center" class="style34">6:58 p.m.*</p>
                      <p align="center" class="style34">7:18 p.m.*</p>
                      <p align="center" class="style34">7:33 p.m.*</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table width="720" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td height="30" colspan="3" bgcolor="#FFFFFF">
                      <div align="center"></div>
                    </td>
                  </tr>
                  <tr>
                    <td height="30" colspan="3" bgcolor="#E7F4BB">
                      <div align="center">
                        <span class="style11">星期六（公眾假期除外）</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td height="30" bgcolor="#F9FCEF">
                      <div align="center" class="style10">
                        <strong>錦綉花園開出</strong>
                      </div>
                    </td>
                    <td height="30" bgcolor="#FFFAE6">
                      <div align="center">
                        <span class="style8">回程暫停服務</span>
                      </div>
                    </td>
                    <td height="30" bgcolor="#FFFFE6">
                      <div align="center" class="style10">
                        <span class="style8"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="240" valign="top" bgcolor="#F9FCEF">
                      <p align="center" class="style35">7:30 a.m.</p>
                      <!--<p align="center" class="style35">7:20 a.m.</p>-->
                      <!--<p align="center" class="style35">7:35 a.m.</p>-->
                      <!--<p align="center" class="style35">7:40 a.m.</p>-->
                    </td>
                    <td width="240" valign="top" bgcolor="#FFFAE6"></td>
                    <td width="240" valign="top" bgcolor="#FFFFE6"></td>
                  </tr>
                </tbody>
              </table>
              <table width="720" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td height="30" colspan="3" bgcolor="#FFFFFF">
                      <div align="center"></div>
                    </td>
                  </tr>
                  <tr>
                    <td height="30" colspan="3" bgcolor="#E7F4BB">
                      <div align="center">
                        <span class="style8">星期日及公眾假期</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td height="30" bgcolor="#F9FCEF">
                      <div align="center" class="style10">
                        <strong>錦綉花園開出</strong>
                      </div>
                    </td>
                    <td height="30" bgcolor="#FFFAE6">
                      <div align="center">
                        <span class="style8">回程暫停服務</span>
                      </div>
                    </td>
                    <td height="30" bgcolor="#FFFFE6">
                      <div align="center" class="style10">
                        <span class="style8"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="240" valign="top" bgcolor="#F9FCEF">
                      <p align="center" class="style35">7:30 a.m.</p>
                      <!--<p align="center" class="style35">7:20 a.m.</p>-->
                      <!--<p align="center" class="style35">7:40 a.m.</p>-->
                    </td>
                    <td width="240" valign="top" bgcolor="#FFFAE6"></td>
                    <td width="240" valign="top" bgcolor="#FFFFE6"></td>
                  </tr>
                </tbody>
              </table>
              <p><span class="style10">*預計抵達時間 </span></p>
              <table width="700" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td>
                      <table
                        width="700"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <td width="350" valign="top">
                              <p>
                                <span class="style20">去程落客站</span><br />
                                <br />
                                (1) 怡和大廈郵政總局
                              </p>
                              <p>(2) 龍匯道中信大廈對出上落客區</p>
                              <p>(3) 港灣道海港中心對出</p>
                              <p>(4) 百德新街53號</p>
                              <p>(5) 告士打道近東亞銀行港灣中心</p>
                            </td>
                            <td width="350" valign="top">
                              <p class="style20">回程上客站</p>
                              <p>(1) 告士打道六國中心</p>
                              <p>(2) 干諾道中8-10號遮打大廈</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                      <p>
                        以上資料只供參考，最新資料以專巴公司最新公佈為準，
                        專巴服務查詢熱線2471 6348 。
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 专巴收费表 -->
            <div v-if="nav_index === coach_service_list.length - 2">
              <table
                width="720"
                border="1"
                cellpadding="3"
                cellspacing="0"
                bordercolor="#FFFFFF"
              >
                <tbody>
                  <tr>
                    <td height="30" colspan="4" bgcolor="#7CA628">
                      <div align="center">
                        <img src="fare.gif" width="168" height="28" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#E7F4BB" rowspan="2">
                      <p align="center" class="style8">路線</p>
                    </td>
                    <td width="160" bgcolor="#E7F4BB" rowspan="2">
                      <p align="center" class="style8">非住戶或現金票價</p>
                    </td>
                    <td colspan="2" bgcolor="#E7F4BB">
                      <p align="center" class="style8">八達通咭</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="200" bgcolor="#E7F4BB">
                      <p align="center" class="style8">已登記住戶<br />票價</p>
                    </td>
                    <td width="200" bgcolor="#E7F4BB">
                      <p align="center" class="style8">
                        已登記住戶<br />(長者及小童)票價
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#FFFAE6">
                      <p align="center" class="style15">NR 93 (元朗墟線)</p>
                    </td>
                    <td width="160" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$ 9.80</p>
                    </td>
                    <td width="200" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$ 7.30</p>
                    </td>
                    <td width="200" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$ 3.70</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#F9FCEF">
                      <p align="center" class="style15">NR 94 (上水線)</p>
                    </td>
                    <td width="160" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$12.50</p>
                    </td>
                    <td width="200" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$10.00</p>
                    </td>
                    <td width="200" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$ 5.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#FFFAE6">
                      <p align="center" class="style15">NR 948 (青衣線)</p>
                    </td>
                    <td width="160" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$25.00</p>
                    </td>
                    <td width="200" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$21.50</p>
                    </td>
                    <td width="200" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$10.80</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#F9FCEF">
                      <p align="center" class="style15">NR 91 (中環線)</p>
                    </td>
                    <td width="160" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$37.50</p>
                    </td>
                    <td width="200" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$34.00</p>
                    </td>
                    <td width="200" bgcolor="#F9FCEF">
                      <p align="center" class="style10">不適用</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#FFFAE6">
                      <p align="center" class="style15">NR 92 (荃灣線)</p>
                    </td>
                    <td width="160" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$25.00</p>
                    </td>
                    <td width="200" bgcolor="#FFFAE6">
                      <p align="center" class="style15">$21.50</p>
                    </td>
                    <td width="200" bgcolor="#FFFAE6">
                      <p align="center" class="style10">不適用</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="160" bgcolor="#F9FCEF">
                      <p align="center" class="style15">NR 936 (紅磡線)</p>
                    </td>
                    <td width="160" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$29.50</p>
                    </td>
                    <td width="200" bgcolor="#F9FCEF">
                      <p align="center" class="style15">$26.00</p>
                    </td>
                    <td width="200" bgcolor="#F9FCEF">
                      <p align="center" class="style10">不適用</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p><b>乘車優惠</b></p>
              <p>
                住戶如希望享有乘車優惠，<u>必須於管理公司作出登記</u>，生效日期為登記後三個工作天起計，
                如在週五或週六登記，將會當下週一登記計算。早前已申請住戶智能咭並登記其合適八達通咭的住戶，則無需再次登記。
              </p>
              <p>
                此外，已於「錦綉花園業主聯會」登記乘車優惠之60至64歲住戶亦<u>須重新登記其個人八達通</u>，方享有半價乘車優惠。
              </p>
              <table
                width="720"
                border="1"
                cellpadding="3"
                cellspacing="0"
                bordercolor="#FFFFFF"
              >
                <tbody>
                  <tr>
                    <td
                      height="30"
                      colspan="5"
                      bgcolor="#7CA628"
                      align="center"
                    >
                      <font color="#FFFFFF" class="style15"
                        >乘 車 優 惠 及 條 件</font
                      >
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="5" bgcolor="#E7F4BB" width="60">
                      <p align="center" class="style8">住戶</p>
                    </td>
                    <td bgcolor="#E7F4BB" width="100">
                      <p align="center" class="style8">年齡</p>
                    </td>
                    <td bgcolor="#E7F4BB" width="160">
                      <p align="center" class="style8">條件</p>
                    </td>
                    <td bgcolor="#E7F4BB" width="160">
                      <p align="center" class="style8">適用之八達通咭</p>
                    </td>
                    <td bgcolor="#E7F4BB" width="160">
                      <p align="center" class="style8">享有優惠</p>
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#FFFAE6">
                      <p align="center" class="style15">4至＜13歲</p>
                    </td>
                    <td rowspan="4" bgcolor="#FFFAE6">
                      <p align="center" class="style15">
                        於管理公司<br />已申請住戶智能咭及<br />登記其合適八達通咭
                      </p>
                    </td>
                    <td bgcolor="#FFFAE6">
                      <p align="center" class="style15">兒童八達通</p>
                    </td>
                    <td bgcolor="#FFFAE6">
                      <p align="center" class="style15">半價</p>
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#F9FCEF">
                      <p align="center" class="style15">13至＜60歲</p>
                    </td>
                    <td bgcolor="#F9FCEF">
                      <p align="center" class="style15">成人或個人八達通</p>
                    </td>
                    <td bgcolor="#F9FCEF">
                      <p align="center" class="style15">住戶優惠</p>
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#FFFAE6">
                      <p align="center" class="style15">60至＜65歲</p>
                    </td>
                    <td bgcolor="#FFFAE6">
                      <p align="center" class="style15">個人八達通</p>
                    </td>
                    <td bgcolor="#FFFAE6">
                      <p align="center" class="style15">半價</p>
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#F9FCEF">
                      <p align="center" class="style15">65或以上</p>
                    </td>
                    <td bgcolor="#F9FCEF">
                      <p align="center" class="style15">長者或個人八達通</p>
                    </td>
                    <td bgcolor="#F9FCEF">
                      <p align="center" class="style15">半價</p>
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#E7F4BB">
                      <p align="center" class="style8">非住戶</p>
                    </td>
                    <td align="center" bgcolor="#FFFAE6" colspan="4">
                      <p align="center" class="style15">無任何乘車優惠</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 免费穿梭巴士 -->
            <div
              class="free-bus"
              v-if="nav_index === coach_service_list.length - 1"
            >
              <div class="table">
                <h2>
                  {{
                    fairview_park_lang === "en_us"
                      ? "FREE SHUTTLE BUS"
                      : "邨内免費穿梭巴士"
                  }}
                </h2>
                <h5>
                  {{
                    fairview_park_lang === "en_us"
                      ? "No.1 Blue Route Shuttle Bus "
                      : "一號藍線巴士"
                  }}
                </h5>
                <p>
                  {{
                    fairview_park_lang === "en_us"
                      ? "From Bus Terminus"
                      : "巴士總站開出"
                  }}
                </p>
                <ul>
                  <li
                    v-for="(item, index) in [
                      {
                        index1: '1.',
                        time1: '10:30a.m.',
                        index2: '10.',
                        time2: '3:00p.m.',
                      },
                      {
                        index1: '2.',
                        time1: '11:00a.m.',
                        index2: '11.',
                        time2: '3:30p.m.',
                      },
                      {
                        index1: '3.',
                        time1: '11:30a.m.',
                        index2: '12.',
                        time2: '4:00p.m.',
                      },
                      {
                        index1: '4.',
                        time1: '12:00noon',
                        index2: '13.',
                        time2: '4:30p.m.',
                      },
                      {
                        index1: '5.',
                        time1: '12:30p.m.',
                        index2: '14.',
                        time2: '5:00p.m.',
                      },
                      {
                        index1: '6.',
                        time1: '1:00p.m.',
                        index2: '15.',
                        time2: '5:30p.m.',
                      },
                      {
                        index1: '7.',
                        time1: '1:30p.m.',
                        index2: '16.',
                        time2: '6:00p.m.',
                      },
                      {
                        index1: '8.',
                        time1: '2:00p.m.',
                        index2: '17.',
                        time2: '6:30p.m.',
                      },
                      {
                        index1: '9.',
                        time1: '2:30p.m.',
                        index2: '18.',
                        time2: '7:00p.m.',
                      },
                    ]"
                    :key="index"
                    class="flex-row"
                  >
                    <span style="text-align: center">
                      <div
                        style="width: 150px; text-align: left; margin: 0 auto"
                      >
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index1
                        }}</i
                        >{{ item.time1 }}
                      </div></span
                    >
                    <span>
                      <div
                        style="width: 150px; text-align: left; margin: 0 auto"
                      >
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
                <p style="text-align: left" class="fs-16">
                  {{
                    fairview_park_lang === "en_us"
                      ? "Shuttle Bus Routing:"
                      : "巴士途徑路線如下 :"
                  }}
                </p>
                <div
                  class="img"
                  style="width: 500px; height: 500px; background-color: #ccc"
                >
                  <img
                    style="width: 100%"
                    src="../../assets/image/coach service/Routing_Blue.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    :src="fairview_park_lang === 'en_us' ? router1_en : router1"
                    alt=""
                  />
                </div>
              </div>
              <!--  -->
              <div class="table mt-30">
                <h5 style="background-color: #fd9697">
                  {{
                    fairview_park_lang === "en_us"
                      ? "No.2 Red Route Shuttle Bus"
                      : "二號红線巴士"
                  }}
                </h5>
                <p>
                  {{
                    fairview_park_lang === "en_us"
                      ? "From Bus Terminus"
                      : "巴士總站開出"
                  }}
                </p>
                <ul>
                  <li
                    v-for="(item, index) in [
                      {
                        index1: '1.',
                        time1: '10:30a.m.',
                        index2: '10.',
                        time2: '3:00p.m.',
                      },
                      {
                        index1: '2.',
                        time1: '11:00a.m.',
                        index2: '11.',
                        time2: '3:30p.m.',
                      },
                      {
                        index1: '3.',
                        time1: '11:30a.m.',
                        index2: '12.',
                        time2: '4:00p.m.',
                      },
                      {
                        index1: '4.',
                        time1: '12:00noon',
                        index2: '13.',
                        time2: '4:30p.m.',
                      },
                      {
                        index1: '5.',
                        time1: '12:30p.m.',
                        index2: '14.',
                        time2: '5:00p.m.',
                      },
                      {
                        index1: '6.',
                        time1: '1:00p.m.',
                        index2: '15.',
                        time2: '5:30p.m.',
                      },
                      {
                        index1: '7.',
                        time1: '1:30p.m.',
                        index2: '16.',
                        time2: '6:00p.m.',
                      },
                      {
                        index1: '8.',
                        time1: '2:00p.m.',
                        index2: '17.',
                        time2: '6:30p.m.',
                      },
                      {
                        index1: '9.',
                        time1: '2:30p.m.',
                        index2: '18.',
                        time2: '7:00p.m.',
                      },
                    ]"
                    :key="index"
                    class="flex-row"
                  >
                    <span style="text-align: center">
                      <div
                        style="width: 150px; text-align: left; margin: 0 auto"
                      >
                        <i style="display: inline-block; margin-right: 50px">{{
                          item.index1
                        }}</i
                        >{{ item.time1 }}
                      </div></span
                    >
                    <span>
                      <div
                        style="width: 150px; text-align: left; margin: 0 auto"
                      >
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
                <p style="text-align: left" class="fs-16">
                  {{
                    fairview_park_lang === "en_us"
                      ? "Shuttle Bus Routing:"
                      : "巴士途徑路線如下 :"
                  }}
                </p>
                <div
                  class="img"
                  style="width: 500px; height: 500px; background-color: #ccc"
                >
                  <img
                    style="width: 100%"
                    src="../../assets/image/coach service/Routing_Red.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
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
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url)
        .href,
      router1: new URL(
        "../../assets/image/coach service/route1.gif",
        import.meta.url
      ).href,
      router1_en: new URL(
        "../../assets/image/coach service/route1_en.jpeg",
        import.meta.url
      ).href,
      router2: new URL(
        "../../assets/image/coach service/route2.gif",
        import.meta.url
      ).href,
      router2_en: new URL(
        "../../assets/image/coach service/route2_en.jpeg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      coach_service_list: [
        {
          id: 15,
          orderNo: 3,
          titleEnUs: "中环线",
        },
        {
          id: 15,
          orderNo: 3,
          titleEnUs: "专巴收费表",
        },
        {
          id: 15,
          orderNo: 3,
          titleEnUs: "邨免费巴士",
        },
      ],
      coach_service_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋邨资料 列表
    const findUsefulTelephoneNosList = async (id) => {
      try {
        const res = await proxy.$http.findUsefulTelephoneNosList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            data.coach_service_content.push(res.data.data.records);
          } else {
            data.coach_service_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      //   await findUsefulTelephoneNosList();
      //   data.coach_service_list.map((item) => {
      //     findUsefulTelephoneNosList(item.id);
      //   });
    });
    return {
      ...toRefs(data),
      findUsefulTelephoneNosList,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  overflow: hidden;
  img {
    opacity: 0.5;
    width: 100%;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
    b {
      color: #2fa94e;
    }
  }
}
.nav-wrap {
  padding: 20px;
  .row {
    .aside {
      ul {
        position: sticky;
        top: 10px;
        // flex-wrap: nowrap;
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
          background-color: rgb(235, 233, 233);
          cursor: pointer;
          i {
            font-size: 16px;
            margin-right: 5px;
            display: none;
            color: #000;
          }
          span {
            font-size: 15px;
            color: #000;
          }
        }
        .active {
          background-color: #5cb89e;
          i {
            color: #fff;
            display: inline-block;
          }
          span {
            color: #fff;
          }
        }
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;
      .free-bus {
        .table {
          h2 {
            background-color: #7da533;
            margin: 0;
            color: #fff;
            font-size: 20px;
            padding: 5px;
            font-weight: normal;
          }
          h5 {
            background-color: #7abcfd;
            margin: 0;
            padding: 5px;
            font-weight: normal;
          }
          p {
            background-color: #fef0ab;
            margin: 0;
            font-size: 16px;
            padding: 5px;
          }
          ul {
            padding: 0;
            li {
              font-size: 16px;
              background-color: #fffae7;

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
@media (max-width: 992px) {
  .banner {
    img {
      opacity: 0.5;
      width: auto;
      height: 200px;
    }
  }
}
</style>
