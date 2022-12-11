<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-12 00:48:57
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="new-buyer-notice">
    <div class="content mt-20" style="margin: 20px auto; padding: 0 20px">
      <table border="0" cellpadding="0" cellspacing="0" align="center">
        <tbody>
          <tr>
            <td valign="top">
              <table border="0" align="center" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td valign="top">
                      <table
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="
                          border: 1px solid #275535;
                          border-radius: 8px;
                          border-collapse: separate;
                          border-spacing: 0px;
                          overflow: hidden;
                        "
                      >
                        <tbody style="border: 1px solid #275535; border-radius: 5px">
                          <tr
                            style="
                              background-color: #275535;
                              height: 50px;
                              box-sizing: border-box;
                            "
                          >
                            <td style="padding-left: 15px; font-size: 20px; color: #fff">
                              {{
                                fairview_park_lang === "en_us"
                                  ? "To New Owners or Prospective Buyers"
                                  : "致新業主或準買家"
                              }}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td valign="top">
                                      <br />
                                      <br />
                                      <table
                                        border="0"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td class="style13" style="padding: 0 15px">
                                              <p>
                                                {{
                                                  fairview_park_lang === "en_us"
                                                    ? "New owners are reminded that the Estate Management Office handles takes a serious view of the following cases which cause nuisance:"
                                                    : "謹提醒各新業主，管理處會嚴謹處理以下構成公眾滋擾的事項："
                                                }}
                                              </p>
                                              <p></p>
                                            </td>
                                          </tr>
                                          <tr
                                            v-for="(item, index) in fairview_park_lang ===
                                            'en_us'
                                              ? [
                                                  {
                                                    title:
                                                      'Unauthorized additions / alterations',
                                                    des:
                                                      'Prospective buyers should make sure the previous owners have removed and rectified the unauthorized additions / alterations. As a new owner, he / she shall be fully liable for all existing breaches of the DMC committed by previous owners and possibly face legal actions to be taken by the Estate Management Office requiring him / her to remove and rectify the unauthorized additions / alterations and to bear the relevant legal costs.',
                                                  },
                                                  {
                                                    title: 'Street Parking',
                                                    des:
                                                      'The streets in Fairview Park are not designed for street parking. Therefore, owners should ensure their vehicles can be parked in the carport of their property. Estate Management Office is entitled to impound or tow away any vehicles parked on the road, street or common place without prior approval.',
                                                    tip:
                                                      '【Please refer to Rule IV of Chapter D of the Estate Rules for details.】',
                                                  },
                                                  {
                                                    title: 'Dogs',
                                                    des:
                                                      'Owners of each unit cannot keep more than one dog. The Estate Management reserves the right to prohibit house owners from keeping any dog upon receipt of complaint of dog which causes severe nuisance.',
                                                    tip:
                                                      '【Please refer to Rule II(2) of Chapter A and Rule III(6) of Chapter B of the Estate Rules for details.】',
                                                  },
                                                ]
                                              : [
                                                  {
                                                    title: '違例建築',
                                                    des:
                                                      '準買家應確保前任業主已清理及修正單位所有違反公契之加建/改建。作為新業主，他/她必須對前任業主遺留下來之所有違反公契及屋邨守則事項負上全部責任，並可能面對管理處採取之法律行動，而要清理及修正違例之加建/改建，及支付相關的法律費用。',
                                                  },
                                                  {
                                                    title: '街道停泊',
                                                    des:
                                                      '錦綉花園的街道並非為停泊車輛而設計，因此，業主應確保其所有車輛均可泊進其單位之車房內。管理處有權將擅自停放於屋邨道路、街道或公用地方的車輛扣押或拖離。',
                                                    tip:
                                                      '【詳情請參閱屋邨守則丁章規條IV】',
                                                  },
                                                  {
                                                    title: '狗隻',
                                                    des:
                                                      '業主不可在其單位豢養多於壹頭狗隻。如業主所飼養之狗隻對其他人造成嚴重滋擾，管理處有權禁止有關業主豢養任何狗隻。',
                                                    tip:
                                                      '【詳情請參閱屋邨守則甲章規條II(2)及乙章規條III(6)】',
                                                  },
                                                ]"
                                            :key="index"
                                          >
                                            <td class="style13" style="padding: 0 15px">
                                              <table
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <p>
                                                        <strong>{{ item.title }}</strong>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <p>
                                                        {{ item.des }}
                                                        <br />
                                                        <font
                                                          v-if="item.tip"
                                                          color="#3399FF"
                                                          >{{ item.tip }}</font
                                                        >
                                                      </p>
                                                      <p></p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item
                          v-for="(item, index) in fairview_park_lang === 'en_us'
                            ? [
                                {
                                  title:
                                    'What are the standards of fence, garden gate and rolling shutter?',
                                  des:
                                    'No part of the fence or garden gate shall protrude outside the boundary of the house unit. Fences shall not be higher than 2M and shall have 60% open space evenly distributed between 1M and 2M level. Gates shall not exceed 2M in height and must swing inward. Rolling shutters shall not exceed 2.6M in height and shall have 60% open space above 1M.',
                                  tip:
                                    '【Please refer to Rule III(7) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'What are the standards on the erection of carport cover?',
                                  des:
                                    'Erection of a carport cover is applicable to House Types 850, 950, 1050, 1100, 1500 & 1700 units. The carport cover shall not be designed to withstand loading on top. Its specifications must not contravene the laws of Hong Kong or the Land Grand, and approval from the relevant authorities is required. Owners shall not enclose or fenced off the carport cover with any material or in any manner. It shall be erected over the designated car park space and shall not exceed 2.5M wide, 6M long or 2.5M high nor exceed the full length of the attached side wall. Proper gutter and down pipe shall be provided for the carport cover and shall be maintained regularly to ensure no draining of rain water outside the boundary of the house unit.',
                                  tip:
                                    '【Please refer to Rule V(1) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'Are owners allowed to change the colour of exterior walls of their unit?',
                                  des:
                                    'Owners should ensure using the same colour and following the same pattern as originally painted when repainting the exterior walls. Please approach the Estate Management Office to obtain details of colour specification. Owners shall not decorate the exterior walls with any other material or in any manner. Furthermore, owners are not allowed to cut hole(s) on any part of the exterior walls of their houses.',
                                  tip:
                                    '【Please refer to Rule II(3) of Chapter A and Rule III(1) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'Are owners allowed to seal up the manhole covers?',
                                  des:
                                    'Manholes are integral parts of the underground communal draining system for group of houses. Owners must not seal up the manhole covers with any material or by any means to enable access to the manholes for repair and maintenance of the communal drainage system.',
                                  tip:
                                    '【Please refer to Rule II(2) of Chapter A and Rule IV(2) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'Are owners allowed to erect fixed type canopy in the garden or balcony?',
                                  des:
                                    'Owners are not allowed to erect fixed type canopy, sunshade or awning in the balcony or any part of their property. However, retractable awnings with canvas covering can be installed subject to prior written approval of the Estate Management.',
                                  tip:
                                    '【Please refer to Rule II(1) of Chapter A, Rules III(2) and III(4) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'Are owners allowed to carry out alteration or cutting of exterior or interior wall panels in their unit?',
                                  des:
                                    'No alteration work is allowed on the main structure including columns, beams and structural walls.',
                                  tip:
                                    '【Please refer to Rule II(2) of Chapter A, Rules II(1), II(2) and II(3) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'Are owners allowed to construct or place combination houses in garden, balcony or carport?',
                                  des:
                                    'No glass houses or other enclosed structures, combination houses, caravans, show booths, hoardings, advertising stations or other temporary erections shall be erected, placed or allowed to remain on any unbuilt area or on parking spaces.',
                                  tip:
                                    '【Please refer to Rule II(1) of Chapter A, Rule III(2) or Chapter B, Rules III (2) and V of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title: 'Are owners allowed to enclose the carport?',
                                  des:
                                    'Carport covers to House Type 850, 950, 1050, 1100, 1500 & 1700, if erected, shall not be enclosed or fenced off with any material or in any manner. House owners of House Type 1150, 1300, A, A1, B, C & D are not allowed to block any opening at the covered carport or install any door or gate for the covered carport, but may install only see-through and ventilated grilled type rolling shutter.',
                                  tip:
                                    '【Please refer to Rules V(1) and V(2) of Chapter C of the Estate Rules for details.】',
                                },
                                {
                                  title: 'Are owners allowed to keep a dog?',
                                  des:
                                    'Each unit may keep one licensed dog provided that no nuisance is caused to others.',
                                  tip:
                                    '【Please refer to Rule II(2) of Chapter A and Rule III(6) of Chapter B of the Estate Rules for details.】',
                                },
                                {
                                  title:
                                    'What are the methods for payment of management fee?',
                                  des:
                                    'House owners can present their monthly Statement of Account (each statement has a barcode printed thereon) to make payment of management fee at designated convenience stores or management fee may be paid by crossed cheque made payable to “Fairview Park Property Management Ltd.” in person or by sending it to the Estate Management Office by post or by dropping it into one of the “Suggestions and Cheque Boxes” of the Estate Management. Owners / residents are recommended to use the “Autopay” system for the payment of management fee. Direct Debit Authorization Form may be obtained from the Estate Management Office. Cash and post-dated cheque should not be sent by post.',
                                },
                                {
                                  title:
                                    'What procedures should new owners take after change of ownership?',
                                  des:
                                    'New owners should inform the Estate Management by bringing proof of change of ownership issued by their solicitors for completing the formality in the Estate Management Office within one month from the date of such change. For the purpose of saving time, new owners can make appointment with the Estate Management Office by phone.',
                                },
                                {
                                  title:
                                    'What are the procedures for transferring the foundation fund?',
                                  des:
                                    'The Foundation Fund will not be refunded to ex-owners but will be automatically transferred to the successors in title upon change of ownership provided that there is no management fees and other charges being in arrears. The new Owner shall pay the shortfall, if any, after the deduction of the arrears or to meet a newly revised amount of the Foundation Fund in order to make up the full amount as required for that Unit. Therefore, both vendor and purchaser of the Unit concerned are advised to settle the Foundation Fund along with other related accounts during the property transaction.',
                                },
                                {
                                  title:
                                    'What are the procedures for applying “Entry Label”?',
                                  des:
                                    'Owners or their authorized representatives living in the corresponding property can apply entry label(s) for their private cars to facilitate entry into the Estate. If ownership has been changed, owners have to complete the change of ownership formalities at the Administration Department of our office before they can apply for the entry label(s). A maximum of 2 labels will be issued for each of House Types 850, 950, 1050, 1100, 1500 & 1700 units but one label for each of A, A1, B, C, D, 1150 & 1300 units provided the car(s) can be parked within the unit’s parking space. Please bring the relevant documents to the Customer Service Department for application if necessary.',
                                  tip:
                                    '【Please refer to Guidance Notes for Application of Resident Car Entry Label for details.】',
                                },
                              ]
                            : [
                                {
                                  title: '安裝欄河、花園閘及捲閘有什麼準則？',
                                  des:
                                    '欄河或花園閘之任何部份不許伸展出單位範圍外。欄河之高度不許超過2米，1米以上須平均分佈地保留百份之六十的通風空間。花園閘不許超過2米高及須為「內掩」的款式。捲閘的高度不許超過2.6米，1米以上須保留百份之六十的通風空間。',
                                  tip: '【詳情請參閱屋邨守則丙章規III(7)】',
                                },
                                {
                                  title: '建造車位蓋篷有什麼準則？',
                                  des:
                                    '850、950、1050、1100、1500及1700型的屋宇可建造車位蓋篷壹個，但必須為固定式及不可承受重力，必須符合香港法例及「地契」，以及有關政府部門的要求。業主不許將車位蓋篷以任何物料或方法圍封。車位蓋篷必須在指定的泊車位興建。車位蓋篷之闊度不許超越2.5米，長度不許超越6米或屋宇一邊的牆身總長度，高度不應超過2.5米。車位蓋篷亦必須加設水槽及排水管，不許任由雨水引流往單位範圍外。',
                                  tip: '【詳情請參閱屋邨守則丙章規條V(1)】',
                                },
                                {
                                  title: '業主可否更改單位外牆顏色？',
                                  des:
                                    '業主在翻漆外牆時，必須確保顏色與原有外牆色調相同。業主如欲知其屋宇外牆之原有顏色，可到管理處查閱外牆色版。業主亦不許以任何材料或方式裝飾外牆，亦不許在屋宇外牆開鑿孔洞。',
                                  tip:
                                    '【詳情請參閱屋邨守則甲章規條II(3)及丙章規條III(1)】',
                                },
                                {
                                  title: '業主可否把花園內之沙井鐵蓋密封？',
                                  des:
                                    '沙井為屋組共用渠道系統的重要部份，為方便進行維修及保養公用渠道系統，業主不許用任何材料或任何方法將沙井蓋封密。',
                                  tip:
                                    '【詳情請參閱屋邨守則甲章規條II(2)及丙章規條IV(2)】',
                                },
                                {
                                  title: '業主可否於花園及露台加建固定式簷篷？',
                                  des:
                                    '業主不許在其單位內或露台加建任何固定型式的簷篷，但若業主事先經管理公司書面批准，便可安裝有伸縮性的活動帆布簷篷。',
                                  tip:
                                    '【詳情請參閱屋邨守則甲章規條II(1)、丙章規條III(2)及III(4)】',
                                },
                                {
                                  title: '業主可否拆除單位外牆或室內牆壁？',
                                  des: '業主不許改動屋宇主要結構，如支柱、橫樑及結構牆。',
                                  tip:
                                    '【詳情請參閱屋邨守則甲章規條II(2)、丙章規條II(1)、II(2)及II(3)】',
                                },
                                {
                                  title: '業主可否於花園、露台及車房加建或放置組合屋？',
                                  des:
                                    '業主不許在單位內任何未蓋建範圍及停車位加建或放置任何玻璃屋或其他密封式建築物、組合屋、小屋、陳列攤位、圍板、宣傳站或其他臨時建築物。',
                                  tip:
                                    '【詳情請參閱屋邨守則甲章規條II(1)、乙章規條III(2)、丙章規條III(2)及V】',
                                },
                                {
                                  title: '業主可否把車房圍封？',
                                  des:
                                    '850、950、1050、1100、1500及1700型的屋宇如果建有車位蓋篷，業主不許將車位蓋篷以任何材料或方法圍封。而建有有蓋車房的1150、1300、A、A1、B、C及D型屋宇業主不許將車房之任何通洞位封密，亦不許在車房入口安裝任何門或閘，但可安裝不阻礙視線及空氣流通的疏格式捲閘。',
                                  tip: '【詳情請參閱屋邨守則丙章規條V(1)及V(2)】',
                                },
                                {
                                  title: '業主可否飼養犬隻？',
                                  des: '每單位可豢養領有牌照之狗隻壹頭，但不許造成滋擾。',
                                  tip:
                                    '【詳情請參閱屋邨守則甲章規條II(2)及乙章規條III(6)】',
                                },
                                {
                                  title: '業主可以選擇那些方式繳交管理費？',
                                  des:
                                    '業主可攜附印有條碼的月結單到指定的便利店繳交管理費或以劃線支票繳費，支票抬頭請寫上「錦綉花園物業管理有限公司」。業主可選擇親臨管理處、或以郵寄方式遞交支票、或投入管理公司的「意見及支票收集箱」。管理處同時歡迎業主採用自動轉賬方式繳交管理費，業主可在管理處索取「直接付款授權書」。請勿郵寄現金或期票。',
                                },
                                {
                                  title:
                                    '單位業權如有變更，新業主需要前往管理處辦理什麼手續？',
                                  des:
                                    '新業主須於轉讓日起一個月內通知管理處，並帶同律師樓發出的業權轉讓証明往管理處辦理轉名登記手續。為減省輪候時間，新業主可致電管理處預約時間辦理手續。',
                                },
                                {
                                  title: '怎樣辦理「管理基金」轉讓手續？',
                                  des:
                                    '由於管理基金不能退還，因此該基金將會被自動轉移至新業主名下，唯有關業主必須留意該單位是否有拖欠管理費及其他款項。新業主除須補回有關被拖欠的管理費及其他款項外，如日後管理基金作出調整時，新業主亦須繳付調整後的差額。因此，買賣雙方應儘早一併處理有關單位的管理基金及其他相關款項事宜。',
                                },
                                {
                                  title: '申請「入閘証」有什麼手續？',
                                  des:
                                    '業主或其授權人並居於相關物業者可替其擁有的私家車輛領取入閘証，方便進出本邨。如業戶轉換業權，必須先到本處行政部辦妥登記轉名手續後方可申請入閘証。在車輛可停泊於單位內停泊處的前提下，每間850、950、1050、1100、1500或1700型屋宇最多可領取兩個入閘証，但每間A、A1、B、C、D、1150或1300型屋宇則只可領証乙個。如有需要，請帶備所需文件到客戶服務部辦理申請手續。',
                                  tip: '【詳情請參閱住戶車輛入閘証申請指引】',
                                },
                              ]"
                          :key="index"
                          :title="index + 1 + '. ' + item.title"
                          :name="index + 1"
                        >
                          <div>
                            <p style="font-size: 16px; padding: 5px 27px">
                              {{ item.des }}<br />
                              <font v-if="item.tip" color="#3399ff">{{ item.tip }}</font>
                            </p>
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
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
@deep:~ ">>>";
.new-buyer-notice {
  @{deep} .el-collapse {
    .el-collapse-item {
      .el-collapse-item__header {
        font-size: 16px;
        background-color: #fff0be;
        padding-left: 10px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
