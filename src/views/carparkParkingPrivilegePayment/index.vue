<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-19 14:22:39
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="buyer-server">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{
          fairview_park_lang === "en_us"
            ? "Carpark Parking Privilege"
            : "停車場泊車優惠"
        }}<b>{{
          fairview_park_lang === "en_us" ? "&nbsp;Payment" : "收費表"
        }}</b>
      </p>
    </div>
    <!-- 內容 -->
    <div class="content mt-20" style="margin: 20px auto;padding:20px;">
      <table
        align="center"
        border="1"
        cellpadding="0"
        cellspacing="0"
        style=""
      >
        <tbody>
          <tr height="34" style="height: 25.5pt">
            <td
              align="center"
              colspan="3"
              height="34"
              style="font-size: 20px; color: red; font-weight: bold"
            >
              {{fairview_park_lang === "en_us" ?"GINKGO ROAD CARPARK - PARKING PRIVILEGE PAYMENT":"銀杏路停車場 - 泊車優惠收費"}}
            </td>
          </tr>

          <tr height="25" style="height: 18.75pt">
            <td align="center" colspan="3" height="25" bgcolor="#dfecd7">
              {{fairview_park_lang === "en_us" ?"Parking Fee：Hourly Charge + Entry Fee : HK$ 1":"停車場收費：時租收費 + 入場費 : HK$ 1"}}
            </td>
          </tr>

          <tr height="67" style="">
            <td rowspan="2" colspan="2" height="88" width="300" style="">
              <p style="margin-left: 5px; font-weight: bold">
                {{fairview_park_lang === "en_us" ?"Owner Registered Octopus Users":"業主有登記八達通咭之用戶"}}
              </p>
            </td>
            <td rowspan="2" style="text-align: center">{{fairview_park_lang === "en_us" ?"Hourly Charge HK$16":"時租收費HK$16"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="23" style="">
            <td rowspan="2" height="44" colspan="3" style="font-weight: bold">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Other Drivers":"其他司機"}}</p>
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45">
            <td rowspan="2" height="66" colspan="2">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Mon to Sat":"星期一至星期六"}}</p>
            </td>
            <td rowspan="2" style="text-align: center">{{fairview_park_lang === "en_us" ?"Hourly Charge HK$16":"時租收費HK$16"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45">
            <td rowspan="2" height="66" colspan="2">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公眾假期"}}</p>
            </td>
            <td rowspan="2" style="text-align: center">{{fairview_park_lang === "en_us" ?"Hourly Charge HK $20":"時租收費HK $20"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="height: 16.5pt">
            <td height="22" colspan="3">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Hourly Charge：Calculated on hourly basis. Part of an hour is colunted as full hour.":"時租收費：按小時計算，不足一小時亦當一小時計算。"}}
                <br />{{fairview_park_lang === "en_us" ?"For Carpark Rules, please see sign board at Ginkgo Road Carpark entrance.":"停車場使用守則，請參閱銀杏路停車場入口標示板。"}}
                
              </p>
            </td>
          </tr>

          <tr height="25" style="height: 18.75pt">
            <td
              height="25"
              colspan="3"
              bgcolor="#dce9f3"
              style="font-size: 20px; font-weight: bold; text-align: center"
            >{{fairview_park_lang === "en_us" ?"Owner Registered Octopus Users":"業主有登記八達通咭之用戶"}}
              
            </td>
          </tr>

          <tr height="45" style="text-align: center">
            <td
              rowspan="2"
              height="66"
              bgcolor="#dce9f3"
              width="300"
              style="height: 49.5pt; width: 300px"
            >{{fairview_park_lang === "en_us" ?"Time of Exit":"出車時間"}}
              
            </td>
            <td rowspan="2" width="229" bgcolor="#dce9f3" style="width: 229px">
              {{fairview_park_lang === "en_us" ?"Mon - Sat":"星期一至星期六"}}
            </td>
            <td rowspan="2" width="169" bgcolor="#dce9f3" style="width: 169px">
              {{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公眾假期"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="23" style="text-align: center">
            <td rowspan="2" height="44" width="385" style="height: 33pt">
              {{fairview_park_lang === "en_us" ?"0-30min":"0-30分鐘"}}
            </td>
            <td rowspan="6" width="200" bgcolor="#dce9f3">{{fairview_park_lang === "en_us" ?"HK＄1":"HK＄1"}}</td>
            <td rowspan="4" width="191" bgcolor="#dce9f3">{{fairview_park_lang === "en_us" ?"HK＄1":"HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞30min – 1hr":"＞30 分鐘 – 1 小時"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞1hr – 2hr":"＞1小時 – 2小時"}}
            </td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK$16＋HK＄1":"HK$16＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞2hr – 3hr":"＞2小時 – 3小時"}}
            </td>
            <td rowspan="2" width="295" style="">&nbsp;{{fairview_park_lang === "en_us" ?"HK$16 + HK＄1":"HK$16 + HK＄1"}}</td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK$32＋HK＄1":"HK$32＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞3hr – 4hr":"＞3小時 – 4小時"}}
            </td>
            <td rowspan="2" width="295" style="">&nbsp;{{fairview_park_lang === "en_us" ?"HK$32 + HK＄1":"HK$32 + HK＄1"}}</td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK$48＋HK＄1":"HK$48＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="21" style="text-align: center; font-weight: bold">
            <td rowspan="2" height="42" width="385" style="height: 31.5pt">
              :
            </td>
            <td rowspan="2" width="295" style="">&nbsp;:</td>
            <td rowspan="2" width="191" style="">:</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="21" style="text-align: center; font-weight: bold">
            <td rowspan="2" height="42" width="385" style="height: 31.5pt">
              :
            </td>
            <td rowspan="2" width="295" style="">&nbsp;:</td>
            <td rowspan="2" width="191" style="">:</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="67" style="text-align: center">
            <td rowspan="2" height="88" width="385" style="height: 66pt">
              {{fairview_park_lang === "en_us" ?"＞(n-1)hr–n hr":"＞(n-1) 小時–n小時"}}
            </td>
            <td rowspan="2" width="295" style="">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK＄16 x (n-2)＋HK＄1":"HK＄16 x (n-2)＋HK＄1"}}
            </td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK＄16 x (n-1)＋HK＄1":"HK＄16 x (n-1)＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="">
            <td height="22" colspan="3">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Note : n = number of parking hours":"注: n＝泊車時數"}}</p>
            </td>
          </tr>

          <tr height="25" style="height: 18.75pt">
            <td
              height="25"
              colspan="3"
              bgcolor="#dce9f3"
              style="font-size: 20px; font-weight: bold; text-align: center"
            >
            {{fairview_park_lang === "en_us" ?"Other Drivers":"其他司機"}}
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
            {{fairview_park_lang === "en_us" ?"Time of Exit":"出車時間"}}
            </td>
            <td rowspan="2" width="295" bgcolor="#dce9f3" style="">
              &nbsp;{{fairview_park_lang === "en_us" ?"Mon - Sat":"星期一至星期六"}}
            </td>
            <td rowspan="2" width="191" bgcolor="#dce9f3" style="">
              {{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公衆假期"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="23" style="text-align: center">
            <td rowspan="2" height="44" width="385" bgcolor="#dce9f3">
              {{fairview_park_lang === "en_us" ?"0-30 min":"0-30 分鐘"}}
            </td>
            <td rowspan="4" width="295" bgcolor="#dce9f3">{{fairview_park_lang === "en_us" ?"HK＄1":"HK＄1"}}</td>
            <td rowspan="2" width="191" bgcolor="#dce9f3">{{fairview_park_lang === "en_us" ?"HK＄1":"HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞30min－1hr":"＞30分鐘－1小時"}}
            </td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK＄20＋HK＄1":"HK＄20＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞1hr－2hr":"＞1小時－2小時"}}
            </td>
            <td rowspan="2" width="295" style="">&nbsp;{{fairview_park_lang === "en_us" ?"HK＄16＋HK＄1":"HK＄16＋HK＄1"}}</td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK＄40＋HK＄1":"HK＄40＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞2hr－3hr":"＞2小時－3小時"}}
            </td>
            <td rowspan="2" width="295" style="">&nbsp; {{fairview_park_lang === "en_us" ?"HK＄32＋HK＄1":"HK＄32＋HK＄1"}}</td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK＄60＋HK＄1":"HK＄60＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞3hr－4hr":"＞3小時－4小時"}}
            </td>
            <td rowspan="2" width="295" style="">&nbsp;{{fairview_park_lang === "en_us" ?"HK＄48＋HK＄1":"HK＄48＋HK＄1"}}</td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK＄80＋HK＄1":"HK＄80＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="21" style="text-align: center; font-weight: bold">
            <td rowspan="2" height="42" width="385" style="height: 31.5pt">
              :
            </td>
            <td rowspan="2" width="295" style="">&nbsp;:</td>
            <td rowspan="2" width="191" style="">:</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="21" style="text-align: center; font-weight: bold">
            <td rowspan="2" height="42" width="385" style="height: 31.5pt">
              :
            </td>
            <td rowspan="2" width="295" style="">&nbsp;:</td>
            <td rowspan="2" width="191" style="">:</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="67" style="text-align: center">
            <td rowspan="2" height="88" width="385" style="height: 66pt">
              {{fairview_park_lang === "en_us" ?"＞(n-1)hr–nhr":"＞(n-1)小時–n小時"}}
            </td>
            <td rowspan="2" width="295" style="">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK＄16 x (n-1)＋HK＄1":"HK＄16 x (n-1)＋HK＄1"}}
            </td>
            <td rowspan="2" width="191" style="">{{fairview_park_lang === "en_us" ?"HK＄20 x (n)＋HK＄1":"HK＄20 x (n)＋HK＄1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="">
            <td height="22" colspan="3">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Note : n = number of parking hours":"注: n＝泊車時數"}}</p>
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
        style=""
      >
        <tbody>
          <tr height="34" style="">
            <td
              align="center"
              colspan="3"
              height="34"
              style="font-size: 20px; color: red; font-weight: bold"
            >
            {{fairview_park_lang === "en_us" ?"LOTUS ROAD CARPARK - PARKING PRIVILEGE PAYMENT(24 Hours)":"紅荷路停車場 - 泊車優惠收費表(24小時)"}}
            </td>
          </tr>

          <tr height="25" style="">
            <td
              align="center"
              colspan="3"
              height="25"
              bgcolor="#dfecd7"
              style=""
            >
            {{fairview_park_lang === "en_us" ?"Parking Fee：Hourly Charge + Entry Fee : HK$ 1":"停車場收費：時租收費 ＋入場費 : HK$ 1"}}
            </td>
          </tr>

          <tr height="67" style="">
            <td rowspan="2" colspan="2" height="88" width="400" style="">
              <p style="margin-left: 5px; font-weight: bold">
                {{fairview_park_lang === "en_us" ?"Owner Registered Octopus Users":"業主有登記八達通咭之用戶"}}
              </p>
            </td>
            <td rowspan="2" width="300" style="text-align: center">
              {{fairview_park_lang === "en_us" ?"Hourly Charge HK＄16":"時租收費HK＄16"}}
            </td>
          </tr>
          <tr height="21" style=""></tr>

          <tr height="67" style="mso-height-source: userset; height: 50.25pt">
            <td rowspan="2" height="88" colspan="2" width="400" style="">
              <p style="margin-left: 5px; font-weight: bold">
                {{fairview_park_lang === "en_us" ?"Club Registered Octopus Users":"會所有登記八達通咭之用戶"}}
              </p>
            </td>
            <td rowspan="2" width="300" style="text-align: center">
              {{fairview_park_lang === "en_us" ?"Hourly Charge HK＄16":"時租收費HK＄16"}}
            </td>
          </tr>
          <tr height="21" style=""></tr>

          <tr height="23" style="">
            <td rowspan="2" height="44" colspan="3" width="300" style="">
              <p style="margin-left: 5px; font-weight: bold"> {{fairview_park_lang === "en_us" ?"Other Drivers":"其他司機"}}</p>
            </td>
          </tr>

          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="">
            <td rowspan="2" height="66" colspan="2" width="400" style="">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Mon - Sat":"星期一至星期六"}}</p>
            </td>
            <td rowspan="2" width="300" style="text-align: center">
              {{fairview_park_lang === "en_us" ?"Hourly Charge HK＄16":"時租收費HK＄16"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="">
            <td rowspan="2" height="66" colspan="2" width="400" style="">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公衆假期"}}</p>
            </td>
            <td rowspan="2" width="300" style="text-align: center">
              {{fairview_park_lang === "en_us" ?"Hourly Charge HK＄20":"時租收費HK＄20"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="height: 16.5pt">
            <td height="22" colspan="3">
              <p style="margin-left: 5px">
                {{fairview_park_lang === "en_us" ?"Hourly Charge：Calculated on hourly basis. Part of an hour is counted as full hour.":"時租收費：按小時計算，不足一小時亦當一小時計算。"}}<br />
                {{fairview_park_lang === "en_us" ?"For Carpark Rules, please see sign board at the Lotus Road Carpark entrance.":"停車場使用守則，請參閱紅荷路停車場入口標示板。"}}
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
            {{fairview_park_lang === "en_us" ?"Club Registered Octopus Users":"會所有登記八達通咭之用戶"}}
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
            {{fairview_park_lang === "en_us" ?"Time of Exit":"出車時間"}}
            </td>
            <td rowspan="2" bgcolor="#dce9f3" width="438" style="">
              &nbsp; {{fairview_park_lang === "en_us" ?"Mon - Sat":"星期一至星期六"}}
            </td>
            <td rowspan="2" bgcolor="#dce9f3" width="207" style="">
              {{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公衆假期"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="23" style="text-align: center">
            <td rowspan="2" height="44" width="385" style="height: 33pt">
              {{fairview_park_lang === "en_us" ?"0-30min":"0-30分鐘"}}
            </td>
            <td rowspan="14" width="438" bgcolor="#dce9f3" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$1":"HK$1"}}
            </td>
            <td rowspan="14" width="207" bgcolor="#dce9f3" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"HK$1":"HK$1"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞30min－1hr":"＞30分鐘－1小時$1"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞1hr－2hr":"＞1小時－2小時"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞2hr－3hr":"＞2小時－3小時"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞3hr－4hr":"＞3小時－4小時"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞4hr－5hr":"＞4小時－5小時"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞5hr－6hr":"＞5小時－6小時"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞6hr－7hr":"＞6小時－7小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$16＋HK$1":"HK$16＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$16＋HK$1":"HK$16＋HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞7hr－8hr":"＞7小時－8小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$32＋HK$1":"HK$32＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$32＋HK$1":"HK$32＋HK$1"}}</td>
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
              {{fairview_park_lang === "en_us" ?"＞(n-1)hr-nhr":"＞(n-1)小時-n小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$16 x (n-6)＋HK$1":"HK$16 x (n-6)＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"HK$16 x (n-6)＋HK$1":"HK$16 x (n-6)＋HK$1"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="height: 16.5pt">
            <td height="22" colspan="3" style="height: 16.5pt">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Note : n = number of parking hours":"註：n＝泊車時數"}}</p>
            </td>
          </tr>

          <tr height="25" style="height: 18.75pt">
            <td
              height="25"
              colspan="3"
              bgcolor="#dce9f3"
              style="font-size: 20px; font-weight: bold; text-align: center"
            >
            {{fairview_park_lang === "en_us" ?"Owner Registered Octopus Users":"業主有登記八達通咭之用戶"}}
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
            {{fairview_park_lang === "en_us" ?"Time of Exit":"出車時間"}}
            </td>
            <td rowspan="2" width="200" bgcolor="#dce9f3" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"Mon - Sat":"星期一至星期六"}}
            </td>
            <td rowspan="2" width="200" bgcolor="#dce9f3" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公衆假期"}}
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
            {{fairview_park_lang === "en_us" ?"0-30min":"0-30分鐘"}}
            </td>
            <td rowspan="6" width="438" bgcolor="#dce9f3" style="width: 152pt">
              {{fairview_park_lang === "en_us" ?"HK$1":"HK$1"}}
            </td>
            <td rowspan="4" width="207" bgcolor="#dce9f3" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"HK$1":"HK$1"}}
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
            {{fairview_park_lang === "en_us" ?"＞30min-1hr":"＞30分鐘-1小時"}}
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
            {{fairview_park_lang === "en_us" ?"＞1hr-2hr":"＞1小時-2小時"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$16＋HK$1":"HK$16＋HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td
              rowspan="2"
              height="66"
              width="385"
              style="height: 49.5pt; width: 465pt"
            >
            {{fairview_park_lang === "en_us" ?"＞2hr-3hr":"＞2小時-3小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$16 + HK$1":"HK$16 + HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$32＋HK$1":"HK$32＋HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞3hr-4hr":"＞3小時-4小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$32 + HK$1":"HK$32 + HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$48＋HK$1":"HK$48＋HK$1"}}</td>
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
              {{fairview_park_lang === "en_us" ?"＞(n-1)hr-nhr":"＞(n-1)小時-n小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$16 x (n-2)＋HK$1":"HK$16 x (n-2)＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"HK$16 x (n-1)＋HK$1":"HK$16 x (n-1)＋HK$1"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="height: 16.5pt">
            <td height="22" colspan="3" style="height: 16.5pt">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Note : n = number of parking hours":"註：n＝泊車時數"}}</p>
            </td>
          </tr>

          <tr height="25" style="">
            <td
              height="25"
              colspan="3"
              bgcolor="#dce9f3"
              style="font-size: 20px; font-weight: bold; text-align: center"
            >
            {{fairview_park_lang === "en_us" ?"Other Drivers":"其他司機"}}
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
            {{fairview_park_lang === "en_us" ?"Time of Exit":"出車時間"}}
            </td>
            <td rowspan="2" width="438" bgcolor="#dce9f3" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"Mon - Sat":"星期一至星期六"}}
            </td>
            <td rowspan="2" width="207" bgcolor="#dce9f3" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"Sun & Public Holidays":"星期日及公衆假期"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="23" style="text-align: center">
            <td rowspan="2" height="44" width="385">{{fairview_park_lang === "en_us" ?"0-30min":"0-30分鐘"}}</td>
            <td rowspan="4" bgcolor="#dce9f3">{{fairview_park_lang === "en_us" ?"HK$1":"HK$1"}}</td>
            <td rowspan="2" bgcolor="#dce9f3">{{fairview_park_lang === "en_us" ?"HK$1":"HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞30min－1hr":"＞30分鐘－1小時"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$20＋HK$1":"HK$20＋HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞1hr－2hr":"＞1小時－2小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$16＋HK$1":"HK$16＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$40＋HK$1":"HK$40＋HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞2hr－3hr":"＞2小時－3小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$32＋HK$1":"HK$32＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$60＋HK$1":"HK$60＋HK$1"}}</td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="45" style="text-align: center">
            <td rowspan="2" height="66" width="385" style="height: 49.5pt">
              {{fairview_park_lang === "en_us" ?"＞3hr－4hr":"＞3小時－4小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$48＋HK$1":"HK$48＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">{{fairview_park_lang === "en_us" ?"HK$80＋HK$1":"HK$80＋HK$1"}}</td>
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
              {{fairview_park_lang === "en_us" ?"＞(n-1)hr-nhr":"＞(n-1)小時-n小時"}}
            </td>
            <td rowspan="2" width="438" style="width: 152pt">
              &nbsp;{{fairview_park_lang === "en_us" ?"HK$16 x (n-1)＋HK$1":"HK$16 x (n-1)＋HK$1"}}
            </td>
            <td rowspan="2" width="207" style="width: 155pt">
              {{fairview_park_lang === "en_us" ?"HK$20 x (n)＋HK$1":"HK$20 x (n)＋HK$1"}}
            </td>
          </tr>
          <tr height="21" style="height: 15.75pt"></tr>

          <tr height="22" style="">
            <td height="22" colspan="3">
              <p style="margin-left: 5px">{{fairview_park_lang === "en_us" ?"Note : n = number of parking hours":"註：n＝泊車時數"}}</p>
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
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url)
        .href,
    };
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
.buyer-server {
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
      color: var(--mainColor1)
      }
    }
  }
  .content{
    td{
       border-style: solid;
       border-width: 2px;
    }
  }
}
@media (min-width: 576px) {
  .content {
    width: 540px;
    
  }
}
@media (min-width: 768px) {
  .content {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .content {
    width: 960px;
   
  }
}
@media (min-width: 1200px) {
  .content {
    width: 992px;
  }
}
@media (min-width: 1400px) {
  .content {
    width: 1280px;
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
