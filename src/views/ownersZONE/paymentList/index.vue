<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-11 23:29:42
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="buyer-server">
    <!-- banner -->
    <div class="banner">
      <div
        class="img"
        style="width: 100%; height: 100%"
        :style="{ 'background-image': 'url(' + banner + ')' }"
      ></div>
      <p>
        {{ fairview_park_lang === "en_us" ? "Payment" : "收費"
        }}{{ fairview_park_lang === "en_us" ? " List" : "表" }}
      </p>
    </div>
    <!-- 內容 -->
    <div class="content mt-20" style=" margin: 20px auto">
      <h5>
        {{ fairview_park_lang === "en_us" ? "Payment List" : "付款項目" }}
      </h5>
      <p>
        {{
          fairview_park_lang === "en_us"
            ? "(This list will be updated upon changes to the fees)"
            : "本收費表將會跟隨有關費用 / 按金調整而做出更改"
        }}
      </p>
      <!-- 保安部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
              color: #fff;
            "
            >{{ fairview_park_lang === "en_us" ? "Security Department" : "保安部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr style="width: 100%; background-color: #d5ea95; text-align: center">
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? 'Description' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Amount (HK$)' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Document' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Unauthorized Parking Fee' : '違例泊車罰款',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Notice for Payment of Unauthorized Parking Fee' : '繳交違例泊車罰款通知書',
                    isHasBottomBorder: false,
                    pdf: 'https://en.fairviewpark.hk/attachment.php?id=1049',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Impounding Charge' : '-	鎖車費用',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '320 / each' : '320 / 部',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Removal Charge' : '-	移走車輛費用',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '350 / each' : '350 / 部',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Storage Charge' : '-	存放車輛費用',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '320 / day' : '320 / 日',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
              }"
            >
              <span v-if="!item2.pdf">{{ item2.text }}</span>
              <a v-if="item2.pdf" :href="item2.pdf" target="_blank">{{ item2.text }}</a>
            </td>
          </tr>
        </table>
      </div>
      <!-- 會計部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
              color: #fff;
            "
            >{{ fairview_park_lang === "en_us" ? "Accounts Department" : "會計部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr style="width: 100%; background-color: #d5ea95; text-align: center">
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? 'Description' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Amount (HK$)' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Document' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Management Fee' : '管理費',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '1,630 – 2,401 / month	' : '1,630 – 2,401 / 月',
                    isHasBottomBorder: true,
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us' ? 'Estate Management Notice No. 66 (ACD/2022)' : '管理通告第66號 (ACD/2022)',
                    isHasBottomBorder: true,
                    pdf: 'https://cn.fairviewpark.hk/attachment.php?id=1649',
                  },
                ],
              },
              {
                children: [
                  {
                    text:
                      fairview_park_lang === 'en_us' ? 'Collection Charge for Overdue Management Fee' : '逾期支付管理費的行政費用',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '200 / claim' : '200 / 次',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Registration of a Legal Charge' : '田土廳登記費',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '2,300 / each' : '2,300 / 次',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
                'background-color': item2.color ? item2.color : '',
              }"
            >
              <span v-if="!item2.pdf">{{ item2.text }}</span>
              <a v-if="item2.pdf" :href="item2.pdf" target="_blank">{{ item2.text }}</a>
            </td>
          </tr>
        </table>
      </div>
      <!-- 行政部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
              color: #fff;
            "
            >{{ fairview_park_lang === "en_us" ? "Administration Department" : "行政部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr style="width: 100%; background-color: #d5ea95; text-align: center">
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? 'Description' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Amount (HK$)' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Document' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Foundation Fund' : '管理基金',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '1,200 / unit' : '1,200 / 物業',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Decoration Deposit / Other Charges' : '裝修按金 / 其它收費',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Decoration Application Form' : '裝修申請表',
                    isHasBottomBorder: false,
                    pdf: 'https://en.fairviewpark.hk/attachment.php?id=38',
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Payable by The Owner' : '-	由業主支付的裝修按金',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '10,000 / unit' : '10,000 / 物業',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text:
                      fairview_park_lang === 'en_us' ? '-	Payable by The Decorator' : '-	由裝修公司支付的裝修按金',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '10,000 / unit' : '10,000 / 物業',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-		Handling Fee for Application for Extension of Decoration Period' : '-	申請延長裝修期',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '200 /each' : '200 / 次',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Decoration Worker Permit' : '-	裝修工作証',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '10 /each' : '10 / 張',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Charge for Non-return, Loss or Damage of a Decoration Worker Permit' : '-	遺失或損毀裝修工作証',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '100 /each' : '100 / 張',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	Charge for Loss of a Decoration Vehicle Entry Permit' : '-	遺失裝修車輛入閘許可証',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '100 /each' : '100 / 張',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Charge for Record Plan Copy' : '屋宇建築圖則副本',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Application Form For Record Plan Copy' : '屋宇建築圖則副本申請表',
                    isHasBottomBorder: false,
                    pdf: 'https://en.fairviewpark.hk/attachment.php?id=1048',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	1st Copy' : '-	首張副本',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '800' : '800',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '-	2nd and Subsequent Copy' : '-	次張起每張副本',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '400' : '400',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
                'background-color': item2.color ? item2.color : '',
              }"
            >
              {{ item2.text }}
            </td>
          </tr>
        </table>
      </div>
       <!-- 客户服务部 -->
       <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
              color: #fff;
            "
            >{{ fairview_park_lang === "en_us" ? "Customer Service Department	" : "客户服務部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr style="width: 100%; background-color: #d5ea95; text-align: center">
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? 'Description' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Amount (HK$)' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Document' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Handling Fee for Loss of an Entry Label' : '遺失入閘証手續費',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '50 / each' : '50 / 張',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Application Form for RP Car Entry Label (Years 2021 - 2022)' : 'RP 車輛入閘証申請表(2021 - 2022 年度)',
                    isHasBottomBorder: true,
                    pdf: 'https://cn.fairviewpark.hk/attachment.php?id=1126',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Handling Fee for Loss of a Resident Smart Card' : '補領住戶智能卡手績費',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '50 / each' : '50 / 張',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Application Form for Resident Smart Card (Owner)' : '住戶智能卡申請表(業戶)',
                    isHasBottomBorder: false,
                    pdf:'https://cn.fairviewpark.hk/attachment.php?id=778',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Application Form for Resident Smart Card (Resident Tenant)' : '住戶智能卡申請表(住宅租戶)',
                    isHasBottomBorder: true,
                    pdf:'https://cn.fairviewpark.hk/attachment.php?id=779',
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
              }"
            >
              <span v-if="!item2.pdf">{{ item2.text }}</span>
              <a v-if="item2.pdf" :href="item2.pdf" target="_blank">{{ item2.text }}</a>
            </td>
          </tr>
        </table>
      </div>
      <!-- 环境服务部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
              color: #fff;
            "
            >{{ fairview_park_lang === "en_us" ? "Environmental Services Department" : "環境服務部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr style="width: 100%; background-color: #d5ea95; text-align: center">
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? 'Description' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Amount (HK$)' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? 'Document' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? 'Disposal Charge for Non-domestic Refuse' : '非家居垃圾清理收費',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '30-120 per unit or volume' : '30-120 / 件(按每件數量/體積計算)',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? 'Estate Management Notice No. 42/2018' : '管理通告第四十二 / 二O一八號',
                    isHasBottomBorder: true,
                    pdf: 'https://en.fairviewpark.hk/attachment.php?id=1083',
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
              }"
            >
              <span v-if="!item2.pdf">{{ item2.text }}</span>
              <a v-if="item2.pdf" :href="item2.pdf" target="_blank">{{ item2.text }}</a>
            </td>
          </tr>
        </table>
      </div>
       <!-- 维修部 -->
       <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
              color: #fff;
            "
            >{{ fairview_park_lang === "en_us" ? "Maintenance Department	" : "維修部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr style="width: 100%; background-color: #cefece; text-align: left">
            <td
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? 'Any person who has damaged a public facility in Fairview Park will be served a debit note/quotation for compensation. The debit note/quotation is prepared by the Maintenance Department on the basis of its checking, repair and maintenance costs plus a supervision charge (20% of these costs).' : '	本司向任何損毀本邨公共設施的人仕發送收費單或報價單追討賠償, 金額包括檢查費、維修費及行政費(按上述費用的百分之二十提取)。',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      banner: new URL("../../../assets/image/common-banner/owner-zone.jpg", import.meta.url).href,
      title: new URL("../../../assets/image/privilege/dp.png", import.meta.url).href,
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
      font-family: 'Poppins-Bold', SourceHanSansCN-Regular, Arial;
      color: #fff;
      text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
      b {
        color: var(--mainColor1);
      text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
      }
    }
  }
  .content {
    margin: 0 auto;
    padding: 0 20px;
    tr {
      &:last-child {
        td {
          // border-bottom-width: 1px !important;
        }
      }
      td {
        &:first-child {
          text-align: left !important;
        }
      }
    }
    td {
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
      height: 200px!important;
    img {
      width: auto;
    }
  }
}
</style>
