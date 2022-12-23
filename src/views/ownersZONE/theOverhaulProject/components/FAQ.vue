<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-04 23:34:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:44:30
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/theOverhaulProject/components/theOverhaulProject.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p style="font-size: 36px; color: #9cc212; font-weight: bold">
      {{ fairview_park_lang === "en_us" ? "FAQ" : "常見問題" }}
    </p>
    <div
      class="mb-20"
      v-for="(item, index) in [
        {
          title:
            fairview_park_lang === 'en_us' ? 'Background Information' : '工程背景資料',
          children: [
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Why should the Overhaul Project be carried out?'
                  : '為何要進行「大維修」工程 ?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The underground water pipes in Fairview Park have been used for over 40 years. The life cycles of the pipes have ended. In fact, those pipes that have never been replaced are seriously rusted and worn and are causing about 3,000 cubic meters of water leakage every day. In March 2021, the Water Supplies Department (“WSD”) sent us a letter demanding a more effective plan for resolving the problem thoroughly. After carrying out detailed studies, a comprehensive replacement for all pipes in Fairview Park appears to be the best option.'
                      : '本屋苑水管使用已超過40年，喉管使用壽命已終結。事實上，屋苑內所有從未更換的地下食水喉管已嚴重銹蝕，造成每天有3千立方米食水流失。2021年3月，水務署來信要求管理公司提交更有效的方案，以徹底解決嚴重的失水問題。經詳細評估，更換錦綉花園內所有的公用喉管是最佳的徹底解決失水問題的方案。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What are the consequences of not carrying out the Overhaul Project?'
                  : '不進行「大維修」工程的後果如何?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Water Quality<br/>The accumulated rusts in the underground water pipes may contaminate the water and may also turn the water color into reddish-brown with metallic flavor. Drinking rusty water constantly may have negative impacts on our health*. Being a responsible management company, we encourage you to think about problems caused by aged pipes.<br/>(*Please consult your doctor for the medical implications.)'
                      : '水質方面<br/>地下喉管累積的鐵銹，會使水質受污染，變成紅褐色和帶有金屬味，長期飲用含鐵銹的自來水，可能對健康帶來不良影響*。作為負責任的管理公司，我們有責任提醒業戶一同正視地下喉管老化所帶出的問題。<br/>*對健康的實際影響，請徵詢醫學意見',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Environmental Safety<br/>The persistent water leakage problem may result in soil erosion problems and damage to the road structure. It could even lead to road cave-in incidents.'
                      : '環境安全方面<br/>持續大量失水或地下喉管破裂，可導致土壤流失，對道路結構造成破壞，嚴重更可造成路面下陷。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Legal Issues<br/>According to sections 9(b) and 35(1) of the Waterworks Ordinance, Cap. 102 (“WO”), the Water Authority may suspend the water supply and impose penalties on any consumer who commits a continuous leakage problem. Sections 16 and 17 of the WO also empower the Water Authority to issue Notice to any consumer and require them to carry out repair works. In the case where the consumer fails to carry out the repair works as required in the Notice, the Water Authority will deal with the works for that consumer and then seek reimbursement of the relevant repair costs and supervision fee from that consumer.'
                      : '法律責任方面<br/>根據《水務設施條例》(第102章) 第9(b) 及35(1) 條，水務監督可因用戶持續大量失水而對該用戶停止供水及罰款。而條例第16及17條授權水務監督可根據其發出的通知書，對未能執行通知書內指明的修理或其他工程，可由水務監督代為進行該等工程，並向有關用戶索取工程及監督費用。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What is the current situation of the water leakage? Did WSD demand improvement? What sort of actions would the Estate Management take in response to WSD’s demand? Have we found out the cause(s) of such water leakage?'
                  : '現時本屋苑失水情況如何? 水務署是否有來信要求作出改善? 管理處接獲有關信件後有何跟進行動? 有否找出嚴重失水的原因?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The life cycles of those underground water pipes in Fairview Park that have never been replaced have ended and are seriously rusted and worn. They are causing a water leakage of about 3,000 cubic meters every day. On 4th March 2021, we received an “Important Letter” from WSD asking for a more effective plan, e.g. a comprehensive pipes replacement, for resolving the problem thoroughly. WSD also informed that the Government has proposed certain amendments to the WO that a newly introduced “Communal Water Loss Charge” would be imposed on the relevant consumers. When amendments to WO are implemented, the Estate will be subject to the “Communal Water Loss Charger” at the rate of about HK$10M per year (this calculation is based on the Estate’s current level of water loss). After carrying out detailed studies, a comprehensive replacement for all pipes in the Estate appears to be the best option. We are also discussing with the MAC to strive for solution.'
                      : '屋苑內所有從未更換的地下喉管使用壽命已終結，並出現嚴重銹蝕，造成每天有3千立方米食水流失。水務署已就本屋苑失水情況於2021年3月4日發出「重要公函」，要求本屋苑採取更有效方法，例如全面更換水管以徹底解決失水問題。信件同時指出，水務署正準備修訂《水務設施條例》，向相關用戶收取「公用失水費」。以目前的失水量計，錦綉花園需支付每年約1千萬元「公用失水費」。經詳細評估，更換錦綉花園內所有的公用喉管是最佳的徹底解決失水問題的方案。對此，管理公司正與MAC商討徹底解決方案。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Are there any alternative solutions for the serious leakage problem?'
                  : '是否有其他方案可以解決本屋苑嚴重失水問題?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Starting from 2017, notwithstanding the fact that we have been working with WSD to arrange for testing with the aim of locating the water leakage locations as well as the immediate repair works we have been carried out from time to time, the water leakage problem persists. It seems that the water leakage problem could never be resolved completely by way of the “Test and Fix” approach we used to take. In March this year, we received a letter from the WSD demanding a more effective plan for resolving the problem thoroughly. Both our detailed studies and WSD suggested a comprehensive replacement of all pipes in the Estate to be the best option.'
                      : '由2017年開始，我們已不斷聯同水務署就本屋苑漏水情況進行測試，並即時處理漏水喉管，但屋苑失水問題仍無法解決。根據過去3年多的經驗，我們明白用常規被動的維修的方式，無論投入多少資源均是徒勞無功。2021年3月，水務署來信要求管理公司提交更有效的方案，以徹底解決嚴重的失水問題。經詳細評估及水務署建議，更換錦綉花園內所有的公用喉管是最佳的徹底解決失水問題的方案。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Is the leakage problem caused by insufficient regular maintenance of the water pipes?'
                  : '失水的原因是否因恆常的喉管維修保養不足引致?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Generally speaking, the life cycle for underground water pipes is around 40 years. We have been trying very hard to maintain our pipes over the years. These pipes have been used for over 40 years which means that the life cycle has ended. They are now seriously rusted and worn. In fact, the water pipes in one of our nearby estates are due for replacement after using for only 20+ years since their construction.'
                      : '地下供水喉管在正常情況下，一般使用壽命只有40年，過往我們一直努力不懈，採取最為妥善方式恆常地維修本屋苑的地下喉管，但由於本屋苑地下喉管使用年期已超過40年，因此喉管現已嚴重銹蝕及破損。事實上，相對某鄰近屋苑，入伙只有20餘年，其地下喉管的壽命已到達必須更換的階段。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Some of the pipes were replaced in 2001 - 2005, what were the reasons for the Estate Management not to replace all the pipes then?'
                  : '為何管理公司於2001 - 2005更換部分喉管時，並沒有一併更換所有喉管?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The actual situation of the pipes between 2001 and 2005 was a serious water leakage problem on the galvanized iron fresh water pipes laid under the one-way streets. The condition for the mild steel fresh water pipes laid under the two-way roads, on the other hand, was not too bad. Since the life cycles for mild steel pipes are expected to be around 40 years (and they had only been used for around 20 years) and in order to save costs at the time, the then consultancy firm recommended that only those pipes laid under one-way streets would be replaced with MDPE fresh water pipes. Such an arrangement was also approval by WSD.'
                      : '如果大家還記得，2001年至2005年間的實際情況是：單程路地底的鍍鋅鋼管食水管漏水相當嚴重，而鋪設於屋苑內雙程路地底的軟鋼管食水管漏水情況相對輕微。由於軟鋼管的壽命大約有40年，而當時它們只使用了大約20年，加上成本上的考慮，故當時顧問公司建議只將單程路地底之水管更換成MDPE食水管，當時的有關安排亦已獲得水務署批准。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'The Estate Management had proposed the Overhaul Project before in 2014, but why was it set aside?'
                  : '管理公司曾大約在2014年提出大維修計劃，為何最終被擱置下來?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'There were doubts as to whether the main water pipes under the Fairview Park Boulevard was exclusively supplying water for the Estate and if not, the Estate should not be the only party to be responsible for the water leakage problem. While the queries are not resolved and there was no urgency for an immediate replacement, the Estate Management set aside the Project. Until 2019, WSD installed a water meter at the main water pipes (which is located at the junction between the Yau Pok Road and the Fairview Park Boulevard). In 2020, WSD confirmed that the water leakage problem was caused by the Estate. The water supply system for the estates alongside the Fairview Park Boulevard and surrounding private lands is separated from that for Fairview Park. There is difference in the water pressure between the two water supply systems: the water pressure for Fairview Park is 4 bar while the average water pressure for areas outside Fairview Park is 6-8 bar. WSD opined that no water pipes of other estates are connected to the water supply system for Fairview Park.'
                      : '當時，有聲音質疑錦綉花園大道主喉管並非只供水予錦綉花園，失水原因並不完全是由錦綉花園引致，因此，沒有迫切性更換喉管的需要，管理公司惟有擱置該計劃。最終，水務署於2019年於大閘口 (即攸壆路及錦綉大道交界) 前安裝總水錶，並於2020年發現失水源頭來自錦綉花園。錦綉花園大道兩旁屋苑及周邊私人用地的供水系統是獨立於錦綉花園供水系統。兩個系統水壓完全不同：錦綉花園供水系統水壓為 4 bar，而屋苑外水壓平均一般為 6-8 bar。因此，水務署認為不存在其他屋苑的地下水管接駁至本屋苑水管而產生混淆的情況。',
                },
              ],
            },
          ],
        },
        {
          title: fairview_park_lang === 'en_us' ? 'The Project' : '工程相關的問題',
          children: [
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Given that the Overhaul Project is an enormous engineering project, does the Estate Management have enough professionals in managing it? Will a consultancy firm be hired? What is the process of selecting the contractor and who is going to make the decision? How to prevent bid rigging?'
                  : '大維修工程是一個龐大的土木工程，管理公司是否有足夠的專業人才管理? 會否聘用專業顧問公司? 決定聘用某工程承建商的流程是怎樣和由誰作出聘用的最後決定? 怎樣防止圍標?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Special Project Advisory Committee (“SPAC”)<br/>As the Overhaul Project launches, SPAC has been set up in December 2021. The purpose of setting up SPAC is to ensure all processes such as the tendering process, selection of engineering consultancy firm and contractors and project supervision are carried out openly, fairly and transparently. SPAC will give us advice or recommendation on both the tendering process and the Overhaul Project.'
                      : '特別工程諮詢委員會 (「特委會」)<br/>就著大維修工程的開展，我們於2021年12月正式成立了特委會，旨在確保大維修工程不論在招標、甄選工程顧問公司和承建商及工程監管等各個環節廉潔和透明。特委會會就招標及工程事宜提出建議供管理公司參考。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'SPAC was initially intended to be formed by the relevant Government departments (e.g. ICAC and Home Affairs Department), certain owners who possess the relevant professional knowledge and members or the authorised persons of the MAC. We sent letters to both ICAC and Home Affairs Department (Yuen Long District Office) in August 2021 and invited them to join the SPAC. Both refused to become members of the SPAC or to attend meetings regularly. We have also issued our Estate Notices twice for inviting owners with professional qualifications to join the SPAC.'
                      : '特委會原計劃由三個組別人士組成：相關政府部門 (廉政公署及民政事務處)、擁有專業知識的業主以及管理諮詢委員會或獲其同意的代表。然而，我們在2021年8月中分別去信廉政公署和元朗民政事務處，邀請其參與特別工程諮詢委員會，唯皆未有應允成爲委員或定期出席特委會會議。同時，我們亦兩度發出通告，邀請擁有專業知識的業主參與特委會。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'SPAC is currently set up with owners who possess the relevant professional knowledge, members or authorized persons of MAC and representatives from The Owner’s Association of Fairview Park (“OA”). For the list of the SPAC’s members, please refer to Fairview Park News Extra No.4.'
                      : '特委會現由擁有專業知識的業主、MAC或獲其同意的代表及錦綉花園業主聯會的代表組成。特委會的成員名單，可參閱錦綉專訊號外4。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Tendering Process<br/>The tendering process for the selection of the Engineering Consultancy Firm for the Overhaul Project was kicked off in November 2021.'
                      : '招標程序<br/>在2021年11月中，我們就大維修聘請工程顧問公司的招標程序展開。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'There is a “List of Consultants of Engineering & Associated Consultants Selection Board” (“List of Consultants”) published on the website of the Civil Engineering and Development Department (“CEDD”). The list contains a number of selected firms in the following professional categories: Waterworks / Civil Infrastructure and Development / Drainage and Sewerage / Electrical and Mechanical / Environmental / Geotechnical and Slope / Roads and Associated Structures / Town Planning / Traffic and Transport.'
                      : '政府土木工程拓展署的網頁載列了一個名為「工程及有關顧問公司遴選委員會顧問公司名單」(「委員會顧問公司名單」)，包括以下幾個專業範疇：水務／基建及發展／排水及污水／機電／環境／岩土和斜坡／道路和相關結構／城市規劃／交通運輸。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'All firms in the List of Consultants are selected by the CEDD based on their relevant professional knowledge and experience, size, financial background, and qualification of their staff.'
                      : '被納入委員會顧問公司名單的顧問公司均是由土木工程拓展署根據其公司的相關專業知識和經驗、規模、財務背景、員工資料及履歷等所遴選出來的。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We had invited the consultancy firms on the List of Consultants under the Waterworks / Civil Infrastructure and Development / Drainage and Sewerage categories to submit tender. Also, we had put up advertisements on 3 November 2021 on both the Oriental Daily News and South Chain Morning Post for inviting interested firms on the List of Consultants which possess the relevant design experience in waterworks or civil engineering to submit tender.'
                      : '我們根據委員會顧問公司名單分別邀請了具備水務／基建及發展／排水及污水經驗的顧問公司投標。另一方面，我們在2021年11月3日分別於東方日報和南華早報刊登工程招標廣告，邀請具有水務或土木工程設計經驗，同時又是委員會顧問公司名單上的顧問公司投標。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We have made reference to the tendering practice of government and asked all interested engineering consultancy firms to submit the “Technical Proposal” and “Fee Proposal” in 2 separate sealed envelopes. In order to ensure all the tendering process are carried out openly, fairly and transparently, we have placed the 2 tender boxes (i.e. the “Technical Proposal Tender Box” and “Fee Proposal Tender Box” at the office of Messrs. Kwan & Chow, Solicitors (“K&C”) in Central. Interested engineering consultancy firms must put the “Technical Proposal” and “Fee Proposal” in the designated Boxes. Furthermore, the locking and unlocking for the “Technical Proposal Tender Box” and “Fee Proposal Tender Box” are done in the presence of representatives of SPAC, a solicitor sent from K&C and the representatives of the Estate Management.'
                      : '我們參照政府的做法，要求有意投標的顧問公司，將「技術提案」和「顧問費用提案」分開。為確保一切與招標事宜相關的程序公平、公正及公開，我們分別設置了「技術提案投標箱」和「顧問費用提案投標箱」兩個投標箱於周卓如律師行的辦公室。有意投標的顧問公司必須分別將其「技術提案」和「顧問費用提案」分別放進「技術提案投標箱」和「顧問費用提案投標箱」兩個投標箱中。同時，「技術提案投標箱」和「顧問費用提案投標箱」的上鎖及開鎖程序，均在特委會代表、周卓如律師行的律師及管理公司代表的見證下進行。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Five members from the SPAC formed a “Tender Assessment Panel” (“TAP”). The TAP assessed on the consultancy firms which had submitted tender according to above criteria and made recommendations to us.'
                      : '特委會的5位委員組成了「標書評分小組」，並以上述準則，對投標的顧問公司評分及建議。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We have considered all technical proposals and fee proposals received by us and assessed them according to the criteria laid down in the tender document. We have also taken into account the recommendations made by SPAC. To the best interests of the Estate, the reasonably priced Ho Tin & Associates Consulting Engineers Limited (“HO TIN”) has been awarded with the Assignment.'
                      : '我們考慮了顧問公司提交的技術提案及價格提案，並按標書訂明的要求作出評審，同時也參考了特委會的評審建議後，從為屋苑爭取最大利益的前提下，最終決定中標公司為價格合理的何田顧問工程師有限公司(「何田」)。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'From what governmental departments should we get approval for the Overhaul Project?'
                  : '大維修工程需哪些政府部門審批？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Approvals from WSD, Buildings Department and Environmental Protection Department are anticipated. We also expect to seek approval from the Transport Department in relation to rebuilding the road humps. Everything will be subject to the professional advice to be obtained.'
                      : '主要政府部門包括﹕水務署、屋宇署及環保署等，而涉及全屋苑路拱重造，須得到運輸署批准，但一切仍有待顧問公司的專業建議。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Will the roads refurbishment works be carried out at the same time as the works for the replacement of underground water pipes?'
                  : '有關工程是否除更換地下喉管外，連帶行車道路翻新工程一併進行?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We had received many comments from various owners that the roads of our Estate were seriously cracked and they thought such a problem could hardly be resolved thoroughly through repairing the road surface. In order to reduce the annual expenses to be spent on maintenance/repair of the roads as well as minimize the inconvenience which is likely to cause, the roads refurbishment works will be carried out at the same time as the works for the replacement of underground water pipes are done for more cost efficiency.'
                      : '不少業戶反映，屋苑內的行車道路損毀情況嚴重，路面復修工程並不能有效改善道路根本問題。因此，為減少每年行車道路維修費用及每次工程為業戶帶來的不便，當進行更換地下喉管工程時，將一併翻新屋苑的行車道路，帶來更大成本效益。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Will the proposed road refurbishment works cover 30% or 60% or 100% of the width of the roads?'
                  : '建議路面重鋪的面積是多少？(30%？60%？或100%？)',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'As the roads were paved 30 to 40 years ago, repairing the road surface by itself could hardly resolve the problem thoroughly. Road refurbishment works are inevitable after the roads are dug for the pipes replacement works. Therefore, we suggest to carry out the road refurbishment works at the same time as the pipe replacement works are done for a number of reasons: to reduce the annual maintenance expenses; to minimize the inconvenience which is likely to cause; and to increase the overall efficiency of all works.'
                      : '畢竟道路都是 30-40 年前鋪設的，路面修補工程並不能根治道路的根本問題。由於進行更換地下喉管工程時，必先掘開部份路面然後重鋪。因此，為減少每年行車道路維修費用及每次工程為住戶帶來的不便，我們打算於更換喉管的同時一併進行100% 重鋪全屋苑的行車道路面工程，提高整體上的效益。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What is the estimated time for the Overhaul Project to complete?'
                  : '整項工程預算完工時間是多少 ?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Based on the evaluation of the consultancy firm, the Overhaul Project is anticipated to complete in around 5 years. The consultancy firm use the standard time for building and restoring pipes in each meter to evaluate the “construction period” of each section. In order to minimize the inconvenience which is likely to cause, the Estate Management is carrying out studies with HO TIN for the viability of phased implementation schedule. We will closely communicate with residents before and during the Project to minimize the inconvenience which is likely to cause.'
                      : '預算大約需時5年左右完成，是經由專業顧問公司作出的評估。專業顧問公司評估方式是採用估算每米喉管的建造和復修的基本時間來評估每段所需的“建築期”。管理公司會與何田研究，採用小區分段展開工程，盡量減少對住戶的不便。工程展開前和進行期間，將會與業戶保持定期密切溝通，確保把居民受到的影響減至最低。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What criterion do you have in relation to the sequence for pipes replacement?'
                  : '以什麼做準則來決定各地段更換喉管的先後順序？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The sequence for replacement depends primarily upon the completion dates of different phases. We will also be taking into consideration the work procedures as well as the traffic arrangement. The advice from HO TIN will also be taken into account for the final decision.'
                      : '原則上會按屋苑落成先後順序施工，同時我們也會考慮施工及交通等問題，但最終亦會根據何田的建議作出調整。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We will choose an area of a representative value for the “Pilot Test Scheme” to be carried out. As a pilot project of the whole Overhaul Project but in a small scale, we could learn from the “Pilot Test Scheme” for the upcoming phrase in order to come up with a better design and a more accurate works schedule estimation. The possibility of commencing work in parallel could be tested and the nuisance caused could also be evaluated. When selecting an area for the “Pilot Test Scheme”, we will take into account 3 main factors, namely degree of leakage, the referential value in terms of the types of underground facilities and pipes and the cost control. (Please refer to Fairview Park News Extra No.4 for details).'
                      : '我們將會選擇具代表性的區域作「試點」工程的選址，作爲大維修的前期小規模試驗計劃，將有利於完善大維修的下一個階段的工程設計、工程時間估算、分區並行工程的可能性及對居民滋擾評估等。我們會因就3個主要考慮因素作篩選，分別是漏水的嚴重程度、地底設施分佈和喉管的種類以及成本控制，務求找出最合適的工程選址 (「試點」工程選址詳情，請參閱錦綉專訊號外4。)',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Section E fits all of the above criteria for effective cost control, namely an area which is comparatively serious in water leakage, of a relatively high referential value in terms of the types of underground facilities and pipes, comparatively small in size. The area chosen for the “Pilot Test Scheme” is the 1st and 2nd street of Section E. The two streets are 0.55km long in total and there are 96 house units. We will further communicate with the owners/residents of the house units involved in relation to works schedule and traffic arrangement. We strive to minimize any inconvenience that may be caused.'
                      : '綜合上述各項，E段齊備了漏水較嚴重、地底設施具代表性、喉管種類多以及面積較小等條件，更有利於控制成本。「試點」工程選址地區為E段第1街及2街，全長0.55公里，涉及單位共96戶，我們將會和有關單位的業戶就工程開展程序、交通安排等作進一步溝通，務求以靈活的安排，減低對業戶造成的不便。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What material(s) are the to-be-replaced pipes made of? Will there be any difference(s) between the current and the proposed method on connecting the pipes?'
                  : '新更換的喉管用什麼材料？接駁方法與現時有何不同？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We plan to use high density polyethylene (HDPE) pipes. The connecting method for the fresh water pipes will remain unchanged. For flush water pipes, we plan to use similar connecting method as fresh water pipes and abandon the old method of connecting 6 houses into 1 supplying unit. So, those flush water pipes which are being laid under the front garden of each of the house will also be abandoned.'
                      : '新更換的喉管將以HDPE喉為主，食水管接駁方式不變，而廁水水管將由現時每6個單位1組改成獨立供水 (與食水供水方式相同)，而現有在每個單位前花園地底的廁水管將廢除。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What kind of public utility organizations will potentially share the use of the upgraded channels?'
                  : '哪些公共機構有潛在可能共同參與充分利用坑道？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We will invite utility undertakers such as Town Gas to install gas pipe system and CLP to upgrade the power supply system in the Estate during the trench excavation. We will also explore the feasibility of installing fiber-optic fundamental infrastructure, e.g. channels and manholes for preparation of future network upgrade. By exploring new opportunities for cooperation with new telecommunication service providers, residents would have more choices and a better security system could be established.'
                      : '我們會嘗試邀請煤氣公司鋪設供氣管道，及邀請中電一拼利用坑道提升本屋苑的電力設備，藉著是次的工程，管理公司會考慮一併鋪設光纖基礎設施，如管道及中途井，為屋苑內部網路做準備，以便邀請多些網絡供應商給住戶多些選擇，及進一步加強屋苑內的保安系統。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Upon completion of the comprehensive pipes replacement, how long do you expect the new water pipes system could last for?'
                  : '當全面更換喉管工程完成後，預計新系統能維持多久的正常使用？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Normally speaking, we expect the new water pipes can be used for around 40 years. There may, however, still be a need for certain minor maintenance works and change of stop cocks.'
                      : '按估算，在正常情況下，除卻輕微保養維修及按需要更換水掣外，已更換的地下喉管可使用約40年。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Upon completion of the comprehensive roads refurbishment works, how long do you expect the repaved roads could be used for?'
                  : '當全面重鋪路面工程完成後，預計可維持多久的正常使用？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Normally speaking, we do not see any need for any large-scale repair works to be carried out for at least the first 10 years after completion of the Works. Certain minor maintenance works may, however, be expected.'
                      : '按估算，在正常情況下，除卻輕微保養維修外，已重鋪的路面可正常使用至少10年，而無需進行大規模維修。',
                },
              ],
            },
          ],
        },
        {
          title:
            fairview_park_lang === 'en_us'
              ? 'Finance / Fundraising Issue'
              : '有關財務／集資問題',
          children: [
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What are the estimated costs for the Overhaul Project? Do the owners of the commercial premises and Club House have to pay? How much does each household have to pay?'
                  : '大維修工程費用估算為多少? 商場或會所需要支付嗎? 每戶須支付多少?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The whole Overhaul Project consists of two main components of “Pipes Replacement” and “Roads Refurbishment” works. According to the report of a professional engineering consultancy firm, the total costs are initially estimated to be around HK$500M. The corresponding costs for “Pipes Replacement” and “Roads Refurbishment” works are around HK$360M and HK$140M. The actual amount is subject to tender result. By applying the same calculation method adopted by the Estate Management over the years determining the monthly management fees, the total costs will first be apportioned between residential area and non-residential area by making reference to the Total Gross Floor Area (GFA) as stated in the Master Layout Plan. The owners of commercial premises and Club House will bear their respective shares accordingly. Basing upon the GFA is consistent with the guidelines as issued in the Circular Memorandum by the Legal Advisory and Conveyancing Office of the Hong Kong Government’s Lands Department. Both the Master Layout Plan and the said Memorandum are public documents that everyone could inspect from the relevant Government sources.'
                      : '整項大維修工程涵蓋「更換喉管」和「重鋪道路」兩個主要部分。按專業工程顧問公司報告評估，工程費用初步估算大約5億餘元，當中「更換喉管」及「重鋪道路」工程分別約為3.6億及1.4億。最終仍有待招標後才能確定實際金額。沿用一貫收取管理費的計算方式，管理公司首先參照總綱發展藍圖計算出「住宅部分」和「非住宅部分」的總樓面面積 (GFA) 來分攤大維修工程費總額，從而向商場及會所收取其應付份額的工程費用。總綱發展藍圖和有關指引屬公開文件，公眾人士均可查閱。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Each household unit is expected to bear an average amount of approximately HK$100,000 and the owners of non-residential area are expected to bear approximately HK$16M. These figures are based on the initial costs’ estimation, we shall continue to work with HO TIN for details of the Overhaul Project as well as costs management.'
                      : '而按初步估算每個花園洋房單位業戶平均需支付約10萬元，而商業物業的業主需要支付約1,600萬元。現時仍是初步估算，管理公司會繼續與何田研究工程細節及作出成本控制。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Why the Developer does not need to pay the costs for the Overhaul Project?'
                  : '為何發展商不用支付大維修工程費用？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Property management companies in Hong Kong apply the “user pays” principle as a reasonable allocation method for maintenance expenses. Such a principle matches with the concept of “use together and share together”. By applying the same principle, both the management fees and the total costs of the Overhaul Project will be borne by both the owners of residential area and non-residential area by their respective shares.'
                      : '全港物業管理界採用「用者自付」的原則，作爲合理維修費用攤分方法，符合「共同使用、共同分擔」的概念。錦綉花園按此原則，所有住宅部分和商業物業的業主同樣需要分攤管理費和大維修工程費其應付的份額。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'While the common areas in some estates or developments in Hong Kong are allocated with undivided shares and thus are commonly owned by the owners, common areas and facilities in some estates or developments are being owned by the Developer. No matter the case, the consensus is that there will be an agreement between the owner and users which sets out the right to use and the obligation to pay for maintenance. The DMC is the agreement between the Owners and the Developer on the rights and obligations of the estate roads and common facilities owned by the Developer.'
                      : '有些屋苑的共用空間配了不可分割份數，並由業主共同持有當中的份數；而有些屋苑的共用空間及設施則由發展商擁有。不過無論是那者，當任何人使用他人的物業時，不變的定律及共識是，擁有人和使用人之間必須訂明使用及維修保養協議。而就業主們使用發展商道路及共用設施的權利和責任上，有關的協議正是公契。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Clause 1 of the Fourth Schedule of the DMC provides that each Owner shall in respect of each sub-section or unit of which he is the Owner pay his due shares as shall from time to time be fixed by the Manager of the DMC of the management fees and expenses incurred or to be incurred under the DMC.'
                      : '公契附表4(1) 列明「已耗用或會耗用的管理費用和開支，款項由各分段或單位分攤，分攤的金額由經理人不時釐訂，每個業主必須繳交他擁有的每個分段或單位應繳之數。」 換句話，各住宅及商業業主可享用錦綉花園共用空間及設施，同時必須支付有關共用設置的維修和更新費用。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Taking the underground water pipes as an example, although Developer owns them, the Developer is not the actual “user”. These common facilities are connected to each household and commercial units and therefore are for the use of all household and commercial units but not the Developer itself.'
                      : '以屋苑內的地下水管為例，雖然屬發展商擁有，但發展商在這情況並不是「用者」。這些共用設施連接至每個住宅單位和商戶，其實是供給屋苑内所有住宅單位和商戶使用，而非供發展商使用的。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Why is the reference to share for the costs of Overhaul Project not made in accordance with the size of the residential area and non-residential area?'
                  : '為何不是按住宅與非住宅的佔地比率攤分工程費用?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The GFA as stated in the Master Layout Plan is the only standard which was calculated by professional certified person and recognized by the Government. In fact, GFA is publicly known as a reasonable index to reflect the population density, and the public demand for fundamental infrastructures and social facilities, etc. It therefore is commonly used in the town, housing and transportation planning. The demand for fundamental facilities cannot be estimated only by providing the land surface area. The same area of empty land lot can be built for high density multi-storey building or be used as garden. The required facilities for different use will be different. Therefore, GFA is used by the Government as the index in resource planning and allocation. GFA is also used for the allocation of management fee by the property management industry.'
                      : '屋苑總綱發展藍圖裏的GFA是唯一由專業認可人士計算而同時得到政府認可的數據準則。其實，GFA 是一套公認合理的指標準則，並廣泛應用於城市、物業及交通規劃中。原因是該指標有效反映人口密度、基礎建設和社區設施等有關大眾需求的核心元素。相反地，單憑土地面積卻未能提供有關對基礎設施需求的相關信息。同一塊空地，可以建造成高密度的高樓大廈，亦可以只是一個花園，這對配套設施的要求亦大不相同。因此，GFA也是政府認可的資源規劃和分配的相關指標。GFA也是物業管理界用來分攤管理費時常用的指標。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Clause 1 of the Fourth Schedule of the DMC provides that each Owner shall in respect of each sub-section or unit of which he is the Owner pay his due shares as shall from time to time be fixed by the Manager of the DMC of the management fees and expenses incurred or to be incurred under the DMC.'
                      : '此外，本屋苑公契附表4(1) 亦已列明「已耗用或會耗用的管理費用和開支，款項由各分段或單位分攤，分攤的金額由經理人不時釐訂，每個業主必須繳交他擁有的每個分段或單位應繳之數。」',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'By applying the same calculation method adopted by the Estate Management over the years for determining the monthly management fees, the total costs of the Overhaul Project will first be apportioned between residential area and non-residential area by making reference to the GFA as stated in the Master Layout Plan. The owners of both the residential area and non-residential area will then bear their respective shares accordingly.'
                      : '管理公司會沿用一貫收取管理費的計算方式，首先參照總綱發展藍圖計算出「住宅部分」和「非住宅部分」的GFA來分攤大維修工程費總額，然後向住宅部分與非住宅部分收取其應付份額的工程費用。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'What is the fundraising plan for the owners?'
                  : '業戶支付工程費用方式是怎樣?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'There are 3 proposed fundraising plans:<br/>(a) Full Payment;<br/>(b) Payment by 2 Instalments (50%+50%) within 1 year; and<br/>(c) Payment by 3 Instalments (60%+20%+20%) within 2 years.When formulating these plans, we have to strike a balance between the administration costs to be incurred in the course of fundraising and the risk of works delay that may be caused by not having sufficient fund for the Project. For further details as to the pros and cons of each of the proposed fundraising plans, please read Fairview Park News Extra No.2.'
                      : '我們建議的集資方案有3種，分別為﹕1. 一次性支付；2. 一年內分兩期支付 (50% + 50%)；3. 二年內分三期支付 (60% + 20% + 20%)。在定這些方案，我們也考慮了要收集數多業主工程費的行政負擔來作平衡，也要盡量減低因收不足集資資金而影響工程進度，甚至 “爛尾” 的風險。這些收費方式，也是多數香港大型屋苑集資的方式。如果想了解各種方案的利弊，請參閱錦綉專訊號外2上的有關圖表。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Will there be a cost overrun for the Overhaul Project?'
                  : '就有關工程估算，會否最後出現超支問題?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The costs estimation given by the consultancy firm is based on current construction expenses level and the forecasted inflation rates for 2022 to 2027. We and the consultancy firm have considered all possible factors which has effect on the construction costs and will strictly control the expenses of the Project. With a view to ensure all expenses are used under a fair, reasonable and open principle, an independent consultancy firm will be hired to work with us on the entire project at the beginning from the preliminary preparation works, the construction and until the acceptance of works.'
                      : '顧問公司的專業評估是基於目前香港建築成本及往後2022年至2027年的通貨膨脹而作出計算，顧問公司與我們都已盡量考慮各項可能影響建築成本的因素，並且會嚴格監管工程開支。整個前期準備及至施工、驗收過程除管理公司外，亦會聘請獨立的專業顧問參與，確保所有開支符合公平合理及公開透明的原則。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'In the process of drafting the tender documents and contractor contracts, we will consider every possible situation of works delay and ensure the terms will cover all possible reasons. We will also closely monitor the works progress and cost.'
                      : '在制定標書及工程合約時，我們會盡量考慮各種不同的情況，期望標書儘可能涵蓋一切有可能導致工期延誤的因素，並對工程進度和支出作出嚴格的監管。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Also, we will be doing the “Pilot Test Scheme” shortly. We believe this small-scale pilot project of the whole Overhaul Project will be beneficial to the upcoming phrase in order to come up with a better design and a more accurate works schedule estimation. The possibility of commencing work in parallel could be tested and the nuisance caused could also be evaluated.'
                      : '加上我們將會先做「試點」工程，這個小規模試驗計劃將有利於完善大維修的下一個階段的工程設計、工程時間估算、分區並行工程的可能性及對居民滋擾評估等。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'How much on maintenance/repair could be saved per year upon completion of the whole Project?'
                  : '當工程完成後，預計每年可節省多少維修費用？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Upon completion of the project, the Estate is exempted from an annual “Communal Water Loss Charge” of up to HK$10M, it is anticipated that around $45M of maintenance/repair expenses on pipes and roads could be saved in the first 5 years (i.e., around $9M per year).'
                      : '當工程完成後，除可免除被水務署每年徵收「公用失水費」約1千萬元外，經粗略計算，在頭 5年可同時節約4千5百萬元的水務及道路維修費用，即每年約9百萬元。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Are there any measures by the Estate Management to assist the owners in paying the costs for Overhaul Project?'
                  : '就支付工程費一事，管理公司是否有協助業戶的措施？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We had made enquiries to different government departments on the Overhaul Project. There are two eligible schemes as offered by Urban Renewal Authority (“URA”) for our owners, i.e., “Building Safety Loan Scheme” and “Building Maintenance Grant Scheme for Needy Owners”.'
                      : '我們提及，我們努力向不同政府部門查詢，希望為個別業主提供財務上的協助。最後，市區重建局 (「市建局」) 回覆其轄下的兩個計劃：「樓宇安全貸款計劃」及「有需要人士維修自住物業津貼計劃」，適用於大維修工程。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'In order to reduce the complexity of the application procedures for the needy owners, we have agreed with the URA and we are ready to provide assistance by way of the following arrangements#:<br/>(#We will advise you of the appropriate time to submit your application in due course.)'
                      : '為減省有需要的業戶程序上的繁複手續，我們和市建局就上述兩個計劃商討，將有以下安排#： (#我們將再通知大家遞交申請的適當時間)',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? '- The Estate Management will stamp its company chop on the “Integrated Building Rehabilitation Assistance Scheme” Application Form(s). Applicant(s) who wish to opt for the “Building Safety Loan Scheme” shall submit to URA the application form(s) together with the required documents (e.g. proof of income and assets) by themselves (The Estate Management would not fill in or submit form(s) for the applicant(s)). URA shall then process and submit to the Buildings Department (“BD”) the application forms stamped with the company chop of the Estate Management in a batch.'
                      : '- 管理公司在「樓宇復修綜合支援計劃」申請表格上蓋上「錦綉花園物業管理有限公司」的公司印章，由申請人填寫後連同上述所需的個人資料 (例如：入息及資產証明文件) 直接交給市建局 (因涉及個人私隱資料，管理公司將不予協助填寫及遞交申請表)。市建局對蓋有管理公司印章的申請表將作統一審批，並對在該申請表格內同時填上「樓宇安全貸款計劃」的申請交給屋宇署審批。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? '- The Estate Management will provide the BD / URA with all required documents of the project and arrange for its staff to check the works done upon completion in order to satisfy the assessment requirements of the BD / URA.'
                      : '- 管理公司負責向屋宇署／市建局提供一切他們所需的工程及完工資料，並在工程完成後安排屋宇署／市建局職員到本屋苑視察確定完工，以滿足屋宇署／市建局對工程項目審查的要求。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? '(For details for these two schemes, please read Fairview Park News Extra Nos. 3 and 4)'
                      : '(有關兩個計劃的詳情，請參閱錦綉專訊號外3和4。)',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Will the Estate Management use the sinking fund to pay for the Overhaul Project?'
                  : '管理公司會否運用管理儲備支付大維修工程費用？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Estate Management had made suggestion to the MAC in 2013 that we should be “saving money” for fund for large scale maintenance project (i.e. to reserve a certain percentage of the management fees received and put the same in the Sinking Fund for future use). However, this suggestion was not taken by the then MAC as they thought it would be difficult to accumulate enough money for future projects anyway because of inflation. The MAC counter-proposed that the Estate Management should do fundraising in the future only when needed (The relevant discussion was minuted in the 7th Accounts Sub-committee Meeting of 6th Management Advisory Committee held in 2013).'
                      : '管理公司曾就大型工程所需資金問題上建議以「儲蓄方式」進行, 在每月收取管理費的同時，額外徵收一個百分比的數目撥入儲備，待日後需要時使用。可是於2013年當屆錦綉花園管理諮詢委員會認為「待日後有大型工程的需要時，才向業主籌集資金」的做法比較恰當，又認為「儲蓄方式」建議不合時宜，礙於通脹因素，不斷儲蓄亦難以有足夠款項應付大型工程所需開支。 (有關討論記錄於2013年第六屆MAC - 帳目分組委員會第七次會議記錄)',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Since the completion of the Estate, all expenses for large scale projects (such as the replacement of the main gate, installation of car plate verification system, rebuilding of lakeside path, desludge and clearance works of Fairview River and the replacement of equipments in the children playground and basketball court) were paid by the money saved and reserved in the Sinking Fund. The Estate Management has always been trying very hard to ensure there could be surplus to be put to the Sinking Fund every year.'
                      : '從屋苑入伙至今，所有用於屋苑內大型工程的開支，包括更新大閘、加設車牌識別系統、重鋪環湖徑、清理錦綉河淤泥、更換兒童遊樂及籃球場設施等等，均全數以管理公司節檢而來的儲備支付。這是管理公司一貫以「量入為出，應用則用」的原則，務求每年有盈餘能撥入儲備。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The total amount of the all Funds held by the Estate Management is currently around HK$54M. HK$30M of which is put in the Operation Fund. The Estate Management must reserve a sum from the remaining HK$24M for settling maintenance / repairing expenses for common facilities. We would have no choice but to raise funds from owners or to increase management fees should the Fund becomes insufficient.'
                      : '目前，屋苑的總儲備約有5400萬元。管理公司會一如以往的做法，預留3000萬元作保障屋苑營運的緊急基金。至於餘下的2400萬元，管理公司必須預留部分儲備用於維修/更換其他公共設施。一旦儲備不足，管理公司在有需要時，只能另向業主集資或以增加管理費來籌集資金。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'How much will the Estate Management charge for the Manager’s Remuneration (MR)?'
                  : '管理公司會收取多少經理人酬金 (MR)？',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'As the whole Overhaul Project is still in an initial planning stage and no certain decision is finalized, the Estate Management have not yet decided the amount for the MR. We will take reference with the general practice on large scale project and consider any other costs factors in order to balance the additional resources we spent and the financial impact on the Owners. When there is a concrete decision of the implementation of the Overhaul Project, the Estate Management will decide the amount of the MR charged.'
                      : '由於管理公司就有關大維修計劃，仍處於初步研究及探討階段，對於如何進行工程尚未有定案或決定。因此，管理公司尚未決定經理人酬金的實際數額。待管理公司對是否進行工程有更清晰的方向時，我們將參考市場一般就此類大型項目收取經理人酬金的做法，同時考慮其他成本因素，平衡管理公司所投資的額外資源及對各業主的財務影響後，才釐定合適的經理人酬金。',
                },
              ],
            },
          ],
        },
        {
          title: fairview_park_lang === 'en_us' ? 'Other Issues' : '其他問題',
          children: [
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Should the schools, the church and the fire station pay for the construction expenses?'
                  : '大維修工程費用，學校、教會及消防局需要支付嗎?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Land for public facilities within Fairview Park (including for Mai Po Fire Station, Bethel High School, HKMLC Wong Chan Sook Ying Memorial School, Hong Chi Morninglight School and Fairview Park Alliance Church) have already been surrendered by the Developer to the Government free of cost for public utilities use.'
                      : '在屋苑範圍內，某些土地包括米埔消防局、伯特利中學、港澳信義會黃陳淑英紀念學校、匡智元朗晨曦學校，及基督教宣道會錦綉堂，發展商已於數年前按政府的要求，無條件交還予政府，作以上的公共用途。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We have asked these operators or the Government to pay for the management fee and the Government Property Agency replied that, according to the obtained legal advice, we have no right to ask for management fees for “the land which have already been surrendered to the Government”. We have obtained legal advice from a Queen‘s Counsel who opined that the obligation of these operators is limited within their lands and thus their lands are not bound by or subject to the New Grant or the DMC. Therefore, as the appointed Manager in the DMC, we have no right to ask for management fees or other expenses from these operators or the Government.'
                      : '管理公司曾要求這些經營單位及政府支付管理費，唯政府產業署回覆，根據其所獲得的法律意見，管理公司無權就「已交還政府的土地」，收取管理費。管理公司於1995年就此事宜，徵詢御用大律師的意見，唯該大律師亦認為該些經營單位的責任只限於其土地以內，在新批地書下歸還作公共事業用途的土地均不受該新批地書和錦綉花園的公契所約束。因此，我們 (作為公契經理人) 沒有權力向這些經營單位或政府收取管理費或其他費用。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'However, we hope the Overhaul Project can be treated as an exceptional case. We therefore sent letters to Fire Services Department, Architectural Services Department and Education Bureau, HKMLC Wong Chan Sook Ying Memorial School, Hong Chi Morninglight School and Bethel High School inviting for a meeting for discussion on sharing Overhaul Project expenses with reference to GFA. The meeting with the operators and the relevant Government departments was held on 20 January 2022. The participants for the meeting include representatives respectively from the Fire Services Department, Architectural Services Department and Education Bureau, the headmaster of all 3 schools, a surveyor acting for the Government, representatives from WSD, MAC and OA as well as our relevant senior management staff from the Estate Management.'
                      : '我們希望大維修項目可視爲一個例外情況，因此，從2021年9月起，我們已經陸續去信米埔消防局、建築署、教育局、伯特利中學、港澳信義會黃陳淑英紀念學校、匡智元朗晨曦學校及基督教宣道會錦綉堂，協商以GFA分攤大維修的部分費用。我們已於2022年1月20日就上述議題與相關政府部門開會，參予會議人士包括消防處的代表、建築署的代表、教育局的代表、港澳信義會黃陳淑英紀念學校的校長、伯特利中學的校長、匡智元朗晨曦學校的校長、代表政府的獨立測量師、水務署的代表、MAC的代表、錦綉花園業主聯會的代表及管理公司的相關高級管理人員。',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The meeting was started with a brief introduction given by the senior engineer from the WSD regarding the ownership of the pipes, maintenance history, figures for water leakage and the current condition of the pipes. He reiterated that a comprehensive pipe replacement was the only option the Estate had. We also explained to all the representatives that the water being supplied to all operators within the Estate was supplied through our supplying system. Thus, it is reasonable for all these operators to share the Overhaul Project expenses by making reference to their respective total gross floor areas. All participants acknowledged our views and agree to put forward the same for discussion within their respective government departments. A written reply will be made to us in due course.'
                      : '會議首先由水務署高級工程師簡介屋苑的水管業權、維修歷史、漏水數據及水管現狀，水務署強調全面更換水管是目前唯一選擇。於會議中，我們向各公共機構及相關政府部門解釋現行各公共機構的用水均是經由屋苑的供水系統而供給，因此，在情理上，應共同分擔這次大維修的成本，而分擔份額則按總樓宇面積比例計算。與會的各方均表示明白管理公司就大維修的立場，並會將有關議題帶回所屬部門作詳細研究，稍後書面回覆。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'How will the parking issue be dealt with during the Overhaul Project?'
                  : '進行有關工程時，如何解決車輛停泊問題?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'We will study the parking arrangement with HO TIN and will give the affected residents sufficient notice.'
                      : '我們會與何田作進一步研究，並通知受影響地段的住戶有關應變安排。',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'I am selling my property. Should the costs be borne by the Purchaser?'
                  : '我的單位正進行買賣，工程費用是否由買家負責?',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'It is a matter of negotiation between the Vendor and the Purchaser. Should the costs be confirmed, we could inform the relevant parties if such information is so requested.'
                      : '費用問題應交由買賣雙方自行協議決定。倘若買賣雙方律師向管理公司查詢工程費用，我們會在回覆信件中列出有關費用。',
                },
              ],
            },
          ],
        },
      ]"
      :key="index"
    >
      <h5 style="font-size: 24px; padding: 5px; font-weight: bold">
        {{ item.title }}
      </h5>
      <el-collapse accordion v-model="activeNames">
        <el-collapse-item
          v-for="(item2, index2) in item.children"
          :key="index2"
          :title="index2 + 1 + '. ' + item2.title"
          :name="index2 + 1"
        >
          <template #title>
            <span class="title">{{ index2 + 1 }}.</span>
            <span class="item">{{ item2.title }}</span>
          </template>
          <div>
            <p
              style="font-size: 18px; padding: 10px 20px; margin: 0"
              v-for="(item3, index3) in item2.children"
              :key="index3"
              v-html="item3.text"
            ></p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted,onUnmounted } from "vue";
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
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    const getHeight = () => {
      for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
        document.getElementsByClassName("title")[i].style.height = 
          document
            .getElementsByClassName("item")[i].getBoundingClientRect().height + "px";
        document.getElementsByClassName("title")[i].style["line-height"] =
          document
            .getElementsByClassName("item")[i].getBoundingClientRect().height + "px";
      }
    };
    onMounted(async () => {
      window.addEventListener("resize", getHeight);
      for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
        getHeight();
      }
    });
    onUnmounted(() => {
      window.removeEventListener("resize", getHeight);
    });
    return {
      ...toRefs(data),
      getHeight,
    };
  },
};
</script>

<style lang="less" scoped>
@deep:~ ">>>";
  @{deep} .el-collapse {
    border: none;
    .el-collapse-item {
      margin-bottom: 2px;
      .el-collapse-item__header {
        font-size: 18px;
        align-items: center;
        background-color: #fffae7;
        border: none;
        height: auto;
        padding: 0;
        &:hover {
          background-color: #fff3c4;
          span {
            &:first-child {
              background-color: #cee97b;
            }
          }
        }
        span {
          color: #4a4a4a;
          font-weight: normal;
          &:first-child {
            width: 50px;
            background-color: #e7f3be;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 25px;
          }
          &:nth-child(2) {
            padding: 7px 0 7px 10px;
            flex: 1;
            // background-color: #fffae7;
            line-height: 25px;
            box-sizing: border-box;
          }
        }
      }
      .is-active {
        background-color: #fff3c4;
        span {
          font-weight: bold;
          &:first-child {
            background-color: #cee97b;
          }
        }
      }
      .el-collapse-item__wrap {
        border: none;
        .el-collapse-item__content {
          color: #4a4a4a;
        }
      }
    }
  }
</style>
