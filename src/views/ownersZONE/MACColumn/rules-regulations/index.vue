<template>
  <div>
    <h5>
      {{ fairview_park_lang === "en_us" ? "Rules & Regulations" : "規章制度" }}
    </h5>
    <ul style="font-size: 16px; padding: 0">
      <li>
        <p>
          <span style="margin-right: 10px">1.</span
          ><span>{{
            fairview_park_lang === "en_us" ? "Background and Formation" : "背景和組成"
          }}</span>
        </p>
        <div style="padding: 0 20px">
          <div
            v-for="(item, index) in [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Fairview Park (“the Estate”) was developed in the late 1970’s.  Under the Deed of Mutual Covenant in respect of the Estate (“DMC”), Fairview Park Property Management Limited (“the Manager”) has been appointed as the Manager to manage the Estate.  The Manager has decided that in order to enhance communication between the Manager and the various owners, it is desirable to set up an Advisory Committee.'
                    : '錦綉花園（「屋邨」）建於七十年代後期。根據錦綉花園之公契（「該公契」），錦綉花園物業管理有限公司（「管理人」）獲委任為管理屋邨的管理人。為了加強管理人與各業主之間的溝通，管理人決定成立一個諮詢委員會。',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The Fairview Park Management Advisory Committee (“the Committee”) is formed for the purpose of providing a platform for consultation between the Manager and representatives of owners of the Estate as a group under these Rules and Regulations. The Manager will only work with the Committee if the Rules and Regulations stipulated herein are followed.'
                    : '成立錦綉花園管理諮詢委員會（「委員會」）的目的，旨在提供一個諮詢渠道，讓管理人和屋邨業主代表能在「錦綉花園管理諮詢委員會規章制度」的規範下，以團隊形式磋商屋邨事宜。因此，管理人只會於本規章內的條約得以遵守的情況下，與委員會共事。',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The Committee shall consist of the following members:'
                    : '委員會應該包括下列成員：',
                children: [
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(a)&nbsp;&nbsp;Representatives from different sections or sets of sections of the Estate;'
                        : '(a)&nbsp;&nbsp;屋邨各分段或分段內各組別的代表；',
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(b)&nbsp;&nbsp;Upon fulfillment of the terms of 3.5 below, the Committee may also invite to join its membership, a District Councilor returned from the Constituency comprising of Fairview Park, Man Yuen Chuen, Royal Camellia and Villa Camellia (“Fairview Park Constituency”).'
                        : '(b)&nbsp;&nbsp;在符合下述第3.5段的要求下，委員會可向一名，在區議會中被定名為「錦綉花園」選區 (由以下屋苑組成﹕錦綉花園、文苑村、海錦豪園及海錦花園) 內所選出的區議員，發出邀請成為本委員會成員。',
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(c)&nbsp;&nbsp;Representatives of a Transition Team made up of members from the Owners’ Association of Fairview Park Limited during the first and second terms of office of the Committee.'
                        : '(c)&nbsp;&nbsp;過渡小組的代表須由錦綉花園業主聯會有限公司成員組成，任期為委員會最初成立的首兩屆。',
                  },
                ],
              },
            ]"
            :key="index"
          >
            <p style="display: flex">
              <span style="margin-right: 10px">1.{{ index + 1 }}</span
              >{{ item.text }}
            </p>
            <div v-if="item.children" style="padding: 0 20px; margin-left: 35px">
              <p
                v-for="(item2, index2) in item.children"
                :key="index2"
                style="text-indent: -28px"
              >
                {{ item2.text }}
              </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">2.</span
          ><span>{{ fairview_park_lang === "en_us" ? "Objectives" : "目標" }}</span>
        </p>
        <div style="padding: 0 20px">
          <div
            v-for="(item, index) in [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The objectives of the Committee are to :'
                    : '委員會的目的是：',
                children: [
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(a)&nbsp;&nbsp;liaise between owners and the Manager, providing feedback and reflecting views of owners of the Estate to the management of the Estate;'
                        : '(a)&nbsp;&nbsp;聯絡業主和管理人，反映業主對屋邨管理的意見；',
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(b)&nbsp;&nbsp;appraise the performance of management staff and contractors who provide service to the Estate;'
                        : '(b)&nbsp;&nbsp;對服務於屋邨的管理人員的服務和承包商的表現作出評價；',
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(c)&nbsp;&nbsp;advise the Manager in the formulation of policies for the good of the Estate; and'
                        : '(c)&nbsp;&nbsp;在管理人制定對屋邨有整體利益的政策時提供意見；及',
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? '(d)&nbsp;&nbsp;cooperate with the Manager to procure the option to form the Incorporated Owners of Fairview Park.'
                        : '(d)&nbsp;&nbsp;與管理人共同合作，爭取成立錦綉花園業主立案法團的選擇權。',
                  },
                ],
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The work of the Committee shall be advisory in nature.  The decisions of the Committee shall not in any way affect the operation of the terms of the Government Grant relating to the land in the Estate (“Government Grant”) and the DMC.  No member of the Committee shall advocate for contravening the terms of these documents, and no such activities will be reported or publicized by the Manager.'
                    : '委員會的工作為諮詢性質。在任何情況下，委員會的決議都不應該影響屋邨內有關政府批地契約條款及該公契的運作。委員會的任何成員均不得鼓吹違反該等契約內的條文，管理人可不作記錄或公佈該等活動。',
              },
            ]"
            :key="index"
          >
            <p style="display: flex">
              <span style="margin-right: 10px">2.{{ index + 1 }}</span
              >{{ item.text }}
            </p>
            <div v-if="item.children" style="padding: 0 20px; margin-left: 35px">
              <p
                v-for="(item2, index2) in item.children"
                :key="index2"
                style="text-indent: -28px"
              >
                {{ item2.text }}
              </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">3.</span
          ><span>{{
            fairview_park_lang === "en_us"
              ? "Composition of Management Advisory Committee"
              : "委員會的組成"
          }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title:
                fairview_park_lang === 'en_us' ? 'Selection of Officers' : '挑選幹事',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Officers of the Committee shall include a Chairman and a Deputy Chairman.  Officers shall be elected from amongst the representatives of the sections or sets of sections, provided that a representative who has been Chairman or Deputy Chairman for the two consecutive terms immediately preceding the election of Chairman or Deputy Chairman shall not be eligible to be elected as Chairman or Deputy Chairman.'
                      : '委員會幹事須包括主席和副主席各一名。委員會幹事須從地理分段或分段組別的代表中投票選出，但如地理分段代表在選舉主席或副主席前已連續兩屆出任主席或副主席，則沒有資格競選下屆主席或副主席。',
                  index: '1',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The election of the Chairman and the Deputy Chairman shall be conducted by separate voting.'
                      : '主席和副主席要分別經過投票選出。',
                  index: '2',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Manager shall assign a secretary to the meetings who shall keep a record of the persons present at the meetings and the proceedings thereof.'
                      : '管理人須委派一名秘書出席會議，記錄出席會議人士和會議過程。',
                  index: '3',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Members of Geographical Sections'
                  : '地理分段的候選人',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Sixteen (16) representatives shall be appointed, one from each of the following sections or sets of sections :'
                      : '十六名代表要從下列分段或分段組別中委任：',
                  index: '4',
                  children: [
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section A' : '● A段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section B' : '● B段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section C' : '● C段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section D' : '● D段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section E' : '● E段',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '● Section F and N'
                          : '● F段和N段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section G' : '● G段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section H' : '● H段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section I' : '● I段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section J' : '● J段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section K' : '● K段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section L' : '● L段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section M' : '● M段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? '● Section O' : '● O段',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '● Section P,Q and U'
                          : '● P段、Q段和U段',
                    },
                    {
                      text: fairview_park_lang === 'en_us' ? ' Town Centre' : '● 市中心',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'For the purpose of these Rules and Regulations, each of the above sections, or sets of sections as the case may be, shall be referred to as a Geographical Section.'
                          : '為了便於執行這些規章制度，上述分段或分段組別（視情況而定）應該被稱為地理分段。',
                    },
                  ],
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us' ? 'Eligible Candidates' : '候選人參選資格',
              children: [
                {
                  text: '',
                  index: '',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'A candidate must be 21 years of age or above and shall be an owner or the spouse of an owner (upon authorization of that owner and proof of legal relationship) in the Geographical Section.  Only one candidate shall be sent from each unit and he shall be nominated in writing by other owners of ten (10) units in the same Geographical Section in accordance with the Election Procedures set out in Appendix 1 to these Rules and Regulations.'
                          : '每名候選人必須年滿21歲或以上並為該地理分段單位業主或業主配偶（要獲得業主授權和提供法定夫妻關係的證明）。每個單位只可有一名候選人，而該候選人須按照本規章制度「選舉程序」(附錄一)，由該地理分段其他十個單位的業主作出提名。',
                      index: '3.4.1',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Existing committee members who wish to stand for re-election are exempted from the nomination requirements under paragraph 3.4.1.  However such exemption cannot be exercised for two consecutive terms of office.'
                          : '現任管理諮詢委員會成員，如欲參選連任，可獲豁免上述第3.4.1段的提名規定，惟是項豁免不可連續兩屆行使。',
                      index: '3.4.2',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Owner shall mean a person who at the close of business on the working day before the Election Day appears from the records of the Manager to be the owner of a residential unit or shop or other non-residential unit in the Estate.  A body corporate may also stand as a candidate in the name of the corporation.'
                          : '有關業主是指於選舉日前的一個工作天辦公時間結束時在管理人紀錄顯示，當其時為屋邨內住宅單位、店鋪或其他非住宅單位的業主。法人團體也可以公司的名義出任候選人',
                      index: '3.4.3',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The owner(s) of each unit shall be entitled to nominate only one candidate per unit to become a member of the Committee.  Multiple nominations from the same unit shall result in all nominations by that unit being void.'
                          : '每個單位的業主僅有權提名一名候選人，來自同一單位作多項提名將導致所有提名無效。',
                      index: '3.4.4',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The Manager shall make available Candidate Forms, Nomination Forms and Proxy Forms as set out in Appendices 2, 3, and 4 respectively along with the Election Procedures not less than 60 days before the Election Day.'
                          : '管理人須在選舉日前不少於六十天，準備妥當有關候選人表格、提名表格、委任代表授權書(附錄二、三及四)，及有關選舉程序。',
                      index: '3.4.5',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'A candidate shall register with the Manager for election not less than 40 days before the Election Day.  The Manager shall arrange for announcement of all candidates so registered and for preparation of Voting Forms.'
                          : '候選人要在選舉日前不少四十天向管理人登記。管理人須安排公佈所有的候選人名單，並準備投票表格。',
                      index: '3.4.6',
                    },
                  ],
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Elections' : '選舉',
              children: [
                {
                  text: '',
                  index: '',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Election shall be conducted in accordance with the Election Procedures.  Candidates, their campaign workers and their supporters shall comply with the MAC Election Activities Rules made by the Manager. In fairness to all Candidates, those who commit breaches of the MAC Election Activities Rules shall be automatically disqualified from being elected.'
                          : '選舉須依照有關選舉程序進行。任何候選人、其競選工作人員及其支持者必須遵守管理人所訂定的諮詢委員會選舉活動規則。為了公平對待所有候選人，違反諮詢委員會選舉活動規則的人會被自動取消其候選人資格。',
                      index: '3.4.7',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Each unit shall be entitled to one (1) vote for one (1) candidate in the Geographical Section. Voting by proxy may be done in according to the Election Procedures. Multiple proxies from the same unit shall result in all proxies from that unit being void.'
                          : '每個單位均享有一票權，選舉其所在地理分段的一名候選人。單位業主亦可根據有關選舉程序，以委任代表方式投票，但來自同一單位作多項委任將導致所有委任無效。',
                      index: '3.4.8',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The candidate with the highest number of votes in each Geographical Section shall be returned as the Representative of that Geographical Section.  In case more than one candidate obtain the same highest number of votes, all such candidates shall draw ballots to decide who shall be returned.  Where only one candidate for a Geographical Section is registered, that candidate shall be automatically elected.'
                          : '得票最多的地理分段候選人應被推舉為該段的代表。如有兩人或以上獲得最多同等票數，則要採取抽籤的辦法決定當選人。當一個地理分段只有一名候選人登記，則該候選人將自動當選。',
                      index: '3.4.9',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Should there be no candidate registered or qualified for registration for a Geographical Section, no representative for that Geographical Section shall be appointed until elected in the next Election or By-election.'
                          : '倘若一個地理分段沒有候選人登記，或沒有符合登記資格的候選人，則在下一屆選舉或補選以前該地理分段將不設立代表。',
                      index: '3.4.10',
                    },
                  ],
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'District Councilor' : '區議會議員',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The current District Councilor from the “Fairview Park Constituency” may be invited to become a member of the Committee provided that:'
                      : '「錦綉花園」選區的現任區議員，可被邀請成為委員會成員，唯受限於下列條件﹕',
                  index: '5',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The District Councilor is an owner or resident of the Estate and shall submit a copy of address proof to the Manager.'
                          : '區議員必須是本屋邨業主或住戶，並向管理人提交住址證明副本。',
                      index: '3.5.1',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'No invitation shall be issued to the District Councilor who, as a candidate had committed any breaches of the rules made by the Manager in respect of election activities for District Councilor Election for Fairview Park Constituency, unless such breaches are in the opinion of both of the Manager and the Committee not material and have not caused unfairness to other candidates.'
                          : ' 如該區議員作為「錦綉花園」選區候選人時，曾違反管理人訂定有關於「錦綉花園」選區區議會選舉活動的規則，該項邀請將不可被發出，除非管理人和委員會均認為該違反規則的行為不屬嚴重，及對其他候選人沒有做成不公平。',
                      index: '3.5.2',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The representatives of Geographical Sections of each new term shall at each term vote on whether to issue/reissue an invitation.'
                          : '每新一屆的地理分段代表們必須投票決定是否發出或重新發出該項邀請。',
                      index: '3.5.3',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Upon any change to the person of the District Councilor, the current representatives of Geographical Sections shall vote on whether to issue an invitation to the new District Councilor.'
                          : '當區議員出現更換時，現屆的地理分段代表們必須重新投票決定是否發出該項邀請。',
                      index: '3.5.4',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The District Councilor shall not be elected or act as Chairman, Deputy Chairman or officer.'
                          : '區議員不可出任主席、副主席或其他委員會幹事職位。',
                      index: '3.5.5',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The District Councilor shall have no voting rights at the meeting unless at the time of voting he/she is registered as an owner of a unit in the Estate.'
                          : '區議員在會議上沒有投票權，除非在投票時該區議員已登記為本屋邨單位的業主。',
                      index: '3.5.6',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The District Councilor shall hold office as a member of the Committee until the expiry of the current term of the Committee, subject to earlier termination in accordance with these Rules and Regulations.'
                          : '區議員的任期至該屆委員會屆滿或依本規章制度所訂較早終止為止。',
                      index: '3.5.7',
                    },
                  ],
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Terms of Office' : '任期',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Each member shall hold office until the expiry of the office of the Committee in accordance with Paragraph 3.9 below provided that such office shall be terminated before expiry in the following circumstances:'
                      : '除非因出現下列情況而要提前終止任期，否則每一名成員的任期屆滿日應按照3.9段規定：',
                  index: '6',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member ceases to be an owner of a unit in the Geographical Section which supported his appointment.'
                          : '代表該地理分段的成員不再是該地理分段中一個單位的業主。',
                      index: '3.6.1',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'In the case where the member who is a spouse of an owner, that owner ceases to be an owner of a unit in the Geographical Section which supported his appointment or that owner delivers to both the Chairman and the Manager a written revocation.'
                          : '如該代表為業主的配偶而出任，其配偶不再是該地理分段中一個單位的業主或該業主向主席以及管理人書面呈交撤銷授權。',
                      index: '3.6.2',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The District Councilor who has been invited to become a Committee Member'
                          : '被邀請成為委員會成員的區議員﹕',
                      index: '3.6.3',
                      chilren: [
                        {
                          text:
                            fairview_park_lang === 'en_us'
                              ? '(a)   ceases to be a District Councilor;'
                              : '(a)      停任為「錦綉花園」選區的區議員;',
                        },
                        {
                          text:
                            fairview_park_lang === 'en_us'
                              ? '(b)   ceases to be an owner or resident of the Estate; or'
                              : '(b)      不再是本屋邨的業主或住戶;或',
                        },
                        {
                          text:
                            fairview_park_lang === 'en_us'
                              ? '(c)   a resolution has been passed for early termination of the District Councilor as a Committee Member upon a motion of the Committee if such District Councilor has in the opinion of the Committee not provided assistance or performed duties in relation to the Estate affairs'
                              : '(c)      委員會認為該區議員不能協助或履行本屋邨事務內的功能或職責，並通過有關取消其成員資格的動議。',
                        },
                      ],
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member becomes bankrupt or insolvent or enters into a composition with his creditors or is convicted of a criminal offence other than a summary offence not involving his honesty or integrity.'
                          : '成員破產、無償債能力、與其債權人合併，或被判處刑事罪行　　（不涉及其誠信或正直的輕微罪行除外）。',
                      index: '3.6.4',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member becomes incapacitated by physical or mental illness and a resolution is passed by the Committee that such member should cease to hold office.'
                          : '成員因身體或精神疾病而喪失任職能力，經委員會議決通過解除該成員的職務。',
                      index: '3.6.5',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? ' The member has been absent for either three consecutive Committee meetings or whose attendance rate is less than 50% for the immediate past 12 months, whichever is the sooner.'
                          : '成員連續三次缺席會議或於過去十二個月會議的出席率少於50%（以先達者為準）。',
                      index: '3.6.6',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member who has been in long term default in paying management charges and the Manager has decided to terminate his membership.'
                          : '成員長期拖欠管理費，而管理人已作出決定終止其任期。',
                      index: '3.6.7',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member, who upon discovery and by determination of the Manager, has used his position in the Committee for his own purposes, commercial or political, or for any other advantages.'
                          : '管理人發現並確信委員會成員利用其委員會成員身份，以達到其個人目的，或進行任何商業、政治或對自身有利益的活動。',
                      index: '3.6.8',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member who advocates for contravening the terms of the Government Grant and the DMC provided that this paragraph shall not be applicable to any words spoken by the member during policy discussions at meetings of the Committee as described in paragraph 5.'
                          : '成員鼓吹違反政府批地契約及該公契內的條文，唯於第5段所指的會議上有關政策討論的言論則不作此限。',
                      index: '3.6.9',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'The member resigns his office by notice in writing which shall be delivered both to the Chairman and the Manager.'
                          : '成員書面向主席以及管理人呈遞請辭。',
                      index: '3.6.10',
                    },
                  ],
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Vacancies of representatives from Geographical Sections arising out of any reason above before expiry may be filled by a By-election conducted in the same manner of the appointment of representatives set out in paragraphs 3.4.7 to 3.4.10 provided that :'
                      : '任期屆滿前因以上原因而出現的空缺，都可依3.4.7至3.4.10段所述的選舉方式由補選選出的代表填補，但',
                  index: '7',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '●  No By-election shall be conducted unless the total number of vacancies exceeds three (3) vacancies; and'
                          : '●  如空缺名額不超過三人，則不須舉行補選；及',
                      index: '',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '●  No By-election shall be conducted if the term of office of the new Committee member so elected is less than six (6) months.'
                          : '● 如補選中選出的新成員的任期不超過六個月，則不須舉行補選。',
                      index: '',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'Any appointee elected in a By-election shall hold office from the date after his election until the expiry of the original term of the existing Committee.'
                          : '補選中選出的新成員從被選出後之翌日起任職，直到現任委員會的原來任期屆滿為止。',
                      index: '',
                    },
                  ],
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'A member of the Committee who ceases to be a member of the Committee or retires from office and does not seek re-appointment to the Committee shall, within 14 days of his ceasing to be a member or of his retirement as the case may be, hand over to the Chairman or his delegate any books or records of account, papers, documents and other records in respect of the control, management and administration of the Committee together with any movable property belonging to the Committee that are under his control or in his custody or possession.'
                      : '停任或退職且不尋求再委任的成員，須在其停任或退職（視屬何情況而定）後的14天內，將在其控制下或在其保管或管有下的與委員會的控制、管理及行政事宜有關的任何帳簿、帳項紀錄、文據、文件及其他紀錄，連同屬於委員會的任何動產，移交主席或其代表。',
                  index: '8',
                },
              ],
            },
            {
              title:
                fairview_park_lang === 'en_us'
                  ? 'Term of Office of the Committee'
                  : '委員會任期',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The term of office of a Committee shall last for 24 months (subject to earlier dissolution in the event of the formation of Incorporated Owners of the Estate).  The first date of office of a term shall be called Commencement Date.  The Commencement Date of the first Committee shall be the first day of the month after the date of the first election and the term of the first Committee shall expire at the end of 24 months from the Commencement Date.  The Commencement Date of subsequent term of Committees shall be the first day of the second month after an election.'
                      : '每屆委員會的任期是二十四個月（如果成立業主立案法團，委員會將會提前解散）。任期的第一天應稱為起始日。第一屆委員會的起始日應該是第一次選舉日後緊接著的那個月的第一天，第一屆委員會的任期應該從起始日起計，到第二十四個月的最後一天結束。委員會以後的任期則應該從選舉後第二個月的第一天開始。',
                  index: '9',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The first election of members of the Committee shall take place on 7th October 2001.  Subsequent elections shall take place within the 23rd month after the Commencement Date of each term of office.  The Manager of the Estate shall arrange for Candidate Forms and Election Procedures to be distributed.'
                      : '委員會第一屆選舉應該在二零零一年十月七日舉行。接下來的選舉應該在每屆任期起始日後的第二十三個月內進行。屋邨管理人應該安排派發候選人表格和選舉程序單張。',
                  index: '10',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">3.{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">4.</span
          ><span>{{
            fairview_park_lang === "en_us" ? "Sub-committees" : "分組委員會"
          }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title: '',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Committee shall decide whether to establish any Sub-Committees at the first meeting.  For the avoidance of doubt, all Sub-Committee in previous terms shall be dissolved and no new Sub-Committee can be established during the term.'
                      : '  為免產生疑問，任何前屆所成立的分組委員會將會被解散，委員會須在現屆第一次會議上決定是否成立任何分組委員會，否則，其後不可成立任何分組委員會。',
                  index: '1',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Sub-Committee can only make recommendation to the Committee for discussion and/or consideration.'
                      : '分組委員會只有權提出建議，並須把有關建議提交委員會作討論及考慮。',
                  index: '2',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">4.{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">5.</span
          ><span>{{ fairview_park_lang === "en_us" ? "Meetings" : "會議" }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title:
                fairview_park_lang === 'en_us' ? 'Frequency of Meetings' : '會議次數',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Committee shall meet once every 2 months or as agreed upon by the Chairman and the Manager. '
                      : '委員會須每隔兩個月舉行一次會議，或在主席及管理人的同意下而召開會議。',
                  index: '1',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Quorum' : '法定人數',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? ' The quorum for the meeting of the Committee shall be 50% of the members with voting right of the Committee (rounded up to the nearest whole number).  Where a quorum is not present, the Committee shall still proceed to discussion of matters on the Agenda provided that no decision shall be made until a quorum is present.'
                      : '委員會會議的法定人數須為當屆委員會有權投票的成員總人數的50%（計至最接近整數）。在未達到法定人數之前，會議仍可進行討論議程上事項，但不能作出議決。',
                  index: '2',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Voting' : '投票',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Matters on the Agenda (each item of which has been properly notified to all members in accordance with paragraph 5.9 so that they may decide whether to attend and vote) of a meeting of the Committee at which a quorum is present shall be decided by a majority of votes of the Committee members present.'
                      : '當達到法定人數，於議程上的事項 (每一項事項均必須根據5.9段，妥善地通知所有成員，以便成員能自行決定是否出席會議及作出投票)須由出席委員會會議的成員，以多數票決定。',
                  index: '3',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Each member with voting right present shall have one (1) vote on a question before the Committee.  In case of equality of votes, the Chairman shall have, in addition to a deliberative vote, a casting vote.'
                      : '出席的每名有權投票的成員就委員會席前的每項問題均有一票。如出現贊成票和反對票相等的情況，主席除原有的普通票一票外，另有決定性的一票。',
                  index: '4',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Where certain aspects of a matter shall primarily affect a minority of sections, no vote shall be taken on the matter without first the consent of the majority of the representatives of the minority sections so affected.  For the purpose of this sub-clause, a matter which has effect on seven (7) Geographical Sections or less shall be deemed to be a matter which affects a minority of sections.  If a Geographical Section is not represented by a member, a survey shall be taken, the majority of the returns shall count as one (1) vote.'
                      : '當會議討論事項的某些方面將主要影響少數地理分段時，在未取得該等地理分段代表的過半數的同意前不可進行表決。為本條款的目的，對七個或以下地理分段有影響的事項應被視為影響少數地理分段的事項。如其中有地理分段未有成員代表則須進行民意調查，大多數票的意見將計作一票。',
                  index: '5',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Corporate Member' : '法人團體成員',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'A Committee member which is a body corporate shall appoint a duly authorized representative to attend and vote at a meeting of the Committee.  Paragraphs 3.6.4, 3.6.5, 3.6.8 and 3.6.9 of these Rules and Regulations shall also apply to the authorized representative as if such representative were a member and his authority shall be deemed to be automatically revoked in such circumstances.'
                      : '如委員會成員為法人團體，須委任獲得其授權的代表出席會議，並在會議上有權表決。本規章制度第3.6.4、 3.6.5、3.6.8及3.6.9段均適用於該獲授權代表，猶如該獲授權代表作為委員會成員一樣，在該情況下，其委任將自動撤銷。',
                  index: '6',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? ' If an authorized representative ceases to be authorized representative in the circumstances under paragraphs 3.6.4, 3.6.5, 3.6.8 and 3.6.9 the body corporate may appoint another authorized representative in his place.'
                      : '如獲授權代表在根據第3.6.4、 3.6.5、3.6.8及3.6.9段所述之情況下停任授權代表，則該法人團體可委任另一獲授權代表以取代他。',
                  index: '7',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'An appointment may be for a period of time but shall be automatically revoked when a new appointment is received by both the Chairman and the Manager.'
                      : '此等委任可訂立委任之時段，但在主席和管理人收到新的委任書時，之前的委任將自動撤銷。',
                  index: '8',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Notice' : '通告',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Notice of meeting of the Committee specifying the date, time and place of the meeting along with the Agenda items shall be given to all Committee members at least ten (10) days before such meeting PROVIDED that in case of emergency,  such notice may be shortened if all the following conditions are satisfied:'
                      : '載有會議舉行時間、地點和議程項目的通告，必須在會議召開前十天向全體成員發出。倘若屬緊急會議，如符合下列條件，可縮短通告期﹕',
                  index: '9',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'all Committee members have been informed by the Manager of the date, time and place of the meeting as well as full proposed Agenda  items; and'
                          : '全體成員已獲管理人通知會議舉行的時間、地點和所有擬議的議程項目；及',
                      index: '5.9.1',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? 'not less than 65% of all Committee members agree to the shortening of such notice.'
                          : '不少於65%的成員同意縮短通告期。',
                      index: '5.9.2',
                    },
                  ],
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Notice to a Committee member shall be deemed to be given if the same is sent by post addressed to the member of the Committee at his last known address according to the Manager’s records; or by fax; or by leaving the notice at the Committee member’s unit.'
                      : '如果管理人依據其記錄就委員會成員最後為其所知的地址郵寄給委員會成員、或傳真、或以專人將通告傳遞至成員的單位，應視為已向委員會成員發出通告。',
                  index: '10',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Listeners' : '旁聽人士',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Owners of Fairview Park who are not Committee members may attend meetings of the Committee as listeners on a “first come-first served” basis.  The number of such owners at each meeting shall be not more than five (5) attendees and they shall deliver their notice of intention to attend to both the Chairman and Manager not less than 24 hours before the meeting.  For the avoidance of doubt, such owners shall have no right to address the meeting nor take part in any voting.'
                      : '非委員會成員的錦綉花園業主可以先到先得的方式列席旁聽委員會會議。每次參加會議的這些業主人數以不超過五人為限，並且這些業主最少於開會前二十四小時向主席及管理人提交出席會議的意向通知書。為免產生疑問，這些業主在會上沒有發言權或表決權。',
                  index: '11',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Residents Forum' : '居民研討會',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? ' The Committee shall decide whether to organize one open forum for residents of Fairview Park during each term of office.'
                      : '在每屆任期內，委員會須決定是否要為錦綉花園的居民組織一個公開論壇。',
                  index: '12',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">5.{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">6.</span
          ><span>{{
            fairview_park_lang === "en_us"
              ? "Standing Orders of Meetings"
              : "會議的議事細則"
          }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title: fairview_park_lang === 'en_us' ? 'Order of Business' : '議事程序',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The order of business at any meeting of the Committee shall be :'
                      : '任何委員會會議的議事程序應該是：',
                  index: '1',
                  children: [
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '●   to approve as a correct record the minutes of the last meeting;'
                          : '● 通過上次會議記錄；',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '●   to deal with matters arising from minutes of the previous meeting;'
                          : '● 續議事項；',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '●   to discuss and/or vote on the items on the Agenda;'
                          : '● 就議程項目作出討論及/或投票；',
                    },
                    {
                      text:
                        fairview_park_lang === 'en_us'
                          ? '●   any other business (for discussion only, with no voting permitted).'
                          : '● 任何其他事務 (只可作出討論，不能進行投票)。',
                    },
                  ],
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Agenda' : '討論議程',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'If any member is desirous of putting on the Agenda of a meeting an item for discussion, he should notify both the Chairman and the Manager in writing at least three (3) working days before the notice of meeting is due for distribution.'
                      : '任何成員如果想在議程上加入討論事項，他須在應發出會議通告前至少三個工作天以書面通知主席及管理人。',
                  index: '2',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Before the meeting, the Chairman shall decide on the Agenda of the meeting after consultation with the Committee members and the Manager.'
                      : '委員會主席與委員會成員和管理人協商後，在開會前確定每次會議的議程。',
                  index: '3',
                },
              ],
            },
            {
              title: fairview_park_lang === 'en_us' ? 'Conduct of Members' : '成員操守',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Chairman of the Committee shall be responsible for the observance of order in meetings of the Committee and his ruling on any point of order shall not be open to discussion.  If any member or person attending a meeting of the Committee misconducts himself by persistently disregarding the rulings of the Chairman, the Chairman may order that member or person to leave the meeting.'
                      : '委員會主席要負責監察委員會會議的秩序，任何一項由主席作出有關秩序規則的裁決，都不得公開討論。如有出席會議的成員或人士因持續漠視主席的裁決而行為不當，主席可以命令這名成員或人士離開會場。',
                  index: '4',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'While speaking at a meeting, a member shall direct his comments or speech to the subject under discussion and shall not make reference to any individual case or matters of a purely personal nature.'
                      : '成員在會上發言時要針對討論中的主題提出意見，而不應該涉及純屬私人性質的個別個案或事宜。',
                  index: '5',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Where any member has a conflict of interest in any matter in discussion or to be put to vote, such member shall declare his interest at the earliest opportunity before discussion and abstain from voting. Such member or any party connected to him shall not participate in any matters related to tenders, projects, or provision of services or supplies to Fairview Park.'
                      : '如果任何成員在討論或投票的任何事項中有利益衝突，則該成員須在討論前儘早申報其利益及放棄投票。該成員或與其有關的任何一方，均不得參與任何錦綉花園的招標、工程或提供服務或供應等之一切有關事宜。',
                  index: '6',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">6.{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">7.</span
          ><span>{{
            fairview_park_lang === "en_us" ? "Records and Minutes" : "記錄和會議紀錄"
          }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title: '',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Chairman shall arrange for records of appointment of members of the Committee to be kept. '
                      : '主席要將委員會成員委任紀錄妥善保存。',
                  index: '1',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The secretary assigned by the Manager shall take minutes of the proceedings at every meeting of the Committee provided that the Manager may solely decide not to record in such minutes any matters relating to advocacy for contravening the terms of the Government Grant or the DMC, or any combative or contentious words against any party.'
                      : '委員會每次開會，須由管理人委派的一名秘書記錄有關會議的過程，但管理人有權單獨決定不在會議記錄中記錄任何鼓吹違反政府批地契約條款或公契條文有關的事項， 或對任何一方的任何帶有攻擊性或引發爭議性的言論。',
                  index: '2',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The minutes shall be certified by both the Chairman and the Manager as containing a true record of the proceedings of the meeting of the Committee.  The minutes so certified shall become an official record and the original of which shall be kept by the Committee.'
                      : '會議紀錄須由主席和管理人雙方核證其為委員會會議過程的真實紀錄。會議紀錄經核證後便成為正式紀錄，而委員會要將會議紀錄正本作好保存。',
                  index: '3',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'A copy of the certified minutes shall be kept at the Management Office and open for inspection of owners within 7 days after the date of certification.  An owner shall also be entitled to extracts or copies of such minutes on payment of reasonable charges.'
                      : '經核證的會議紀錄副本要保存在管理處並在核證的七天內給業主查閱。業主有權摘錄或影印這些會議紀錄但須支付合理費用。',
                  index: '4',
                },
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Manager shall arrange for minutes of meetings of the Committee to be posted on Management notice boards within 7 days after they were certified in accordance with paragraph 7.3.'
                      : '管理人須將按照第7.3段核證的會議紀錄於核證後七天內，在管理告示牌上公佈。',
                  index: '5',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">7.{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">8.</span
          ><span>{{
            fairview_park_lang === "en_us"
              ? "Acts of the Committee or Sub-Committees"
              : "委員會或分組委員會的行為"
          }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title: '',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Committee and any Sub-Committees formed thereunder are advisory in nature.  The Committee and the Manager are independent of each other and neither party shall be responsible for any acts or omissions of the other.'
                      : '委員會及其分組委員會純屬諮詢性質。委員會和管理人彼此獨立，雙方都無須為對方的行為或疏忽而承擔任何責任。',
                  index: '',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">9.</span
          ><span>{{ fairview_park_lang === "en_us" ? "Amendments" : "修訂" }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title: '',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'These Rules and Regulations and any procedures made pursuant thereto may only be revised under compelling circumstances as jointly agreed by the Committee and the Manager.'
                      : '在必要情況並經委員會和管理人雙方同意，本規章制度和根據規章制度制訂的任何程序才可進行修訂。',
                  index: '',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p>
          <span style="margin-right: 10px">10.</span
          ><span>{{
            fairview_park_lang === "en_us" ? "Dissolution of the Committee" : "委員會解散"
          }}</span>
        </p>
        <div
          v-for="(item, index) in [
            {
              title: '',
              children: [
                {
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'The Committee shall be dissolved upon the formation of Incorporated Owners of the Estate.'
                      : '當業主立案法團成立後，委員會便須解散。',
                  index: '',
                },
              ],
            },
          ]"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px">{{ item2.index }}</span
                >{{ item2.text }}
              </p>
              <div v-if="item2.children" style="padding: 0 20px">
                <p
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  style="display: flex"
                >
                  <span style="margin-right: 10px" v-if="item3.index">{{
                    item3.index
                  }}</span
                  >{{ item3.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    onMounted(async () => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style></style>
